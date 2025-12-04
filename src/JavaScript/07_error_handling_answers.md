# エラーハンドリング（解答例）
1. `try`実行→例外なら`catch`→最後に常に`finally`（`return`や`throw`があっても原則実行）。
2. `finally`で`return/throw`すると元の結果を上書きするので注意。可能なら`finally`では後処理のみ。
3. `throw`は任意値だが、スタックや型判別のため`Error`派生を投げるのが推奨。
4. `name`は種別、`message`は説明、`stack`は呼び出し履歴。`stack`は環境依存で個人情報が含まれ得る。
5. `SyntaxError`は構文、`TypeError`は型不一致/未定義プロパティアクセス、`ReferenceError`は未宣言変数などに使う。
6. `super(message)`で`message`や`stack`が初期化される。`this.name = 'CustomError';`などで名称を整える。
7. `new Error('fail', { cause: err })`。原因チェーンを保持でき、デバッグしやすい。
8. `try...catch`は同期エラーのみ。非同期は`Promise`の拒否や`async/await`の`try...catch`で扱う。
9. `async function f(){ try { await task(); } catch (e){ ... } }`
10. `promise.then(...).catch(err=>{...})`。`catch`の戻りは次の`then`に渡る（回復できる）。
11. `Promise.all`は1つでも拒否で即拒否し、他の結果は破棄。
12. `allSettled`は成功/拒否をすべて配列で返し、全体拒否はしない。
13. `Promise.any`は全拒否時に`AggregateError`を投げ、`errors`配列に理由が入る。
14. `unhandledrejection`は拒否がどこにもハンドルされないと発火。`window.addEventListener('unhandledrejection', ...)`で捕捉。
15. Fetchはネットワーク失敗のみでreject。HTTPエラーはresolveされるので`response.ok`や`status`で判定。
16. 捕捉後に`throw`し直して上位へ伝搬させる。例: `catch(e){ log(e); throw e; }`
17. 入力値をそのまま載せるとXSS/漏えい。サニタイズ・マスク・必要最小限の情報にする。
18. 握り潰すとデバッグ困難・状態不整合。少なくともログやユーザー通知を行う。
19. エラーは`error`、警告は`warn`、情報は`info/log`。重大度で使い分ける。
20. `debugger`は実行を止めて開発者ツールにフォーカス。再現箇所での状態調査に有効。
21. `cause`付きでラップすると根本原因のスタックを追跡できる利点がある。
22. Nodeの`uncaughtException`はプロセス全体、ブラウザの`error`イベントは未捕捉エラー。いずれもログと安全な終了/通知が必要。
23. リトライ回数の上限、待機（指数バックオフ）、冪等性を確認する。
24. ユーザー入力エラーはフィードバック、本番障害はアラートなど、分類して処理する。
25. コールバックの第1引数`err`パターンや`EventEmitter`の`error`イベントなどで通知される。
26. モック/スタブで例外を投げる、`Promise.reject`を使うなどしてテストする。
27. 簡潔なメッセージ、再試行手段、問い合わせ先やログIDを示す。
28. `try`を平坦化し関数分割、`Promise`チェーンで共通`catch`を使うなどでネストを回避。
29. 個人情報・トークンを送らない、マスクする、TLSや認可されたエンドポイントを使う。
30. 重大エラーは安全にプロセスを落とし再起動（不可逆な破損時）。一時的なものはリトライやユーザー通知で回復を図る。
