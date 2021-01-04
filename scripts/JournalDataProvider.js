/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journal = []

export const useEntries = () => journal.slice()


export const getEntries = () => {
    return fetch("http://localhost:8090/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            console.log(entries)
            journal = entries
        })
};