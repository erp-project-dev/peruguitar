type RightBarHeaderProps = {
  bgColor: string;
  color: string;
  title: string;
};

export function RightBarHeader({ bgColor, color, title }: RightBarHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div className={`w-1 h-4 rounded-full ${bgColor}`} />
      <h3
        className={`text-[10px] font-bold ${color} uppercase tracking-[0.2em] leading-none`}
      >
        {title}
      </h3>
    </div>
  );
}
