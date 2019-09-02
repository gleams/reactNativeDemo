import { Api, Axios } from './index'

const sync = {
    details( params ) {
        const { id } = params;
        return Axios.get(Api.details + id).then(json => {
            if ( json && json.data.body ) {
                global.storage.save({
                    key: 'details',
                    id,
                    data: json.data,
                });
                return json.data;
            } else {
                return null;
            }
        }).catch(err => {
            return Promise.reject(err);
        })
    },
    before( params ) {
        const { id } = params;
        return Axios.get(Api.before + id).then(json=>{
            if (json && json.data.stories) {
                global.storage.save({
                    key: 'before',
                    id: id,
                    data: json.data,
                });
                return json.data;
            } else {
                return null
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    latest(params){
        return Axios.get(Api.latest).then(json => {
            if (json && json.data.stories) {
                global.storage.save({
                    key: 'latest',
                    data: json.data,
                    // 设置数据过期时间(毫秒单位)
                    expires: 1000 * 60 * 10,
                });
                return json.data
            } else {
                return null
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    section(params) {
        let {
            id
        } = params;
        return Axios.get(Api.section + id).then(json => {
            if (json && json.data.stories) {
                global.storage.save({
                    key: 'section',
                    data: json.data,
                    id,
                    // 设置数据过期时间(毫秒单位)
                    expires: null,
                });
                return json.data
            } else {
                return null
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    extra(params) {
        let { id } = params;
        return Axios.get(Api.extra + id).then(json => {
            if (json.data) {
                global.storage.save({
                    key: 'extra',
                    data: json.data,
                    id,
                    expires: 1000 * 180,
                });
                return json.data
            } else {
                return null
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    }
};

exports.sync = sync;
