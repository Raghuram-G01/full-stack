import { useEffect, useRef, useState } from 'react';
import { FaceDetection } from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import { useProctoring } from '../context/ProctoringContext';

interface ProctoringCameraProps {
  isActive: boolean;
}

export const ProctoringCamera = ({ isActive }: ProctoringCameraProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { addViolation } = useProctoring();
  const [faceStatus, setFaceStatus] = useState<string>('Detecting...');
  const noFaceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isActive || !videoRef.current) return;

    let camera: Camera;
    const faceDetection = new FaceDetection({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`
    });

    faceDetection.setOptions({
      model: 'short',
      minDetectionConfidence: 0.5
    });

    faceDetection.onResults((results) => {
      if (!results.detections || results.detections.length === 0) {
        setFaceStatus('No face detected');
        
        // Start timer if no face detected
        if (!noFaceTimerRef.current) {
          noFaceTimerRef.current = setTimeout(() => {
            addViolation('No face detected for 5 seconds');
          }, 5000);
        }
      } else if (results.detections.length > 1) {
        setFaceStatus('Multiple faces detected');
        addViolation('Multiple faces detected');
        if (noFaceTimerRef.current) {
          clearTimeout(noFaceTimerRef.current);
          noFaceTimerRef.current = null;
        }
      } else {
        setFaceStatus('Face detected');
        // Clear timer if face is detected
        if (noFaceTimerRef.current) {
          clearTimeout(noFaceTimerRef.current);
          noFaceTimerRef.current = null;
        }

        // Check head pose (simplified - checking face position)
        const detection = results.detections[0];
        const bbox = detection.boundingBox;
        if (bbox) {
          const centerX = bbox.xCenter;
          // If face is too far left or right (looking away)
          if (centerX < 0.3 || centerX > 0.7) {
            addViolation('Looking away from screen');
          }
        }
      }

      // Draw on canvas
      if (canvasRef.current && results.image) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          canvasRef.current.width = results.image.width;
          canvasRef.current.height = results.image.height;
          ctx.drawImage(results.image, 0, 0);
        }
      }
    });

    if (videoRef.current) {
      camera = new Camera(videoRef.current, {
        onFrame: async () => {
          if (videoRef.current) {
            await faceDetection.send({ image: videoRef.current });
          }
        },
        width: 640,
        height: 480
      });
      camera.start();
    }

    return () => {
      if (camera) camera.stop();
      if (noFaceTimerRef.current) clearTimeout(noFaceTimerRef.current);
    };
  }, [isActive, addViolation]);

  if (!isActive) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-48 h-36 rounded-lg border-2 border-red-500 object-cover"
          autoPlay
          muted
        />
        <canvas ref={canvasRef} className="hidden" />
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs py-1 text-center rounded-t-lg">
          🔴 Recording
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs py-1 text-center rounded-b-lg">
          {faceStatus}
        </div>
      </div>
    </div>
  );
};
