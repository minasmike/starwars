import axios from "axios";

const getData = async (url) => {
    try {
        const res = await axios.get(url)
        return res.data;
    } catch (e) {
        console.error(e);
        return;
    }
};

export default getData;