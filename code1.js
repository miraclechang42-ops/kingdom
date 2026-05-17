gdjs._35373_35336_36039_35338Code = {};
gdjs._35373_35336_36039_35338Code.localVariables = [];
gdjs._35373_35336_36039_35338Code.idToCallbackMap = new Map();
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1= [];
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2= [];
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2= [];
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1= [];
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects1= [];
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects2= [];


gdjs._35373_35336_36039_35338Code.eventsList0 = function(runtimeScene) {

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


};

gdjs._35373_35336_36039_35338Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects2.length = 0;

gdjs._35373_35336_36039_35338Code.eventsList0(runtimeScene);
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSpriteObjects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9535069_9520316_9522296_9538538Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529305_9521029_9524863_9535613Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9521443_9532771_9536039_9526009Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GD_9529256_9527402_9536039_9535338Objects2.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects1.length = 0;
gdjs._35373_35336_36039_35338Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['_35373_35336_36039_35338Code'] = gdjs._35373_35336_36039_35338Code;
