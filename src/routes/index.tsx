import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Orb } from '#/components/ui/orb'

export const Route = createFileRoute('/')({ component: App })

type OrbDemoState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'asleep'

const states: OrbDemoState[] = [
  'idle',
  'listening',
  'thinking',
  'speaking',
  'asleep',
]

const variants = [
  'obsidian',
  'mana',
  'opal',
  'halo',
  'glint',
  'command',
] as const

const variantColors: Record<(typeof variants)[number], [string, string]> = {
  obsidian: ['#d5ddff', '#8b95be'],
  mana: ['#7fd8ff', '#4aa1d8'],
  opal: ['#ffeecf', '#e1c1a6'],
  halo: ['#d7f5ff', '#8fd8e5'],
  glint: ['#d5f3df', '#86d2a8'],
  command: ['#ffd5db', '#d48f9a'],
}

const getAgentState = (state: OrbDemoState) => {
  switch (state) {
    case 'listening':
      return 'listening' as const
    case 'thinking':
      return 'thinking' as const
    case 'speaking':
      return 'talking' as const
    default:
      return null
  }
}

const getVolumes = (state: OrbDemoState, isAnimationEnabled: boolean) => {
  if (!isAnimationEnabled) {
    return { input: 0, output: 0 }
  }

  switch (state) {
    case 'listening':
      return { input: 0.7, output: 0.35 }
    case 'thinking':
      return { input: 0.35, output: 0.35 }
    case 'speaking':
      return { input: 0.55, output: 0.75 }
    case 'asleep':
      return { input: 0.05, output: 0.05 }
    default:
      return { input: 0.2, output: 0.2 }
  }
}

function App() {
  const [currentState, setState] = useState<OrbDemoState>('idle')
  const [variant, setVariant] = useState<(typeof variants)[number]>('obsidian')
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false)
  const agentState = getAgentState(currentState)
  const volumes = getVolumes(currentState, isAnimationEnabled)
  const isAsleep = currentState === 'asleep'

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-start">
        {/* Title */}
        <div className="md:col-span-2 text-center">
          <p className="mb-1 text-xs font-medium tracking-widest uppercase text-[#888]">
            Voice AI Testing
          </p>
          <h1 className="text-2xl font-semibold text-white">ElevenLabs Orb</h1>
        </div>

        {/* Orb visual */}
        <div className="flex flex-col items-center rounded-2xl border border-[#222] bg-[#0a0a0a] p-6">
          <div
            className={`flex h-64 w-64 items-center justify-center rounded-full border border-[#222] bg-black transition-all duration-500 ${
              isAsleep
                ? 'scale-[0.97] opacity-35 blur-[2px] saturate-50'
                : 'opacity-100 blur-0 saturate-100'
            }`}
          >
            <Orb
              className="size-56"
              colors={variantColors[variant]}
              agentState={agentState}
              volumeMode="manual"
              manualInput={volumes.input}
              manualOutput={volumes.output}
            />
          </div>
          <span className="mt-4 rounded-full border border-[#333] bg-[#111] px-3 py-1 font-mono text-xs text-[#888]">
            {currentState}
          </span>
        </div>

        <div className="space-y-4 rounded-2xl border border-[#222] bg-[#0a0a0a] p-5">
          {/* State toggles */}
          <div>
            <p className="mb-2 text-xs font-medium text-[#666]">Animation</p>
            <button
              type="button"
              onClick={() => setIsAnimationEnabled((enabled) => !enabled)}
              className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                isAnimationEnabled
                  ? 'border-white bg-white text-black'
                  : 'border-[#333] bg-transparent text-[#888] hover:border-[#555] hover:text-white'
              }`}
            >
              {isAnimationEnabled ? 'Disable animation' : 'Enable animation'}
            </button>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium text-[#666]">State</p>
            <div className="flex flex-wrap gap-1.5">
              {states.map((state) => (
                <button
                  key={state}
                  type="button"
                  onClick={() => setState(state)}
                  className={`rounded-md border px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                    state === currentState
                      ? 'border-white bg-white text-black'
                      : 'border-[#333] bg-transparent text-[#888] hover:border-[#555] hover:text-white'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {/* Variant selector */}
          <div>
            <p className="mb-2 text-xs font-medium text-[#666]">Variant</p>
            <div className="flex flex-wrap gap-1.5">
              {variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`rounded-md border px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                    v === variant
                      ? 'border-white bg-white text-black'
                      : 'border-[#333] bg-transparent text-[#888] hover:border-[#555] hover:text-white'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
