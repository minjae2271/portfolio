import Link from "next/link";
import { Button } from "./ui/button";

export default function LoginButton() {
    return (
        <Link href='/auth'>
            <Button
            size='lg'
            variant='ghost'
            >
                Login
            </Button>
        </Link>
    )
}