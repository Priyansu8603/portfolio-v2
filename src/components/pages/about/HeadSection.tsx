import { Box, Heading, Image } from "@chakra-ui/react";

const HeadSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pt={6}    // less padding-top
      pb={10}   // padding-bottom
      px={4}    // horizontal padding
    >
      <Heading mt={-8} mb={6} size="xl">  {/* less top margin, more bottom margin */}
        Hi, I&apos;m Priyansu.
      </Heading>
      <Image
        src="https://res.cloudinary.com/dlnz6ukow/image/upload/v1761043338/WhatsApp_Image_2025-03-16_at_16.42.18_1f3454ee_vy4oqg.jpg"
        alt="Priyansu Kumar | Profile Image"
        borderRadius="full"
        boxSize={["200px", "300px"]} // responsive
        objectFit="cover"
      />
    </Box>
  );
};

export default HeadSection;
