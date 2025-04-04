export const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    });

    return await res.json();
};

export const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Fetching ${url} failed ,status: ${res.status}`);
    }

    return await res.json();
};

// export { postData };
// export { getResource };
