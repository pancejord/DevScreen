import NextAuth from "next-auth/next";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/app/db";
import type { Adapter } from "next-auth/adapters";

const handler = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ]
});

export const GET = (req: Request, res: Response) => {
    return handler(req, res);
};

export const POST = (req: Request, res: Response) => {
    return handler(req, res);
};
