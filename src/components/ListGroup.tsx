function ListGroup() {
  let wards = [
    "Shibuya (渋谷区)",
    "Shinjuku (新宿区)",
    "Chiyoda (千代田区)",
    "Setagaya (世田谷区)",
    "Suginami (杉並区)",
  ];

  wards = [];

  return (
    <>
      <h1>List</h1>
      {wards.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {wards.map((ward) => (
          <li key={ward}>{ward}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
