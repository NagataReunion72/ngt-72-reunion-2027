'use client';

import { useEffect, useState } from 'react';
import InteractionPanel from './interaction-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type Language = 'ja' | 'en';

const content = {
  ja: {
    nav: ['開催概要', '当日の流れ', '参加'], info: '開催情報', class: '72回生', reunion: '同窓会 / 2027', dateLine: '1月2日・土曜日', hero: '同窓会', heroNote: '72回生、ふたたび。', scroll: '詳細を見る',
    sections: ['開催概要', '食事・飲み物', '当日の流れ', '余興', '参加', '持ち物', '二次会'],
    headings: ['開催概要', '食事について', '当日の流れ', '余興の予定', '投票・コメント', '持ち物', '二次会'],
    facts: [['日付', '2027年1月2日', '土曜日'], ['時間', '17:00 — 19:30', '16:30 開場'], ['会場', '神戸マリオットホテル ザ マーカススクエア神戸', ''], ['参加費用', '調整中', '確定後にご案内'], ['形式', '立食ブッフェ形式', '一部着席あり'], ['参加対象', '72回生 ＋ 先生方', ''], ['服装', 'フォーマル または\nオフィスカジュアル', '※ パンツスタイル可（ジャケット推奨）']],
    mapLabel: '地図を見る', detailsNote: '参加費用は確定後、このページでお知らせします。',
    foodNote: '立食ブッフェ形式（一部着席あり）です。',
    food: [['形式', '立食ブッフェ形式（一部着席あり）'], ['料理・飲み物', '詳細は後日お知らせします。']],
    scheduleNote: '詳細な進行は調整中です。',
    schedule: [['16:30', '開場', '受付開始'], ['17:00', '開宴', '同窓会スタート'], ['19:30', '閉宴', '終了予定']],
    activities: [['あの頃クイズ', '学校の思い出をテーマにしたチーム対抗戦'], ['みんなで選ぶアワード', '事前投票と結果発表'], ['思い出スライド', '懐かしい写真とメッセージ']],
    participateNote: '投票・コメントは準備中です。',
    bring: [['会費', '金額・支払方法は後日ご案内'], ['スマートフォン', '写真共有・余興への参加に']],
    after: '時間・場所・費用・参加方法は、決まり次第このページでお知らせします。',
    afterBadge: '詳細は後日', updated: '最終更新 · 2026年11月28日', top: 'ページ先頭へ ↑',
  },
  en: {
    nav: ['DETAILS', 'PROGRAM', 'PARTICIPATE'], info: 'EVENT INFO', class: 'CLASS OF 72', reunion: 'REUNION / 2027', dateLine: 'JANUARY 02 · SATURDAY', hero: 'REUNION', heroNote: 'THE CLASS GETS TOGETHER AGAIN.', scroll: 'EXPLORE DETAILS',
    sections: ['DETAILS', 'FOOD & DRINK', 'PROGRAM', 'ACTIVITIES', 'PARTICIPATE', 'BRING', 'AFTER PARTY'],
    headings: ['THE ESSENTIALS', 'DINNER', 'THE EVENING', 'WHAT’S ON', 'VOTE & LEAVE A MESSAGE', 'WHAT TO BRING', 'ROUND TWO'],
    facts: [['DATE', 'JAN 02, 2027', 'SATURDAY'], ['TIME', '17:00 — 19:30', 'DOORS OPEN AT 16:30'], ['VENUE', 'KOBE MARRIOTT HOTEL · THE MARCUS SQUARE KOBE', ''], ['FEE', 'TO BE ANNOUNCED', 'DETAILS TO FOLLOW'], ['FORMAT', 'STANDING BUFFET', 'SOME SEATING AVAILABLE'], ['GUESTS', 'CLASS OF 72 + TEACHERS', ''], ['DRESS CODE', 'FORMAL OR OFFICE CASUAL', 'JACKET RECOMMENDED · TROUSERS WELCOME']],
    mapLabel: 'VIEW MAP', detailsNote: 'THE FEE WILL BE UPDATED HERE ONCE CONFIRMED.',
    foodNote: 'STANDING BUFFET WITH SOME SEATING AVAILABLE.',
    food: [['FORMAT', 'STANDING BUFFET · SOME SEATING AVAILABLE'], ['FOOD & DRINKS', 'DETAILS TO FOLLOW.']],
    scheduleNote: 'THE DETAILED PROGRAM IS BEING FINALIZED.',
    schedule: [['16:30', 'DOORS OPEN', 'CHECK IN'], ['17:00', 'REUNION BEGINS', 'EVENT START'], ['19:30', 'EVENT ENDS', 'SCHEDULED CLOSE']],
    activities: [['CLASS QUIZ', 'SCHOOL MEMORIES & TEAM QUESTIONS'], ['PEOPLE’S CHOICE', 'PRE-EVENT VOTING & RESULTS'], ['MEMORY SLIDES', 'PHOTOS & MESSAGES']],
    participateNote: 'VOTING AND COMMENTS WILL OPEN SOON.',
    bring: [['EVENT FEE', 'AMOUNT & PAYMENT METHOD TO FOLLOW'], ['SMARTPHONE', 'FOR PHOTOS & ACTIVITIES']],
    after: 'TIME, LOCATION, FEE AND HOW TO JOIN WILL BE ANNOUNCED HERE WHEN CONFIRMED.',
    afterBadge: 'DETAILS TO FOLLOW', updated: 'LAST UPDATED · NOV 28, 2026', top: 'BACK TO TOP ↑',
  },
} as const;

function SectionHeading({ index, label, title, note }: { index: number; label: string; title: string; note?: string }) {
  return <div className="section-heading"><span className="section-index"><span className="marker">{String(index).padStart(2, '0')} / {label}</span></span><div><h2>{title}</h2>{note && <p>{note}</p>}</div></div>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('ja');
  const t = content[language];
  const isJapanese = language === 'ja';

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return <main id="top" lang={language} className={isJapanese ? 'language-ja' : 'language-en'}>
    <header className="site-header">
      <a className="site-logo" href="#top" aria-label={isJapanese ? '同窓会ホーム' : 'REUNION 72 HOME'}>N72<span> / </span>2027</a>
      <nav aria-label={isJapanese ? 'メインメニュー' : 'MAIN NAVIGATION'}><a href="#details">{t.nav[0]}</a><a href="#program">{t.nav[1]}</a><a href="#participate">{t.nav[2]}</a></nav>
      <div className="header-actions"><div className="language-switch" role="group" aria-label={isJapanese ? '表示言語' : 'DISPLAY LANGUAGE'}><Button size="sm" variant={isJapanese ? 'secondary' : 'ghost'} aria-pressed={isJapanese} onClick={() => setLanguage('ja')}>日本語</Button><Button size="sm" variant={!isJapanese ? 'secondary' : 'ghost'} aria-pressed={!isJapanese} onClick={() => setLanguage('en')}>ENGLISH</Button></div><Button className="header-info" variant="outline" size="sm" render={<a href="#details" />}>{t.info}</Button></div>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-topline"><span>{t.class}</span><span>{t.reunion}</span></div>
      <div className="hero-main"><p className="hero-overline"><span className="marker">{t.dateLine}</span></p><h1 id="hero-title">{t.hero}<span>72</span></h1><div className="hero-bottom"><p><span className="marker">{t.heroNote}</span></p><p>2027.01.02<br/>17:00 — 19:30</p></div></div>
      <div className="hero-footer"><span>{t.info}</span><a href="#details">{t.scroll} <span aria-hidden="true">↓</span></a></div>
    </section>

    <section className="content-section details" id="details"><SectionHeading index={1} label={t.sections[0]} title={t.headings[0]} /><div className="facts-grid">{t.facts.map(([label, value, note], index) => <Card className={`fact-card ${[2, 4, 5, 6].includes(index) ? 'fact-card-long' : ''}`} key={label}><span>{label}</span><strong>{value}</strong><div className="fact-card-bottom">{note && <small>{note}</small>}{index === 2 && <a href="https://maps.app.goo.gl/1ch62dZE3XBeUPub7" target="_blank" rel="noopener noreferrer">{t.mapLabel} ↗</a>}</div></Card>)}</div><p className="details-note">{t.detailsNote}</p></section>

    <section className="content-section food" id="food"><SectionHeading index={2} label={t.sections[1]} title={t.headings[1]} note={t.foodNote} />{t.food.map(([label, value], i) => <div key={label}><div className="food-line"><span>{label}</span><p>{value}</p></div>{i < t.food.length - 1 && <Separator />}</div>)}</section>

    <section className="content-section program" id="program"><SectionHeading index={3} label={t.sections[2]} title={t.headings[2]} note={t.scheduleNote} /><div className="schedule-list">{t.schedule.map(([time, title, detail]) => <div className="schedule-row" key={time}><time>{time}</time><h3>{title}</h3><p>{detail}</p></div>)}</div></section>

    <section className="content-section activities" id="activities"><SectionHeading index={4} label={t.sections[3]} title={t.headings[3]} /><div className="activity-list">{t.activities.map(([title, detail]) => <Card className="activity-card" key={title}><h3>{title}</h3><p>{detail}</p></Card>)}</div></section>

    <section className="content-section participate" id="participate"><SectionHeading index={5} label={t.sections[4]} title={t.headings[4]} note={t.participateNote} /><InteractionPanel language={language} /></section>

    <section className="content-section final-details"><div className="final-block"><SectionHeading index={6} label={t.sections[5]} title={t.headings[5]} /><div className="plain-list">{t.bring.map(([title, detail]) => <p key={title}>{title}<span>{detail}</span></p>)}</div></div><div className="final-block"><SectionHeading index={7} label={t.sections[6]} title={t.headings[6]} /><p className="after-copy">{t.after}</p><Badge variant="outline" size="lg">{t.afterBadge}</Badge></div></section>

    <footer><a className="site-logo" href="#top">N72<span> / </span>2027</a><span>{t.updated}</span><a href="#top">{t.top}</a></footer>
  </main>;
}
