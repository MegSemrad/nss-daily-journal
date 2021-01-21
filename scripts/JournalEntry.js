/*
    - Responsibility of this module is to...
    1. To render a single journal entry as an HTML representation of the data
    2. Click event for the delete button 
*/

/*
  
    - In HTML (index.html) Did not take out hard code for the <form> element 
    as did in Martin's Aquarium because it is a form and not individual entries. 
    Therefore beneath the <form> put a <section> element that contained <div> 
    with a class which was called in the 
    (const contentTarget = document.querySelector(".individualEntry")) part on 
    the JournalEntryList.js component 
*/

// const eventHub = document.querySelector(".container");

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="journalDate">${entry.date}</div>
            <div class="journalConcept">${entry.concept}</div>
            <div class="journalEntry">${entry.entry}</div>
            <div class="journalMood">${entry.mood.emotion}</div>
            <input type="submit" value="Edit" class="editButton formFont">
            <input type="submit" value="Delete" id="deleteEntry--${entry.id}" class="deleteButton formFont">
        </section>
    `
};


// eventHub.addEventListener("click", clickEvent => {
//     if(clickEvent.target.id.startsWith("deleteEntry--")) {
//         const [prefix, entryId] = clickEvent.target.id.split("--")

//         deleteEntry(entryId)
//     }
// });