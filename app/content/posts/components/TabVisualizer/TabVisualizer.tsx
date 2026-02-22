"use client";
import React, { useMemo } from "react";

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
      <div className="px-6 py-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
        <div className="text-zinc-100 font-bold">{title}</div>
      </div>

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
                <div className="w-8 text-zinc-400 font-mono text-xs font-black shrink-0 uppercase select-none border-r border-zinc-100 mr-2">
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
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-700 px-2 py-0.5 border border-zinc-200 shadow-sm rounded-md text-[11px] font-bold text-zinc-100 tracking-wider whitespace-nowrap z-50">
                            {item.chordName}
                          </div>
                        )}

                        {item.val !== "-" ? (
                          <div className="relative flex items-center justify-center font-mono text-sm font-black text-zinc-900 leading-none tabular-nums cursor-default z-20 w-full">
                            <span className="bg-white px-1.5 relative z-20">
                              {item.val}
                            </span>

                            {item.tech && (
                              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-full z-30 pointer-events-none">
                                {(item.tech === "h" || item.tech === "p") && (
                                  <>
                                    <span className="absolute -top-[14px] left-[50%] -translate-x-1/2 text-[9px] font-black text-violet-600 bg-white px-[2px] z-10 uppercase tracking-widest rounded-full leading-none">
                                      {item.tech}
                                    </span>
                                    <svg
                                      className="absolute -top-[2px] left-0 w-[100%] h-[12px] overflow-visible text-violet-500"
                                      viewBox="0 0 100 12"
                                      preserveAspectRatio="none"
                                    >
                                      <path
                                        d="M 15 12 Q 50 -3 85 12"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        vectorEffect="non-scaling-stroke"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  </>
                                )}
                                {(item.tech === "/" || item.tech === "\\") && (
                                  <svg
                                    className="absolute top-1/2 -translate-y-1/2 left-0 w-[100%] h-[14px] overflow-visible text-blue-500"
                                    viewBox="0 0 100 14"
                                    preserveAspectRatio="none"
                                  >
                                    <line
                                      x1="20"
                                      y1={item.tech === "/" ? "14" : "0"}
                                      x2="80"
                                      y2={item.tech === "/" ? "0" : "14"}
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      vectorEffect="non-scaling-stroke"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                )}
                              </span>
                            )}
                          </div>
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
