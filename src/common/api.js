import instance from './instance'

exports.login = (data) => {
    return instance.post("/login",data);
}