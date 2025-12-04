// Answers converted from 09_browser_api_answers.md
// title: ブラウザ API（解答例）

export const title = "ブラウザ API（解答例）";
export const answers = [
  "ネットワークエラーはPromise拒否、HTTPエラーはresolveされ`status`で判定。",
  "`if (!res.ok) throw new Error(res.status);` のように`ok`と`status`を見る。",
  "`json()`はJSONパースしてオブジェクトを返し、`text()`は文字列。ボディは一度きり消費。",
  "主なオプション: `method`, `headers`, `body`, `credentials`, `mode`, `cache`, `redirect`, `signal` など。",
  "例: `fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})`",
  "異なるオリジンで適切なCORSレスポンスヘッダー（`Access-Control-Allow-Origin`など）が無いとブラウザがブロック。",
  "同一オリジンでクッキー送信には`credentials:'include'`（または`same-origin`）が必要。",
  "`redirect:'error'`でリダイレクトを拒否、`manual`で検出、デフォは自動追跡。",
  "`const c=new AbortController(); fetch(url,{signal:c.signal}); c.abort();`",
  "`const t=setTimeout(()=>c.abort(),ms);` とし、`finally`で`clearTimeout`。",
  "複数fetchに同じ`signal`を渡すと`abort()`一発で全キャンセル。中断時のエラーハンドリングを共通化する。",
  "`replacer`で除外/変換、`space`でインデント指定（整形）。`JSON.stringify(obj, null, 2)`など。",
  "`JSON.parse(str, (k,v)=> isISODate(v)? new Date(v): v);`",
  "循環参照があると`JSON.stringify`はTypeErrorを投げる。",
  "`localStorage`は永続、`sessionStorage`はタブ単位。両方とも文字列のみ保存。",
  "`setItem(key, JSON.stringify(obj));` / `JSON.parse(getItem(key) ?? 'null');`",
  "`setItem`で保存、`getItem`で取得（無ければ`null`）、`removeItem`削除、`clear`全削除。",
  "同一オリジンの他タブで変更されたときに`storage`イベント発火。変更を行ったタブ自身では発火しない。",
  "容量は数MB程度でブラウザ依存。いっぱいになると`setItem`で例外が投げられる。",
  "Cookieは自動送信/小容量/サーバーと共有。Storageは自動送信されず容量が大きい。",
  "`const u=new URL(location); u.searchParams.get('q'); u.searchParams.set('page','2');`",
  "`params.append('tag','js'); params.getAll('tag');`",
  "`encodeURI`はURL全体向けで`?`や`&`をエンコードしない。パラメータ値には`encodeURIComponent`を使う。",
  "`pushState`は履歴追加、`replaceState`は置換。`popstate`は戻る/進む時に発火。",
  "ハッシュはページリロード無しで`hashchange`が発火。History APIは任意パスでURLを操作し`popstate`を得る。",
  "`keepalive:true`はページ離脱時の送信など小さなリクエストを完了させたいときに使用。",
  "`fetch(url,{method:'POST',body:new FormData(form)})` でファイル含む送信。",
  "1つのレスポンスは1度しか読めないので、複数回読みたい場合に`response.clone()`を使う。",
  "`Cache-Control/ETag`はキャッシュ利用や再検証を制御し、ブラウザのリクエストや再取得タイミングに影響する。",
  "ユーザー向けメッセージを簡潔に、必要ならリトライや問い合わせ手段を提供し、ログで原因を記録する。"
];

export default { title, answers };
