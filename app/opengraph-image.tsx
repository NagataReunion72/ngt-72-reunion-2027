import { ImageResponse } from 'next/og';

export const alt = 'REUNION 72 / 2027';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function Image() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#111111', color: '#f5f5f3', padding: 60, fontFamily: 'Arial, sans-serif' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, letterSpacing: 4 }}><span>CLASS OF 72</span><span>REUNION / 2027</span></div>
    <div style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontSize: 20, letterSpacing: 5, color: '#aaaaaa' }}>JANUARY 02 · SATURDAY</span><span style={{ fontSize: 154, fontWeight: 700, letterSpacing: -12 }}>REUNION<span style={{ color: '#777777' }}>72</span></span></div>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #777777', paddingTop: 22, fontSize: 22 }}><span>THE CLASS GETS TOGETHER AGAIN.</span><span>2027.01.02 / 18:00</span></div>
  </div>, size);
}
