import * as React from "react";
import Svg, { Path } from "react-native-svg";

const InclineTrendIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: 16 }}
        >
            <Path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                fill="#FFD952"
            />
            <Path
                d="M4.77 14.743l4.775-4.775a.922.922 0 011.304 0l.75.75-5.434 5.435-1.403-1.403.007-.007z"
                fill="#1B2F4D"
            />
            <Path
                d="M13.386 12.482l-2.14-2.14-1.402 1.403 2.14 2.14 1.402-1.403z"
                fill="#1B2F4D"
            />
            <Path
                d="M11.896 13.786l4.488-4.488 1.403 1.403-3.878 3.878a.863.863 0 01-1.22 0l-.793-.793z"
                fill="#1B2F4D"
            />
            <Path
                d="M18.972 12.516h.01V8.112h-4.403v.01l4.393 4.394z"
                fill="#1B2F4D"
            />
        </Svg>
    )
}

export default InclineTrendIcon
