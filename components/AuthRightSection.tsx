'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const AuthRightSection = () => {
    const pathname = usePathname();

    const isSignIn = pathname === "/sign-in";

    const quote = isSignIn
        ? "Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more confident making moves in the market."
        : "Signalist gives me clarity in the chaos of the market — no more second-guessing my trades. Trading finally feels effortless.";

    const author = isSignIn ? "~ Keily Blair" : "~ Ethan Richardson";

    return (
        <section className="auth-right-section">
            <div className="z-10 relative lg:mt-4 lg:mb-16">
                <blockquote className="auth-blockquote">{quote}</blockquote>

                <div className="flex items-center justify-between">
                    <div>
                        <cite className="auth-testimonial-author">{author}</cite>
                        <p className="max-md:text-xs text-gray-500 ml-2 lg:ml-3">
                            Retail Investor
                        </p>
                    </div>
                    <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Image
                                src="/assets/icons/star.svg"
                                alt="Star"
                                key={star}
                                width={20}
                                height={20}
                                className="h-5 w-5"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 relative">
                <Image
                    src="/assets/images/dashboard.png"
                    alt="Dashboard Preview"
                    width={1440}
                    height={1150}
                    className="auth-dashboard-preview absolute top-0"
                />
            </div>
        </section>
    );
};

export default AuthRightSection;
