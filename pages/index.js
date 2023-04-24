import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home(props) {
  return (
    <ChakraProvider>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="fixed h-screen w-screen object-cover -z-10 bg-center bg-cover">
        <Image
          src="/background-image.jpg"
          sizes="100vw"
          fill
          alt="backgroundImage"
        ></Image>
      </div>
      <header>
        <Navbar />
      </header>
      <main className="h-[80vh]">
        <Input />
      </main>
      <footer></footer>
    </ChakraProvider>
  );
}
