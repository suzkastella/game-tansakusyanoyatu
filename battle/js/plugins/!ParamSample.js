// ============================================================================
// !ParamSample.js
// ----------------------------------------------------------------------------
// Copyright (c) 2017 DERIVE <derive.nobody.jp>
// This software is released under the WTFPL.
// wtfpl.net/copying
// ----------------------------------------------------------------------------
// Version
// 1.4.1 2018-01-17 型変換の処理例を更新
// 1.4.0 2017-09-01 text/value/on/off/note/common_event を追加, 他
// 1.3.3 2017-08-09 スクリプトの型変換に失敗するケースがあるバグを修正
// 1.3.2 2017-07-29 型変換の処理例を更新
// 1.3.1 2017-07-27 初期値の処理例を追加
// 1.3.0 2017-07-26 処理例を追加
// 1.2.0 2017-07-15 配列型/構造型/select/combo/option/decimals/parentを追加, 他
// 1.1.0 2017-06-25 min/maxを追加, ヘルプを更新
// 1.0.1 2017-06-23 ヘルプを更新
// 1.0.0 2017-06-22 初版
// ============================================================================

/*:
* @plugindesc 1.4.0 プラグイン開発者向けのサンプルプラグイン
* @author DERIVE
* @help
* ===========================================================================
* ## 確認バージョン
* RPGツクールMV 1.5.0
*
* ## サンプルについて
* 公式ヘルプには明記されていないタグを含みます。
* ヘルプに明記されているタイプは file と animation のみです。
* 動作の保証、更新の保証はありません。
*
* ## データ型について
* 従来通り、値はすべて文字列として保存されます。
* false の扱いに注意してください。
*
* ## タグの一覧
* コメントブロック内に記述できるタグの一覧です。
* この他のファイル使用に関するタグについては公式ヘルプを参照してください。
* (資料集 > 未使用ファイル削除ツール プラグインへの対応)
*
* | タグ | 備考
* |------------|-------------------------------------------------------------
* | plugindesc | プラグインの情報
* | author | プラグインの作者名
* | help | プラグインのヘルプ
* | param | パラメータの名前
* | desc | パラメータの情報
* | default | パラメータの初期値
* | text | パラメータの表示名
* | type | パラメータのタイプ, 値は後述
* | parent | パラメータの親パラメータ
* | min | type number の最小値
* | max | type number の最大値
* | decimals | type number の小数の桁数
* | on | type boolean の ON ラベル
* | off | type boolean の OFF ラベル
* | require | type file/animation のファイル使用宣言
* | dir | type file の参照フォルダ
* | option | type select/combo の選択肢
* | value | type select の内部値
*
* ## タイプの一覧
*
* | タイプ | 備考
* |--------------|-----------------------------------------------------------
* | string | 文字列型
* | number | 数値型
* | boolean | 論理型
* | *[] | 配列型, 任意のタイプを配列にする
* | struct<*> | 構造型, 任意の構造体を参照する
* | file | ファイル
* | select | セレクトボックス
* | combo | コンボボックス
* | note | ノート
* | variable | 変数
* | switch | スイッチ
* | actor | アクター
* | class | 職業
* | skill | スキル
* | item | アイテム
* | weapon | 武器
* | armor | 防具
* | enemy | 敵キャラ
* | troop | 敵グループ
* | state | ステート
* | animation | アニメーション
* | tileset | タイルセット
* | common_event | コモンイベント
*
* ## number について
* 通常は自然数のみ扱います。
* 　　min/max の最小値/最大値は片方のみの指定も可能です。
* 　　min で指定範囲までのマイナス値を扱えるようになります。
* 　　max をマイナス値にする場合は min もマイナス値にしてください。
* 　　decimals で指定桁の小数を扱えるようになります。
* number で扱える値
* 　最小値: -9,007,199,254,740,992 (-2^53)
* 　最大値: 9,007,199,254,740,992 (2^53)
* JavaScript で安全に扱える値
* 　最小値: -9,007,199,254,740,991 (-2^53-1)
* 　最大値: 9,007,199,254,740,991 (2^53-1)
* 安全な値に整形する場合は Number.clamp() を使用してください。
*
* ## file について
* dir 以下のファイルパスまたはフォルダパスを取得します。拡張子は含みません。
* 未使用ファイルの処理に対応するには require を使用してください。
* img, audio 以下の子フォルダは新規フォルダを参照できます。
* img, audio 意外の親フォルダは参照できません。
*
* ===========================================================================
* @param dataType
* @text データ型
*
* @param string
* @text 文字列型
* @type string
* @default sample
* @parent dataType
*
* @param number
* @text 数値型
* @type number
* @min -9007
* @max 9007
* @decimals 2
* @default 0.01
* @parent dataType
*
* @param boolean
* @text 論理型
* @type boolean
* @on ON
* @off OFF
* @default false
* @parent dataType
*
* @param array
* @text 配列型
* @type string[]
* @default ["sample", "0", "false"]
* @parent dataType
*
* @param struct
* @text 構造型
* @type struct<struct1>
* @default {"param1":"window.innerWidth","param2":"window.innerHeight"}
* @parent dataType
*
* @param otherType
* @text 特殊なタイプ
*
* @param file
* @text ファイル
* @type file
* @require 1
* @default img/animations
* @parent otherType
*
* @param fileImg
* @text ファイル (親階層固定)
* @type file
* @require 1
* @dir img
* @default animations
* @parent otherType
*
* @param fileImgAnimations
* @text ファイル (子階層固定)
* @type file
* @require 1
* @dir img/animations
* @default
* @parent otherType
*
* @param select
* @text セレクトボックス
* @type select
* @option option1
* @value 1
* @option option2
* @value 2
* @default 1
* @parent otherType
*
* @param combo
* @text コンボボックス
* @type combo
* @option option1
* @option option2
* @default option1
* @parent otherType
*
* @param note
* @text ノート
* @type note
* @default "<meta1:sample1>n<meta2:sample2>"
* @parent otherType
*
* @param database
* @text データベースの参照
*
* @param variable
* @text 変数
* @type variable
* @default 0
* @parent database
*
* @param switch
* @text スイッチ
* @type switch
* @default 0
* @parent database
*
* @param actor
* @text アクター
* @type actor
* @default 0
* @parent database
*
* @param class
* @text 職業
* @type class
* @default 0
* @parent database
*
* @param skill
* @text スキル
* @type skill
* @default 0
* @parent database
*
* @param item
* @text アイテム
* @type item
* @default 0
* @parent database
*
* @param weapon
* @text 武器
* @type weapon
* @default 0
* @parent database
*
* @param armor
* @text 防具
* @type armor
* @default 0
* @parent database
*
* @param enemy
* @text 敵キャラ
* @type enemy
* @default 0
* @parent database
*
* @param troop
* @text 敵グループ
* @type troop
* @default 0
* @parent database
*
* @param state
* @text ステート
* @type state
* @default 0
* @parent database
*
* @param animation
* @text アニメーション
* @type animation
* @require 1
* @default 0
* @parent database
*
* @param tileset
* @text タイルセット
* @type tileset
* @default 0
* @parent database
*
* @param common_event
* @text コモンイベント
* @type common_event
* @default 0
* @parent database
*/

/*~struct~struct1:
* @param param1
* @default sample1
*
* @param param2
* @default sample2
*/

(function() {
'use strict';

if (!Utils.isOptionValid('test')) return;

// ========================================================================
// パラメータの型変換
// 　　値の型を自動で判定して変換します。入れ子対応。
// ========================================================================

var parameters = PluginManager.parameters('!ParamSample');

var param = JSON.parse(JSON.stringify(parameters, function(key, value) {
try {
return JSON.parse(value);
} catch (e) {
try {
return eval(value);
} catch (e) {
return value;
}
}
}));

param.array[0]; // => "sample"
param.struct.param1; // => 816

// ========================================================================
// パラメータの初期値
// 　　おまけ。記述量は減りますが処理時間は伸びます。
// ========================================================================

var example = {
'param1': 'value',
'param2': null
};

var _example = {
'param1': 'default',
'param2': 'default'
};

Object.keys(_example).forEach(function(key) {
if (example[key] === null) example[key] = _example[key];
});

example; // => Object { param1: "value", param2: "default" }

})();