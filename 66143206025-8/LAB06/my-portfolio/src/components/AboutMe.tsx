// function AboutMe(){
//     return(
//         <section>
//             <h2>About Me</h2>
//             <p>My name is Nanfa Wongkad and I am a Computer Engineering student</p>
//         </section>
//     );
// }
// export default AboutMe;

import Section from './Section'; // Import เข้ามา

function AboutMe() {
  return (
    <Section title="About Me" id="about">
      {/* เนื้อหาข้างในนี้จะกลายเป็น 'children' */}
      <p>My name is Nanfa Wongkad and I am a Computer Engineering student...</p>
    </Section>
  );
}

export default AboutMe;
