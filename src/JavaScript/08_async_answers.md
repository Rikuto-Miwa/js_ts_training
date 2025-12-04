# 非同期処理（解答例）
1. タスクキューはマクロタスク（タイマー等）、マイクロタスクはPromise等。マクロタスク処理後にマイクロタスクを一掃。
2. `setTimeout(fn,0)`は現在のマクロタスク終了後にタスクキューへ入り、次のループで実行。
3. Promiseは`pending`→`fulfilled/rejected`の一方向。settle後は不変。
4. エグゼキュータは同期実行され、重い処理や例外は即座に影響するため注意。
5. `then`で値を返すと次`then`にその値。Promiseを返すと解決結果/拒否が連鎖。
6. `catch`を推奨。`then`第2引数はチェーン分岐が複雑になるため避ける。
7. `finally`は結果に関わらず実行。戻り値は無視され、例外を投げると上書きする。
8. チェーンは拒否を`catch`まで伝播。`catch`が無いと未処理拒否となる。
9. `Promise.resolve(value)`はvalueがPromiseならそのまま、`reject`は拒否のPromiseを即座に返す。
10. `all`は入力順で結果配列を返し、1つでも拒否で全体拒否。
11. `allSettled`は各`{status, value|reason}`を配列で返す。
12. `race`は最初にsettleした結果をそのまま返す/投げる。タイムアウト等に使う。
13. `any`は初成功を返す。全拒否で`AggregateError`（`errors`配列）。
14. `async`関数は常にPromiseを返し、`return`は`resolve`、`throw`は`reject`となる。
15. `await`は非Promiseを即座に値として扱い、ラップされたPromiseを待機する。
16. `await`はその場で`Promise`を作り、解決時にマイクロタスクとして後続処理を再開。
17. 直列は逐次待ちで遅くなりがち。`Promise.all`で並列すれば合計時間を短縮。
18. `for await...of`は非同期イテラブルから順にawaitしながら反復。同期イテラブルとは`Symbol.asyncIterator`の有無が違う。
19. `async function*`で定義。`yield`値はPromiseに包まれず、そのまま`for await`で受け取れる。
20. `clearTimeout/clearInterval`でキャンセル。既に実行済みのタイミングには効かない。
21. デバウンスは一定時間内の連続呼び出しを1回にまとめる、スロットルは一定間隔で1回だけ許可。入力補完/スクロールなどに利用。
22. CPUバウンドがブロックするとイベントループが停滞し、UI更新や非同期処理が遅延する。
23. `queueMicrotask`はマイクロタスクを直接追加。`Promise.resolve().then`も近いがPromise生成が入る。
24. `try/finally`でリソース解放、`abort`でキャンセルなどを行う。
25. フラグを返して早期`return`、または`Promise.reject`でチェーンを終える。
26. `AbortController`以外ではフラグ付きPromiseや`Observable`、カスタム`cancel`メソッドなどで表現する。
27. グローバル`unhandledrejection`リスナや`--trace-warnings`、ログ出力などで調査する。
28. `Promise.race([task, timeoutPromise])`でタイムアウトを実現。
29. 例外はロギングして再スロー/上位へ伝える、必要な範囲でのみキャッチ、無闇に握り潰さない。
30. テストは`done`コールバック、Promiseを返す、`async`関数を使うことで完了を通知する。
