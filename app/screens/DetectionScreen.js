import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CountDown from 'react-native-countdown-component';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function DetectionScreen(props) {

    return (
        <Screen style={styles.screen} >

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >

                    <Image style={{ marginTop: RFPercentage(2), width: RFPercentage(18), height: RFPercentage(15) }} source={require('../../assets/Images/logo.png')} />
                    <Text style={{ color: '#FF3C3C', fontSize: RFPercentage(3.3), fontWeight: 'bold', marginTop: RFPercentage(5) }} >
                        POSSIBLE CRASH
                    </Text>
                    <Text style={{ color: '#FF3C3C', fontSize: RFPercentage(3.3), fontWeight: 'bold', marginTop: RFPercentage(0.5) }} >
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

                    {/* Timer Button */}
                    <CountDown
                        until={20}
                        size={30}
                        onFinish={() => props.navigation.navigate("MapScreen")}
                        digitStyle={{ backgroundColor: '#FFF' }}
                        digitTxtStyle={{ color: '#1CC625', top: RFPercentage(1) }}
                        timeToShow={['S']}
                        timeLabels={{ m: 'MM', s: 'Seconds' }}
                    />
                </View>
            </ScrollView>
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