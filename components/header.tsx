'use client'

import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import LoginButton from "./loginButton"
import LogoutButton from "./logoutButton"
import { useUser } from "@/lib/store/user"

export default function Header() {
    const user = useUser((state) => state.user)
    console.log(user)

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
            <nav className="container flex max-w-3xl items-center justify-around">
                <div>
                    <Link href='/' className="font-serif text-2xl font-bold">
                        MJ
                    </Link>
                </div>
                <ul className="flex items-center gap-4 text-sm font-light text-muted-foreground sm:gap-10">
                    <li className="transition-colors hover:text-foreground">
                        <Link href='/posts'>Posts</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href='/clone'>Clone</Link>
                    </li>
                </ul>
                <div className="flex gap-x-1 items-center">
                    {user ? <LogoutButton /> : <LoginButton />}
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}