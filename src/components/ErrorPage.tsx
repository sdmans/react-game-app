import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div id="errorPage">
      <h2>Error!</h2>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
