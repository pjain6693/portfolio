import "./Resume.css";
import Skills from "../components/Skills";
import Education from "./Education";
import Experience from "./Experience";


const Resume = () => {
  return (
    <div>
      <Skills />
      <Education />
      <Experience />
    </div>
  );
};

export default Resume;
