import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DeclineIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 11.588h-.01l-1.486 1.498-4.18-4.214a.984.984 0 00-1.397 0l-.615.62-.005-.004-2.016 2.032-4.894-4.933L4 7.995l5.589 5.635a.984.984 0 001.397 0l.34-.343.003.004 2.292-2.311 3.486 3.514L15.613 16H20v-4.412z"
                fill="#0CD9B4"
            />
        </Svg>
    )
}

export default DeclineIcon
