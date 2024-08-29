import { useEffect, useState } from "react"

export default function useHydrate() {
    const [isMount, setIseMount] = useState(false);
    useEffect(() => {
        setIseMount(true);
    }, [])

    return isMount
}