import Head from "next/head";

export const NextHead = () => {
    return (
        <Head>
            <title>Omar's Portfolio | Resume</title>

            {/* Google Font CDN */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
                rel="stylesheet"
            />

            {/* UniIcons CDN */}
            <link
                rel="stylesheet"
                href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
            />
        </Head>
    );
};