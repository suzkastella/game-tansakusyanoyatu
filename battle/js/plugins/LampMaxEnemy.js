//============================================================================
// LampMaxEnemy.js
//============================================================================

/*:ja
 * @plugindesc ver1.05 敵の基本能力値のみ限界突破させます。
 * @author まっつＵＰ
 *
 * @param mmpMin
 * @desc mmpの最低値です。
 * @default 0
 *
 * @param paramsMin
 * @desc mmp以外の基本能力値の最低値です。
 * @default 1
 *
 * @param mhpMax
 * @desc mhpの最大値です。
 * @default 999999
 *
 * @param mmpMax
 * @desc mmpの最大値です。
 * @default 9999
 *
 * @param paramsMax
 * @desc mhpとmmp以外の基本能力値の最高値です。
 * @default 999
 *
 * @help
 *
 * RPGで笑顔を・・・
 *
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 *
 * 敵キャラのノートタグ
 *
 * paramIdは基本能力値のID
 * <LMEparamId:value>
 * <LMEEXP:value>
 * <LMEGOLD:value>
 *
 * 例：atkを100にする。
 * <LME2:100>
 *
 * 例：mhpを99999999にする。
 * <LME0:99999999>
 *
 * 例：所持経験値を900にする。
 * <LMEEXP:900>
 *
 * 例：所持金を-100にする。
 * <LMEGOLD:-100>
 *
 * ver1.05 データ変更処理の変更、経験値とゴールドの処理追加
 *
 * 利用規約(2019/9/7変更)：
 * この作品は マテリアル・コモンズ・ブルー・ライセンスの下に提供されています。
 * https://materialcommons.tk/mtcm-b-summary/
 * クレジット表示：まっつＵＰ
 *
 */

(function() {

var parameters = PluginManager.parameters('LampMaxEnemy');
var LMEmmpMin = Number(parameters['mmpMin'] || 0);
var LMEparamsMin = Number(parameters['paramsMin'] || 1);
var LMEmhpMax = Number(parameters['mhpMax'] || 999999);
var LMEmmpMax = Number(parameters['mmpMax'] || 9999);
var LMEparamsMax = Number(parameters['paramsMax'] || 999);

DataManager.LMforceParam = function(enemy) {
    if(!enemy) return;
    var str;
    var num;
    for(var i = 0; i < enemy.params.length; i++){
        str = 'LME' + i;
        num = Number(enemy.meta[str] || 0);
        if(num) enemy.params[i] = num;
    }
    num = Number(enemy.meta['LMEEXP'] || 0);
    if(num) enemy.exp = num;
    num = Number(enemy.meta['LMEGOLD'] || 0);
    if(num) enemy.gold = num;
};

var _BattleManager_displayExp = BattleManager.displayExp;
BattleManager.displayExp = function() {
    var exp = this._rewards.exp;
    if(exp <= 0 && !$gameTroop.noneexp()){
        var text = TextManager.obtainExp.format(exp, TextManager.exp);
        $gameMessage.add('\\.' + text);
    }
    _BattleManager_displayExp.call(this);
};

var _BattleManager_displayGold = BattleManager.displayGold;
BattleManager.displayGold = function() {
    var gold = this._rewards.gold;
    if(gold <= 0 && !$gameTroop.nonegold()){
        $gameMessage.add('\\.' + TextManager.obtainGold.format(gold));
    }
    _BattleManager_displayGold.call(this);
};

var _Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
    _Game_Temp_initialize.call(this);
    $dataEnemies.forEach(function(enemy){
        DataManager.LMforceParam(enemy);
    });
};

//オーバーライド
Game_Enemy.prototype.paramMin = function(paramId) {
    if (paramId === 1) {
        return LMEmmpMin;
    } else {
        return LMEparamsMin;
    }
};

//オーバーライド
Game_Enemy.prototype.paramMax = function(paramId) {
    if (paramId === 0) {
        return LMEmhpMax;
    } else if (paramId === 1) {
        return LMEmmpMax;
    } else {
        return LMEparamsMax;
    }
};

Game_Troop.prototype.noneexp = function() {
    return this.deadMembers().every(function(member){
        return member.exp() === 0;
    });
};

Game_Troop.prototype.nonegold = function() {
    return this.deadMembers().every(function(member){
        return member.gold() === 0;
    });
};

})();
