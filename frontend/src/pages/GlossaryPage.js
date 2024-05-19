import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function GlossaryPage() {

    return (
    <div className="glossary-page">
      <NavLink to={`/`} className="close-button">
        <IoCloseSharp />
      </NavLink>
      <h1>Glossary</h1>
      <h2>Chapter 1 - Preconception and Planning</h2>

      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 1</h3>
        <h4>Menstrual cycle and ovulation</h4>
        <p>Understanding the phases of the menstrual cycle and how ovulation works, including timing for optimal fertility.</p>
      </a>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 2</h3>
        <h4>Fertility tracking methods</h4>
        <p>Overview of methods to track fertility, such as basal body temperature charting, ovulation predictor kits, and cervical mucus observation.</p>
      </a>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 3</h3>
        <h4>Common fertility issues</h4>
        <p>Discussion of common fertility problems and potential treatments or interventions to improve fertility.</p>
      </a>
      <h2>Chapter 2 - Early Pregnancy</h2>

      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 1</h3>
        <h4>Pregnancy Tests: Types and Accuracy</h4>
        <p>Information on different types of pregnancy tests (home tests, blood tests) and their reliability.</p>
      </a>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 2</h3>
        <h4>Initial signs and symptoms</h4>
        <p>Common early pregnancy symptoms such as nausea, fatigue, and breast tenderness, and when they typically occur.</p>
      </a>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 3</h3>
        <h4>Hormonal changes and their effects</h4>
        <p>During pregnancy, a woman's body undergoes significant hormonal changes that are crucial for the development and maintenance of the pregnancy.</p>
      </a>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 4</h3>
        <h4>Physical and emotional changes</h4>
        <p>Pregnancy brings a wide array of physical and emotional changes as the body adapts to support the developing baby.</p>
      </a>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 5</h3>
        <h4>Common discomforts and how to manage them</h4>
        <p>Understanding these common discomforts and learning how to manage them can help expectant mothers maintain their well-being throughout pregnancy.</p>
      </a>

      <h2>Chapter 3 - Second Trimester</h2>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 1</h3>
        <h4>Milestones in fetal growth</h4>
        <p>Fetal development is a complex process with key milestones occurring at various stages throughout pregnancy.</p>
      </a>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 2</h3>
        <h4>Ultrasound and anatomy scans</h4>
        <p>Ultrasound and anatomy scans are crucial components of prenatal care, providing valuable information about the baby’s development and the health of the pregnancy.</p>
      </a>
      <a href="#" className="glossary-lesson-button">
        <h3>Lesson 3</h3>
        <h4>Managing weight gain</h4>
        <p>Healthy weight gain during pregnancy is essential for the well-being of both the mother and the baby.</p>
      </a>
    </div>
    );
  }
  
  export default GlossaryPage;
  