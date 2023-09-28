import "./generate.css";
import GenerateHeader from "../../Components/Generate/GenerateHeader/GenerateHeader";
import GenerateBody from "../../Components/Generate/GenerateBody/GenerateBody/GenerateBody";
function App({ resultBox, header, sidebar }) {
  return (
    <div className="mainsoftwarelayout__body">
      <GenerateHeader header={header} />
      <GenerateBody resultBox={resultBox} sidebar={sidebar} />
    </div>
  );
}

export default App;
