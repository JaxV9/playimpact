'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {

    const [currentPage, setCurrentPage] = useState<string>('')


    useEffect(() => {
        const url = window.location.pathname;
        //setCurrentPage(url);
        console.log(url)
    }, [])

    return(
        <>
            <div className="navBarContainer">
                    <Link href="">
                        <div className="homeIcon"></div>
                    </Link>
                    <Link href="challenges">
                        <div className="challengesIcon"></div>
                    </Link>
                    <Link href="rewards">
                        <div className="rewardsIcon"></div>
                    </Link>
            </div>
        </>
    )
}