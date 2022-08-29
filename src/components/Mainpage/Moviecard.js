import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../css/mainpage.css";
import image from "../storage/images.json";

function Moviecard() {
  return (
    <>
      <h1>Latest Movies & TV</h1>
      <Container>
        <Row>
          {image.images ? (
            <>
              {image.images.map((img, key) => {
                return (
                  <div className="card-wrapper" key={key}>
                    <a href="" className="card-content">
                      <div className="image-container">
                        <img src={img.url} alt="" className="cardimg" />
                      </div>
                      <p className="movieTitle">{img.title}</p>
                    </a>
                  </div>
                );
              })}
            </>
          ) : null}
        </Row>
      </Container>
    </>
  );
}

export default Moviecard;
