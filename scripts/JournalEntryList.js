/*
   Purpose:
    To render as many journal entry components as there are items in the collection exposed by the data provider component
 */



import { getEntries, useEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";



// ----------------------------------------------------------------------------------------------------------------



// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".individualEntry");
const eventHub = document.querySelector(".container");



// ----------------------------------------------------------------------------------------------------------------



/*
    - Here we are listening for the entryStateChange event. At the point before that event was dispatched 
      an entry had been saved, POSTED, and the getEntries() function fetched anew to ensure all entries
      including the new one are captured and the here below it is being passed through EntryList() -- scroll
      down to see that funciton 
*/
eventHub.addEventListener(".entryStateChanged", () => {
    EntryList()
});



// ----------------------------------------------------------------------------------------------------------------

/*
    - This function 
    - !!!!!!! Ask why invoke getEntries both here and in JournalDataProvider.js - already tried commenting it out here 
    but info then not rendered in DOM - when commented out in other place DOM still worked...do I need
    to keep it in other place for some reason?
    - This function is imported in main.js so allready made entries will load with page
*/

export const EntryList = () => { 
    getEntries()
        .then(() => {
            const allEntries = useEntries()
            render(allEntries)
        })
};



// ----------------------------------------------------------------------------------------------------------------



const render = (entryArray) => {
    const allEntriesConvertedToString = entryArray.map((entry) => JournalEntryComponent(entry)).join("")
    contentTarget.innerHTML = allEntriesConvertedToString
}