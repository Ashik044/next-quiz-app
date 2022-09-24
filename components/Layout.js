import Nav from "./Nav";
import { AuthProvider } from "../context/AuthContext";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-slate-700 dark:text-white">
      <AuthProvider>
        <Nav />
      </AuthProvider>

      <main className="w-full py-12 px-0">
        <div className="w-[90%] m-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
