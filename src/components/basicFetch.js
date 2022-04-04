const API_KEY = process.env.REACT_APP_API_KEY;

const BasicFetch = async (endpoint) => {
    const req = await fetch(`${endpoint}&api_key=${API_KEY}`);
    const data = await req.json();
    return data;
};

export default BasicFetch;
