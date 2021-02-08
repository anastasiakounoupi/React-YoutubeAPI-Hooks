import axios from 'axios';

const KEY = 'AIzaSyC6eEsI4NyVSYRHkuqHp-L995THWkb5YRI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 15,
        key: KEY
    }
});