'use client';

import { CurrentGame } from "@/components/currentGame/currentGame";
import { EcoImpact } from "@/components/ecoImpact/ecoImpact";
import { Carrousel } from "@/components/ui/carrousel/carrousel";
import { Platform } from "@/components/ui/platform/platform";
import { Title } from "@/components/ui/title/title";
import { useEffect, useState } from "react";


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
      {/* <p className="catchPhrase">Le jeu responsable commence ici</p> */}
        <Title titleProps="Votre bibliothèque" />
        <Carrousel picturesProps={pictures} />
        <Platform currentPlatformProps={currentPlatform} setCurrentPlatformProps={setCurrentPlatform} />
        <CurrentGame />
        <Title titleProps="Impact environnemental" />
        <EcoImpact currentPlatformProps={currentPlatform}/>
      </div>
    </main>
  );
}
