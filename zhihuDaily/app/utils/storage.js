import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

global.storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 7000 * 3600 * 24,
    enableCache: true,
});
global.storage.sync = require('./strageSync').sync;
