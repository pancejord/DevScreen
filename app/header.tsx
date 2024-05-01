'use client';

import { ModeToggle } from "@/components/mode-toggle";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { LiaSignOutAltSolid } from "react-icons/lia";


export function Header() {

    const session = useSession()

    const isLoggedIn = !!session.data

    const UserDropDown = () => {
        return (
         <DropdownMenu>
         <DropdownMenuTrigger asChild><Button>{session.data?.user.name}</Button></DropdownMenuTrigger>
         <DropdownMenuContent>
         <DropdownMenuItem>
            {isLoggedIn ? ( <Button onClick={() => signOut()}>Sign Out <LiaSignOutAltSolid className="ml-1"/> </Button> ): (<Button onClick={() => signIn('google')}>Sign In </Button>)}
         </DropdownMenuItem>
         </DropdownMenuContent>
         </DropdownMenu>
        )
    }



    return (
        <header className=" dark:bg-gray-900 bg-gray-100 py-4 container mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    LOGO
                </div>
                <div>
                <ModeToggle/>
                <UserDropDown/>
                </div>
            </div>
        </header>
    )
}