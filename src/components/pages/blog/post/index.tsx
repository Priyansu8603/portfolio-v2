import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { renderers } from "components/blog/renderers";

import styles from "./BlogPost.module.scss";
import BlogPostHead from "./Head";
import type { BlogPostProps } from "./types";

const BlogPost = ({ postData }: BlogPostProps) => {
  return (
    <Box as="article">
      <BlogPostHead postData={postData} />

      <ReactMarkdown
        className={styles.content}
        rehypePlugins={[rehypeRaw]}
        components={renderers}
      >
        {postData.rawContent}
      </ReactMarkdown>
    </Box>
  );
};

export type { BlogPostProps } from "./types";

export default BlogPost;
