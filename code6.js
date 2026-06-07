gdjs._28779_23665Code = {};
gdjs._28779_23665Code.localVariables = [];
gdjs._28779_23665Code.idToCallbackMap = new Map();
gdjs._28779_23665Code.GDNewSpriteObjects1= [];
gdjs._28779_23665Code.GDNewSpriteObjects2= [];
gdjs._28779_23665Code.GDNewSpriteObjects3= [];
gdjs._28779_23665Code.GDNewSprite2Objects1= [];
gdjs._28779_23665Code.GDNewSprite2Objects2= [];
gdjs._28779_23665Code.GDNewSprite2Objects3= [];
gdjs._28779_23665Code.GD_9524038Objects1= [];
gdjs._28779_23665Code.GD_9524038Objects2= [];
gdjs._28779_23665Code.GD_9524038Objects3= [];
gdjs._28779_23665Code.GD_9521491Objects1= [];
gdjs._28779_23665Code.GD_9521491Objects2= [];
gdjs._28779_23665Code.GD_9521491Objects3= [];
gdjs._28779_23665Code.GD_9526178_9538291Objects1= [];
gdjs._28779_23665Code.GD_9526178_9538291Objects2= [];
gdjs._28779_23665Code.GD_9526178_9538291Objects3= [];
gdjs._28779_23665Code.GD_9520998_95259763Objects1= [];
gdjs._28779_23665Code.GD_9520998_95259763Objects2= [];
gdjs._28779_23665Code.GD_9520998_95259763Objects3= [];
gdjs._28779_23665Code.GDNewSprite4Objects1= [];
gdjs._28779_23665Code.GDNewSprite4Objects2= [];
gdjs._28779_23665Code.GDNewSprite4Objects3= [];
gdjs._28779_23665Code.GDNewSprite5Objects1= [];
gdjs._28779_23665Code.GDNewSprite5Objects2= [];
gdjs._28779_23665Code.GDNewSprite5Objects3= [];
gdjs._28779_23665Code.GDNewSprite3Objects1= [];
gdjs._28779_23665Code.GDNewSprite3Objects2= [];
gdjs._28779_23665Code.GDNewSprite3Objects3= [];
gdjs._28779_23665Code.GDNewSprite6Objects1= [];
gdjs._28779_23665Code.GDNewSprite6Objects2= [];
gdjs._28779_23665Code.GDNewSprite6Objects3= [];
gdjs._28779_23665Code.GDGreenButtonObjects1= [];
gdjs._28779_23665Code.GDGreenButtonObjects2= [];
gdjs._28779_23665Code.GDGreenButtonObjects3= [];
gdjs._28779_23665Code.GDGreenButton2Objects1= [];
gdjs._28779_23665Code.GDGreenButton2Objects2= [];
gdjs._28779_23665Code.GDGreenButton2Objects3= [];
gdjs._28779_23665Code.GDGreenButton3Objects1= [];
gdjs._28779_23665Code.GDGreenButton3Objects2= [];
gdjs._28779_23665Code.GDGreenButton3Objects3= [];
gdjs._28779_23665Code.GDNewSprite7Objects1= [];
gdjs._28779_23665Code.GDNewSprite7Objects2= [];
gdjs._28779_23665Code.GDNewSprite7Objects3= [];
gdjs._28779_23665Code.GDNewSprite8Objects1= [];
gdjs._28779_23665Code.GDNewSprite8Objects2= [];
gdjs._28779_23665Code.GDNewSprite8Objects3= [];
gdjs._28779_23665Code.GDNewSprite9Objects1= [];
gdjs._28779_23665Code.GDNewSprite9Objects2= [];
gdjs._28779_23665Code.GDNewSprite9Objects3= [];
gdjs._28779_23665Code.GDNewSprite10Objects1= [];
gdjs._28779_23665Code.GDNewSprite10Objects2= [];
gdjs._28779_23665Code.GDNewSprite10Objects3= [];


gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._28779_23665Code.GDNewSprite2Objects1});
gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GD_95959524038Objects1Objects = Hashtable.newFrom({"左": gdjs._28779_23665Code.GD_9524038Objects1});
gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._28779_23665Code.GDNewSprite2Objects1});
gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GD_95959521491Objects1Objects = Hashtable.newFrom({"右": gdjs._28779_23665Code.GD_9521491Objects1});
gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._28779_23665Code.GDNewSprite2Objects1});
gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._28779_23665Code.GDNewSpriteObjects1});
gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._28779_23665Code.GDNewSprite2Objects1});
gdjs._28779_23665Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 70);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._28779_23665Code.GDGreenButton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButton2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButton2Objects2[i].Activate(true, null);
}
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "time");
}
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 70);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._28779_23665Code.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButton3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButton3Objects1[i].Activate(true, null);
}
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "time");
}
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._28779_23665Code.GDNewSprite2Objects1});
gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._28779_23665Code.GDNewSprite3Objects1});
gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._28779_23665Code.GDNewSprite2Objects1});
gdjs._28779_23665Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(10);
}
}

}


};gdjs._28779_23665Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._28779_23665Code.GDGreenButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._28779_23665Code.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].activateBehavior("Physics2", false);
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButton2Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButton3Objects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._28779_23665Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_23665Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._28779_23665Code.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_23665Code.GDGreenButtonObjects1[k] = gdjs._28779_23665Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._28779_23665Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._28779_23665Code.GDGreenButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._28779_23665Code.GDNewSprite8Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(30);
}
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDGreenButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite8Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("左"), gdjs._28779_23665Code.GD_9524038Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects, gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GD_95959524038Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).mul(-(1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("右"), gdjs._28779_23665Code.GD_9521491Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects, gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GD_95959521491Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).mul(-(1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._28779_23665Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_23665Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( !(gdjs._28779_23665Code.GDGreenButtonObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs._28779_23665Code.GDGreenButtonObjects1[k] = gdjs._28779_23665Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._28779_23665Code.GDGreenButtonObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].activateBehavior("Physics2", true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "東西掉落.mp3", false, 80, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].setX(gdjs._28779_23665Code.GDNewSprite2Objects1[i].getX() + (600 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._28779_23665Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects, gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._28779_23665Code.GDNewSprite2Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).add(10);
}
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects, gdjs.randomInRange(0, 1200), 36, "");
}
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].getBehavior("Scale").setScale(0.3);
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].activateBehavior("Physics2", false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._28779_23665Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "time") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("分數3"), gdjs._28779_23665Code.GD_9520998_95259763Objects1);
gdjs.copyArray(runtimeScene.getObjects("時間"), gdjs._28779_23665Code.GD_9526178_9538291Objects1);
{for(var i = 0, len = gdjs._28779_23665Code.GD_9526178_9538291Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GD_9526178_9538291Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GD_9520998_95259763Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GD_9520998_95259763Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28779_23665Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28779_23665Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects, gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._28779_23665Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._28779_23665Code.mapOfGDgdjs_9546_959528779_959523665Code_9546GDNewSprite2Objects1Objects, gdjs.randomInRange(0, 1100), 54, "");
}
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].getBehavior("Scale").setScale(0.3);
}
}
{for(var i = 0, len = gdjs._28779_23665Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28779_23665Code.GDNewSprite2Objects1[i].activateBehavior("Physics2", false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}

{ //Subevents
gdjs._28779_23665Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._28779_23665Code.GDGreenButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_23665Code.GDGreenButton2Objects1.length;i<l;++i) {
    if ( gdjs._28779_23665Code.GDGreenButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_23665Code.GDGreenButton2Objects1[k] = gdjs._28779_23665Code.GDGreenButton2Objects1[i];
        ++k;
    }
}
gdjs._28779_23665Code.GDGreenButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "火龍");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs._28779_23665Code.GDGreenButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_23665Code.GDGreenButton3Objects1.length;i<l;++i) {
    if ( gdjs._28779_23665Code.GDGreenButton3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_23665Code.GDGreenButton3Objects1[k] = gdjs._28779_23665Code.GDGreenButton3Objects1[i];
        ++k;
    }
}
gdjs._28779_23665Code.GDGreenButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "火山");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._28779_23665Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28779_23665Code.GDNewSprite7Objects1.length;i<l;++i) {
    if ( gdjs._28779_23665Code.GDNewSprite7Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._28779_23665Code.GDNewSprite7Objects1[k] = gdjs._28779_23665Code.GDNewSprite7Objects1[i];
        ++k;
    }
}
gdjs._28779_23665Code.GDNewSprite7Objects1.length = k;
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

gdjs._28779_23665Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28779_23665Code.GDNewSpriteObjects1.length = 0;
gdjs._28779_23665Code.GDNewSpriteObjects2.length = 0;
gdjs._28779_23665Code.GDNewSpriteObjects3.length = 0;
gdjs._28779_23665Code.GDNewSprite2Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite2Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite2Objects3.length = 0;
gdjs._28779_23665Code.GD_9524038Objects1.length = 0;
gdjs._28779_23665Code.GD_9524038Objects2.length = 0;
gdjs._28779_23665Code.GD_9524038Objects3.length = 0;
gdjs._28779_23665Code.GD_9521491Objects1.length = 0;
gdjs._28779_23665Code.GD_9521491Objects2.length = 0;
gdjs._28779_23665Code.GD_9521491Objects3.length = 0;
gdjs._28779_23665Code.GD_9526178_9538291Objects1.length = 0;
gdjs._28779_23665Code.GD_9526178_9538291Objects2.length = 0;
gdjs._28779_23665Code.GD_9526178_9538291Objects3.length = 0;
gdjs._28779_23665Code.GD_9520998_95259763Objects1.length = 0;
gdjs._28779_23665Code.GD_9520998_95259763Objects2.length = 0;
gdjs._28779_23665Code.GD_9520998_95259763Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite4Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite4Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite4Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite5Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite5Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite5Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite3Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite3Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite3Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite6Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite6Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite6Objects3.length = 0;
gdjs._28779_23665Code.GDGreenButtonObjects1.length = 0;
gdjs._28779_23665Code.GDGreenButtonObjects2.length = 0;
gdjs._28779_23665Code.GDGreenButtonObjects3.length = 0;
gdjs._28779_23665Code.GDGreenButton2Objects1.length = 0;
gdjs._28779_23665Code.GDGreenButton2Objects2.length = 0;
gdjs._28779_23665Code.GDGreenButton2Objects3.length = 0;
gdjs._28779_23665Code.GDGreenButton3Objects1.length = 0;
gdjs._28779_23665Code.GDGreenButton3Objects2.length = 0;
gdjs._28779_23665Code.GDGreenButton3Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite7Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite7Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite7Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite8Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite8Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite8Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite9Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite9Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite9Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite10Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite10Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite10Objects3.length = 0;

gdjs._28779_23665Code.eventsList2(runtimeScene);
gdjs._28779_23665Code.GDNewSpriteObjects1.length = 0;
gdjs._28779_23665Code.GDNewSpriteObjects2.length = 0;
gdjs._28779_23665Code.GDNewSpriteObjects3.length = 0;
gdjs._28779_23665Code.GDNewSprite2Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite2Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite2Objects3.length = 0;
gdjs._28779_23665Code.GD_9524038Objects1.length = 0;
gdjs._28779_23665Code.GD_9524038Objects2.length = 0;
gdjs._28779_23665Code.GD_9524038Objects3.length = 0;
gdjs._28779_23665Code.GD_9521491Objects1.length = 0;
gdjs._28779_23665Code.GD_9521491Objects2.length = 0;
gdjs._28779_23665Code.GD_9521491Objects3.length = 0;
gdjs._28779_23665Code.GD_9526178_9538291Objects1.length = 0;
gdjs._28779_23665Code.GD_9526178_9538291Objects2.length = 0;
gdjs._28779_23665Code.GD_9526178_9538291Objects3.length = 0;
gdjs._28779_23665Code.GD_9520998_95259763Objects1.length = 0;
gdjs._28779_23665Code.GD_9520998_95259763Objects2.length = 0;
gdjs._28779_23665Code.GD_9520998_95259763Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite4Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite4Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite4Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite5Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite5Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite5Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite3Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite3Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite3Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite6Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite6Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite6Objects3.length = 0;
gdjs._28779_23665Code.GDGreenButtonObjects1.length = 0;
gdjs._28779_23665Code.GDGreenButtonObjects2.length = 0;
gdjs._28779_23665Code.GDGreenButtonObjects3.length = 0;
gdjs._28779_23665Code.GDGreenButton2Objects1.length = 0;
gdjs._28779_23665Code.GDGreenButton2Objects2.length = 0;
gdjs._28779_23665Code.GDGreenButton2Objects3.length = 0;
gdjs._28779_23665Code.GDGreenButton3Objects1.length = 0;
gdjs._28779_23665Code.GDGreenButton3Objects2.length = 0;
gdjs._28779_23665Code.GDGreenButton3Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite7Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite7Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite7Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite8Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite8Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite8Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite9Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite9Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite9Objects3.length = 0;
gdjs._28779_23665Code.GDNewSprite10Objects1.length = 0;
gdjs._28779_23665Code.GDNewSprite10Objects2.length = 0;
gdjs._28779_23665Code.GDNewSprite10Objects3.length = 0;


return;

}

gdjs['_28779_23665Code'] = gdjs._28779_23665Code;
