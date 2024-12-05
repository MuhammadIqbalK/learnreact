import "./index.css";
import Note from "./components/note.jsx";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 bg-black text-4xl font-bold text-blue-600">
        <div>
          <Note title="Note 1" description="React note" />
          <Note title="Note 2" description="Js note" />
        </div>
      </div>
    </>
  );
}

export default App;
