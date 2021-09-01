import "../css/style.css";

interface NameI {
  id: number;
  name: string;
  sex: string;
}

export default function NameEntry(entry: NameI): JSX.Element {
  if (entry.sex === "f") {
    return (
      <p className="nameEntryGirl" key={entry.id}>
        {entry.name}
      </p>
    );
  } else {
    return (
      <p className="nameEntryBoy" key={entry.id}>
        {entry.name}
      </p>
    );
  }
}
