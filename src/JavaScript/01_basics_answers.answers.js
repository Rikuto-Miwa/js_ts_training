// Answers converted from 01_basics_answers.md
// title: 言語の基礎（解答例）

export const title = "言語の基礎（解答例）";
export const answers = [
  "プリミティブ型: number, string, boolean, null, undefined, symbol, bigint（不変・値渡し）。オブジェクト以外はプリミティブでメソッド呼び時は一時ラッパーが使われる。",
  "`var`は関数スコープ・再宣言/再代入可・ホイスティングで`undefined`初期化。`let`/`const`はブロックスコープ、再宣言不可、`let`のみ再代入可、ホイスティングされるがTDZあり。",
  "宣言なし代入や`this`経由の暗黙生成でグローバル化。strict modeを使う/ESMにする/`use strict`/lintで防止。",
  "テンプレートリテラル `` `Hello ${name}` ``。`+`連結は可読性が落ち、型変換が混ざりやすい。",
  "バッククォートで複数行をそのまま書ける。末尾改行やインデントがそのまま入る点に注意。",
  "ブロックスコープは`{}`で閉じ、`let/const`がそこに束縛。関数スコープは`function`単位で`var`が閉じる。",
  "ホイスティングは宣言を先頭に持ち上げる挙動。`var`は`undefined`で初期化、`let/const`はTDZで参照不可。",
  "TDZはブロック開始から宣言行までの期間。`console.log(x); let x = 1;`でReferenceError。",
  "主な戻り値: number/string/boolean/undefined/object/function/symbol/bigint。`typeof null`は歴史的経緯で`\"object\"`。",
  "優先順位は`**`→単項→`* / %`→`+ -`→比較→論理→代入。`**`は右結合、それ以外多くは左結合。",
  "単項`+/-`は`ToNumber`を行い、数値に変換してから符号を付ける。",
  "どちらかが文字列なら文字列結合。例: `\"3\" + 4`は`\"34\"`。",
  "`++i`は増やしてから値を返す、`i++`は元の値を返してから増やす。",
  "`cond ? a : b`。`if (cond) { return a; } else { return b; }`と等価。",
  "分岐が少数なら`if`、多数の固定値比較なら`switch`が読みやすい。`break`を忘れるとフォールスルー。",
  "`break`はループ脱出、`continue`は次反復へ。例: 偶数だけ処理する際に`continue`。",
  "反復回数が決まる/カウンタ必要なら`for`、条件次第で終わるなら`while`。",
  "ラベルは多重ループ脱出などに使用。`outer: for (...) { for (...) { break outer; } }`",
  "`||`は左がtruthyならそれを返し、そうでなければ右を評価。`&&`は左がfalsyならそれを返し、truthyなら右を返す。",
  "`??`は左が`null/undefined`のときのみ右を返す。`||`は`0`や`\"\"`でも右へ行く点が違う。",
  "`obj?.prop`は`obj`が`null/undefined`なら`undefined`を返しアクセスエラーを避ける。",
  "配列: `const [a=1, b] = arr;` オブジェクト: `const { x=0, y } = obj;`",
  "スプレッドで`{ ...obj }`や`[...arr]`は浅いコピー。ネスト内部は共有される。",
  "`floor`切り捨て、`ceil`切り上げ、`round`四捨五入。例: `1.6`→`1/2/2`。",
  "`0.1 + 0.2 !== 0.3`など2進浮動小数誤差。対策は整数に拡大して計算、`toFixed`で丸め、`Number.EPSILON`で許容差比較。",
  "`Number(\"5\")`→5、`String(5)`→\"5\"、`Boolean(\"\")`→false。明示変換で意図を示す。",
  "`isNaN(\"foo\")`はtrue（強制変換後判定）、`Number.isNaN(\"foo\")`はfalse（数値かつNaNのみ）。",
  "`Object.is(NaN, NaN)`はtrue、`Object.is(+0, -0)`はfalse。`===`は逆。",
  "BigIntは`123n`で作成。Numberとの混在演算はTypeErrorなので同じ型で揃える。",
  "意味のある命名、`const`優先、ASL依存の自動セミコロン挿入に注意して一貫したスタイルを守る。"
];

export default { title, answers };
