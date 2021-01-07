import { saveEntry } from '../JournalDataProvider.js';



// ----------------------------------------------------------------------------------------------------------------



const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".journalEntryForm");

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recordButton") {
        // clickEvent.preventDefault()



// ----------------------------------------------------------------------------------------------------------------

/*
    - The below function creates the HTML for the entry form 
*/

const render = () => {
    contentTarget.innerHTML = `
        <fieldset class="date">
            <label for="journalDate" class="date__label">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate" class="date__input">
        </fieldset>
    
        <fieldset class="conceptsCovered">
            <label for="conceptsCovered" class="conceptsCovered__label">Concepts Covered</label>
            <input type="text" class="conceptsCovered__input">
        </fieldset>

        <fieldset class="journalEntry">
            <label for="journalEntry" class="journalEntry__label">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="10" class="journalEntry__text"></textarea>
        </fieldset>

        <fieldset class="mood">
            <label for="mood" class="mood__label">Mood</label>
            <select name="mood" id="" class="mood__selector">
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

        <input type="submit" value="Record Journal Entry" id="recordButton">
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

/*
    - This eventListener is waiting on a click event on the "Record Entry" button. 
    - The id="recordButton" was decided in the above HTML and because this is the module
      which holds the HTML this is also the place where the click eventListener will be
    - the .value allows for the collecting of the data entered into the form by the user
      the ids and classes were also decided in the above HTML
    - That information is then placed within a new object titled "newEntry" which is then 
      passed through saveEntry(). This function comes 
*/

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "recordButton") {

        const date = document.querySelector("#journalDate").value
        const concepts = document.querySelector(".conceptsCovered__input").value
        const entry = document.querySelector("#journalEntry").value
        const mood = document.querySelector(".mood__selector").value

        const newEntry = {
            date: date,
            concepts: concepts,
            entry: entry,
            mood: mood
        }

        saveEntry(newEntry)
    }
});