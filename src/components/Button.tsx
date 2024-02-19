const Button = () => {
  const classes = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const log = (name: string): void => {
    console.log("Logging: ", name);
  };
  return (
    <>
      {classes.map((name, index) => (
        <button
          className={`btn btn-${name}`}
          key={name + index}
          onClick={() => {
            log(name);
          }}
        >
          Click Me!
        </button>
      ))}
    </>
  );
};

export default Button;
