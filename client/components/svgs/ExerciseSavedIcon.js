import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet } from 'react-native'

const ExerciseSavedIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M13.413 19.33a1.996 1.996 0 01-1.498.67 2.015 2.015 0 01-1.5-.67l-5.993-6.596a5.147 5.147 0 01-1.31-2.364c-.998-4.559 4.856-8.406 8.803-4.766l.18-.159c3.995-3.64 9.75.208 8.801 4.757a5.128 5.128 0 01-1.309 2.374l-6.174 6.754z"
                fill="#F94144"
            />
        </Svg>
    )
}

export default ExerciseSavedIcon

const styles = StyleSheet.create({})
