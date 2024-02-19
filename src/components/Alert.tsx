import { ReactNode } from "react";

export interface AlertProps {
  children: ReactNode;
  dismiss: () => void;
}

const Alert = ({ children, dismiss }: AlertProps) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={dismiss}
      ></button>
    </div>
  );
};

export default Alert;
