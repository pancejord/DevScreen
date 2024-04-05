import { ModeToggle } from "@/components/mode-toggle";
import { useSession, signIn, signOut } from "next-auth/react";
import { db } from "./db";
import { Button } from "@/components/ui/button";

export async function Header() {

    const session = await useSession()



    return (
        <header>
            <div>
                {session.data ? (
                    <Button onClick={() => signOut()}>Sign Out</Button> ) : (
                    <Button onClick={() => signIn()}>Sign In</Button>
                )}
                <ModeToggle/>
            </div>
        </header>
    )
}