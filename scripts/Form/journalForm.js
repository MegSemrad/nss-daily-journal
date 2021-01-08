/*
    - This module is responsible for creating the form for daily entries. 
    - As such, it as is responsible to house the click event on the "Record Entry" 
      button which is created in the below HTML
*/ 


// ----------------------------------------------------------------------------------------------------------------



/*
    - The saveEntry function is what is invoked for a new entry to be posted to the API
*/

import { saveEntry } from '../JournalDataProvider.js';



// ----------------------------------------------------------------------------------------------------------------



/*
    - This eventListener is waiting on a click event on the "Record Entry" button. 
    - The id="recordButton" was decided in the below HTML and because this is the module
      which holds the HTML this is also the place where the click eventListener will be
    - the .value allows for the collecting of the data entered into the form by the user
      the ids and classes were also decided in the below HTML
    - That information is then placed within a new object titled "newEntry" which is then 
      passed through saveEntry(). This function comes JournalDataProvider.js and is responsible 
      for POSTING a new entry to the API
*/

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".journalEntryForm");

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recordButton") {
        // clickEvent.preventDefault()
        /* if wanting or needing to use .preventDefault() make sure have 
        narrowed the scope by not adding it in eventHub but rather just a container with 
        the form, otherwise any click event will be preventedDefault OR second option
        is to place it in the if statement as only the button will have the specific id 
        that the if statement outlines
        */
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector(".conceptsCovered__input").value
        const entry = document.querySelector("#journalEntry").value
        const mood = document.querySelector(".mood__selector").value

        const newEntry = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }

        saveEntry(newEntry)
    }
}); 


// ----------------------------------------------------------------------------------------------------------------

/*
    - The below function creates the HTML for the entry form 
*/

const render = () => {
    contentTarget.innerHTML = `
        <fieldset class="date">
            <label for="journalDate" class="date__label ">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate" class="date__input formStyling">
        </fieldset>
    
        <fieldset class="conceptsCovered">
            <label for="conceptsCovered" class="conceptsCovered__label">Concepts Covered</label>
            <input type="text" class="conceptsCovered__input formStyling">
        </fieldset>

        <fieldset class="entry">
            <label for="journalEntry" class="entry__label">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="10" class="entry__text formStyling"></textarea>
        </fieldset>

        <fieldset class="mood">
            <label for="mood" class="mood__label">Mood</label>
            <select name="mood" id="" class="mood__selector formStyling">
                <option value="other">other</option>
                <option value="confused">confused</option>
                <option value="enthusiastic">enthusiastic</option>
                <option value="encouraged">encouraged</option>
                <option value="excited">excited</option>
                <option value="exhausted">exhausted</option>
                <option value="frustrated">frustrated</option>
                <option value="happy">happy</option>
                <option value="neutral">neutral</option>
                <option value="so-so">so-so</option>
                <option value="unsure">unsure</option>
            </select>
        </fieldset>

        <input type="submit" value="Record Journal Entry" id="recordButton" class="formFont">
    `
};



// ----------------------------------------------------------------------------------------------------------------

/*
    - This function invokes the above render function 
    - It must be imported on main.js so the form is loaded with the page
*/

export const JournalFormComponent = () => {
    render()
};




// ----------------------------------------------------------------------------------------------------------------

