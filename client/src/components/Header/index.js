import React, { useState} from "react";
import { Link  } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Tab
} from "react-bootstrap";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import logo from "../../images/logo-white.png";
import Auth from "../../utils/auth";
import burgerBtn from "../../images/burgerBtn.PNG";
import { Navigate } from "react-router-dom";


const Header = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar background="url(./images/bg.jpg)" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Link to="/">
              <img
                src={logo}
                className="logo"
                style={{ width: "4%" }}
                alt="logopic"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              {/* if user is logged in show profile and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={() => setShowModal(true)}>
                    <img
                      src={burgerBtn}
                      className="Burgerbtn"
                      style={{ width: "50%" }}
                      alt="menu button"
                    />
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  <img
                    src={burgerBtn}
                    className="Burgerbtn"
                    style={{ width: "3%" }}
                    alt="menu button"
                  />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      {!Auth.loggedIn() ? (
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="signup-modal"
        >
          {/* tab container to do either signup or login component */}
          <Tab.Container defaultActiveKey="login">
            <Modal.Header closeButton>
              <Modal.Title id="signup-modal">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="login">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey="login">
                  <Login handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey="signup">
                  <Register handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal>
      ) : (
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="signup-modal"
        >
          {/* tab container to do either signup or login component */}
          <Tab.Container>
            <Modal.Body>
              <Modal.Title id="profile-modal">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link href="/profile">
                      Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Body>
          </Tab.Container>
        </Modal>
      )}
    </>
  );
};


export default Header;
