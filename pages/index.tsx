import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Blur } from "../components/Blur";
import { Navbar } from "../components/Navbar";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";

export default function Home() {
  const [activeLink, setActiveLink] = useState("#intro");
  const callbackFunction = (entry: any) => {
    console.log(entry);
    if (entry.isIntersecting) {
      setActiveLink(`#${entry.target.id}`);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => callbackFunction(entry));
    });
    const elements = document.querySelectorAll(".test");
    elements.forEach((element) => observer.observe(element));
  }, []);
  return (
    <>
      <Head>
        <title>Good bois</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={activeLink} />
      <main className="font-mono">
        <Blur />
        <section>
          <div className="w-full h-screen z-[-1] fixed overflow-hidden">
            <Image
              src={img1}
              alt="picture of a doggo"
              className="bg-fixed min-h-screen w-full object-cover z-[-10]"
              fill
            />
          </div>
          <p
            className="text-5xl w-1/2 pt-[25%] pl-8 text-white test"
            id="intro"
          >
            Good bois
          </p>
        </section>
        <div className="w-full pt-[100vh] relative">
          <section>
            <div className="w-full h-screen z-[-1] sticky top-0 overflow-hidden">
              <Image
                src={img2}
                alt="picture of a doggo"
                className="bg-fixed min-h-screen w-full object-cover z-[-10]"
                fill
              />
            </div>
            <div id="quote1" className="mb-[20%] test"></div>
            <p className="text-3xl max-w-[400px] pl-8 mb-[60%]">
              “No one appreciates the very special genius of your conversation
              as the dog does.”
              <br />
              <span className="text-xl pt-2"> - Christopher Morley</span>
            </p>
          </section>
          <section>
            <div id="quote2" className="pb-[20%] test"></div>
            <div className="flex w-full justify-end">
              <p className="text-3xl max-w-[400px] text-right pr-8">
                “All his life he tried to be a good person. Many times, however,
                he failed. For after all, he was only human. He wasn&apos;t a
                dog.”
                <br />
                <span className="text-xl pt-2"> - Charles M Schulz</span>
              </p>
            </div>
          </section>
          <section>
            <div className="w-full h-screen z-[-1] sticky top-0 bottom-0 overflow-hidden">
              <Image
                src={img4}
                alt="picture of a doggo"
                className="bg-fixed min-h-screen w-full object-cover z-[-10]"
                fill
              />
            </div>
            <p className="text-3xl text-white translate-y-[480px] lg:translate-y-[460px] max-w-[400px] px-8">
              “They [dogs] never talk about themselves but listen to you while
              you talk about yourself, and keep up an appearance of being
              interested in the conversation.”
              <br />
              <span className="text-xl pt-2"> - Jerome K. Jerome</span>
            </p>
          </section>
          <section>
            <div
              className="w-full h-screen z-[-1] sticky top-0 overflow-hidden test"
              id="quote3"
            >
              <Image
                src={img5}
                alt="picture of a doggo"
                className="bg-fixed min-h-screen w-full object-cover z-[-10]"
                fill
              />
            </div>
            <p
              className="bg-white mt-96 text-3xl pb-16 pt-4 px-4 text-center test"
              id="outro"
            >
              “A dog is the only thing on earth that loves you more than you
              love yourself.”<span className="text-xl"> - Josh Billings</span>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
