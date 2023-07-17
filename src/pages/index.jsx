import { AboutMe } from "./about-me";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { HomePage } from "./home-page";
import { Navbar } from "./navbar";
import { Portfolio } from "./portfolio";
import { Resume } from "./resume";
import { Services } from "./services";

export const Pages = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Services />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};
