gdjs._38283_31471Code = {};
gdjs._38283_31471Code.localVariables = [];
gdjs._38283_31471Code.idToCallbackMap = new Map();
gdjs._38283_31471Code.GD_9520027_9535282Objects1= [];
gdjs._38283_31471Code.GD_9520027_9535282Objects2= [];
gdjs._38283_31471Code.GD_9522283_9529579Objects1= [];
gdjs._38283_31471Code.GD_9522283_9529579Objects2= [];
gdjs._38283_31471Code.GDNewTextObjects1= [];
gdjs._38283_31471Code.GDNewTextObjects2= [];
gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1= [];
gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects2= [];
gdjs._38283_31471Code.GDNewText2Objects1= [];
gdjs._38283_31471Code.GDNewText2Objects2= [];
gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1= [];
gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects2= [];
gdjs._38283_31471Code.GD_9531435_9532362Objects1= [];
gdjs._38283_31471Code.GD_9531435_9532362Objects2= [];
gdjs._38283_31471Code.GDNewSpriteObjects1= [];
gdjs._38283_31471Code.GDNewSpriteObjects2= [];


gdjs._38283_31471Code.mapOfGDgdjs_9546_959538283_959531471Code_9546GD_95959522283_95959529579Objects1Objects = Hashtable.newFrom({"國王": gdjs._38283_31471Code.GD_9522283_9529579Objects1});
gdjs._38283_31471Code.mapOfGDgdjs_9546_959538283_959531471Code_9546GD_95959520027_95959535282Objects1Objects = Hashtable.newFrom({"主角": gdjs._38283_31471Code.GD_9520027_9535282Objects1});
gdjs._38283_31471Code.mapOfGDgdjs_9546_959538283_959531471Code_9546GD_95959520027_95959535282Objects1Objects = Hashtable.newFrom({"主角": gdjs._38283_31471Code.GD_9520027_9535282Objects1});
gdjs._38283_31471Code.mapOfGDgdjs_9546_959538283_959531471Code_9546GD_95959522283_95959529579Objects1Objects = Hashtable.newFrom({"國王": gdjs._38283_31471Code.GD_9522283_9529579Objects1});
gdjs._38283_31471Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._38283_31471Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._38283_31471Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("前往峽谷"), gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1);
gdjs.copyArray(runtimeScene.getObjects("對話框"), gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1);
gdjs.copyArray(runtimeScene.getObjects("立繪"), gdjs._38283_31471Code.GD_9531435_9532362Objects1);
{for(var i = 0, len = gdjs._38283_31471Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GDNewText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_9531435_9532362Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_9531435_9532362Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("主角"), gdjs._38283_31471Code.GD_9520027_9535282Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._38283_31471Code.GD_9520027_9535282Objects1.length !== 0 ? gdjs._38283_31471Code.GD_9520027_9535282Objects1[0] : null), true, "Layer", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._38283_31471Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("主角"), gdjs._38283_31471Code.GD_9520027_9535282Objects1);
gdjs.copyArray(runtimeScene.getObjects("國王"), gdjs._38283_31471Code.GD_9522283_9529579Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs._38283_31471Code.mapOfGDgdjs_9546_959538283_959531471Code_9546GD_95959522283_95959529579Objects1Objects, gdjs._38283_31471Code.mapOfGDgdjs_9546_959538283_959531471Code_9546GD_95959520027_95959535282Objects1Objects, 20, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._38283_31471Code.GDNewText2Objects1.length;i<l;++i) {
    if ( !(gdjs._38283_31471Code.GDNewText2Objects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs._38283_31471Code.GDNewText2Objects1[k] = gdjs._38283_31471Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._38283_31471Code.GDNewText2Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._38283_31471Code.GDNewTextObjects1);
/* Reuse gdjs._38283_31471Code.GD_9520027_9535282Objects1 */
gdjs.copyArray(runtimeScene.getObjects("對話框"), gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1);
gdjs.copyArray(runtimeScene.getObjects("立繪"), gdjs._38283_31471Code.GD_9531435_9532362Objects1);
{for(var i = 0, len = gdjs._38283_31471Code.GD_9520027_9535282Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_9520027_9535282Objects1[i].activateBehavior("TopDownMovement", false);
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GDNewTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_9531435_9532362Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_9531435_9532362Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._38283_31471Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("主角"), gdjs._38283_31471Code.GD_9520027_9535282Objects1);
gdjs.copyArray(runtimeScene.getObjects("國王"), gdjs._38283_31471Code.GD_9522283_9529579Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs._38283_31471Code.mapOfGDgdjs_9546_959538283_959531471Code_9546GD_95959520027_95959535282Objects1Objects, gdjs._38283_31471Code.mapOfGDgdjs_9546_959538283_959531471Code_9546GD_95959522283_95959529579Objects1Objects, 20, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._38283_31471Code.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs._38283_31471Code.GDNewTextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._38283_31471Code.GDNewTextObjects1[k] = gdjs._38283_31471Code.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs._38283_31471Code.GDNewTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._38283_31471Code.GDNewTextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._38283_31471Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("前往峽谷"), gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1);
{for(var i = 0, len = gdjs._38283_31471Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GDNewText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1.length ;i < len;++i) {
    gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("前往峽谷"), gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1.length;i<l;++i) {
    if ( gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1[k] = gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1[i];
        ++k;
    }
}
gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "峽谷");
}
}

}


};

gdjs._38283_31471Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._38283_31471Code.GD_9520027_9535282Objects1.length = 0;
gdjs._38283_31471Code.GD_9520027_9535282Objects2.length = 0;
gdjs._38283_31471Code.GD_9522283_9529579Objects1.length = 0;
gdjs._38283_31471Code.GD_9522283_9529579Objects2.length = 0;
gdjs._38283_31471Code.GDNewTextObjects1.length = 0;
gdjs._38283_31471Code.GDNewTextObjects2.length = 0;
gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1.length = 0;
gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects2.length = 0;
gdjs._38283_31471Code.GDNewText2Objects1.length = 0;
gdjs._38283_31471Code.GDNewText2Objects2.length = 0;
gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1.length = 0;
gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects2.length = 0;
gdjs._38283_31471Code.GD_9531435_9532362Objects1.length = 0;
gdjs._38283_31471Code.GD_9531435_9532362Objects2.length = 0;
gdjs._38283_31471Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_31471Code.GDNewSpriteObjects2.length = 0;

gdjs._38283_31471Code.eventsList0(runtimeScene);
gdjs._38283_31471Code.GD_9520027_9535282Objects1.length = 0;
gdjs._38283_31471Code.GD_9520027_9535282Objects2.length = 0;
gdjs._38283_31471Code.GD_9522283_9529579Objects1.length = 0;
gdjs._38283_31471Code.GD_9522283_9529579Objects2.length = 0;
gdjs._38283_31471Code.GDNewTextObjects1.length = 0;
gdjs._38283_31471Code.GDNewTextObjects2.length = 0;
gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects1.length = 0;
gdjs._38283_31471Code.GD_9523565_9535441_9526694Objects2.length = 0;
gdjs._38283_31471Code.GDNewText2Objects1.length = 0;
gdjs._38283_31471Code.GDNewText2Objects2.length = 0;
gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects1.length = 0;
gdjs._38283_31471Code.GD_9521069_9524448_9523805_9535895Objects2.length = 0;
gdjs._38283_31471Code.GD_9531435_9532362Objects1.length = 0;
gdjs._38283_31471Code.GD_9531435_9532362Objects2.length = 0;
gdjs._38283_31471Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_31471Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['_38283_31471Code'] = gdjs._38283_31471Code;
