import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getSession } from "next-auth/react";
import Login from "../components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Connectify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />
        {/* Feed (Create posts) */}
        {/* Right Sidebar */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
