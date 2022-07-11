import React, { useState } from "react";
import Showdown from "showdown";
import ReactMde from "react-mde";

export default function Editor(props) {
  console.log(props);
  //! create a state for selected tab
  const [selectedTab, setSelectedTab] = useState("Write");
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });
  return (
    <section className="pane editor">
      <ReactMde
        value={props.currentNote.body}
        onTabChange={setSelectedTab}
        onChange={props.updateNote}
        selectedTab={selectedTab}
        minEditorHeight={80}
        heightUnits="vh"
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </section>
  );
}
