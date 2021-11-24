import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Box } from 'native-base';

import ProportionIcon from '../../svgs/ProportionIcon';
import SadFaceIcon from '../../svgs/SadFaceIcon';
import DeclineIcon from '../../svgs/DeclineIcon';
import IncreaseIcon from '../../svgs/IncreaseIcon';
import StatsScreenGraphic from '../../svgs/StatsScreenGraphic';

const ReportScreen = () => {
    return (
        <Box style={styles.container}>
            <Box style={styles.dailyAverage}>
                <Text style={ styles.cardHeading }>Daily Average</Text>
                <Text style={ styles.cardBigText }>6h 30m</Text>
                <Box style={{ alignSelf:'center', marginTop: 20 }}>
                    <StatsScreenGraphic />
                </Box>
            </Box>

            <Box style={styles.twoColumns}>
                <Box style={[styles.column, { marginRight: 16 }]}>
                    <Text style={ styles.cardHeading }>Proportion</Text>
                    <Box style={ styles.cardContent }>
                        <Text style={ [styles.cardBigText, { marginRight: 6 }] }>25%</Text>
                        <ProportionIcon />
                    </Box>
                    <Text style={ styles.cardSmallText }>* Proportion of sitting time</Text>
                </Box>
                <Box style={[styles.column]}>
                    <Text style={ styles.cardHeading }>Your lifestyle</Text>
                    <Box style={ styles.cardContent }>
                        <SadFaceIcon />
                    </Box>
                    <Text style={ styles.cardSmallText }>* Medium risk</Text>
                </Box>
            </Box>

            <Box style={styles.trends}>
                <Text style={ styles.cardHeading }>Trends</Text>

                <Box style={ styles.trendsContent }>
                    <Box style={{ marginRight: 35 }}>
                        <Box style={ styles.trendsPercentIcon }>
                            <Text style={[ styles.cardBigText, { marginRight: 6 } ]}>34%</Text>
                            <DeclineIcon />
                        </Box>
                        <Text style={ styles.trendsText }>Sitting time</Text>
                    </Box>

                    <Box style={{  marginLeft: 35 }}>
                        <Box style={ styles.trendsPercentIcon }>
                            <Text style={[ styles.cardBigText, { marginRight: 6 } ]}>12%</Text>
                            <IncreaseIcon />
                        </Box>
                        <Text style={ styles.trendsText }>Health risk</Text>
                    </Box>
                </Box>

                <Text style={ styles.cardSmallText }>* Compared to last week</Text>
            </Box>
        </Box>
    )
}

export default ReportScreen

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        marginTop: 16,
    },
    dailyAverage: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: 4
    },
    twoColumns: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 16,
    },
    column: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flex: 1,
        justifyContent: 'space-between',
        borderRadius: 4
    },
    cardHeading: {
        fontSize: 16,
        fontFamily: 'josefin-regular',
        color: '#142339',
        marginBottom: 12
    },
    cardContent: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBigText: {
        fontSize: 32,
        color: '#355C97',
        fontFamily: 'josefin-regular'
    },
    cardSmallText: {
        fontSize: 12,
        fontFamily: 'josefin-regular',
        color: 'rgba(20, 35, 57, 0.6)',
        textAlign: 'center',
    },
    trends: {
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        marginBottom: 16,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    trendsPercentIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    trendsText: {
        fontSize: 16, 
        fontFamily: 'josefin-regular',
        color: '#142339',
    },
    trendsContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24
    }
})
