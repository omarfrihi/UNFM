import Img, { ImageProps } from "next/image";
import useNextBlurhash from "use-next-blurhash";
import { Media } from "../../strapi/types";
import { urlBuilder } from "../../strapi/utils";

const Image = ({
  src: image,
  placeholder,
  ...rest
}: Omit<Omit<ImageProps, "src">, "alt"> & { src: Media }) => {
  const builtImage = urlBuilder(image);

  const { blurhash, ...imageProps } = builtImage;

  const [blurDataURL] = useNextBlurhash(
    blurhash || "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
  );

  return (
    <Img
      {...imageProps}
      {...rest}
      {...(blurhash && { blurDataURL })}
      {...(placeholder && { placeholder })}
    />
  );
};

export default Image;
