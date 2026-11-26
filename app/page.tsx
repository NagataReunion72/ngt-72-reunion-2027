import InteractionPanel from './interaction-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const schedule = [
  ['17:30', 'DOORS OPEN', 'CHECK IN'],
  ['18:00', 'OPENING & TOAST', 'GROUP PHOTO'],
  ['18:30', 'DINNER', 'BUFFET & CONVERSATION'],
  ['19:20', 'GROUP ACTIVITIES', 'QUIZ & AWARDS'],
  ['20:20', 'MEMORY SLIDES', 'PHOTOS & MESSAGES'],
  ['20:45', 'CLOSING', 'AFTER PARTY GUIDANCE'],
];

const activities = [
  ['CLASS QUIZ', 'SCHOOL MEMORIES & TEAM QUESTIONS'],
  ['PEOPLE’S CHOICE', 'PRE-EVENT VOTING & RESULTS'],
  ['MEMORY SLIDES', 'PHOTOS & MESSAGES'],
];

function SectionHeading({ index, title, note }: { index: string; title: string; note?: string }) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><h2>{title}</h2>{note && <p>{note}</p>}</div></div>;
}

export default function Home() {
  return <main id="top">
    <header className="site-header">
      <a className="site-logo" href="#top" aria-label="REUNION 72 HOME">N72<span> / </span>2027</a>
      <nav aria-label="MAIN NAVIGATION"><a href="#details">DETAILS</a><a href="#program">PROGRAM</a><a href="#participate">PARTICIPATE</a></nav>
      <Button variant="outline" size="sm" render={<a href="#details" />}>EVENT INFO</Button>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-topline"><span>CLASS OF 72</span><span>REUNION / 2027</span></div>
      <div className="hero-main"><p className="hero-overline">JANUARY 02 · SATURDAY</p><h1 id="hero-title">REUNION<span>72</span></h1><div className="hero-bottom"><p>THE CLASS GETS TOGETHER AGAIN.</p><p>2027.01.02<br/>18:00 — 21:00</p></div></div>
      <div className="hero-footer"><span>EVENT INFORMATION</span><a href="#details">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>

    <section className="content-section details" id="details">
      <SectionHeading index="01 / DETAILS" title="THE ESSENTIALS" />
      <div className="facts-grid">
        <Card className="fact-card"><span>DATE</span><strong>JAN 02, 2027</strong><small>SATURDAY</small></Card>
        <Card className="fact-card"><span>TIME</span><strong>18:00 — 21:00</strong><small>DOORS OPEN AT 17:30</small></Card>
        <Card className="fact-card"><span>VENUE</span><strong>TO BE ANNOUNCED</strong><small>LOCATION DETAILS TO FOLLOW</small></Card>
        <Card className="fact-card"><span>FEE</span><strong>TO BE ANNOUNCED</strong><small>FOOD & DRINK INCLUDED</small></Card>
      </div>
      <p className="details-note">VENUE AND FEE WILL BE UPDATED HERE ONCE CONFIRMED.</p>
    </section>

    <section className="content-section food" id="food">
      <SectionHeading index="02 / FOOD & DRINK" title="DINNER" note="BUFFET AND DRINKS PLANNED. DETAILS MAY CHANGE." />
      <div className="food-line"><span>FOOD</span><p>APPETIZERS · MAIN DISHES · PASTA · DESSERT</p></div>
      <Separator />
      <div className="food-line"><span>DRINKS</span><p>BEER · WINE · SOFT DRINKS</p></div>
      <Separator />
      <div className="food-line"><span>DIETARY NEEDS</span><p>PLEASE CONTACT THE ORGANIZERS IN ADVANCE.</p></div>
    </section>

    <section className="content-section program" id="program">
      <SectionHeading index="03 / PROGRAM" title="THE EVENING" note="TIMES ARE APPROXIMATE." />
      <div className="schedule-list">{schedule.map(([time, title, detail]) => <div className="schedule-row" key={time}><time>{time}</time><h3>{title}</h3><p>{detail}</p></div>)}</div>
    </section>

    <section className="content-section activities" id="activities">
      <SectionHeading index="04 / ACTIVITIES" title="WHAT’S ON" />
      <div className="activity-list">{activities.map(([title, detail]) => <Card className="activity-card" key={title}><h3>{title}</h3><p>{detail}</p></Card>)}</div>
    </section>

    <section className="content-section participate" id="participate">
      <SectionHeading index="05 / PARTICIPATE" title="VOTE & LEAVE A MESSAGE" note="VOTING AND COMMENTS WILL OPEN SOON." />
      <InteractionPanel />
    </section>

    <section className="content-section final-details">
      <div className="final-block"><SectionHeading index="06 / BRING" title="WHAT TO BRING" /><div className="plain-list"><p>EVENT FEE <span>AMOUNT & PAYMENT METHOD TO FOLLOW</span></p><p>SMARTPHONE <span>FOR PHOTOS & ACTIVITIES</span></p></div></div>
      <div className="final-block"><SectionHeading index="07 / AFTER PARTY" title="ROUND TWO" /><p className="after-copy">PLANNED FOR AROUND 21:30 NEAR THE MAIN VENUE. LOCATION, FEE AND HOW TO JOIN WILL BE ANNOUNCED HERE.</p><Badge variant="outline" size="lg">DETAILS TO FOLLOW</Badge></div>
    </section>

    <footer><a className="site-logo" href="#top">N72<span> / </span>2027</a><span>LAST UPDATED · NOV 27, 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
