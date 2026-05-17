gdjs._20027_30059_38754Code = {};
gdjs._20027_30059_38754Code.localVariables = [];
gdjs._20027_30059_38754Code.idToCallbackMap = new Map();
gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1= [];
gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects2= [];
gdjs._20027_30059_38754Code.GDNewSpriteObjects1= [];
gdjs._20027_30059_38754Code.GDNewSpriteObjects2= [];
gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1= [];
gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects2= [];


gdjs._20027_30059_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("開始遊戲"), gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1.length;i<l;++i) {
    if ( gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1[k] = gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1[i];
        ++k;
    }
}
gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "開端", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("設計資訊"), gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1.length;i<l;++i) {
    if ( gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1[k] = gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1[i];
        ++k;
    }
}
gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "設計資訊", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Audio Library 音樂庫 免費背景音樂下載 歌名 Pooka 作者 Kevin MacLeod  Cinematic 電影配樂  - Audio Library 音樂庫 無版權配樂 免費背景音樂下載 (youtube).mp3", 1, true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._20027_30059_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1.length = 0;
gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects2.length = 0;
gdjs._20027_30059_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._20027_30059_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1.length = 0;
gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects2.length = 0;

gdjs._20027_30059_38754Code.eventsList0(runtimeScene);
gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects1.length = 0;
gdjs._20027_30059_38754Code.GD_9538283_9522987_9536938_9525138Objects2.length = 0;
gdjs._20027_30059_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._20027_30059_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects1.length = 0;
gdjs._20027_30059_38754Code.GD_9535373_9535336_9536039_9535338Objects2.length = 0;


return;

}

gdjs['_20027_30059_38754Code'] = gdjs._20027_30059_38754Code;
