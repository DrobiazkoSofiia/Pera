import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from './GlobalStyles';

export default function Footer() {
    const [showConfirmationModal2, setShowConfirmationModal2] = useState(false);
    const navigation = useNavigation();
    const handlePress1 = () => {
        navigation.navigate('RegistrationQ1');
      };
    const handlePress5 = () => {
        navigation.navigate('Explore');
      };
      const handlePress6 = () => {
        navigation.navigate('HomeNotRegistered');
      };
      const handlePress7 = () => {
        navigation.navigate('Cart');
      };
      const handlePress8 = () => {
        navigation.navigate('Payment');
      };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress6}>
            <View style={styles.icons}>
            <Image style={styles.icon} source={require('../assets/icons/homeIcon.png')}/>
            <Text style={styles.text}>Home</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowConfirmationModal2(true)}>
            <View style={styles.icons}>
            <Image style={styles.icon} source={require('../assets/icons/loopIcon.png')}/>
            <Text style={styles.text}>Explore</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowConfirmationModal2(true)}>
            <View style={styles.icons}>
            <Image style={styles.icon} source={require('../assets/icons/babystollerIcon.png')}/>
            <Text style={styles.text}>Cart</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowConfirmationModal2(true)}>
            <View style={styles.icons}>
            <Image style={styles.icon} source={require('../assets/icons/accountIcon.png')}/>
            <Text style={styles.text}>Account</Text>
            </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal2}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView}>
                    <View style={{alignSelf:'flex-end', marginBottom:24}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal2(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{alignItems: 'center', justifyContent:'center',flex:1}}>
          <Image style={{marginBottom:29, width:298, height:232}} source={require('../assets/notRegisteredChildImg.png')}/>
          <Text style={[globalStyles.bigButtonText1, {marginBottom:26,}]}>To get access to this function, please add a child</Text>
          <TouchableOpacity  style={[globalStyles.bigAddButton, {marginBottom:46}]} onPress={handlePress1}>
            <Text style={globalStyles.bigButtonText}>Add a child</Text>
           </TouchableOpacity>
           </View>
                        
                    </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>

        

    );
}
const styles=StyleSheet.create({
    centeredView:{
        alignItems:'center'
          },
    modalView: {
        width: 373,
        height: 'auto',
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: '#FFF',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        margin: 20,
        paddingHorizontal: 35,
        paddingVertical:15,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
container:{
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    backgroundColor: '#7EC845',
    width: '100%',
    height: 95,
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
},
icons:{
    width: 'auto',
    height: 41,
    color:'white',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center'
    
},
icon:{
    width: 41,
    height: 41,
},
text: {
    color: 'white',
    marginTop: 5,
  },
});