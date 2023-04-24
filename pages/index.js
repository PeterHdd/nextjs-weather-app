import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="fixed h-screen w-screen object-cover -z-10 bg-center bg-cover">
        <Image
          src="/background-image.avif"
          layout="fill"
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
    </>
  );
}
