import React from "react";

export default function Uploader({ onUpload }) {
  const ref = React.useRef();

  function _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      onUpload({ image: reader.result });
    };

    reader.readAsDataURL(file);
  }

  function _onUpload() {
    if (ref && ref.current) {
      ref.current.click();
    }
  }

  return (
    <React.Fragment>
      <input
        ref={ref}
        type="file"
        onChange={_handleImageChange}
        style={{ display: "none" }}
      />
      <button className="btn" onClick={_onUpload}>
        Upload image
      </button>
    </React.Fragment>
  );
}
