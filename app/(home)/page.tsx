"use client";
import { AgentState, BarVisualizer } from "@/components/ui/bar-visualizer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [agentState, setAgentState] = useState<AgentState>("initializing");

  function activateAI() {
    console.log("pressed button!");
    setAgentState("listening");

    setTimeout(() => {
      setAgentState("thinking");
    }, 3000);

    setAgentState("listening");
    setAgentState("speaking");
    setAgentState("listening");
  }

  useEffect(() => {
    console.log(agentState);
  }, [agentState]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <div className="flex w-full max-w-xl flex-col items-center gap-6">
        <BarVisualizer
          state={agentState}
          barCount={15}
          centerAlign={true}
          className="w-full"
        />
        <Button className="cursor-pointer" onClick={() => activateAI()}>
          Start
        </Button>
      </div>
    </div>
  );
}
