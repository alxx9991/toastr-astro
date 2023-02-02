import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="full-grid">
      <Header></Header>
      {children}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
