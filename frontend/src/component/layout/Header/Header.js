import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/iconbest.png";
import "./Header.css";

const options = {
  burgerColorHover: "#eb4034",
  
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",



  link1BackgroundColor: "#514e4e",
  link2BackgroundColor: "#514e4e",
  link3BackgroundColor: "#514e4e",
  link4BackgroundColor: "#514e4e",
  link1AnimationTime: 0.8 ,
  link2AnimationTime: 1 ,
  link3AnimationTime: 1.2 ,
  link4AnimationTime: 1.4 ,


  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2vmax",
  link2Size: "2vmax",
  link3Size: "2vmax",
  link4Size: "2vmax",
  link1Color: "rgba(35, 35, 35,0.8)",

  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;