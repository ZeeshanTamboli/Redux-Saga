const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

export const fetchImages = async page => {
    const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${key}&per_page=28&page=${page}`,
    );
    const data = await response.json();

    if (response.status >= 400) {
        throw new Error(data.error);
    }
    return data;
};

export const fetchImageStats = async id => {
    const response = await fetch(
        `https://api.unsplash.com/photos/${id}/statistics?client_id=${key}`,
    );
    const data = await response.json();

    if (response.status >= 400) {
        throw new Error(data.error);
    }
    return data;
};
