gdjs._35657_26360Code = {};
gdjs._35657_26360Code.localVariables = [];
gdjs._35657_26360Code.idToCallbackMap = new Map();
gdjs._35657_26360Code.GDNewTextInputObjects1= [];
gdjs._35657_26360Code.GDNewTextInputObjects2= [];
gdjs._35657_26360Code.GDNewSpriteObjects1= [];
gdjs._35657_26360Code.GDNewSpriteObjects2= [];
gdjs._35657_26360Code.GDNewSprite2Objects1= [];
gdjs._35657_26360Code.GDNewSprite2Objects2= [];


gdjs._35657_26360Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35657_26360Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35657_26360Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._35657_26360Code.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35657_26360Code.GDNewSpriteObjects1[k] = gdjs._35657_26360Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._35657_26360Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "明亮");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "拿到證書.mp3", false, 100, 1);
}
}

}


};

gdjs._35657_26360Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._35657_26360Code.GDNewTextInputObjects1.length = 0;
gdjs._35657_26360Code.GDNewTextInputObjects2.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects1.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects2.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects1.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects2.length = 0;

gdjs._35657_26360Code.eventsList0(runtimeScene);
gdjs._35657_26360Code.GDNewTextInputObjects1.length = 0;
gdjs._35657_26360Code.GDNewTextInputObjects2.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects1.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects2.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects1.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['_35657_26360Code'] = gdjs._35657_26360Code;
