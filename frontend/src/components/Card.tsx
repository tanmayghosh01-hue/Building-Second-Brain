// import { DustBin } from "../icons/dustBin";
import { DustBin } from "../icons/DustBin";
import { ShareIcon } from "../icons/ShareIcon";
import { deleteContent } from "../hooks/deleteContent";
import { TwitterEmbed, YouTubeEmbed } from "react-social-media-embed";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  _id?: string;
}

export function Card({ title, link, type, _id }: CardProps) {
  return (
    <div>
      <div className="p-4 bg-white border rounded-md border-gray-300 max-w-72 min-h-48">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="text-gray-500 mr-2">
              {type === "youtube" && <YoutubeIcon size="md" />}
              {type === "twitter" && <TwitterIcon size="md" />}
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon size="md" />
              </a>
            </div>
            <div className="pr-1 text-gray-500 pt-[6px]">
              <button
                onClick={() => {
                  deleteContent(_id);
                }}
              >
                <DustBin size="md" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4">
          {/* {type === "youtube" && <YouTubeEmbed url={link} className="w-auto" />} */}
          {type === "youtube" && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <YouTubeEmbed url={link} width={255} height={180} />
            </div>
          )}

          {type === "twitter" && <TwitterEmbed url={link} className="w-full" />}
        </div>
      </div>
    </div>
  );
}
