import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TouchableHighlight, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderNotRegistered from '../components/HeaderNotRegistered'
import VideoCard from '../components/VideoCard';
import Footer from '../components/Footer';
import ViewButton from '../components/MealCard';
import globalStyles from './GlobalStyles';


export default function ModalMenu() {
  const navigation = useNavigation();
  const handlePress12 = () => {
    navigation.navigate('DescriptMealCard');
  };

  const handlePress1 = () => {
    navigation.navigate('RegistrationQ1');
  };
  const [showConfirmationModal16, setShowConfirmationModal16] = useState(false);
  const [showConfirmationModal2, setShowConfirmationModal2] = useState(false);
  const [showConfirmationModal11, setShowConfirmationModal11] = useState(false);
  const [showConfirmationModal12, setShowConfirmationModal12] = useState(false);
  const [showConfirmationModal13, setShowConfirmationModal13] = useState(false);
  const [showConfirmationModal14, setShowConfirmationModal14] = useState(false);
  const [showConfirmationModal15, setShowConfirmationModal15] = useState(false);

    const CustomButton = ({ title, onPress, style, textStyle, icon }) => (
        <TouchableOpacity onPress={onPress} style={[globalStyles.button, style]}>
           {icon && <Image source={require('../assets/icons/deleteIcon.png')} style={{ width: 34, height: 34 }} />}
          <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
      );
      

  return (
    <View style={styles.container}>     
        <View style={styles.content}>     
           <View>
            <View style={styles.rowAge}>
            <TouchableOpacity
                                onPress={() => setShowConfirmationModal11(true)} >
                <View style={globalStyles.menuExampleAge}>
                <View style={styles.babyBoy}>
                    <Image source={require('../assets/icons/newbornVioletIcon.png')} style={{ width: 32, height: 32 }} />
                </View>
                <View style={styles.name}>
                    <Text  style={globalStyles.smallBlueName}>Newborn</Text>
                    <Text style={globalStyles.smallBlueText}>(0-4 months)</Text>
                </View>
                </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setShowConfirmationModal12(true)} >
                <View style={[globalStyles.menuExampleAge, {backgroundColor:'#FAE03C'}]}>
                <View style={styles.babyBoy}>
                    <Image source={require('../assets/icons/supSitterYellowIcon.png')} style={{ width: 32, height: 32 }} />
                </View>
                <View style={styles.name}>
                    <Text  style={globalStyles.smallBlueName}>Sup. sitter</Text>
                    <Text style={globalStyles.smallBlueText}>(4-6 months)</Text>
                </View>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.rowAge}>
            <TouchableOpacity onPress={() => setShowConfirmationModal13(true)} >
                <View style={[globalStyles.menuExampleAge, {backgroundColor:'#D5EBF4'}]}>
                <View style={styles.babyBoy}>
                    <Image source={require('../assets/icons/sitterBlueIcon.png')} style={{ width: 32, height: 32 }} />
                </View>
                <View style={styles.name}>
                    <Text  style={globalStyles.smallBlueName}>Sitter</Text>
                    <Text style={globalStyles.smallBlueText}>(6-8 months)</Text>
                </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowConfirmationModal14(true)} >
                <View style={[globalStyles.menuExampleAge, {backgroundColor:'#FFA64F'}]}>
                <View style={styles.babyBoy}>
                    <Image source={require('../assets/icons/crawlerOrangeIcon.png')} style={{ width: 32, height: 32 }} />
                </View>
                <View style={styles.name}>
                    <Text  style={globalStyles.smallBlueName}>Crawler</Text>
                    <Text style={globalStyles.smallBlueText}>(8-12 months)</Text>
                </View>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.rowAge}>
            <TouchableOpacity onPress={() => setShowConfirmationModal16(true)} >
            <View style={[globalStyles.menuExampleAge, {backgroundColor:'#C6EC7A'}]}>
                <View style={styles.babyBoy}>
                    <Image source={require('../assets/icons/toddlerGreenIcon.png')} style={{ width: 32, height: 32 }} />
                </View>
                <View style={styles.name}>
                    <Text  style={globalStyles.smallBlueName}>Toddler</Text>
                    <Text style={globalStyles.smallBlueText}>(12+ months)</Text>
                </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowConfirmationModal15(true)} >
                <View style={[globalStyles.menuExampleAge, {backgroundColor:'#FFC4BC'}]}>
                <View style={styles.babyBoy}>
                    <Image source={require('../assets/icons/preschoolerPinkIcon.png')} style={{ width: 32, height: 32 }} />
                </View>
                <View style={styles.name}>
                    <Text  style={globalStyles.smallBlueName}>Preschool</Text>
                    <Text style={globalStyles.smallBlueText}>(24+ months)</Text>
                </View>
                </View>
                </TouchableOpacity>
            </View>
           </View>
        
        </View>
  
      <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal11}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView}>
                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal11(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flex:1}}>
                        
                      <Text style={[globalStyles.title2, {color:'black',  marginBottom:'2%'}]}>Menu For Newborn</Text>
                      <View style={[styles.today, {marginBottom:'10%'}]}>
                        <Text style={globalStyles.title}>Today</Text>
                      </View> 
                      <View style={{gap:14, marginBottom:41}}>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Breakfast</Text>
                                <View>
                                <Image source={require('../assets/breakfastMealImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Morning Bowl</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>15 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>75 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                              <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 1</Text>
                                <View>
                                <Image source={require('../assets/snack1Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Banana berry</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Lunch</Text>
                                <View >
                                <Image source={require('../assets/lunchImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Harvest Bowl </Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>10 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>127 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 2</Text>
                                <View >
                                <Image source={require('../assets/snack2Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Mango natural</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Dinner</Text>
                                <View >
                                <Image source={require('../assets/dinnerImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Spinach Ravioli</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>6 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>132 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </View>
                        </View>
                      </View>
                      <View style={{width:301, height:80, backgroundColor:'#7EC845', flexDirection:'column', borderRadius:10, gap:2, paddingTop:8, paddingLeft:8, marginBottom:39}}>
                        <Text style={[globalStyles.naming, {alignSelf:'flex-start'}]}>TOTAL</Text>
                        <View style={{flexDirection:'row', gap:137}}>
                          <Text style={globalStyles.editButtonText}>Calories:</Text>
                          <Text style={globalStyles.editButtonText}>514 kcal</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', gap:7, marginBottom:18 }}>

                            <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Get my plan"  onPress={() => setShowConfirmationModal2(true)} />
                        </View>
                    </View>
                    </View>
                    </ScrollView>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal12}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView}>
                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal12(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flex:1}}>
                        
                      <Text style={[globalStyles.title2, {color:'black',  marginBottom:'2%'}]}>Menu For Sup. sitter</Text>
                      <View style={[styles.today, {marginBottom:'10%'}]}>
                        <Text style={globalStyles.title}>Today</Text>
                      </View> 
                      <View style={{gap:14, marginBottom:41}}>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Breakfast</Text>
                                <View>
                                <Image source={require('../assets/breakfastMealImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Morning Bowl</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>15 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>75 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                              <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 1</Text>
                                <View>
                                <Image source={require('../assets/snack1Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Banana berry</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Lunch</Text>
                                <View >
                                <Image source={require('../assets/lunchImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Harvest Bowl </Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>10 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>127 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 2</Text>
                                <View >
                                <Image source={require('../assets/snack2Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Mango natural</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Dinner</Text>
                                <View >
                                <Image source={require('../assets/dinnerImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Spinach Ravioli</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>6 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>132 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </View>
                        </View>
                      </View>
                      <View style={{width:301, height:80, backgroundColor:'#7EC845', flexDirection:'column', borderRadius:10, gap:2, paddingTop:8, paddingLeft:8, marginBottom:39}}>
                        <Text style={[globalStyles.naming, {alignSelf:'flex-start'}]}>TOTAL</Text>
                        <View style={{flexDirection:'row', gap:137}}>
                          <Text style={globalStyles.editButtonText}>Calories:</Text>
                          <Text style={globalStyles.editButtonText}>514 kcal</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', gap:7, marginBottom:18 }}>

                            <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Get my plan"  onPress={() => setShowConfirmationModal2(true)} />
                        </View>
                    </View>
                    </View>
                    </ScrollView>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal13}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView}>
                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal13(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flex:1}}>
                        
                      <Text style={[globalStyles.title2, {color:'black',  marginBottom:'2%'}]}>Menu For Sitter</Text>
                      <View style={[styles.today, {marginBottom:'10%'}]}>
                        <Text style={globalStyles.title}>Today</Text>
                      </View> 
                      <View style={{gap:14, marginBottom:41}}>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Breakfast</Text>
                                <View>
                                <Image source={require('../assets/breakfastMealImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Morning Bowl</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>15 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>75 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                              <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 1</Text>
                                <View>
                                <Image source={require('../assets/snack1Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Banana berry</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Lunch</Text>
                                <View >
                                <Image source={require('../assets/lunchImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Harvest Bowl </Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>10 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>127 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 2</Text>
                                <View >
                                <Image source={require('../assets/snack2Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Mango natural</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Dinner</Text>
                                <View >
                                <Image source={require('../assets/dinnerImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Spinach Ravioli</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>6 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>132 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </View>
                        </View>
                      </View>
                      <View style={{width:301, height:80, backgroundColor:'#7EC845', flexDirection:'column', borderRadius:10, gap:2, paddingTop:8, paddingLeft:8, marginBottom:39}}>
                        <Text style={[globalStyles.naming, {alignSelf:'flex-start'}]}>TOTAL</Text>
                        <View style={{flexDirection:'row', gap:137}}>
                          <Text style={globalStyles.editButtonText}>Calories:</Text>
                          <Text style={globalStyles.editButtonText}>514 kcal</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', gap:7, marginBottom:18 }}>

                            <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Get my plan"  onPress={() => setShowConfirmationModal2(true)} />
                        </View>
                    </View>
                    </View>
                    </ScrollView>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal14}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView}>
                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal14(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flex:1}}>
                        
                      <Text style={[globalStyles.title2, {color:'black',  marginBottom:'2%'}]}>Menu For Crawler</Text>
                      <View style={[styles.today, {marginBottom:'10%'}]}>
                        <Text style={globalStyles.title}>Today</Text>
                      </View> 
                      <View style={{gap:14, marginBottom:41}}>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Breakfast</Text>
                                <View>
                                <Image source={require('../assets/breakfastMealImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Morning Bowl</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>15 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>75 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                              <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 1</Text>
                                <View>
                                <Image source={require('../assets/snack1Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Banana berry</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Lunch</Text>
                                <View >
                                <Image source={require('../assets/lunchImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Harvest Bowl </Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>10 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>127 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 2</Text>
                                <View >
                                <Image source={require('../assets/snack2Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Mango natural</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Dinner</Text>
                                <View >
                                <Image source={require('../assets/dinnerImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Spinach Ravioli</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>6 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>132 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </View>
                        </View>
                      </View>
                      <View style={{width:301, height:80, backgroundColor:'#7EC845', flexDirection:'column', borderRadius:10, gap:2, paddingTop:8, paddingLeft:8, marginBottom:39}}>
                        <Text style={[globalStyles.naming, {alignSelf:'flex-start'}]}>TOTAL</Text>
                        <View style={{flexDirection:'row', gap:137}}>
                          <Text style={globalStyles.editButtonText}>Calories:</Text>
                          <Text style={globalStyles.editButtonText}>514 kcal</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', gap:7, marginBottom:18 }}>

                            <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Get my plan"  onPress={() => setShowConfirmationModal2(true)} />
                        </View>
                    </View>
                    </View>
                    </ScrollView>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal15}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView}>
                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity onPress={() => setShowConfirmationModal15(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flex:1}}>
                        
                      <Text style={[globalStyles.title2, {color:'black',  marginBottom:'2%'}]}>Menu For Preschool</Text>
                      <View style={[styles.today, {marginBottom:'10%'}]}>
                        <Text style={globalStyles.title}>Today</Text>
                      </View> 
                      <View style={{gap:14, marginBottom:41}}>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Breakfast</Text>
                                <View>
                                <Image source={require('../assets/breakfastMealImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Morning Bowl</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>15 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>75 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                              <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 1</Text>
                                <View>
                                <Image source={require('../assets/snack1Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Banana berry</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Lunch</Text>
                                <View >
                                <Image source={require('../assets/lunchImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Harvest Bowl </Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>10 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>127 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 2</Text>
                                <View >
                                <Image source={require('../assets/snack2Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Mango natural</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Dinner</Text>
                                <View >
                                <Image source={require('../assets/dinnerImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Spinach Ravioli</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>6 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>132 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </View>
                        </View>
                      </View>
                      <View style={{width:301, height:80, backgroundColor:'#7EC845', flexDirection:'column', borderRadius:10, gap:2, paddingTop:8, paddingLeft:8, marginBottom:39}}>
                        <Text style={[globalStyles.naming, {alignSelf:'flex-start'}]}>TOTAL</Text>
                        <View style={{flexDirection:'row', gap:137}}>
                          <Text style={globalStyles.editButtonText}>Calories:</Text>
                          <Text style={globalStyles.editButtonText}>514 kcal</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', gap:7, marginBottom:18 }}>

                            <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Get my plan"  onPress={() => setShowConfirmationModal2(true)} />
                        </View>
                    </View>
                    </View>
                    </ScrollView>
                </View>
            </Modal>
      <Modal
                animationType="slide"
                transparent={true}
                visible={showConfirmationModal16}
            >
                <View style={styles.centeredView}>
                    <ScrollView>
                    <View style={styles.modalView}>
                    <View style={{alignSelf:'flex-end'}}>
                    <TouchableOpacity onPress={() => setShowConfirmationModal16(false)}>
                        <Image source={require('../assets/icons/crossIcon.png')} style={{ width: 42, height: 42}} />
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flex:1}}>
                        
                      <Text style={[globalStyles.title2, {color:'black',  marginBottom:'2%'}]}>Menu For Toddler</Text>
                      <View style={[styles.today, {marginBottom:'10%'}]}>
                        <Text style={globalStyles.title}>Today</Text>
                      </View> 
                      <View style={{gap:14, marginBottom:41}}>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Breakfast</Text>
                                <View>
                                <Image source={require('../assets/breakfastMealImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Morning Bowl</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>15 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>75 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                              <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 1</Text>
                                <View>
                                <Image source={require('../assets/snack1Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Banana berry</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Lunch</Text>
                                <View >
                                <Image source={require('../assets/lunchImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Harvest Bowl </Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>10 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>127 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Snack 2</Text>
                                <View >
                                <Image source={require('../assets/snack2Img.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Mango natural</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>5 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>90 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.meal}>
                            <View>
                            <View style={{flexDirection:'column', gap:2, alignItems:'flex-end'}}>
                                <Text style={globalStyles.textDietName}>Dinner</Text>
                                <View >
                                <Image source={require('../assets/dinnerImg.png')}/>
                                </View>
                            </View>
                            </View>
                            <View style={{flexDirection:'column', paddingTop:22, gap:4}}>
                                <Text style={globalStyles.smallBlackText}>Spinach Ravioli</Text>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../assets/icons/timeGreenIcon.png')} style={{width: 25, height: 25}}/>
                                <Text style={globalStyles.smallGreyText}>6 minutes</Text>
                                </View>
                                <Text style={[globalStyles.smallGreyText, {color:'#7EC845'}]}>132 kkal</Text>
                            </View>
                            <View style={{position:'absolute', right:12, top:48}}>
                            <TouchableOpacity onPress={handlePress12}>
                            <Image source={require('../assets/icons/dotsGreenIcon.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                      <View style={{width:301, height:80, backgroundColor:'#7EC845', flexDirection:'column', borderRadius:10, gap:2, paddingTop:8, paddingLeft:8, marginBottom:39}}>
                        <Text style={[globalStyles.naming, {alignSelf:'flex-start'}]}>TOTAL</Text>
                        <View style={{flexDirection:'row', gap:137}}>
                          <Text style={globalStyles.editButtonText}>Calories:</Text>
                          <Text style={globalStyles.editButtonText}>514 kcal</Text>
                        </View>

                      </View>
                      <View style={{ flexDirection: 'row', gap:7, marginBottom:18 }}>

                            <CustomButton  style={[globalStyles.buttonParentProfileSuccess, globalStyles.editButtonContent, {backgroundColor:'#007EB1'}]} textStyle={globalStyles.bigButtonText} title="Get my plan"  onPress={() => setShowConfirmationModal2(true)} />
                        </View>
                    </View>
                    </View>
                    </ScrollView>
                </View>
            </Modal>
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
          <Text style={[globalStyles.bigButtonText1, {marginBottom:26,}]}>Your meal plan was added to Cart</Text>
          <TouchableOpacity  style={[globalStyles.bigAddButton, {marginBottom:46}]} onPress={() => setShowConfirmationModal2(false)}>
            <Text style={globalStyles.bigButtonText}>Done</Text>
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
 container: {
    height: 'auto',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius:39,
    borderTopRightRadius:39,
    bottom: 32,
    height:'auto',   
    paddingLeft: 30,
    paddingHorizontal: 30,
    
  },
  top: {
    paddingTop: 35,
    marginBottom: 20,
  },
  title: {
    color: 'black',
    fontFamily: 'Caladea-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    color: 'black',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  babyBoy:{
    width: 39,
    height:39,
    backgroundColor:'white',
    borderRadius: 150,
    justifyContent:'center',
    alignItems: 'center',

  },
  rowAge:{
    flexDirection:'row',
    gap:25,
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 30,
    backgroundColor: '#007EB1',
    width: 168,
    height: 45,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'RadioCanada',
    fontSize: 20,
  },
  more: {
    alignItems: 'flex-end',
    paddingRight: 18,
    marginBottom: 20,
  },
  analysis: {
    width: 369,
    height: 261,
    borderRadius: 20,
    backgroundColor: '#FFF',
    elevation: 4,
    marginBottom: 20,
  },
  videoCard:{
    marginRight: 10,
  },
  footer: {
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Align footer to the bottom
    left: 0,
    right: 0,
    alignItems: 'center', // Align items at the center horizontally
  },
  modalView: {
    width: 373,
    height: 'auto',
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 20,
    margin: 20,
    paddingHorizontal: 35,
    paddingVertical:15,
    alignItems: "center",
    justifyContent: "center", // Add this line to center the content vertically
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cross:{
    position:'absolute',
    right:25,
    top:18,
    marginBottom:'10%'
  },
  today:{
    width:180,
    height:44,
    backgroundColor: '#7EC845',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
  },
  meal:{
    width: 343,
    height:130,
    backgroundColor:'white',
    borderRadius: 10,
    elevation:7,
    paddingTop:8,
    paddingLeft:12,
    flexDirection:'row',
    gap:10,
  },
});
