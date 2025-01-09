import { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return <div className="flex items-center hover:bg-slate-200 pl-4 pt-3 pb-3 rounded-xl transition-all duration-800">
    <div className="mr-3 mt-1">{icon}</div> {text}
  </div>;
}
