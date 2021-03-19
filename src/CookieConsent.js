import React from "react";
import "./CookieConsent.css";

export default function CookieConsent() {
  const [clicked, setClicked] = React.useState(false);

  function onClick() {
    localStorage.setItem("cc", true);
    setClicked(true);
  }

  if (clicked) return null;

  return (
    <div className="cookie-consent">
      <span>This site uses cookies.</span>
      <button className="btn" onClick={onClick}>
        OK
      </button>
    </div>
  );
}
