/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".individualEntry");
const eventHub = document.querySelector(".container");

eventHub.addEventListener(".entryStateChanged", () => {
    EntryList()
});

const render = (entryArray) => {
    const allEntriesConvertedToString = entryArray.map((entry) => JournalEntryComponent(entry)).join("")
    contentTarget.innerHTML = allEntriesConvertedToString
}

export const EntryList = () => {
    getEntries()
        .then(() => {
            const allEntries = useEntries()
            render(allEntries)
        })
};

// export const EntryListComponent = () => {
//     // Use the journal entry data from the data provider component
//     getEntries()
//     const entries = useEntries()

//     for (const entryObject of entries) {
//        console.log(entryObject)
//        const entryHTML = JournalEntryComponent(entryObject)
//         entryLog.innerHTML += entryHTML
//     }
// };