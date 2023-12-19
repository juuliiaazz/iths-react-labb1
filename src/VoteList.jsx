import Vote from "./Vote";

// en funktion för att hantera en lista av alla röster
export function VoteList({ votes }) {
  return (
    <div>
      <ul>
        {votes.map((vote) => (
          <Vote vote={vote} key={vote.email} />
        ))}
      </ul>
    </div>
  );
}
