import { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import Template from "./Template.js";
import { UserContext } from "../context/user.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CheckNationalId = () => {
  const navigate = useNavigate();
  const { checkNationalId } = useContext(UserContext);
  const [nationalId, setNationalId] = useState(undefined);
  const checkNationalIdHandler = async (e) => {
    e.preventDefault();
    const result = await checkNationalId(nationalId);
    if (result === 200) navigate("/login/user");
    else if (result === 404) navigate("/register/user");
  };
  return (
    <Template>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <Card
          style={{
            direction: "rtl",
            width: "40vw",
          }}
        >
          <Card.Body>
            <Card.Title>ورود کاربران</Card.Title>
            <Form onSubmit={checkNationalIdHandler}>
              <Form.Group
                className="mt-3 mb-3 d-flex align-items-center justify-content-center"
                controlId="formNationalId"
                style={{ width: "100%" }}
              >
                <Form.Label style={{ flex: ".1" }}>کد ملی</Form.Label>
                <Form.Control
                  type="number"
                  style={{ flex: ".9" }}
                  minLength={10}
                  maxLength={10}
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                چک کردن کد ملی
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Template>
  );
};

export default CheckNationalId;
