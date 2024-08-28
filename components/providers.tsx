'use client'

import { ThemeProvider, useTheme } from 'next-themes'

type Props = {
    children: React.ReactNode
}

export default function Providers({ children}: Props) {
    return (
    <ThemeProvider enableSystem attribute='class' defaultTheme='system' disableTransitionOnChange>
        {children}
    </ThemeProvider>
    )
}