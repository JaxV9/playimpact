

export const CurrentGame = () => {

    return(
        <>
            <div className="currentGameContainer">
                <div className="currentGamePictureContainer">
                    <span className="currentGameLabel">Jeu récemment joué</span>
                    <div className="currentGamePicture" style={{backgroundImage: "url(/assets/eldenring.jpg"}}>
                    </div>
                </div>
                <div className="currentGameChallengeContainer">
                    <span className="currentGameLabel">Défi en cours</span>
                    <img src="/assets/trophy.png" />
                    <div className="currentGameChallenge">Jouez 4h au maximum aujourd'hui</div>
                </div>
            </div>
        </>
    )
}