/*:ja
 * @plugindesc v1.30 ゲーム内やアイテムシーン内でのアイテムの処理を変更します
 * @author Yanfly Engine Plugins
 *
 * @param ---一般---
 * @default
 *
 * @param Max Items
 * @parent ---一般---
 * @type number
 * @min 0
 * @desc アイテムの最大値を指定します。0にすると個別アイテムが無効になります。
 * @default 0
 *
 * @param Max Weapons
 * @parent ---一般---
 * @type number
 * @min 0
 * @desc 武器の最大値を指定します。0にすると個別武器が無効になります。
 * @default 100
 *
 * @param Max Armors
 * @parent ---一般---
 * @type number
 * @min 0
 * @desc 防具の最大値を指定します。0にすると個別防具が無効になります。
 * @default 100
 *
 * @param Starting ID
 * @parent ---一般---
 * @type number
 * @min 1
 * @desc 個別アイテムの適用を始めるIDを指定します。デフォルトアイテムとの干渉を防ぎます。
 * @default 3000
 *
 * @param Random Variance
 * @parent ---一般---
 * @type number
 * @desc ショップ以外で手に入れたアイテムに対して、この値の範囲内でランダム値を付与します(増減)。0にすると無効になります。
 * @default 0
 *
 * @param Negative Variance
 * @parent ---一般---
 * @type boolean
 * @on 許可
 * @off 禁止
 * @desc Random Varianceを使った場合ランダム値の数値を0以下にすることを許可しますか？
 * 禁止 - false     許可 - true
 * @default false
 *
 * @param Name Format
 * @parent ---一般---
 * @desc アイテム名がどのように構成されるかを指定します。
 * %1 - 接頭辞, %2 - ベース名, %3 - 接尾辞, %4 - 増減値
 * @default %1%2%3%4
 *
 * @param Name Spacing
 * @parent ---一般---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 接頭辞と接尾辞の間にスペースを挿入します。
 * NO - false     YES - true
 * @default true
 *
 * @param Boost Format
 * @parent ---一般---
 * @desc 個別アイテムの増減値の表し方を指定します
 * %1 - 増減値
 * @default (+%1)
 *
 * @param ---アイテムシーン---
 * @default
 *
 * @param Updated Scene Item
 * @parent ---アイテムシーン---
 * @type boolean
 * @on 変更 (おすすめ)
 * @off ノーマル
 * @desc アイテムシーンでの見た目を変更します。
 * ノーマル - false     変更 - true (おすすめ)
 * @default true
 *
 * @param List Equipped Items
 * @parent ---アイテムシーン---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 装備された個別アイテムをアイテムリスト表示するか選択します。
 * NO - false     YES - true
 * @default true
 *
 * @param Show Icon
 * @parent ---アイテムシーン---
 * @type boolean
 * @on YES
 * @off NO
 * @desc ステータスウィンドウ内にアイコンを表示します。
 * NO - false     YES - true
 * @default true
 *
 * @param Icon Size
 * @parent ---アイテムシーン---
 * @type number
 * @min 0
 * @desc アイコンの縦横のサイズを変更します。通常は、デフォルトサイズの4倍です
 * @default 128
 *
 * @param Font Size
 * @parent ---アイテムシーン---
 * @type number
 * @min 1
 * @desc 詳細のフォントサイズを変更します
 * Default: 28
 * @default 20
 *
 * @param Command Alignment
 * @parent ---アイテムシーン---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc コマンドウィンドウでのテキストの揃え方を指定します。
 * left   center   right
 * @default center
 *
 * @param Recovery Format
 * @parent ---アイテムシーン---
 * @desc HP/MP回復のテキスト形式を指定します。
 * @default %1 回復
 *
 * @param Add State
 * @parent ---アイテムシーン---
 * @desc ステータス追加時のテキスト形式を指定します。
 * @default +State
 *
 * @param Add Buff
 * @parent ---アイテムシーン---
 * @desc バフ追加時のテキスト形式を指定します。
 * @default +Buff
 *
 * @param Remove State
 * @parent ---アイテムシーン---
 * @desc ステータス減少時のテキスト形式を指定します。
 * @default -State
 *
 * @param Remove Buff
 * @parent ---アイテムシーン---
 * @desc バフ解除時のテキスト形式を指定します。
 * @default -Buff
 *
 * @param Maximum Icons
 * @parent ---アイテムシーン---
 * @type number
 * @min 0
 * @desc ステータスとバフに描写されるアイコンの最大数を決定します。
 * @default 4
 *
 * @param Use Command
 * @parent ---アイテムシーン---
 * @desc 選択したアイテムを使う際のコマンドテキストを指定します。
 * %1 - アイテムアイコンと名前
 * @default %1 を使う
 *
 * @param Carry Format
 * @parent ---アイテムシーン---
 * @desc 個別アイテムのIDに対するテキスト形式を指定します。
 * %1 - アイテムインデックス     %2 - 最大値
 * @default %1/%2
 *
 * @param --Independent Items--
 * @default
 *
 * @param Midgame Note Parsing
 * @parent ---Independent Items---
 * @type boolean
 * @on ゲーム中
 * @off 開始時(おすすめ)
 * @desc ノート解析をゲームの最中に行わせますか？
 * 開始時(おすすめ) - false     ゲーム中 - true
 * @default false
 *
 * @help
 * 翻訳:ムノクラ
 * https://munokura.tk/
 * https://twitter.com/munokura/
 *
 * ============================================================================
 * Introduction
 * ============================================================================
 * このプラグインは、ゲームそのもの、
 * そしてゲーム内でのアイテムの扱われ方にいくつかの変更を行います。
 *
 * 1.個別アイテム
 * アイテム・武器・防具などに上限値を設定した場合、各アイテムは独立した
 * アイテムとして扱われ、個別にステータスを持たせて管理することができます。
 * このステータスはアップグレードしたり、変更、修正などを行うことも可能で、
 * 変更後も元の特性を保持し、別個のアイテムとして管理することができます。
 * 上限設定のないアイテム(0指定)は、デフォルトアイテムと同様の扱いとなります
 * 
 * 2.新しいアイテム画面
 * アイテム画面の表示方法についても、変更されています。
 * 新しいレイアウトでは、アイテムのリストは2列ではなく1列で構成されています。
 * 「アイテムステータスウィンドウ」(アイテムの基本性能表示)や、
 * 「アイテムインフォメーションウィンドウ」(アップグレードの反映情報などを表示)
 * が追加されています。
 * また、アイテムを選択した際にどんなアクションを取りたいか
 * (使用する、アップグレードするなど。その他プラグインから追加も可能)を尋ねる、
 * 「アイテムアクションウィンドウ」も追加されています。
 *
 * 3.ランダムな値の付与
 * ショップからの購入アイテムを除き、新たに取得したアイテムには、
 * ランダムな値を付与することができます。
 * アイテムのパラメータを、ランダムに標準値から増減させることができます。
 * 不要な場合は、notetagの”Varience value”を0にすることで、無効化できます。
 * もしすべてのアイテムでこの設定を無効化したい場合は、
 * パラメータを0にすることで設定することもできます。
 * 
 * 注:バトルテスト時には、上記の個別アイテム機能は無効になります。
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * 個別アイテムのパラメータにはランダムな値が付与されます。
 * (ショップ購入アイテムを除く)
 *
 * アイテム、武器、防具のNotetag
 *   <Random Variance: x>
 *   そのアイテムがショップ購入アイテムでない場合、
 *   正負 x の範囲内で、性能値がランダムに増減します。
 *
 *   <Not Independent item>
 *   デフォルトの個別アイテムを、非個別アイテムに変換します。
 *   これにより、個別アイテムに対する処理の影響を受けなくなります。
 *
 *   <Priority Name>
 *    アイテム、武器や防具のプライオリティネーム(優先度の高い名称)を、
 *    データベース上での見出し名に設定します。
 *    これにより、ネームスキームがアイテムに影響することがなくなります。
 *
 *   <Text Color: x>
 *   ウインドウスキンで設定したテキストカラー ｘ をこのアイテム、武器や防具の
 *   テキストカラーに設定します。
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * 上記のランダム値の適用無しで、アイテムをインベントリに追加させたい場合は、
 * 下記のプラグインコマンドを用いてください。
 *
 * <プラグインコマンド>
 *   EnableVarianceStock  - これより先のポイントで得られた全てのアイテムには
 *                          標準の値を付与します。
 *   DisableVarianceStock - これより先のポイントで得られた全てのアイテムには
 *                          ランダムな値を付与します。
 *
 * 標準値を有効にしても、プレイヤーがタイトル画面からゲームをリスタートしたり
 * プログラムを再起動したりすると、再びランダム値が適用されるようになります。
 * このプラグインコマンドは、一時的なコマンドであることに注意してください。
 *
 * ============================================================================
 * Eventing Changes
 * ============================================================================
 *
 * 個別アイテムのシステムを最適化させるために、
 * イベント生成においてもいくつかの変更が成されています。
 *
 *・イベントページの条件と条件分岐
 *   システムは、アイテムがパーティインベントリ内に存在するか確認することで
 * そのアイテムが個別アイテムとして扱えるか否かを判断します。
 * もしそのアイテムがアップグレード済だったとしても、
 * アップグレード前のベースアイテム名と照合して、条件分岐を行います。
 * 例）アップグレード済の”長剣(+1)”を持っていても、
 *     イベントエディタのターゲットである”長剣”と照合し、
 *    「”長剣”を持っている」という条件を満たしているとみなします。
 * 
 *・アクターの装備の条件
 *   前述の条件分岐と同様に、アクターの所持装備がアップグレード済であっても、
 * 「装備 x を所持している」という条件を満たしているものとみなされます。
 * 例）アクターがアップグレード済の”長剣(+1)”を持っていても、
 *    「アクターが”長剣”を持っている」という条件を満たしているとみなします。
 *
 * ・装備変更
 *   ターゲットとなる装備が個別装備だった場合、ゲームは最初に、
 * 「合致するベースアイテムをアクターが持っているかどうか」を確認します。
 * 持っていない場合、今度は「合致するベースアイテムをパーティが持っているか」
 * を確認し、持っていた場合はそれを使用します。
 * そこでも持っていなかった場合は、ゲームは新規で標準値のアイテムを作成し
 * それをアクターに装備させます。
 *
 * ============================================================================
 * Item Name System
 * ============================================================================
 *
 * 個別アイテムの名前は以下の4つのパートで構成されています。
 *
 *  Prefix(接頭辞)  Base Name(ベース名)  Suffix(接尾辞)  Boost Count(増加値)
 * 
 * 上記の4つはプラグインによって調整されます。
 * 適用されるエフェクトによって、それぞれを入れ替えたり変更することも可能です。
 * 例）'Fiery'という接頭辞 + 'Sword'というベースネーム + 'of Might'という接尾辞
 *      + '5' の増加値で構成されたアイテムは、以下のように表示されます。
 *
 *      Fiery Sword of Might (+5)
 *
 * このアイテムは、その名称の各パーツが何らかの形で変更された場合のみ現れます。
 * 
 * また、他にも第5の命名規則(プライオリティネーム)があり、
 * 名称としてはそちらが優先されることに気を付けてください。
 * このプライオリティネームは、現在のネームスキームを完全に上書きしてしまいます。
 * 上記のように、アイテム名を 'Fiery Sword of Might (+5)'としたとしても、
 * そのプライオリティネームが別の名前だった場合は、そちらが優先されてしまいます。
 *
 * ============================================================================
 * Lunatic Mode - On Independent Item Creation
 * ============================================================================
 *
 * Lunatic ModeでJavaScriptを使うことで、アイテム作成時に
 * コードを実行する事が出来ます。新しく作った個別アイテムに限ります。
 * 
 * アイテム, 武器, 防具
 * 
 *   <On Creation Eval>
 *    item.price = baseItem.price;
 *    item.price += Math.floor(Random() * 100);
 *   </On Creation Eval>
 *   ここで書かれてる「item」は作成されている個別アイテムを指しています。
 *   「baseItem」はベースアイテムのことです。「item」に変更があった場合、
 *   個別アイテムにも同じ変更が実行されます。
 *
 * ============================================================================
 * Lunatic Mode - Custom Info Window Display
 * ============================================================================
 *
 * 端にあるインフォウインドウにオリジナルコンテンツを追加したい場合は
 * 以下のノートタグを使用してください。
 *
 *   <Info Text Top>
 *    text
 *    text
 *   </Info Text Top>
 *   アイテムインフォウインドウに足したい情報をここに書いてください。
 *   好きなテキストをご自由に記載することができます。
 *   テキストコードを使う事も出来ます。ここに書かれてる情報は
 *   ウインドウの上部に表示されます。
 *
 *   <Info Text Bottom>
 *    text
 *    text
 *   </Info Text Bottom>
 *   アイテムインフォウインドウに足したい情報をここに書いてください。
 *   好きなテキストをご自由に記載することができます。
 *   テキストコードを使う事も出来ます。ここに書かれてる情報は
 *   ウインドウの下部に表示されます。
 *
 *   <Info Eval>
 *    var variableId = 1;
 *    var value = 500;
 *    $gameVariables.setValue(variableId, value);
 *   </Info Eval>
 *   JavaScriptが書ける方はこちらのノートタグを使って、新しい情報を
 *   表示する前にJavaScriptを実行する事が出来ます。これを使う事に
 *   よって、テキストコードなどで数値を表示するつもりでいれば、
 *   表示する前にデータベースから新しい情報を引っ張ってきて、最新の
 *   情報を表示する事が出来ます。
 *
 * ============================================================================
 * Independent Items and Midgame Note Parsing
 * ============================================================================
 *
 * 追加した「Midgame Note Parsing」オプションは、他のプラグインで、開始時に
 * ノートタグを解析させるのではなく、途中で行っているようなプラグインのために
 * 追加されてます。
 * 
 * 自己責任でのご使用をお願いいたします。理由としては、これをオンにする事に
 * よって個別アイテムもノートデータを残すので、ファイルや保存データが大きく
 * なり、下手をしたらゲームのラグを生じさせてしまう恐れがあるからです。
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.30:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.29:
 * - Updated for RPG Maker MV version 1.6.0:
 *   Removal of the destructive code in Scene_Item.update function.
 *
 * Version 1.28:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.27:
 * - Compatibility update for future plugins.
 *
 * Version 1.26:
 * - Lunatic Mode fail safes added.
 *
 * Version 1.25:
 * - Optimization Update
 *
 * Version 1.24a:
 * - Fixed a typo within the code. Please update Item Core, Item Disassemble,
 * Attachable Augments, and More Currencies if you are using those plugins.
 * - Random variance is now disabled from fresh plugin installation by default.
 *
 * Version 1.23:
 * - Fixed an issue custom info text when using different font sizes.
 *
 * Version 1.22:
 * - Fixed a removal bug that caused weapon and armor ID's to clash.
 *
 * Version 1.21:
 * - Fixed an error with sorting algorithm when items have the same base ID.
 *
 * Version 1.20:
 * - Added <On Creation Eval> Lunatic Mode notetag. Read the help file for more
 * information about it.
 *
 * Version 1.19:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.18a:
 * - Added 'Midgame Note Parsing' plugin parameter.
 * - Fixed a visual error with MP recovery displaying a 0 instead of ---.
 *
 * Version 1.17:
 * - Added <Text Color: x> notetag for items, weapons, and armors.
 *
 * Version 1.16:
 * - Fixed a bug that made mid-game actor initialization not display items
 * correctly in the item menu.
 *
 * Version 1.15:
 * - Fixed a bug with independent items getting values that crash the game.
 *
 * Version 1.14:
 * - Fixed an unintended function of the game not granting a piece of equipment
 * through events.
 *
 * Version 1.13:
 * - Fixed a bug that didn't unequip items properly.
 *
 * Version 1.12:
 * - Added 'Negative Variance' parameter.
 *
 * Version 1.11:
 * - Fixed a bug that caused random variance to not calculate correctly.
 * - Fixed a bug that didn't return the correct conditional branch results.
 * - Fixed the display in the shop window to show number of independent items
 * owned by the player rather than just 0.
 *
 * Version 1.10:
 * - Added Lunatic Mode - Custom Info Window Display.
 *
 * Version 1.09:
 * - Fixed a bug with evented item removal that didn't remove equipped items if
 * the 'Include Equipment' checkbox was checked.
 *
 * Version 1.08:
 * - Fixed a bug with the Control Variable event that would not gather the
 * right amount of independent items.
 *
 * Version 1.07:
 * - Fixed a bug with the Change Equipment event where armors wouldn't equip.
 *
 * Version 1.06:
 * - Fixed a bug and rewrote the initializing equipment process.
 *
 * Version 1.05:
 * - Compatibility update with ItemBook.
 *
 * Version 1.04:
 * - Added 'List Equipped Items' parameter to allow for equipment restricted
 * actors to be able to alt their equipment.
 *
 * Version 1.03:
 * - Fixed a bug where using events to remove independent items weren't working
 * properly and instead added more items.
 * - Fixed a bug where a Random Variance of 0 still gave random stats.
 *
 * Version 1.02:
 * - Fixed a bug where initializing equipment slots didn't work properly and/or
 * added incorrect equips from the wrong actors into the inventory.
 *
 * Version 1.01:
 * - Fixed bug where if you are using no independent pieces of equipment,
 * actors would fail to start with initial equipment.
 *
 * Version 1.00:
 * - Finished plugin!
 */