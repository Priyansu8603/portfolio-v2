import { memo } from "react";
import twemoji from "twemoji";

type TwemojiProps = {
  emoji: string;
};

const Twemoji = ({ emoji }: TwemojiProps) => {
  const html = twemoji.parse(emoji, {
    folder: "svg",
    ext: ".svg",
  }) as unknown as string;

  return (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default memo(Twemoji);
