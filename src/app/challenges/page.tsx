'use client';

import { ChallengesList } from "@/components/challengesList/challengesList";
import { Title } from "@/components/ui/title/title";


const Challenges = () => {

    return(
        <>
            <div className="challengesContainer">
                <Title titleProps={"Challenges"} />
                <ChallengesList />
            </div>
        </>
    )
}

export default Challenges