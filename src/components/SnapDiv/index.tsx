import React from "react";
import "./styles.css";

interface SnapDivProps {
    index: number;
}

const SnapDiv: React.FC<SnapDivProps> = ({ index }) => {
    //The background will be the index % colors.length so it repeats forever
    const colors = ["red", "orange", "yellow"];
    return (
        <div
            className="snapDivContainer"
            style={{
                backgroundColor: colors[index % colors.length],
                color: "black",
            }}
        >
            WOW! LOOK AT THIS {colors[index % colors.length]} DIV!!!
        </div>
    );
};

export default SnapDiv;
