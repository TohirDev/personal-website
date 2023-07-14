import { AboutMe } from "./about-me";
import { HomePage } from "./home-page";
import { Navbar } from "./navbar";

export const Pages = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
    </>
  );
};
