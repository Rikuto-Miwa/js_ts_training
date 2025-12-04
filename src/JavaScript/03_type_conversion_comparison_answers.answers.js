// Answers converted from 03_type_conversion_comparison_answers.md
// title: 型変換と比較（解答例）

export const title = "型変換と比較（解答例）";
export const answers = [
  "truthy例: `1,\"0\",[],{},Symbol(),true`等。falsy: `0, -0, 0n, \"\", null, undefined, NaN, false`。`Boolean`で確認。",
  "`!!value`で真偽値化（`Boolean`と同等）。存在チェックや短絡評価で使う。",
  "`Number`は全体を数値化、`parseInt/Float`は先頭の数値部分を読む、単項`+`は`Number`とほぼ同じ。基数指定が必要なら`parseInt`。",
  "基数未指定だと先頭`0`で8進扱いだった歴史や環境差があるため常に基数を渡す。",
  "`\"  42  \"`→42（空白トリム）、`\"42px\"`→`NaN`（末尾文字があるため）。",
  "`isFinite`は強制変換後判定、`Number.isFinite`は数値型かつ有限のみ真。",
  "整数なら真。`1.0`は真、`Infinity`は偽。",
  "`ToPrimitive`で`valueOf`→`toString`順にプリミティブ化、日付は`toString`優先。",
  "数値変換時は`valueOf`がプリミティブを返せばそれを使用、そうでなければ`toString`を使う。",
  "文字列化時は`toString`を呼び、その戻りが使われる。独自実装で`\"[object User]\"`などを変えられる。",
  "代表例: `null`と`undefined`は等しい、`0 == false`、`\"0\" == 0`など。",
  "抽象等価で`null`と`undefined`は特例で等しいが、厳密等価は型が違うため偽。",
  "`==`は`false`を数値0に変換するので真、`===`は型が違うので偽。",
  "`\"\" == 0`は真（空文字→0）。`[] == \"\"`は真（`[]`→\"\"→0と\"\"比較）。挙動を理解する必要。",
  "`[] == 0`は真（`[]`→\"\"→0）、`[] == \"\"`も真（`[]`→\"\"）。`ToPrimitive`→数値変換が行われる。",
  "`NaN`は何とも等しくないので`===`は偽。`Number.isNaN`で判定。",
  "`Object.is(NaN, NaN)`がtrue、`Object.is(+0, -0)`がfalse。`===`は逆の結果。",
  "オブジェクトは参照比較のみ行われ、同じ構造でも別インスタンスなら偽。",
  "別配列/別オブジェクトは同値でも参照が異なるので`===`は偽。",
  "`Symbol`は暗黙の文字列/数値変換を拒否しTypeError。明示的に`String(sym)`は可。",
  "BigIntとNumberの混在比較は`===`なら型違いで偽、`==`は数値変換で比較可能。算術演算はTypeError。",
  "`localeCompare`はロケール依存の順序を返し、`>` `<`はコードポイントで比較。",
  "`sort`はデフォで文字列比較のため`[2,10]`が`[10,2]`になる。数値ソートは`arr.sort((a,b)=>a-b)`。",
  "`?.`結果が`undefined`なら`== null`は真になる（`null`または`undefined`扱い）。",
  "`||`は`0`や`\"\"`をfalsy扱いし上書きされる。`??`なら`null/undefined`のみをデフォルト対象にできる。",
  "配列/オブジェクトはtruthy。条件分岐で空かどうかの判定を別途行う必要。",
  "日付は`valueOf`でタイムスタンプに変換され比較される。",
  "抽象等価: 型が同じなら`===`、`null/undefined`特例、文字列と数値の相互変換、布値化などを経て比較。",
  "`\"5\" > 12`は数値変換後比較され`5 > 12`で偽。",
  "原則`===`を使う、必要なら明示的型変換、`??`や`Boolean`で意図を明示する。"
];

export default { title, answers };
