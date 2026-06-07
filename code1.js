gdjs._35373_35336_36039_35338Code = {};
gdjs._35373_35336_36039_35338Code.localVariables = [];
gdjs._35373_35336_36039_35338Code.idToCallbackMap = new Map();
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1= [];
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2= [];
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects3= [];
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects3= [];
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects3= [];
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects3= [];
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects3= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects1= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects2= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects3= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects3= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects3= [];
gdjs._35373_35336_36039_35338Code.GD_9535613Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9535613Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9535613Objects3= [];
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects3= [];
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects3= [];
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects3= [];


gdjs._35373_35336_36039_35338Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("製作"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2[k] = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2);
gdjs.copyArray(gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1, gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("參考資料"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2);
gdjs.copyArray(runtimeScene.getObjects("版權資訊"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2);
gdjs.copyArray(runtimeScene.getObjects("特別感謝"), gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2);
/* Reuse gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2 */
gdjs.copyArray(runtimeScene.getObjects("製作團隊"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2);
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("謝"), gdjs._35373_35336_36039_35338Code.GD_9535613Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GD_9535613Objects2.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GD_9535613Objects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GD_9535613Objects2[k] = gdjs._35373_35336_36039_35338Code.GD_9535613Objects2[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GD_9535613Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2);
gdjs.copyArray(gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1, gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("參考資料"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2);
gdjs.copyArray(runtimeScene.getObjects("版權資訊"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2);
gdjs.copyArray(runtimeScene.getObjects("特別感謝"), gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2);
gdjs.copyArray(runtimeScene.getObjects("製作團隊"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2);
/* Reuse gdjs._35373_35336_36039_35338Code.GD_9535613Objects2 */
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535613Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535613Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("參考"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2[k] = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2);
gdjs.copyArray(gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1, gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2);
/* Reuse gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2 */
gdjs.copyArray(runtimeScene.getObjects("參考資料"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2);
gdjs.copyArray(runtimeScene.getObjects("版權資訊"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2);
gdjs.copyArray(runtimeScene.getObjects("特別感謝"), gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2);
gdjs.copyArray(runtimeScene.getObjects("製作團隊"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2);
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("版權"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1[k] = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1);
/* Reuse gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("參考資料"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1);
/* Reuse gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1 */
gdjs.copyArray(runtimeScene.getObjects("版權資訊"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1);
gdjs.copyArray(runtimeScene.getObjects("特別感謝"), gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1);
gdjs.copyArray(runtimeScene.getObjects("製作團隊"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1);
gdjs.copyArray(runtimeScene.getObjects("謝"), gdjs._35373_35336_36039_35338Code.GD_9535613Objects1);
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535613Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535613Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1[i].Activate(true, null);
}
}
}

}


};gdjs._35373_35336_36039_35338Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("參考"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1);
gdjs.copyArray(runtimeScene.getObjects("版權"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1);
gdjs.copyArray(runtimeScene.getObjects("製作"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1);
gdjs.copyArray(runtimeScene.getObjects("謝"), gdjs._35373_35336_36039_35338Code.GD_9535613Objects1);
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535613Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535613Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "1111.mp3", 1, true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1[k] = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "主畫面");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("製作團隊"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1[k] = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("參考資料"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1);
gdjs.copyArray(runtimeScene.getObjects("版權資訊"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1);
gdjs.copyArray(runtimeScene.getObjects("特別感謝"), gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1);
gdjs.copyArray(runtimeScene.getObjects("製作"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1);
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1[i].activateBehavior("ButtonFSM", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("特別感謝"), gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1[k] = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("參考資料"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1);
gdjs.copyArray(runtimeScene.getObjects("版權資訊"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1);
gdjs.copyArray(runtimeScene.getObjects("製作團隊"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1);
gdjs.copyArray(runtimeScene.getObjects("謝"), gdjs._35373_35336_36039_35338Code.GD_9535613Objects1);
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535613Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535613Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("參考資料"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1[k] = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("參考"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1);
gdjs.copyArray(runtimeScene.getObjects("版權資訊"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1);
gdjs.copyArray(runtimeScene.getObjects("特別感謝"), gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1);
gdjs.copyArray(runtimeScene.getObjects("製作團隊"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1);
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1[i].Activate(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("版權資訊"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1[k] = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("參考資料"), gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1);
gdjs.copyArray(runtimeScene.getObjects("版權"), gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1);
gdjs.copyArray(runtimeScene.getObjects("特別感謝"), gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1);
gdjs.copyArray(runtimeScene.getObjects("製作團隊"), gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1);
gdjs.copyArray(runtimeScene.getObjects("謝"), gdjs._35373_35336_36039_35338Code.GD_9535613Objects1);
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._35373_35336_36039_35338Code.GD_9535613Objects1.length ;i < len;++i) {
    gdjs._35373_35336_36039_35338Code.GD_9535613Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[k] = gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._35373_35336_36039_35338Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._35373_35336_36039_35338Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535613Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535613Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535613Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects3.length = 0;

gdjs._35373_35336_36039_35338Code.eventsList1(runtimeScene);
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite3Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite4Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535613Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535613Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535613Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402Objects3.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771Objects3.length = 0;


return;

}

gdjs['_35373_35336_36039_35338Code'] = gdjs._35373_35336_36039_35338Code;
