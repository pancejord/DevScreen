import NextAuth from "next-auth/next";
import {authConfig} from "@/lib/auth";

const handler = NextAuth(authConfig);

export const GET = (req: Request, res: Response) => {
    return handler(req, res);
};

export const POST = (req: Request, res: Response) => {
    return handler(req, res);
};
