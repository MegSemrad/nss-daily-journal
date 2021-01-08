/*
   Purpose:
    To render as many journal entry components as there are items in the collection exposed by the data provider component
 */



import { getEntries, useEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";



// ----------------------------------------------------------------------------------------------------------------



// DOM reference to where all entries will be rendered & to the eventHub where are listening out for events
const contentTarget = document.querySelector(".individualEntry");
const eventHub = document.querySelector(".container");



// ----------------------------------------------------------------------------------------------------------------



/*
    - Here we are listening for the entryStateChange event. At the point before that event was dispatched 
      an entry had been saved, POSTED. Here below we are saying when the event happens invoke
      EntryList() -- scroll down to see that funciton 
*/
eventHub.addEventListener(".entryStateChanged", () => {
    EntryList()
});



// ----------------------------------------------------------------------------------------------------------------

/*
    - This function serves two purposes currently. 
    - The first is to render all precviously entered entries onto the DOM when the page loads and this is
      why this is exported and subsequently imported on main.js so the entries show upon page load
    - The second purpose is to retrieve the entries again once the ".entryStateChanged" event is heard on
      eventHub to ensure the new entries which have been posted to the API are collected and the page is updated 
    - !!!!!!! Ask why invoke getEntries both here and in JournalDataProvider.js - already tried commenting it out here 
    but info then not rendered in DOM - when commented out in other place DOM still worked...do I need
    to keep it in other place for some reason?

    - allEntries is an array of objects
*/

export const EntryList = () => { 
    getEntries()
        .then(() => {
            const allEntries = useEntries()
            render(allEntries)
        })
};



// ----------------------------------------------------------------------------------------------------------------


/*
    - The value of render is a string 
    - If want to find the value of a function can simply skip down to the return value or the innerHTML

    - every method is a function but not every function is a method!!!!!!!
    - Think of .map as a t?? function

    - Remember! How to read the code below is to read the ntryArray.map((individualEntryObj) => JournalEntryComponent(individualEntryObj))
      then .join() and lastly say that value is stored in the const allEntriesConvertedToString 
*/
const render = (entryArray) => {
    const allEntriesConvertedToString = entryArray.map((individualEntryObj) => JournalEntryComponent(individualEntryObj)).join(" ")
    contentTarget.innerHTML = allEntriesConvertedToString
};