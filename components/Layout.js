import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="w-full py-4 px-0">
        <div className="w-[90%] m-auto">{children}</div>
      </main>
    </>
  );
};

export default Layout;
