import axios from 'axios';

class ShopApi {
    async login() {
        const response = await axios({
            url: 'http://localhost:8000/auth/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response);
    }
}

const Api = new ShopApi();

export { Api };
