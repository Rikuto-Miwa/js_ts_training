# コレクション（解答例）
1. 配列リテラルは明示的で安全。`Array(5)`は長さだけの疎配列を作る点に注意。通常はリテラル推奨。
2. `length`を小さくすると末尾要素が削除される。大きくすると空スロットが増える。
3. `push/pop`は末尾、`shift/unshift`は先頭（後者は全体シフトで遅い）。
4. `slice`は非破壊で部分配列を返す。`splice`は破壊的に挿入/削除し、削除分を返す。
5. `map`は新配列を返す変換、`forEach`は副作用目的で戻り値なし。
6. `filter`は条件に合う全要素の配列、`find`は最初の一致要素（見つからなければ`undefined`）。
7. `reduce((a,b)=>a+b, 初期値)`。初期値なしで空配列はTypeError、1要素ならその値が初期acc。
8. `reduce`で`{[key]: count}`を作る: `arr.reduce((acc,x)=>{acc[x]=(acc[x]||0)+1;return acc;},{})`
9. `some`は1件trueで終了、`every`は1件falseで終了。戻り値はboolean。
10. `includes`は`NaN`を真と扱う、`indexOf`は`NaN`に反応せず`-1`。
11. デフォルトは文字列比較で`[2,10]`→`[10,2]`。`sort((a,b)=>a-b)`で数値順。
12. `Array.from(arrayLike, x=>x*2)`、反復可能なものから配列化やコピーに使える。
13. スプレッドは浅いコピーでネストは共有される。
14. `flat(depth)`でネストを平坦化、`flatMap`は`map`後に深さ1で`flat`。
15. `const unique = [...new Set(arr)];`
16. `Set`は挿入順保持で`add/has/delete/clear`。重複は無視。
17. `WeakSet`はオブジェクトのみキー、弱参照でGC対象、列挙不可。キャッシュや存在フラグに利用。
18. `Map`は任意型キーで挿入順保持。オブジェクトは文字列キー限定でプロトタイプを持つ。
19. `const m=new Map(); m.set('a',1); m.get('a'); m.has('a'); m.delete('a'); m.clear();`
20. `map.forEach((v,k)=>...)`は`value,key`順。`for...of`は`[key,value]`。
21. `WeakMap`はオブジェクトキーのみ、弱参照で列挙不可。プライベートデータやキャッシュ用途。
22. `for...of`は反復可能の値を返す。`for...in`は列挙可能プロパティのキー文字列を列挙。
23. `Symbol.iterator`を実装すれば反復可能。例: `const obj={ *[Symbol.iterator](){ yield 1; yield 2; } };`
24. `function* nums(){ yield 1; yield 2; }` で逐次値生成。
25. `next`は`{value,done}`、`return`は早期終了、`throw`は内部へ例外送出。
26. 無限ジェネレーターは消費側で`break`や`take`処理を行う。
27. 文字列はコードポイント単位、`Set`は各要素を順に返す。
28. `entries`は`[index,value]`、`keys`はインデックス、`values`は値。`for...of`で使える。
29. イミュータブル操作: スプレッドで新配列生成、`map/filter`で非破壊変換、`concat`で結合。
30. 計算量、メモリアロケーション、ループ回数、スパース配列化などを考慮して選択する。
