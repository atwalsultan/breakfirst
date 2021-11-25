import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HappyFaceIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: 16 }}
        >
            <Path
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM7 9.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm9.47 4.66a4.66 4.66 0 01-8.94 0 .48.48 0 01.24-.603A.52.52 0 018 13.5h8a.52.52 0 01.41.21.48.48 0 01.06.45zm-1-3.16a1.5 1.5 0 11.03 0h-.03z"
                fill="#0CD9B4"
            />
        </Svg>
    )
}

export default HappyFaceIcon
