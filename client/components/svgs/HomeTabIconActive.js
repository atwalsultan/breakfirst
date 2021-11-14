import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeTabIconActive = () => {
    return (
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M14.627 16c-.4-.005-.793.113-1.125.337a1.124 1.124 0 01.799-.337h.326zM18.486 16.337A1.97 1.97 0 0017.361 16h.315a1.127 1.127 0 01.81.337z"
                fill="#000"
            />
            <Path
                d="M25.001 13.289v9.585A2.25 2.25 0 0122.751 25h-3.938v-7.875a1.125 1.125 0 00-.304-.765 1.124 1.124 0 00-.798-.338h-3.376a1.124 1.124 0 00-.798.338c-.195.207-.303.48-.304.765V25H9.25A2.25 2.25 0 017 22.874v-9.585a2.104 2.104 0 011.013-1.778l6.75-4.163a2.374 2.374 0 012.475 0l6.75 4.163a2.104 2.104 0 011.013 1.778z"
                fill="#F94144"
            />
        </Svg>
    )
}

export default HomeTabIconActive
