import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram1 = () => {
    window.location = "https://instagram.com/aryaanguptaa";
  };
  const visitInstagram2 = () => {
    window.location = "https://instagram.com/prathamtyagii";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dtupil7mi/image/upload/v1689514680/Screenshot_2023-07-16_at_7.02.25_PM_uqwtan.png"
              alt="Founder"
            />
            <Typography>Aryan Gupta</Typography>
            <Button onClick={visitInstagram1} color="primary">
              Visit Instagram
            </Button>
            <span>
            Hi, I am a fourth year IT undergrad from DTU and am a passionate sneaker enthusiast, a true "Sneakerhead Extraordinaire."
            </span>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dtupil7mi/image/upload/v1689514729/Screenshot_2023-07-16_at_7.05.35_PM_mxehio.png"
              alt="Founder"
            />
            <Typography>Pratham Tyagi</Typography>
            <Button onClick={visitInstagram2} color="primary">
              Visit Instagram
            </Button>
            <span>
            Hola, I am a fourth year CS undergrad from DTU. Being a sneakerhead with an impeccable sense of style
            I am providing 100 % genuine sneakers at affordable rates.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
