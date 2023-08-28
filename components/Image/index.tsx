import Img, { ImageProps } from "next/image";
import useNextBlurhash from "use-next-blurhash";

const Image = ({
  blurhash,
  placeholder,
  ...rest
}: ImageProps & { blurhash?: string }) => {
  const [blurDataURL] = useNextBlurhash(
    blurhash || "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
  );
  console.log("test", blurhash);
  console.log("blurDataURL", blurDataURL);
  return (
    <Img
      {...rest}
      {...(blurhash && { blurDataURL })}
      {...(placeholder && { placeholder })}
    />
  );
};

export default Image;
