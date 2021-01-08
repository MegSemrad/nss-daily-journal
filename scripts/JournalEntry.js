export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="journalDate">${entry.date}</div>
            <div class="journalConcept">${entry.concept}</div>
            <div class="journalEntry">${entry.entry}</div>
            <div class="journalMood">${entry.mood}</div>
            <input type="submit" value="Edit" class="editButton formFont">
            <input type="submit" value="Delete" class="deleteButton formFont">
        </section>
    `
}

/*
    - Purpose: To render a single journal entry as an HTML representation of the data


    - In HTML (index.html) Did not take out hard code for the <form> element 
    as did in Martin's Aquarium because it is a form and not individual entries. 
    Therefore beneath the <form> put a <section> element that contained <div> 
    with a class which was called in the 
    (const contentTarget = document.querySelector(".individualEntry")) part on 
    the JournalEntryList.js component 
*/