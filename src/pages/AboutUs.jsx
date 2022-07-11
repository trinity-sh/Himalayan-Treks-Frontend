import React from "react";
import "./styles/about.css";
import AboutHeaderImg from "../Assets/about.jpeg";
import Explore from "../Assets/EXPLORE.png";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../Assets/Kedarkantha1.jpg";
import Img2 from "../Assets/Kedarkantha12.jpg";
import Img3 from "../Assets/Kedarkantha7.jpg";
import Img4 from "../Assets/KEDARTAL2.jpg";
import Img5 from "../Assets/KEDARTAL4.jpg";
import Founder from "../Assets/founder.jpeg";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutHeader">
        <img src={AboutHeaderImg}></img>
      </div>
      <div className="AbtUsContainer">
        <div className="AbtUS">
          <h3>About Us</h3>
          <h2>
            Fully dedicated <br /> to provide best <br />{" "}
            <span className="trekspan">trekking experience</span>
          </h2>
          <p>
            Himalayan Dreamtreks is a mission-driven outdoor adventure company.
            The aim is to make destinations that aren't always found on standard
            maps available to people who enjoy visiting new locations. Outdoors
            Enthusiasts will enjoy some of the best outdoor travel opportunities
            in the Indian Himalayas – lush valleys, craggy mountains, high
            altitude cold deserts, winding rivers, thick forests – a smorgasbord
            of sensory experiences that can only be found in the outdoors.
          </p>
        </div>
        <div className="ExploreImg">
          <img src={Explore} />
        </div>
      </div>
      <div className="WhyUs">
        <h2>
          Why <span>Choose</span> Us{" "}
        </h2>
        <section className="cards">
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Exp. Trek Guide </Card.Title>
              <Card.Text className="purpose">
                We are a community of people from the Indian Himalayas, mostly
                from different villages. We have a team of qualified and
                professional guides/trip leaders on board. The majority of the
                instructors have received their training from well-known
                mountain schools.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Affordable Rates </Card.Title>
              <Card.Text className="purpose">
                We believe in affordable trekking, not money-making. Our founder
                Sobhinder Singh believes in making relationships, not gaining
                profit. Due to in-house equipment & an in-house team, we are
                able to provide affordable rates to our clients. Due to these
                reason clients love us.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Best Equipments</Card.Title>
              <Card.Text className="purpose">
                To ensure great delivery, our team is ably supported by our
                infrastructure. We have a large fleet of rafts, service
                vehicles, imported cycles, top-of-the-line camping and climbing
                equipment, as well as offices to assist you in planning and
                booking your trips.
              </Card.Text>
            </Card.Body>
          </Card>
        </section>

        <div className="Moments">
          <h2>
            Memorable <span style={{ color: "#DA0037" }}>Moments</span>
          </h2>
          <section className="ImgGallery">
            <div className="images">
              <img src={Img1} style={{ width: "20vw", height: "50vh" }} />
            </div>
            <div className="images">
              <img src={Img2} style={{ width: "20vw", height: "50vh" }} />
            </div>
            <div className="images">
              <img src={Img3} style={{ width: "20vw", height: "50vh" }} />
            </div>
            <div className="images">
              <img src={Img4} style={{ width: "20vw", height: "50vh" }} />
            </div>
            <div className="images">
              <img src={Img5} style={{ width: "20vw", height: "50vh" }} />
            </div>
          </section>
        </div>
      </div>
      <div className="FounderCards">
        <div className="FounderImg">
          <img src={Founder} />
        </div>
        <div className="FounderInfo">
          <p>Founder</p> <h2>Vijay Singh</h2>
          <p>
            Our founder Mr. Vijay Singh is an outdoor enthusiast & wanderlust{" "}
            nature person. Continuously working hard for the growth of Himalayan
            Dreamtreks. He had dreamed of showing people the beauty of the
            Himalayas. That's why after graduation, he learned about the
            mountains & how to climb them. He had complete both Basic & Advanced
            mountaineering course from Nehru Institute Of Mountaineering
          </p>
        </div>
      </div>
      {/* <div className="ChefCards">
        <div className="ChefImg">
          <img src="https://himalayandreamtreks.in/wp-content/uploads/elementor/thumbs/IMG-20210301-WA0013-min-1-1-pdteyd0v7vqcy1vrfq0dcuk0q6e2umzztj2omk858o.jpg" />
        </div>
        <div className="ChefInfo">
          <p>Chef</p> <h2>VIRENDRA RANA</h2>{" "}
          <p>
            A native of Uttarkashi, Uttarakhand, Virendra Rana is a small town{" "}
            men with a big city attitude. Our chef Virendra Rana is a talented &
            experienced chef. He had exp. of more than 10+ years in cooking.
            Already worked for many hotels & reputed trekking agency. He is well
            qualified in making all types of cuisine.{" "}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
