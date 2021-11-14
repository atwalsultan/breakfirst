import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeTabIcon = () => {
    return (
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M14.78 16a1.75 1.75 0 00-1 .3.999.999 0 01.71-.3h.29zM18.21 16.3a1.75 1.75 0 00-1-.3h.28a1 1 0 01.72.3z"
                fill="#142339"
                fillOpacity={0.6}
            />
            <Path
                d="M25 13.288v9.585A2.25 2.25 0 0122.75 25h-3.938v-7.876a1.125 1.125 0 00-.303-.765 1.125 1.125 0 00-.799-.337h-3.375a1.125 1.125 0 00-.799.337c-.194.208-.303.481-.303.765V25H9.25A2.25 2.25 0 017 22.873v-9.585a2.104 2.104 0 011.012-1.778l6.75-4.162a2.374 2.374 0 012.476 0l6.75 4.162A2.103 2.103 0 0125 13.288z"
                fill="#142339"
                fillOpacity={0.6}
            />
        </Svg>
    )
}

export default HomeTabIcon
