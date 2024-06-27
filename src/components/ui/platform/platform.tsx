import { useState } from "react"

type PlatformPropsType = {
    currentPlatformProps: string,
    setCurrentPlatformProps: (currentPlatformProps: string) => void
}

export const Platform = ({currentPlatformProps, setCurrentPlatformProps}: PlatformPropsType) => {


    const changePlatform = (platform: string) => {
        setCurrentPlatformProps(platform)
    }

    return(
        <>
            <div className="navPlateformContainer">
                <div onClick={() => changePlatform("Playstation")} className={currentPlatformProps == "Playstation" ? "navPlatform navPlatformFocus" : "navPlatform"}>
                    Playstation
                </div>
                <div onClick={() => changePlatform("Xbox")} className={currentPlatformProps == "Xbox" ? "navPlatform navPlatformFocus" : "navPlatform"}>
                    Xbox
                </div>
                <div onClick={() => changePlatform("PC")} className={currentPlatformProps == "PC" ? "navPlatform navPlatformFocus" : "navPlatform"}>
                    PC
                </div>
            </div>
        </>
    )
}