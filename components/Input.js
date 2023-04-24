import { useRouter } from "next/router";

export const Input = () => {
  const router = useRouter();

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      const res = event.target.value;
      const countryName = res.charAt(0).toUpperCase() + res.slice(1);
      router.push({
        pathname: countryName,
      });
    }
  };

  return (
    <div className="flex justify-center top-2/4 relative">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-xl w-72 md:w-96 lg:w-1/2 flex justify-center items-center py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-100 relative"
        id="inline-full-name"
        type="text"
        placeholder="Search by city, e.g. London"
        onKeyDown={handleEnterKey}
      />
    </div>
  );
};
