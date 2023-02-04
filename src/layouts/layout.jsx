import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div className="full-grid">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
