// en funktion för att hantera varje röst
export default function Vote({ vote }) {
  return (
    <div className="voteList">
      <li>
        <span>
          {vote.name} röstade på {vote.selectValue}
        </span>
      </li>
    </div>
  );
}
