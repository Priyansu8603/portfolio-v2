import { Heading, Text, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const screenshots = Array.from({ length: 25 }, (_, index) => {
  const num = index + 1;
  const pngPath = `/photos/photo${num}.png`;
  const jpegPath = `/photos/photo${num}.jpeg`;
  const primary = num > 20 ? pngPath : jpegPath;
  const fallback = num > 20 ? jpegPath : pngPath;

  return {
    primary,
    fallback,
    title: `App screenshot ${num}`,
    caption: `Screenshot ${num}`,
  };
});

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  align-items: start;
  margin-top: 24px;
`;

const ScreenshotCard = styled.figure`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transform: translateY(0);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:nth-of-type(odd) {
    margin-top: 24px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(17, 12, 46, 0.25) 0px 60px 120px 0px;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 420px;
    object-fit: contain;
    display: block;
  }
`;

const Showcase: React.FC = () => {
  return (
    <Box>
      <Heading size="xl" marginY={5}>
        App UI Showcase
      </Heading>
      <Text fontSize="lg" mb={3}>
        Explore a curated gallery of screenshots from apps I have designed and
        developed. Each image highlights unique features, user interfaces, and
        the creative solutions implemented in my projects. Dive in to see the
        visual journey of my app development experience.
      </Text>

      <GalleryGrid>
        {screenshots.map((shot) => (
          <ScreenshotCard key={shot.primary}>
            <img
              src={shot.primary}
              alt={shot.title}
              onError={(event) => {
                const target = event.currentTarget;
                if (target.src === shot.primary) {
                  target.onerror = null;
                  target.src = shot.fallback;
                }
              }}
            />
          </ScreenshotCard>
        ))}
      </GalleryGrid>
    </Box>
  );
};

export default Showcase;
