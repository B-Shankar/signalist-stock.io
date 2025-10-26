import React from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import AuthRightSection from "@/components/AuthRightSection";

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const pathname = "/sign-in"; // You can’t use `usePathname` in server components.
    const session = await auth.api.getSession({ headers: await headers() });

    if (session?.user) redirect("/");

    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href="/" className="auth-logo">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="Signalist - Stock.IO Logo"
                        width={140}
                        height={32}
                        className="h-8 w-auto"
                    />
                </Link>
                <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>

            {/* Client-side quote logic */}
            <AuthRightSection />
        </main>
    );
};

export default Layout;