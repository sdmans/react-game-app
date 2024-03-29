import ListGroup from "./ListGroup";
import Alert from "./Alert";
import Button from "./Button";
import { useEffect, useState } from "react";

let wards = [
  "Shibuya (渋谷区)",
  "Shinjuku (新宿区)",
  "Chiyoda (千代田区)",
  "Setagaya (世田谷区)",
  "Suginami (杉並区)",
];

function MainPage() {
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as any);

  // What is the purpose of useEffect?
  // It has to be used in the body of a function component to work.
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("calling...");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const json = await response.json();
        console.log("json response", json);
        setData(json);
        console.log("stringified res", JSON.stringify(data, null, 2));
      } catch (err: any) {
        console.log("err", err);
        setError(err);
      } finally {
        console.log("call complete!");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelectItem = (item: string) => {
    console.log("item", item);
  };
  const [showAlert, setAlert] = useState(false);
  const dismissAlert = () => {
    setAlert(false);
  };

  const handleSubmit = (ward: string) => {
    console.log("handleSubmit Ward", ward);
    if (!wards.includes(ward)) {
      wards.push(ward);
    } else {
      console.warn("Ward already exists, not adding...");
    }
  };

  // Return markup based on state
  // Loading, display placeholder
  if (loading) return <div>Loading...</div>;
  // Error, display error message
  if (error) return <div>Error: {error.message}</div>;
  // Complete, Render full template
  return (
    <div>
      <h2>Main Page</h2>
      {showAlert && (
        <Alert onClose={dismissAlert}>
          <span className="fs-3">Hello World!</span>
        </Alert>
      )}

      {/* <p>{data.body}</p> */}

      <div>
        <Button disabled={showAlert} onClick={() => setAlert(true)}>
          My Button
        </Button>
      </div>
      <ListGroup
        items={wards}
        heading="Wards"
        onSelectItem={handleSelectItem}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default MainPage;
