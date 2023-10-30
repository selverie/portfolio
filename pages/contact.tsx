import Navbar from "../components/Navbar";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="text-title-contact">Contact</h1>
            <form className="contact-form">
              <div className="input-group">
                <input type="text" id="name" name="name" placeholder="Name" />
              </div>

              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="Email" />
              </div>

              <div className="input-group">
                <textarea id="message" name="message" placeholder="Your Message..."></textarea>
              </div>

              <button type="submit" className="send-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
