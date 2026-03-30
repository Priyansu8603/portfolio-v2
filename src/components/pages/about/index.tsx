import { Divider } from "@chakra-ui/react";

import Content from "./Content";
import HeadSection from "./HeadSection";
import Service from "./Service";

const About = () => {
  return (
    <>
      <HeadSection />
      <Content />
      <Divider my={7} />
      <Service />
    </>
  );
};

export default About;
