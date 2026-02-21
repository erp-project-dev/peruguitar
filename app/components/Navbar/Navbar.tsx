"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/logo.png";
import { MENU, MenuItem } from "./menu";

interface NavbarProps {
  isMobileView?: boolean;
}

export function Navbar({ isMobileView = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderLinks = (items: MenuItem[]) =>
    items.map((item) => {
      if (item.enabled === false) return null;

      const active = pathname === item.href;

      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className={`relative flex items-center gap-3 px-6 py-3 transition-all duration-300 group
            ${active ? "bg-white/5 text-white" : "text-zinc-300 hover:text-white hover:bg-white/2"}`}
        >
          {active && (
            <div
              className={`absolute left-0 top-2 bottom-2 w-1 ${item.borderColor ?? "bg-blue-500"} shadow-[2px_0_8px_rgba(59,130,246,0.5)] rounded-r-full`}
            />
          )}
          {item.icon && (
            <span
              className={`transition-all duration-300 text-xl ${active ? (item.iconColor ?? "text-blue-500") : "text-zinc-400 group-hover:text-zinc-200"}`}
            >
              {item.icon}
            </span>
          )}
          <span className="font-medium tracking-tight">{item.name}</span>
        </Link>
      );
    });

  if (isMobileView) {
    return (
      <div className="lg:hidden relative w-full h-16 border-b border-white/5 flex items-center justify-between px-6 z-50 bg-black">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image src={Logo} alt="Logo" height={28} className="w-auto" />
        </Link>

        <button onClick={toggleMenu} className="text-white p-2">
          <Menu size={24} />
        </button>

        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          renderLinks={renderLinks}
        />
      </div>
    );
  }

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-white/5 bg-zinc-900 h-screen sticky top-0">
      <div className="flex flex-col h-full py-8">
        <div className="px-8 mb-10">
          <Link
            href="/"
            className="inline-block transition-transform hover:scale-105"
          >
            <Image
              src={Logo}
              alt="Logo"
              height={45}
              className="w-auto brightness-110"
              priority
            />
          </Link>
        </div>
        <nav className="flex flex-col flex-1 gap-1 overflow-y-auto">
          <SectionTitle title="Explorar" />
          {renderLinks(MENU.filter((i) => i.position === "left"))}
          <div className="my-4 border-t border-white/5 mx-6" />
          <SectionTitle title="Otros" />
          {renderLinks(MENU.filter((i) => i.position === "right"))}
        </nav>
      </div>
    </aside>
  );
}

function Sidebar({
  isOpen,
  setIsOpen,
  renderLinks,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  renderLinks: (items: MenuItem[]) => React.ReactNode;
}) {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-110 w-64 border-r border-white/5 transition-transform duration-300 bg-zinc-900 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full py-8">
          <div className="flex justify-end px-6 mb-4">
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col flex-1 gap-1 overflow-y-auto">
            <SectionTitle title="Explorar" />
            {renderLinks(MENU.filter((m) => m.position === "left"))}
            <div className="my-4 border-t border-white/5 mx-6" />
            <SectionTitle title="Otros" />
            {renderLinks(MENU.filter((m) => m.position === "right"))}
          </nav>
        </div>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="px-6 mb-2 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
      {title}
    </div>
  );
}
