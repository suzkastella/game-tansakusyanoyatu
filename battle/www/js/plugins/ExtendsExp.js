//=============================================================================
// ExtendsExp.js
// Copyright (c) 2017 Jiro
// http://ashelter.blog.fc2.com
//=============================================================================

/*:ja
 * @plugindesc レベル99以上のレベルアップに必要な経験値の計算をするプラグイン ver1.1
 * @author 次郎
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 */

(function() {
	Game_Actor.prototype.nextRequiredExp = function() {
		var expConstant = 500;
		var expPlus = 1.0 + this._level / 100;
		var expFinal = expConstant * expPlus;
		return Math.ceil(this._level * expFinal + expFinal);
	};

})();