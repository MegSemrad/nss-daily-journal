const eventHub = document.querySelector(".container");


// ----------------------------------------------------------------------------------------------------------------



const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
};
/*
    - This function dispatches a custom event to alert to the fact that the state of 
      the application has changed
    - It will be heard in JournalEntryList.js module and then the innerHTML will be updated
*/



// ----------------------------------------------------------------------------------------------------------------



export const getEntries = () => {
    return fetch("http://localhost:8090/entries") 
        .then(response => response.json())  
        .then(entries => {
            console.log(entries)
            journal = entries 
        })
};
/*
- getEntries is a function which returns the result of calling fetch 
  and the result is an object - which is a promise object! - which has a property 
  called '.then()' ) (!so .then() is a method on a promise object!)
- fetch() is a method/function 
    - a url is passed in as input/arguement - which makes the request for data
-   .then(reponse => response.json()) is taking the response from the browser (which will be a 
    STRING i.e. the requested data) and telling the function to run a method to convert that json 
    string into a javascript datatype. This could be an array or object, etc.
*/



// ----------------------------------------------------------------------------------------------------------------



// This is the original data. Keep the original data pure by with .slice()
let journal = [];

export const useEntries = () => {
journal.sort(
    (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
)
    return journal.slice();
};



// ----------------------------------------------------------------------------------------------------------------



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
/*
    - saveEntry is for when a new entry is created and must be saved to the API
    - this fetch (unlike the GET fetch) takes two arguments
    - .then() must getEntries() again because the state has changed
    - .then() must dispatchStateChangeEvent() which will invoke function at top of module 
*/