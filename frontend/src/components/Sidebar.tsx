import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r border-slate-400 w-60">
      <div className="pt-5 pl-3 text-2xl flex gap-2 items-center">
        <Logo />
        <div className="flex gap-1">
          <div className="font-bold text-teal-600">Sec</div> Brain
        </div>
        
      </div>

      <div className="pt-3 ml-1 mr-1">
        <SidebarItem text="Twitter" icon={<TwitterIcon size="md" />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon size="md" />} />
      </div>
    </div>
  );
}
