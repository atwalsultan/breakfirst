import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileTabIcon = () => {
    return (
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.156 13.41a3.5 3.5 0 103.889-5.82 3.5 3.5 0 00-3.89 5.82zM8.957 24.736A1.8 1.8 0 009.84 25h12.32a1.8 1.8 0 001.52-.93 2.42 2.42 0 00.16-2.07c-.99-2.61-3.32-7-7.84-7s-6.84 4.39-7.84 7a2.42 2.42 0 00.16 2.07c.151.274.37.503.637.666z"
                fill="#142339"
                fillOpacity={0.6}
            />
        </Svg>
    )
}

export default ProfileTabIcon
