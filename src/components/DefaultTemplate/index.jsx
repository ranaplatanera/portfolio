import Footer from "../Footer";
import Header from "../Header";

const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultTemplate;