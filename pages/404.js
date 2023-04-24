import Link from "next/link";
import Head from "next/head";
import { Navbar } from "@component/components/Navbar";

const Error = () => {
    return (
        <div className="bg-[#1A2238]">
            <Head>
                <title>Page not Found</title>
                <link rel="icon" href="/icons/logo_32x32.png" sizes="32x32" type="image/png"></link>
            </Head>
            <Navbar />
            <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button className="mt-5 hover:opacity-70">
                    <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            <Link href="/">Home</Link>
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Error;
