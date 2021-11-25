import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LockOpenIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M17.12 11H6.88a.868.868 0 00-.88.855v7.29c0 .472.394.855.88.855h10.24c.486 0 .88-.383.88-.855v-7.29a.868.868 0 00-.88-.855z"
                fill="#1B2F4D"
                stroke="#1B2F4D"
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M9 10.55v-4.1A2.45 2.45 0 0111.45 4h1.1A2.45 2.45 0 0115 6.45V7"
                stroke="#1B2F4D"
                strokeWidth={2}
                strokeMiterlimit={10}
            />
        </Svg>
    )
}

export default LockOpenIcon
