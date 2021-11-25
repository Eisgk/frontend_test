import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

export default function FormValidation() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordValidate: '',
    gender: '',
  });
  const [data, setData] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      form.firstname.length !== 0 &&
      form.lastname.length !== 0 &&
      form.gender.length !== 0 &&
      form.email.length !== 0 &&
      form.password.length !== 0 &&
      form.passwordValidate.length !== 0
    ) {
      setData(form);
    }
    setValidated(true);
  };

  return (
    <div className="form-validate">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>Test form and validation</h3>
        <Form.Group as={Col} md="8" controlId="validationCustom01">
          <Row>
            <Form.Label column="sm" lg={4}>
              First Name
            </Form.Label>
            <Col>
              <Form.Control
                required
                type="text"
                name="firstname"
                placeholder="Please fill first name"
                value={form.firstname}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please fill out this field
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} md="8">
          <Row>
            <Form.Label column="sm" lg={4}>
              Last Name
            </Form.Label>
            <Col>
              <Form.Control
                required
                type="text"
                name="lastname"
                placeholder="Please fill last name"
                value={form.lastname}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please fill out this field
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} md="8">
          <Row>
            <Form.Label column="sm" lg={4}>
              Email
            </Form.Label>
            <Col>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Please fill e-mail"
                value={form.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please fill out this field
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} md="8">
          <Row>
            <Form.Label column="sm" lg={4}>
              Password
            </Form.Label>
            <Col>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Please fill password"
                value={form.password}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please fill out this field
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} md="8">
          <Row>
            <Form.Label column="sm" lg={4}>
              Verify Password
            </Form.Label>
            <Col>
              <Form.Control
                required
                type="password"
                name="passwordValidate"
                placeholder="Please fill password"
                value={form.passwordValidate}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please fill out this field
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} md="8">
          <Row>
            <Form.Label column="sm" lg={4}>
              Gender
            </Form.Label>
            <Col>
              <Form.Select
                required
                name="gender"
                defaultValue={form.gender}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option value={form.gender} disabled>
                  Please select a gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please fill out this field
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>

        <Button type="submit" variant="success">
          Submit
        </Button>

        {!data ? (
          <p></p>
        ) : (
          <section>
            <h3>Result</h3>
            <p>First Name : {data.firstname}</p>
            <p>Last Name : {data.lastname}</p>
            <p>E-mail : {data.email}</p>
            <p>Gender : {data.gender}</p>
          </section>
        )}
      </Form>
    </div>
  );
}