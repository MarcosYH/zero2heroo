import React from "react";
import { Link } from "react-router-dom";

export default function Backtotop() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="backtotop">
        <Link to="#" className="scroll" onClick={scrollToTop}>
          <i className="far fa-arrow-up" />
        </Link>
      </div>
    </div>
  );
}
