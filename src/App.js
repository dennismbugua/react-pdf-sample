import React from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";
import samplePDF from "./sample.pdf";

import "./styles.css";

export default function App() {
  const [pdf, setPdf] = React.useState(samplePDF);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setPdf(reader.result);
          };
        }}
      />

      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={pdf} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={pdf} />
      </div>

      <hr />

      <h4>Base 64 Single Page</h4>
      <SinglePagePDFViewer pdf={pdf} />

      <hr />
    </div>
  );
}
