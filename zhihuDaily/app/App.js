import React,{Component} from 'react';
import {Platform,Alert,Linking} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {Provider,observer} from 'mobx-react';
import stores from './store';
import './utils/storage';
import SplashScreen from 'react-native-splash-screen'
import AppNavigation from './router/AppRouter';
import RNRestart from 'react-native-restart';
import DeviceInfo from 'react-native-device-info';
import {setJSExceptionHandler,setNativeExceptionHandler} from 'react-native-exception-handler';
import {Axios} from "./utils";

const prefix = "daily://";
const errorHandler = (e, isFatal) => {
    if (isFatal) {
        Alert.alert(
            '系统错误',
            `
        应用发生致命错误： ${(isFatal) ? '错误信息:' : ''} ${e.name} ${e.message}
        建议您重启应用.
        `,
            [{
                text: '重启应用',
                onPress: () => {
                    RNRestart.Restart();
                }
            }]
        );
    } else {
        console.log(e);
    }
};

setNativeExceptionHandler((errorString) => {
    //向服务器发送错误日志
    let  errInfo={
        '品牌':DeviceInfo.getBrand(),
        '应用版本号':DeviceInfo.getReadableVersion(),
        '系统版本':DeviceInfo.getSystemVersion(),
        '是否为平板电脑': DeviceInfo.isTablet(),
        "触发时间":new Date(),
        '错误信息':errorString,
    };
    console.log('error',JSON.stringify(errInfo));
   /* Axios.post("http://106.52.75.247:3000/feedback", {
        title: '知乎日报APP错误日志',
        content: JSON.stringify(errInfo)
    }).then((res) => {

    }).catch(() => {

    });*/
});

class App extends React.Component{
    componentDidMount() {
        SplashScreen.hide()
    }
    render(){
        return(
            <Provider {...stores}>
                <MenuProvider>
                    <AppNavigation
                        uriPrefix={prefix}
                        screenProps={{theme:stores.theme.colors.navBackground}}
                    />
                </MenuProvider>
            </Provider>
        )
    }
}
export default App;
