import { Box, Heading, Text, Stack } from "@chakra-ui/react";

import { sessions } from "config/sessions";

import SessionComponent from "./SessionComponent";

function SessionsPage() {
  return (
    <Box>
      <Heading size="xl" marginY={5}>
        Talks & Presentation
      </Heading>
      <Text fontSize="lg" mb={3}>
        Public speaking didn’t come naturally to me. I’ve always been more
        comfortable building things than talking about them. But over time, I’ve
        started stepping out of that comfort zone — sharing my work, explaining
        ideas, and interacting with peers through talks ,blogs and project
        showcases.
      </Text>

      <Text fontSize="lg" mb={9}>
        Here are a few sessions where I presented my work and shared learnings.
      </Text>

      <Stack spacing={10}>
        {sessions.map((item) => (
          <SessionComponent
            key={item.title}
            title={item.title}
            desc={item.desc}
            image={item.image}
            date={item.date}
            slides={item.slides}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default SessionsPage;
