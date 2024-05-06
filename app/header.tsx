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
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";



export function Header() {

    const session = useSession()

    const isLoggedIn = !!session.data

    const UserDropDown = () => {
        return (
         <DropdownMenu>
         <DropdownMenuTrigger asChild><Button variant={'outline'}>
            {session.data?.user.name}</Button></DropdownMenuTrigger>
         <DropdownMenuContent>
         <DropdownMenuItem>
            {isLoggedIn ? ( <Button onClick={() => signOut()}>Sign Out <LiaSignOutAltSolid className="ml-1"/> </Button> ): (<Button onClick={() => signIn('google')}>Sign In </Button>)}
         </DropdownMenuItem>
         </DropdownMenuContent>
         </DropdownMenu>
        )
    }



    return (
        <header className=" dark:bg-gray-800 bg-gray-100 py-4 container mx-auto rounded-full">
            <div className="flex justify-between items-center">
                    <Link className="flex items-center gap-2 hover:opacity-80 hover:scale-105 text-xl font-bold" href={"/"}>
                    <Image
                    alt="logo"
                    src="/icon.png"
                    height="50"
                    width="50"
                     />
                     CodeScreener
                     </Link>
                <div className="flex item-center gap-3">
                    <div className="hover:scale-110">
                <UserDropDown/>
                </div>
                <div className="hover:scale-110">
                <ModeToggle/>
                </div>
                </div>
            </div>
        </header>
    )
}