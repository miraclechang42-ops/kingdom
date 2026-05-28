gdjs._35657_26360Code = {};
gdjs._35657_26360Code.localVariables = [];
gdjs._35657_26360Code.idToCallbackMap = new Map();
gdjs._35657_26360Code.GDNewTextInputObjects1= [];
gdjs._35657_26360Code.GDNewTextInputObjects2= [];
gdjs._35657_26360Code.GDNewTextInputObjects3= [];
gdjs._35657_26360Code.GDNewSpriteObjects1= [];
gdjs._35657_26360Code.GDNewSpriteObjects2= [];
gdjs._35657_26360Code.GDNewSpriteObjects3= [];
gdjs._35657_26360Code.GDNewSprite2Objects1= [];
gdjs._35657_26360Code.GDNewSprite2Objects2= [];
gdjs._35657_26360Code.GDNewSprite2Objects3= [];
gdjs._35657_26360Code.GDNewSprite3Objects1= [];
gdjs._35657_26360Code.GDNewSprite3Objects2= [];
gdjs._35657_26360Code.GDNewSprite3Objects3= [];
gdjs._35657_26360Code.GDNewTextObjects1= [];
gdjs._35657_26360Code.GDNewTextObjects2= [];
gdjs._35657_26360Code.GDNewTextObjects3= [];
gdjs._35657_26360Code.GDNewText2Objects1= [];
gdjs._35657_26360Code.GDNewText2Objects2= [];
gdjs._35657_26360Code.GDNewText2Objects3= [];
gdjs._35657_26360Code.GDNewText3Objects1= [];
gdjs._35657_26360Code.GDNewText3Objects2= [];
gdjs._35657_26360Code.GDNewText3Objects3= [];


gdjs._35657_26360Code.userFunc0x8096b8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const homeButtonList = runtimeScene.getObjects("NewSprite");
const downloadButtonList = runtimeScene.getObjects("NewSprite3");

// 將按鈕隱藏
if(homeButtonList.length > 0) homeButtonList[0].hide(true);
if(downloadButtonList.length > 0) downloadButtonList[0].hide(true);

// ====== 2. 設定定時器延遲執行 (等同於 Java 的 Timer / Thread 概念) ======
// 1000 毫秒 = 1 秒。您可以自由修改下方的 1000
setTimeout(function() {
    
    // 取得遊戲畫布
    const canvas = runtimeScene.getGame().getRenderer().getCanvas();

    if (canvas) {
        // 執行截圖並下載
        const imageURI = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "生質能傳奇大師證書.png"; 
        downloadLink.href = imageURI;
        downloadLink.click();
    }

    // ====== 3. 截圖完畢後，把 UI 元素重新顯示出來 ======
    if(homeButtonList.length > 0) homeButtonList[0].hide(false);
    if(downloadButtonList.length > 0) downloadButtonList[0].hide(false);

}, 1000); // <-- 這裡的 1000 代表等待 1 秒鐘，若要等 2 秒請改 2000
};
gdjs._35657_26360Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs._35657_26360Code.GDNewTextInputObjects1);

const objects = gdjs._35657_26360Code.GDNewTextInputObjects1;
gdjs._35657_26360Code.userFunc0x8096b8(runtimeScene, objects);

}


};gdjs._35657_26360Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 400);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._35657_26360Code.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs._35657_26360Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 250);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < 400);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._35657_26360Code.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs._35657_26360Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < 250);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._35657_26360Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._35657_26360Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


};gdjs._35657_26360Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._35657_26360Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs._35657_26360Code.GDNewTextInputObjects1);
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs._35657_26360Code.GDNewTextInputObjects1.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewTextInputObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs._35657_26360Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewText3Objects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35657_26360Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35657_26360Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._35657_26360Code.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35657_26360Code.GDNewSpriteObjects1[k] = gdjs._35657_26360Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._35657_26360Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "明亮");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "拿到證書.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs._35657_26360Code.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35657_26360Code.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs._35657_26360Code.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs._35657_26360Code.GDNewTextInputObjects1[k] = gdjs._35657_26360Code.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs._35657_26360Code.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._35657_26360Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._35657_26360Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewTextObjects1[i].getBehavior("Text").setText("請輸入您的名字或暱稱");
}
}
{for(var i = 0, len = gdjs._35657_26360Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewTextObjects1[i].setPosition(440,305);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs._35657_26360Code.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35657_26360Code.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs._35657_26360Code.GDNewTextInputObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs._35657_26360Code.GDNewTextInputObjects1[k] = gdjs._35657_26360Code.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs._35657_26360Code.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._35657_26360Code.GDNewTextObjects1);
/* Reuse gdjs._35657_26360Code.GDNewTextInputObjects1 */
{for(var i = 0, len = gdjs._35657_26360Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewTextObjects1[i].getBehavior("Text").setText((( gdjs._35657_26360Code.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs._35657_26360Code.GDNewTextInputObjects1[0].getText()));
}
}
{for(var i = 0, len = gdjs._35657_26360Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._35657_26360Code.GDNewTextObjects1[i].putAroundObject((gdjs._35657_26360Code.GDNewTextInputObjects1.length !== 0 ? gdjs._35657_26360Code.GDNewTextInputObjects1[0] : null), 0, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35657_26360Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35657_26360Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs._35657_26360Code.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._35657_26360Code.GDNewSprite3Objects1[k] = gdjs._35657_26360Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs._35657_26360Code.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._35657_26360Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs._35657_26360Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs._35657_26360Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._35657_26360Code.GDNewTextInputObjects1.length = 0;
gdjs._35657_26360Code.GDNewTextInputObjects2.length = 0;
gdjs._35657_26360Code.GDNewTextInputObjects3.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects1.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects2.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects3.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects1.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects2.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects3.length = 0;
gdjs._35657_26360Code.GDNewSprite3Objects1.length = 0;
gdjs._35657_26360Code.GDNewSprite3Objects2.length = 0;
gdjs._35657_26360Code.GDNewSprite3Objects3.length = 0;
gdjs._35657_26360Code.GDNewTextObjects1.length = 0;
gdjs._35657_26360Code.GDNewTextObjects2.length = 0;
gdjs._35657_26360Code.GDNewTextObjects3.length = 0;
gdjs._35657_26360Code.GDNewText2Objects1.length = 0;
gdjs._35657_26360Code.GDNewText2Objects2.length = 0;
gdjs._35657_26360Code.GDNewText2Objects3.length = 0;
gdjs._35657_26360Code.GDNewText3Objects1.length = 0;
gdjs._35657_26360Code.GDNewText3Objects2.length = 0;
gdjs._35657_26360Code.GDNewText3Objects3.length = 0;

gdjs._35657_26360Code.eventsList2(runtimeScene);
gdjs._35657_26360Code.GDNewTextInputObjects1.length = 0;
gdjs._35657_26360Code.GDNewTextInputObjects2.length = 0;
gdjs._35657_26360Code.GDNewTextInputObjects3.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects1.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects2.length = 0;
gdjs._35657_26360Code.GDNewSpriteObjects3.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects1.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects2.length = 0;
gdjs._35657_26360Code.GDNewSprite2Objects3.length = 0;
gdjs._35657_26360Code.GDNewSprite3Objects1.length = 0;
gdjs._35657_26360Code.GDNewSprite3Objects2.length = 0;
gdjs._35657_26360Code.GDNewSprite3Objects3.length = 0;
gdjs._35657_26360Code.GDNewTextObjects1.length = 0;
gdjs._35657_26360Code.GDNewTextObjects2.length = 0;
gdjs._35657_26360Code.GDNewTextObjects3.length = 0;
gdjs._35657_26360Code.GDNewText2Objects1.length = 0;
gdjs._35657_26360Code.GDNewText2Objects2.length = 0;
gdjs._35657_26360Code.GDNewText2Objects3.length = 0;
gdjs._35657_26360Code.GDNewText3Objects1.length = 0;
gdjs._35657_26360Code.GDNewText3Objects2.length = 0;
gdjs._35657_26360Code.GDNewText3Objects3.length = 0;


return;

}

gdjs['_35657_26360Code'] = gdjs._35657_26360Code;
