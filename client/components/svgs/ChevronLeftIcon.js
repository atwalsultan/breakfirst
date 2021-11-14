import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet } from 'react-native';

const ChevronLeftIcon = ({ header }) => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            style={!header && styles.backLink}
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M15 19l-7-7 7-7"
                stroke="#1B2F4D"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ChevronLeftIcon

const styles = StyleSheet.create({
    backLink: {
        marginTop: 16,
        marginBottom: 25
    },
});
