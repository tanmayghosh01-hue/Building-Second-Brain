import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";

export function Dashboard() {
  const [modalOpen, setmodalOpen] = useState(false);

  const contents = useContent();

  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="flex-1 bg-neutral-100 pl-3">
          <CreateContentModal
            open={modalOpen}
            onClose={() => {
              setmodalOpen(false);
            }}
          />
          <div className="flex justify-end gap-4 pt-2 pr-2">
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
              onClick={() => {}}
              text={"Share Brain"}
            />
          </div>

          {JSON.stringify(contents)}

          <div className="flex gap-4 flex-wrap">
            {contents.map(({ type, link, title }) => (
              <Card type={type} link={link} title={title} />
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
