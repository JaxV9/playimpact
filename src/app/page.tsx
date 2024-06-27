'use client';

import { Carrousel } from "@/components/ui/carrousel/carrousel";
import { Separator } from "@/components/ui/separator/separator";
import { Title } from "@/components/ui/title/title";


export default function Home() {

  const pictures: string[] = [
    "eldenring.jpg",
    "finalFantasy.jpg",
    "eldenring.jpg",
    "finalFantasy.jpg"
  ]

  return (
    <main>
      <div className="homeContainer">
        <Title titleProps={"Votre bibliothèque"} />
        <Carrousel picturesProps={pictures} />
        <p className="catchPhrase">Le jeu responsable commence ici</p>
        <Separator />
      </div>
    </main>
  );
}
