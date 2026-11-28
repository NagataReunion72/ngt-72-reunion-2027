'use client';

import { useEffect, useState } from 'react';
import InteractionPanel from './interaction-panel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectItem, SelectPopup, SelectTrigger } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

type Language = 'ja' | 'en' | 'fr' | 'zh' | 'ak';

const languageOptions: { value: Language; label: string }[] = [
  { value: 'ja', label: '日本語' },
  { value: 'en', label: 'ENGLISH' },
  { value: 'fr', label: 'FRANÇAIS' },
  { value: 'zh', label: '简体中文' },
  { value: 'ak', label: 'AKAN (TWI)' },
];

const content = {
  ja: {
    nav: ['開催概要', '当日の流れ', '参加'], info: '開催情報', class: '72回生', reunion: '同窓会 / 2027', dateLine: '1月2日・土曜日', hero: '同窓会', heroNote: '72回生、ふたたび。', scroll: '詳細を見る',
    sections: ['開催概要', '食事・飲み物', '当日の流れ', '余興', '参加', '持ち物'],
    headings: ['開催概要', '食事について', '当日の流れ', '余興', '投票・コメント', '持ち物'],
    facts: [['日付', '2027年1月2日', '土曜日'], ['時間', '17:00 — 19:30', '16:30 開場'], ['会場', '神戸マリオットホテル\nザ マーカススクエア神戸', ''], ['参加費用', '6,000〜10,000円', 'この範囲を目安に調整中\n（現在、企業協賛を検討中です。確定後、幹事よりクラスLINEにてご連絡いたします）'], ['形式', '立食ブッフェ形式', '一部着席あり'], ['参加対象', '72回生 ＋ 先生方', ''], ['服装', 'フォーマル または\nオフィスカジュアル', '※ パンツスタイル可（ジャケット推奨）']],
    mapLabel: '地図を見る',
    food: [['形式', '立食ブッフェ形式（一部着席あり）'], ['料理・飲み物', '詳細は後日お知らせします。']],
    scheduleNote: '詳細な進行は調整中です。',
    schedule: [['16:30', '開場', '受付開始'], ['17:00', '開宴', '同窓会スタート'], ['19:30', '閉宴', '終了予定']],
    activityStatus: '調整中', activityNote: '内容は決まり次第お知らせします。',
    participateNote: '投票・コメントは準備中です。',
    bring: [['会費（現金）', '当日、現地受付にて現金払いです。'], ['スマートフォン', '写真共有・余興への参加に']],
    updated: '最終更新 · 2026年11月28日', top: 'ページ先頭へ ↑', brand: '72回生 同窓会',
  },
  en: {
    nav: ['DETAILS', 'PROGRAM', 'PARTICIPATE'], info: 'EVENT INFO', class: 'CLASS OF 72', reunion: 'REUNION / 2027', dateLine: 'JANUARY 02 · SATURDAY', hero: 'REUNION', heroNote: 'THE CLASS GETS TOGETHER AGAIN.', scroll: 'EXPLORE DETAILS',
    sections: ['DETAILS', 'FOOD & DRINK', 'PROGRAM', 'ACTIVITIES', 'PARTICIPATE', 'BRING'],
    headings: ['THE ESSENTIALS', 'DINNER', 'THE EVENING', 'ACTIVITIES', 'VOTE & LEAVE A MESSAGE', 'WHAT TO BRING'],
    facts: [['DATE', 'JAN 02, 2027', 'SATURDAY'], ['TIME', '17:00 — 19:30', 'DOORS OPEN AT 16:30'], ['VENUE', 'KOBE MARRIOTT HOTEL\nTHE MARCUS SQUARE KOBE', ''], ['FEE', '¥6,000–¥10,000', 'ESTIMATED RANGE.\n(Corporate sponsorship is under consideration. Once confirmed, the organizers will notify everyone in the class LINE group.)'], ['FORMAT', 'STANDING BUFFET', 'SOME SEATING AVAILABLE'], ['GUESTS', 'CLASS OF 72 + TEACHERS', ''], ['DRESS CODE', 'FORMAL OR OFFICE CASUAL', 'JACKET RECOMMENDED · TROUSERS WELCOME']],
    mapLabel: 'VIEW MAP',
    food: [['FORMAT', 'STANDING BUFFET · SOME SEATING AVAILABLE'], ['FOOD & DRINKS', 'DETAILS TO FOLLOW.']],
    scheduleNote: 'THE DETAILED PROGRAM IS BEING FINALIZED.',
    schedule: [['16:30', 'DOORS OPEN', 'CHECK IN'], ['17:00', 'REUNION BEGINS', 'EVENT START'], ['19:30', 'EVENT ENDS', 'SCHEDULED CLOSE']],
    activityStatus: 'TO BE ANNOUNCED', activityNote: 'DETAILS ARE BEING FINALIZED.',
    participateNote: 'VOTING AND COMMENTS WILL OPEN SOON.',
    bring: [['EVENT FEE (CASH)', 'PAY IN CASH AT THE VENUE RECEPTION ON THE DAY.'], ['SMARTPHONE', 'FOR PHOTOS & ACTIVITIES']],
    updated: 'LAST UPDATED · NOV 28, 2026', top: 'BACK TO TOP ↑', brand: '72 REUNION',
  },
  fr: {
    nav: ['DÉTAILS', 'PROGRAMME', 'PARTICIPER'], info: 'INFOS', class: 'PROMOTION 72', reunion: 'RETROUVAILLES / 2027', dateLine: 'SAMEDI 2 JANVIER', hero: 'RETROUVAILLES', heroNote: 'LA PROMOTION SE RETROUVE.', scroll: 'VOIR LES DÉTAILS',
    sections: ['DÉTAILS', 'REPAS ET BOISSONS', 'PROGRAMME', 'ANIMATIONS', 'PARTICIPER', 'À APPORTER'],
    headings: ['L’ESSENTIEL', 'LE REPAS', 'LA SOIRÉE', 'ANIMATIONS', 'VOTE ET MESSAGES', 'À APPORTER'],
    facts: [['DATE', '2 JANVIER 2027', 'SAMEDI'], ['HEURE', '17:00 — 19:30', 'ACCUEIL DÈS 16:30'], ['LIEU', 'KOBE MARRIOTT HOTEL\nTHE MARCUS SQUARE KOBE', ''], ['PARTICIPATION', '6 000–10 000 ¥', 'MONTANT ESTIMATIF.\n(Nous étudions la possibilité d’un soutien d’entreprises. Une fois le montant fixé, les organisateurs vous informeront dans le groupe LINE de la classe.)'], ['FORMULE', 'BUFFET DEBOUT', 'QUELQUES PLACES ASSISES'], ['INVITÉS', 'PROMOTION 72 + ENSEIGNANTS', ''], ['TENUE', 'HABILLÉE OU DE BUREAU DÉCONTRACTÉE', 'VESTE CONSEILLÉE · PANTALON ACCEPTÉ']],
    mapLabel: 'VOIR LA CARTE',
    food: [['FORMULE', 'BUFFET DEBOUT · QUELQUES PLACES ASSISES'], ['REPAS ET BOISSONS', 'DÉTAILS À VENIR.']],
    scheduleNote: 'LE PROGRAMME DÉTAILLÉ EST EN COURS DE PRÉPARATION.',
    schedule: [['16:30', 'OUVERTURE', 'DÉBUT DE L’ACCUEIL'], ['17:00', 'DÉBUT', 'LES RETROUVAILLES COMMENCENT'], ['19:30', 'FIN', 'FIN PRÉVUE']],
    activityStatus: 'EN PRÉPARATION', activityNote: 'LE CONTENU SERA ANNONCÉ PLUS TARD.',
    participateNote: 'LE VOTE ET LES MESSAGES SERONT BIENTÔT OUVERTS.',
    bring: [['PARTICIPATION (ESPÈCES)', 'À RÉGLER EN ESPÈCES À L’ACCUEIL, LE JOUR MÊME.'], ['SMARTPHONE', 'POUR LES PHOTOS ET LES ACTIVITÉS']],
    updated: 'MISE À JOUR · 28 NOV. 2026', top: 'RETOUR EN HAUT ↑', brand: 'PROMO 72',
  },
  zh: {
    nav: ['活动详情', '当日安排', '参与互动'], info: '活动信息', class: '第72届', reunion: '同学会 / 2027', dateLine: '1月2日 · 星期六', hero: '同学会', heroNote: '第72届，再次相聚。', scroll: '查看详情',
    sections: ['活动详情', '餐饮', '当日安排', '节目', '参与互动', '携带物品'],
    headings: ['活动详情', '餐饮安排', '当日流程', '节目', '投票与留言', '携带物品'],
    facts: [['日期', '2027年1月2日', '星期六'], ['时间', '17:00 — 19:30', '16:30 开始入场'], ['地点', 'KOBE MARRIOTT HOTEL\nTHE MARCUS SQUARE KOBE', ''], ['参加费用', '约6,000～10,000日元', '费用仍在调整中。\n（目前正在考虑企业赞助。金额确定后，筹办人员将通过班级LINE群通知大家。）'], ['形式', '站立式自助餐', '设有部分座位'], ['参加对象', '第72届同学及老师', ''], ['着装', '正装或商务休闲装', '建议穿外套 · 可以穿长裤']],
    mapLabel: '查看地图',
    food: [['形式', '站立式自助餐（设有部分座位）'], ['餐饮详情', '稍后公布。']],
    scheduleNote: '具体流程仍在安排中。',
    schedule: [['16:30', '开始入场', '签到开始'], ['17:00', '活动开始', '同学会正式开始'], ['19:30', '活动结束', '预计结束时间']],
    activityStatus: '筹备中', activityNote: '具体内容确定后公布。',
    participateNote: '投票和留言功能即将开放。',
    bring: [['参加费用（现金）', '请于活动当天在现场接待处以现金支付。'], ['智能手机', '用于拍照及参与活动']],
    updated: '最后更新 · 2026年11月28日', top: '返回顶部 ↑', brand: '第72届同学会',
  },
  ak: {
    nav: ['NSƐM', 'NHYEHYƐE', 'FA WO HO HYƐ MU'], info: 'NSƐM', class: 'KUW 72', reunion: 'NHYIAMU / 2027', dateLine: 'MEMENEDA · ƆPƐPƆN 2', hero: 'NHYIAMU', heroNote: 'YƐHYIA BIO.', scroll: 'HWƐ NSƐM NO',
    sections: ['NHYIAMU HO NSƐM', 'ADUANE NE ANOMDEƐ', 'DA NO NHYEHYƐE', 'ANIGYE', 'ABA TO NE NKRA', 'NEA WOBƐFA ABA'],
    headings: ['NSƐM TITIRIW', 'ADUANE', 'DA NO NHYEHYƐE', 'ANIGYE', 'ABA TO NE NKRA', 'NEA WOBƐFA ABA'],
    facts: [['DA', 'ƆPƐPƆN 2, 2027', 'MEMENEDA'], ['BERƐ', '17:00 — 19:30', 'BUE 16:30'], ['BEAE', 'KOBE MARRIOTT HOTEL\nTHE MARCUS SQUARE KOBE', ''], ['SIKA A WOBƐTUA', '¥6,000–¥10,000', 'YƐRESUSUW SAA NTAM YI HO.\n(Yɛresusuw adwumakuo mmoa ho. Sɛ yɛsi sika no so gyinae a, nhyehyɛefoɔ bɛbɔ mo amanneɛ wɔ class LINE group.)'], ['SƐDEƐ ƐBƐYƐ', 'BUFFET A YƐGYINA HƆ', 'NKONNWA BI WƆ HƆ'], ['AHOHOƆ', 'KUW 72 NE AKYERƐKYERƐFOƆ', ''], ['NTADEƐ', 'FORMAL ANAA OFFICE CASUAL', 'JACKET RECOMMENDED · TROUSERS WELCOME']],
    mapLabel: 'HWƐ MAP',
    food: [['SƐDEƐ ƐBƐYƐ', 'BUFFET A YƐGYINA HƆ · NKONNWA BI WƆ HƆ'], ['ADUANE NE ANOMDEƐ', 'YƐBƐBƆ MO AMANNEƐ AKYIRE YI.']],
    scheduleNote: 'YƐREHYƐ DA NO NHYEHYƐE.',
    schedule: [['16:30', 'PONO BUE', 'DIN KYERƐW HYƐ ASE'], ['17:00', 'NHYIAMU HYƐ ASE', 'YƐHYIA BIO'], ['19:30', 'NHYIAMU BA AWIEI', 'BERƐ A YƐAHYƐ']],
    activityStatus: 'YƐRETOTO HO', activityNote: 'YƐBƐBƆ MO AMANNEƐ AKYIRE YI.',
    participateNote: 'ABA TO NE NKRA NO NNYƐ KRADO SESEI.',
    bring: [['SIKA (CASH)', 'MOMFA CASH MMRA; MONTUA WƆ VENUE RECEPTION DA NO.'], ['SMARTPHONE', 'MMONI NE DWUMADIE NO NTI']],
    updated: 'NSAKRAE A ƐTWA TOƆ · 2026.11.28', top: 'SAN KƆ SORO ↑', brand: 'NHYIAMU 72',
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

  return <main id="top" lang={language} className={`language-${language}`}>
    <header className="site-header">
      <a className="site-logo" href="#top" aria-label={isJapanese ? '同窓会ホーム' : t.brand}>{t.brand}</a>
      <nav aria-label={isJapanese ? 'メインメニュー' : 'MAIN NAVIGATION'}><a href="#details">{t.nav[0]}</a><a href="#program">{t.nav[1]}</a><a href="#participate">{t.nav[2]}</a></nav>
      <div className="header-actions"><div className="language-switch"><Select value={language} onValueChange={(value) => { if (typeof value === 'string' && value in content) setLanguage(value as Language); }}><SelectTrigger className="language-trigger" aria-label={isJapanese ? '表示言語' : 'Select language'}><span className="truncate">{languageOptions.find(option => option.value === language)?.label}</span></SelectTrigger><SelectPopup>{languageOptions.map(option => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>)}</SelectPopup></Select></div><Button className="header-info" variant="outline" size="sm" render={<a href="#details" />}>{t.info}</Button></div>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-topline"><span>{t.class}</span><span>{t.reunion}</span></div>
      <div className="hero-main"><p className="hero-overline"><span className="marker">{t.dateLine}</span></p><h1 id="hero-title">{t.hero}<span>72</span></h1><div className="hero-bottom"><p><span className="marker">{t.heroNote}</span></p><p>2027.01.02<br/>17:00 — 19:30</p></div></div>
      <div className="hero-footer"><span>{t.info}</span><a href="#details">{t.scroll} <span aria-hidden="true">↓</span></a></div>
    </section>

    <section className="content-section details" id="details"><SectionHeading index={1} label={t.sections[0]} title={t.headings[0]} /><div className="facts-grid">{t.facts.map(([label, value, note], index) => <Card className={`fact-card ${[2, 3, 4, 5, 6].includes(index) ? 'fact-card-long' : ''} ${index === 3 ? 'fact-card-fee' : ''}`} key={label}><span>{label}</span><strong>{value}</strong><div className="fact-card-bottom">{note && <small>{note}</small>}{index === 2 && <a href="https://maps.app.goo.gl/1ch62dZE3XBeUPub7" target="_blank" rel="noopener noreferrer">{t.mapLabel} ↗</a>}</div></Card>)}</div></section>

    <section className="content-section food" id="food"><SectionHeading index={2} label={t.sections[1]} title={t.headings[1]} />{t.food.map(([label, value], i) => <div key={label}><div className="food-line"><span>{label}</span><p>{value}</p></div>{i < t.food.length - 1 && <Separator />}</div>)}</section>

    <section className="content-section program" id="program"><SectionHeading index={3} label={t.sections[2]} title={t.headings[2]} note={t.scheduleNote} /><div className="schedule-list">{t.schedule.map(([time, title, detail]) => <div className="schedule-row" key={time}><time>{time}</time><h3>{title}</h3><p>{detail}</p></div>)}</div></section>

    <section className="content-section activities" id="activities"><SectionHeading index={4} label={t.sections[3]} title={t.headings[3]} /><div className="activity-list"><Card className="activity-card activity-card-pending"><h3>{t.activityStatus}</h3><p>{t.activityNote}</p></Card></div></section>

    <section className="content-section participate" id="participate"><SectionHeading index={5} label={t.sections[4]} title={t.headings[4]} note={t.participateNote} /><InteractionPanel language={language} /></section>

    <section className="content-section final-details final-details-single"><div className="final-block"><SectionHeading index={6} label={t.sections[5]} title={t.headings[5]} /><div className="plain-list">{t.bring.map(([title, detail]) => <p key={title}>{title}<span>{detail}</span></p>)}</div></div></section>

    <footer><a className="site-logo" href="#top">{t.brand}</a><span>{t.updated}</span><a href="#top">{t.top}</a></footer>
  </main>;
}
