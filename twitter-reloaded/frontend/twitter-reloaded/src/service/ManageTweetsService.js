import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY;

export class ManageTweetsService {

    async retrieveAllTasks() {
        try {
            const data = axios.get(apiKey, { crossdomain: true })
            console.log(data)
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

};

export default new ManageTweetsService();