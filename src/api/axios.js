import axios from 'axios';

export default axios.create({
    baseURL: 'https://thucannhanh-production.up.railway.app/loginadmin',
    headers:{'X-Requested-With': 'XMLHttpRequest','Content-Type': 'application/json'}
});