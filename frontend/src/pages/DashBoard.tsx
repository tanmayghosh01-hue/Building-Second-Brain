import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";
import { CreateShareModal } from "../components/CreateShareModal";

export function Dashboard({name}) {
  const [modalOpen, setmodalOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const navigate = useNavigate();
  const { contents, refresh } = useContent();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If no token, navigate to the sign-in page
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  useEffect(() => {
    refresh();
  }, [modalOpen, refresh]);
    // username={contents[0].userId.username}
  return (
    <>
      <div className="">
        <div className="fixed">
          <Sidebar />
        </div>

        <div className="bg-neutral-100 pl-64 h-screen">
          <CreateContentModal
            open={modalOpen}
            onClose={() => {
              setmodalOpen(false);
            }}
          />
          <CreateShareModal
            open={shareOpen}
            onClose={() => {
              setShareOpen(false);
            }}
          />
          

          
          <div className="flex justify-end gap-4 pt-2 pr-2 items-center">

            <div className="border-2 rounded border-rose-700 p-1">
              {/* {contents[0]?.userId.username} */}
              {name}
            </div>

            <Button
              onClick={() => setmodalOpen(true)}
              startIcon={<PlusIcon size="md" />}
              variant="primary"
              size="md"
              text={"Add Content"}
            />

            <Button
              startIcon={<ShareIcon size="md" />}
              variant="secondary"
              size="md"
              onClick={() => {setShareOpen(true)}}
              text={"Share Brain"}
            />
          </div>

          {/* {JSON.stringify(contents[0])} */}

          <div className="flex gap-4 flex-wrap mt-5 pb-5">
            {contents.map(({ type, link, title, _id }) => (
              <Card type={type} link={link} title={title} _id={_id} />
            ))}

            {/* <Card
              type="youtube"
              // link="https://www.youtube.com/watch?v=LwAiGnBrbfA"
              link="https://youtu.be/FkjDTRY8TYM?si=Y7NeRicYO16wJqMw"
              title="Dreams of the far future"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
