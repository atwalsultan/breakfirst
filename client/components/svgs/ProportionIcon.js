import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProportionIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path d="M20.821 12.58a9.41 9.41 0 11-9.4-9.4v9.4h9.4z" fill="#B3C7E5" />
            <Path
                d="M22 10.232h-8.232V2a8.202 8.202 0 017.752 5.485c.323.88.486 1.81.48 2.747z"
                fill="#1B2F4D"
            />
        </Svg>
    )
}

export default ProportionIcon
