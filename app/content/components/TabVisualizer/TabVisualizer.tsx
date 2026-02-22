"use client";

import { useMemo } from "react";
import { TabVisualizerHeader } from "./components/TabVisualizerHeader";
import { TabVisualizerNote } from "./components/TabVisualizerNote";
import { TabVisualizerChordName } from "./components/TabVisualizerChordName";

interface TabVisualizerProps {
  notes: string[];
  title?: string;
  maxNotesPerLine?: number;
  barlineEvery?: number | null;
}

const STRINGS = ["e", "B", "G", "D", "A", "E"];
const STRING_MAP: Record<string, string> = {
  "1": "e",
  "2": "B",
  "3": "G",
  "4": "D",
  "5": "A",
  "6": "E",
};

export const TabVisualizer = ({
  notes,
  title = "Lick",
  maxNotesPerLine = 12,
  barlineEvery = 4,
}: TabVisualizerProps) => {
  const allSystems = useMemo(() => {
    const timeline: Record<
      string,
      { val: string; tech: string | null; chordName?: string | null }[]
    > = { e: [], B: [], G: [], D: [], A: [], E: [] };

    notes.forEach((block) => {
      block
        .trim()
        .split("\n")
        .forEach((line) => {
          const trimmed = line.trim();

          if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
            let content = trimmed.slice(1, -1).trim();
            let cName = null;

            if (content.includes("|")) {
              const parts = content.split("|");
              content = parts[0].trim();
              cName = parts[1].trim();
            }

            STRINGS.forEach((s) =>
              timeline[s].push({
                val: "-",
                tech: null,
                chordName: s === "e" ? cName : null,
              }),
            );
            const lastIdx = timeline["e"].length - 1;

            content.split(/\s+/).forEach((n) => {
              const [sNum, val] = n.split(".");
              if (STRING_MAP[sNum]) {
                timeline[STRING_MAP[sNum]][lastIdx].val = val;
              }
            });
          } else if (trimmed.includes(":")) {
            const [sNum, seq] = trimmed.split(":");
            const sName = STRING_MAP[sNum.trim()];
            if (sName) {
              seq
                .trim()
                .split("-")
                .forEach((step) => {
                  if (step === "") {
                    STRINGS.forEach((s) =>
                      timeline[s].push({ val: "-", tech: null }),
                    );
                    return;
                  }
                  const parts = step.split(/([hpHP/\\])/);
                  if (parts.length === 1) {
                    STRINGS.forEach((s) =>
                      timeline[s].push(
                        s === sName
                          ? { val: step, tech: null }
                          : { val: "-", tech: null },
                      ),
                    );
                  } else {
                    for (let i = 0; i < parts.length; i += 2) {
                      const noteVal = parts[i];
                      const techVal =
                        i + 1 < parts.length
                          ? parts[i + 1].toLowerCase()
                          : null;
                      STRINGS.forEach((s) =>
                        timeline[s].push(
                          s === sName
                            ? { val: noteVal, tech: techVal }
                            : { val: "-", tech: null },
                        ),
                      );
                    }
                  }
                });
            }
          }
        });
    });

    const timelineCols = timeline["e"].length;
    const systems = [];

    for (let i = 0; i < timelineCols; i += maxNotesPerLine) {
      const chunk: Record<
        string,
        { val: string; tech: string | null; chordName?: string | null }[]
      > = { e: [], B: [], G: [], D: [], A: [], E: [] };

      STRINGS.forEach(
        (s) => (chunk[s] = timeline[s].slice(i, i + maxNotesPerLine)),
      );

      systems.push(chunk);
    }

    return systems;
  }, [notes, maxNotesPerLine]);

  return (
    <div className="my-8 w-full border border-zinc-800 rounded-xl overflow-hidden">
      <TabVisualizerHeader title={title} />

      <div className="p-6 md:p-10 flex flex-col gap-10 bg-white overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {allSystems.map((system, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full min-w-200 md:min-w-full relative mt-4"
          >
            <div
              className="absolute inset-y-0 left-8 right-0 grid pointer-events-none z-0"
              style={{
                gridTemplateColumns: `repeat(${maxNotesPerLine}, minmax(0, 1fr))`,
              }}
            >
              {system["e"].map((_, i) => (
                <div key={i} className="relative flex justify-end">
                  {barlineEvery !== null &&
                    (i + 1) % barlineEvery === 0 &&
                    i !== system["e"].length - 1 && (
                      <div className="h-full w-[2px] bg-zinc-200 absolute right-0" />
                    )}
                </div>
              ))}
            </div>

            {STRINGS.map((s) => (
              <div
                key={s}
                className="relative flex items-center h-6 shrink-0 w-full group"
              >
                <div className="w-8 text-zinc-400 font-mono text-xs font-black shrink-0 select-none border-r border-zinc-100 mr-2">
                  {s}
                </div>

                <div className="relative flex-1 flex items-center h-full px-2">
                  <div className="absolute inset-x-0 h-[1.5px] bg-zinc-300 pointer-events-none" />

                  <div
                    className="relative z-10 grid w-full"
                    style={{
                      gridTemplateColumns: `repeat(${maxNotesPerLine}, minmax(0, 1fr))`,
                    }}
                  >
                    {system[s].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-center items-center relative"
                      >
                        {s === "e" && item.chordName && (
                          <TabVisualizerChordName chordName={s} />
                        )}

                        {item.val !== "-" ? (
                          <TabVisualizerNote item={item} />
                        ) : (
                          <div className="h-6 w-6 invisible" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
