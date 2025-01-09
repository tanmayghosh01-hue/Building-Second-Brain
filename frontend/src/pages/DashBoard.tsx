import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";

 export function Dashboard() {
  const [modalOpen, setmodalOpen] = useState(false);

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

          <div className="flex gap-4">
            <Card
              type="twitter"
              link="https://x.com/meri_mrziii/status/1876574872220156048"
              title="CID Specials"
            />
            <Card
              type="youtube"
              // link="https://www.youtube.com/watch?v=LwAiGnBrbfA"
              link="https://youtu.be/FkjDTRY8TYM?si=Y7NeRicYO16wJqMw"
              title="Dreams of the far future"
            />
          </div>
        </div>
      </div>
    </>
  );
}
