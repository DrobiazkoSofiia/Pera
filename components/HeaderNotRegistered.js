import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity, Modal, ScrollView } from 'react-native';
import globalStyles from './GlobalStyles';
import { useNavigation } from '@react-navigation/native';
export default function HeaderNotRegistered() {
  const navigation = useNavigation();
  const [showConfirmationModal2, setShowConfirmationModal2] = useState(false);
  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <TouchableOpacity onPress={() => setShowConfirmationModal2(true)}>
        <Image style={[styles.icon, styles.bellIcon]} source={require('../assets/icons/iconBell.png')} />
        </TouchableOpacity>
        <TouchableHighlight>
        <View style={styles.babyBoy}>
        <TouchableOpacity onPress={() => setShowConfirmationModal2(true)}>
        <Image source={require('../assets/icons/babyboyIcon.png')} style={{ width: 34, height: 34 }} />
        </TouchableOpacity>
        </View>
        </TouchableHighlight>
      </View>
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

const styles = StyleSheet.create({
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
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    backgroundColor: '#7EC845',
    width: '100%',
    height: 144,
    paddingLeft:'60%',
    paddingTop: 28,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',   
  },
  icon: {
    width: 41,
    height: 41,
    tintColor: 'white',
    marginTop: 7,
  },
  bellIcon: {
    marginRight: 7,
  },
  babyBoy:{
    width: 54,
    height:54,
    backgroundColor:'white',
    borderRadius: 150,
    justifyContent:'center',
    alignItems: 'center',

  },
});
