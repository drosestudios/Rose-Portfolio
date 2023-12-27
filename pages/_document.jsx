import { Html, Main, Head, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        {/* Script Dark Mode */}
        <Script src="../components/useDarkMode.jsx" />

        {/* Font Family */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
              integrity="sha512-0nDFE+k43BRyQa/Y7lm9ZGGpO4SwdTz/V4n9g3y2W3b8Y/lAht/sTkj4lREd5e3ATzA6S4R1MDPeDckj44eMQg=="  
              crossOrigin="anonymous" referrerpolicy="no-referrer"
        />
        
        {/* Font Family */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />

        {/* Favicon Icon */}
        <link rel="shortcut icon" href="/ID_Favicon.png" />

        {/* Website Metadata */}
        <meta name="author" content="Ayl Rose" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Special Object */}
      <body className="dark:bg-[#111111] bg-[#f9fafb] dark:text-white duration-75">

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
