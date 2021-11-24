import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IncreaseIcon = () => {
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
                d="M20 10.999h-.01l-1.486-1.498-4.18 4.213a.984.984 0 01-1.397 0l-.615-.62-.005.005-2.016-2.032L5.397 16 4 14.591l5.589-5.634a.984.984 0 011.397 0l.34.342.003-.003 2.292 2.31 3.486-3.514-1.494-1.505H20v4.412z"
                fill="#DE070B"
            />
        </Svg>
    )
}

export default IncreaseIcon
