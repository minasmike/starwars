import axios from "axios";

const getData = async (url) => {
    try {
        const res = await axios.get(url).then((res) => res.data);
        return res;
    } catch (e) {
        console.error(e);
        return;
    }
};

export default getData;