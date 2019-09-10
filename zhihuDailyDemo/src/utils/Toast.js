import Toast from 'react-native-root-toast';


const option = {
    shadow: false,
    backgroundColor: '#777a6b',
    textColor: '#fff',
    opacity: 0.9,
    textStyle: {
        fontSize: 12
    }
};

export default function ( mess, option = option ) {
    Toast.show(mess, option)
}
