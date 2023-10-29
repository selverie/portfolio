import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image"; // rekomendasi 

function Home() {
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
              passionate junior developer and enthusiastic at challenges, who
              trust zero become hero is real.
            </p>

            <Link legacyBehavior href="https://github.com/Kunskuy">
              <a className="cta">Lihat Lainnya</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <Image
              src="/img.svg"
              alt="SVG Image"
              width={250} 
              height={150}
              priority={true} // lazy load 
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
