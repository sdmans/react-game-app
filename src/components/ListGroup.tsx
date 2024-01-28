import { MouseEvent } from "react";

function ListGroup() {
  let wards = [
    "Shibuya (渋谷区)",
    "Shinjuku (新宿区)",
    "Chiyoda (千代田区)",
    "Setagaya (世田谷区)",
    "Suginami (杉並区)",
  ];

  const handleClick = (e: MouseEvent) => {
    console.log("event", e);
  };

  return (
    <>
      <h1>List</h1>
      {wards.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {wards.map((ward, index) => (
          <li className="list-group-item" key={ward} onClick={handleClick}>
            {ward}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
