'use client';

import { CurrentGame } from "@/components/currentGame/currentGame";
import { Carrousel } from "@/components/ui/carrousel/carrousel";
import { Platform } from "@/components/ui/platform/platform";
import { Title } from "@/components/ui/title/title";
import { useState } from "react";


export default function Home() {

  const [currentPlatform, setCurrentPlatform] = useState<string>("Xbox")

  const pictures: string[] = [
    "horizon.png",
    "zelda.webp",
    "clove-valorant.webp",
    "subnautica.jpg",
    "eldenring.jpg",
    "finalFantasy.jpg"
  ]

  return (
    <main>
      <div className="homeContainer">
        <Title titleProps={"Votre bibliothèque"} />
        <Carrousel picturesProps={pictures} />
        <p className="catchPhrase">Le jeu responsable commence ici</p>
        <Platform currentPlatformProps={currentPlatform} setCurrentPlatformProps={setCurrentPlatform} />
        <CurrentGame />
      </div>
    </main>
  );
}
