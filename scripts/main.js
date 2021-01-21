/*
    Use this for API : json-server -w entries.json -p 8090
*/

import './JournalEntry.js';
import { JournalFormComponent } from './Form/journalForm.js';
import { EntryList } from './JournalEntryList.js';



JournalFormComponent();
EntryList();