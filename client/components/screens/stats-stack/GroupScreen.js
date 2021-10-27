import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const GroupScreen = () => {
    return (
        <Box style={styles.container}>
            <Text style={styles.heading}>Groups</Text>

            <Box>
                <TouchableOpacity>
                    <Box style={styles.group}>  
                        <Box style={styles.groupMarker}></Box>
                        <Text style={styles.groupText}>WMDD 4950</Text>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box style={styles.group}>  
                        <Box style={styles.groupMarker}></Box>
                        <Text style={styles.groupText}>WMDD 4950</Text>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box style={styles.group}>  
                        <Box style={styles.groupMarker}></Box>
                        <Text style={styles.groupText}>WMDD 4950</Text>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box style={styles.group}>  
                        <Box style={styles.groupMarker}></Box>
                        <Text style={styles.groupText}>WMDD 4950</Text>
                    </Box>
                </TouchableOpacity>
            </Box>

            <TouchableOpacity style={styles.newGroupMarker}></TouchableOpacity>
        </Box>
    )
}

export default GroupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 8,
        marginBottom: 16
    },
    group: {
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center'
    },
    groupMarker: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.4)',
        marginRight: 10
    },
    groupText: {
        fontSize: 18,
        fontWeight: '400'
    },
    newGroupMarker: {
        height: 52,
        width: 52,
        borderRadius: 26,
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        right: 10,
        bottom: 55
    }
})
