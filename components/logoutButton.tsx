import { Button } from "./ui/button";
import { createClient } from "@/lib/client/supabase";
import { useUser } from "@/lib/store/user";

export default function LogoutButton() {
    const user = useUser((state) => state.user)
    const setUser = useUser((state) => state.setUser)
    const supabase = createClient()

    const onClickLogout = async () => {
        await supabase.auth.signOut()
        setUser(undefined)
    }


    return (
            <Button
            size='sm'
            variant='ghost'
            onClick={onClickLogout}
            >
                Log out
            </Button>
    )
}