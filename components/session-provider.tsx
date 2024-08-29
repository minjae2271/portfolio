'use client'

import { createClient } from "@/lib/client/supabase"
import { useUser } from "@/lib/store/user"
import { useEffect } from "react"

export default function SessionProvider() {
    const setUser = useUser((state) => state.setUser)
    const supabase = createClient()
    
    const readUserSession = async () => {
        const { data } =  await supabase.auth.getSession()
        setUser(data.session?.user)
    }

    useEffect(() => {
        readUserSession()
    }, [])

    return (
        <></>
    )
}