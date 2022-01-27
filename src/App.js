import "./App.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useState } from "react";
function App() {
  const [source, setSource] = useState("");
  const [isShowingHelp, setIsShowingHelp] = useState(false);
  const showHelp = () => setIsShowingHelp(state => !state);
  const helpText = `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
"monospace", ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.
`

  return (
    <div className="App">
      <div>
        <div className="main-content">
          <header>
            <h1 className="app-title">Markdown Previewer</h1>
            <div
              onClick={showHelp}
              className={`help-button ${isShowingHelp && "active"}`}
            >
              <i>?</i>
            </div>
          </header>

          <div className="text-panels">
            <textarea
              value={isShowingHelp ? helpText : source}
              onChange={(event) => setSource(event.target.value)}
              className="text-panel-left"
              readOnly={isShowingHelp}
            ></textarea>
            <div className="text-panel-right">
              <MarkdownPreview source={isShowingHelp ? helpText : source} />
            </div>
          </div>

          <footer>
            <div>
              2022, created by {" "}
              <a target="blank" href="https://github.com/omer-genc">
                Ömer Genç
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
