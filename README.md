# Voice AI Testing

TanStack Router + React + Tailwind CSS starter built with Bun.

## Run locally

```bash
bun install
bun --bun run dev
```

App runs on `http://localhost:3000`.

## Environment setup

1. Copy `.env.example` to `.env`
2. Fill in your voice provider values:

```bash
VITE_VOICE_API_BASE_URL=
VITE_VOICE_AGENT_ID=
VITE_VOICE_API_KEY=
```

The starter UI includes:
- microphone permission check
- start/stop capture controls
- Vercel AI Elements `Persona` animation (`src/components/ai-elements/persona.tsx`)
- prompt simulation form
- transcript and assistant output panels
- lightweight event log for test runs

## Build and quality checks

```bash
bun --bun run build
bun --bun run lint
bun --bun run test
```
