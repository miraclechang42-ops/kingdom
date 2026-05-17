gdjs._29579_23470Code = {};
gdjs._29579_23470Code.localVariables = [];
gdjs._29579_23470Code.idToCallbackMap = new Map();
gdjs._29579_23470Code.GDNewSpriteObjects1= [];
gdjs._29579_23470Code.GDNewSpriteObjects2= [];
gdjs._29579_23470Code.GDNewSprite2Objects1= [];
gdjs._29579_23470Code.GDNewSprite2Objects2= [];
gdjs._29579_23470Code.GDNewSprite3Objects1= [];
gdjs._29579_23470Code.GDNewSprite3Objects2= [];
gdjs._29579_23470Code.GD_95951Objects1= [];
gdjs._29579_23470Code.GD_95951Objects2= [];
gdjs._29579_23470Code.GDNewSprite4Objects1= [];
gdjs._29579_23470Code.GDNewSprite4Objects2= [];
gdjs._29579_23470Code.GD_95952Objects1= [];
gdjs._29579_23470Code.GD_95952Objects2= [];
gdjs._29579_23470Code.GDNewSprite5Objects1= [];
gdjs._29579_23470Code.GDNewSprite5Objects2= [];
gdjs._29579_23470Code.GD_95953Objects1= [];
gdjs._29579_23470Code.GD_95953Objects2= [];
gdjs._29579_23470Code.GD_95954Objects1= [];
gdjs._29579_23470Code.GD_95954Objects2= [];
gdjs._29579_23470Code.GDGreenButtonObjects1= [];
gdjs._29579_23470Code.GDGreenButtonObjects2= [];
gdjs._29579_23470Code.GDNewSprite6Objects1= [];
gdjs._29579_23470Code.GDNewSprite6Objects2= [];


gdjs._29579_23470Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._29579_23470Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._29579_23470Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._29579_23470Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._29579_23470Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._29579_23470Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._29579_23470Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._29579_23470Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._29579_23470Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._29579_23470Code.GD_95954Objects1);
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite5Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}
{for(var i = 0, len = gdjs._29579_23470Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95954Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDGreenButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "start") >= 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._29579_23470Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._29579_23470Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._29579_23470Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._29579_23470Code.GD_95951Objects1);
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95951Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "start");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite6Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._29579_23470Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._29579_23470Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29579_23470Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs._29579_23470Code.GDNewSprite6Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._29579_23470Code.GDNewSprite6Objects1[k] = gdjs._29579_23470Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs._29579_23470Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29579_23470Code.GD_95951Objects1.length;i<l;++i) {
    if ( gdjs._29579_23470Code.GD_95951Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._29579_23470Code.GD_95951Objects1[k] = gdjs._29579_23470Code.GD_95951Objects1[i];
        ++k;
    }
}
gdjs._29579_23470Code.GD_95951Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._29579_23470Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._29579_23470Code.GDNewSprite5Objects1);
/* Reuse gdjs._29579_23470Code.GD_95951Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._29579_23470Code.GD_95952Objects1);
{for(var i = 0, len = gdjs._29579_23470Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95952Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite5Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._29579_23470Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._29579_23470Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29579_23470Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs._29579_23470Code.GDNewSprite6Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._29579_23470Code.GDNewSprite6Objects1[k] = gdjs._29579_23470Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs._29579_23470Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29579_23470Code.GD_95952Objects1.length;i<l;++i) {
    if ( gdjs._29579_23470Code.GD_95952Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._29579_23470Code.GD_95952Objects1[k] = gdjs._29579_23470Code.GD_95952Objects1[i];
        ++k;
    }
}
gdjs._29579_23470Code.GD_95952Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._29579_23470Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._29579_23470Code.GDNewSprite5Objects1);
/* Reuse gdjs._29579_23470Code.GD_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._29579_23470Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._29579_23470Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95953Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._29579_23470Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._29579_23470Code.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29579_23470Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs._29579_23470Code.GDNewSprite6Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._29579_23470Code.GDNewSprite6Objects1[k] = gdjs._29579_23470Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs._29579_23470Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29579_23470Code.GD_95953Objects1.length;i<l;++i) {
    if ( gdjs._29579_23470Code.GD_95953Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._29579_23470Code.GD_95953Objects1[k] = gdjs._29579_23470Code.GD_95953Objects1[i];
        ++k;
    }
}
gdjs._29579_23470Code.GD_95953Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._29579_23470Code.GDGreenButtonObjects1);
/* Reuse gdjs._29579_23470Code.GDNewSprite6Objects1 */
/* Reuse gdjs._29579_23470Code.GD_95953Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._29579_23470Code.GD_95954Objects1);
{for(var i = 0, len = gdjs._29579_23470Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GD_95954Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDGreenButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._29579_23470Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._29579_23470Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._29579_23470Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._29579_23470Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._29579_23470Code.GDGreenButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._29579_23470Code.GDGreenButtonObjects1[k] = gdjs._29579_23470Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._29579_23470Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "峽谷");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}
}

}


};

gdjs._29579_23470Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._29579_23470Code.GDNewSpriteObjects1.length = 0;
gdjs._29579_23470Code.GDNewSpriteObjects2.length = 0;
gdjs._29579_23470Code.GDNewSprite2Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite2Objects2.length = 0;
gdjs._29579_23470Code.GDNewSprite3Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite3Objects2.length = 0;
gdjs._29579_23470Code.GD_95951Objects1.length = 0;
gdjs._29579_23470Code.GD_95951Objects2.length = 0;
gdjs._29579_23470Code.GDNewSprite4Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite4Objects2.length = 0;
gdjs._29579_23470Code.GD_95952Objects1.length = 0;
gdjs._29579_23470Code.GD_95952Objects2.length = 0;
gdjs._29579_23470Code.GDNewSprite5Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite5Objects2.length = 0;
gdjs._29579_23470Code.GD_95953Objects1.length = 0;
gdjs._29579_23470Code.GD_95953Objects2.length = 0;
gdjs._29579_23470Code.GD_95954Objects1.length = 0;
gdjs._29579_23470Code.GD_95954Objects2.length = 0;
gdjs._29579_23470Code.GDGreenButtonObjects1.length = 0;
gdjs._29579_23470Code.GDGreenButtonObjects2.length = 0;
gdjs._29579_23470Code.GDNewSprite6Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite6Objects2.length = 0;

gdjs._29579_23470Code.eventsList0(runtimeScene);
gdjs._29579_23470Code.GDNewSpriteObjects1.length = 0;
gdjs._29579_23470Code.GDNewSpriteObjects2.length = 0;
gdjs._29579_23470Code.GDNewSprite2Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite2Objects2.length = 0;
gdjs._29579_23470Code.GDNewSprite3Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite3Objects2.length = 0;
gdjs._29579_23470Code.GD_95951Objects1.length = 0;
gdjs._29579_23470Code.GD_95951Objects2.length = 0;
gdjs._29579_23470Code.GDNewSprite4Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite4Objects2.length = 0;
gdjs._29579_23470Code.GD_95952Objects1.length = 0;
gdjs._29579_23470Code.GD_95952Objects2.length = 0;
gdjs._29579_23470Code.GDNewSprite5Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite5Objects2.length = 0;
gdjs._29579_23470Code.GD_95953Objects1.length = 0;
gdjs._29579_23470Code.GD_95953Objects2.length = 0;
gdjs._29579_23470Code.GD_95954Objects1.length = 0;
gdjs._29579_23470Code.GD_95954Objects2.length = 0;
gdjs._29579_23470Code.GDGreenButtonObjects1.length = 0;
gdjs._29579_23470Code.GDGreenButtonObjects2.length = 0;
gdjs._29579_23470Code.GDNewSprite6Objects1.length = 0;
gdjs._29579_23470Code.GDNewSprite6Objects2.length = 0;


return;

}

gdjs['_29579_23470Code'] = gdjs._29579_23470Code;
