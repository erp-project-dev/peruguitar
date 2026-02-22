type TabVisualizerHeaderProps = {
  title: string;
};

export function TabVisualizerHeader({ title }: TabVisualizerHeaderProps) {
  return (
    <div className="px-6 py-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
      <div className="text-zinc-100 font-bold">{title}</div>
    </div>
  );
}
