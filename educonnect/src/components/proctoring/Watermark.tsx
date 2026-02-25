interface WatermarkProps {
  studentName: string;
}

export const Watermark = ({ studentName }: WatermarkProps) => {
  const timestamp = new Date().toLocaleString();

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-full text-center text-gray-500 text-sm py-8 transform rotate-[-45deg]">
            {studentName} | {timestamp}
          </div>
        ))}
      </div>
    </div>
  );
};
