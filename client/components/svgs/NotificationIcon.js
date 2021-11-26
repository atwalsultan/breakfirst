import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NotificationIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path d="M15.43 20.1a3.77 3.77 0 01-6.66 0h6.66z" fill="#1B2F4D" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.1 3.1a1 1 0 10-2 0v.057A5.78 5.78 0 006.15 8.7v2a6.39 6.39 0 01-1.9 4.42 2.37 2.37 0 00-.65 1.74 2.6 2.6 0 002.69 2.27h11.62a2.6 2.6 0 002.69-2.27 2.37 2.37 0 00-.65-1.74 6.39 6.39 0 01-1.9-4.42V8.96a5.92 5.92 0 00-4.95-5.752V3.1z"
                fill="#1B2F4D"
            />
        </Svg>
    )
}

export default NotificationIcon
