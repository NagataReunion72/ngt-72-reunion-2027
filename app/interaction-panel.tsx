import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function InteractionPanel() {
  return <div className="participation-content">
    <Alert className="availability-alert" role="status"><AlertTitle>COMING SOON</AlertTitle><AlertDescription>VOTING AND COMMENTS ARE BEING PREPARED.</AlertDescription></Alert>
    <div className="participation-grid">
      <Card className="participation-card"><div className="card-head"><span>PEOPLE’S CHOICE</span><Badge variant="outline">NOT OPEN</Badge></div><h3>CAST YOUR VOTE</h3><p>CHOOSE A CATEGORY WHEN VOTING OPENS.</p><div className="option-preview"><span>MOST UNCHANGED</span><span>MOST TRANSFORMED</span><span>LONGEST JOURNEY</span></div><Button disabled>VOTING OPENS SOON</Button></Card>
      <Card className="participation-card"><div className="card-head"><span>MESSAGE BOARD</span><Badge variant="outline">NOT OPEN</Badge></div><h3>LEAVE A MESSAGE</h3><p>NICKNAMES ARE WELCOME.</p><div className="field-preview"><label htmlFor="preview-name">NAME OR NICKNAME</label><Input id="preview-name" disabled placeholder="YOUR NAME" /><label htmlFor="preview-message">MESSAGE</label><Textarea id="preview-message" disabled placeholder="YOUR MESSAGE" /></div><Button disabled>COMMENTS OPEN SOON</Button></Card>
    </div>
  </div>;
}
