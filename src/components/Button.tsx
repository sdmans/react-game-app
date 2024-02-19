interface Props {
  children: string;
  color?: ButtonColor; // Optional property w/ default value
  disabled?: boolean;
  onClick: () => void;
}

type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

const Button = ({
  children,
  onClick,
  color = "primary",
  disabled = false,
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={"btn btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
