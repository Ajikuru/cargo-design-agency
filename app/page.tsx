import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardList from "./components/CardList";


export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <CardList/>
      {/* <h1 className="font-lexend">Cargo Design Agency</h1> */}
    </main>
  );
}
