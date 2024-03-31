import { useState } from "react";

// Figure out shape of props input
// { items: [], heading: string }
// (item: string) => void

export interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  handleSubmit: (ward: string) => any;
  handleDelete: (ward: string, index: number) => void;
}

function ListGroup({
  items,
  heading,
  onSelectItem,
  handleSubmit,
  handleDelete,
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
            key={index}
          >
            <span
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
                setSelectedWard(item);
              }}
            >
              {item}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(item, index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
