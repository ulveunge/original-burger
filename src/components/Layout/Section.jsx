import React from "react";

import "./Section.scss";

function Section(props) {
  const styles = {
    ...(props.bg && {
      background: `url(${props.bg}) no-repeat center center`,
      backgroundSize: "cover",
    }),
    ...(props.padding && { padding: `${props.padding} 0` }),
  };

  return (
    <section
      style={styles}
      className={`section ${props.className} section-padding ${
        props.mode ? props.mode : ""
      }`}
    >
      {props.children}
    </section>
  );
}

export default Section;
