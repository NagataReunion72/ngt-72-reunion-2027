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
    facts: [['日付', '2027年1月2日', '土曜日'], ['時間', '18:00 — 21:00', '受付開始 17:30'], ['会場', '調整中', '決まり次第お知らせします'], ['会費', '調整中', '飲食代込み']],
    detailsNote: '会場と会費は確定後、このページでお知らせします。',
    foodNote: 'ビュッフェと飲み物を予定しています。内容は変更になる場合があります。',
    food: [['料理', '前菜・メイン・パスタ・デザート'], ['飲み物', 'ビール・ワイン・ソフトドリンク'], ['食事制限', 'アレルギーなどは事前に幹事へご連絡ください。']],
    scheduleNote: '時刻は目安です。',
    schedule: [['17:30', '受付開始', '受付・名札のお渡し'], ['18:00', '開宴・乾杯', '集合写真'], ['18:30', '食事・歓談', 'ビュッフェ'], ['19:20', '余興', 'クイズ・アワード'], ['20:20', '思い出スライド', '写真・メッセージ'], ['20:45', '締めの挨拶', '二次会のご案内']],
    activities: [['あの頃クイズ', '学校の思い出をテーマにしたチーム対抗戦'], ['みんなで選ぶアワード', '事前投票と結果発表'], ['思い出スライド', '懐かしい写真とメッセージ']],
    participateNote: '投票・コメントは準備中です。',
    bring: [['会費', '金額・支払方法は後日ご案内'], ['スマートフォン', '写真共有・余興への参加に']],
    after: '21:30頃から、一次会の会場近くで予定しています。場所・費用・参加方法は後日、このページでお知らせします。',
    afterBadge: '詳細は後日', updated: '最終更新 · 2026年11月27日', top: 'ページ先頭へ ↑',
  },
  en: {
    nav: ['DETAILS', 'PROGRAM', 'PARTICIPATE'], info: 'EVENT INFO', class: 'CLASS OF 72', reunion: 'REUNION / 2027', dateLine: 'JANUARY 02 · SATURDAY', hero: 'REUNION', heroNote: 'THE CLASS GETS TOGETHER AGAIN.', scroll: 'EXPLORE DETAILS',
    sections: ['DETAILS', 'FOOD & DRINK', 'PROGRAM', 'ACTIVITIES', 'PARTICIPATE', 'BRING', 'AFTER PARTY'],
    headings: ['THE ESSENTIALS', 'DINNER', 'THE EVENING', 'WHAT’S ON', 'VOTE & LEAVE A MESSAGE', 'WHAT TO BRING', 'ROUND TWO'],
    facts: [['DATE', 'JAN 02, 2027', 'SATURDAY'], ['TIME', '18:00 — 21:00', 'DOORS OPEN AT 17:30'], ['VENUE', 'TO BE ANNOUNCED', 'LOCATION DETAILS TO FOLLOW'], ['FEE', 'TO BE ANNOUNCED', 'FOOD & DRINK INCLUDED']],
    detailsNote: 'VENUE AND FEE WILL BE UPDATED HERE ONCE CONFIRMED.',
    foodNote: 'BUFFET AND DRINKS PLANNED. DETAILS MAY CHANGE.',
    food: [['FOOD', 'APPETIZERS · MAIN DISHES · PASTA · DESSERT'], ['DRINKS', 'BEER · WINE · SOFT DRINKS'], ['DIETARY NEEDS', 'PLEASE CONTACT THE ORGANIZERS IN ADVANCE.']],
    scheduleNote: 'TIMES ARE APPROXIMATE.',
    schedule: [['17:30', 'DOORS OPEN', 'CHECK IN'], ['18:00', 'OPENING & TOAST', 'GROUP PHOTO'], ['18:30', 'DINNER', 'BUFFET & CONVERSATION'], ['19:20', 'GROUP ACTIVITIES', 'QUIZ & AWARDS'], ['20:20', 'MEMORY SLIDES', 'PHOTOS & MESSAGES'], ['20:45', 'CLOSING', 'AFTER PARTY GUIDANCE']],
    activities: [['CLASS QUIZ', 'SCHOOL MEMORIES & TEAM QUESTIONS'], ['PEOPLE’S CHOICE', 'PRE-EVENT VOTING & RESULTS'], ['MEMORY SLIDES', 'PHOTOS & MESSAGES']],
    participateNote: 'VOTING AND COMMENTS WILL OPEN SOON.',
    bring: [['EVENT FEE', 'AMOUNT & PAYMENT METHOD TO FOLLOW'], ['SMARTPHONE', 'FOR PHOTOS & ACTIVITIES']],
    after: 'PLANNED FOR AROUND 21:30 NEAR THE MAIN VENUE. LOCATION, FEE AND HOW TO JOIN WILL BE ANNOUNCED HERE.',
    afterBadge: 'DETAILS TO FOLLOW', updated: 'LAST UPDATED · NOV 27, 2026', top: 'BACK TO TOP ↑',
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
      <div className="hero-main"><p className="hero-overline"><span className="marker">{t.dateLine}</span></p><h1 id="hero-title">{t.hero}<span>72</span></h1><div className="hero-bottom"><p><span className="marker">{t.heroNote}</span></p><p>2027.01.02<br/>18:00 — 21:00</p></div></div>
      <div className="hero-footer"><span>{t.info}</span><a href="#details">{t.scroll} <span aria-hidden="true">↓</span></a></div>
    </section>

    <section className="content-section details" id="details"><SectionHeading index={1} label={t.sections[0]} title={t.headings[0]} /><div className="facts-grid">{t.facts.map(([label, value, note]) => <Card className="fact-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></Card>)}</div><p className="details-note">{t.detailsNote}</p></section>

    <section className="content-section food" id="food"><SectionHeading index={2} label={t.sections[1]} title={t.headings[1]} note={t.foodNote} />{t.food.map(([label, value], i) => <div key={label}><div className="food-line"><span>{label}</span><p>{value}</p></div>{i < t.food.length - 1 && <Separator />}</div>)}</section>

    <section className="content-section program" id="program"><SectionHeading index={3} label={t.sections[2]} title={t.headings[2]} note={t.scheduleNote} /><div className="schedule-list">{t.schedule.map(([time, title, detail]) => <div className="schedule-row" key={time}><time>{time}</time><h3>{title}</h3><p>{detail}</p></div>)}</div></section>

    <section className="content-section activities" id="activities"><SectionHeading index={4} label={t.sections[3]} title={t.headings[3]} /><div className="activity-list">{t.activities.map(([title, detail]) => <Card className="activity-card" key={title}><h3>{title}</h3><p>{detail}</p></Card>)}</div></section>

    <section className="content-section participate" id="participate"><SectionHeading index={5} label={t.sections[4]} title={t.headings[4]} note={t.participateNote} /><InteractionPanel language={language} /></section>

    <section className="content-section final-details"><div className="final-block"><SectionHeading index={6} label={t.sections[5]} title={t.headings[5]} /><div className="plain-list">{t.bring.map(([title, detail]) => <p key={title}>{title}<span>{detail}</span></p>)}</div></div><div className="final-block"><SectionHeading index={7} label={t.sections[6]} title={t.headings[6]} /><p className="after-copy">{t.after}</p><Badge variant="outline" size="lg">{t.afterBadge}</Badge></div></section>

    <footer><a className="site-logo" href="#top">N72<span> / </span>2027</a><span>{t.updated}</span><a href="#top">{t.top}</a></footer>
  </main>;
}
