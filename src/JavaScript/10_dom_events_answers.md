# DOMとイベント（解答例）
1. `DOMContentLoaded`はDOM構築完了時、`load`は画像等リソースも含めて完了時。DOM操作は前者で十分なことが多い。
2. `querySelector`はCSSセレクタで1要素（最初）を返し、`getElementById`はIDで高速・null返却。後者はID限定。
3. `querySelectorAll`は静的な`NodeList`で反復可能。ライブではない。
4. `const el=document.createElement('div'); el.textContent='hi'; parent.appendChild(el);`
5. `textContent`はテキストのみ挿入し安全。`innerHTML`はHTMLを解析しXSSリスクがある。
6. `setAttribute`は属性値、プロパティ直書きは型付き。boolean属性やDOMプロパティは直書きが自然。
7. `classList.add/remove/toggle/contains`でクラス操作。複数クラスも扱える。
8. インラインスタイルは局所だが肥大化しやすい。クラス切替は再利用・テーマ変更が容易。
9. `DocumentFragment`にまとめて追加してから挿入すると再描画が減る。
10. `el.dataset.userId = '42'; const id = el.dataset.userId;`
11. `event.preventDefault()`でフォーム送信を止め、JSで検証や非同期送信を行う。
12. 伝播はキャプチャ→ターゲット→バブリングの順。
13. `capture:true`でキャプチャ段階にハンドラが実行される。
14. `stopPropagation`は後続リスナーへの伝播停止、`stopImmediatePropagation`は同一ターゲットの残りリスナーも止める。
15. 親に`click`を付け`event.target`で`li`を判定するデリゲーションを行う。
16. `event.target`は実際に起きた要素、`currentTarget`はリスナーを登録した要素。
17. `addEventListener('click', handler, { once: true })`
18. スクロールなどで`passive:true`は`preventDefault`しないことを宣言しパフォーマンスを向上。
19. 同じ関数参照と同じオプションで登録したものしか解除できない。
20. `keydown`は押下時、`keyup`は離した時。`event.ctrlKey`等で修飾キーを判定。
21. 入力の都度は`input`イベント。Composition中の挙動やIMEでの差異に注意。
22. ポインタイベントはマウス/タッチ/ペンを統一し、座標やボタン情報を一貫して扱える。
23. `focus/blur`はバブリングしないので、キャプチャを使うか`focusin/focusout`を使う。
24. 状態に応じて`aria-pressed`等を更新し、支援技術に状態を伝える。
25. 直接DOM操作は柔軟だが複雑化しやすい。仮想DOMは差分適用で可読性とテストが向上するが抽象化コストがある。
26. 読み/書きを交互に行わず、`getBoundingClientRect`後にまとめて書く、`requestAnimationFrame`でまとめる。
27. `requestAnimationFrame`はリフレッシュレート同期でスムーズ。`setInterval`はずれやすく、非表示時も動き続ける。
28. 長時間の同期処理はUIスレッドをブロックし、入力遅延やフリーズを引き起こす。
29. `novalidate`でブラウザ標準の検証を無効化し、カスタム検証を行える。
30. キーボード操作対応、適切な`role`/`aria-label`、フォーカスリングを残すなどを意識する。
