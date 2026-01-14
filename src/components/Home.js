import featImg from "../assets/ace-ai-robot.jpg";

export default function Home() {
  return (
    <div className="container">
      <img className="img-feat" src={featImg} alt="RP School of Infocomm" />

      <h1 className="page-h1">Home</h1>

      <p className="home-text">
        If you are excited by the latest technological advances and have a passion for problem-solving, join us at RP School of Infocomm (SOI). We will help you discover your hidden technical skills and nurture your creative digital dreams. We offer six diploma programmes across a wide range of infocomm disciplines.
      </p>
    </div>
  );
}
