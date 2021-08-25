import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/#news" 
    && location.pathname !== "/#benefits"
    && location.pathname !== "/#cssct"
    && location.pathname !== "/#team"
    && location.pathname !== "/#contact"
    && location.pathname !== "/")
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;