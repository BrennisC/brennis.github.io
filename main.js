const URL = "https://rickandmortyapi.com/api/character/";

const fetchData = async () => {
    const res = await fetch(URL);
    const { results } = await res.json();

    return results;
};

