const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
}

/*
   Journal data provider for Daily Journal application

    Holds the raw data about each entry and exports
    functions that other modules can use to filter
    the entries for different purposes.
 */

// This is the original data.
let journal = [];

export const useEntries = () => {
journal.sort(
    (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
)
    return journal.slice();
};


export const getEntries = () => {
    return fetch("http://localhost:8090/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            console.log(entries)
            journal = entries
        })
};



export const saveEntry = entry => {
    return fetch('http://localhost:8090/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
};