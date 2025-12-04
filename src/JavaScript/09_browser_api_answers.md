# ブラウザ API（解答例）
1. ネットワークエラーはPromise拒否、HTTPエラーはresolveされ`status`で判定。
2. `if (!res.ok) throw new Error(res.status);` のように`ok`と`status`を見る。
3. `json()`はJSONパースしてオブジェクトを返し、`text()`は文字列。ボディは一度きり消費。
4. 主なオプション: `method`, `headers`, `body`, `credentials`, `mode`, `cache`, `redirect`, `signal` など。
5. 例: `fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})`
6. 異なるオリジンで適切なCORSレスポンスヘッダー（`Access-Control-Allow-Origin`など）が無いとブラウザがブロック。
7. 同一オリジンでクッキー送信には`credentials:'include'`（または`same-origin`）が必要。
8. `redirect:'error'`でリダイレクトを拒否、`manual`で検出、デフォは自動追跡。
9. `const c=new AbortController(); fetch(url,{signal:c.signal}); c.abort();`
10. `const t=setTimeout(()=>c.abort(),ms);` とし、`finally`で`clearTimeout`。
11. 複数fetchに同じ`signal`を渡すと`abort()`一発で全キャンセル。中断時のエラーハンドリングを共通化する。
12. `replacer`で除外/変換、`space`でインデント指定（整形）。`JSON.stringify(obj, null, 2)`など。
13. `JSON.parse(str, (k,v)=> isISODate(v)? new Date(v): v);`
14. 循環参照があると`JSON.stringify`はTypeErrorを投げる。
15. `localStorage`は永続、`sessionStorage`はタブ単位。両方とも文字列のみ保存。
16. `setItem(key, JSON.stringify(obj));` / `JSON.parse(getItem(key) ?? 'null');`
17. `setItem`で保存、`getItem`で取得（無ければ`null`）、`removeItem`削除、`clear`全削除。
18. 同一オリジンの他タブで変更されたときに`storage`イベント発火。変更を行ったタブ自身では発火しない。
19. 容量は数MB程度でブラウザ依存。いっぱいになると`setItem`で例外が投げられる。
20. Cookieは自動送信/小容量/サーバーと共有。Storageは自動送信されず容量が大きい。
21. `const u=new URL(location); u.searchParams.get('q'); u.searchParams.set('page','2');`
22. `params.append('tag','js'); params.getAll('tag');`
23. `encodeURI`はURL全体向けで`?`や`&`をエンコードしない。パラメータ値には`encodeURIComponent`を使う。
24. `pushState`は履歴追加、`replaceState`は置換。`popstate`は戻る/進む時に発火。
25. ハッシュはページリロード無しで`hashchange`が発火。History APIは任意パスでURLを操作し`popstate`を得る。
26. `keepalive:true`はページ離脱時の送信など小さなリクエストを完了させたいときに使用。
27. `fetch(url,{method:'POST',body:new FormData(form)})` でファイル含む送信。
28. 1つのレスポンスは1度しか読めないので、複数回読みたい場合に`response.clone()`を使う。
29. `Cache-Control/ETag`はキャッシュ利用や再検証を制御し、ブラウザのリクエストや再取得タイミングに影響する。
30. ユーザー向けメッセージを簡潔に、必要ならリトライや問い合わせ手段を提供し、ログで原因を記録する。
