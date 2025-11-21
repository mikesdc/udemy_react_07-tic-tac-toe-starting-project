export default function Log({ gameTurns }) {
  return <ol id="log">
    {gameTurns.map((turn, turnIndex) => (
        <li key={turnIndex}>Move {turnIndex + 1}. {turn.player} plays col {turn.square.col}, row {turn.square.row}</li>
    ))}
  </ol>;
}
