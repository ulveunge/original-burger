import React from "react";

const HeaderIntersectionContext = React.createContext({
  isIntersecting: false,
  checkIntersection: (inView) => {},
});

export default HeaderIntersectionContext;
