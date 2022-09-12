import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
       this._types = [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Смартофоны'},
        {id: 1, name: 'Ноутбуки'},
        {id: 2, name: 'Телевизоры'}
       ];
       this._brands = [
        {id: 1, name: "Samsung"},
        {id: 2, name: 'Apple'}
       ];
       this._devices = [
        {id: 1, name:"Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id4257786938655538831.png/orig'},
        {id: 2, name:"Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id4257786938655538831.png/orig'},
        {id: 3, name:"Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id4257786938655538831.png/orig'},
        {id: 4, name:"Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id4257786938655538831.png/orig'}
       ];
       makeAutoObservable(this); 
    };

    setTypes(types) {
        this._types = types;
    };

    setBrands(brands) {
        this._brands = brands;
    };

    setDevices(devices) {
        this._devices = devices;
    };

    get types() {
        return this._types;
    };

    get brands() {
        return this._brands;
    };

    get devices() {
        return this._devices;
    };
};