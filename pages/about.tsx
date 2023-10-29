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
              Ini isinya data diri seorang pembuat website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
