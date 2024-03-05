import ListGroup from "./ListGroup";
import Alert from "./Alert";
import Button from "./Button";
import { useState } from "react";

let wards = [
  "Shibuya (渋谷区)",
  "Shinjuku (新宿区)",
  "Chiyoda (千代田区)",
  "Setagaya (世田谷区)",
  "Suginami (杉並区)",
];

function MainPage() {
  const handleSelectItem = (item: string) => {
    console.log("item", item);
  };
  const [showAlert, setAlert] = useState(false);
  const dismissAlert = () => {
    setAlert(false);
  };

  return (
    <div>
      <h2>Main Page</h2>
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

export default MainPage;
