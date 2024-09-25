import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "chatt.in",
  description: "Intuitively chat with friends and people with same interests.",
};

export default function Home() {
  return (
    <div className="bg-[url(/bg-illustration.svg)] bg-no-repeat bg-cover min-h-screen">
      <Header />

      <main className="w-11/12 max-w-[720px] mx-auto mt-6">
        <div className="space-y-6 sm:space-y-0 sm:flex items-center justify-between gap-10">
          <div className="flex flex-col items-center gap-1 sm:gap-4">
            <h2 className="text-xl text-left font-medium sm:text-2xl">Create, share, interact</h2>

            <p className="text-center sm:text-left text-sm sm:text-base text-gray-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil nisi repellat nobis et
              sequi odit culpa repellendus quisquam, nulla at possimus cum optio laudantium neque
              ipsa praesentium dolores vitae harum?
            </p>

            <button className="py-2 px-4 rounded-md sm:text-lg flex items-center font-medium justify-center bg-teal-500 hover:bg-teal-600 transition-colors w-full">
              Get started
            </button>
          </div>

          <Image
            src="/illustration-chat.svg"
            alt="Chat illustration"
            width={320}
            height={250}
            priority
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
