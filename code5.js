gdjs._22739_22739Code = {};
gdjs._22739_22739Code.localVariables = [];
gdjs._22739_22739Code.idToCallbackMap = new Map();
gdjs._22739_22739Code.GDNewSpriteObjects1= [];
gdjs._22739_22739Code.GDNewSpriteObjects2= [];
gdjs._22739_22739Code.GDNewSprite2Objects1= [];
gdjs._22739_22739Code.GDNewSprite2Objects2= [];
gdjs._22739_22739Code.GD_95951Objects1= [];
gdjs._22739_22739Code.GD_95951Objects2= [];
gdjs._22739_22739Code.GD_95952Objects1= [];
gdjs._22739_22739Code.GD_95952Objects2= [];
gdjs._22739_22739Code.GD_95953Objects1= [];
gdjs._22739_22739Code.GD_95953Objects2= [];
gdjs._22739_22739Code.GDGreenButtonObjects1= [];
gdjs._22739_22739Code.GDGreenButtonObjects2= [];
gdjs._22739_22739Code.GDGreenButton2Objects1= [];
gdjs._22739_22739Code.GDGreenButton2Objects2= [];
gdjs._22739_22739Code.GD_95954Objects1= [];
gdjs._22739_22739Code.GD_95954Objects2= [];
gdjs._22739_22739Code.GD_95955Objects1= [];
gdjs._22739_22739Code.GD_95955Objects2= [];
gdjs._22739_22739Code.GDNewSprite3Objects1= [];
gdjs._22739_22739Code.GDNewSprite3Objects2= [];
gdjs._22739_22739Code.GD_95956Objects1= [];
gdjs._22739_22739Code.GD_95956Objects2= [];
gdjs._22739_22739Code.GDGreenButton3Objects1= [];
gdjs._22739_22739Code.GDGreenButton3Objects2= [];
gdjs._22739_22739Code.GDNewSprite4Objects1= [];
gdjs._22739_22739Code.GDNewSprite4Objects2= [];
gdjs._22739_22739Code.GDNewSprite5Objects1= [];
gdjs._22739_22739Code.GDNewSprite5Objects2= [];
gdjs._22739_22739Code.GDNewSprite6Objects1= [];
gdjs._22739_22739Code.GDNewSprite6Objects2= [];
gdjs._22739_22739Code.GDNewSprite7Objects1= [];
gdjs._22739_22739Code.GDNewSprite7Objects2= [];


gdjs._22739_22739Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._22739_22739Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._22739_22739Code.GDGreenButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._22739_22739Code.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._22739_22739Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._22739_22739Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._22739_22739Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._22739_22739Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._22739_22739Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._22739_22739Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._22739_22739Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._22739_22739Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._22739_22739Code.GD_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("_5"), gdjs._22739_22739Code.GD_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("_6"), gdjs._22739_22739Code.GD_95956Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton2Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95954Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95955Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95955Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95956Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95956Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton3Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite5Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._22739_22739Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDNewSprite7Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDNewSprite7Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDNewSprite7Objects1[k] = gdjs._22739_22739Code.GDNewSprite7Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDNewSprite7Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "主畫面");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "start") >= 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._22739_22739Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._22739_22739Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._22739_22739Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._22739_22739Code.GD_95951Objects1);
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "start");
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSpriteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95951Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite5Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._22739_22739Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._22739_22739Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GD_95951Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GD_95951Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GD_95951Objects1[k] = gdjs._22739_22739Code.GD_95951Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GD_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDNewSprite5Objects1[k] = gdjs._22739_22739Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._22739_22739Code.GD_95951Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._22739_22739Code.GD_95952Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95952Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._22739_22739Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._22739_22739Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GD_95952Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GD_95952Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GD_95952Objects1[k] = gdjs._22739_22739Code.GD_95952Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GD_95952Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDNewSprite5Objects1[k] = gdjs._22739_22739Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._22739_22739Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._22739_22739Code.GDGreenButton2Objects1);
/* Reuse gdjs._22739_22739Code.GD_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._22739_22739Code.GD_95953Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95953Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton2Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButtonObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._22739_22739Code.GDGreenButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDGreenButton2Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDGreenButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDGreenButton2Objects1[k] = gdjs._22739_22739Code.GDGreenButton2Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDGreenButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._22739_22739Code.GDGreenButtonObjects1);
/* Reuse gdjs._22739_22739Code.GDGreenButton2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._22739_22739Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._22739_22739Code.GD_95954Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "選錯了.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95954Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95953Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._22739_22739Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._22739_22739Code.GD_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GD_95954Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GD_95954Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GD_95954Objects1[k] = gdjs._22739_22739Code.GD_95954Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GD_95954Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDNewSprite5Objects1[k] = gdjs._22739_22739Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDNewSprite5Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._22739_22739Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._22739_22739Code.GDGreenButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._22739_22739Code.GD_95953Objects1);
/* Reuse gdjs._22739_22739Code.GD_95954Objects1 */
{for(var i = 0, len = gdjs._22739_22739Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95954Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95953Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._22739_22739Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDGreenButtonObjects1[k] = gdjs._22739_22739Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._22739_22739Code.GDGreenButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._22739_22739Code.GDGreenButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._22739_22739Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._22739_22739Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_5"), gdjs._22739_22739Code.GD_95955Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "選對了.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95955Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95955Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite3Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._22739_22739Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._22739_22739Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDNewSprite3Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDNewSprite3Objects1[k] = gdjs._22739_22739Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDNewSprite5Objects1[k] = gdjs._22739_22739Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDNewSprite5Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._22739_22739Code.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._22739_22739Code.GDNewSpriteObjects1);
/* Reuse gdjs._22739_22739Code.GDNewSprite3Objects1 */
/* Reuse gdjs._22739_22739Code.GDNewSprite5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._22739_22739Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_5"), gdjs._22739_22739Code.GD_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("_6"), gdjs._22739_22739Code.GD_95956Objects1);
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95955Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95955Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GD_95956Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GD_95956Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite6Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDGreenButton3Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._22739_22739Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._22739_22739Code.GDNewSpriteObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._22739_22739Code.GDGreenButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22739_22739Code.GDGreenButton3Objects1.length;i<l;++i) {
    if ( gdjs._22739_22739Code.GDGreenButton3Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._22739_22739Code.GDGreenButton3Objects1[k] = gdjs._22739_22739Code.GDGreenButton3Objects1[i];
        ++k;
    }
}
gdjs._22739_22739Code.GDGreenButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "火山");
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


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._22739_22739Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22739_22739Code.GDNewSpriteObjects1.length = 0;
gdjs._22739_22739Code.GDNewSpriteObjects2.length = 0;
gdjs._22739_22739Code.GDNewSprite2Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite2Objects2.length = 0;
gdjs._22739_22739Code.GD_95951Objects1.length = 0;
gdjs._22739_22739Code.GD_95951Objects2.length = 0;
gdjs._22739_22739Code.GD_95952Objects1.length = 0;
gdjs._22739_22739Code.GD_95952Objects2.length = 0;
gdjs._22739_22739Code.GD_95953Objects1.length = 0;
gdjs._22739_22739Code.GD_95953Objects2.length = 0;
gdjs._22739_22739Code.GDGreenButtonObjects1.length = 0;
gdjs._22739_22739Code.GDGreenButtonObjects2.length = 0;
gdjs._22739_22739Code.GDGreenButton2Objects1.length = 0;
gdjs._22739_22739Code.GDGreenButton2Objects2.length = 0;
gdjs._22739_22739Code.GD_95954Objects1.length = 0;
gdjs._22739_22739Code.GD_95954Objects2.length = 0;
gdjs._22739_22739Code.GD_95955Objects1.length = 0;
gdjs._22739_22739Code.GD_95955Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite3Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite3Objects2.length = 0;
gdjs._22739_22739Code.GD_95956Objects1.length = 0;
gdjs._22739_22739Code.GD_95956Objects2.length = 0;
gdjs._22739_22739Code.GDGreenButton3Objects1.length = 0;
gdjs._22739_22739Code.GDGreenButton3Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite4Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite4Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite5Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite5Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite6Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite6Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite7Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite7Objects2.length = 0;

gdjs._22739_22739Code.eventsList0(runtimeScene);
gdjs._22739_22739Code.GDNewSpriteObjects1.length = 0;
gdjs._22739_22739Code.GDNewSpriteObjects2.length = 0;
gdjs._22739_22739Code.GDNewSprite2Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite2Objects2.length = 0;
gdjs._22739_22739Code.GD_95951Objects1.length = 0;
gdjs._22739_22739Code.GD_95951Objects2.length = 0;
gdjs._22739_22739Code.GD_95952Objects1.length = 0;
gdjs._22739_22739Code.GD_95952Objects2.length = 0;
gdjs._22739_22739Code.GD_95953Objects1.length = 0;
gdjs._22739_22739Code.GD_95953Objects2.length = 0;
gdjs._22739_22739Code.GDGreenButtonObjects1.length = 0;
gdjs._22739_22739Code.GDGreenButtonObjects2.length = 0;
gdjs._22739_22739Code.GDGreenButton2Objects1.length = 0;
gdjs._22739_22739Code.GDGreenButton2Objects2.length = 0;
gdjs._22739_22739Code.GD_95954Objects1.length = 0;
gdjs._22739_22739Code.GD_95954Objects2.length = 0;
gdjs._22739_22739Code.GD_95955Objects1.length = 0;
gdjs._22739_22739Code.GD_95955Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite3Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite3Objects2.length = 0;
gdjs._22739_22739Code.GD_95956Objects1.length = 0;
gdjs._22739_22739Code.GD_95956Objects2.length = 0;
gdjs._22739_22739Code.GDGreenButton3Objects1.length = 0;
gdjs._22739_22739Code.GDGreenButton3Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite4Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite4Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite5Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite5Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite6Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite6Objects2.length = 0;
gdjs._22739_22739Code.GDNewSprite7Objects1.length = 0;
gdjs._22739_22739Code.GDNewSprite7Objects2.length = 0;


return;

}

gdjs['_22739_22739Code'] = gdjs._22739_22739Code;
