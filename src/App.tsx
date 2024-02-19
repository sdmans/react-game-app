import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

let wards = [
  "Shibuya (渋谷区)",
  "Shinjuku (新宿区)",
  "Chiyoda (千代田区)",
  "Setagaya (世田谷区)",
  "Suginami (杉並区)",
];

// Create a way to show/hide the Alert component using the Button
// Planning:
// Track showalert status from parent somehow. Perhaps a boolean stored in state
// * This would need to be in the parent since that has both component nested inside it.
// // Find a way to toggle that status on/off. ie. On w/ Button, off with Alert dismiss?

function App() {
  const handleSelectItem = (item: string) => {
    console.log("item", item);
  };
  const [showAlert, setAlert] = useState(false);
  const dismissAlert = () => {
    setAlert(false);
  };
  return (
    <div>
      {showAlert && (
        <Alert onClose={dismissAlert}>
          <span className="fs-3">Hello World!</span>
        </Alert>
      )}

      <div>
        <Button disabled={showAlert} onClick={() => setAlert(true)}>
          My Button
        </Button>
      </div>
      {/* <ListGroup
        items={wards}
        heading="Wards"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
