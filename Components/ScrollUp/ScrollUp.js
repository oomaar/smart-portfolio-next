import { useEffect, useState } from "react";
import {
    ScrollUpLink,
    ScrollupIcon,
} from "./styledScrollUp";

export const ScrollUp = () => {
    const [show, setShow] = useState(false);

    const showScrollUpLink = () => window.scrollY > 100 ? setShow(true) : setShow(false);

    useEffect(() => {
        window.addEventListener("scroll", showScrollUpLink);

        return () => window.removeEventListener("scroll", showScrollUpLink);
    });

    return (
        <ScrollUpLink href="#" show={show}>
            <ScrollupIcon>
                <i className="uil uil-arrow-up"></i>
            </ScrollupIcon>
        </ScrollUpLink>
    );
};