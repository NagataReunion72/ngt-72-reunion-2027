import type { Metadata } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase:new URL(siteUrl),
  title:'REUNION 72 / 2027',
  description:'CLASS OF 72 REUNION. JANUARY 02, 2027. EVENT DETAILS, PROGRAM AND PARTICIPATION.',
  openGraph:{title:'REUNION 72 / 2027',description:'CLASS OF 72 REUNION · JANUARY 02, 2027',url:siteUrl,type:'website',locale:'en_US'},
  twitter:{card:'summary_large_image',title:'REUNION 72 / 2027',description:'CLASS OF 72 REUNION · JANUARY 02, 2027'},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
