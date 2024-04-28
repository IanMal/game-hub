import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { PlatForm } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  nintend: SiNintendo,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

interface Props {
  platforms: PlatForm[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.slug} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
