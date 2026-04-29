import ProfileCard from "./components/ProfileCard";
import { profiles } from "./data/profiles";

export default function App() {
  return (
    <div className="app">
      <h1>Girls Profile Cards</h1>

      <div className="card-container">
        {profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} />
        ))}
      </div>
    </div>
  );
}
