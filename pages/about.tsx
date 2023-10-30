import Navbar from "../components/Navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="text-title">About</h1>
            <p className="description">
            Hello, everyone! I’m Kun, a motivated individual with a strong desire to become a Full Stack Web Developer. My journey in the world of web development has been a thrilling adventure, and I am eager to take on new challenges to craft innovative solutions. Equipped with a solid foundation in programming languages. I am committed to honing my skills and learning new technologies. Let's connect and collaborate to build web applications together!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
