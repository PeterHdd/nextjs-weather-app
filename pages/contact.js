import Head from "next/head";
import { Navbar } from "@component/components/Navbar";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { submitFormDocument } from "@component/lib/firebase-form";
import { ChakraProvider } from "@chakra-ui/react";

export const Contact = () => {
  const toast = useToast();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const res = validateForm();
    if (res) {
      const result = await submitFormDocument({
        username: username,
        email: email,
        message: message,
      });
      if (result === 0) {
        toastUtil({
          title: "Success",
          desc: "Form is submitted",
          status: "success",
        });
        setEmail("");
        setUserName("");
        setMessage("");
      } else {
        toastUtil({
          title: "Error",
          desc: "Failed to submit",
          status: "error",
        });
      }
    }
  };

  const validateForm = () => {
    if (username == "" || email == "" || message == "") {
      toastUtil({
        title: "Error",
        desc: "Email, Username and Message are required",
        status: "error",
      });
    } else if (/^\S+@\S+\.\S+$/.test(email)) {
      return true;
    } else {
      toastUtil({
        title: "Error",
        desc: "Email is not valid",
        status: "error",
      });
    }
  };

  const toastUtil = ({ title, desc, status }) => {
    toast({
      title: title,
      description: desc,
      status: status,
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Contact</title>
        </Head>
        <div className="bg-[#1A2238] relative h-full">
          <header>
            <Navbar />
          </header>
          <main>
            <section className="bg-[#1A2238] grid gap-4 auto-cols-max	 grid-cols-1 sm:grid-cols-2 justify-between sm:h-screen w-screen p-4">
              <div className=" text-white flex-1">
                <h1 className="text-6xl">Contact</h1>
                <p className="text-gray-500 pt-10 font-mono">
                  👋 Hey Everyone! I&apos;m Peter a mobile developer, I created
                  this website to try out Nextjs. I usually answer questions on
                  Stack Overflow or write articles but all related to mobile
                  development.
                  <br />
                  You can can find me here:
                </p>
                <div className="pt-8">
                  <a href="https://stackoverflow.com/users/7015400/peter-haddad">
                    <Image
                      src="https://stackoverflow.com/users/flair/7015400.png"
                      width="208"
                      height="58"
                      alt="profile for Peter Haddad at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                      title="profile for Peter Haddad at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                    />
                  </a>
                </div>
                <div className="flex flex-row pt-16 gap-x-8 pb-4">
                  <a href="https://github.com/peterhdd" target="_blank">
                    <AiFillGithub size={25}></AiFillGithub>
                  </a>

                  <a
                    href="https://stackoverflow.com/users/7015400/peter-haddad"
                    target="_blank"
                  >
                    <BsStackOverflow size={25}></BsStackOverflow>
                  </a>
                  <a href="https://twitter.com/peterndev" target="_blank">
                    <AiOutlineTwitter size={25}> </AiOutlineTwitter>
                  </a>
                </div>
              </div>
              <div>
                <form
                  onSubmit={submitForm}
                  className="px-10 pt-4 border border-gray-200 rounded-lg shadow-2xl bg-white lg:mr-10"
                >
                  <h1 className="text-2xl -ml-10 p-4">Get in Touch</h1>
                  <label className="block mb-6">
                    <span className="text-gray-700 text-lg">Your name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="px-2 py-1 text-md w-full border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                      required
                      maxLength={10}
                      value={username}
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </label>
                  <label className="block mb-6">
                    <span className="text-gray-700 text-lg">Email address</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="px-2 py-1 text-md border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </label>
                  <label className="block mb-6">
                    <span className="text-gray-700 text-lg">Message</span>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      name="message"
                      rows="10"
                      placeholder="Type your message here..."
                      className="px-2 py-1 text-md border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    ></textarea>
                  </label>
                  <div className="mb-8 flex items-center justify-center">
                    <button className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Contact
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
      </ChakraProvider>
    </>
  );
};

export default Contact;
