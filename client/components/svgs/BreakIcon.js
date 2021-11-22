import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet } from 'react-native';

const BreakIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M11.98 5.162a1.983 1.983 0 10.002-3.965 1.983 1.983 0 00-.002 3.965z"
                fill="#1B2F4D"
            />
            <Path
                d="M17.246 1.198A.456.456 0 0016.87 1a.466.466 0 00-.386.198L14.45 4.171l-.992 1.397a1.518 1.518 0 01-.992.555h-.991a1.518 1.518 0 01-.992-.555L9.49 4.171 7.508 1.198a.466.466 0 00-.764 0 .465.465 0 00-.09.278.377.377 0 000 .099v.08l2.688 7.074c0 .06 0 .13.07.199l.079.198V12.96l-1.696 8.86a.99.99 0 00.992 1.178.992.992 0 00.992-.723l2.28-8.195 2.282 8.195a.99.99 0 00.991.723.992.992 0 00.992-1.179l-1.795-8.81V9.175l.08-.198c0-.07.049-.138.069-.198l2.687-7.075v-.08a.374.374 0 000-.099.466.466 0 00-.119-.327z"
                fill="#1B2F4D"
            />
        </Svg>
    )
}

export default BreakIcon

const styles = StyleSheet.create({})
