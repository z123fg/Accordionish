import React, { useEffect, useRef, useState } from "react";
import classes from "./AcdCollapse.module.scss";

type Props = {
  collapseHeight?: number;
  children: React.ReactNode;
  timeout?: number;
  in: boolean;
  onEntering?: () => void;
  onEntered?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
  onClick?:(e:any) => {};
};

type EnterState = "entering" | "entered" | "exiting" | "exited";

const AcdCollapse: React.FC<Props> = (props) => {
  const [enterState, setEnterState] = useState<EnterState>("exited");
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<string | null>(null);
  const {
    collapseHeight = 0,
    timeout = 300,
    onEntering = () => {},
    onEntered = () => {},
    onExiting = () => {},
    onExited = () => {},
  } = props;
  useEffect(() => {
    inHanlder();
  }, [props.in]);
  const inHanlder = () => {
    if (props.in && enterState !== "entered") {
      setEnterState("entering");
      heightRef.current = containerRef.current
        ? containerRef.current.clientHeight + "px"
        : "auto";
      onEntering();
    } else if (!props.in && enterState !== "exited") {
      setEnterState("exiting");
      heightRef.current = `${collapseHeight}px`;
      onExiting();
    }
  };

  const transitionEndHandler = () => {
    if (enterState === "entering") {
      setEnterState("entered");
      onEntered();
    } else if (enterState === "exiting") {
      setEnterState("exited");
      onExited();
    }
  };
  return (
    <div
    onClick={props.onClick}
      className={classes.AcdCollapse_root}
      style={{
        height: heightRef.current ? heightRef.current : `${collapseHeight}px`,
        transition: `height ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
      }}
      onTransitionEnd={transitionEndHandler}
    >
      <div ref={containerRef}>{props.children}</div>
    </div>
  );
};

export default AcdCollapse;
