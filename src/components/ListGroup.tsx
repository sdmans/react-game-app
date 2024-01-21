function ListGroup() {
  const wards = [
    "Shibuya (渋谷区)",
    "Shinjuku (新宿区)",
    "Chiyoda (千代田区)",
    "Setagaya (世田谷区)",
    "Suginami (杉並区)",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {wards.map((ward) => (
          <li key={ward}>{ward}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
