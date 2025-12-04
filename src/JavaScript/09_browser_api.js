// Converted from 09_browser_api.md
// title: ブラウザ API（30問）

export const title = "ブラウザ API（30問）";
export const questions = [
  "Fetch APIで`fetch(url)`を呼び出したとき、ネットワークエラーとHTTPエラーはどのように区別されるか説明してください。",
  "Fetchのレスポンスを`response.ok`と`response.status`で判定する基本パターンを示してください。",
  "`response.json()`と`response.text()`の違いと、ボディは一度しか消費できないことの意味を説明してください。",
  "`fetch`の第2引数で設定できる主なオプション（`method`/`headers`/`body`/`credentials`/`mode`/`cache`など）を挙げてください。",
  "JSON APIにPOSTする際の典型的なオプション設定例を書いてください。",
  "CORSエラーが発生する典型的なケースと、サーバー側で必要となるヘッダーを説明してください。",
  "`fetch`で同一オリジンにクッキーを送るために設定が必要なオプションを説明してください。",
  "リダイレクトを禁止または検出するためのFetchオプション（`redirect`）と挙動を説明してください。",
  "`AbortController`を用いてFetchを中断するコード例を書いてください。",
  "タイムアウトを実現するために`AbortController`と`setTimeout`を組み合わせる方法を説明してください。",
  "複数のFetchリクエストを同じ`AbortSignal`でまとめてキャンセルする方法と注意点を説明してください。",
  "JSONを文字列化する`JSON.stringify`の第2引数`replacer`や第3引数`space`の役割を説明してください。",
  "`JSON.parse`の`reviver`で日付文字列を`Date`に復元する例を書いてください。",
  "循環参照を含むオブジェクトを`JSON.stringify`すると何が起こるか説明してください。",
  "Web Storageにおける`localStorage`と`sessionStorage`の違い（有効期間・スコープ）を説明してください。",
  "`localStorage`にオブジェクトを保存する際の基本的な手順（文字列化とパース）を示してください。",
  "`localStorage`の`setItem`/`getItem`/`removeItem`/`clear`の挙動を説明してください。",
  "`storage`イベントが発火する条件と、発火しないタブの条件を説明してください。",
  "Web Storageの容量制限に関する一般的な目安と、例外がスローされるタイミングを説明してください。",
  "Cookieとの違いを、送信範囲・サイズ・自動送信可否の観点で説明してください。",
  "URL APIで`new URL()`を使ってクエリパラメータを読む/書く例を示してください。",
  "`URLSearchParams`で同名の複数パラメータを扱う方法（`append`と`getAll`）を説明してください。",
  "`encodeURI`と`encodeURIComponent`の違いを説明し、クエリパラメータを組み立てる際にどちらを使うべきか述べてください。",
  "History APIの`pushState`と`replaceState`の違いを説明し、`popstate`イベントの発火条件を述べてください。",
  "ハッシュ変化（`hashchange`）とHistory APIの違いを説明し、それぞれの用途を挙げてください。",
  "Fetchの`keepalive`オプションが使われる典型的なケースを説明してください。",
  "`FormData`を使ってファイルを含むフォームを`fetch`で送信する例を書いてください。",
  "`response.clone()`が必要になる場面（同じレスポンスを2回読みたい場合など）を説明してください。",
  "キャッシュ制御ヘッダー（`Cache-Control`や`ETag`）がブラウザのリクエストに与える影響を説明してください。",
  "APIエラーをUIで扱う際の基本方針（ユーザー向けメッセージ・リトライ・ロギングなど）を3つ挙げてください。"
];

export default { title, questions };
