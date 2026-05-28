gdjs._28779_40845Code = {};
gdjs._28779_40845Code.localVariables = [];
gdjs._28779_40845Code.idToCallbackMap = new Map();
gdjs._28779_40845Code.GDNewSpriteObjects1= [];
gdjs._28779_40845Code.GDNewSpriteObjects2= [];
gdjs._28779_40845Code.GDNewSpriteObjects3= [];
gdjs._28779_40845Code.GDNewSprite2Objects1= [];
gdjs._28779_40845Code.GDNewSprite2Objects2= [];
gdjs._28779_40845Code.GDNewSprite2Objects3= [];
gdjs._28779_40845Code.GDNewSprite3Objects1= [];
gdjs._28779_40845Code.GDNewSprite3Objects2= [];
gdjs._28779_40845Code.GDNewSprite3Objects3= [];
gdjs._28779_40845Code.GD_95951Objects1= [];
gdjs._28779_40845Code.GD_95951Objects2= [];
gdjs._28779_40845Code.GD_95951Objects3= [];
gdjs._28779_40845Code.GD_95952Objects1= [];
gdjs._28779_40845Code.GD_95952Objects2= [];
gdjs._28779_40845Code.GD_95952Objects3= [];
gdjs._28779_40845Code.GDGreenButtonObjects1= [];
gdjs._28779_40845Code.GDGreenButtonObjects2= [];
gdjs._28779_40845Code.GDGreenButtonObjects3= [];
gdjs._28779_40845Code.GDGreenButton2Objects1= [];
gdjs._28779_40845Code.GDGreenButton2Objects2= [];
gdjs._28779_40845Code.GDGreenButton2Objects3= [];
gdjs._28779_40845Code.GD_95953Objects1= [];
gdjs._28779_40845Code.GD_95953Objects2= [];
gdjs._28779_40845Code.GD_95953Objects3= [];
gdjs._28779_40845Code.GD_95954Objects1= [];
gdjs._28779_40845Code.GD_95954Objects2= [];
gdjs._28779_40845Code.GD_95954Objects3= [];
gdjs._28779_40845Code.GDNewSprite4Objects1= [];
gdjs._28779_40845Code.GDNewSprite4Objects2= [];
gdjs._28779_40845Code.GDNewSprite4Objects3= [];
gdjs._28779_40845Code.GD_95955Objects1= [];
gdjs._28779_40845Code.GD_95955Objects2= [];
gdjs._28779_40845Code.GD_95955Objects3= [];
gdjs._28779_40845Code.GDGreenButton3Objects1= [];
gdjs._28779_40845Code.GDGreenButton3Objects2= [];
gdjs._28779_40845Code.GDGreenButton3Objects3= [];
gdjs._28779_40845Code.GDNewSprite5Objects1= [];
gdjs._28779_40845Code.GDNewSprite5Objects2= [];
gdjs._28779_40845Code.GDNewSprite5Objects3= [];
gdjs._28779_40845Code.GDNewSprite6Objects1= [];
gdjs._28779_40845Code.GDNewSprite6Objects2= [];
gdjs._28779_40845Code.GDNewSprite6Objects3= [];
gdjs._28779_40845Code.GDNewSprite7Objects1= [];
gdjs._28779_40845Code.GDNewSprite7Objects2= [];
gdjs._28779_40845Code.GDNewSprite7Objects3= [];


gdjs._28779_40845Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._28779_40845Code.GDNewSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._28779_40845Code.GD_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GD_95951Objects2.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GD_95951Objects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GD_95951Objects2[k] = gdjs._28779_40845Code.GD_95951Objects2[i];
        ++k;
    }
}
gdjs._28779_40845Code.GD_95951Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GDNewSprite5Objects2.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GDNewSprite5Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GDNewSprite5Objects2[k] = gdjs._28779_40845Code.GDNewSprite5Objects2[i];
        ++k;
    }
}
gdjs._28779_40845Code.GDNewSprite5Objects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._28779_40845Code.GDGreenButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._28779_40845Code.GDGreenButton2Objects2);
/* Reuse gdjs._28779_40845Code.GD_95951Objects2 */
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._28779_40845Code.GD_95952Objects2);
{for(var i = 0, len = gdjs._28779_40845Code.GD_95951Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95951Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95952Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95952Objects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects2[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._28779_40845Code.GDNewSprite5Objects2);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._28779_40845Code.GD_95953Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GD_95953Objects2.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GD_95953Objects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GD_95953Objects2[k] = gdjs._28779_40845Code.GD_95953Objects2[i];
        ++k;
    }
}
gdjs._28779_40845Code.GD_95953Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GDNewSprite5Objects2.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GDNewSprite5Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GDNewSprite5Objects2[k] = gdjs._28779_40845Code.GDNewSprite5Objects2[i];
        ++k;
    }
}
gdjs._28779_40845Code.GDNewSprite5Objects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._28779_40845Code.GDGreenButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._28779_40845Code.GDGreenButton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._28779_40845Code.GD_95952Objects2);
/* Reuse gdjs._28779_40845Code.GD_95953Objects2 */
{for(var i = 0, len = gdjs._28779_40845Code.GD_95952Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95952Objects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95953Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95953Objects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._28779_40845Code.GDGreenButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GDGreenButtonObjects2.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GDGreenButtonObjects2[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GDGreenButtonObjects2[k] = gdjs._28779_40845Code.GDGreenButtonObjects2[i];
        ++k;
    }
}
gdjs._28779_40845Code.GDGreenButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._28779_40845Code.GDGreenButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._28779_40845Code.GDGreenButton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._28779_40845Code.GDNewSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._28779_40845Code.GD_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._28779_40845Code.GD_95954Objects2);
{for(var i = 0, len = gdjs._28779_40845Code.GD_95954Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95954Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects2[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects2[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDNewSprite4Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95952Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95952Objects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "選對了.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._28779_40845Code.GDGreenButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GDGreenButton2Objects2.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GDGreenButton2Objects2[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GDGreenButton2Objects2[k] = gdjs._28779_40845Code.GDGreenButton2Objects2[i];
        ++k;
    }
}
gdjs._28779_40845Code.GDGreenButton2Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._28779_40845Code.GDGreenButtonObjects2);
/* Reuse gdjs._28779_40845Code.GDGreenButton2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._28779_40845Code.GD_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._28779_40845Code.GD_95953Objects2);
{for(var i = 0, len = gdjs._28779_40845Code.GD_95952Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95952Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95953Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95953Objects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects2[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects2[i].Activate(false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "選錯了.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._28779_40845Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._28779_40845Code.GD_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GD_95954Objects1.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GD_95954Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GD_95954Objects1[k] = gdjs._28779_40845Code.GD_95954Objects1[i];
        ++k;
    }
}
gdjs._28779_40845Code.GD_95954Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GDNewSprite5Objects1[k] = gdjs._28779_40845Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._28779_40845Code.GDNewSprite5Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._28779_40845Code.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_40845Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._28779_40845Code.GDNewSprite4Objects1);
/* Reuse gdjs._28779_40845Code.GDNewSprite5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._28779_40845Code.GDNewSprite6Objects1);
/* Reuse gdjs._28779_40845Code.GD_95954Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_5"), gdjs._28779_40845Code.GD_95955Objects1);
{for(var i = 0, len = gdjs._28779_40845Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95955Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95955Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton3Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95954Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDNewSprite6Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDNewSprite5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDNewSprite2Objects1[i].hide();
}
}
}

}


};gdjs._28779_40845Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._28779_40845Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._28779_40845Code.GDGreenButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._28779_40845Code.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28779_40845Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._28779_40845Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._28779_40845Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._28779_40845Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._28779_40845Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._28779_40845Code.GD_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("_5"), gdjs._28779_40845Code.GD_95955Objects1);
{for(var i = 0, len = gdjs._28779_40845Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95954Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GD_95955Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GD_95955Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton2Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDGreenButton3Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDNewSprite6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_40845Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._28779_40845Code.GDNewSprite3Objects1[i].getBehavior("Opacity").setOpacity(230);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") >= 0.5;
if (isConditionTrue_0) {

{ //Subevents
gdjs._28779_40845Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._28779_40845Code.GDGreenButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GDGreenButton3Objects1.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GDGreenButton3Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GDGreenButton3Objects1[k] = gdjs._28779_40845Code.GDGreenButton3Objects1[i];
        ++k;
    }
}
gdjs._28779_40845Code.GDGreenButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "沼澤");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._28779_40845Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_40845Code.GDNewSprite7Objects1.length;i<l;++i) {
    if ( gdjs._28779_40845Code.GDNewSprite7Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_40845Code.GDNewSprite7Objects1[k] = gdjs._28779_40845Code.GDNewSprite7Objects1[i];
        ++k;
    }
}
gdjs._28779_40845Code.GDNewSprite7Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "主畫面");
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

gdjs._28779_40845Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28779_40845Code.GDNewSpriteObjects1.length = 0;
gdjs._28779_40845Code.GDNewSpriteObjects2.length = 0;
gdjs._28779_40845Code.GDNewSpriteObjects3.length = 0;
gdjs._28779_40845Code.GDNewSprite2Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite2Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite2Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite3Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite3Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite3Objects3.length = 0;
gdjs._28779_40845Code.GD_95951Objects1.length = 0;
gdjs._28779_40845Code.GD_95951Objects2.length = 0;
gdjs._28779_40845Code.GD_95951Objects3.length = 0;
gdjs._28779_40845Code.GD_95952Objects1.length = 0;
gdjs._28779_40845Code.GD_95952Objects2.length = 0;
gdjs._28779_40845Code.GD_95952Objects3.length = 0;
gdjs._28779_40845Code.GDGreenButtonObjects1.length = 0;
gdjs._28779_40845Code.GDGreenButtonObjects2.length = 0;
gdjs._28779_40845Code.GDGreenButtonObjects3.length = 0;
gdjs._28779_40845Code.GDGreenButton2Objects1.length = 0;
gdjs._28779_40845Code.GDGreenButton2Objects2.length = 0;
gdjs._28779_40845Code.GDGreenButton2Objects3.length = 0;
gdjs._28779_40845Code.GD_95953Objects1.length = 0;
gdjs._28779_40845Code.GD_95953Objects2.length = 0;
gdjs._28779_40845Code.GD_95953Objects3.length = 0;
gdjs._28779_40845Code.GD_95954Objects1.length = 0;
gdjs._28779_40845Code.GD_95954Objects2.length = 0;
gdjs._28779_40845Code.GD_95954Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite4Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite4Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite4Objects3.length = 0;
gdjs._28779_40845Code.GD_95955Objects1.length = 0;
gdjs._28779_40845Code.GD_95955Objects2.length = 0;
gdjs._28779_40845Code.GD_95955Objects3.length = 0;
gdjs._28779_40845Code.GDGreenButton3Objects1.length = 0;
gdjs._28779_40845Code.GDGreenButton3Objects2.length = 0;
gdjs._28779_40845Code.GDGreenButton3Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite5Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite5Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite5Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite6Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite6Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite6Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite7Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite7Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite7Objects3.length = 0;

gdjs._28779_40845Code.eventsList1(runtimeScene);
gdjs._28779_40845Code.GDNewSpriteObjects1.length = 0;
gdjs._28779_40845Code.GDNewSpriteObjects2.length = 0;
gdjs._28779_40845Code.GDNewSpriteObjects3.length = 0;
gdjs._28779_40845Code.GDNewSprite2Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite2Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite2Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite3Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite3Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite3Objects3.length = 0;
gdjs._28779_40845Code.GD_95951Objects1.length = 0;
gdjs._28779_40845Code.GD_95951Objects2.length = 0;
gdjs._28779_40845Code.GD_95951Objects3.length = 0;
gdjs._28779_40845Code.GD_95952Objects1.length = 0;
gdjs._28779_40845Code.GD_95952Objects2.length = 0;
gdjs._28779_40845Code.GD_95952Objects3.length = 0;
gdjs._28779_40845Code.GDGreenButtonObjects1.length = 0;
gdjs._28779_40845Code.GDGreenButtonObjects2.length = 0;
gdjs._28779_40845Code.GDGreenButtonObjects3.length = 0;
gdjs._28779_40845Code.GDGreenButton2Objects1.length = 0;
gdjs._28779_40845Code.GDGreenButton2Objects2.length = 0;
gdjs._28779_40845Code.GDGreenButton2Objects3.length = 0;
gdjs._28779_40845Code.GD_95953Objects1.length = 0;
gdjs._28779_40845Code.GD_95953Objects2.length = 0;
gdjs._28779_40845Code.GD_95953Objects3.length = 0;
gdjs._28779_40845Code.GD_95954Objects1.length = 0;
gdjs._28779_40845Code.GD_95954Objects2.length = 0;
gdjs._28779_40845Code.GD_95954Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite4Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite4Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite4Objects3.length = 0;
gdjs._28779_40845Code.GD_95955Objects1.length = 0;
gdjs._28779_40845Code.GD_95955Objects2.length = 0;
gdjs._28779_40845Code.GD_95955Objects3.length = 0;
gdjs._28779_40845Code.GDGreenButton3Objects1.length = 0;
gdjs._28779_40845Code.GDGreenButton3Objects2.length = 0;
gdjs._28779_40845Code.GDGreenButton3Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite5Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite5Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite5Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite6Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite6Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite6Objects3.length = 0;
gdjs._28779_40845Code.GDNewSprite7Objects1.length = 0;
gdjs._28779_40845Code.GDNewSprite7Objects2.length = 0;
gdjs._28779_40845Code.GDNewSprite7Objects3.length = 0;


return;

}

gdjs['_28779_40845Code'] = gdjs._28779_40845Code;
