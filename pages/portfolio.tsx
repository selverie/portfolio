import Navbar from "../components/Navbar";
import Head from "next/head";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="text-title">Portfolio</h1>
            <p className="description">
              Ini bisanya berisi skill dan project-project
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/img.svg" className="portfolio-image" alt="img1" style={{ width: "250px",  height: "150px"}}/>

                <h1 className="portfolio-name">Coming Soon</h1>
                <div className="portfolio-category">Name Projects</div>
              </div>
              <div className="portfolio-item">
                <img src="/img.svg" className="portfolio-image" alt="img2" style={{ width: "250px",  height: "150px"}}/>


                <h1 className="portfolio-name">Coming Soon</h1>
                <div className="portfolio-category">Name Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;