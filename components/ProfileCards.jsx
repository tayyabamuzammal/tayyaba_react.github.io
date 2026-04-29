import { useState } from "react";
import Button from "./Button";
import { professions } from "../data/professions";

export default function ProfileCard({ profile }) {
  const [showInfo, setShowInfo] = useState(false);
  const [style, setStyle] = useState({});
  const [bg, setBg] = useState(profile.bg);
  const [deleted, setDeleted] = useState(false);
  const [showProf, setShowProf] = useState(false);

  if (deleted)
    return (
      <div className="card">
        <p>Deleted</p>
        <Button text="Recover" color="green" onClick={() => setDeleted(false)} />
      </div>
    );

  return (
    <div className="card" style={{ backgroundColor: bg }}>
      
      <img
        src={profile.img}
        className="profile-img"
        onClick={() => setShowInfo(!showInfo)}
      />

      <h3>{profile.name}</h3>

      {showInfo && (
        <p style={style}>
          Age: {profile.age} <br />
          Info: {profile.info}
        </p>
      )}

      {/* INFO BUTTON */}
      <Button
        text="Toggle Info"
        color="blue"
        onClick={() => setShowInfo(!showInfo)}
      />

      {/* STYLE BUTTONS */}
      <div className="btn-group">
        <Button text="B" color="gray" onClick={() => setStyle({ fontWeight: "bold" })} />
        <Button text="I" color="gray" onClick={() => setStyle({ fontStyle: "italic" })} />
        <Button text="Small" color="gray" onClick={() => setStyle({ fontSize: "12px" })} />
        <Button text="Big" color="gray" onClick={() => setStyle({ fontSize: "22px" })} />
      </div>

      {/* COLOR CHANGE */}
      <div className="btn-group">
        <Button text="Red" color="red" onClick={() => setStyle({ color: "red" })} />
        <Button text="Green" color="green" onClick={() => setStyle({ color: "green" })} />
        <Button text="Blue" color="blue" onClick={() => setStyle({ color: "blue" })} />
        <Button text="Purple" color="purple" onClick={() => setStyle({ color: "purple" })} />
        <Button text="Black" color="black" onClick={() => setStyle({ color: "black" })} />
      </div>

      {/* BACKGROUND CHANGE */}
      <Button text="Change BG" color="orange"
        onClick={() => setBg(bg === "white" ? "#ffe6f0" : "white")}
      />

      {/* DELETE */}
      <Button text="Delete" color="red" onClick={() => setDeleted(true)} />

      {/* PROFESSIONS */}
      <Button
        text="Show Professions"
        color="teal"
        onClick={() => setShowProf(!showProf)}
      />

      {showProf && (
        <div className="prof-list">
          {professions.slice(0, 15).map((p, i) => (
            <div key={i} className="prof-card">
              {p}
            </div>
          ))}
        </div>
      )}
    </div>
  );
                                                                   }
