import { useState } from "react";

function ListGroup() {
  let wards = [
    "Shibuya (渋谷区)",
    "Shinjuku (新宿区)",
    "Chiyoda (千代田区)",
    "Setagaya (世田谷区)",
    "Suginami (杉並区)",
  ];

  // Hook
  // State variable and setter function to update state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {wards.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {wards.map((ward, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={ward}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {ward}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
