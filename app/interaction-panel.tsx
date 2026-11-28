import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const copy = {
  ja: { soon: '準備中', alert: '投票・コメントの受付開始まで、もう少しお待ちください。', voteLabel: '投票フォーム', closed: '受付前', vote: '投票する', voteNote: '現在、投票の準備を進めています。', votePreview: '投票内容は調整中です。', voteButton: '投票は準備中', board: 'メッセージボード', message: 'ひとことを残す', messageNote: 'ニックネームでも投稿できます。', name: '名前・ニックネーム', namePlaceholder: 'お名前', messageLabel: 'メッセージ', messagePlaceholder: 'メッセージを入力', messageButton: 'コメントは準備中' },
  en: { soon: 'COMING SOON', alert: 'VOTING AND COMMENTS ARE BEING PREPARED.', voteLabel: 'VOTING', closed: 'NOT OPEN', vote: 'CAST YOUR VOTE', voteNote: 'VOTING IS BEING PREPARED.', votePreview: 'DETAILS ARE BEING FINALIZED.', voteButton: 'VOTING OPENS SOON', board: 'MESSAGE BOARD', message: 'LEAVE A MESSAGE', messageNote: 'NICKNAMES ARE WELCOME.', name: 'NAME OR NICKNAME', namePlaceholder: 'YOUR NAME', messageLabel: 'MESSAGE', messagePlaceholder: 'YOUR MESSAGE', messageButton: 'COMMENTS OPEN SOON' },
} as const;

export default function InteractionPanel({ language }: { language: 'ja' | 'en' }) {
  const t = copy[language];
  return <div className="participation-content">
    <Alert className="availability-alert" role="status"><AlertTitle>{t.soon}</AlertTitle><AlertDescription>{t.alert}</AlertDescription></Alert>
    <div className="participation-grid">
      <Card className="participation-card"><div className="card-head"><span className="marker">{t.voteLabel}</span><Badge variant="outline">{t.closed}</Badge></div><h3>{t.vote}</h3><p>{t.voteNote}</p><div className="option-preview"><span>{t.votePreview}</span></div><Button disabled>{t.voteButton}</Button></Card>
      <Card className="participation-card"><div className="card-head"><span className="marker">{t.board}</span><Badge variant="outline">{t.closed}</Badge></div><h3>{t.message}</h3><p>{t.messageNote}</p><div className="field-preview"><label htmlFor="preview-name">{t.name}</label><Input id="preview-name" disabled placeholder={t.namePlaceholder} /><label htmlFor="preview-message">{t.messageLabel}</label><Textarea id="preview-message" disabled placeholder={t.messagePlaceholder} /></div><Button disabled>{t.messageButton}</Button></Card>
    </div>
  </div>;
}
