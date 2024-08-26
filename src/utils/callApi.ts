const callApi = async (url: string) => {
    try {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const response = await fetch(url, {
            headers,
            method: 'GET'
        });

        const result = await response.json();
        return result;

    } catch(error) {
        return {Error: error}
    }
};

export default callApi;
