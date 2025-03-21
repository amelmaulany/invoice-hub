'use client'

import { ReactNode } from "react"
import {DotLottieReact} from '@lottiefiles/dotlottie-react'

export const Root = ({children}: {children: ReactNode}) => {
    return (
        <div className="flex py-32 flex-col h-[calc(100vh - 80px)] items-center justify-center gap-3">
            {children}
        </div>
    )
}

export const TextWrapper = ({children}: {children: ReactNode}) => {
    return (
        <div className="flex flex-col items-center">{children}</div>
    )
}

export const Animation = ({src, largeAnimation}: {src: string; largeAnimation?: boolean}) => {
    return (
        <DotLottieReact src={src} autoplay className={`${largeAnimation ? 'h-[300px] w-[300px]' : 'h-32 w-32'}`} />
    )
}

export const Title = ({children}: {children: string;}) => {
    return (
        <span className="text-base font-medium text-neutral-800">{children}</span>
    )
}

export const Description  = ({children}: {children: string;}) => {
    return (
        <span className="text-sm text-neutral-500">{children}</span>
    )
}