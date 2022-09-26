import { Link, useRouteError } from "react-router-dom";
import Container from "@/components/Container";

// export default function Error() {
//   const error: any = useRouteError();
//   console.error(error);

//   return (
//     <div id="error-page">
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }

export default function Error() {
  return (
    <Container className="mt-9">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Container>
  );
}
