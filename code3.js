gdjs._23805_35895Code = {};
gdjs._23805_35895Code.localVariables = [];
gdjs._23805_35895Code.idToCallbackMap = new Map();
gdjs._23805_35895Code.GDNewSpriteObjects1= [];
gdjs._23805_35895Code.GDNewSpriteObjects2= [];
gdjs._23805_35895Code.GDNewSprite2Objects1= [];
gdjs._23805_35895Code.GDNewSprite2Objects2= [];
gdjs._23805_35895Code.GDNewSprite3Objects1= [];
gdjs._23805_35895Code.GDNewSprite3Objects2= [];
gdjs._23805_35895Code.GDNewSprite4Objects1= [];
gdjs._23805_35895Code.GDNewSprite4Objects2= [];
gdjs._23805_35895Code.GD_9520998_9525976Objects1= [];
gdjs._23805_35895Code.GD_9520998_9525976Objects2= [];
gdjs._23805_35895Code.GDNewSprite5Objects1= [];
gdjs._23805_35895Code.GDNewSprite5Objects2= [];


gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._23805_35895Code.GDNewSprite4Objects1});
gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._23805_35895Code.GDNewSprite2Objects1});
gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._23805_35895Code.GDNewSprite4Objects1});
gdjs._23805_35895Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._23805_35895Code.GDNewSprite5Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "item");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite5Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "item") >= 1.5;
if (isConditionTrue_0) {
gdjs._23805_35895Code.GDNewSprite4Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite4Objects1Objects, gdjs.randomInRange(50, 1000), -(50), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "item");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._23805_35895Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._23805_35895Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite2Objects1Objects, gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._23805_35895Code.GDNewSprite4Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(10);
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("分數"), gdjs._23805_35895Code.GD_9520998_9525976Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GD_9520998_9525976Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GD_9520998_9525976Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "time") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 60);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._23805_35895Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._23805_35895Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._23805_35895Code.GDNewSprite5Objects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "item");
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite2Objects1[i].activateBehavior("PlatformerObject", false);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs._23805_35895Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._23805_35895Code.GDNewSpriteObjects1.length = 0;
gdjs._23805_35895Code.GDNewSpriteObjects2.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects2.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects1.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects2.length = 0;

gdjs._23805_35895Code.eventsList0(runtimeScene);
gdjs._23805_35895Code.GDNewSpriteObjects1.length = 0;
gdjs._23805_35895Code.GDNewSpriteObjects2.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects2.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects1.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['_23805_35895Code'] = gdjs._23805_35895Code;
