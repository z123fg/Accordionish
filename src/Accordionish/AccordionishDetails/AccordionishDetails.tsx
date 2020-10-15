import React from "react";
import classes from './AccordionishDetails.module.scss'

type Props = {
  children?: React.ReactNode;
};

const AccordionishDetails: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className={classes.innerContainer}>
        <p className={classes.typography}>{children}</p>
      </div>
    </div>
  );
};

export default AccordionishDetails;
