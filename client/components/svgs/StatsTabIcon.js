import * as React from "react";
import Svg, { Path } from "react-native-svg";

const StatsTabIcon = () => {
    return (
        <Svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.31 24h2.39a1.279 1.279 0 001.213-.759c.069-.154.107-.32.113-.49V9.25a1.293 1.293 0 00-.83-1.168 1.281 1.281 0 00-.496-.082h-2.39a1.293 1.293 0 00-.925.348c-.25.235-.398.559-.41.902v13.5A1.292 1.292 0 0015.31 24zm6.914 0h2.5a1.23 1.23 0 001.167-.728c.067-.148.104-.308.11-.471V11.2a1.243 1.243 0 00-.8-1.121 1.231 1.231 0 00-.476-.08h-2.501a1.242 1.242 0 00-.883.338c-.238.225-.38.535-.392.863v11.6a1.243 1.243 0 001.275 1.2zM8.186 24h2.68a1.141 1.141 0 001.083-.672c.063-.138.097-.286.102-.437v-8.78a1.152 1.152 0 00-.744-1.038 1.143 1.143 0 00-.441-.072h-2.68A1.154 1.154 0 007 14.11v8.78A1.162 1.162 0 008.186 24z"
                fill="#142339"
                fillOpacity={0.6}
            />
        </Svg>
    )
}

export default StatsTabIcon
