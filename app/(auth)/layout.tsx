'use client';

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

const Layout = ({ children } : { children : React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href='/' className="auth-logo">
                    <Image src="/assets/icons/logo.svg" alt="Signalist - Stock.IO Logo" width={140} height={32} className="h-8 w-auto" />
                </Link>
                <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>

            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-4 lg:mb-16">
                    {pathname == '/sign-in' ?
                        <>
                            <blockquote className="auth-blockquote">
                                Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more
                                confident making moves in the market
                            </blockquote>
                            <div className="flex items-center justify-between">
                                <div>
                                    <cite className="auth-testimonial-author">~ Keily Blair</cite>
                                    <p className="max-md:text-xs text-gray-500 ml-2 lg:ml-3">Retail Investor</p>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Image src="/assets/icons/star.svg" alt="Star" key={star} width={20} height={20}
                                               className="h-5 w-5"/>
                                    ))}
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <blockquote className="auth-blockquote">
                                Signalist gives me clarity in the chaos of the market — no more second-guessing my trades. Trading finally feels effortless.
                            </blockquote>
                            <div className="flex items-center justify-between">
                                <div>
                                    <cite className="auth-testimonial-author">~ Ethan Richardson</cite>
                                    <p className="max-md:text-xs text-gray-500 ml-2 lg:ml-3">Retail Investor</p>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Image src="/assets/icons/star.svg" alt="Star" key={star} width={20} height={20}
                                                                                                 className="h-5 w-5"/>
                                    ) )}
                                </div>
                            </div>
                        </>}
                </div>

                <div className="flex-1 relative">
                    <Image src="/assets/images/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0" />
                </div>
            </section>
        </main>
    )
}
export default Layout
