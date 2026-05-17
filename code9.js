gdjs._31934_38728Code = {};
gdjs._31934_38728Code.localVariables = [];
gdjs._31934_38728Code.idToCallbackMap = new Map();
gdjs._31934_38728Code.GDNewSpriteObjects1= [];
gdjs._31934_38728Code.GDNewSpriteObjects2= [];
gdjs._31934_38728Code.GDNewSprite2Objects1= [];
gdjs._31934_38728Code.GDNewSprite2Objects2= [];
gdjs._31934_38728Code.GDNewSprite3Objects1= [];
gdjs._31934_38728Code.GDNewSprite3Objects2= [];
gdjs._31934_38728Code.GDNewSprite5Objects1= [];
gdjs._31934_38728Code.GDNewSprite5Objects2= [];
gdjs._31934_38728Code.GD_95951Objects1= [];
gdjs._31934_38728Code.GD_95951Objects2= [];
gdjs._31934_38728Code.GD_95952Objects1= [];
gdjs._31934_38728Code.GD_95952Objects2= [];
gdjs._31934_38728Code.GD_95953Objects1= [];
gdjs._31934_38728Code.GD_95953Objects2= [];
gdjs._31934_38728Code.GD_95954Objects1= [];
gdjs._31934_38728Code.GD_95954Objects2= [];
gdjs._31934_38728Code.GD_9537679_9535492Objects1= [];
gdjs._31934_38728Code.GD_9537679_9535492Objects2= [];
gdjs._31934_38728Code.GD_9527491_9530906Objects1= [];
gdjs._31934_38728Code.GD_9527491_9530906Objects2= [];
gdjs._31934_38728Code.GD_95955_9537679Objects1= [];
gdjs._31934_38728Code.GD_95955_9537679Objects2= [];
gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1= [];
gdjs._31934_38728Code.GD_95956_9527491_9530906Objects2= [];
gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1= [];
gdjs._31934_38728Code.GD_95957_9533021_9537327Objects2= [];
gdjs._31934_38728Code.GDNewSprite4Objects1= [];
gdjs._31934_38728Code.GDNewSprite4Objects2= [];
gdjs._31934_38728Code.GDGreenButtonObjects1= [];
gdjs._31934_38728Code.GDGreenButtonObjects2= [];


gdjs._31934_38728Code.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._31934_38728Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._31934_38728Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._31934_38728Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._31934_38728Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._31934_38728Code.GD_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("_5錯"), gdjs._31934_38728Code.GD_95955_9537679Objects1);
gdjs.copyArray(runtimeScene.getObjects("_6正確"), gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1);
gdjs.copyArray(runtimeScene.getObjects("_7能量"), gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1);
gdjs.copyArray(runtimeScene.getObjects("正確"), gdjs._31934_38728Code.GD_9527491_9530906Objects1);
gdjs.copyArray(runtimeScene.getObjects("錯誤"), gdjs._31934_38728Code.GD_9537679_9535492Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95954Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95955_9537679Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95955_9537679Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._31934_38728Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GDGreenButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GDGreenButtonObjects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._31934_38728Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._31934_38728Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_95951Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_95951Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_95951Objects1[k] = gdjs._31934_38728Code.GD_95951Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GDNewSprite5Objects1[k] = gdjs._31934_38728Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") > 0.5;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._31934_38728Code.GD_95951Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._31934_38728Code.GD_95952Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95952Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._31934_38728Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._31934_38728Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_95952Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_95952Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_95952Objects1[k] = gdjs._31934_38728Code.GD_95952Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_95952Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GDNewSprite5Objects1[k] = gdjs._31934_38728Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") > 0.5;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._31934_38728Code.GD_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._31934_38728Code.GD_95953Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95953Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._31934_38728Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._31934_38728Code.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_95953Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_95953Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_95953Objects1[k] = gdjs._31934_38728Code.GD_95953Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GDNewSprite5Objects1[k] = gdjs._31934_38728Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") > 0.5;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._31934_38728Code.GD_95953Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._31934_38728Code.GD_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("正確"), gdjs._31934_38728Code.GD_9527491_9530906Objects1);
gdjs.copyArray(runtimeScene.getObjects("錯誤"), gdjs._31934_38728Code.GD_9537679_9535492Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95954Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._31934_38728Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_5錯"), gdjs._31934_38728Code.GD_95955_9537679Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_95955_9537679Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_95955_9537679Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_95955_9537679Objects1[k] = gdjs._31934_38728Code.GD_95955_9537679Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_95955_9537679Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GDNewSprite5Objects1[k] = gdjs._31934_38728Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") > 0.5;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._31934_38728Code.GD_95954Objects1);
/* Reuse gdjs._31934_38728Code.GD_95955_9537679Objects1 */
gdjs.copyArray(runtimeScene.getObjects("正確"), gdjs._31934_38728Code.GD_9527491_9530906Objects1);
gdjs.copyArray(runtimeScene.getObjects("錯誤"), gdjs._31934_38728Code.GD_9537679_9535492Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GD_95955_9537679Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95955_9537679Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95954Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("錯誤"), gdjs._31934_38728Code.GD_9537679_9535492Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_9537679_9535492Objects1[k] = gdjs._31934_38728Code.GD_9537679_9535492Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_9537679_9535492Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._31934_38728Code.GD_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("_5錯"), gdjs._31934_38728Code.GD_95955_9537679Objects1);
gdjs.copyArray(runtimeScene.getObjects("正確"), gdjs._31934_38728Code.GD_9527491_9530906Objects1);
/* Reuse gdjs._31934_38728Code.GD_9537679_9535492Objects1 */
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95955_9537679Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95955_9537679Objects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95954Objects1[i].hide();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "選錯了.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("正確"), gdjs._31934_38728Code.GD_9527491_9530906Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_9527491_9530906Objects1[k] = gdjs._31934_38728Code.GD_9527491_9530906Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_9527491_9530906Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._31934_38728Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._31934_38728Code.GD_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("_6正確"), gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1);
/* Reuse gdjs._31934_38728Code.GD_9527491_9530906Objects1 */
gdjs.copyArray(runtimeScene.getObjects("錯誤"), gdjs._31934_38728Code.GD_9537679_9535492Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9527491_9530906Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9537679_9535492Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9537679_9535492Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95954Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "say");
}
{for(var i = 0, len = gdjs._31934_38728Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GDNewSprite4Objects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "選對了.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._31934_38728Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("_6正確"), gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GDNewSprite5Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GDNewSprite5Objects1[k] = gdjs._31934_38728Code.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GDNewSprite5Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "say") > 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1[k] = gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._31934_38728Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._31934_38728Code.GDNewSprite4Objects1);
/* Reuse gdjs._31934_38728Code.GDNewSprite5Objects1 */
/* Reuse gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1 */
gdjs.copyArray(runtimeScene.getObjects("_7能量"), gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GDGreenButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GDNewSprite5Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GDGreenButtonObjects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs._31934_38728Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GDGreenButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GDGreenButtonObjects1[k] = gdjs._31934_38728Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "覆命");
}
}

}


};

gdjs._31934_38728Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._31934_38728Code.GDNewSpriteObjects1.length = 0;
gdjs._31934_38728Code.GDNewSpriteObjects2.length = 0;
gdjs._31934_38728Code.GDNewSprite2Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite2Objects2.length = 0;
gdjs._31934_38728Code.GDNewSprite3Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite3Objects2.length = 0;
gdjs._31934_38728Code.GDNewSprite5Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite5Objects2.length = 0;
gdjs._31934_38728Code.GD_95951Objects1.length = 0;
gdjs._31934_38728Code.GD_95951Objects2.length = 0;
gdjs._31934_38728Code.GD_95952Objects1.length = 0;
gdjs._31934_38728Code.GD_95952Objects2.length = 0;
gdjs._31934_38728Code.GD_95953Objects1.length = 0;
gdjs._31934_38728Code.GD_95953Objects2.length = 0;
gdjs._31934_38728Code.GD_95954Objects1.length = 0;
gdjs._31934_38728Code.GD_95954Objects2.length = 0;
gdjs._31934_38728Code.GD_9537679_9535492Objects1.length = 0;
gdjs._31934_38728Code.GD_9537679_9535492Objects2.length = 0;
gdjs._31934_38728Code.GD_9527491_9530906Objects1.length = 0;
gdjs._31934_38728Code.GD_9527491_9530906Objects2.length = 0;
gdjs._31934_38728Code.GD_95955_9537679Objects1.length = 0;
gdjs._31934_38728Code.GD_95955_9537679Objects2.length = 0;
gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1.length = 0;
gdjs._31934_38728Code.GD_95956_9527491_9530906Objects2.length = 0;
gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1.length = 0;
gdjs._31934_38728Code.GD_95957_9533021_9537327Objects2.length = 0;
gdjs._31934_38728Code.GDNewSprite4Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite4Objects2.length = 0;
gdjs._31934_38728Code.GDGreenButtonObjects1.length = 0;
gdjs._31934_38728Code.GDGreenButtonObjects2.length = 0;

gdjs._31934_38728Code.eventsList0(runtimeScene);
gdjs._31934_38728Code.GDNewSpriteObjects1.length = 0;
gdjs._31934_38728Code.GDNewSpriteObjects2.length = 0;
gdjs._31934_38728Code.GDNewSprite2Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite2Objects2.length = 0;
gdjs._31934_38728Code.GDNewSprite3Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite3Objects2.length = 0;
gdjs._31934_38728Code.GDNewSprite5Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite5Objects2.length = 0;
gdjs._31934_38728Code.GD_95951Objects1.length = 0;
gdjs._31934_38728Code.GD_95951Objects2.length = 0;
gdjs._31934_38728Code.GD_95952Objects1.length = 0;
gdjs._31934_38728Code.GD_95952Objects2.length = 0;
gdjs._31934_38728Code.GD_95953Objects1.length = 0;
gdjs._31934_38728Code.GD_95953Objects2.length = 0;
gdjs._31934_38728Code.GD_95954Objects1.length = 0;
gdjs._31934_38728Code.GD_95954Objects2.length = 0;
gdjs._31934_38728Code.GD_9537679_9535492Objects1.length = 0;
gdjs._31934_38728Code.GD_9537679_9535492Objects2.length = 0;
gdjs._31934_38728Code.GD_9527491_9530906Objects1.length = 0;
gdjs._31934_38728Code.GD_9527491_9530906Objects2.length = 0;
gdjs._31934_38728Code.GD_95955_9537679Objects1.length = 0;
gdjs._31934_38728Code.GD_95955_9537679Objects2.length = 0;
gdjs._31934_38728Code.GD_95956_9527491_9530906Objects1.length = 0;
gdjs._31934_38728Code.GD_95956_9527491_9530906Objects2.length = 0;
gdjs._31934_38728Code.GD_95957_9533021_9537327Objects1.length = 0;
gdjs._31934_38728Code.GD_95957_9533021_9537327Objects2.length = 0;
gdjs._31934_38728Code.GDNewSprite4Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite4Objects2.length = 0;
gdjs._31934_38728Code.GDGreenButtonObjects1.length = 0;
gdjs._31934_38728Code.GDGreenButtonObjects2.length = 0;


return;

}

gdjs['_31934_38728Code'] = gdjs._31934_38728Code;
