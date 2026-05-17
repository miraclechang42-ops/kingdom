gdjs._26126_20142Code = {};
gdjs._26126_20142Code.localVariables = [];
gdjs._26126_20142Code.idToCallbackMap = new Map();
gdjs._26126_20142Code.GDNewSpriteObjects1= [];
gdjs._26126_20142Code.GDNewSpriteObjects2= [];
gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1= [];
gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects2= [];
gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1= [];
gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects2= [];
gdjs._26126_20142Code.GD_9535657_9526360Objects1= [];
gdjs._26126_20142Code.GD_9535657_9526360Objects2= [];
gdjs._26126_20142Code.GDNewSprite2Objects1= [];
gdjs._26126_20142Code.GDNewSprite2Objects2= [];


gdjs._26126_20142Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("開始遊戲"), gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1.length;i<l;++i) {
    if ( gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1[k] = gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1[i];
        ++k;
    }
}
gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "開端");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("設計資訊"), gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1.length;i<l;++i) {
    if ( gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1[k] = gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1[i];
        ++k;
    }
}
gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "設計資訊");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("證書"), gdjs._26126_20142Code.GD_9535657_9526360Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26126_20142Code.GD_9535657_9526360Objects1.length;i<l;++i) {
    if ( gdjs._26126_20142Code.GD_9535657_9526360Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._26126_20142Code.GD_9535657_9526360Objects1[k] = gdjs._26126_20142Code.GD_9535657_9526360Objects1[i];
        ++k;
    }
}
gdjs._26126_20142Code.GD_9535657_9526360Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "證書");
}
}

}


};

gdjs._26126_20142Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26126_20142Code.GDNewSpriteObjects1.length = 0;
gdjs._26126_20142Code.GDNewSpriteObjects2.length = 0;
gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1.length = 0;
gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects2.length = 0;
gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1.length = 0;
gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects2.length = 0;
gdjs._26126_20142Code.GD_9535657_9526360Objects1.length = 0;
gdjs._26126_20142Code.GD_9535657_9526360Objects2.length = 0;
gdjs._26126_20142Code.GDNewSprite2Objects1.length = 0;
gdjs._26126_20142Code.GDNewSprite2Objects2.length = 0;

gdjs._26126_20142Code.eventsList0(runtimeScene);
gdjs._26126_20142Code.GDNewSpriteObjects1.length = 0;
gdjs._26126_20142Code.GDNewSpriteObjects2.length = 0;
gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects1.length = 0;
gdjs._26126_20142Code.GD_9538283_9522987_9536938_9525138Objects2.length = 0;
gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects1.length = 0;
gdjs._26126_20142Code.GD_9535373_9535336_9536039_9535338Objects2.length = 0;
gdjs._26126_20142Code.GD_9535657_9526360Objects1.length = 0;
gdjs._26126_20142Code.GD_9535657_9526360Objects2.length = 0;
gdjs._26126_20142Code.GDNewSprite2Objects1.length = 0;
gdjs._26126_20142Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['_26126_20142Code'] = gdjs._26126_20142Code;
