const API_BASE = 'https://api.themoviedb.org/3/';
const API_KEY = 'cc6f0df09b8b698a846b90793131765a';

const BasicFetch = async (endpoint) => {
    await fetch(`${API_BASE}${endpoint}${API_KEY}`);
};

// export default {
//     getHomeList: async () => {
//         return [{}];
//     },
// };

export default BasicFetch;

