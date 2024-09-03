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
            <nav className="container flex max-w-3xl items-center ">
                <div>
                    <Link href='/' className="font-serif text-2xl font-bold">
                        MJ
                    </Link>
                </div>
                <ul className="flex flex-1 justify-center items-center gap-4 text-sm font-light text-muted-foreground sm:gap-10">
                    <li className="transition-colors hover:text-foreground text-center">
                        <Link href='/about'>About me</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li className="transition-colors hover:text-foreground">
                        <Link href='/posts'>Posts</Link>
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