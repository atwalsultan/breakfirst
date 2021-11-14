import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet, Text, View } from 'react-native'

const AddIconTomatoFrog = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M3 12h18M12 3v18"
                stroke="#F94144"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default AddIconTomatoFrog

const styles = StyleSheet.create({})
