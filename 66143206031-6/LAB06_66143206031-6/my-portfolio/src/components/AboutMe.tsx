// function AboutMe(){
//     return (
//         <section id="about">
//             <h2>About Me</h2>
//             <p>My name is Sorayuth Singkaew and I am a Computer Engineering student with a passion for web devolopment.</p>
//         </section>
//     )
// }
// export default AboutMe;
import Section from './Section'; // Import เข้ามา

function AboutMe() {
  return (
    <Section title="About Me" id="about">
      {/* เนื้อหาข้างในนี้จะกลายเป็น `children` */}
      <p>My name is Sorayuth Singkaew and I am a Computer Engineering student...</p>
    </Section>
  );
}

export default AboutMe;
