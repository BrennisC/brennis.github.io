const URL = "https://rickandmortyapi.com/api/character/";

const searchPersonaje = document.getElementById("text_search");
const buttonSearch = document.getElementById("button_search");
const text_search = document.getElementById("text_search");

// consultar los datos de la api
const fetchData = async () => {
    const res = await fetch(URL);
    const { results } = await res.json();

    return results;
};

const render = async () => {
    const data = await fetchData();
    const container = document.getElementById("root");

    // iterando para elemento para mostrar
    data.forEach((character) => {
        const card = document.createElement("main");

        card.innerHTML = `
        <h2 >${character.name}</h2>
        <p class="status">${character.status}</p>
        <p>${character.species}</p>
        <p>${character.gender}</p>
            <p>${character.origin.name}</p>
            <img src="${character.image}" />
        `;

        container.appendChild(card);
    });
};

addEventListener("DOMContentLoaded", render);