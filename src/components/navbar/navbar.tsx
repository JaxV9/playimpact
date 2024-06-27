'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {

    const pathname = usePathname()

    const [currentPath, setCurrentPath] = useState<string>("")

    useEffect(() => {
        setCurrentPath(pathname)
    }, [pathname])



    return(
        <>
            <div className="navBarContainer">
                <Link href="/">
                    <div className={currentPath == "/" ? "homeIcon focusNav": "homeIcon disabledNab"}></div>
                </Link>
                <Link href="/challenges">
                    <div className={currentPath == "/challenges" ? "challengesIcon focusNav": "challengesIcon disabledNab"}></div>
                </Link>
                <Link href="/rewards">
                    <div className={currentPath == "/rewards" ? "rewardsIcon focusNav": "rewardsIcon disabledNab"}></div>
                </Link>
                <Link href="/account">
                    <div  style={{backgroundImage: "url(/assets/VALORANT.jpg"}} className={currentPath == "/account" ? "accountIcon focusAccountNav": "accountIcon disabledNab"}></div>
                </Link>
            </div>
        </>
    )
}