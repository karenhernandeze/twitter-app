import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY;

let path = window.location.pathname;
let username = path.substring(1);
let url = "";

if (username === "") {
    username = "guest";
    url = `${window.location.href}${username}`
    window.history.replaceState(null, "", url);
}

const api = axios.create({
    baseURL: apiKey,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
});

export class ManageTweetsService {

    async retrieveAllTweets() {
        try {
            const data = await api.get(`/api/${username}/allTweets`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async retrieveLatestTweets() {
        try {
            const data = await api.get(`/api/${username}/tweets`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async createTweet(body) {
        try {
            const data = await api.post(`/api/${username}/new`, body, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async retrieveReplies(tweetId) {
        try {
            const data = await api.post(`/api/${username}/replies`, tweetId, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async setAsReply(body) {
        try {
            const data = await api.post(`/api/${username}/reply`, body, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }
    
    async getUsernameById(body) {
        try {
            const data = await api.post(`/user/get`, body, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async getReplyIds() {
        try {
            const data = await api.get(`/api/${username}/replyIds`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

};

export default new ManageTweetsService();
