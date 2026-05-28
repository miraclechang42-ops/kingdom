gdjs._23805_35895Code = {};
gdjs._23805_35895Code.localVariables = [];
gdjs._23805_35895Code.idToCallbackMap = new Map();
gdjs._23805_35895Code.GDNewSpriteObjects1= [];
gdjs._23805_35895Code.GDNewSpriteObjects2= [];
gdjs._23805_35895Code.GDNewSpriteObjects3= [];
gdjs._23805_35895Code.GDNewSprite2Objects1= [];
gdjs._23805_35895Code.GDNewSprite2Objects2= [];
gdjs._23805_35895Code.GDNewSprite2Objects3= [];
gdjs._23805_35895Code.GDNewSprite3Objects1= [];
gdjs._23805_35895Code.GDNewSprite3Objects2= [];
gdjs._23805_35895Code.GDNewSprite3Objects3= [];
gdjs._23805_35895Code.GDNewSprite4Objects1= [];
gdjs._23805_35895Code.GDNewSprite4Objects2= [];
gdjs._23805_35895Code.GDNewSprite4Objects3= [];
gdjs._23805_35895Code.GD_9520998_9525976Objects1= [];
gdjs._23805_35895Code.GD_9520998_9525976Objects2= [];
gdjs._23805_35895Code.GD_9520998_9525976Objects3= [];
gdjs._23805_35895Code.GD_9526178_9538291Objects1= [];
gdjs._23805_35895Code.GD_9526178_9538291Objects2= [];
gdjs._23805_35895Code.GD_9526178_9538291Objects3= [];
gdjs._23805_35895Code.GDNewSprite7Objects1= [];
gdjs._23805_35895Code.GDNewSprite7Objects2= [];
gdjs._23805_35895Code.GDNewSprite7Objects3= [];
gdjs._23805_35895Code.GDGreenButtonObjects1= [];
gdjs._23805_35895Code.GDGreenButtonObjects2= [];
gdjs._23805_35895Code.GDGreenButtonObjects3= [];
gdjs._23805_35895Code.GDGreenButton2Objects1= [];
gdjs._23805_35895Code.GDGreenButton2Objects2= [];
gdjs._23805_35895Code.GDGreenButton2Objects3= [];
gdjs._23805_35895Code.GDGreenButton3Objects1= [];
gdjs._23805_35895Code.GDGreenButton3Objects2= [];
gdjs._23805_35895Code.GDGreenButton3Objects3= [];
gdjs._23805_35895Code.GDNewSprite5Objects1= [];
gdjs._23805_35895Code.GDNewSprite5Objects2= [];
gdjs._23805_35895Code.GDNewSprite5Objects3= [];
gdjs._23805_35895Code.GDNewSprite6Objects1= [];
gdjs._23805_35895Code.GDNewSprite6Objects2= [];
gdjs._23805_35895Code.GDNewSprite6Objects3= [];
gdjs._23805_35895Code.GDNewSprite8Objects1= [];
gdjs._23805_35895Code.GDNewSprite8Objects2= [];
gdjs._23805_35895Code.GDNewSprite8Objects3= [];
gdjs._23805_35895Code.GDNewSprite9Objects1= [];
gdjs._23805_35895Code.GDNewSprite9Objects2= [];
gdjs._23805_35895Code.GDNewSprite9Objects3= [];
gdjs._23805_35895Code.GDNewSprite11Objects1= [];
gdjs._23805_35895Code.GDNewSprite11Objects2= [];
gdjs._23805_35895Code.GDNewSprite11Objects3= [];
gdjs._23805_35895Code.GDNewSprite10Objects1= [];
gdjs._23805_35895Code.GDNewSprite10Objects2= [];
gdjs._23805_35895Code.GDNewSprite10Objects3= [];


gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._23805_35895Code.GDNewSprite4Objects1});
gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._23805_35895Code.GDNewSprite2Objects1});
gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._23805_35895Code.GDNewSprite4Objects1});
gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._23805_35895Code.GDNewSprite2Objects1});
gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs._23805_35895Code.GDNewSprite7Objects1});
gdjs._23805_35895Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._23805_35895Code.GDNewSprite7Objects1, gdjs._23805_35895Code.GDNewSprite7Objects2);

{runtimeScene.getScene().getVariables().getFromIndex(0).sub(10);
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite7Objects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs._23805_35895Code.GDNewSprite7Objects1 */
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite7Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs._23805_35895Code.GDNewSprite7Objects1});
gdjs._23805_35895Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._23805_35895Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._23805_35895Code.GDGreenButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._23805_35895Code.GDGreenButton3Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButton2Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButton3Objects1[i].Activate(false, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(15);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "chang");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._23805_35895Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23805_35895Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._23805_35895Code.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._23805_35895Code.GDGreenButtonObjects1[k] = gdjs._23805_35895Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._23805_35895Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._23805_35895Code.GDGreenButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._23805_35895Code.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "item");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(30);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "X");
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite6Objects1[i].hide();
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
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite4Objects1[i].getBehavior("Scale").setScale(0.2);
}
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
{gdjs.evtTools.sound.playSound(runtimeScene, "樹枝掉落.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._23805_35895Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._23805_35895Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite2Objects1Objects, gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "樹枝掉落.mp3", false, 100, 1);
}

{ //Subevents
gdjs._23805_35895Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("分數"), gdjs._23805_35895Code.GD_9520998_9525976Objects1);
gdjs.copyArray(runtimeScene.getObjects("時間"), gdjs._23805_35895Code.GD_9526178_9538291Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GD_9520998_9525976Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GD_9520998_9525976Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GD_9526178_9538291Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GD_9526178_9538291Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 60);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._23805_35895Code.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._23805_35895Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._23805_35895Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._23805_35895Code.GDNewSprite7Objects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "item");
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "time");
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite7Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButton3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButton3Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "time") >= 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 60);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._23805_35895Code.GDGreenButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._23805_35895Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._23805_35895Code.GDNewSprite7Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "item");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "time");
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite7Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButton2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDGreenButton2Objects1[i].Activate(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "X") >= 2.5;
if (isConditionTrue_0) {
gdjs._23805_35895Code.GDNewSprite7Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._23805_35895Code.mapOfGDgdjs_9546_959523805_959535895Code_9546GDNewSprite7Objects1Objects, gdjs.randomInRange(50, 1000), -(50), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "X");
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite7Objects1[i].getBehavior("Scale").setScale(0.2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._23805_35895Code.GDGreenButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23805_35895Code.GDGreenButton2Objects1.length;i<l;++i) {
    if ( gdjs._23805_35895Code.GDGreenButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._23805_35895Code.GDGreenButton2Objects1[k] = gdjs._23805_35895Code.GDGreenButton2Objects1[i];
        ++k;
    }
}
gdjs._23805_35895Code.GDGreenButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "峽谷");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._23805_35895Code.GDGreenButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23805_35895Code.GDGreenButton3Objects1.length;i<l;++i) {
    if ( gdjs._23805_35895Code.GDGreenButton3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._23805_35895Code.GDGreenButton3Objects1[k] = gdjs._23805_35895Code.GDGreenButton3Objects1[i];
        ++k;
    }
}
gdjs._23805_35895Code.GDGreenButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "壓壓");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._23805_35895Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._23805_35895Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._23805_35895Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23805_35895Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._23805_35895Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._23805_35895Code.GDNewSprite5Objects1[k] = gdjs._23805_35895Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._23805_35895Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主畫面", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs._23805_35895Code.GDNewSprite11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23805_35895Code.GDNewSprite11Objects1.length;i<l;++i) {
    if ( gdjs._23805_35895Code.GDNewSprite11Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._23805_35895Code.GDNewSprite11Objects1[k] = gdjs._23805_35895Code.GDNewSprite11Objects1[i];
        ++k;
    }
}
gdjs._23805_35895Code.GDNewSprite11Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._23805_35895Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite2Objects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs._23805_35895Code.GDNewSprite10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23805_35895Code.GDNewSprite10Objects1.length;i<l;++i) {
    if ( gdjs._23805_35895Code.GDNewSprite10Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._23805_35895Code.GDNewSprite10Objects1[k] = gdjs._23805_35895Code.GDNewSprite10Objects1[i];
        ++k;
    }
}
gdjs._23805_35895Code.GDNewSprite10Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._23805_35895Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite2Objects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
{for(var i = 0, len = gdjs._23805_35895Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._23805_35895Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
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

gdjs._23805_35895Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._23805_35895Code.GDNewSpriteObjects1.length = 0;
gdjs._23805_35895Code.GDNewSpriteObjects2.length = 0;
gdjs._23805_35895Code.GDNewSpriteObjects3.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects3.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects1.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects2.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects3.length = 0;
gdjs._23805_35895Code.GD_9526178_9538291Objects1.length = 0;
gdjs._23805_35895Code.GD_9526178_9538291Objects2.length = 0;
gdjs._23805_35895Code.GD_9526178_9538291Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite7Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite7Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite7Objects3.length = 0;
gdjs._23805_35895Code.GDGreenButtonObjects1.length = 0;
gdjs._23805_35895Code.GDGreenButtonObjects2.length = 0;
gdjs._23805_35895Code.GDGreenButtonObjects3.length = 0;
gdjs._23805_35895Code.GDGreenButton2Objects1.length = 0;
gdjs._23805_35895Code.GDGreenButton2Objects2.length = 0;
gdjs._23805_35895Code.GDGreenButton2Objects3.length = 0;
gdjs._23805_35895Code.GDGreenButton3Objects1.length = 0;
gdjs._23805_35895Code.GDGreenButton3Objects2.length = 0;
gdjs._23805_35895Code.GDGreenButton3Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite6Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite6Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite6Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite8Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite8Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite8Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite9Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite9Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite9Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite11Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite11Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite11Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite10Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite10Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite10Objects3.length = 0;

gdjs._23805_35895Code.eventsList1(runtimeScene);
gdjs._23805_35895Code.GDNewSpriteObjects1.length = 0;
gdjs._23805_35895Code.GDNewSpriteObjects2.length = 0;
gdjs._23805_35895Code.GDNewSpriteObjects3.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite2Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite3Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite4Objects3.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects1.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects2.length = 0;
gdjs._23805_35895Code.GD_9520998_9525976Objects3.length = 0;
gdjs._23805_35895Code.GD_9526178_9538291Objects1.length = 0;
gdjs._23805_35895Code.GD_9526178_9538291Objects2.length = 0;
gdjs._23805_35895Code.GD_9526178_9538291Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite7Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite7Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite7Objects3.length = 0;
gdjs._23805_35895Code.GDGreenButtonObjects1.length = 0;
gdjs._23805_35895Code.GDGreenButtonObjects2.length = 0;
gdjs._23805_35895Code.GDGreenButtonObjects3.length = 0;
gdjs._23805_35895Code.GDGreenButton2Objects1.length = 0;
gdjs._23805_35895Code.GDGreenButton2Objects2.length = 0;
gdjs._23805_35895Code.GDGreenButton2Objects3.length = 0;
gdjs._23805_35895Code.GDGreenButton3Objects1.length = 0;
gdjs._23805_35895Code.GDGreenButton3Objects2.length = 0;
gdjs._23805_35895Code.GDGreenButton3Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite5Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite6Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite6Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite6Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite8Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite8Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite8Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite9Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite9Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite9Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite11Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite11Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite11Objects3.length = 0;
gdjs._23805_35895Code.GDNewSprite10Objects1.length = 0;
gdjs._23805_35895Code.GDNewSprite10Objects2.length = 0;
gdjs._23805_35895Code.GDNewSprite10Objects3.length = 0;


return;

}

gdjs['_23805_35895Code'] = gdjs._23805_35895Code;
