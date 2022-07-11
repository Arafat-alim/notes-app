import React from "react";
import Showdown from "showdown";
import ReactMde from "react-mde";

export default function Editor() {
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });
  return (
    <section className="pane editor">
      <ReactMde
        minEditorHeight={80}
        heightUnits="vh"
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </section>
  );
}
