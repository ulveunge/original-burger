import "./BackToTopButton.scss";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import React from "react";
import ScrollIntoView from "react-scroll-into-view";

function BackToTopButton() {
  return (
    <ScrollIntoView selector="#header">
      <button className="back-to-top-btn slide-in-bottom">
        <MdOutlineKeyboardArrowUp size="16" color="#fff" />
      </button>
    </ScrollIntoView>
  );
}

export default BackToTopButton;
