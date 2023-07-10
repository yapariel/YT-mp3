import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Code.css";

const Code = () => {
  useEffect(() => {
    document.title = "Source Code";
  }, []);

  const handleButtonClick = () => {
    window.open("https://github.com/yapariel/YT-mp3", "_blank");
  };

  return (
    <Container className="code">
      <Navbar />
      <Row className="code-content">
        <Col className="title">
          <h1>YT-MP3 SOURCE CODE</h1>
          <h4>
            <a href="https://www.facebook.com/arielyap.fb">
              DEVELOPED BY: JOHN ARIEL YAP
            </a>
          </h4>
          <Button className="bn632-hover bn26" onClick={handleButtonClick}>
            DOWNLOAD
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Code;
