import type { Metadata } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase:new URL(siteUrl),
  title:'72回生 同窓会 2027',
  description:'2027年1月2日開催。72回生同窓会の開催概要、当日の流れ、余興、投票・コメントのご案内。',
  openGraph:{title:'72回生 同窓会 2027',description:'2027年1月2日、72回生同窓会。',url:siteUrl,type:'website',locale:'ja_JP'},
  twitter:{card:'summary_large_image',title:'72回生 同窓会 2027',description:'2027年1月2日、72回生同窓会。'},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
