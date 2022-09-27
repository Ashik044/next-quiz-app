import Nav from "./Nav";


const Layout = ({ children }) => {
  return (
    <div className="w-full h-full bg-white dark:bg-slate-700 dark:text-white">
      <Nav />

      <main className="w-full py-12 px-0 bg-slate-100 dark:bg-slate-700">
        <div className="w-[90%] m-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
