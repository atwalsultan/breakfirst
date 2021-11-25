import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AddIconWhite = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M3 12h18M12 3v18"
                stroke="#FFFFFF"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default AddIconWhite
