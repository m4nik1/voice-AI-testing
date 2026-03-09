import { useState } from "react";
import { Orb } from "@/components/ui/orb";

export default function Home() {
  const [agentState, setAgentState] = useState<
    "thinking" | "listening" | "talking" | null
  >(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Orb volumeMode="manual" />
    </div>
  );
}
