const axios = require('axios');

async function getSynonym(word) {
    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

getSynonym('hello').then(test => {
    console.log(test[0].meanings)
})