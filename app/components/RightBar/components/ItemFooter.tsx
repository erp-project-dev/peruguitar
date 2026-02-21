export function ItemFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-10 border-t border-white/5 mt-16">
      <div className="space-y-2">
        <span className="text-xs font-black text-white uppercase tracking-[0.2em]">
          © {currentYear} Peru Guitar
        </span>
        <p className="text-sm text-zinc-400 font-medium max-w-xs leading-relaxed">
          La primera comunidad de guitarristas en el Perú.
        </p>
      </div>
    </footer>
  );
}
