import React from "react";
import { presets } from "./constants";
import "./Palette.css";
// import Tippy from "@tippyjs/react";

export default function Palette({ onChoose }) {
  const styles = {
    preset: (p) => ({
      ...presets[p],
    }),
  };

  return (
    <div className="presets">
      {Object.keys(presets).map((p) => {
        return (
          <div
            key={p}
            onClick={() => onChoose(p)}
            className="preset"
            style={styles.preset(p)}
          />
        );
      })}
    </div>
  );
}
