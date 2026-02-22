import {
  Headphones,
  FileText,
  Guitar,
  Link,
  Sparkles,
  Users2Icon,
} from "lucide-react";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";

import { POSTS } from "@/content";
import { CATEGORY_STYLES } from "@/shared/category";
import { PostCategory } from "@/content/types";

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
    name: "Guitarra",
    href: `/c/${PostCategory.Guitar}`,
    icon: <Guitar size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES.guitar.bgColor,
    iconColor: CATEGORY_STYLES.guitar.color,
    enabled: POSTS.some((post) => post.category === "guitar"),
  },
  {
    name: "Reflexiones",
    href: `/c/${PostCategory.Reflections}`,
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES.reflections.bgColor,
    iconColor: CATEGORY_STYLES.reflections.color,
    enabled: POSTS.some((post) => post.category === "reflections"),
  },
  {
    name: "Producción Musical",
    href: `/c/${PostCategory.MusicProduction}`,
    icon: <Headphones size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES["music-production"].bgColor,
    iconColor: CATEGORY_STYLES["music-production"].color,
    enabled: POSTS.some((post) => post.category === "music-production"),
  },
  {
    name: "Recursos",
    href: `/c/${PostCategory.Resources}`,
    icon: <FileText size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES.resources.bgColor,
    iconColor: CATEGORY_STYLES.resources.color,
    enabled: POSTS.some((post) => post.category === "resources"),
  },
  {
    name: "Acerca de Nosotros",
    href: `/acerca-de-nosotros`,
    icon: <Users2Icon size={20} strokeWidth={1.5} />,
    position: "left",
    enabled: true,
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
    icon: <Link size={20} strokeWidth={1.5} />,
    enabled: true,
    external: true,
  },
];
