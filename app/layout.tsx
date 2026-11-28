import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/kaisei-tokumin/400.css';
import '@fontsource/kaisei-tokumin/500.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase:new URL(siteUrl),
  title:'72回生 同窓会 2027',
  description:'2027年1月2日（土）17:00〜19:30、神戸マリオットホテル ザ マーカススクエア神戸で開催。72回生と先生方の同窓会。',
  openGraph:{title:'72回生 同窓会 2027',description:'2027年1月2日（土）17:00〜19:30、神戸で開催。',url:siteUrl,type:'website',locale:'ja_JP'},
  twitter:{card:'summary_large_image',title:'72回生 同窓会 2027',description:'2027年1月2日（土）17:00〜19:30、神戸で開催。'},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
