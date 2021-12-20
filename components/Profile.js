import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import profile from '../assets/images/Profile-interface.png';
import colors from '../assets/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import profileData from '../assets/data/profileData';
import { FlatList } from 'react-native-gesture-handler';
import location from '../assets/images/location.png';


class Profile extends Component {

  constructor(props)
  {
    super(props);
    this.state = {username:'', useremail:''};
  }

  render(){
    return (
      <View>     
      <Text style={styles.textProfile}>Profile!!</Text>
        <View style={styles.container}>
          <SafeAreaView>
            <View>
              <Image source={profile} style={styles.profileImage} />  
            </View>  
        <View style={styles.detailsNameWrapper}>
            <Text style = {styles.detailsName}>
            </Text>
            </View>

          <View style={styles.detailsCountryWrapper}>
          <Image style={styles.locationImage} source={location} />
            <Text style = {styles.detailsCountry}>
            </Text>
            </View>            
          </SafeAreaView>
        </View>
        </View> 

   );
  };
}
  //return (
    //<View >
      // <View style={styles.infoWrapper}>
                       // <FlatList
                         //   data={profileData}
                        //    renderItem={renderProfile}
                         //   keyExtractor={(item) => item.id}
                        ///>
      // </View> 
    //</View>
  //);
//};

const styles = StyleSheet.create({

  container: {     
    backgroundColor:'#013A63',
    height:350,
    alignItems:'center', 
    borderRadius: 25,
    justifyContent: 'flex-end',
    bottom: -210,
    alignItems: 'center',   
    //marginBottom: 10,
  },
  menuWrapper: {
    alignItems: 'center',
  },
  profileImage: {
    width: 240,
    height: 240,
    margin: -525,
    position: 'absolute',    
    alignSelf: 'center',
    //alignItems: 'center',
    //shadowColor: '#000',
    //shadowOffset: {
      //width: 0,
      //height: 2,
    //},
    //shadowOpacity: 0.25,
    //shadowRadius: 3.84,
  },
  detailsName: {
    fontFamily: 'sans-serif-medium',
    fontSize: 16,
    color: colors.white,
    paddingLeft: 5,
    textAlign: 'center',

  },
  detailsNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: -480,  
  },
  
  detailsCountry: {
    fontFamily: 'sans-serif-medium',
    fontSize: 16,
    color: colors.white,
    paddingLeft: 5,
  },
  detailsCountryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
  },
  textProfile:{
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: colors.black,
    textAlign: 'center',
    top: 20,
  },
  locationImage: {
    width: 20,
    height: 20,
  }
});

export default Profile;