import React, {  useState } from "react";
import classes from "./Accordionish.module.scss";
//import Collapse from '@material-ui/core/Collapse';
import AcdCollapse from  '../transition-component/AcdCollapse';

type Props = {
  children: NonNullable<React.ReactElement[]>;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onChange?: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
};

const Accordionish: React.FC<Props> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const AccordionSummary = children[0];
  const AccordionDetails = children.slice(1);

  const unexpandedClasses = [
   
    classes.Acd_root,
    classes.Paper_elevation1,
    classes.Paper_rounded,
    classes.Paper_root, 
    classes.Acd_rounded,
  ].join(" ");

  const expandedClasses = unexpandedClasses + " " + classes.expanded;

  return (
    <div
      onClick={handleClick}
      className={expanded ? expandedClasses : unexpandedClasses}
    >
      {React.cloneElement(AccordionSummary,{expanded:expanded})}
      

        <AcdCollapse in={expanded} timeout={300} onClick={(e)=>e.stopPropagation()}>
          {AccordionDetails}
        </AcdCollapse>
      </div>
  );
};

export default Accordionish;
