import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GroupIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M22.1 18.1a2.24 2.24 0 01-.41 1.31 1.6 1.6 0 01-1.3.69h-5.14c.106-.08.203-.17.29-.27a2.29 2.29 0 00.48-2 10.14 10.14 0 00-3-5.73 4.76 4.76 0 012.83-.94 4.999 4.999 0 013.69 1.7 8.223 8.223 0 011.22 1.64 14.2 14.2 0 011.27 2.9c.063.228.086.465.07.7z"
                fill="#1B2F4D"
            />
            <Path
                d="M14.69 18.1a2.24 2.24 0 01-.41 1.31 1.6 1.6 0 01-1.3.69H3.8a1.61 1.61 0 01-1.3-.69 2.3 2.3 0 01-.29-2c1.31-4 3.5-6.24 6.18-6.24h.42a5.09 5.09 0 013.27 1.68 8.31 8.31 0 011.2 1.62c.53.916.956 1.889 1.27 2.9.09.233.137.48.14.73zM10.9 5.1a3.16 3.16 0 00-.78-.68 3.24 3.24 0 00-3.46 0 3.25 3.25 0 00-.51 5.14 3.24 3.24 0 004.48 0c.1-.083.19-.177.27-.28a3.25 3.25 0 000-4.18zM18.1 4.87a3.27 3.27 0 00-2.31-1 3.27 3.27 0 101.814 5.988A3.27 3.27 0 0018.1 4.83v.04z"
                fill="#1B2F4D"
            />
        </Svg>
    )
}

export default GroupIcon
