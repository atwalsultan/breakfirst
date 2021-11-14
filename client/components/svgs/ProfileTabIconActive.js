import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileTabIconActive = () => {
    return (
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M22.16 24a1.14 1.14 0 00.87-1.61c-.89-2.33-3-6.39-7-6.39s-6.14 4.06-7 6.39A1.14 1.14 0 009.9 24h12.26z"
                fill="#F94144"
            />
            <Path
                d="M22.16 25H9.84a1.8 1.8 0 01-1.52-.93A2.42 2.42 0 018.16 22c1-2.61 3.32-7 7.84-7s6.85 4.39 7.84 7a2.42 2.42 0 01-.16 2.07 1.8 1.8 0 01-1.52.93zM16 17.06c-3.5 0-5.39 3.63-6.21 5.79a.25.25 0 000 .15l12.38.06a.25.25 0 000-.21c-.78-2.16-2.67-5.79-6.17-5.79zM16.1 13.1a3 3 0 100-6 3 3 0 000 6z"
                fill="#F94144"
            />
            <Path
                d="M16.1 14a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                fill="#F94144"
            />
        </Svg>
    )
}

export default ProfileTabIconActive
