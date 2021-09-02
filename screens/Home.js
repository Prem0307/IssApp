import React, { Component } from 'react';
import { Text, View,StyleSheet ,Platform,StatusBar,SafeAreaView,TouchableOpacity,ImageBackground,Image} from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View
               style={styles.container}
                >

                    <SafeAreaView style={styles.androidSafe}/>
                    <ImageBackground source={require('../assets/bg.png')} style={styles.bgImage}>
                    <View style={styles.titleBar}>
                <Text style={styles.titletext}>ISS Tracker App</Text>
                </View>
<TouchableOpacity style={styles.iss} 
onPress={()=>{
    this.props.navigation.navigate('issLocaton')
}}>
    <Text style={styles.root}>Iss Location</Text>
    <Text style={styles.nomore}>{"Know More --->"}</Text>
    <Text style={styles.digit}>1</Text>
    <Image source={require('../assets/iss_icon.png')} style={styles.iconImage}/>
</TouchableOpacity>
<TouchableOpacity style={styles.iss}
onPress={()=>{
    this.props.navigation.navigate('meteor')
}}>
    <Text style={styles.root}>Meteor</Text>
    <Text style={styles.nomore}>{"Know More --->"}</Text>
    <Text style={styles.digit}>2</Text>
    <Image source={require('../assets/meteor_icon.png')} style={styles.iconImage}/>
</TouchableOpacity>
</ImageBackground>
            </View>
        )
    }
}
const styles =StyleSheet.create({
container:{
    flex:1
},
androidSafe:{
    marginTop : Platform.OS==="android" ? StatusBar.currentHeight:0
},
titleBar:{
    flex:0.15,
    justifyContent:'center',
    alignItems:'center'
},
iss:{
    flex:0.35,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:"white",
    borderWidth:2
},
root:{
    fontSize:35,
    fontWeight:'bold',
    color:'black',
    marginTop:75,
    paddingLeft:30
},
titletext:{
    fontSize:40,
    fontWeight:'bold',
    color:'white',
    
},
bgImage:{
    flex:1,
    resizeMode: 'cover'
},
nomore:{
    paddingLeft:30,
    color:'red',
    fontSize:15
},
digit:{
    position:'absolute',
    color:"rgba(183,183,183,0.5)",
    fontSize:150,
    right:20,
    bottom:-15,
    zIndex:-1
},
iconImage:{
    position:'absolute',
    height:200,
    width:200,
    resizeMode:'contain',
    right:20,
    top:-80
}
})