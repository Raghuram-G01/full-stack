# AI-Powered Proctored Assessment System

## Architecture

### Components
- **AssessmentPage.tsx** - Main assessment interface with proctoring
- **ProctoringCamera.tsx** - AI face detection using MediaPipe
- **WarningModal.tsx** - Warning and block notifications
- **Watermark.tsx** - Student name + timestamp overlay

### Hooks
- **useSecurityMonitor.ts** - Detects violations (ESC, tab switch, copy/paste, DevTools)

### Context
- **ProctoringContext.tsx** - Global state for warnings and violations

## Security Features

### 1. Camera Proctoring
- MediaPipe Face Detection
- Detects: no face, multiple faces, looking away
- 5-second timer for no face detection
- Live camera feed with status indicator

### 2. Security Monitoring
- ESC key detection
- Tab switching (visibilitychange)
- Right-click disabled
- Copy/Cut/Paste blocked
- PrintScreen detection
- DevTools detection
- Fullscreen exit detection

### 3. Anti-Cheating UI
- Text selection disabled
- Screen blur on tab switch
- Watermark overlay
- 3 warning system
- Auto-submit on block

### 4. Behavior Tracking
- Logs all violations with timestamps
- Stores in state and localStorage
- Simulates API calls

## Usage

```tsx
import { ProctoringProvider } from './context/ProctoringContext';
import TakeAssessment from './pages/TakeAssessment';

<ProctoringProvider>
  <TakeAssessment />
</ProctoringProvider>
```

## Violation Flow
1. Violation detected → Warning counter +1
2. Warning displayed (1/3, 2/3, 3/3)
3. After 3 warnings → Assessment blocked
4. Auto-submit with 0 score
5. Block modal displayed

## Production Ready
- TypeScript for type safety
- Clean component structure
- Context API for state management
- Tailwind CSS styling
- Comprehensive error handling
