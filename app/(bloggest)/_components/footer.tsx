import { Logo } from "@/components/logo";
import { NavBar } from "./navbar";
import {
  FacebookIcon,
  InstagramIcon,
  MessageCircle,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full h-16 bg-slate-950 flex items-center px-4 justify-between">
      <div className="text-white">
        <Logo />
      </div>

      <div className="text-slate-300">
        {" "}
        <NavBar />
      </div>
      <div className="flex text-slate-400 items-center gap-2">
        <FacebookIcon />
        <Twitter />
        <InstagramIcon />
        <MessageCircle />
      </div>
    </footer>
  );
};
