import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";

export const Input = () => {
  const [city, setCity] = useState("");
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    setCity("");
  }, []);

  const handleEnterKey = (event) => {
    if (event.key === "Enter" || event.type == "click") {
      if (!city) {
        toast({
          title: "Error",
          description: "Please insert City name",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      const countryName = city.charAt(0).toUpperCase() + city.slice(1);
      router.push({
        pathname: countryName,
      });
    }
  };

  return (
    <>
      <div className="flex justify-between m-auto top-1/2 rounded-xl relative focus:bg-white w-72 md:w-96 lg:w-1/2 focus:border-gray-100 bg-gray-200 border-gray-200">
        <input
          className="bg-gray-200 appearance-none rounded-xl flex justify-center items-center py-2 px-4 text-gray-900 placeholder-gray-500 text-sm grow leading-tight focus:outline-none"
          id="inline-full-name"
          type="text"
          placeholder="Search by city, e.g. London"
          onKeyDown={handleEnterKey}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <AiOutlineSearch
          size={30}
          className="text-gray-500 m-auto"
          onClick={handleEnterKey}
        ></AiOutlineSearch>
      </div>
    </>
  );
};
