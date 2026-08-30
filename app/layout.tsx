import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'72回生 同窓会 2027', description:'1月2日開催。72回生同窓会のご案内と、余興の投票・コメントページです。' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
