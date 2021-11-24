import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AppLogo = () => {
    return (
        <Svg
            width={49}
            height={56}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.395 13.974V41.91L24.23 55.872V27.936l24.154-13.962h.012z"
                fill="#F94144"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.23 27.936L.062 41.91V13.974l24.166 13.962z"
                fill="#1B2F4D"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.383 13.974L24.23 27.936.063 13.974v-.012L24.229 0l24.154 13.974z"
                fill="#FA6B6D"
            />
        </Svg>
    )
}

export default AppLogo
