import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import MapView from 'react-native-maps';

//config
import Colors from '../config/Colors';

function MapScreen(props) {

    return (
        <LinearGradient colors={['#156969', '#52C0C7']} start={[1, 1]} end={[0.2, 0.3]} style={{ width: '100%', height: '100%', alignSelf: 'center', justifyContent: 'flex-start', alignItems: "center" }}>
            <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(12) }} >
                <Text style={{ textAlign: 'center', color: Colors.white, fontSize: RFPercentage(2.9), fontWeight: '600' }} >
                    We sent your location to the Emergency Services
                </Text>
            </View>

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>

            <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(6) }} >
                <Text style={{ textAlign: 'center', color: Colors.white, fontSize: RFPercentage(2.9), fontWeight: '600' }} >
                    They will come with the help!
                </Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderRadius: RFPercentage(2),
        overflow: 'hidden',
        marginTop: RFPercentage(6),
        height: RFPercentage(60),
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default MapScreen;