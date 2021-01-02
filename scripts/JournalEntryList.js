/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".individualEntry")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    const entries = useEntries()

    for (const entryObject of entries) {
       console.log(entryObject)
       const entryHTML = JournalEntryComponent(entryObject)
        entryLog.innerHTML += entryHTML
    }
}