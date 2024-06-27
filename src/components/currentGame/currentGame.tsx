

export const CurrentGame = () => {

    return(
        <>
            <div className="currentGameContainer">
                <div className="currentGamePictureContainer">
                    <span>Jeu récemment joué</span>
                    <div className="currentGamePicture" style={{backgroundImage: "url(/assets/eldenring.jpg"}}>
                    </div>
                </div>
                <div className="cureentGameChallengeContainer"></div>
            </div>
        </>
    )
}