import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image, ImageBackground,  Platforms } from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { FlatList } from 'react-native-gesture-handler';
import profile from '../assets/images/Breast-cancer.png';
import imageDetails from '../assets/images/Self-confidence.png';
import imageNano from '../assets/images/Online-test.png';
import imageDrugs from '../assets/images/Breast-research.png';

Feather.loadFont();
Entypo.loadFont();


const height = Dimensions.get('window').height;

const Home = (navigation) => {

       return (
         <View style={styles.container}>
              {/*Header*/}
              <SafeAreaView>
                  <View style={styles.menuWrapper}>
                  <Text style={styles.discoverTitle}> MyNanoria </Text>
                      <View style={styles.homeWrapper}>
                      {/*<Feather name="menu" size={32} color={colors.gray} style={styles.menuIcon} />*/}
                      <Text style={styles.homeTitle}>
                           Welcome!!
                      </Text>
                      <Image source={profile} style={styles.profileImage} />
                      </View>
                 </View>
              </SafeAreaView>

              {/*Discover*/}
              <View style={styles.discoverWrapper}>
                  <Text style={styles.readText}>Let's Read</Text>
                  <View style={styles.discoverCategoriesWrapper}>
                      <Text style={styles.discoverCategoryText}> 
                     Choose Topic
                      </Text>
                  </View> 
              </View>

        <ScrollView horizontal showsVerticalScrollIndicator={false}>
            <View style={styles.itemsWrapper}> 
            <TouchableOpacity onPress= {()=>  navigation.navigate("Details")
                }>
                <View
                    style={[
                        styles.discoverItem , {
                            marginLeft: 20,
                            width: 144,
                            height: 190,
                            borderRadius: 20,
                            backgroundColor: colors.primary,
                        }]}
                >
                    
                    <View style={styles.discoverItemDetailsWrapper}>
                    <Text style={styles.discoverItemDetails }>
                       Introduction to Cancer
                    </Text>
                    <Image 
                    style={styles.discoverItemImage}
                    source={imageDetails}> 
                    </Image>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress= {()=> navigation.navigate("DetailsNano")
                }>
                 <View
                    style={[
                        styles.discoverItem , {
                            width: 144,
                            height: 190,
                            borderRadius: 20,
                            backgroundColor: colors.primary,
                        }]}
                >
                    
                    <View style={styles.discoverItemDetailsWrapper}>
                    <Text style={styles.discoverItemDetails }>
                        Nanotechnology
                    </Text>
                    <Image 
                    style={[styles.discoverItemImage ,
                         {
                            marginTop: -25,
                        }]}
                    source={imageNano}> 
                    </Image>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> navigation.navigate("DetailsDrugs")
                }> 
                <View
                style={[
                    styles.discoverItem , {
                        width: 144,
                        height: 190,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                    }]}
                 >
                
                <View style={styles.discoverItemDetailsWrapper}>
                <Text style={styles.discoverItemDetails }>
                   Drugs Technology in Cancer
                </Text>
                <Image 
                style={[styles.discoverItemImage, {
                    width: 124,
                    height: 124,
                    bottom:10,
                }]}
                source={imageDrugs}> 
                </Image>
                </View>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
            );
     };


     //const renderActivitiesItem = ({item}) => {
         //return (
            //<View style={[styles.activitiesItemWrapper, {
                //marginLeft: item.id === 1 ? 20 : 0
            //}]}>
                //<Image source={item.image} style={styles.activitiesItemImage}
                //>
               // <Text style = {styles.activitiesItemText}>
                   // {item.title}
               // </Text>
       // </View>
   
        // );
    // };*/

//return (
      
                /* Activities */
                /*<View style={styles.activitiesWrapper}>
                   <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.activitiesItemsWrapper}>
                        <FlatList
                            data={activitiesData}
                            renderItem={renderActivitiesItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>*/

const styles = StyleSheet.create({

    container: {
        flex: 1,
        color: colors.black,
        backgroundColor: colors.white,
        height: height,        
        justifyContent: 'center',
        alignItems: 'center',        
    },
    menuWrapper: {
        backgroundColor: colors.primary,
        width: 360,
        height: 190,
        borderRadius: 20,
        top: -20,
    },
    homeWrapper: {
        top: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 134,
        height: 143,
        top: 10,      
      },
    homeTitle: {
        fontFamily: 'Roboto',
        color: colors.white,
        fontSize: 30,
        marginRight: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    recentTitle: {
        fontFamily: 'Roboto',
        color: colors.white,
        fontSize: 12,
        left: 20,
        top: 30,
    },
    recentImageWrapper: {
        width: 280, 
        height: 110,
    },
    recentText: {
        fontFamily: 'Roboto',
        color: colors.white,
        fontSize: 15,
        left: 20,
        top: 20,
    },
    discoverWrapper: {
        //marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 'bold',
        //marginRight: 80,
        color: colors.white,
        top: 30,
        left: 15,
    },
    discoverCategoriesWrapper: {
        marginHorizontal: 120,
        //flexDirection: 'column',
        marginTop: 30,
    },
    discoverCategoryText: {
        fontFamily: 'Roboto-medium',
        fontSize: 18,
        color: colors.black,
        top: -10,
        right: 100,
    },
    readText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        left: 20,
        color: colors.black,
    },
    discoverItemsWrapper: {
        paddingVertical: 70,
    },
    discoverItem:{
        width: 174,
        height: 195,
        paddingHorizontal: 15,
        paddingVertical: 70,
        marginRight : 20,
        marginBottom: 15,
    },
    discoverItemImage:{
        width: 134,
        height: 134,
        marginTop: -48,
        alignSelf: 'center',
    },
    discoverItemTitle:{
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        color: colors.white,
        left: 20,
    },
    discoverItemDetails:{
        fontFamily: 'Roboto',
        fontSize: 15,
        color: colors.white2,
        top: -60, 
        textAlign: 'center',
    },
    activitiesWrapper: {
        marginTop: 10,
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: colors.black,
    },
    activitiesItemsWrapper: {
        paddingVertical: 20,
    },
    activitiesItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
    },
    activitiesItemImage: {
        width: 50,
        height: 49,
        marginLeft: 20,
    },
    activitiesItemText: {
        marginTop: 5,
        fontFamily: 'sans-serif-light',
        fontSize: 10,
        color: colors.black,
        marginLeft: 20,
    }, 
    itemsWrapper: {
        flexDirection: 'row',
        top: 10,
    },
}
)

export default Home;