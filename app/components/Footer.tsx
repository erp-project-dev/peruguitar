export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-4 pb-4 border-t border-zinc-800 px-6 block md:hidden">
      <span className="text-xs font-black text-white uppercase tracking-[0.2em]">
        © {currentYear} Peru Guitar
      </span>
      <p className="text-sm text-zinc-400 font-medium max-w-xs leading-relaxed">
        La primera comunidad de guitarristas en el Perú.
      </p>
    </footer>
  );
}
