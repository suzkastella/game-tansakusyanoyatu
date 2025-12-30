
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
// EnemyAttackAnimation.js Ver.1.0.0
// MIT License (C) 2022 あわやまたな
// http://opensource.org/licenses/mit-license.php

/*:
* @target MZ MV
* @plugindesc Set the enemy's normal attack animation.
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/
* @help If you set the skill animation to [Normal Attack],
* you can set the enemy animation.
*
* @param defaultAnimationId
* @text Default AnimationIdID
* @desc Animation ID when nothing is set.
* If you set this to "None", it will be a system sound effect [Enemy attack].
* @type animation
* @default 1
*
* @param enemyList
* @text Enemy List
* @desc Set a combination of enemies and animations.
* @type struct<enemy>[]
*
*/

/*:ja
* @target MZ MV
* @plugindesc 敵キャラの通常攻撃アニメーションを設定します。
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/
* @help スキルのアニメーションを［通常攻撃］にした場合の敵キャラの
* アニメーションを設定できます。
*
* [更新履歴]
* 2022/06/13：Ver.1.0.0　公開
*
* @param defaultAnimationId
* @text デフォルトアニメーションID
* @desc 何も設定していない時のアニメーションIDです。
* 「なし」にするとシステム効果音［敵攻撃］になります。
* @type animation
* @default 1
*
* @param enemyList
* @text 敵キャラリスト
* @desc 敵キャラとアニメーションの組み合わせを設定します。
* @type struct<enemy>[]
*
*/

/*~struct~enemy:
*
* @param enemyId
* @text Enemy ID
* @type enemy
* @default 1
*
* @param animationId
* @text Animation ID
* @desc If you set this to "None", it will be a system sound effect [Enemy attack].
* @type animation
*
*/

/*~struct~enemy:ja
*
* @param enemyId
* @text 敵キャラID
* @type enemy
* @default 1
*
* @param animationId
* @text アニメーションID
* @desc 「なし」にするとシステム効果音［敵攻撃］になります。
* @type animation
*
*/

'use strict';

{
	const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
	const parameter = PluginManager.parameters(pluginName);

	const defaultAnimationId = Number(parameter["defaultAnimationId"]);
	const enemyList = (JSON.parse(parameter["enemyList"]|| "[]")).map(JSON.parse);;
	const animationList = [];
	enemyList.forEach(item => animationList[Number(item.enemyId || 0)] = Number(item.animationId || 0));

	//-----------------------------------------------------------------------------
	// Game_Enemy

	Game_Enemy.prototype.attackAnimationId1 = function() {
		const animationId = animationList[this._enemyId];
	    return animationId === undefined ? defaultAnimationId : animationId;
	};

	//-----------------------------------------------------------------------------
	// Window_BattleLog

	const _Window_BattleLog_showEnemyAttackAnimation = Window_BattleLog.prototype.showEnemyAttackAnimation;
	Window_BattleLog.prototype.showEnemyAttackAnimation = function(subject, targets) {
		const animationId = subject.attackAnimationId1();
		if (animationId > 0) {
			this.showNormalAnimation(targets, animationId);
		} else {
			_Window_BattleLog_showEnemyAttackAnimation.call(this, subject, targets);
		}
	};

}
