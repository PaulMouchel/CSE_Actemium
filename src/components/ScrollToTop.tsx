import { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }: PropsWithChildren) => {

    const location = useLocation()

    useEffect(() => {
        if (
            location.pathname !== "/#news" &&
            location.pathname !== "/#benefits" &&
            location.pathname !== "/#cssct" &&
            location.pathname !== "/#team" &&
            location.pathname !== "/#contact" &&
            location.pathname !== "/"
        )
        window.scrollTo(0, 0)
    }, [location]);

    return children
}

export default ScrollToTop