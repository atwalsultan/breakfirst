import * as React from "react"
import Svg, { Circle, Mask, G, Path } from "react-native-svg"

const CongratulationsCatImage = () => (
    <Svg
        width={98}
        height={98}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Circle cx={49} cy={49} r={49} fill="#0CD9B4" />
        <Mask
            id="a"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={98}
            height={98}
        >
            <Circle cx={49} cy={49} r={49} fill="#0CD9B4" />
        </Mask>
        <G mask="url(#a)">
            <Path
                d="M89.997 98H8c.1-.532.21-1.062.328-1.592a43.367 43.367 0 0 1 5.126-12.663 92.341 92.341 0 0 1 5.17-7.67c1.82-2.48 3.275-5.13 4.978-7.709.53-.807 1.839-2.637 1.312-3.667-.022-.043-.037-.085-.053-.125-.361-.715-.765-1.418-1.18-2.16a23.774 23.774 0 0 1-2.588-7.236c-.077-.404-.141-.807-.196-1.222l-.028-.196-.052-.462c0-.073-.015-.143-.025-.22 0-.152-.024-.305-.033-.458a.037.037 0 0 1 0-.03 26.703 26.703 0 0 1-.037-2.268c0-.672.046-1.268.089-1.803.015-.143.024-.284.046-.421.11-.885.282-1.761.515-2.622.131-.486.285-.966.428-1.445.102-.306.197-.611.28-.917 6.759-3.581 16.306-5.849 26.935-5.953 10.633.104 20.18 2.372 26.94 5.953.082.306.174.611.275.917.077.244.15.489.224.733.037.116.07.232.104.348 0 .037.021.07.03.107.025.086.05.171.071.257.022.086.028.098.04.147.046.165.086.33.126.498.04.167.077.338.11.513.021.092.037.18.055.272a18.005 18.005 0 0 1 .23 1.589v.018c.043.535.073 1.13.089 1.803.018.844 0 1.592-.04 2.267.003.01.003.021 0 .031 0 .153-.022.306-.034.458v.22c-.018.15-.037.306-.052.462l-.027.195c-.076.56-.171 1.119-.285 1.675a25.322 25.322 0 0 1-.92 3.254 23.54 23.54 0 0 1-1.332 3.056c-.086.159-.172.305-.26.477l-.093.161c-.413.743-.818 1.449-1.173 2.167-.481 1.02.802 2.814 1.33 3.609 1.703 2.579 3.158 5.228 4.978 7.71a92.308 92.308 0 0 1 5.17 7.669 43.453 43.453 0 0 1 5.126 12.663c.092.547.202 1.078.3 1.61Z"
                fill="#000"
            />
            <Path
                d="M80.878 24.6c-.634 4.277-1.639 6.887-2.99 10.135-.965 2.313-2.108 4.015-2.145 6.503-.027 1.5.527 2.845.92 4.278 1.492 5.5.459 11.981-2.317 16.928a17.919 17.919 0 0 1-2.035 2.888c-2.45 2.85-5.763 5.008-9.167 6.5a35.284 35.284 0 0 1-13.206 2.911h-.92a34.087 34.087 0 0 1-16.064-3.877c-9.091-4.868-14.76-16.153-11.353-26.28.365-1.084.693-1.878.665-3.333-.046-2.484-1.185-4.186-2.145-6.502-1.35-3.249-2.359-5.864-2.99-10.136-.15-1.015-.631-2.625.613-3.178 1.722-.752 3.698-.306 5.445-.08a39.52 39.52 0 0 1 6.921 1.608c2.219.73 4.045 1.891 6.07 2.982.656.355 2.084 1.326 2.911 1.024a28.79 28.79 0 0 1 4.994-1.372 25.191 25.191 0 0 1 9.805 0c1.703.305 3.375.765 4.995 1.372.827.305 2.255-.67 2.91-1.024 2.026-1.09 3.855-2.252 6.073-2.982a39.452 39.452 0 0 1 6.922-1.607c1.747-.239 3.723-.673 5.442.079 1.275.538.793 2.148.646 3.163Z"
                fill="#000"
            />
            <Path
                d="M36.857 50.888c2.633 0 4.768-1.932 4.768-4.315 0-2.383-2.135-4.315-4.768-4.315s-4.767 1.932-4.767 4.315c0 2.383 2.134 4.315 4.767 4.315Z"
                fill="#F2C955"
            />
            <Path
                d="M36.857 50.008a3.88 3.88 0 0 0 3.886-3.875 3.88 3.88 0 0 0-3.886-3.875 3.88 3.88 0 0 0-3.885 3.875 3.88 3.88 0 0 0 3.885 3.874Z"
                fill="#000"
            />
            <Path
                d="M35.736 45.097a.698.698 0 1 0 .002-1.395.698.698 0 0 0-.002 1.395Z"
                fill="#F2F2F2"
            />
            <Path
                d="M61.155 50.888c2.633 0 4.768-1.932 4.768-4.315 0-2.383-2.135-4.315-4.768-4.315s-4.767 1.932-4.767 4.315c0 2.383 2.134 4.315 4.767 4.315Z"
                fill="#F2C955"
            />
            <Path
                d="M61.155 50.008a3.88 3.88 0 0 0 3.885-3.875 3.88 3.88 0 0 0-3.885-3.875 3.88 3.88 0 0 0-3.885 3.875 3.88 3.88 0 0 0 3.885 3.874Z"
                fill="#000"
            />
            <Path
                d="M60.034 45.097a.698.698 0 1 0 .002-1.395.698.698 0 0 0-.002 1.395Z"
                fill="#F2F2F2"
            />
            <Path
                d="M52.242 60.421c0 2.512-1.45 4.55-3.236 4.55-1.786 0-3.236-2.038-3.236-4.55v-.204c3.34-.767 3.233-3.408 3.233-3.408s-.107 2.64 3.23 3.408a2.3 2.3 0 0 1 .009.204Z"
                fill="#F94144"
            />
            <Path
                d="M43.91 60.421a9.003 9.003 0 0 0 1.864-.204c3.34-.767 3.232-3.408 3.232-3.408s-.107 2.64 3.23 3.408a9.034 9.034 0 0 0 1.866.204"
                stroke="#333"
                strokeMiterlimit={10}
            />
        </G>
    </Svg>
)

export default CongratulationsCatImage
