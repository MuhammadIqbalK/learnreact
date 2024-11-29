import "./App.css";
import Note from "./components/note.jsx";

function App() {
  return (
    <div>
      <Note title="Note 1" description="React note" />
      <Note title="Note 2" description="Js note" />
    </div>
  );
}

export default App;
