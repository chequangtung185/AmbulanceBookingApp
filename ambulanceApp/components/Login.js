import React,{Component, useState} from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Image, TextInput, Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from "native-base";
import Home from './Home';
import { useTogglePasswordVisibility } from './Eyepass';
import {strings} from './Lozalization'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';





export default Login =({navigation})=>{
    const [state,setState] = useState({isLoading: false});

    
    const signin =()=>{
        if(user != "" && pass != ""){
           navigation.navigate("Home")
           
        }else{
            Alert.alert('Thông báo!','Không được để trống thông tin!',[
                {
                  text: 'Yes'
                }])
        }
    }
    
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [user,setuser] = useState('');
    const [pass,setpass] = useState('');
    
    const overLangVN=()=>
    {
        strings.setLanguage('en-VN');
        this.setState({isLoading: true});
        
    }
    const overLangUS=()=>
    {
        strings.setLanguage('en-US');
        this.setState({isLoading: true});
        
    }
    return(
        <NativeBaseProvider>
            <Center flex={1} px="3">
        <SafeAreaView style={{height: '100%', width: '100%'}}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.vietnam} onPress={()=>{overLangVN()}}>
                <Image
                    source={require('../android/app/src/main/res/drawable/vietnam.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.usa} onPress={()=>{overLangUS()}}>
                <Image
                    source={require('../android/app/src/main/res/drawable/usa.png')}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.DN}>{strings.DN}</Text>
            <Text style={styles.cmt}> {strings.cmt}</Text>
            <View style={styles.info}>
                <Input  borderRadius={10} borderColor='black' placeholder= {strings.username} value={user} onChangeText={(anything) => setuser(anything)}/>
                <Input secureTextEntry={passwordVisibility}  marginTop={10} borderRadius={10} borderColor='black' placeholder="***********" value={pass} onChangeText={(anything) => setpass(anything)}
                    InputRightElement={
                    <Icon onPress={handlePasswordVisibility} 
                name={rightIcon}
                type="font-awesome"
                style={{marginRight: 60
                }}
                />
                } 
                />
            </View>
            <Button style={styles.btnlogin} onPress = {signin} >
                  {strings.btn}
            </Button>
        </SafeAreaView>
        </Center>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        marginTop: 10
    },
    vietnam:{
        marginLeft: 210,
        marginRight: 20,
        
    },
    DN:{
        marginTop: 70,
        fontSize: 45,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 50
    },
    cmt:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginTop: 20
    },
    info:{
        marginTop: 30
    },
    btnlogin:{
        colorScheme: 'blue',
        marginTop: 40,
        borderRadius: 10,
        marginLeft: 100,
        marginRight: 100
        
    }
})