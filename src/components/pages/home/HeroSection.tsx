import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Container = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const HeroSection = () => {
  const nameColor = useColorModeValue("#000", "#fff");

  return (
    <Container
      height="90vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        width={["100%"]}
        marginTop={[8, 0]}
      >
        <Image
          borderRadius="full"
          boxSize="250px"
          src="https://res.cloudinary.com/dlnz6ukow/image/upload/v1761043338/WhatsApp_Image_2025-03-16_at_16.42.18_1f3454ee_vy4oqg.jpg"
          alt="Priyansu Kumar"
          marginTop={[8, 4]}
          marginBottom={[8, 4]}
        />
        <Heading
          as="h1"
          color="#808080"
          size="xl"
          textAlign="center"
          paddingBottom={11}
        >
          Hi, I&apos;m{" "}
          <Box color={nameColor} display="inline-block">
            Priyansu Kumar
          </Box>{" "}
          from India
        </Heading>
        <Text textAlign="center" fontWeight="bold" fontSize={["md", "xl"]}>
          SDE (Android)
        </Text>
        <Link
          style={{ textDecoration: "none" }}
          mt={7}
          isExternal
          href="https://drive.google.com/file/d/1koXM3Qh52DUD9cfgjCI8R9yvHU_QSFvo/view?usp=sharing"
        >
          <Button
            leftIcon={<FaExternalLinkSquareAlt />}
            colorScheme="teal"
            variant="solid"
          >
            Resume
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default HeroSection;
