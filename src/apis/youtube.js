import axios from 'axios'

const KEY = 'AIzaSyDjW9PIoFaYPqqNt4ERc4rGG8gRx-NikSM';

export default axios.create ( {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});