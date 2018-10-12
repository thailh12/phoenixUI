import { AsyncStorage } from 'react-native';

export async const SignIn = ( token ) =>{
    await AsyncStorage.setItem('token', token)
}
export async const getToken = ()=>{
    let token = await AsyncStorage.getItem('token');
    return token;
}
export async const SignOut = () =>{
    await AsyncStorage.clear()
}

export async const setVoucherList = (list) => {
    list = JSON.stringify(list);
    await AsyncStorage.setItem('voucher', list);
}
export async const getVoucherList =()=>{
    let res = await JSON.parse(AsyncStorage.getItem('voucher'));
    return res;
}
export async const setPrivateKey = (key) =>{
    await AsyncStorage.setItem('key', key);
}
export async const getPrivateKey = () =>{
     let key = await AsyncStorage.getItem('key');
     return key;
}