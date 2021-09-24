import { useRef } from "react";

import { useIntersection } from "react-use";

const isNearScreen = ({ref, margin, threshold}) => {
    ref = useRef(null);

    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: margin || "-50px",
        threshold: threshold,
    });
}


export default isNearScreen