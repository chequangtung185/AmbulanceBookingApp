import React from "react";
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider} from "native-base";
import { useState } from "react";
import { Text,StyleSheet,View, TouchableOpacity,Alert } from "react-native";
import { Icon } from "react-native-elements";
  

const Example = () => {
  const [user,setuser] = useState('');
  const [sdt,setsdt] = useState('');

  const DatNhanh =()=>{
    if(user == "" || sdt == ""){
      Alert.alert('Thông báo!','Không được để trống thông tin!',[
        {
          text: 'Yes',
          onPress: () => setShowModal(true)
        }])
    }else{
      Alert.alert('Thông báo!','Xin chào '+ user + '. Chúng tôi sẽ sớm liên hệ tới ' + sdt +'!',[
        {
          text: 'Yes',
          onPress: () => setShowModal(false)
        }]);
    }
  }
    const [showModal, setShowModal] = useState(false);
    return <Center>
       <View >
        <TouchableOpacity onPress={() => setShowModal(true)}>
        <Icon 
                name="plus-circle"
                size={50}
                color='red'
                type="octicon"/>
        </TouchableOpacity>
        </View>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="500px">
            <Modal.CloseButton />
            <Text style={{color:'red',marginLeft: 100, marginTop:40,fontSize: 20}}>{'ĐẶT NHANH \nXE CẤP CỨU'}</Text>
            <Text style={{color:'black',marginLeft: 15, marginTop:10,fontSize: 15,textDecorationLine: 'underline'}}>Vui lòng cung cấp thông tin dưới đây:</Text>
            <Modal.Body>
              <FormControl>
                <Input inlineImageLeft={'user' } inlineImagePadding={20} placeholder="Họ và tên" value={user} onChangeText={(anything) => setuser(anything)}/> 
              </FormControl>
              <FormControl mt="3">
                <Input inlineImageLeft={'dienthoai' } inlineImagePadding={20} placeholder="Điện thoại liên lạc" value={sdt} onChangeText={(anything) => setsdt(anything)}  />
                <Text style={{color:'red',marginLeft: 5, marginTop:10,fontSize: 14,fontStyle: 'italic'}}>Chúng tôi sẽ liên lạc quý khách sớm nhất</Text>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button marginRight={90} colorScheme={'red'} onPress={DatNhanh}>
                  Đặt nhanh
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>;
  };
  export default () => {
    return (
      <NativeBaseProvider>
        <Center flex={1} px="3">
            <Example />
        </Center>
      </NativeBaseProvider>
    );
};

