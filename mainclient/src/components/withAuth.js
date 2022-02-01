import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          return <WrappedComponent {...props} />;
        } else {
          Router.replace("/");
          return null;
        }
      });
    }
    // If we are on server, return null
    return null;
  };
};

export default withAuth;
