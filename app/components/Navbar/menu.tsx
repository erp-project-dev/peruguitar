import { Headphones, FileText, Guitar } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";

import { POSTS } from "@/content";
import { CATEGORY_STYLES } from "@/shared/category";

type MenuPosition = "left" | "right";

export interface MenuItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  position?: MenuPosition;
  borderColor?: string;
  iconColor?: string;
  enabled: boolean;
  external?: boolean;
}

export const MENU: MenuItem[] = [
  {
    name: "Publicaciones",
    href: "/c/guitar",
    icon: <Guitar size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES.guitar.bgColor,
    iconColor: CATEGORY_STYLES.guitar.color,
    enabled: POSTS.some((post) => post.category === "guitar"),
  },
  {
    name: "Producción Musical",
    href: "/c/music-production",
    icon: <Headphones size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES["music-production"].bgColor,
    iconColor: CATEGORY_STYLES["music-production"].color,
    enabled: POSTS.some((post) => post.category === "music-production"),
  },
  {
    name: "Recursos",
    href: "/c/resources",
    icon: <FileText size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES.resources.bgColor,
    iconColor: CATEGORY_STYLES.resources.color,
    enabled: POSTS.some((post) => post.category === "resources"),
  },
  {
    name: "WhatsApp",
    href: "https://chat.whatsapp.com/LpWKWA6NpCPCsblWRPdOSY?mode=gi_t",
    position: "right",
    icon: <SiWhatsapp size={18} fill="currentColor" />,
    enabled: true,
    external: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/peruguitar",
    position: "right",
    icon: <SiInstagram size={18} fill="currentColor" />,
    enabled: true,
    external: true,
  },
  {
    name: "ERP Project",
    href: "https://www.instagram.com/erpprojectofficial/",
    position: "right",
    icon: <Guitar size={20} strokeWidth={1.5} />,
    enabled: true,
    external: true,
  },
];
