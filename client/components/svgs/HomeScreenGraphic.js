import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeScreenGraphic = () => {
    return (
        <Svg
            width={193}
            height={100}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M5 96.5c-2.761 0-5.013-2.24-4.87-4.998a96.5 96.5 0 01182.145-39.217c1.265 2.454.135 5.423-2.382 6.56l-.112.05c-2.517 1.136-5.466.01-6.746-2.438A86.377 86.377 0 0010.268 91.502c-.16 2.757-2.383 4.998-5.145 4.998H5z"
                fill="#355C97"
            />
            <Path
                d="M22.03 95.87c-2.762 0-5.017-2.241-4.843-4.997A79.472 79.472 0 01163.646 53.36c1.477 2.333.577 5.382-1.845 6.71l-.135.074c-2.421 1.327-5.445.428-6.944-1.89a69.312 69.312 0 00-75.42-29.533 69.317 69.317 0 00-51.938 62.153c-.199 2.754-2.419 4.996-5.18 4.996h-.154z"
                fill="#FC9C9E"
            />
            <Path
                d="M39.374 96.5c-2.761 0-5.02-2.243-4.799-4.995a62.127 62.127 0 01123.85 0c.222 2.752-2.037 4.995-4.799 4.995h-.197c-2.762 0-4.975-2.244-5.241-4.993a51.926 51.926 0 00-88.407-31.726 51.93 51.93 0 00-14.969 31.726c-.265 2.749-2.479 4.993-5.24 4.993h-.198z"
                fill="#F94144"
            />
        </Svg>
    )
}

export default HomeScreenGraphic
