import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HeaderIntersectionContext from "../../store/header-intersection-context";

function Header(props) {
  const headerIntersectionCtx = useContext(HeaderIntersectionContext);

  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    headerIntersectionCtx.checkIntersection(inView);
  }, [inView, headerIntersectionCtx]);

  return (
    <header ref={ref} className={`header ${props.className}`}>
      {props.children}
    </header>
  );
}

export default Header;
