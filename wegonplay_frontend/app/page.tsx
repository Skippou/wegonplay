// pages/index.js

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wegonplay Discord Server",
  description: "Join the Wegonplay Discord community!",
};

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between bg-gray-100 dark:bg-[#000c0a] text-gray-700 dark:text-gray-200">
        <header className="w-full max-w-5xl mx-auto mt-12 px-6">
          <h1 className="text-4xl font-bold text-center">Wegonplay Discord</h1>
        </header>

        <section className="my-10">
          <div className="flex flex-col w-full max-w-4xl text-center justify-center">
            <Image
              src="/wegonplay/wegonplay-logo.webp"
              alt="Wegonplay Logo"
              width={300}
              height={300}
              className="mx-auto"
              priority
            />
            <p className="mt-4">
              Geluk, jy is bevoorreg om gemeenskap te maak met die Wegonplay Discord.
            </p>
            <a
              href="https://discord.gg/KZts3UJdrN"
              className="mt-6 inline-block bg-gray-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mx-auto"
            >
              Kliek hier as jy bereid is om Factorio en Minecraft te speel*
            </a>
          </div>
        </section>

        <footer className="w-full max-w-5xl mx-auto px-6 py-4 border-t">
          <div className="flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} wegonplay.co.za All rights reserved.</p>
           
          </div>
        </footer>
      </main>
    </>
  );
}
