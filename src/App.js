import React, { useState, useRef } from "react";
import "./App.css";
import Exporter from "./Exporter";
import Uploader from "./Uploader";
import Preview from "./Preview";
import CookieConsent from "./CookieConsent";
import "tippy.js/dist/tippy.css";

function App() {
  const ref = useRef();
  const [image, setImage] = useState(null);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("cc")) {
      return;
    }

    setShowCookieConsent(true);
  }, []);

  return (
    <div className="app">
      {showCookieConsent ? <CookieConsent /> : null}
      <div className="header">
        <h1>Twiz.me</h1>
        <h2>
          Twiz is tiny. It has a single purpose - to put your screenshot on a
          beautiful gradient background in a twitter-compatible image size.
        </h2>
      </div>
      <div className="container">
        <Preview ref={ref} image={image} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Uploader onUpload={({ image }) => setImage(image)} />
          {image ? <Exporter node={ref.current} image={image} /> : null}
        </div>
      </div>
      <div className="footer">
        Built by <a href="https://twitter.com/Brslv">@Brslv</a>.
      </div>
    </div>
  );
}

export default App;
