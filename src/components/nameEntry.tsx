import "../css/style.css";

interface NameI {
  id: number;
  name: string;
  sex: string;
}

export default function NameEntry(entry: NameI): JSX.Element {
  if (entry.sex === "f") {
    return (
      <li className="nameEntryGirl" key={entry.id}>
        {entry.name}
      </li>
    );
  } else {
    return (
      <li className="nameEntryBoy" key={entry.id}>
        {entry.name}
      </li>
    );
  }
}
