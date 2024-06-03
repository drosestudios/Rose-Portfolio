import "/styles/globals.css";

import Footer from "./Footer";
import Header from "./Header";
import Script from "next/script";

import { SkeletonTheme } from "react-loading-skeleton";

function MyApp({ Component, pageProps }) {
    return (
        <main className="">

                <Header/>
                    {/* Content Display Loader */}
                    <main className="pt-20 px-[15px] xs:px-[25px] mx-auto max-w-4xl">
                            {/* Loading Content Bar */}
                                <>
                                    <SkeletonTheme baseColor="#232329" highlightColor="#2a2a32">
                                        <Script src="https://araxyso.xyz/theme.js" strategy="beforeInteractive" />
                                        <Component {...pageProps} />
                                    </SkeletonTheme>
                                </>
                         <Footer/>
                    </main> 
        </main>
    );
}
export default MyApp;
