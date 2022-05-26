import React from "react";
import "./App.css";
import Accordionish from "./Accordionish/Accordionish";
import AccordionishDetails from "./Accordionish/AccordionishDetails/AccordionishDetails";
import AccordionishSummary from "./Accordionish/AccordionishSummary/AccordionishSummary";
import ExpandIcon from "./ExpandIcon/ExpandIcon";

function App() {
  return (
    <div style={{ width: "60%" }}>
      <Accordionish>
        <AccordionishSummary expandIcon={<ExpandIcon />}>
          Accordion 1
        </AccordionishSummary>
        <AccordionishDetails>
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionishDetails>
      </Accordionish>
      <Accordionish>
        <AccordionishSummary expandIcon={<ExpandIcon />}>
          Accordion 2{" "}
        </AccordionishSummary>
        <AccordionishDetails>
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionishDetails>
      </Accordionish>
      <Accordionish>
        <AccordionishSummary expandIcon={<ExpandIcon />}>
          Accordion 1{" "}
        </AccordionishSummary>
        <AccordionishDetails>
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionishDetails>
      </Accordionish>
      <Accordionish>
        <AccordionishSummary expandIcon={<ExpandIcon />}>
          Accordion 1{" "}
        </AccordionishSummary>
        <AccordionishDetails>
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionishDetails>
      </Accordionish>
      <Accordionish>
        <AccordionishSummary expandIcon={<ExpandIcon />}>
          Accordion 1{" "}
        </AccordionishSummary>
        <AccordionishDetails>
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionishDetails>
      </Accordionish>
    </div>
  );
}

export default App;
