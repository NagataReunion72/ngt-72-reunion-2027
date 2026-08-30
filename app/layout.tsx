import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase:new URL('https://ngt-72-reunion-2027.matilda-sukeshun.chatgpt.site'),
  title:'72回生 同窓会 2027',
  description:'1月2日開催。72回生同窓会のご案内と、余興の投票・コメントページです。',
  openGraph:{title:'72回生 同窓会 2027',description:'1月2日、あの頃のつづきを。',images:[{url:'/og.png',width:1200,height:630,alt:'72回生 同窓会 2027'}],type:'website',locale:'ja_JP'},
  twitter:{card:'summary_large_image',title:'72回生 同窓会 2027',description:'1月2日、あの頃のつづきを。',images:['/og.png']},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
