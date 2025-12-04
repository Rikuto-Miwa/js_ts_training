# オブジェクトとプロトタイプ（解答例）
1. プリミティブは不変で値渡し、オブジェクトは可変で参照渡し（コピーしても同じ参照）。
2. 省略記法: `{ foo }`。計算プロパティ: `{ [keyName]: value }`。
3. ドットは識別子のみ、ブラケットは文字列キーや動的キー・記号・ハイフン入りなどに必要。
4. 追加/更新は代入または`Object.assign`。削除は`delete obj.key`。`delete`は疎にする点に注意。
5. `in`はプロトタイプも含む。`hasOwnProperty`は自身のプロパティのみ。必要なら`Object.hasOwn`を推奨。
6. `Object.getOwnPropertyDescriptor`や`Object.getOwnPropertyDescriptors`で`writable/enumerable/configurable`が取得できる。
7. `keys`は列挙可能な文字列キー、`values`は値、`entries`はペア。挿入順を保持する。
8. 浅いコピー: `{...obj}`や`Object.assign`。ネスト内部は同じ参照を共有するため注意。
9. 深いコピーが必要な場面はネストを独立させたいとき。`structuredClone`は関数等不可、JSON経由は`undefined`/シンボル/循環が不可。
10. プロトタイプチェーンは`[[Prototype]]`をたどりプロパティ解決。見つかれば返し、末尾`null`で未定義。
11. `getPrototypeOf`で取得、`setPrototypeOf`で設定できるが後者は遅いので`Object.create`で設計時に設定するのが良い。
12. `Object.create(null)`は`Object.prototype`を持たず、`hasOwnProperty`等が無い（純粋ディクショナリ向き）。
13. コンストラクタ関数は`function Foo(){}`＋`new`、`class`は糖衣で`prototype`操作を簡潔に書ける。
14. `class`メソッドは`prototype`に格納（インスタンスメソッド）、静的メソッドはコンストラクタ自体に付与。
15. コンストラクタがオブジェクトを返せばそれが結果、プリミティブを返しても無視され通常のインスタンスが返る。
16. `extends`はサブクラスの`[[Prototype]]`を親に、`prototype`のチェーンも接続して継承を形成。
17. サブクラス`constructor`内で`this`を使う前に`super()`が必須。呼ばないとReferenceError。
18. `super.method()`は`this`を呼び出し元のインスタンスに束縛したまま親の実装を呼ぶ。
19. 静的メソッドはクラス自身に関わる処理（ユーティリティ等）、インスタンスメソッドは個々の状態を扱う処理。
20. `#field`はクラス内のみアクセス可で、外部からは参照・反射で見られない（同クラス定義内でのみ有効）。
21. `get`/`set`を`class`やリテラルで定義して計算プロパティ・検証・キャッシュなどを行う。
22. メソッド参照をコールバックに渡すと`this`が外れる。`bind`/アロー/ラッパーで保持する。
23. `instanceof`は`right.prototype`が左のプロトチェーンにあるかを判定。`Symbol.hasInstance`でカスタム可能。
24. プロトタイプを書き換えると既存インスタンスに影響する利点があるが、予期せぬ衝突や最適化阻害のリスク。
25. `for...in`は継承プロパティも列挙するため、`hasOwnProperty`/`Object.hasOwn`でフィルタするか`Object.keys`を使う。
26. `freeze`はプロパティ追加/変更/削除不可（ネストはそのまま）。`seal`は追加/削除不可だが既存は書き換え可能。
27. `Object.getOwnPropertySymbols`や`Reflect.ownKeys`でシンボルを列挙。シンボルは衝突回避や非列挙化に有用。
28. `toString`/`valueOf`の上書きでログを読みやすくしたり、数値化ロジックを調整できる。過度に複雑化しない。
29. ビルトイン継承時は`super()`を呼び、内部スロット初期化を忘れない。組み込みは特殊処理があるため注意。
30. グローバル汚染やプロトタイプ拡張を避け、明示的なAPI設計・不変データを活用する。
