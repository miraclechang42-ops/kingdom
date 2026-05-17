gdjs._27836_28580Code = {};
gdjs._27836_28580Code.localVariables = [];
gdjs._27836_28580Code.idToCallbackMap = new Map();
gdjs._27836_28580Code.GDNewSpriteObjects1= [];
gdjs._27836_28580Code.GDNewSpriteObjects2= [];
gdjs._27836_28580Code.GDNewSpriteObjects3= [];
gdjs._27836_28580Code.GDNewSprite2Objects1= [];
gdjs._27836_28580Code.GDNewSprite2Objects2= [];
gdjs._27836_28580Code.GDNewSprite2Objects3= [];
gdjs._27836_28580Code.GD_9538283_9522987Objects1= [];
gdjs._27836_28580Code.GD_9538283_9522987Objects2= [];
gdjs._27836_28580Code.GD_9538283_9522987Objects3= [];
gdjs._27836_28580Code.GDNewSprite3Objects1= [];
gdjs._27836_28580Code.GDNewSprite3Objects2= [];
gdjs._27836_28580Code.GDNewSprite3Objects3= [];
gdjs._27836_28580Code.GDNewSprite4Objects1= [];
gdjs._27836_28580Code.GDNewSprite4Objects2= [];
gdjs._27836_28580Code.GDNewSprite4Objects3= [];
gdjs._27836_28580Code.GDNewSprite5Objects1= [];
gdjs._27836_28580Code.GDNewSprite5Objects2= [];
gdjs._27836_28580Code.GDNewSprite5Objects3= [];
gdjs._27836_28580Code.GDNewSprite6Objects1= [];
gdjs._27836_28580Code.GDNewSprite6Objects2= [];
gdjs._27836_28580Code.GDNewSprite6Objects3= [];
gdjs._27836_28580Code.GDTIMEObjects1= [];
gdjs._27836_28580Code.GDTIMEObjects2= [];
gdjs._27836_28580Code.GDTIMEObjects3= [];
gdjs._27836_28580Code.GDScoreObjects1= [];
gdjs._27836_28580Code.GDScoreObjects2= [];
gdjs._27836_28580Code.GDScoreObjects3= [];
gdjs._27836_28580Code.GDGreenButtonObjects1= [];
gdjs._27836_28580Code.GDGreenButtonObjects2= [];
gdjs._27836_28580Code.GDGreenButtonObjects3= [];
gdjs._27836_28580Code.GDGreenButton2Objects1= [];
gdjs._27836_28580Code.GDGreenButton2Objects2= [];
gdjs._27836_28580Code.GDGreenButton2Objects3= [];


gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._27836_28580Code.GDNewSprite2Objects1});
gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._27836_28580Code.GDNewSprite6Objects1});
gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._27836_28580Code.GDNewSprite6Objects1});
gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._27836_28580Code.GDNewSprite2Objects1});
gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite3Objects1ObjectsGDgdjs_9546_959527836_959528580Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._27836_28580Code.GDNewSprite3Objects1, "NewSprite4": gdjs._27836_28580Code.GDNewSprite4Objects1});
gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite3Objects1ObjectsGDgdjs_9546_959527836_959528580Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._27836_28580Code.GDNewSprite3Objects1, "NewSprite4": gdjs._27836_28580Code.GDNewSprite4Objects1});
gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite3Objects1ObjectsGDgdjs_9546_959527836_959528580Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._27836_28580Code.GDNewSprite3Objects1, "NewSprite4": gdjs._27836_28580Code.GDNewSprite4Objects1});
gdjs._27836_28580Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(10);
}
}

}


};gdjs._27836_28580Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 80);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._27836_28580Code.GDGreenButton2Objects2);
{for(var i = 0, len = gdjs._27836_28580Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._27836_28580Code.GDGreenButton2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDGreenButton2Objects2.length ;i < len;++i) {
    gdjs._27836_28580Code.GDGreenButton2Objects2[i].Activate(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 80);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._27836_28580Code.GDGreenButtonObjects1);
{for(var i = 0, len = gdjs._27836_28580Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDGreenButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDGreenButtonObjects1[i].Activate(true, null);
}
}
}

}


};gdjs._27836_28580Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._27836_28580Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._27836_28580Code.GDGreenButton2Objects1);
{for(var i = 0, len = gdjs._27836_28580Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDGreenButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDGreenButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDGreenButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDGreenButton2Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDGreenButton2Objects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("開始"), gdjs._27836_28580Code.GD_9538283_9522987Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._27836_28580Code.GD_9538283_9522987Objects1.length;i<l;++i) {
    if ( gdjs._27836_28580Code.GD_9538283_9522987Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._27836_28580Code.GD_9538283_9522987Objects1[k] = gdjs._27836_28580Code.GD_9538283_9522987Objects1[i];
        ++k;
    }
}
gdjs._27836_28580Code.GD_9538283_9522987Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._27836_28580Code.GD_9538283_9522987Objects1 */
{for(var i = 0, len = gdjs._27836_28580Code.GD_9538283_9522987Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GD_9538283_9522987Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GD_9538283_9522987Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GD_9538283_9522987Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "mole");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "S");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._27836_28580Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "mole") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._27836_28580Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariableNumber(gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariables().get("T")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs._27836_28580Code.GDNewSprite2Objects1[k] = gdjs._27836_28580Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs._27836_28580Code.GDNewSprite2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._27836_28580Code.GDNewSprite2Objects1 */
gdjs._27836_28580Code.GDNewSprite6Objects1.length = 0;

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite2Objects1Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite6Objects1Objects, (( gdjs._27836_28580Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs._27836_28580Code.GDNewSprite2Objects1[0].getPointX("")), (( gdjs._27836_28580Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs._27836_28580Code.GDNewSprite2Objects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite6Objects1[i].getBehavior("Scale").setScale(0.2);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "mole");
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite2Objects1[i].returnVariable(gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariables().get("T")).setNumber(1);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite6Objects1[i].resetTimer("X");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "mole") > 1;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._27836_28580Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._27836_28580Code.GDNewSprite2Objects1);
/* Reuse gdjs._27836_28580Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(10);
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite2Objects1[i].returnVariable(gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariables().get("T")).setNumber(0);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "東西掉落.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._27836_28580Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._27836_28580Code.GDNewSprite6Objects1.length;i<l;++i) {
    if ( gdjs._27836_28580Code.GDNewSprite6Objects1[i].getTimerElapsedTimeInSecondsOrNaN("X") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs._27836_28580Code.GDNewSprite6Objects1[k] = gdjs._27836_28580Code.GDNewSprite6Objects1[i];
        ++k;
    }
}
gdjs._27836_28580Code.GDNewSprite6Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._27836_28580Code.GDNewSprite2Objects1);
/* Reuse gdjs._27836_28580Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite2Objects1[i].returnVariable(gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariables().get("T")).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._27836_28580Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "S") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._27836_28580Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariableNumber(gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariables().get("T")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs._27836_28580Code.GDNewSprite2Objects1[k] = gdjs._27836_28580Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs._27836_28580Code.GDNewSprite2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._27836_28580Code.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._27836_28580Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._27836_28580Code.GDNewSprite4Objects1);
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite2Objects1Objects);
}
{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite3Objects1ObjectsGDgdjs_9546_959527836_959528580Code_9546GDNewSprite4Objects1Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite3Objects1ObjectsGDgdjs_9546_959527836_959528580Code_9546GDNewSprite4Objects1Objects, (( gdjs._27836_28580Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs._27836_28580Code.GDNewSprite2Objects1[0].getPointX("")), (( gdjs._27836_28580Code.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs._27836_28580Code.GDNewSprite2Objects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite3Objects1[i].getBehavior("Scale").setScale(0.2);
}
for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite4Objects1[i].getBehavior("Scale").setScale(0.2);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "S");
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite2Objects1[i].returnVariable(gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariables().get("T")).setNumber(1);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite3Objects1[i].resetTimer("XX");
}
for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite4Objects1[i].resetTimer("XX");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._27836_28580Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._27836_28580Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._27836_28580Code.mapOfGDgdjs_9546_959527836_959528580Code_9546GDNewSprite3Objects1ObjectsGDgdjs_9546_959527836_959528580Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._27836_28580Code.GDNewSprite2Objects1);
/* Reuse gdjs._27836_28580Code.GDNewSprite3Objects1 */
/* Reuse gdjs._27836_28580Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite2Objects1[i].returnVariable(gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariables().get("T")).setNumber(0);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "東西掉落.mp3", false, 100, 1);
}

{ //Subevents
gdjs._27836_28580Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._27836_28580Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._27836_28580Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._27836_28580Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs._27836_28580Code.GDNewSprite3Objects1[i].getTimerElapsedTimeInSecondsOrNaN("XX") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs._27836_28580Code.GDNewSprite3Objects1[k] = gdjs._27836_28580Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs._27836_28580Code.GDNewSprite3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._27836_28580Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs._27836_28580Code.GDNewSprite4Objects1[i].getTimerElapsedTimeInSecondsOrNaN("XX") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs._27836_28580Code.GDNewSprite4Objects1[k] = gdjs._27836_28580Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs._27836_28580Code.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._27836_28580Code.GDNewSprite2Objects1);
/* Reuse gdjs._27836_28580Code.GDNewSprite3Objects1 */
/* Reuse gdjs._27836_28580Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite2Objects1[i].returnVariable(gdjs._27836_28580Code.GDNewSprite2Objects1[i].getVariables().get("T")).setNumber(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs._27836_28580Code.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("TIME"), gdjs._27836_28580Code.GDTIMEObjects1);
{for(var i = 0, len = gdjs._27836_28580Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDTIMEObjects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDTIMEObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "time") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._27836_28580Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._27836_28580Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._27836_28580Code.GDNewSprite6Objects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "time");
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs._27836_28580Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._27836_28580Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs._27836_28580Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._27836_28580Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._27836_28580Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._27836_28580Code.GDGreenButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._27836_28580Code.GDGreenButtonObjects1[k] = gdjs._27836_28580Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._27836_28580Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "沼澤");
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

gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs._27836_28580Code.GDGreenButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._27836_28580Code.GDGreenButton2Objects1.length;i<l;++i) {
    if ( gdjs._27836_28580Code.GDGreenButton2Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._27836_28580Code.GDGreenButton2Objects1[k] = gdjs._27836_28580Code.GDGreenButton2Objects1[i];
        ++k;
    }
}
gdjs._27836_28580Code.GDGreenButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "精靈");
}
}

}


};

gdjs._27836_28580Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._27836_28580Code.GDNewSpriteObjects1.length = 0;
gdjs._27836_28580Code.GDNewSpriteObjects2.length = 0;
gdjs._27836_28580Code.GDNewSpriteObjects3.length = 0;
gdjs._27836_28580Code.GDNewSprite2Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite2Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite2Objects3.length = 0;
gdjs._27836_28580Code.GD_9538283_9522987Objects1.length = 0;
gdjs._27836_28580Code.GD_9538283_9522987Objects2.length = 0;
gdjs._27836_28580Code.GD_9538283_9522987Objects3.length = 0;
gdjs._27836_28580Code.GDNewSprite3Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite3Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite3Objects3.length = 0;
gdjs._27836_28580Code.GDNewSprite4Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite4Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite4Objects3.length = 0;
gdjs._27836_28580Code.GDNewSprite5Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite5Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite5Objects3.length = 0;
gdjs._27836_28580Code.GDNewSprite6Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite6Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite6Objects3.length = 0;
gdjs._27836_28580Code.GDTIMEObjects1.length = 0;
gdjs._27836_28580Code.GDTIMEObjects2.length = 0;
gdjs._27836_28580Code.GDTIMEObjects3.length = 0;
gdjs._27836_28580Code.GDScoreObjects1.length = 0;
gdjs._27836_28580Code.GDScoreObjects2.length = 0;
gdjs._27836_28580Code.GDScoreObjects3.length = 0;
gdjs._27836_28580Code.GDGreenButtonObjects1.length = 0;
gdjs._27836_28580Code.GDGreenButtonObjects2.length = 0;
gdjs._27836_28580Code.GDGreenButtonObjects3.length = 0;
gdjs._27836_28580Code.GDGreenButton2Objects1.length = 0;
gdjs._27836_28580Code.GDGreenButton2Objects2.length = 0;
gdjs._27836_28580Code.GDGreenButton2Objects3.length = 0;

gdjs._27836_28580Code.eventsList2(runtimeScene);
gdjs._27836_28580Code.GDNewSpriteObjects1.length = 0;
gdjs._27836_28580Code.GDNewSpriteObjects2.length = 0;
gdjs._27836_28580Code.GDNewSpriteObjects3.length = 0;
gdjs._27836_28580Code.GDNewSprite2Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite2Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite2Objects3.length = 0;
gdjs._27836_28580Code.GD_9538283_9522987Objects1.length = 0;
gdjs._27836_28580Code.GD_9538283_9522987Objects2.length = 0;
gdjs._27836_28580Code.GD_9538283_9522987Objects3.length = 0;
gdjs._27836_28580Code.GDNewSprite3Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite3Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite3Objects3.length = 0;
gdjs._27836_28580Code.GDNewSprite4Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite4Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite4Objects3.length = 0;
gdjs._27836_28580Code.GDNewSprite5Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite5Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite5Objects3.length = 0;
gdjs._27836_28580Code.GDNewSprite6Objects1.length = 0;
gdjs._27836_28580Code.GDNewSprite6Objects2.length = 0;
gdjs._27836_28580Code.GDNewSprite6Objects3.length = 0;
gdjs._27836_28580Code.GDTIMEObjects1.length = 0;
gdjs._27836_28580Code.GDTIMEObjects2.length = 0;
gdjs._27836_28580Code.GDTIMEObjects3.length = 0;
gdjs._27836_28580Code.GDScoreObjects1.length = 0;
gdjs._27836_28580Code.GDScoreObjects2.length = 0;
gdjs._27836_28580Code.GDScoreObjects3.length = 0;
gdjs._27836_28580Code.GDGreenButtonObjects1.length = 0;
gdjs._27836_28580Code.GDGreenButtonObjects2.length = 0;
gdjs._27836_28580Code.GDGreenButtonObjects3.length = 0;
gdjs._27836_28580Code.GDGreenButton2Objects1.length = 0;
gdjs._27836_28580Code.GDGreenButton2Objects2.length = 0;
gdjs._27836_28580Code.GDGreenButton2Objects3.length = 0;


return;

}

gdjs['_27836_28580Code'] = gdjs._27836_28580Code;
