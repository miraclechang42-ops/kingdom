gdjs._35206_21629Code = {};
gdjs._35206_21629Code.localVariables = [];
gdjs._35206_21629Code.idToCallbackMap = new Map();
gdjs._35206_21629Code.GDNewSpriteObjects1= [];
gdjs._35206_21629Code.GDNewSpriteObjects2= [];
gdjs._35206_21629Code.GDNewSprite2Objects1= [];
gdjs._35206_21629Code.GDNewSprite2Objects2= [];
gdjs._35206_21629Code.GDNewSprite3Objects1= [];
gdjs._35206_21629Code.GDNewSprite3Objects2= [];
gdjs._35206_21629Code.GDNewSprite4Objects1= [];
gdjs._35206_21629Code.GDNewSprite4Objects2= [];
gdjs._35206_21629Code.GDNewSprite5Objects1= [];
gdjs._35206_21629Code.GDNewSprite5Objects2= [];
gdjs._35206_21629Code.GDNewSprite6Objects1= [];
gdjs._35206_21629Code.GDNewSprite6Objects2= [];
gdjs._35206_21629Code.GDNewSprite7Objects1= [];
gdjs._35206_21629Code.GDNewSprite7Objects2= [];
gdjs._35206_21629Code.GD_95951Objects1= [];
gdjs._35206_21629Code.GD_95951Objects2= [];
gdjs._35206_21629Code.GD_95952Objects1= [];
gdjs._35206_21629Code.GD_95952Objects2= [];
gdjs._35206_21629Code.GD_95953Objects1= [];
gdjs._35206_21629Code.GD_95953Objects2= [];
gdjs._35206_21629Code.GDNewSprite8Objects1= [];
gdjs._35206_21629Code.GDNewSprite8Objects2= [];


gdjs._35206_21629Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35206_21629Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35206_21629Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._35206_21629Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._35206_21629Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._35206_21629Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._35206_21629Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GD_95953Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite4Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite5Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._35206_21629Code.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._35206_21629Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GDNewSprite8Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GDNewSprite8Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GDNewSprite8Objects1[k] = gdjs._35206_21629Code.GDNewSprite8Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GDNewSprite8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GD_95951Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GD_95951Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GD_95951Objects1[k] = gdjs._35206_21629Code.GD_95951Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GD_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._35206_21629Code.GDNewSprite6Objects1);
/* Reuse gdjs._35206_21629Code.GD_95951Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._35206_21629Code.GD_95952Objects1);
{for(var i = 0, len = gdjs._35206_21629Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GD_95952Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite6Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._35206_21629Code.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._35206_21629Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GDNewSprite8Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GDNewSprite8Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GDNewSprite8Objects1[k] = gdjs._35206_21629Code.GDNewSprite8Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GDNewSprite8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GD_95952Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GD_95952Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GD_95952Objects1[k] = gdjs._35206_21629Code.GD_95952Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GD_95952Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._35206_21629Code.GD_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._35206_21629Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._35206_21629Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GD_95953Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._35206_21629Code.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._35206_21629Code.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GDNewSprite8Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GDNewSprite8Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GDNewSprite8Objects1[k] = gdjs._35206_21629Code.GDNewSprite8Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GDNewSprite8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GD_95953Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GD_95953Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GD_95953Objects1[k] = gdjs._35206_21629Code.GD_95953Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GD_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35206_21629Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._35206_21629Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._35206_21629Code.GDNewSprite7Objects1);
/* Reuse gdjs._35206_21629Code.GDNewSprite8Objects1 */
/* Reuse gdjs._35206_21629Code.GD_95953Objects1 */
{for(var i = 0, len = gdjs._35206_21629Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite7Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite8Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite6Objects1[i].getBehavior("Tween").addObjectOpacityTween2("e", 0, "linear", 1, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._35206_21629Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GDNewSprite6Objects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GDNewSprite6Objects1[k] = gdjs._35206_21629Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.8;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35206_21629Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite4Objects1[i].getBehavior("Tween").addObjectOpacityTween2("yes", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35206_21629Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GDNewSprite4Objects1[i].getBehavior("Opacity").getOpacity() >= 250 ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GDNewSprite4Objects1[k] = gdjs._35206_21629Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 1.8;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._35206_21629Code.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite5Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._35206_21629Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GDNewSprite5Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GDNewSprite5Objects1[k] = gdjs._35206_21629Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35206_21629Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs._35206_21629Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35206_21629Code.GDNewSprite3Objects1[i].getBehavior("Tween").addObjectOpacityTween2("C", 255, "linear", 1.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35206_21629Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35206_21629Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs._35206_21629Code.GDNewSprite3Objects1[i].getBehavior("Opacity").getOpacity() >= 250 ) {
        isConditionTrue_0 = true;
        gdjs._35206_21629Code.GDNewSprite3Objects1[k] = gdjs._35206_21629Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs._35206_21629Code.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "證書");
}
}

}


};

gdjs._35206_21629Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._35206_21629Code.GDNewSpriteObjects1.length = 0;
gdjs._35206_21629Code.GDNewSpriteObjects2.length = 0;
gdjs._35206_21629Code.GDNewSprite2Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite2Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite3Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite3Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite4Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite4Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite5Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite5Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite6Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite6Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite7Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite7Objects2.length = 0;
gdjs._35206_21629Code.GD_95951Objects1.length = 0;
gdjs._35206_21629Code.GD_95951Objects2.length = 0;
gdjs._35206_21629Code.GD_95952Objects1.length = 0;
gdjs._35206_21629Code.GD_95952Objects2.length = 0;
gdjs._35206_21629Code.GD_95953Objects1.length = 0;
gdjs._35206_21629Code.GD_95953Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite8Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite8Objects2.length = 0;

gdjs._35206_21629Code.eventsList0(runtimeScene);
gdjs._35206_21629Code.GDNewSpriteObjects1.length = 0;
gdjs._35206_21629Code.GDNewSpriteObjects2.length = 0;
gdjs._35206_21629Code.GDNewSprite2Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite2Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite3Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite3Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite4Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite4Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite5Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite5Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite6Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite6Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite7Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite7Objects2.length = 0;
gdjs._35206_21629Code.GD_95951Objects1.length = 0;
gdjs._35206_21629Code.GD_95951Objects2.length = 0;
gdjs._35206_21629Code.GD_95952Objects1.length = 0;
gdjs._35206_21629Code.GD_95952Objects2.length = 0;
gdjs._35206_21629Code.GD_95953Objects1.length = 0;
gdjs._35206_21629Code.GD_95953Objects2.length = 0;
gdjs._35206_21629Code.GDNewSprite8Objects1.length = 0;
gdjs._35206_21629Code.GDNewSprite8Objects2.length = 0;


return;

}

gdjs['_35206_21629Code'] = gdjs._35206_21629Code;
