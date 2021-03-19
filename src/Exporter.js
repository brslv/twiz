import domtoimage from "dom-to-image";

export default function Exporter({ node, image }) {
  const ex = () => {
    const scale = 3;

    const style = {
      transform: "scale(" + scale + ")",
      transformOrigin: "top left",
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
    };

    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      quality: 1,
      style,
    };

    domtoimage.toJpeg(node, param).then(function(dataUrl) {
      var link = document.createElement("a");
      link.download = "img.jpeg";
      link.href = dataUrl;
      link.click();
    });

    if (window.gtag && typeof window.gtag === "function") {
      window.gtag("evet", "download");
    }
  };

  return (
    <button onClick={ex} className="btn">
      Download
    </button>
  );
}
