import "./App.css";

const skillList = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div>
      <Card />
    </div>
  );
}
function Card() {
  return (
    <div>
      <div className="card">
        <Avatar path="logo192.png" />
        <div className="data">
          <Intro
            name="reza tari"
            content="im working  in my company from 2009 .harworking and very talented"
          />
          <Skills skills={skillList} />
        </div>
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.path} alt="123123" />
    </div>
  );
}
function Intro(props2) {
  return (
    <div>
      <h1>{props2.name}</h1>
      <p>{props2.content}</p>
    </div>
  );
}
function Skills({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          index={index}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
        //<p key={index}>{cat}</p>
      ))}
    </div>
  );
}
function Skill({ index, skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: `${color}` }}>
      <p key={index}>
        {skill}
        {(level === "advanced" && <spa>🐐</spa>) ||
          (level === "intermediate" && <span>👌</span>) ||
          (level === "beginner" && <span>👶</span>)}
      </p>
    </div>
  );
}

export default App;
