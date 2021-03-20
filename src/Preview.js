import React from "react";
import "./Preview.css";
import Palette from "./Palette";
import { presets, DEFAULT_PRESET } from "./constants";

const Preview = React.forwardRef(({ image }, ref) => {
  const [preset, setPreset] = React.useState(DEFAULT_PRESET);

  function onPresetChoose(preset) {
    setPreset(preset);
  }

  const styles = {
    background: (preset) => ({
      ...presets[preset],
    }),
  };

  return (
    <div className="preview">
      <Palette onChoose={onPresetChoose} />
      <div className="zoom-container">
        <div className="preview-box">
          <div
            ref={ref}
            className="background"
            style={styles.background(preset)}
          >
            <div className="image-container">
              {image ? (
                <img src={image} alt="User uploaded" className="image" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Preview;
