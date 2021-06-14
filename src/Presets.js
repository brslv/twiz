import React from "react";
import { presets } from "./constants";

export default function Presets({ onChoose }) {
  const styles = {
    preset: (preset) => ({
      ...presets[preset],
    }),
  };

  return (
    <div className="presets test">
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
