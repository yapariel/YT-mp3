import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { youtube_parser } from "./Utils";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": "988e04084dmshce656a59a52139bp1d1be6jsnc7eaa211af74",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeID,
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
  };

  const handleDownload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    document.title = "YT-MP3";
  }, []);

  return (
    <>
      <Container className="dash">
        <Navbar />
        <Row className="content">
          <Col className="title">
            <h1>YOUTUBE TO MP3 CONVERTER</h1>
            <p>Convert YouTube URL to MP3</p>
          </Col>
        </Row>

        <form onSubmit={handleSubmit} className="form">
          <Col className="inputt">
            <input
              ref={inputUrlRef}
              className="input-design"
              placeholder="YouTube URL link here..."
              type="text"
            />
          </Col>
          <Col>
            <Button type="submit" className="bn632-hover bn26">
              CONVERT
            </Button>
          </Col>
        </form>
        {urlResult ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={urlResult}
            className="download_btn"
            onClick={handleDownload}
          >
            Click to Download
          </a>
        ) : (
          ""
        )}
      </Container>
      <Container className="use">
        <Row className="box-row">
          <Col className="box">
            <span>1.</span> Copy the YouTube Video URL: Go to YouTube and find
            the video you want to convert. Copy the URL from the address bar.
          </Col>
          <Col className="box">
            <span>2.</span> Paste the URL: Visit YT-MP3 and paste the YouTube
            video URL into the provided input box.
          </Col>
          <Col className="box">
            <span>3.</span> Start Conversion: Click the "Convert" button to
            begin the conversion process.
          </Col>
          <Col className="box">
            <span>4.</span> Download MP3: Once the conversion is complete, click
            the "Download" button to save the MP3 file to your device.
          </Col>
        </Row>
        <Row>
          <h4>JOHN ARIEL YAP | 2023</h4>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
