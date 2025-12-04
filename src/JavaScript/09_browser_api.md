# ブラウザ API（30問）
1. Fetch APIで`fetch(url)`を呼び出したとき、ネットワークエラーとHTTPエラーはどのように区別されるか説明してください。
2. Fetchのレスポンスを`response.ok`と`response.status`で判定する基本パターンを示してください。
3. `response.json()`と`response.text()`の違いと、ボディは一度しか消費できないことの意味を説明してください。
4. `fetch`の第2引数で設定できる主なオプション（`method`/`headers`/`body`/`credentials`/`mode`/`cache`など）を挙げてください。
5. JSON APIにPOSTする際の典型的なオプション設定例を書いてください。
6. CORSエラーが発生する典型的なケースと、サーバー側で必要となるヘッダーを説明してください。
7. `fetch`で同一オリジンにクッキーを送るために設定が必要なオプションを説明してください。
8. リダイレクトを禁止または検出するためのFetchオプション（`redirect`）と挙動を説明してください。
9. `AbortController`を用いてFetchを中断するコード例を書いてください。
10. タイムアウトを実現するために`AbortController`と`setTimeout`を組み合わせる方法を説明してください。
11. 複数のFetchリクエストを同じ`AbortSignal`でまとめてキャンセルする方法と注意点を説明してください。
12. JSONを文字列化する`JSON.stringify`の第2引数`replacer`や第3引数`space`の役割を説明してください。
13. `JSON.parse`の`reviver`で日付文字列を`Date`に復元する例を書いてください。
14. 循環参照を含むオブジェクトを`JSON.stringify`すると何が起こるか説明してください。
15. Web Storageにおける`localStorage`と`sessionStorage`の違い（有効期間・スコープ）を説明してください。
16. `localStorage`にオブジェクトを保存する際の基本的な手順（文字列化とパース）を示してください。
17. `localStorage`の`setItem`/`getItem`/`removeItem`/`clear`の挙動を説明してください。
18. `storage`イベントが発火する条件と、発火しないタブの条件を説明してください。
19. Web Storageの容量制限に関する一般的な目安と、例外がスローされるタイミングを説明してください。
20. Cookieとの違いを、送信範囲・サイズ・自動送信可否の観点で説明してください。
21. URL APIで`new URL()`を使ってクエリパラメータを読む/書く例を示してください。
22. `URLSearchParams`で同名の複数パラメータを扱う方法（`append`と`getAll`）を説明してください。
23. `encodeURI`と`encodeURIComponent`の違いを説明し、クエリパラメータを組み立てる際にどちらを使うべきか述べてください。
24. History APIの`pushState`と`replaceState`の違いを説明し、`popstate`イベントの発火条件を述べてください。
25. ハッシュ変化（`hashchange`）とHistory APIの違いを説明し、それぞれの用途を挙げてください。
26. Fetchの`keepalive`オプションが使われる典型的なケースを説明してください。
27. `FormData`を使ってファイルを含むフォームを`fetch`で送信する例を書いてください。
28. `response.clone()`が必要になる場面（同じレスポンスを2回読みたい場合など）を説明してください。
29. キャッシュ制御ヘッダー（`Cache-Control`や`ETag`）がブラウザのリクエストに与える影響を説明してください。
30. APIエラーをUIで扱う際の基本方針（ユーザー向けメッセージ・リトライ・ロギングなど）を3つ挙げてください。
