export function User({ name, pic }) {
  return (
    // UI Starts
    <div>
      <img src={pic} alt="men" />
      <p className="user-greet">
        Hello <span className="user-name">{name}</span>
      </p>
    </div>
    // UI Ends
  );
}
