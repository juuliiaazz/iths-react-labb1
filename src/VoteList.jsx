import Vote from "./Vote";

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
