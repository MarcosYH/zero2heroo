import React from "react";
import { Link } from "react-router-dom";

export default function Backtotop() {
  return (
    <div>
      <div className="backtotop">
        <Link to="#" className="scroll">
          <i className="far fa-arrow-up" />
        </Link>
      </div>
    </div>
  );
}
