import React, { useState, useRef } from "react";
import "./App.css";
import Exporter from "./Exporter";
import Uploader from "./Uploader";
import Preview from "./Preview";
import CookieConsent from "./CookieConsent";
import "tippy.js/dist/tippy.css";

const ua = window.navigator.userAgent;
const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
const webkit = !!ua.match(/WebKit/i);
const isiOSSafari = iOS && webkit && !ua.match(/CriOS/i);

// Safari 3.0+ "[object HTMLElementConstructor]"
const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function(p) {
    return p.toString() === "[object SafariRemoteNotification]";
  })(
    !window["safari"] ||
      (typeof window.safari !== "undefined" && window.safari.pushNotification)
  );

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
        {isSafari || isiOSSafari ? (
          <div>Browser not supported, yet. Check back later.</div>
        ) : (
          <div>
            <Preview ref={ref} image={image} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Uploader onUpload={({ image }) => setImage(image)} />
              {image ? <Exporter node={ref.current} image={image} /> : null}
            </div>
          </div>
        )}
      </div>
      <div className="footer">
        Built by <a href="https://twitter.com/Brslv">@Brslv</a>.
      </div>
    </div>
  );
}

export default App;
