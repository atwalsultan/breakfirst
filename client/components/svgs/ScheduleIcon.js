import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ScheduleIcon = () => {
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
                d="M9.19 18.1c.092.345.22.68.38 1H4.1a2 2 0 01-2-2v-10h18v3a6.49 6.49 0 00-1-.55v.02a5.269 5.269 0 00-1-.38 7 7 0 00-2-.29 7.21 7.21 0 00-7.2 7.2c-.003.335.024.67.08 1 .038.339.109.674.21 1zM19.1 5.1h1a2 2 0 00-2-2h-14a2 2 0 00-2 2h17z"
                fill="#1B2F4D"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.1 22.1a6 6 0 110-12 6 6 0 010 12zm-1-9v2.91a1.01 1.01 0 00.29.8l2.5 2.5a1.001 1.001 0 00.71.29 1 1 0 00.71-1.71l-2.21-2.21V13.1a1 1 0 00-2 0z"
                fill="#1B2F4D"
            />
            <Path
                d="M7.1 6.1a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zM15.1 6.1a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1z"
                fill="#1B2F4D"
            />
        </Svg>
    )
}

export default ScheduleIcon
