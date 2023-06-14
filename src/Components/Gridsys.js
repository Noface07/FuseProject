import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./css/GridSys.css";

const Footer = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    // Perform the redirect to a different page using a router or window.location.href
    // Example using window.location.href:
    window.location.href = imageUrl;
  };

  return (
    <Container className="pt-4">
      <Row>
        <Col md={8} className="text-center text-md-left">
          <div
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHoveredImage("ra")}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleImageClick("/page1")}
          >
            <Image
              src={require("./images/Prod/ra.jpg")}
              height="872.4"
              width="655.01"
              className={
                hoveredImage === "ra" ? "mb-3 blur-image zoom-in" : "mb-3"
              }
              style={{
                filter: hoveredImage === "ra" ? "blur(3px)" : "none",
                transition: "filter 0.3s ease",
              }}
            />
            {hoveredImage === "ra" && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  opacity: hoveredImage === "ra" ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    animation: "fade-in 1s ease",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                >
                  Hello
                </p>
              </div>
            )}
          </div>
        </Col>
        <Col md={4} className="text-center">
          <Row>
            <Col sm={12} className="mb-3">
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  overflow: "hidden",
                }}
                onMouseEnter={() => setHoveredImage("la")}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => handleImageClick("/page2")}
              >
                <Image
                  src={require("./images/Prod/la.jpg")}
                  height="425.6"
                  width="316.76"
                  className={hoveredImage === "la" ? "mb-3 blur-image" : "mb-3"}
                  style={{
                    filter: hoveredImage === "la" ? "blur(3px)" : "none",
                    transition: "filter 0.3s ease",
                  }}
                />
                {hoveredImage === "la" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      borderRadius: "5px",
                      opacity: hoveredImage === "la" ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        animation: "fade-in 1s ease",
                        fontWeight: "bold",
                        fontSize: "larger",
                      }}
                    >
                      Hello
                    </p>
                  </div>
                )}
              </div>
            </Col>
            <Col sm={12}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  overflow: "hidden",
                }}
                onMouseEnter={() => setHoveredImage("lb")}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => handleImageClick("/page3")}
              >
                <Image
                  src={require("./images/Prod/lb.jpg")}
                  height="425.6"
                  width="316.76"
                  className={hoveredImage === "lb" ? "mb-3 blur-image" : "mb-3"}
                  style={{
                    filter: hoveredImage === "lb" ? "blur(3px)" : "none",
                    transition: "filter 0.3s ease",
                  }}
                />
                {hoveredImage === "lb" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      borderRadius: "5px",
                      opacity: hoveredImage === "lb" ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        animation: "fade-in 1s ease",
                        fontWeight: "bold",
                        fontSize: "larger",
                      }}
                    >
                      Hello
                    </p>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="mt-4">
          <div
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHoveredImage("a1")}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleImageClick("/page4")}
          >
            <Image
              src={require("./images/Prod/a.jpg")}
              height="425.6"
              width="425.6"
              className={hoveredImage === "a1" ? "mb-3 blur-image" : "mb-3"}
              style={{
                filter: hoveredImage === "a1" ? "blur(3px)" : "none",
                transition: "filter 0.3s ease",
              }}
            />
            {hoveredImage === "a1" && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  opacity: hoveredImage === "a1" ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    animation: "fade-in 1s ease",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                >
                  Hello
                </p>
              </div>
            )}
          </div>
        </Col>
        <Col>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHoveredImage("b1")}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleImageClick("/page5")}
          >
            <Image
              src={require("./images/Prod/b.jpg")}
              height="425.6"
              width="425.6"
              className={hoveredImage === "b1" ? "mb-3 blur-image" : "mb-3"}
              style={{
                filter: hoveredImage === "b1" ? "blur(3px)" : "none",
                transition: "filter 0.3s ease",
              }}
            />
            {hoveredImage === "b1" && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  opacity: hoveredImage === "b1" ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    animation: "fade-in 1s ease",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                >
                  Hello
                </p>
              </div>
            )}
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHoveredImage("a2")}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleImageClick("/page6")}
          >
            <Image
              src={require("./images/Prod/a.jpg")}
              height="425.6"
              width="323.92"
              className={hoveredImage === "a2" ? "mb-3 blur-image" : "mb-3"}
              style={{
                filter: hoveredImage === "a2" ? "blur(3px)" : "none",
                transition: "filter 0.3s ease",
              }}
            />
            {hoveredImage === "a2" && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  opacity: hoveredImage === "a2" ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    animation: "fade-in 1s ease",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                >
                  Hello
                </p>
              </div>
            )}
          </div>
        </Col>
        <Col>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHoveredImage("a3")}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleImageClick("/page7")}
          >
            <Image
              src={require("./images/Prod/a.jpg")}
              height="425.6"
              width="323.92"
              className={
                hoveredImage === "a3" ? "mb-3 blur-image zoom-in" : "mb-3"
              }
              style={{
                filter: hoveredImage === "a3" ? "blur(3px)" : "none",
                transition: "filter 0.3s ease",
              }}
            />
            {hoveredImage === "a3" && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  opacity: hoveredImage === "a3" ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    animation: "fade-in 1s ease",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                >
                  Hello
                </p>
              </div>
            )}
          </div>
        </Col>
        <Col>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHoveredImage("b2")}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleImageClick("/page8")}
          >
            <Image
              src={require("./images/Prod/b.jpg")}
              height="425.6"
              width="323.92"
              className={hoveredImage === "b2" ? "mb-3 blur-image" : "mb-3"}
              style={{
                filter: hoveredImage === "b2" ? "blur(3px)" : "none",
                transition: "filter 0.3s ease",
              }}
            />
            {hoveredImage === "b2" && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  opacity: hoveredImage === "b2" ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    animation: "fade-in 1s ease",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                >
                  Hello
                </p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
