import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView,BackHandler,Platform,Modal,Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CountDown from 'react-native-countdown-component';
import RNExitApp from 'react-native-exit-app';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

const { height } = Dimensions.get('window');

function DetectionScreen(props) {

     const [addActionModal, setAddActionModal] = useState(false);

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
                        <TouchableOpacity onPress={()=> setAddActionModal(true)} activeOpacity={0.6} style={{ backgroundColor: Colors.red, width: RFPercentage(25), height: RFPercentage(25), borderRadius: RFPercentage(50), justifyContent: 'center', alignItems: 'center' }} >
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

            <Modal visible={addActionModal} transparent={true}  >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", height: height, justifyContent: "center", alignItems: "center", width: "100%" }} >
                    <View style={{ alignItems: "center", justifyContent: 'center', borderRadius: RFPercentage(3), backgroundColor: "white", marginBottom: RFPercentage(7), height: RFPercentage(32), width: "70%" }} >
                        <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Image style={{ marginTop: RFPercentage(3.4), width: RFPercentage(12), height: RFPercentage(12) }} source={require('../../assets/images/done.png')} /> */}
                            <Text style={{ lineHeight:RFPercentage(3),textAlign:'center',marginTop: RFPercentage(2), color: 'black', fontWeight: 'bold', fontSize: RFPercentage(2) }} >
                            Thankfully You are OK! You can close the app now.
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
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