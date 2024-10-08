import React, { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import SnapDiv from "../SnapDiv";
import "./styles.css";

interface ScrollContainerProps {}

const ScrollContainer: React.FC<ScrollContainerProps> = ({}) => {
    // An array of snapDivs that will be sent their index.  They will handle that index
    const [snapDivCount, setSnapDivCount] = useState<number>(2);
    // We use this to attach a function to the scroll event
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Function that detects if we are at the bottom of the list
    const handleScroll = () => {
        const scrollContainer = containerRef.current;

        if (scrollContainer) {
            // Gives a bit of a buffer for fuzzy math or odd interactions
            const buffer = scrollContainer.clientHeight / 2;
            const isAtBottom =
                scrollContainer.scrollTop + scrollContainer.clientHeight >=
                scrollContainer.scrollHeight - buffer;

            if (isAtBottom) {
                setSnapDivCount((oldCount) => oldCount + 1);
            }
        }
    };

    useEffect(() => {
        const scrollContainer = containerRef.current;

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);

            return () => {
                scrollContainer?.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <div className="scrollContainer" ref={containerRef}>
            {Array.from({ length: snapDivCount }).map((unusedVar, index) => (
                <SnapDiv key={index} index={index} />
            ))}
        </div>
    );
};

export default ScrollContainer;
