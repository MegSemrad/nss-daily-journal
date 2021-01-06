import { saveEntry } from '../JournalDataProvider.js';

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".journalEntryForm");

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


export const JournalFormComponent = () => {
    render()
};