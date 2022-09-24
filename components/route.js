import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

// ==================================================
export function withPublic(Component) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.currentUser) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}

// ==================================================
export function withProtected(Component) {
  return function WithProtected(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.currentUser) {
      router.replace("/Login");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
}
