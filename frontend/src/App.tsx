import "./App.css";
import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon size="md" />}
        variant="primary"
        size="sm"
        onClick={() => {}}
        text={"share"}
      />
      <Button
        variant="secondary"
        size="md"
        onClick={() => {}}
        text={"Add Content"}
      />
      <Button
        variant="secondary"
        size="lg"
        onClick={() => {}}
        text={"Contect"}
      />
    </>
  );
}

export default App;
