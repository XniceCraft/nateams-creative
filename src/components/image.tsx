export function Image({
  src,
  alt,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  alt: string;
}) {
  const imgSrc = src ? `${process.env.NEXT_PUBLIC_BASE_URL}${src}` : undefined;

  return <img {...props} src={imgSrc} alt={alt} />;
}
