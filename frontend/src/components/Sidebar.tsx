// import { useContent } from "../hooks/useContent";
import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
// import { Button } from "./Button";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();

  // const { contents } = useContent();

  return (
    <div className="h-screen bg-white border-r border-slate-400 w-60 flex flex-col">
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

      <div className="flex-1 relative">
        <div className="absolute bottom-2 right-20 flex gap-2 items-center">
          <div className="">
            <button
              className="border-2 p-2 border-violet-600 rounded hover:bg-violet-600 hover:text-white"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/signin");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
