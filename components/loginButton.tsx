import Link from "next/link";
import { Button } from "./ui/button";

export default function LoginButton() {
    return (
        <Link href='/auth'>
            <Button
            size='sm'
            variant='ghost'
            >
                Login
            </Button>
        </Link>
    )
}