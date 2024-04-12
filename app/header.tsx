'use client';

import { ModeToggle } from "@/components/mode-toggle";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function Header() {

    const session = useSession()



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