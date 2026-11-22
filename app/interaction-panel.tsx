'use client';

const choices = [
  'いちばん変わってなさそうな人',
  'いちばん雰囲気が変わっていそうな人',
  'いちばん遠くから来てくれそうな人',
];

export default function InteractionPanel() {
  return (
    <div className="interaction-grid">
      <p className="migration-banner" role="status">
        投票・コメント機能は新しい公開環境へ移行準備中です。受付開始まで少しお待ちください。
      </p>

      <section className="vote-card">
        <div className="card-kicker"><span>VOTE</span><b>01</b></div>
        <h3>勝手にアワード</h3>
        <p>今回投票するテーマを選んでください。</p>
        <fieldset disabled>
          {choices.map((label, index) => (
            <label key={label}>
              <input type="radio" name="award" defaultChecked={index === 0} />
              <span>{label}</span>
              <b>準備中</b>
            </label>
          ))}
        </fieldset>
        <button type="button" disabled>投票受付は準備中</button>
      </section>

      <section className="comment-card">
        <div className="card-kicker"><span>MESSAGE</span><b>02</b></div>
        <h3>みんなへ、ひとこと</h3>
        <form>
          <label>
            お名前・ニックネーム
            <input disabled placeholder="例：3組 たなか" />
          </label>
          <label>
            メッセージ
            <textarea disabled placeholder="当日楽しみにしています！" />
          </label>
          <button type="button" disabled>コメント受付は準備中</button>
        </form>
      </section>
    </div>
  );
}
