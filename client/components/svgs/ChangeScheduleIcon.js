import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet } from 'react-native';

const ChangeScheduleIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.79 15.626c.047.02.098.03.15.03h.024l3.01-.427a.403.403 0 00.22-.118l7.261-7.26a.394.394 0 000-.562L16.88 4.714a.395.395 0 00-.561 0l-7.26 7.26a.403.403 0 00-.12.221l-.394 3.01a.395.395 0 00.118.332.372.372 0 00.126.089z"
                fill="#1B2F4D"
            />
            <Path
                d="M17.6 20H6.4A2.4 2.4 0 014 17.6V6.4A2.4 2.4 0 016.4 4h4.8a.8.8 0 110 1.6H6.4a.8.8 0 00-.8.8v11.2a.8.8 0 00.8.8h11.2a.8.8 0 00.8-.8v-4.8a.8.8 0 111.6 0v4.8a2.4 2.4 0 01-2.4 2.4z"
                fill="#1B2F4D"
            />
        </Svg>
    )
}

export default ChangeScheduleIcon

const styles = StyleSheet.create({})
