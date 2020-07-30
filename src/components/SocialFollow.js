import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://www.instagram.com/craftobuy"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color="grey"/>
      </a>
    </div>
  );
}