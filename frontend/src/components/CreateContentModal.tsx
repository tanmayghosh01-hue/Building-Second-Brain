// Controlled Component

import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
    }, {
      headers: {
        "authorization": localStorage.getItem("token")
      }
    })

    console.log(link, title, type);

  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-neutral-500 fixed top-0 left-0 bg-opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white  p-4 rounded relative">
              <div className="flex justify-end">
                <div onClick={onClose}>
                  <CrossIcon size="lg" />
                </div>
              </div>

              <div className="mt-1">
                <Input reference={titleRef} placeholder={"Title"} />
              </div>

              <div className="mt-1 mb-1">
                <Input reference={linkRef} placeholder={"Link"} />
              </div>

              <div className="flex mb-2 mt-2 gap-1 justify-center">
                <Button
                  text="Youtube"
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Youtube);
                  }}
                  size="md"
                />

                <Button
                  text="Twitter"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Twitter);
                  }}
                  size="md"
                />
                
              </div>

              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    addContent();
                  }}
                  text={"Submit"}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
