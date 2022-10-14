import Navbar from "./Navbar.js";

const Template = ({ children, mainClassName = "" }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={`container ${mainClassName}`}>{children}</main>
    </>
  );
};

export default Template;
