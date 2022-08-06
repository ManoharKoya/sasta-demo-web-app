import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import React, { useEffect } from "react";

import "../css/Navbar.css";


const Navbar = () => {
  
  // useEffect(() => {
  //   console.log("hit\n");
  //   Particles.init({
  //     selector: ".background",
  //     connectParticles: true,
  //     color: "#f64c72",
  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         options: {
  //           maxParticles: 100
  //         }
  //       },
  //       {
  //         breakpoint: 889,
  //         options: {
  //           maxParticles: 100
  //         }
  //       },
  //       {
  //         breakpoint: 768,
  //         options: {
  //           maxParticles: 100
  //         },
  //       },
  //       {
  //         breakpoint: 425,
  //         options: {
  //           maxParticles: 100
  //         },
  //       },
  //       {
  //         breakpoint: 320,
  //         options: {
  //           maxParticles: 0
  //         },
  //       },
  //     ],
  //   });
  // });

  return (
    <nav className="nav">
      <div className="web-title">
        <a href="/">ShoppingPlanner</a>
      </div>
      <div className="nav-links">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/moto">Moto</CustomLink>
        <CustomLink to="/contact-us">ContactUs</CustomLink>
      </div>
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath("/moto");
  const isMoto = useMatch({ path: resolvedPath.pathname, end: true });

  // var particlesCanvas = document.getElementById("moving-particles");
  // if (particlesCanvas !== null && particlesCanvas !== undefined) {
  //   if (isMoto) {
  //     particlesCanvas.style.visibility = "visible";
  //   } else {
  //     particlesCanvas.style.visibility = "hidden";
  //   }
  // }
  return (
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
  );
};

export default Navbar;
