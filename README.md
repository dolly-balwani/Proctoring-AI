# ProctorAI

> **5-channel AI behavioral analysis platform for fair online exams.**

An intelligent proctoring system that monitors face, gaze, head pose, audio, and browser interactions in real-time — all running client-side. No cloud uploads. No browser lockdowns. Just truth.

---

## 🧠 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js 15 (App Router)               │
├──────────────────────┬──────────────────────────────────┤
│   Client-Side AI     │         Server-Side              │
│                      │                                  │
│  ┌───────────────┐   │   ┌──────────────────────┐      │
│  │ face-api.js   │   │   │  REST API Routes     │      │
│  │ (TensorFlow)  │   │   │  /api/exams          │      │
│  ├───────────────┤   │   │  /api/sessions       │      │
│  │ Signal Fusion │   │   │  /api/violations     │      │
│  │ Engine        │   │   │  /api/reports        │      │
│  ├───────────────┤   │   ├──────────────────────┤      │
│  │ Event Bus     │   │   │  MongoDB Atlas       │      │
│  └───────────────┘   │   │  (Mongoose 9)        │      │
│                      │   ├──────────────────────┤      │
│  ┌───────────────┐   │   │  Firebase Auth       │      │
│  │ 5 Channels:   │   │   │  (Google Sign-In)    │      │
│  │ • Face        │   │   └──────────────────────┘      │
│  │ • Gaze        │   │                                  │
│  │ • Head Pose   │   │                                  │
│  │ • Audio FFT   │   │                                  │
│  │ • Interaction │   │                                  │
│  └───────────────┘   │                                  │
└──────────────────────┴──────────────────────────────────┘
```

## ⚡ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15, React 19, TypeScript |
| Auth | Firebase Auth (Google Sign-In) |
| Database | MongoDB Atlas (Mongoose 9) |
| AI/ML | TensorFlow.js, face-api.js |
| Styling | Tailwind CSS, Framer Motion |
| Icons | Lucide React |

## 🔬 5-Channel Behavioral Analysis

| Channel | Weight | Technology | What it detects |
|---------|--------|-----------|----------------|
| `FACE_DETECT` | 0.25 | SSD MobileNet | No face, multiple faces |
| `GAZE_TRACK` | 0.25 | 68-point landmarks | Eye deviation from screen |
| `HEAD_POSE` | 0.20 | Euler angles | Head rotation >30° |
| `AUDIO_FFT` | 0.15 | Web Audio API | Speech in 300-3400Hz band |
| `INPUT_MON` | 0.15 | Browser events | Tab switches, clipboard, idle |

### Signal Fusion Engine
```
5 channels → Weighted combination → 5s sliding window → ≥2 channel correlation → Flag or Ignore
```

### False Positive Defense
1. **Intelligent Thresholds** — Brief glances (<2s) ignored. Only sustained anomalies flagged.
2. **Multi-Signal Correlation** — ≥2 channels must agree. Gaze off alone ≠ cheating.
3. **Human Review Queue** — Every flag goes to admin with 10s evidence window + channel scores.
4. **Per-Student Calibration** — 30s baseline sampling adjusts for lighting, noise, and face position.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Firebase project with Google Sign-In enabled

### Setup

```bash
# Clone
git clone https://github.com/vedishchawla/proctorAI.git
cd proctorAI

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your Firebase + MongoDB credentials

# Download face-api.js model weights
cd public/models
curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/ssd_mobilenetv1_model-weights_manifest.json
curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/ssd_mobilenetv1_model-shard1
curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/ssd_mobilenetv1_model-shard2
curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/face_landmark_68_model-weights_manifest.json
curl -O https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/face_landmark_68_model-shard1
cd ../..

# Run
npm run dev
```

### Environment Variables

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# MongoDB
MONGODB_URI=mongodb+srv://...

# Socket.IO
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing — terminal boot, particle constellation
│   ├── login/page.tsx        # Auth — Google Sign-In + role selection
│   ├── exam/
│   │   ├── page.tsx          # Exam list
│   │   └── [id]/page.tsx     # Exam interface (webcam + questions + HUD)
│   ├── dashboard/
│   │   ├── layout.tsx        # Admin sidebar + topbar
│   │   └── page.tsx          # Live monitoring + incidents
│   └── api/
│       ├── auth/setup/       # User sync
│       ├── exams/            # CRUD
│       ├── sessions/         # CRUD
│       ├── violations/       # CRUD
│       └── reports/          # Analytics
├── lib/
│   ├── ai/
│   │   ├── eventBus.ts       # PubSub communication
│   │   ├── faceDetection.ts  # Channel 1: Face presence
│   │   ├── gazeEstimation.ts # Channel 2: Eye tracking
│   │   ├── headPoseEstimation.ts # Channel 3: Head rotation
│   │   ├── audioAnalysis.ts  # Channel 4: Speech detection
│   │   ├── interactionMonitor.ts # Channel 5: Browser events
│   │   ├── signalFusion.ts   # Weighted fusion engine
│   │   ├── calibration.ts    # 30s baseline sampling
│   │   └── pipeline.ts       # Orchestrator (2fps loop)
│   ├── firebase.ts           # Firebase singleton
│   ├── mongodb.ts            # MongoDB connection pool
│   └── auth.tsx              # AuthProvider + useAuth hook
├── models/                   # Mongoose schemas
│   ├── User.ts
│   ├── Exam.ts
│   ├── Session.ts
│   └── Violation.ts
└── types/index.ts            # Complete type system
```

## 🆚 How We're Different

| Feature | Proctorio / ExamSoft | ProctorAI |
|---------|---------------------|-----------|
| Signal approach | Siloed | 5-channel fusion |
| Browser control | Hard lockdown | Soft monitoring |
| Privacy | Cloud upload | **Browser-side AI** |
| False positives | High | Low (multi-signal) |
| Human review | Manual | Auto-queued + evidence |
| Bias mitigation | Known issues | Calibrated per-student |

## 📄 License

MIT

---

Built by [Vedish Chawla](https://github.com/vedishchawla)
