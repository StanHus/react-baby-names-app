import NameEntry from "./nameEntry";
import namesData from "../names.json";
import "../css/style.css";

export default function NamesList(): JSX.Element {
  return (
    <body>
      <div className="list">
        {namesData.sort((a, b) => a.name.localeCompare(b.name)).map(NameEntry)}
      </div>
    </body>
  );
}
