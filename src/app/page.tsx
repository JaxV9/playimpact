'use client';

import { Carrousel } from "@/components/ui/carrousel/carrousel";
import { Separator } from "@/components/ui/separator/separator";


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
        <h1>Tableau de bord</h1>
        <Carrousel picturesProps={pictures} />
        <p className="catchPhrase">Le jeu responsable commence ici</p>
        <Separator />
      </div>
    </main>
  );
}
