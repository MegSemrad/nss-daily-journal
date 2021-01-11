/*
    - Responsibility of this module is to...
    1. Get moods from API and export 
*/


let moods = [];

export const useMoods = () => moods.slice();

export const getMoods = () => {
    return fetch("http://localhost:8090/moods?")
    .then(response => response.json())
    .then(
        parsedMoods => {
            console.log("moods", parsedMoods)
            moods = parsedMoods
        }
    ) 
};