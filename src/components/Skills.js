import * as React from "react"
// markup
function Skills(props) {
  return (
    <section className={props.hide ? 'skills skills-show' : 'skills'}ref={props.reference} id="Skills">
      <h2> Skills</h2>
      <div className="skills-container">
        <div className="skills-group">
          
          <h3> HTML/CSS </h3>
          <h3> React </h3>
          <h3> Vanilla Javascript</h3>
          <h3> jQuery </h3>
          <h3> Bootstrap </h3>
          <h3> WordPress Development</h3>
          <h3> Python </h3>
          <h3> Linux </h3>
        </div>
      </div>
    </section>
  )
}

export default Skills
