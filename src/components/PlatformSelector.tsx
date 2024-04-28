import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms from "../hooks/usePlatForms";
import { PlatForm } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (p: PlatForm) => void;
  activePlatform: PlatForm | null;
}
const PlatformSelector = ({ onSelectPlatform, activePlatform }: Props) => {
  const [data, error] = usePlatForms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {activePlatform ? activePlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((p, index) => (
          <MenuItem key={index} onClick={() => onSelectPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
