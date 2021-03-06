import * as React from "react";
import Svg, {  G, Path, Defs, ClipPath } from "react-native-svg";

const SadFaceIcon = () => {
    return (
        <Svg
            width={40}
            height={40}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G clipPath="url(#prefix__clip0_1600_2050)" fill="#355C97">
                <Path d="M20 40a20 20 0 1120-20 20.03 20.03 0 01-20 20zm0-36.923A16.923 16.923 0 1036.923 20 16.944 16.944 0 0020 3.077z" />
                <Path d="M25.641 20a2.564 2.564 0 100-5.128 2.564 2.564 0 000 5.128zM27.18 31.795a1.538 1.538 0 01-1.406-.913 6.82 6.82 0 00-11.548 0 1.54 1.54 0 01-2.81-1.241 9.846 9.846 0 0117.169 0 1.518 1.518 0 01-.79 2.051 1.445 1.445 0 01-.616.103zM31.282 15.385a1.56 1.56 0 01-.605-.123l-7.18-3.077a1.54 1.54 0 01.033-2.844 1.54 1.54 0 011.178.013l7.18 3.077a1.539 1.539 0 01-.606 2.954zM14.359 20a2.564 2.564 0 100-5.128 2.564 2.564 0 000 5.128zM8.718 15.385a1.539 1.539 0 01-.605-2.954l7.18-3.077a1.54 1.54 0 011.21 2.83l-7.18 3.078a1.559 1.559 0 01-.605.123z" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0_1600_2050">
                    <Path fill="#fff" d="M0 0h40v40H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SadFaceIcon
