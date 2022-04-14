var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3e1cbee3-bbf2-41e0-a215-47a37fbc1e11"],"propsByKey":{"3e1cbee3-bbf2-41e0-a215-47a37fbc1e11":{"name":"diamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ladrao = createSprite(10,385,10,10);
ladrao.shapeColor = "black";

var laser1 = createSprite(298,32,200,5);
laser1.shapeColor = "red";
laser1.velocityY = 5;

var laser2 = createSprite(100,310,200,5);
laser2.shapeColor = "red";
laser2.velocityY = -5;

var diamante = createSprite(380,30);
diamante.setAnimation("diamond_1");
diamante.scale=0.1;


function draw() {
  background("white");
  createEdgeSprites();
  
  ladrao.bounceOff(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  
  ladrao.velocityX = 0;
  ladrao.velocityY = 0;
  
  if (keyDown("UP_ARROW")) {
    ladrao.velocityY = -3;
    
    
  }
  
  if (keyDown("DOWN_ARROW")) {
    ladrao.velocityY = 3;
    
  }
  
    
   if (keyDown("RIGHT_ARROW")) {
    ladrao.velocityX = 3;
    
  }
  
  if (keyDown("LEFT_ARROW")) {
    ladrao.velocityX = -3;
    
  }
  
  if(ladrao.isTouching(diamante)){
    textSize(20);
    stroke("black");
    text("diamante roubado!",100, 200);
    
    ladrao.setVelocity(0,0);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    
    
  }
  
   if (laser1.isTouching(ladrao) || laser2.isTouching(ladrao)) {
    textSize(20);
    text("ladrão capturado!", 100, 200);
    
     laser1.setVelocity(0, 0);
     laser2.setVelocity(0,0);
     ladrao.setVelocity(0,0);
    
  }
  
  
  
  
  drawSprites();
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
