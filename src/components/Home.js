import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Template from "./Template.js";

const Home = () => {
  return (
    <Template>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <Link to="/login/admin">
          <Button className="m-2">ورود ادمین</Button>
        </Link>
        <Link to="/checkNationalId">
          <Button className="m-2">ورود کاربر</Button>
        </Link>
      </div>
    </Template>
  );
};

export default Home;
