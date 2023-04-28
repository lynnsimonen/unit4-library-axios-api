import axios from "axios";

class Itunes {
    static search (keyword){
        let endpoint = 'https://itunes.apple.com/search';
        let params = {
            term: keyword,
            limit: 36,
        }
        let config = {
            params: params,
        }
        return axios.get(endpoint, config)
    }
}

export{Itunes};