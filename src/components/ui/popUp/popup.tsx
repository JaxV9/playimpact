import { useContext, useEffect, useState } from "react";
import { clearInterval } from "timers";

type PopUpPropsType = {
    messageProps: string,
    isEnabledProps: boolean,
    setIsEnabledProps: (isEnabledProps: boolean) => void
}

export const Popup = ({ messageProps, isEnabledProps, setIsEnabledProps }: PopUpPropsType) => {

    const [isFadeOut, setIsFadeOut] = useState<boolean>(false)
    useEffect(() => {
        const fadeOutTimer = setInterval(() => {
            setIsFadeOut(true)
        }, 6000); // Increase the duration to 6000 milliseconds (6 seconds)
        const timer = setInterval(() => {
            setIsEnabledProps(false)
        }, 5000); // Increase the duration to 10000 milliseconds (10 seconds)

        return () => {
        };
    }, [isEnabledProps])

    return (
        <>
            {
                isEnabledProps ?
                    <div className={isFadeOut ? "popUpContainerFadeOut" : "popUpContainer"}
                    style={{backgroundColor: "#fcfbfb"}}>
                        <p style={{color: "#2F2F2F"}}>
                            {messageProps}
                        </p>
                    </div>
                    :
                    null
            }
        </>
    )
}