// Answers converted from 05_collections_answers.md
// title: コレクション（解答例）

export const title = "コレクション（解答例）";
export const answers = [
  "配列リテラルは明示的で安全。`Array(5)`は長さだけの疎配列を作る点に注意。通常はリテラル推奨。",
  "`length`を小さくすると末尾要素が削除される。大きくすると空スロットが増える。",
  "`push/pop`は末尾、`shift/unshift`は先頭（後者は全体シフトで遅い）。",
  "`slice`は非破壊で部分配列を返す。`splice`は破壊的に挿入/削除し、削除分を返す。",
  "`map`は新配列を返す変換、`forEach`は副作用目的で戻り値なし。",
  "`filter`は条件に合う全要素の配列、`find`は最初の一致要素（見つからなければ`undefined`）。",
  "`reduce((a,b)=>a+b, 初期値)`。初期値なしで空配列はTypeError、1要素ならその値が初期acc。",
  "`reduce`で`{[key]: count}`を作る: `arr.reduce((acc,x)=>{acc[x]=(acc[x]||0)+1;return acc;},{})`",
  "`some`は1件trueで終了、`every`は1件falseで終了。戻り値はboolean。",
  "`includes`は`NaN`を真と扱う、`indexOf`は`NaN`に反応せず`-1`。",
  "デフォルトは文字列比較で`[2,10]`→`[10,2]`。`sort((a,b)=>a-b)`で数値順。",
  "`Array.from(arrayLike, x=>x*2)`、反復可能なものから配列化やコピーに使える。",
  "スプレッドは浅いコピーでネストは共有される。",
  "`flat(depth)`でネストを平坦化、`flatMap`は`map`後に深さ1で`flat`。",
  "`const unique = [...new Set(arr)];`",
  "`Set`は挿入順保持で`add/has/delete/clear`。重複は無視。",
  "`WeakSet`はオブジェクトのみキー、弱参照でGC対象、列挙不可。キャッシュや存在フラグに利用。",
  "`Map`は任意型キーで挿入順保持。オブジェクトは文字列キー限定でプロトタイプを持つ。",
  "`const m=new Map(); m.set('a',1); m.get('a'); m.has('a'); m.delete('a'); m.clear();`",
  "`map.forEach((v,k)=>...)`は`value,key`順。`for...of`は`[key,value]`。",
  "`WeakMap`はオブジェクトキーのみ、弱参照で列挙不可。プライベートデータやキャッシュ用途。",
  "`for...of`は反復可能の値を返す。`for...in`は列挙可能プロパティのキー文字列を列挙。",
  "`Symbol.iterator`を実装すれば反復可能。例: `const obj={ *[Symbol.iterator](){ yield 1; yield 2; } };`",
  "`function* nums(){ yield 1; yield 2; }` で逐次値生成。",
  "`next`は`{value,done}`、`return`は早期終了、`throw`は内部へ例外送出。",
  "無限ジェネレーターは消費側で`break`や`take`処理を行う。",
  "文字列はコードポイント単位、`Set`は各要素を順に返す。",
  "`entries`は`[index,value]`、`keys`はインデックス、`values`は値。`for...of`で使える。",
  "イミュータブル操作: スプレッドで新配列生成、`map/filter`で非破壊変換、`concat`で結合。",
  "計算量、メモリアロケーション、ループ回数、スパース配列化などを考慮して選択する。"
];

export default { title, answers };
