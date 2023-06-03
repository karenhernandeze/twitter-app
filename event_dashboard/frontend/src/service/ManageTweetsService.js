import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY;
const apiKey2 = process.env.REACT_APP_API_KEY_2;

export class ManageTweetsService {

    async get_most_events() {
        try {
            const data = await axios.get(`${apiKey}/events/most_events`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async get_most_replies() {
        try {
            const data = await axios.get(`${apiKey}/events/most_replies`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async get_open() {
        try {
            const data = await axios.get(`${apiKey}/events/open`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async get_total_replies() {
        try {
            const data = await axios.get(`${apiKey}/events/total_reply`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async get_total_tweets() {
        try {
            const data = await axios.get(`${apiKey}/events/total_tweet`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async get_count_users() {
        try {
            const data = await axios.get(`${apiKey}/events/users`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async get_user(body) {
        try {
            console.log(body)
            const data = await axios.post(`${apiKey2}/user/get`, body, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async get_tweet() {
        try {
            const data = await axios.get(`${apiKey2}/api/guest/allTweets`, { crossdomain: true })
            console.log(data)

            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }
};

export default new ManageTweetsService();