import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function DetectionScreen(props) {

    return (
        <Screen style={styles.screen} >
            <Text style={{ color: '#FF3C3C', fontSize: RFPercentage(3.3), fontWeight: 'bold', marginTop: RFPercentage(15) }} >
                POSSIBLE CRASH
            </Text>
            <Text style={{ color: '#FF3.C3C', fontSize: RFPercentage(3.3), fontWeight: 'bold', marginTop: RFPercentage(0.5) }} >
                DETECTED
            </Text>

            {/* OK button */}
            <View style={{ backgroundColor: Colors.lightRed, width: RFPercentage(30), height: RFPercentage(30), borderRadius: RFPercentage(50), justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(8) }} >
                <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: Colors.red, width: RFPercentage(25), height: RFPercentage(25), borderRadius: RFPercentage(50), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(5), fontWeight: '600' }} >
                        I'm OK
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={{ color: Colors.black, fontSize: RFPercentage(3), fontWeight: '700', marginTop: RFPercentage(8) }} >
                Contacting Emergency
            </Text>
            <Text style={{ color: Colors.black, fontSize: RFPercentage(3), fontWeight: '700', marginTop: RFPercentage(0.5) }} >
                Services in:
            </Text>

            {/* Time Button */}
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("MapScreen")} style={{ marginTop: RFPercentage(7), width: RFPercentage(24), height: RFPercentage(7.5), justifyContent: 'center', alignItems: 'center' }} >
                <LinearGradient colors={['#156969', '#52C0C7']} start={[1, 1]} end={[0.2, 0.3]} style={{ width: RFPercentage(24), height: RFPercentage(7.5), alignSelf: 'center', justifyContent: 'center', alignItems: "center", borderRadius: RFPercentage(1.5) }}>
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.6), fontWeight: 'bold' }} >
                        20 Sec.
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white
    }
})

export default DetectionScreen;