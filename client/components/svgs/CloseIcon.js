import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet, Text, View } from 'react-native'

const CloseIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M5 5l14 14M19 5L5 19"
                stroke="#1B2F4D"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default CloseIcon

const styles = StyleSheet.create({})
