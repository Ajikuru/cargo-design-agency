import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      {/* <h1 className="font-lexend">Cargo Design Agency</h1> */}
    </main>
  );
}
