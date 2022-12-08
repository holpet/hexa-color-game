import React from "react";
import { Result } from "../Constants";

const Alerts = (props: { result: Result | undefined }) => {
  return (
    <>
      <p
        className="success"
        style={{ display: props.result === Result.Correct ? "block" : "none" }}
      >
        Success!
      </p>
      <p
        className="failure"
        style={{ display: props.result === Result.Wrong ? "block" : "none" }}
      >
        Failure!
      </p>
    </>
  );
};

export default Alerts;
