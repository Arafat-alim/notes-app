import React, { useState } from "react";
import Split from "react-split";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { data } from "./data";
import { nanoid } from "nanoid";

function App() {
  //! creating a note state
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  // ! function to create a new Note
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }
  // ! function to update a Note
  function updateNote() {}
  // ! function to findCurrent Note
  function findCurrentNote() {}

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
          />
          <Editor currentNote={findCurrentNote} updateNote={updateNote} />
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no Notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one Now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
