type PSOgImageOptions = Partial<{
  theme: string;
  fontSize: string;
  images: string;
}>;

export const PSOgImage = (text: string, options?: PSOgImageOptions) => {
  const defaultOptions: PSOgImageOptions = {
    theme: "dark",
    fontSize: "100px",
  };

  const finalOptions: PSOgImageOptions = {
    ...defaultOptions,
    ...options,
  };

  // TODO: Set up your own OG image service and replace this URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return `${baseUrl}/api/og?text=${encodeURIComponent(text)}&theme=${
    finalOptions.theme
  }&fontSize=${encodeURIComponent(
    finalOptions.fontSize ?? ""
  )}&images=${encodeURIComponent(finalOptions.images ?? "")}`;
};
