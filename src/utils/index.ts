import axios, { AxiosPromise } from 'axios';
import translations from '../translations';
import animateScrollTo from 'animated-scroll-to';
import * as moment from 'moment';

export function request(method: 'get' | 'post' | 'put' | 'delete', url: string, data?: Object): AxiosPromise {
    const token = localStorage.getItem('token');

    return axios({
        method,
        headers: {'Authorization': `Bearer ${token}`},
        url: process.env.REACT_APP_API_HOST + url,
        data
    });
}

export function saveTokenAddress(token?: string, address?: string) {
    if(token) {
        localStorage.setItem('token', token);
    }
    if(address) {
        localStorage.setItem('address', address);
    }
}

export function getAddress(): (string | null) {
    return localStorage.getItem('address');
}

export function revokeTokenAddress() {
    localStorage.removeItem('token');
    localStorage.removeItem('address');
}

export function getLocale() {
    const settedLocale = localStorage.getItem('locale');

    if(settedLocale) {
        return settedLocale;
    } else {
        const supportedLangs = Object.keys(translations);
        let lang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
        
        if(supportedLangs.indexOf(lang) === -1) {
            lang = 'en';
        }
        
        setLocale(lang);
        return lang;
    }
}

export function setLocale(locale: string, callback?: Function) {
    localStorage.setItem('locale', locale);

    if(callback) {
        callback();
    }
}

export function flattenMessages(nestedMessages: Object, prefix: string = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        let value = nestedMessages[key];
        let prefixedKey = prefix ? `${prefix}.${key}` : key;

        if(typeof value === 'string') {
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }
 
        return messages;
    // tslint:disable-next-line
    }, {});
}

const strings = flattenMessages(translations);
export function transl(id: string): string {
    return strings[`${getLocale()}.${id}`] || id;
}

export function fallbackImg(event: React.SyntheticEvent<HTMLImageElement>) {
    return event.currentTarget.src = '/fallback.png';
}

export function customScroll(element: HTMLElement, offset?: number) {

    offset = -80;

    const options = {
        speed: 250,
        minDuration: 250,
        maxDuration: 1500,
        cancelOnUserAction: false,
        offset
    };

    animateScrollTo(element, options);
}

export function inputExtractor(event: React.ChangeEvent<HTMLInputElement>, callback: (value: string | number, name?: string) => void) {
    const { value } = event.target;
    const { name } = event.target;

    return callback(value, name);
}

export function formatDate(date: (moment.Moment | Date)): string {
    return moment(date).format('DD/MM/YYYY');
}

export function toFixed(x: string) {
    let e = 0; 
    let a: number = Number(x);
    
    if (Math.abs(a) < 1.0) {
        e = parseInt(x.toString().split('e-')[1], undefined);
        if (e) {
            a *= Math.pow(10, e - 1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2)
        }
    } else {
        e = parseInt(x.toString().split('+')[1], undefined);
        if (e > 20) {
            e -= 20;
            a /= Math.pow(10, e);
            a += Number((new Array(e + 1)).join('0'))
        }
    }

    return x;
}