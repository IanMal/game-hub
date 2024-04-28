import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";
import { BsSearch, BsFillXCircleFill } from "react-icons/bs";

interface Props {
  onSearch: (text: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const hadSubmitRef = useRef(false);
  const [showClear, setShowClear] = useState(false);

  const hadleSearch = (text: string) => {
    onSearch(text);
    setShowClear(text ? true : false);
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      hadleSearch(ref.current.value);
      hadSubmitRef.current = true;
    }
  };
  const handleClear = () => {
    if (ref.current) ref.current.value = "";
    if (hadSubmitRef.current) hadleSearch("");
    setShowClear(false);
  };
  const onChange = () => setShowClear(ref.current?.value ? true : false);

  return (
    <form onSubmit={onSubmit} onChange={onChange}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />;
        {showClear ? (
          <InputRightElement onClick={handleClear}>
            <BsFillXCircleFill />
          </InputRightElement>
        ) : null}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
