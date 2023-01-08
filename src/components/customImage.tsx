import Image from "next/image";
import { FC } from "react";

// const myLoader = ({ src, width, quality }) => {
//   return `http://localhost:3000${src}?w=${width || 1000}&q=${quality || 75}`;
// };

const CustomImage: FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  return <Image src={src} alt={alt} layout="fill" />;
};

export default CustomImage;
