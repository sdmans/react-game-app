import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

let wards = [
  "Shibuya (渋谷区)",
  "Shinjuku (新宿区)",
  "Chiyoda (千代田区)",
  "Setagaya (世田谷区)",
  "Suginami (杉並区)",
];

const handleSelectItem = (item: string) => {
  console.log("item", item);
};

function App() {
  return (
    <div>
      <Alert>Hello World!</Alert>
      {/* <ListGroup
        items={wards}
        heading="Wards"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
