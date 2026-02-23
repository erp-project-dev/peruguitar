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
import { whatsAppUrl } from "@/settings.json";

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
    name: CATEGORY_STYLES.guitar.name,
    href: `/c/${PostCategory.Guitar}`,
    icon: <Guitar size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES.guitar.bgColor,
    iconColor: CATEGORY_STYLES.guitar.color,
    enabled: POSTS.some((post) => post.category === "guitar"),
  },
  {
    name: CATEGORY_STYLES.reflections.name,
    href: `/c/${PostCategory.Reflections}`,
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES.reflections.bgColor,
    iconColor: CATEGORY_STYLES.reflections.color,
    enabled: POSTS.some((post) => post.category === "reflections"),
  },
  {
    name: CATEGORY_STYLES.production.name,
    href: `/c/${PostCategory.Production}`,
    icon: <Headphones size={20} strokeWidth={1.5} />,
    position: "left",
    borderColor: CATEGORY_STYLES.production.bgColor,
    iconColor: CATEGORY_STYLES.production.color,
    enabled: POSTS.some((post) => post.category === "production"),
  },
  {
    name: CATEGORY_STYLES.resources.name,
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
    href: whatsAppUrl,
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
