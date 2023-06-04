import React, { useState } from "react";
import HeaderIntersectionContext from "./header-intersection-context";

function HeaderIntersectionProvider(props) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const intersectionHandler = (inView) => {
    setIsIntersecting(inView);
  };

  const headerIntersectionContext = {
    isIntersecting,
    checkIntersection: intersectionHandler,
  };

  return (
    <HeaderIntersectionContext.Provider value={headerIntersectionContext}>
      {props.children}
    </HeaderIntersectionContext.Provider>
  );
}

export default HeaderIntersectionProvider;
