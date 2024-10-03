import "./globals.css";
import Head from 'next/head'; 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className='font-encode-sans'>{children}</body>
    </html>
  );
}
