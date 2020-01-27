import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 037dfa07763bdbe69967d43d022e1aed680c514f9a85e398cb9cbea144a1e864'
    }
});