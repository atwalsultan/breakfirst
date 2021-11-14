import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet } from 'react-native'

const ChevronRightIconTomatoFrog = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M9 19l7-7-7-7"
                stroke="#F94144"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ChevronRightIconTomatoFrog

const styles = StyleSheet.create({})
