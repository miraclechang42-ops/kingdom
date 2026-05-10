gdjs._38283_31471Code = {};
gdjs._38283_31471Code.localVariables = [];
gdjs._38283_31471Code.idToCallbackMap = new Map();
gdjs._38283_31471Code.GDNewSprite2Objects1= [];
gdjs._38283_31471Code.GDNewSprite2Objects2= [];
gdjs._38283_31471Code.GDNewSprite3Objects1= [];
gdjs._38283_31471Code.GDNewSprite3Objects2= [];
gdjs._38283_31471Code.GD_95951Objects1= [];
gdjs._38283_31471Code.GD_95951Objects2= [];
gdjs._38283_31471Code.GD_95952Objects1= [];
gdjs._38283_31471Code.GD_95952Objects2= [];
gdjs._38283_31471Code.GD_95953Objects1= [];
gdjs._38283_31471Code.GD_95953Objects2= [];
gdjs._38283_31471Code.GDNewSpriteObjects1= [];
gdjs._38283_31471Code.GDNewSpriteObjects2= [];
gdjs._38283_31471Code.GDGreenButtonObjects1= [];
gdjs._38283_31471Code.GDGreenButtonObjects2= [];


gdjs._38283_31471Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._38283_31471Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._38283_31471Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._38283_31471Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._38283_31471Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GDGreenButtonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._38283_31471Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._38283_31471Code.GD_95951Objects1.length;i<l;++i) {
    if ( gdjs._38283_31471Code.GD_95951Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._38283_31471Code.GD_95951Objects1[k] = gdjs._38283_31471Code.GD_95951Objects1[i];
        ++k;
    }
}
gdjs._38283_31471Code.GD_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}
if (isConditionTrue_0) {
/* Reuse gdjs._38283_31471Code.GD_95951Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._38283_31471Code.GD_95952Objects1);
{for(var i = 0, len = gdjs._38283_31471Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_95952Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._38283_31471Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._38283_31471Code.GD_95952Objects1.length;i<l;++i) {
    if ( gdjs._38283_31471Code.GD_95952Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._38283_31471Code.GD_95952Objects1[k] = gdjs._38283_31471Code.GD_95952Objects1[i];
        ++k;
    }
}
gdjs._38283_31471Code.GD_95952Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._38283_31471Code.GD_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._38283_31471Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._38283_31471Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_95953Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._38283_31471Code.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._38283_31471Code.GD_95953Objects1.length;i<l;++i) {
    if ( gdjs._38283_31471Code.GD_95953Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._38283_31471Code.GD_95953Objects1[k] = gdjs._38283_31471Code.GD_95953Objects1[i];
        ++k;
    }
}
gdjs._38283_31471Code.GD_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._38283_31471Code.GDGreenButtonObjects1);
{for(var i = 0, len = gdjs._38283_31471Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GDGreenButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._38283_31471Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._38283_31471Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._38283_31471Code.GDGreenButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._38283_31471Code.GDGreenButtonObjects1[k] = gdjs._38283_31471Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._38283_31471Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._38283_31471Code.GD_95953Objects1);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "王宮");
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_95953Objects1[i].hide();
}
}
}

}


};

gdjs._38283_31471Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._38283_31471Code.GDNewSprite2Objects1.length = 0;
gdjs._38283_31471Code.GDNewSprite2Objects2.length = 0;
gdjs._38283_31471Code.GDNewSprite3Objects1.length = 0;
gdjs._38283_31471Code.GDNewSprite3Objects2.length = 0;
gdjs._38283_31471Code.GD_95951Objects1.length = 0;
gdjs._38283_31471Code.GD_95951Objects2.length = 0;
gdjs._38283_31471Code.GD_95952Objects1.length = 0;
gdjs._38283_31471Code.GD_95952Objects2.length = 0;
gdjs._38283_31471Code.GD_95953Objects1.length = 0;
gdjs._38283_31471Code.GD_95953Objects2.length = 0;
gdjs._38283_31471Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_31471Code.GDNewSpriteObjects2.length = 0;
gdjs._38283_31471Code.GDGreenButtonObjects1.length = 0;
gdjs._38283_31471Code.GDGreenButtonObjects2.length = 0;

gdjs._38283_31471Code.eventsList0(runtimeScene);
gdjs._38283_31471Code.GDNewSprite2Objects1.length = 0;
gdjs._38283_31471Code.GDNewSprite2Objects2.length = 0;
gdjs._38283_31471Code.GDNewSprite3Objects1.length = 0;
gdjs._38283_31471Code.GDNewSprite3Objects2.length = 0;
gdjs._38283_31471Code.GD_95951Objects1.length = 0;
gdjs._38283_31471Code.GD_95951Objects2.length = 0;
gdjs._38283_31471Code.GD_95952Objects1.length = 0;
gdjs._38283_31471Code.GD_95952Objects2.length = 0;
gdjs._38283_31471Code.GD_95953Objects1.length = 0;
gdjs._38283_31471Code.GD_95953Objects2.length = 0;
gdjs._38283_31471Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_31471Code.GDNewSpriteObjects2.length = 0;
gdjs._38283_31471Code.GDGreenButtonObjects1.length = 0;
gdjs._38283_31471Code.GDGreenButtonObjects2.length = 0;


return;

}

gdjs['_38283_31471Code'] = gdjs._38283_31471Code;
