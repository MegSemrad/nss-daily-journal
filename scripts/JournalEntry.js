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






/*
    - TO DO
    - Change "Mood" in "entries" to moodId - also make sure that is changed everywhere
    that it could possibly be referenced 
    - use http://localhost:8090/entries?_expand=mood
    - refactor code that built the HTML representation of a journal entry to use the 
      new structure. Instead of using, for example, ${ entryObject.mood } would need to 
      use ${ entryObject.mood.label } label would be the property name of the mood 
    - Need to create a moodProvider() which will have a getMoods() and a useMoods()
    - In the form component need to use 
    ${
    allMoods.map(
        (mood) => {
            return `<option value="${ mood.id }">${ mood.label }</option>`
        }
    ).join("")
}
*/