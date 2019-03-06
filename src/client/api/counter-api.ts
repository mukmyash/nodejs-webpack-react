import axios from 'axios'

export function resetCounter() {
    return axios
        .post(`/api/counter/reset`);
}