import { useContext, useState } from "react"
import { Popup } from "../ui/popUp/popup"
import WalletContext from "@/contexts/walletContext";


export const ChallengesList = () => {

    const { walletValue, setWalletValue } = useContext(WalletContext)!;

    const [isPopUp, setIsPopUp] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("Félicitation ! Vous avez gagné 200 points !")


    const handleClaimReward = (points: number) => {
        let total = points + walletValue
        setIsPopUp(!isPopUp)
        setWalletValue(total)
        localStorage.setItem("walletValue", total.toString())
    }

    return (
        <>
            {
                isPopUp ?
                    <Popup messageProps={message} isEnabledProps={isPopUp} setIsEnabledProps={setIsPopUp} />
                    : null
            }
            <div className="challengesListContainer">
                <div className="challengeContainer">
                    <div className="challengeContentContainer">
                        <div className="challenge">
                            <div className="challengePictureContainer">
                                <div className="challengePicture" style={{ backgroundImage: "url(/assets/reconditionne.png" }}>
                                </div>
                                <div className="tagDifficulty">2de life</div>
                            </div>
                            <div className="thisChallengeContainer">
                                <span className="descrChallenge">Achetez un appareil électronique reconditionné - <strong>200 points</strong></span>
                                <span className="labelProgressBar">0%</span>
                                <div className="progressBarContainerChallenge">
                                    <div className="progressBarChallenge" style={{ width: "0%" }}></div>
                                </div>
                            </div>
                        </div>
                        <span className="challengeLabel">Soumettez une photo de l&apos;appareil avec le reçu ou la confirmation d&apos;achat de la plateforme de reconditionnement.
                        </span>
                        <button onClick={() => handleClaimReward(200)} className="getRewardChallenge">Réclamer récompense</button>
                    </div>
                </div>
                <div className="challengeContainer">
                    <div className="challengeContentContainer">
                        <div className="challenge">
                            <div className="challengePictureContainer">
                                <div className="challengePicture" style={{ backgroundImage: "url(/assets/video-games.png" }}>
                                </div>
                                <div className="tagDifficulty">2de life</div>
                            </div>
                            <div className="thisChallengeContainer">
                                <span className="descrChallenge">Revendez trois jeux vidéo - <strong>300 points</strong></span>
                                <span className="labelProgressBar">66%</span>
                                <div className="progressBarContainerChallenge">
                                    <div className="progressBarChallenge" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </div>
                        <span className="challengeLabel">
                            Soumettez une photo des articles déposés au centre de recyclage avec une attestation ou un reçu du centre.
                        </span>
                        <button onClick={() => handleClaimReward(300)} className="getRewardChallenge">Réclamer récompense</button>
                    </div>
                </div>
                <div className="challengeContainer">
                    <div className="challengeContentContainer">
                        <div className="challenge">
                            <div className="challengePictureContainer">
                                <div className="challengePicture" style={{ backgroundImage: "url(/assets/antibacterien.png" }}>
                                </div>
                                <div className="tagDifficulty">2de life</div>
                            </div>
                            <div className="thisChallengeContainer">
                                <span className="descrChallenge">Effectuez un nettoyage complet et un entretien de votre matériel de jeu (console, PC, manette, etc.) pour prolonger sa durée de vie et améliorer son efficacité. -<strong>200 points</strong></span>
                                <span className="labelProgressBar">100%</span>
                                <div className="progressBarContainerChallenge">
                                    <div className="progressBarChallenge" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                        </div>
                        <span className="challengeLabel">
                            Soumettez des photos avant et après du matériel nettoyé et entretenu, accompagnées d&apos;une courte description de ce qui a été fait sur Instagram.
                        </span>
                        <button onClick={() => handleClaimReward(200)} className="getRewardChallengeDisabled">Récompense récupérée</button>
                    </div>
                </div>
                <div className="challengeContainer">
                    <div className="challengeContentContainer">
                        <div className="challenge">
                            <div className="challengePictureContainer">
                                <div className="challengePicture" style={{ backgroundImage: "url(/assets/plage.png" }}>
                                </div>
                                <div className="tagDifficulty">Asso</div>
                            </div>
                            <div className="thisChallengeContainer">
                                <span className="descrChallenge">Nettoyez une plage avec l&apos;association INITIATIVES OCÉANES. - <strong>500 points</strong></span>
                                <span className="labelProgressBar">0%</span>
                                <div className="progressBarContainerChallenge">
                                    <div className="progressBarChallenge" style={{ width: "0%" }}></div>
                                </div>
                            </div>
                        </div>
                        <span className="challengeLabel">
                            Scannez le QR code auprès des bénévoles de l&apos;association pour confirmer votre action.
                        </span>
                        <button onClick={() => handleClaimReward(500)} className="getRewardChallenge">Réclamer récompense</button>
                    </div>
                </div>
                <div className="challengeContainer">
                    <div className="challengeContentContainer">
                        <div className="challenge">
                            <div className="challengePictureContainer">
                                <div className="challengePicture" style={{ backgroundImage: "url(/assets/aide.png" }}>
                                </div>
                                <div className="tagDifficulty">Asso</div>
                            </div>
                            <div className="thisChallengeContainer">
                                <span className="descrChallenge">Faire du bénévolat auprès de la Croix Rouge / les Restos du Coeur. - <strong>500 points</strong></span>
                                <span className="labelProgressBar">0%</span>
                                <div className="progressBarContainerChallenge">
                                    <div className="progressBarChallenge" style={{ width: "0%" }}></div>
                                </div>
                            </div>
                        </div>
                        <span className="challengeLabel">
                            Scannez le QR code auprès des bénévoles de l&apos;association pour confirmer votre action.
                        </span>
                        <button onClick={() => handleClaimReward(500)} className="getRewardChallenge">Réclamer récompense</button>
                    </div>
                </div>
                <div className="challengeContainer">
                    <div className="challengeContentContainer">
                        <div className="challenge">
                            <div className="challengePictureContainer">
                                <div className="challengePicture" style={{ backgroundImage: "url(/assets/instagram.png" }}>
                                </div>
                                <div className="tagDifficulty">Promo</div>
                            </div>
                            <div className="thisChallengeContainer">
                                <span className="descrChallenge">Promouvoir 3 de vos actions sur Instagram. - <strong>200 points</strong></span>
                                <span className="labelProgressBar">33%</span>
                                <div className="progressBarContainerChallenge">
                                    <div className="progressBarChallenge" style={{ width: "33%" }}></div>
                                </div>
                            </div>
                        </div>
                        <span className="challengeLabel">
                            Ajoutez le hashtag #playimpact à vos stories.
                        </span>
                        <button onClick={() => handleClaimReward(200)} className="getRewardChallenge">Réclamer récompense</button>
                    </div>
                </div>
            </div>
        </>
    )
}