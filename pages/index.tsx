import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";

function Home({ isDarkMode }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="text-title">HI, I’M Kun</h1>
            <p className="description">
            Informatics Student | Full-Stack Web Dev
            </p>
          </div>

          <div className="image-wrapper">
            <Image
              src={isDarkMode ? '/img-dark.svg' : '/img-light.svg'}
              alt="SVG Image"
              width={250}
              height={150}
              priority={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;