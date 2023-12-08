'use client'

import { useEffect } from 'react'
import { serverAction } from 'action-lib'

export const ClientComponent = () => {
    useEffect(() => {
        console.log("TRIGGERING SERVER ACTION ON CLIENT", serverAction)
        serverAction()
    }, [])
    return <></>;
}
