import type { Metadata } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
const previewImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase:new URL(siteUrl),
  title:'72回生 同窓会 2027',
  description:'1月2日開催。72回生同窓会のご案内と、余興の投票・コメントページです。',
  openGraph:{title:'72回生 同窓会 2027',description:'1月2日、あの頃のつづきを。',url:siteUrl,images:[{url:previewImage,width:1200,height:630,alt:'72回生 同窓会 2027'}],type:'website',locale:'ja_JP'},
  twitter:{card:'summary_large_image',title:'72回生 同窓会 2027',description:'1月2日、あの頃のつづきを。',images:[previewImage]},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
