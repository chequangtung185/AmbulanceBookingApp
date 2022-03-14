import { Flex } from 'native-base';
import React,{Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Example from './Modal';


export default Home=()=>{
    return(
        <SafeAreaView style={{height: '100%', width: '100%'}}>
            <View style={styles.container}>
            <Icon 
                name="ambulance"
                color='blue'
                size={60}
                style={{marginLeft: 40,marginTop: 10}}
                type="font-awesome"/>
            <Icon 
                name="info-circle"
                size={50}
                color='gray'
                style={{marginLeft: 140,marginTop: 10,color:'red'}}
                type="font-awesome"/>
            <Icon 
                name="bars"
                size={50}
                style={{marginLeft: 50,marginTop: 10
                }}
                type="font-awesome"/>
            </View>
            <View style={styles.body}>

            <MapView
                style={styles.map}
                initialRegion={{
                latitude: 10.774147147840338,
                longitude: 106.70366919741858,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
             }}>
            </MapView>
            </View>
            <View style={styles.bodyview }>
                <Text style={styles.text}>DEMO - ĐỒNG HÀNH CÙNG BẠN</Text>
            </View>
            <View style={{position:'absolute',marginTop:700,marginLeft:180}}>
                <Example/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1
    },
    bodyview:{
        position:'absolute',
        shadowOpacity:10,
        height: 40,
        width: 350,
        backgroundColor: 'white',
        marginTop:150,
        marginLeft:30,
        justifyContent:'center',
        elevation: 10,
        padding: 10,
  
    },
    map:{
      
      width: '100%',
      height: '100%',
    },
    dau:{      
        marginLeft: 175
    },
    text:{
      fontSize: 20,
      color:'black',
      position: 'absolute',
      marginLeft: 25
 


    },
    container:{
        flexDirection:"row",  
        backgroundColor:"#d9e8fb"
        
    },
    heading:{
        color:"black",
        fontSize:20,
        fontWeight:"700"
    },
    icon1:{
        marginLeft: 50
    },
    icon2:{
        marginLeft: 140
    },
    icon3:{
        marginRight: 30
    },
  })