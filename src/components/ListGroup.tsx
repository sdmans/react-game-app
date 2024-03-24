import { useState } from "react";

// Figure out shape of props input
// { items: [], heading: string }
// (item: string) => void

export interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  handleSubmit: (ward: string) => any;
}

function ListGroup({
  items,
  heading,
  onSelectItem,
  handleSubmit,
}: ListGroupProps) {
  // Hook
  // State variable and setter function to update state
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedWard, setSelectedWard] = useState("");
  const [ward, setWard] = useState("");

  const updateSelected = (event: any) => {
    event.preventDefault();
    setSelectedWard(ward);
    setSelectedWard("");
    setWard(""); // Reset state of ward
    handleSubmit(ward);
  };

  return (
    <>
      <h1>{heading}</h1>
      <form onSubmit={updateSelected}>
        <input
          type="text"
          value={ward}
          onChange={(e) => setWard(e.target.value)}
        />
        <input type="submit" />
      </form>
      <p>Current Ward: {selectedWard}</p>

      {items.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
              setSelectedWard(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
