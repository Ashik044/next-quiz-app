import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Nav />

      <main className="w-full py-12 px-0">
        <div className="w-[90%] m-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
