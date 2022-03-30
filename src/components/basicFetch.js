const API_BASE = 'https://api.themoviedb.org/4/';
const API_KEY = 'api_key=cc6f0df09b8b698a846b90793131765a';
const BasicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}&${API_KEY}`);
    const data = await req.json();
    return data;
};

export default BasicFetch;
