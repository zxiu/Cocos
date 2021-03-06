var PlayLayer = cc.Layer.extend({
	space:null,
	initPhysics:function() {
		//1. new space object
		this.space = new cp.Space();
		//2. setup the  Gravity
		this.space.gravity = cp.v(0, -350);
		// 3. set up Walls
		var wallBottom = new cp.SegmentShape(this.space.staticBody,
				cp.v(0, g_groundHight),// start point
				cp.v(4294967295, g_groundHight),// MAX INT:4294967295
				0);// thickness of wall
		this.space.addStaticShape(wallBottom);
	},	
	ctor : function(){
		// 1. call super class's ctor function
		this._super();
	},
	init:function(){
		// call super class's super function
		this._super();

		// 2. get the screen size of your game canvas
		var winsize = cc.director.getWinSize();

		// 3. calculate the center point
		var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

		// 4. create a background image and set it's position at the center of
		// the screen
		var spritebg = new cc.Sprite(res.FootballBackground_jpg);
		spritebg.setScale(0.5);
		spritebg.setPosition(centerpos);
		this.addChild(spritebg);

		var ball=new cc.Sprite(res.Ball_0_png);
		ball.setScale(0.15);
		ball.setPosition(centerpos);
		this.addChild(ball);


	},

	onPlay : function(){
		cc.log("==onplay clicked");
	}
});

var PlayScene=cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new PlayLayer();
		layer.init();
		this.addChild(layer);
	}
})