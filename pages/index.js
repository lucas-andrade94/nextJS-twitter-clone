import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black">
        <section className="min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
        </section>
      </main>
    </div>
  );
}
