import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet } from 'react-native'

const ChevronDownIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M5 9l7 7 7-7"
                stroke="#1B2F4D"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ChevronDownIcon

const styles = StyleSheet.create({})
