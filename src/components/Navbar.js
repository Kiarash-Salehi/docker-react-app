import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { UserContext } from "../context/user.js";
import { useContext } from "react";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(UserContext);
  return (
    <nav
      className="navbar navbar-expand-lg bg-light"
      style={{ direction: "rtl" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Button className="nav-link" onClick={logout}>
                    خروج
                  </Button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/request/create">
                    ایجاد درخواست جدید
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/request/list">
                    مشاهده نتایج درخواست
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/checkNationalId">
                  ورود
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                صفحه اصلی
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
