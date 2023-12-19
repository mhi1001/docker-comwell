"use client";
import React, { useState, useEffect } from "react";
import { NavbarPrimary } from "./navbarprimary";
import { NavbarSecondary } from "./navbarsecondary";

export function Navbar() {
  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);

  const handleSecondaryNavbarToggle = () => {
    setShowSecondaryNavbar(!showSecondaryNavbar);
  };

  //handling closing the secondary navbar
  const closeSecondaryNavbar = () => {
    setShowSecondaryNavbar(false);
  };
  
  //Clicking outside the secondarynavbar makes it go away
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showSecondaryNavbar && !event.target.closest(".navbar-secondary")) {
        closeSecondaryNavbar();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    //Clean up event listener
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [showSecondaryNavbar]);

  return (
    <>
      {!showSecondaryNavbar && (
        <NavbarPrimary onSecondaryNavbarToggle={handleSecondaryNavbarToggle} />
      )}
      {showSecondaryNavbar && <NavbarSecondary />}
    </>
  );
}
