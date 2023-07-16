import { AboutMe } from "./about-me";
import { HomePage } from "./home-page";
import { Navbar } from "./navbar";
import { Services } from "./services";

export const Pages = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Services />
    </>
  );
};
