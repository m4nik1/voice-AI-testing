import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Persona } from '#/components/ai-elements/persona'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [currentState, setState] = useState<PersonaState>("idle")
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="island-shell flex items-center gap-3 rounded-full px-2 py-1.5 pr-4">
            <Persona state={currentState} variant="obsidian" className="size-12" />
            <div>
              <p className="m-0 text-xs font-semibold tracking-[0.14em] text-[var(--sea-ink-soft)] uppercase">
                Persona
              </p>
              <p className="m-0 text-sm font-semibold text-[var(--sea-ink)] capitalize">
                {personaState}
              </p>
            </div>
          </div>
        </div>
      </section>
   </main>
  )
}
