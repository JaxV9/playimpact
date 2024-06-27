'use client';

import { ReactNode, useEffect, useState } from "react";

type LayoutChildrenPropsType = {
    children: ReactNode
}


export const LayoutChildren = ({children}: LayoutChildrenPropsType) => {


    return(
        <>
            {children}
        </>
    )
}