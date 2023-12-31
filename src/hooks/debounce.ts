import { useState, useEffect } from 'react'

export function useDebounce(value: string, delay = 500): string {
    const [debounced, setDebounced] = useState<string>(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(handler)
    }, [value])

    return debounced
}