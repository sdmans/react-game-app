import ListGroup from "./components/ListGroup";

let wards = [
  "Shibuya (渋谷区)",
  "Shinjuku (新宿区)",
  "Chiyoda (千代田区)",
  "Setagaya (世田谷区)",
  "Suginami (杉並区)",
];

function App() {
  return (
    <div>
      <ListGroup items={wards} heading="Wards" />
    </div>
  );
}

export default App;
