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

export class ManageTweetsService {

    async retrieveAllTweets() {
        try {
            const data = await axios.get(`${apiKey}/api/${username}/allTweets`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async retrieveLatestTweets() {
        try {
            const data = axios.get(`${apiKey}/api/${username}/tweets`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async createTweet(body) {
        try {
            const data = axios.post(`${apiKey}/api/${username}/new`, body, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async retrieveReplies(tweetId) {
        try {
            const data = axios.post(`${apiKey}/api/${username}/replies`, tweetId, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async setAsReply(body) {
        try {
            const data = axios.post(`${apiKey}/api/${username}/reply`, body, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }
    
    async getUsernameById(body) {
        try {
            console.log(body)
            const data = axios.post(`${apiKey}/user/get`, body, { crossdomain: true })
            console.log(data)
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async getReplyIds() {
        try {
            const data = await axios.get(`${apiKey}/api/${username}/replyIds`, { crossdomain: true })
            console.log(data)
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

};

export default new ManageTweetsService();