(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	try {
		if(Reflect.hasField(window,"winParameters")) Reflect.setField(flash.Lib.get_current().loaderInfo,"parameters",(Reflect.field(window,"winParameters"))());
		flash.Lib.get_current().get_stage().loaderInfo = flash.Lib.get_current().loaderInfo;
	} catch( e ) {
	}
	ApplicationMain.preloader = new game.states.loading.LoadingState();
	flash.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/eye1.png",loader);
	ApplicationMain.total++;
	var loader1 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/eye2.png",loader1);
	ApplicationMain.total++;
	var loader2 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/eye3.png",loader2);
	ApplicationMain.total++;
	var loader3 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/eye4.png",loader3);
	ApplicationMain.total++;
	var loader4 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/eye5.png",loader4);
	ApplicationMain.total++;
	var loader5 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/large_hang.png",loader5);
	ApplicationMain.total++;
	var loader6 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/large_loose.png",loader6);
	ApplicationMain.total++;
	var loader7 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/medium_hang.png",loader7);
	ApplicationMain.total++;
	var loader8 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/medium_loose.png",loader8);
	ApplicationMain.total++;
	var loader9 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/small_hang.png",loader9);
	ApplicationMain.total++;
	var loader10 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/blob/small_loose.png",loader10);
	ApplicationMain.total++;
	var loader11 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/cloze/vacuum/backdrop.png",loader11);
	ApplicationMain.total++;
	var loader12 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/cloze/vacuum/counter.png",loader12);
	ApplicationMain.total++;
	var loader13 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/cloze/vacuum/hose_segment.png",loader13);
	ApplicationMain.total++;
	var loader14 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/cloze/vacuum/sentence_drop.png",loader14);
	ApplicationMain.total++;
	var loader15 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/cloze/vacuum/vac.png",loader15);
	ApplicationMain.total++;
	var loader16 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/cloze/vacuum/vac_head.png",loader16);
	ApplicationMain.total++;
	var loader17 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/learning/launcher/background.png",loader17);
	ApplicationMain.total++;
	var loader18 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/learning/launcher/band.png",loader18);
	ApplicationMain.total++;
	var loader19 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/learning/launcher/correctCheck.png",loader19);
	ApplicationMain.total++;
	var loader20 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/learning/launcher/counter.png",loader20);
	ApplicationMain.total++;
	var loader21 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/learning/launcher/droplet.png",loader21);
	ApplicationMain.total++;
	var loader22 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/learning/launcher/incorrectCheck.png",loader22);
	ApplicationMain.total++;
	var loader23 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/learning/launcher/launcherTarget.png",loader23);
	ApplicationMain.total++;
	var loader24 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/learning/launcher/splat.png",loader24);
	ApplicationMain.total++;
	var loader25 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/progressStar.png",loader25);
	ApplicationMain.total++;
	var loader26 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/activities/progress_bg.png",loader26);
	ApplicationMain.total++;
	var loader27 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/alert/continueBtn_up.png",loader27);
	ApplicationMain.total++;
	var loader28 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/alert/pauseBtn_up.png",loader28);
	ApplicationMain.total++;
	var loader29 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/alert/popup_bg.png",loader29);
	ApplicationMain.total++;
	var loader30 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/alert/quitBtn_up.png",loader30);
	ApplicationMain.total++;
	var loader31 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/alert/replayBtn_up.png",loader31);
	ApplicationMain.total++;
	var loader32 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/backdrop.png",loader32);
	ApplicationMain.total++;
	var loader33 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/balloonBtn_up.png",loader33);
	ApplicationMain.total++;
	var loader34 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/helpBtn_up.png",loader34);
	ApplicationMain.total++;
	var loader35 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/list_prog.png",loader35);
	ApplicationMain.total++;
	var loader36 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/selector.png",loader36);
	ApplicationMain.total++;
	var loader37 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unit1.png",loader37);
	ApplicationMain.total++;
	var loader38 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unit2.png",loader38);
	ApplicationMain.total++;
	var loader39 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unit3.png",loader39);
	ApplicationMain.total++;
	var loader40 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unit4.png",loader40);
	ApplicationMain.total++;
	var loader41 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unit5.png",loader41);
	ApplicationMain.total++;
	var loader42 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unit6.png",loader42);
	ApplicationMain.total++;
	var loader43 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unitBtn_selected.png",loader43);
	ApplicationMain.total++;
	var loader44 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unitBtn_up.png",loader44);
	ApplicationMain.total++;
	var loader45 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/unit_done.png",loader45);
	ApplicationMain.total++;
	var loader46 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/unitselect/vacuumBtn_up.png",loader46);
	ApplicationMain.total++;
	var loader47 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/close_btn_up.png",loader47);
	ApplicationMain.total++;
	var loader48 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/smallStar_cloze.png",loader48);
	ApplicationMain.total++;
	var loader49 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/smallStar_learn.png",loader49);
	ApplicationMain.total++;
	var loader50 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/star_cloze.png",loader50);
	ApplicationMain.total++;
	var loader51 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/star_learn.png",loader51);
	ApplicationMain.total++;
	var loader52 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/wordguide_bg.png",loader52);
	ApplicationMain.total++;
	var loader53 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/wordguide_tab.png",loader53);
	ApplicationMain.total++;
	var loader54 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/word_section_selected.png",loader54);
	ApplicationMain.total++;
	var loader55 = new flash.display.Loader();
	ApplicationMain.loaders.set("2d/wordguide/word_section_up.png",loader55);
	ApplicationMain.total++;
	var resourcePrefix = "__ASSET__:bitmap_";
	var _g = 0;
	var _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader56 = ApplicationMain.loaders.get(path);
			loader56.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader56.load(new flash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path1 = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path1);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new flash.net.URLRequest(path1));
		}
	}
};
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
};
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
};
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
};
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.callMethod(Main,Reflect.field(Main,"main"),[]);
};
var flash = {};
flash.events = {};
flash.events.IEventDispatcher = function() { };
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	__class__: flash.events.IEventDispatcher
};
flash.events.EventDispatcher = function(target) {
	if(target != null) this.__target = target; else this.__target = this;
	this.__eventMap = [];
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.compareListeners = function(l1,l2) {
	if(l1.mPriority == l2.mPriority) return 0; else if(l1.mPriority > l2.mPriority) return -1; else return 1;
};
flash.events.EventDispatcher.prototype = {
	addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture;
		if(useCapture == null) capture = false; else capture = useCapture;
		var priority;
		if(inPriority == null) priority = 0; else priority = inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new flash.events.Listener(inListener,capture,priority));
		list.sort(flash.events.EventDispatcher.compareListeners);
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.__target;
		if(event.currentTarget == null) event.currentTarget = this.__target;
		var capture = event.eventPhase == flash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.__getIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,existList: function(type) {
		return this.__eventMap != null && this.__eventMap[type] != undefined;
	}
	,getList: function(type) {
		return this.__eventMap[type];
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture;
		if(inCapture == null) capture = false; else capture = inCapture;
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,setList: function(type,list) {
		this.__eventMap[type] = list;
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,__class__: flash.events.EventDispatcher
};
flash.display = {};
flash.display.IBitmapDrawable = function() { };
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__class__: flash.display.IBitmapDrawable
};
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this,null);
	this.___id = flash.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new flash.geom.Transform(this));
	this.__x = 0.0;
	this.__y = 0.0;
	this.__scaleX = 1.0;
	this.__scaleY = 1.0;
	this.__rotation = 0.0;
	this.__width = 0.0;
	this.__height = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.__filters = new Array();
	this.__boundsRect = new flash.geom.Rectangle();
	this.__scrollRect = null;
	this.__mask = null;
	this.__maskingObj = null;
	this.set___combinedVisible(this.get_visible());
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	dispatchEvent: function(event) {
		var result = this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.__render(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.__getFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.__getFullMatrix(null).invert());
		var rect = this.__boundsRect.transform(m);
		return rect;
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__boundsRect.clone();
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,globalToLocal: function(inPos) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).invert().transformPoint(inPos);
	}
	,handleGraphicsUpdated: function(gfx) {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.__applyFilters(gfx.__surface);
		this.___renderFlags |= 32;
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox;
		if(shapeFlag == null) boundingBox = true; else boundingBox = !shapeFlag;
		if(!boundingBox) return this.__getObjectUnderPoint(new flash.geom.Point(x,y)) != null; else {
			var gfx = this.__getGraphics();
			if(gfx != null) {
				var extX = gfx.__extent.x;
				var extY = gfx.__extent.y;
				var local = this.globalToLocal(new flash.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,invalidateGraphics: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__changed = true;
			gfx.__clearNextCycle = true;
		}
	}
	,localToGlobal: function(point) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).transformPoint(point);
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.__getGraphics();
		if(gfx != null && gfx.__surface != null) flash.Lib.__setSurfaceVisible(gfx.__surface,inValue);
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this.___id + "]";
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.__getGraphics();
			if(gfx == null) {
				this.__boundsRect.x = this.get_x();
				this.__boundsRect.y = this.get_y();
				this.__boundsRect.width = 0;
				this.__boundsRect.height = 0;
			} else {
				this.__boundsRect = gfx.__extent.clone();
				if(this.scale9Grid != null) {
					this.__boundsRect.width *= this.__scaleX;
					this.__boundsRect.height *= this.__scaleY;
					this.__width = this.__boundsRect.width;
					this.__height = this.__boundsRect.height;
				} else {
					this.__width = this.__boundsRect.width * this.__scaleX;
					this.__height = this.__boundsRect.height * this.__scaleY;
				}
				gfx.boundsDirty = false;
			}
			this.___renderFlags &= -65;
		}
	}
	,__addToStage: function(newParent,beforeSibling) {
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if(newParent.__getGraphics() != null) {
			flash.Lib.__setSurfaceId(gfx.__surface,this.___id);
			if(beforeSibling != null && beforeSibling.__getGraphics() != null) flash.Lib.__appendSurface(gfx.__surface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0;
				var _g1 = newParent.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) flash.Lib.__appendSurface(gfx.__surface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,flash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , flash.display.DisplayObjectContainer);
						if(container.__children.length > 0) nextSibling = container.__children[container.__children.length - 1]; else break;
					}
					if(nextSibling.__getGraphics() != gfx) flash.Lib.__appendSurface(gfx.__surface,null,nextSibling.get__topmostSurface()); else flash.Lib.__appendSurface(gfx.__surface);
				}
			}
			flash.Lib.__setSurfaceTransform(gfx.__surface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") flash.Lib.__appendSurface(gfx.__surface);
		if(this.__isOnStage()) {
			this.__srUpdateDivs();
			var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,__applyFilters: function(surface) {
		if(this.__filters != null) {
			var _g = 0;
			var _g1 = this.__filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.__applyFilter(surface);
			}
		}
	}
	,__broadcast: function(event) {
		this.__dispatchEvent(event);
	}
	,__clearFlag: function(mask) {
		this.___renderFlags &= ~mask;
	}
	,__contains: function(child) {
		return false;
	}
	,__dispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,__fireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.__getInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.__setPhase(flash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
		event.__setPhase(flash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return;
		if(event.bubbles) {
			event.__setPhase(flash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g1 = 0;
			while(_g1 < stack.length) {
				var obj1 = stack[_g1];
				++_g1;
				event.currentTarget = obj1;
				obj1.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
	}
	,__getFullMatrix: function(localMatrix) {
		return this.transform.__getFullMatrix(localMatrix);
	}
	,__getGraphics: function() {
		return null;
	}
	,__getInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.__getInteractiveObjectStack(outStack);
	}
	,__getMatrix: function() {
		return this.transform.get_matrix();
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__render();
			var extX = gfx.__extent.x;
			var extY = gfx.__extent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX <= 0 || local.y - extY <= 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.__hitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,__getSurface: function() {
		var gfx = this.__getGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.__surface;
		return surface;
	}
	,__invalidateBounds: function() {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this.___renderFlags |= 4; else this.___renderFlags |= 8;
	}
	,__isOnStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) return true;
		return false;
	}
	,__matrixOverridden: function() {
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.___renderFlags |= 16;
		this.___renderFlags |= 4;
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__removeFromStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) {
			flash.Lib.__removeSurface(gfx.__surface);
			var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false);
			evt.target = this;
			this.dispatchEvent(evt);
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(gfx.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(gfx.__surface);
			this.___renderFlags |= 32;
		}
		var fullAlpha;
		fullAlpha = (this.parent != null?this.parent.__combinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			flash.Lib.__drawToSurface(gfx.__surface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m1 = this.getSurfaceTransform(gfx);
				flash.Lib.__setSurfaceTransform(gfx.__surface,m1);
				this.___renderFlags &= -33;
				this.__srUpdateDivs();
			}
			flash.Lib.__setSurfaceOpacity(gfx.__surface,fullAlpha);
		}
	}
	,__setDimensions: function() {
		if(this.scale9Grid != null) {
			this.__boundsRect.width *= this.__scaleX;
			this.__boundsRect.height *= this.__scaleY;
			this.__width = this.__boundsRect.width;
			this.__height = this.__boundsRect.height;
		} else {
			this.__width = this.__boundsRect.width * this.__scaleX;
			this.__height = this.__boundsRect.height * this.__scaleY;
		}
	}
	,__setFlag: function(mask) {
		this.___renderFlags |= mask;
	}
	,__setFlagToValue: function(mask,value) {
		if(value) this.___renderFlags |= mask; else this.___renderFlags &= ~mask;
	}
	,__setFullMatrix: function(inValue) {
		return this.transform.__setFullMatrix(inValue);
	}
	,__setMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,__testFlag: function(mask) {
		return (this.___renderFlags & mask) != 0;
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var gfx = this.__getGraphics();
		if(gfx != null && lastMoveObj != null && this != lastMoveObj) {
			var ogfx = lastMoveObj.__getGraphics();
			if(ogfx != null) flash.Lib.__setSurfaceZIndexAfter(this.__scrollRect == null?gfx.__surface:this._srWindow,lastMoveObj.__scrollRect == null?ogfx.__surface:lastMoveObj == this.parent?ogfx.__surface:lastMoveObj._srWindow);
		}
		if(gfx == null) return lastMoveObj; else return this;
	}
	,__validateMatrix: function() {
		var parentMatrixInvalid = (this.___renderFlags & 8) != 0 && this.parent != null;
		if((this.___renderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.__validateMatrix();
			var m = this.transform.get_matrix();
			if((this.___renderFlags & 16) != 0) this.___renderFlags &= -5;
			if((this.___renderFlags & 4) != 0) {
				m.identity();
				m.scale(this.__scaleX,this.__scaleY);
				var rad = this.__rotation * flash.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.__x,this.__y);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.__getFullMatrix(null);
			var fm;
			if(this.parent == null) fm = m; else fm = this.parent.transform.__getFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.__setFullMatrix(fm);
				this.___renderFlags |= 32;
			}
			this.___renderFlags &= -29;
		}
	}
	,get__bottommostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,get_filters: function() {
		if(this.__filters == null) return [];
		var result = new Array();
		var _g = 0;
		var _g1 = this.__filters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__boundsInvalid: function() {
		var gfx = this.__getGraphics();
		if(gfx == null) return (this.___renderFlags & 64) != 0; else return (this.___renderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,set_filters: function(filters) {
		var oldFilterCount;
		if(this.__filters == null) oldFilterCount = 0; else oldFilterCount = this.__filters.length;
		if(filters == null) {
			this.__filters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.__filters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(filter != null) this.__filters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__height;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.__boundsRect.height;
		if(this.__scaleY * h != inValue) {
			if(h == 0) {
				this.__scaleY = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				h = this.__boundsRect.height;
			}
			if(h <= 0) return 0;
			this.__scaleY = inValue / h;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(inValue) {
		if(this.__mask != null) this.__mask.__maskingObj = null;
		this.__mask = inValue;
		if(this.__mask != null) this.__mask.__maskingObj = this;
		return this.__mask;
	}
	,get__matrixChainInvalid: function() {
		return (this.___renderFlags & 8) != 0;
	}
	,get__matrixInvalid: function() {
		return (this.___renderFlags & 4) != 0;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,set___combinedVisible: function(inValue) {
		if(this.__combinedVisible != inValue) {
			this.__combinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__combinedVisible;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.__invalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.__children,this);
			this.parent.__invalidateBounds();
		}
		if(inValue != null) {
			inValue.___renderFlags |= 64;
			if(inValue.parent != null) inValue.parent.___renderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt1 = new flash.events.Event(flash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt1);
		} else this.parent = inValue;
		return inValue;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_rotation: function(inValue) {
		if(this.__rotation != inValue) {
			this.__rotation = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_scaleX: function(inValue) {
		if(this.__scaleX != inValue) {
			this.__scaleX = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleY: function(inValue) {
		if(this.__scaleY != inValue) {
			this.__scaleY = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) return null;
		return this.__scrollRect.clone();
	}
	,set_scrollRect: function(inValue) {
		this.__scrollRect = inValue;
		this.__srUpdateDivs();
		return inValue;
	}
	,get_stage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return flash.Lib.__getStage();
		return null;
	}
	,get__topmostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.__invalidateMatrix(true);
		return inValue;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(inValue) {
		if(this.__visible != inValue) {
			this.__visible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__visible;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(inValue) {
		if(this.__x != inValue) {
			this.__x = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(inValue) {
		if(this.__y != inValue) {
			this.__y = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__width;
	}
	,set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.__boundsRect.width;
		if(this.__scaleX * w != inValue) {
			if(w == 0) {
				this.__scaleX = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				w = this.__boundsRect.width;
			}
			if(w <= 0) return 0;
			this.__scaleX = inValue / w;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,__getSrWindow: function() {
		return this._srWindow;
	}
	,__srUpdateDivs: function() {
		var gfx = this.__getGraphics();
		if(gfx == null || this.parent == null) return;
		if(this.__scrollRect == null) {
			if(this._srAxes != null && gfx.__surface.parentNode == this._srAxes && this._srWindow.parentNode != null) this._srWindow.parentNode.replaceChild(gfx.__surface,this._srWindow);
			return;
		}
		if(this._srWindow == null) {
			this._srWindow = window.document.createElement("div");
			this._srAxes = window.document.createElement("div");
			this._srWindow.style.setProperty("position","absolute","");
			this._srWindow.style.setProperty("left","0px","");
			this._srWindow.style.setProperty("top","0px","");
			this._srWindow.style.setProperty("width","0px","");
			this._srWindow.style.setProperty("height","0px","");
			this._srWindow.style.setProperty("overflow","hidden","");
			this._srAxes.style.setProperty("position","absolute","");
			this._srAxes.style.setProperty("left","0px","");
			this._srAxes.style.setProperty("top","0px","");
			this._srWindow.appendChild(this._srAxes);
		}
		var pnt = this.parent.localToGlobal(new flash.geom.Point(this.get_x(),this.get_y()));
		this._srWindow.style.left = pnt.x + "px";
		this._srWindow.style.top = pnt.y + "px";
		this._srWindow.style.width = this.__scrollRect.width + "px";
		this._srWindow.style.height = this.__scrollRect.height + "px";
		this._srAxes.style.left = -pnt.x - this.__scrollRect.x + "px";
		this._srAxes.style.top = -pnt.y - this.__scrollRect.y + "px";
		if(gfx.__surface.parentNode != this._srAxes && gfx.__surface.parentNode != null) {
			gfx.__surface.parentNode.insertBefore(this._srWindow,gfx.__surface);
			flash.Lib.__removeSurface(gfx.__surface);
			this._srAxes.appendChild(gfx.__surface);
		}
	}
	,__class__: flash.display.DisplayObject
	,__properties__: {get__topmostSurface:"get__topmostSurface",get__matrixInvalid:"get__matrixInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__boundsInvalid:"get__boundsInvalid",get__bottommostSurface:"get__bottommostSurface",set___combinedVisible:"set___combinedVisible",set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_width:"set_width",get_width:"get_width",set_visible:"set_visible",get_visible:"get_visible",set_transform:"set_transform",get_stage:"get_stage",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_rotation:"set_rotation",get_rotation:"get_rotation",set_parent:"set_parent",get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_mask:"set_mask",get_mask:"get_mask",set_height:"set_height",get_height:"get_height",set_filters:"set_filters",get_filters:"get_filters"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this.___id + "]";
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,get_tabIndex: function() {
		return this.__tabIndex;
	}
	,set_tabIndex: function(inIndex) {
		return this.__tabIndex = inIndex;
	}
	,__class__: flash.display.InteractiveObject
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
flash.display.DisplayObjectContainer = function() {
	this.__children = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	flash.display.InteractiveObject.call(this);
	this.__combinedAlpha = this.alpha;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.__children.length - 1);
			return object;
		}
		object.set_parent(this);
		if(this.__isOnStage()) object.__addToStage(this);
		if(this.__children == null) this.__children = new Array();
		this.__children.push(object);
		return object;
	}
	,addChildAt: function(object,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.__children.length) return this.addChild(object); else {
			if(this.__isOnStage()) object.__addToStage(this,this.__children[index]);
			this.__children.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,contains: function(child) {
		return this.__contains(child);
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.__children.length;
		return null;
	}
	,getChildByName: function(inName) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == inChild) return i;
		}
		return -1;
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.__getObjectsUnderPoint(point,result);
		return result;
	}
	,removeChild: function(inChild) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) {
				HxOverrides.remove(this.__children,child);
				child.__removeFromStage();
				child.set_parent(null);
				return child;
			}
		}
		throw "removeChild : none found?";
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__removeChild(this.__children[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChildren: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 2147483647;
		if(beginIndex == null) beginIndex = 0;
		if(endIndex == 2147483647) {
			endIndex = this.__children.length - 1;
			if(endIndex < 0) return;
		}
		if(beginIndex > this.__children.length - 1) return; else if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__children.length) throw new flash.errors.RangeError("The supplied index is out of bounds.");
		var numRemovals = endIndex - beginIndex;
		while(numRemovals >= 0) {
			this.removeChildAt(beginIndex);
			numRemovals--;
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.__children.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0;
				var _g = this.__children.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.__children[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + (realindex == null?"null":"" + realindex); else msg += "Internal error: Child was not in __children array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i1 = oldIndex;
			while(i1 > index) {
				this.swapChildren(this.__children[i1],this.__children[i1 - 1]);
				i1--;
			}
		} else if(oldIndex < index) {
			var i2 = oldIndex;
			while(i2 < index) {
				this.swapChildren(this.__children[i2],this.__children[i2 + 1]);
				i2++;
			}
		}
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child1) c1 = i; else if(this.__children[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.__children[c1];
			this.__children[c1] = this.__children[c2];
			this.__children[c2] = swap;
			swap = null;
			this.__swapSurface(c1,c2);
			child1.__unifyChildrenWithDOM();
			child2.__unifyChildrenWithDOM();
		}
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this.___id + "]";
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,__addToStage: function(newParent,beforeSibling) {
		flash.display.InteractiveObject.prototype.__addToStage.call(this,newParent,beforeSibling);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__getGraphics() == null || !child.__isOnStage()) child.__addToStage(this);
		}
	}
	,__broadcast: function(event) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__broadcast(event);
		}
		this.dispatchEvent(event);
	}
	,__contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child || c.__contains(child)) return true;
		}
		return false;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.__children.length - 1;
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) if(this.mouseChildren) return result; else return this;
		}
		return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getObjectsUnderPoint: function(point,stack) {
		var l = this.__children.length - 1;
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this.___renderFlags & 8) != 0) && !((this.___renderFlags & 4) != 0) && this.__children != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__invalidateMatrix();
			}
		}
		flash.display.InteractiveObject.prototype.__invalidateMatrix.call(this,local);
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.__children,child);
		child.__removeFromStage();
		child.set_parent(null);
		return child;
	}
	,__removeFromStage: function() {
		flash.display.InteractiveObject.prototype.__removeFromStage.call(this);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__removeFromStage();
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__visible) return;
		if(clipRect == null && this.__scrollRect != null) clipRect = this.__scrollRect;
		flash.display.InteractiveObject.prototype.__render.call(this,inMask,clipRect);
		if(this.parent != null) this.__combinedAlpha = this.parent.__combinedAlpha * this.alpha; else this.__combinedAlpha = this.alpha;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__visible) {
				if(clipRect != null) {
					if((child.___renderFlags & 4) != 0 || (child.___renderFlags & 8) != 0) child.__validateMatrix();
				}
				child.__render(inMask,clipRect);
			}
		}
		if(this.__addedChildren) {
			this.__unifyChildrenWithDOM();
			this.__addedChildren = false;
		}
	}
	,__swapSurface: function(c1,c2) {
		if(this.__children[c1] == null) throw "Null element at index " + c1 + " length " + this.__children.length;
		if(this.__children[c2] == null) throw "Null element at index " + c2 + " length " + this.__children.length;
		var gfx1 = this.__children[c1].__getGraphics();
		var gfx2 = this.__children[c2].__getGraphics();
		if(gfx1 != null && gfx2 != null) {
			var surface1;
			if(this.__children[c1].__scrollRect == null) surface1 = gfx1.__surface; else surface1 = this.__children[c1].__getSrWindow();
			var surface2;
			if(this.__children[c2].__scrollRect == null) surface2 = gfx2.__surface; else surface2 = this.__children[c2].__getSrWindow();
			if(surface1 != null && surface2 != null) flash.Lib.__swapSurface(surface1,surface2);
		}
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var obj = flash.display.InteractiveObject.prototype.__unifyChildrenWithDOM.call(this,lastMoveObj);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			obj = child.__unifyChildrenWithDOM(obj);
			if(child.get_scrollRect() != null) obj = child;
		}
		return obj;
	}
	,set_filters: function(filters) {
		flash.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,set___combinedVisible: function(inVal) {
		if(inVal != this.__combinedVisible) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set___combinedVisible(child.get_visible() && inVal);
			}
		}
		return flash.display.InteractiveObject.prototype.set___combinedVisible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,set_visible: function(inVal) {
		this.set___combinedVisible(this.parent != null?this.parent.__combinedVisible && inVal:inVal);
		return flash.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,set_scrollRect: function(inValue) {
		inValue = flash.display.InteractiveObject.prototype.set_scrollRect.call(this,inValue);
		this.__unifyChildrenWithDOM();
		return inValue;
	}
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
	this.__graphics = new flash.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.__isOnStage()) this.get_stage().__startDrag(this,lockCenter,bounds);
	}
	,stopDrag: function() {
		if(this.__isOnStage()) {
			this.get_stage().__stopDrag(this);
			var l = this.parent.__children.length - 1;
			var obj = this.get_stage();
			var _g1 = 0;
			var _g = this.parent.__children.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.__children[l - i].__getObjectUnderPoint(new flash.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.__dropTarget = obj; else this.__dropTarget = this.get_stage();
		}
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this.___id + "]";
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,get_dropTarget: function() {
		return this.__dropTarget;
	}
	,get_graphics: function() {
		return this.__graphics;
	}
	,set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.__cursorCallbackOver != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
		if(this.__cursorCallbackOut != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		if(!cursor) flash.Lib.__setCursor(flash._Lib.CursorType.Default); else {
			this.__cursorCallbackOver = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Pointer);
			};
			this.__cursorCallbackOut = function(_1) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Default);
			};
			this.addEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{set_useHandCursor:"set_useHandCursor",get_graphics:"get_graphics",get_dropTarget:"get_dropTarget"})
});
var com = {};
com.firstplayable = {};
com.firstplayable.hxlib = {};
com.firstplayable.hxlib.haxe = {};
com.firstplayable.hxlib.haxe.app = {};
com.firstplayable.hxlib.haxe.app.Application = function() {
	flash.display.Sprite.call(this);
	com.firstplayable.hxlib.haxe.app.Application.app = this;
	flash.Lib.get_current().get_stage().addChild(com.firstplayable.hxlib.haxe.app.Application.app);
	if(com.firstplayable.hxlib.haxe.Debug.exists(this.get_stage(),null,null,{ fileName : "Application.hx", lineNumber : 113, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "new"})) this.init(); else this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
};
$hxClasses["com.firstplayable.hxlib.haxe.app.Application"] = com.firstplayable.hxlib.haxe.app.Application;
com.firstplayable.hxlib.haxe.app.Application.__name__ = ["com","firstplayable","hxlib","haxe","app","Application"];
com.firstplayable.hxlib.haxe.app.Application.__super__ = flash.display.Sprite;
com.firstplayable.hxlib.haxe.app.Application.prototype = $extend(flash.display.Sprite.prototype,{
	get_contentSize: function() {
		return new flash.geom.Point(this.get_stage().get_width(),this.get_stage().get_height());
	}
	,get_appSize: function() {
		return new flash.geom.Point(this.get_stage().get_stageWidth(),this.get_stage().get_stageHeight());
	}
	,get_screenSize: function() {
		com.firstplayable.hxlib.haxe.Debug.log("Property screenSize is not implemented for this target.",null,{ fileName : "Application.hx", lineNumber : 82, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "get_screenSize"});
		return new flash.geom.Point();
	}
	,get_center: function() {
		return new flash.geom.Point(this.get_appSize().x * 0.5,this.get_appSize().y * 0.5);
	}
	,init: function(e) {
		if(this.m_inited) return;
		this.m_inited = true;
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
		this.initSize = new flash.geom.Point(this.get_stage().get_stageWidth(),this.get_stage().get_stageHeight());
		this.get_stage().addEventListener(flash.events.Event.DEACTIVATE,$bind(this,this.deactivate));
		this.get_stage().addEventListener(flash.events.Event.RESIZE,$bind(this,this.onResize));
		this.setDefaults();
		this.updateBuildInfo();
		com.firstplayable.hxlib.haxe.Debug.log("application ready!",null,{ fileName : "Application.hx", lineNumber : 139, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "init"});
		this.onInitialized();
	}
	,setDefaults: function() {
		this.get_stage().set_quality(flash.display.StageQuality.BEST);
		this.get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
		this.get_stage().align = flash.display.StageAlign.TOP_LEFT;
	}
	,onInitialized: function() {
		com.firstplayable.hxlib.haxe.Debug.log("Function onInitialized not set! Please use 'onInitialized = aFunc;' before calling super().",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "Application.hx", lineNumber : 165, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "onInitialized"});
	}
	,onResize: function(e) {
	}
	,deactivate: function(e) {
		com.firstplayable.hxlib.haxe.Debug.log("Deactivating...",null,{ fileName : "Application.hx", lineNumber : 180, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "deactivate"});
		this.get_stage().addEventListener(flash.events.Event.ACTIVATE,$bind(this,this.activate));
	}
	,activate: function(e) {
		com.firstplayable.hxlib.haxe.Debug.log("Activating...",null,{ fileName : "Application.hx", lineNumber : 191, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "activate"});
		if(com.firstplayable.hxlib.haxe.Debug.exists(this.get_stage(),null,null,{ fileName : "Application.hx", lineNumber : 193, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "activate"})) this.get_stage().removeEventListener(flash.events.Event.ACTIVATE,$bind(this,this.activate));
	}
	,exit: function(code) {
		if(code == null) code = 0;
		com.firstplayable.hxlib.haxe.Debug.log("Exiting... code " + code,null,{ fileName : "Application.hx", lineNumber : 205, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "exit"});
		window.close();
	}
	,pause: function() {
		com.firstplayable.hxlib.haxe.Debug.log("The current implentation of Application.pause() only works in AIR!",null,{ fileName : "Application.hx", lineNumber : 224, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "pause"});
	}
	,resume: function() {
		com.firstplayable.hxlib.haxe.Debug.log("The current implentation of Application.pause() only works in AIR!",null,{ fileName : "Application.hx", lineNumber : 238, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "resume"});
	}
	,setFullscreenMode: function(fullscreen) {
		var fsMsg;
		if(fullscreen) fsMsg = "Enabling full screen mode..."; else fsMsg = "Disabling full screen mode...";
		com.firstplayable.hxlib.haxe.Debug.log(fsMsg,null,{ fileName : "Application.hx", lineNumber : 254, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "setFullscreenMode"});
		com.firstplayable.hxlib.haxe.Debug.log("Setting full-screen mode only works for Flash targets.",null,{ fileName : "Application.hx", lineNumber : 259, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "setFullscreenMode"});
	}
	,enableMenu: function(enabled) {
		var eMsg;
		if(enabled) eMsg = "Enabling menu context..."; else eMsg = "Disabling menu context...";
		com.firstplayable.hxlib.haxe.Debug.log(eMsg,null,{ fileName : "Application.hx", lineNumber : 270, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "enableMenu"});
		com.firstplayable.hxlib.haxe.Debug.log("The Flash context menu can only be enabled for Flash targets!",null,{ fileName : "Application.hx", lineNumber : 275, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "enableMenu"});
	}
	,updateBuildInfo: function() {
		com.firstplayable.hxlib.haxe.app.Application.buildInfo = "2014-08-28 17:04:35";
		com.firstplayable.hxlib.haxe.Debug.log("Build Info: Local @" + com.firstplayable.hxlib.haxe.app.Application.buildInfo,null,{ fileName : "Application.hx", lineNumber : 285, className : "com.firstplayable.hxlib.haxe.app.Application", methodName : "updateBuildInfo"});
	}
	,__class__: com.firstplayable.hxlib.haxe.app.Application
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_center:"get_center",get_screenSize:"get_screenSize",get_appSize:"get_appSize",get_contentSize:"get_contentSize"})
});
var Main = function() {
	this.onInitialized = $bind(this,this.start);
	com.firstplayable.hxlib.haxe.app.Application.call(this);
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	new Main();
};
Main.__super__ = com.firstplayable.hxlib.haxe.app.Application;
Main.prototype = $extend(com.firstplayable.hxlib.haxe.app.Application.prototype,{
	setDefaults: function() {
		com.firstplayable.hxlib.haxe.app.Application.prototype.setDefaults.call(this);
		this.get_stage().set_scaleX(1.);
		this.get_stage().set_scaleY(1.);
	}
	,start: function() {
		com.firstplayable.hxlib.haxe.display.GameDisplay.addLayer(game.LayerName.PRIMARY[0]);
		com.firstplayable.hxlib.haxe.display.GameDisplay.addLayer(game.LayerName.GAME[0]);
		com.firstplayable.hxlib.haxe.display.GameDisplay.addLayer(game.LayerName.HUD[0]);
		com.firstplayable.hxlib.haxe.display.GameDisplay.addLayer(game.LayerName.GUIDE[0]);
		com.firstplayable.hxlib.haxe.display.GameDisplay.addLayer(game.LayerName.DEBUG[0]);
		com.firstplayable.hxlib.haxe.state.StateManager.addState(new game.states.activity.cloze.vacuum.VacuumClozeState(game.states.GameStates.CLOZE));
		com.firstplayable.hxlib.haxe.state.StateManager.addState(new game.states.activity.learning.launcher.LearningLauncher(game.states.GameStates.ACTIVE));
		com.firstplayable.hxlib.haxe.state.StateManager.addState(new game.states.unitselect.UnitSelectState(game.states.GameStates.LANDING));
		game.GlobalVars.init();
		game.save.BartlettSaveMan.fetch();
	}
	,__class__: Main
});
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	get_stage: function() {
		return flash.Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
var Configs = function() { };
$hxClasses["Configs"] = Configs;
Configs.__name__ = ["Configs"];
Configs.applyScale = function(obj) {
	obj.set_scaleX(1.0);
	obj.set_scaleY(1.0);
};
var DateTools = function() { };
$hxClasses["DateTools"] = DateTools;
DateTools.__name__ = ["DateTools"];
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) return DateTools.DAYS_OF_MONTH[month];
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	if(isB) return 29; else return 28;
};
var openfl = {};
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getPath: function(id) {
		return null;
	}
	,getSound: function(id) {
		return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,load: function(handler) {
		handler(this);
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,__class__: openfl.AssetLibrary
};
var DefaultAssetLibrary = function() {
	openfl.AssetLibrary.call(this);
	this.addExternal("2d/activities/blob/eye1.png","image","2d/activities/blob/eye1.png");
	this.addExternal("2d/activities/blob/eye2.png","image","2d/activities/blob/eye2.png");
	this.addExternal("2d/activities/blob/eye3.png","image","2d/activities/blob/eye3.png");
	this.addExternal("2d/activities/blob/eye4.png","image","2d/activities/blob/eye4.png");
	this.addExternal("2d/activities/blob/eye5.png","image","2d/activities/blob/eye5.png");
	this.addExternal("2d/activities/blob/large_hang.png","image","2d/activities/blob/large_hang.png");
	this.addExternal("2d/activities/blob/large_loose.png","image","2d/activities/blob/large_loose.png");
	this.addExternal("2d/activities/blob/medium_hang.png","image","2d/activities/blob/medium_hang.png");
	this.addExternal("2d/activities/blob/medium_loose.png","image","2d/activities/blob/medium_loose.png");
	this.addExternal("2d/activities/blob/small_hang.png","image","2d/activities/blob/small_hang.png");
	this.addExternal("2d/activities/blob/small_loose.png","image","2d/activities/blob/small_loose.png");
	this.addExternal("2d/activities/cloze/vacuum/backdrop.png","image","2d/activities/cloze/vacuum/backdrop.png");
	this.addExternal("2d/activities/cloze/vacuum/counter.png","image","2d/activities/cloze/vacuum/counter.png");
	this.addExternal("2d/activities/cloze/vacuum/hose_segment.png","image","2d/activities/cloze/vacuum/hose_segment.png");
	this.addExternal("2d/activities/cloze/vacuum/sentence_drop.png","image","2d/activities/cloze/vacuum/sentence_drop.png");
	this.addExternal("2d/activities/cloze/vacuum/vac.png","image","2d/activities/cloze/vacuum/vac.png");
	this.addExternal("2d/activities/cloze/vacuum/vac_head.png","image","2d/activities/cloze/vacuum/vac_head.png");
	this.addExternal("2d/activities/learning/launcher/background.png","image","2d/activities/learning/launcher/background.png");
	this.addExternal("2d/activities/learning/launcher/band.png","image","2d/activities/learning/launcher/band.png");
	this.addExternal("2d/activities/learning/launcher/correctCheck.png","image","2d/activities/learning/launcher/correctCheck.png");
	this.addExternal("2d/activities/learning/launcher/counter.png","image","2d/activities/learning/launcher/counter.png");
	this.addExternal("2d/activities/learning/launcher/droplet.png","image","2d/activities/learning/launcher/droplet.png");
	this.addExternal("2d/activities/learning/launcher/incorrectCheck.png","image","2d/activities/learning/launcher/incorrectCheck.png");
	this.addExternal("2d/activities/learning/launcher/launcherTarget.png","image","2d/activities/learning/launcher/launcherTarget.png");
	this.addExternal("2d/activities/learning/launcher/splat.png","image","2d/activities/learning/launcher/splat.png");
	this.addExternal("2d/activities/progressStar.png","image","2d/activities/progressStar.png");
	this.addExternal("2d/activities/progress_bg.png","image","2d/activities/progress_bg.png");
	this.addExternal("2d/alert/continueBtn_up.png","image","2d/alert/continueBtn_up.png");
	this.addExternal("2d/alert/pauseBtn_up.png","image","2d/alert/pauseBtn_up.png");
	this.addExternal("2d/alert/popup_bg.png","image","2d/alert/popup_bg.png");
	this.addExternal("2d/alert/quitBtn_up.png","image","2d/alert/quitBtn_up.png");
	this.addExternal("2d/alert/replayBtn_up.png","image","2d/alert/replayBtn_up.png");
	this.addExternal("2d/unitselect/backdrop.png","image","2d/unitselect/backdrop.png");
	this.addExternal("2d/unitselect/balloonBtn_up.png","image","2d/unitselect/balloonBtn_up.png");
	this.addExternal("2d/unitselect/helpBtn_up.png","image","2d/unitselect/helpBtn_up.png");
	this.addExternal("2d/unitselect/list_prog.png","image","2d/unitselect/list_prog.png");
	this.addExternal("2d/unitselect/selector.png","image","2d/unitselect/selector.png");
	this.addExternal("2d/unitselect/unit1.png","image","2d/unitselect/unit1.png");
	this.addExternal("2d/unitselect/unit2.png","image","2d/unitselect/unit2.png");
	this.addExternal("2d/unitselect/unit3.png","image","2d/unitselect/unit3.png");
	this.addExternal("2d/unitselect/unit4.png","image","2d/unitselect/unit4.png");
	this.addExternal("2d/unitselect/unit5.png","image","2d/unitselect/unit5.png");
	this.addExternal("2d/unitselect/unit6.png","image","2d/unitselect/unit6.png");
	this.addExternal("2d/unitselect/unitBtn_selected.png","image","2d/unitselect/unitBtn_selected.png");
	this.addExternal("2d/unitselect/unitBtn_up.png","image","2d/unitselect/unitBtn_up.png");
	this.addExternal("2d/unitselect/unit_done.png","image","2d/unitselect/unit_done.png");
	this.addExternal("2d/unitselect/vacuumBtn_up.png","image","2d/unitselect/vacuumBtn_up.png");
	this.addExternal("2d/wordguide/close_btn_up.png","image","2d/wordguide/close_btn_up.png");
	this.addExternal("2d/wordguide/smallStar_cloze.png","image","2d/wordguide/smallStar_cloze.png");
	this.addExternal("2d/wordguide/smallStar_learn.png","image","2d/wordguide/smallStar_learn.png");
	this.addExternal("2d/wordguide/star_cloze.png","image","2d/wordguide/star_cloze.png");
	this.addExternal("2d/wordguide/star_learn.png","image","2d/wordguide/star_learn.png");
	this.addExternal("2d/wordguide/wordguide_bg.png","image","2d/wordguide/wordguide_bg.png");
	this.addExternal("2d/wordguide/wordguide_tab.png","image","2d/wordguide/wordguide_tab.png");
	this.addExternal("2d/wordguide/word_section_selected.png","image","2d/wordguide/word_section_selected.png");
	this.addExternal("2d/wordguide/word_section_up.png","image","2d/wordguide/word_section_up.png");
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	addEmbed: function(id,kind,value) {
		var value1 = value;
		DefaultAssetLibrary.className.set(id,value1);
		var value2 = Reflect.field(openfl.AssetType,kind.toUpperCase());
		DefaultAssetLibrary.type.set(id,value2);
	}
	,addExternal: function(id,kind,value) {
		DefaultAssetLibrary.path.set(id,value);
		var value1 = Reflect.field(openfl.AssetType,kind.toUpperCase());
		DefaultAssetLibrary.type.set(id,value1);
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,getBitmapData: function(id) {
		return (js.Boot.__cast(((function($this) {
			var $r;
			var key = DefaultAssetLibrary.path.get(id);
			$r = ApplicationMain.loaders.get(key);
			return $r;
		}(this))).contentLoaderInfo.content , flash.display.Bitmap)).bitmapData;
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = DefaultAssetLibrary.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") {
			bytes = new flash.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(DefaultAssetLibrary.className.get(id),[]) , flash.text.Font);
	}
	,getMusic: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getPath: function(id) {
		return DefaultAssetLibrary.path.get(id);
	}
	,getSound: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,isLocal: function(id,type) {
		return true;
	}
	,loadBitmapData: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.display.Loader();
			loader.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , flash.display.Bitmap)).bitmapData);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				var bytes = new flash.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw "EReg::matched";
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,first: function() {
		if(this.h == null) return null; else return this.h[0];
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
Math.__name__ = ["Math"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 16777215;
	}
	,getHeight: function() {
		var height = 704;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getWidth: function() {
		var width = 1024;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : true, __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c;
		if((v instanceof Array) && v.__enum__ == null) c = Array; else c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
com.firstplayable.hxlib.haxe.Severity = $hxClasses["com.firstplayable.hxlib.haxe.Severity"] = { __ename__ : true, __constructs__ : ["Info","Warn","Error"] };
com.firstplayable.hxlib.haxe.Severity.Info = ["Info",0];
com.firstplayable.hxlib.haxe.Severity.Info.toString = $estr;
com.firstplayable.hxlib.haxe.Severity.Info.__enum__ = com.firstplayable.hxlib.haxe.Severity;
com.firstplayable.hxlib.haxe.Severity.Warn = ["Warn",1];
com.firstplayable.hxlib.haxe.Severity.Warn.toString = $estr;
com.firstplayable.hxlib.haxe.Severity.Warn.__enum__ = com.firstplayable.hxlib.haxe.Severity;
com.firstplayable.hxlib.haxe.Severity.Error = ["Error",2];
com.firstplayable.hxlib.haxe.Severity.Error.toString = $estr;
com.firstplayable.hxlib.haxe.Severity.Error.__enum__ = com.firstplayable.hxlib.haxe.Severity;
com.firstplayable.hxlib.haxe.Debug = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.Debug"] = com.firstplayable.hxlib.haxe.Debug;
com.firstplayable.hxlib.haxe.Debug.__name__ = ["com","firstplayable","hxlib","haxe","Debug"];
com.firstplayable.hxlib.haxe.Debug.warn = function(msg,codePos) {
	com.firstplayable.hxlib.haxe.Debug.log(msg,com.firstplayable.hxlib.haxe.Severity.Warn,codePos);
};
com.firstplayable.hxlib.haxe.Debug.error = function(msg,codePos) {
	com.firstplayable.hxlib.haxe.Debug.log(msg,com.firstplayable.hxlib.haxe.Severity.Error,codePos);
};
com.firstplayable.hxlib.haxe.Debug.log_if = function(condition,msg,codePos) {
	if(condition) com.firstplayable.hxlib.haxe.Debug.log(msg,null,codePos);
};
com.firstplayable.hxlib.haxe.Debug.warn_if = function(condition,msg,codePos) {
	if(condition) com.firstplayable.hxlib.haxe.Debug.log(msg,com.firstplayable.hxlib.haxe.Severity.Warn,codePos);
};
com.firstplayable.hxlib.haxe.Debug.error_if = function(condition,msg,codePos) {
	if(condition) com.firstplayable.hxlib.haxe.Debug.log(msg,com.firstplayable.hxlib.haxe.Severity.Error,codePos);
};
com.firstplayable.hxlib.haxe.Debug.log = function(msg,severity,codePos) {
};
com.firstplayable.hxlib.haxe.Debug.trin = function(codePos) {
	com.firstplayable.hxlib.haxe.Debug.log("==>",com.firstplayable.hxlib.haxe.Severity.Info,codePos);
};
com.firstplayable.hxlib.haxe.Debug.trout = function(codePos) {
	com.firstplayable.hxlib.haxe.Debug.log("<==",com.firstplayable.hxlib.haxe.Severity.Info,codePos);
};
com.firstplayable.hxlib.haxe.Debug.trhere = function(codePos) {
	com.firstplayable.hxlib.haxe.Debug.log("<@>",com.firstplayable.hxlib.haxe.Severity.Info,codePos);
};
com.firstplayable.hxlib.haxe.Debug.exists = function(val,severity,varname,codePos) {
	if(varname == null) varname = "variable";
	if(severity == null) severity = com.firstplayable.hxlib.haxe.Severity.Warn;
	if(val != null) return true; else {
		com.firstplayable.hxlib.haxe.Debug.log(varname + " is null!",severity,codePos);
		return false;
	}
};
com.firstplayable.hxlib.haxe.StdX = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.StdX"] = com.firstplayable.hxlib.haxe.StdX;
com.firstplayable.hxlib.haxe.StdX.__name__ = ["com","firstplayable","hxlib","haxe","StdX"];
com.firstplayable.hxlib.haxe.StdX["as"] = function(obj,type) {
	if(js.Boot.__instanceof(obj,type)) return obj; else return null;
};
com.firstplayable.hxlib.haxe.StdX.to = function(obj,type) {
	return obj;
};
com.firstplayable.hxlib.haxe.StdX.isNull = function(obj) {
	return obj == null;
};
com.firstplayable.hxlib.haxe.StdX.isValid = function(obj) {
	return obj != null;
};
com.firstplayable.hxlib.haxe.StdX.parseBool = function(value,trueSet,falseSet,errorReturn) {
	if(errorReturn == null) errorReturn = false;
	if(value.length <= 0) {
		com.firstplayable.hxlib.haxe.Debug.log("Parsed bool( \"\" ) is an unexpected/invalid value. Returning " + (errorReturn == null?"null":"" + errorReturn) + ".",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "StdX.hx", lineNumber : 84, className : "com.firstplayable.hxlib.haxe.StdX", methodName : "parseBool"});
		return errorReturn;
	}
	if(trueSet != null) {
		var _g = 0;
		while(_g < trueSet.length) {
			var knownTrue = trueSet[_g];
			++_g;
			if(knownTrue != value) continue;
			return true;
		}
	}
	if(falseSet != null) {
		var _g1 = 0;
		while(_g1 < falseSet.length) {
			var knownFalse = falseSet[_g1];
			++_g1;
			if(knownFalse != value) continue;
			return false;
		}
	}
	var normalizedString = value.toLowerCase();
	if(!(trueSet != null) && normalizedString == "true" || normalizedString == "yes") return true; else if(!(falseSet != null) && normalizedString == "false" || normalizedString == "no") return false;
	com.firstplayable.hxlib.haxe.Debug.log("Parsed bool( '" + value + "' ) is an unexpected/invalid value. Returning " + (errorReturn == null?"null":"" + errorReturn) + ".",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "StdX.hx", lineNumber : 129, className : "com.firstplayable.hxlib.haxe.StdX", methodName : "parseBool"});
	return errorReturn;
};
com.firstplayable.hxlib.haxe.StdX["int"] = function(bool) {
	if(bool) return 1; else return 0;
};
com.firstplayable.hxlib.haxe.StdX.bool = function($int) {
	if($int > 0) return true; else return false;
};
com.firstplayable.hxlib.haxe.StdX.__super__ = Std;
com.firstplayable.hxlib.haxe.StdX.prototype = $extend(Std.prototype,{
	__class__: com.firstplayable.hxlib.haxe.StdX
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,nextFrame: function() {
	}
	,play: function() {
	}
	,prevFrame: function() {
	}
	,stop: function() {
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this.___id + "]";
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_totalFrames: function() {
		return this.__totalFrames;
	}
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_totalFrames:"get_totalFrames",get_framesLoaded:"get_framesLoaded",get_currentFrame:"get_currentFrame"})
});
com.firstplayable.hxlib.haxe.debug = {};
com.firstplayable.hxlib.haxe.debug.DebuggerPanel = function() {
	flash.display.MovieClip.call(this);
	var isDebug = false;
	this.m_buildStamp = "2014-08-28 17:04:34";
	if(isDebug) this.m_debugMode = "ON"; else this.m_debugMode = "OFF";
	this.m_fps = 0;
	this.m_mousePos = new flash.geom.Point();
	var f = new flash.text.TextFormat(null,12,16777215);
	this.m_debugField = new flash.text.TextField();
	this.m_debugField.set_defaultTextFormat(f);
	this.m_debugField.mouseEnabled = false;
	this.m_mouseField = new flash.text.TextField();
	this.m_mouseField.set_defaultTextFormat(f);
	this.m_mouseField.mouseEnabled = false;
	this.m_traceField = new flash.text.TextField();
	this.m_traceField.set_defaultTextFormat(f);
	this.m_traceField.mouseEnabled = false;
	this.m_traceField.set_wordWrap(true);
	this.m_startTime = flash.Lib.getTimer();
	this.m_frameCnt = 0;
	this.secs = 0;
	this.updateText();
	this.m_debugField.set_width(this.m_debugField.get_textWidth());
	this.m_debugField.set_height(this.m_debugField.get_textHeight() * this.m_debugField.get_numLines());
	this.m_traceField.set_y(this.m_debugField.get_height());
	this.m_traceField.set_width(this.m_debugField.get_width());
	this.m_traceField.set_height(25);
	this.redraw();
	this.mouseEnabled = false;
	this.addChild(this.m_debugField);
	this.addChild(this.m_mouseField);
	this.addChild(this.m_traceField);
	this.start();
};
$hxClasses["com.firstplayable.hxlib.haxe.debug.DebuggerPanel"] = com.firstplayable.hxlib.haxe.debug.DebuggerPanel;
com.firstplayable.hxlib.haxe.debug.DebuggerPanel.__name__ = ["com","firstplayable","hxlib","haxe","debug","DebuggerPanel"];
com.firstplayable.hxlib.haxe.debug.DebuggerPanel.log = function(s) {
	com.firstplayable.hxlib.haxe.debug.DebuggerPanel.m_sBuffer.b += Std.string(s + "\n");
};
com.firstplayable.hxlib.haxe.debug.DebuggerPanel.__super__ = flash.display.MovieClip;
com.firstplayable.hxlib.haxe.debug.DebuggerPanel.prototype = $extend(flash.display.MovieClip.prototype,{
	redraw: function() {
		this.get_graphics().clear();
		this.get_graphics().beginFill(0,0.5);
		this.get_graphics().drawRect(0,0,200,this.m_debugField.get_height());
		this.get_graphics().endFill();
		this.get_graphics().beginFill(1,0.2);
		this.get_graphics().drawRect(this.m_traceField.get_x(),this.m_traceField.get_y(),200,this.m_traceField.get_height());
		this.get_graphics().endFill();
	}
	,updateText: function() {
		var m = this.secs / 60 | 0;
		var s = this.secs % 60;
		this.m_debugField.set_text("T: " + m + "m " + s + "s        FPS: " + this.m_fps + "\nv" + this.m_buildStamp + "\nDebug " + this.m_debugMode);
		if(com.firstplayable.hxlib.haxe.debug.DebuggerPanel.m_sBuffer.b != "") {
			if(this.m_debugField.get_text() != com.firstplayable.hxlib.haxe.debug.DebuggerPanel.m_sBuffer.b) {
				this.m_traceField.set_text(com.firstplayable.hxlib.haxe.debug.DebuggerPanel.m_sBuffer.b);
				this.m_traceField.set_height(this.m_traceField.get_textHeight() + 10);
				com.firstplayable.hxlib.haxe.debug.DebuggerPanel.m_sBuffer = new StringBuf();
				this.redraw();
			}
		}
	}
	,start: function() {
		this.mouseEnabled = false;
		this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.updateTime));
	}
	,updateMouse: function() {
		this.m_mousePos.x = Std["int"](this.get_stage().get_mouseX() / this.get_stage().get_scaleX());
		this.m_mousePos.y = Std["int"](this.get_stage().get_mouseY() / this.get_stage().get_scaleY());
		this.m_mouseField.set_x(this.m_mousePos.x + 15);
		this.m_mouseField.set_y(this.m_mousePos.y - 5);
		this.m_mouseField.set_text("x: " + this.m_mousePos.x + "\ny: " + this.m_mousePos.y);
		if(this.m_mouseField.get_x() + this.m_mouseField.get_textWidth() > this.get_stage().get_stageWidth() / this.get_stage().get_scaleX()) this.m_mouseField.set_x(this.m_mousePos.x - this.m_mouseField.get_textWidth());
		if(this.m_mouseField.get_y() + this.m_mouseField.get_textHeight() > this.get_stage().get_stageHeight() / this.get_stage().get_scaleY()) this.m_mouseField.set_y(this.m_mousePos.y - 50);
	}
	,updateTime: function(e) {
		var ellapsedTime = (flash.Lib.getTimer() - this.m_startTime) / 1000;
		++this.m_frameCnt;
		if(ellapsedTime > 1) {
			++this.secs;
			this.m_fps = (this.m_frameCnt / ellapsedTime * 10 | 0) / 10;
			this.updateText();
			this.m_startTime = flash.Lib.getTimer();
			this.m_frameCnt = 0;
		}
		this.updateMouse();
		this.updateText();
	}
	,__class__: com.firstplayable.hxlib.haxe.debug.DebuggerPanel
});
flash.display.Graphics = function(inSurface) {
	flash.Lib.__bootstrap();
	if(inSurface == null) {
		this.__surface = window.document.createElement("canvas");
		this.__surface.width = 0;
		this.__surface.height = 0;
	} else this.__surface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.__clearLine();
	this.mLineJobs = [];
	this.__changed = true;
	this.nextDrawIndex = 0;
	this.__extent = new flash.geom.Rectangle();
	this.__extentWithFilters = new flash.geom.Rectangle();
	this._padding = 0.0;
	this.__clearNextCycle = true;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.__detectIsPointInPathMode = function() {
	var canvas = window.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return flash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv;
	if(ctx.isPointInPath(0.3,0.3)) rv = flash.display.PointInPathMode.USER_SPACE; else rv = flash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
};
flash.display.Graphics.prototype = {
	addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new flash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat;
		if(in_repeat == null) repeat = true; else repeat = in_repeat;
		var smooth;
		if(in_smooth == null) smooth = false; else smooth = in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.__expandStandardExtent(bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0,bitmap.___textureBuffer != null?bitmap.___textureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap.___textureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		if(alpha == null) this.mFillAlpha = 1.0; else this.mFillAlpha = alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx;
		try {
			ctx = this.__surface.getContext("2d");
		} catch( e ) {
			ctx = null;
		}
		if(ctx != null) ctx.drawImage(inTexture.___textureBuffer,this.mPenX,this.mPenY);
	}
	,clear: function() {
		this.__clearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.__clearNextCycle = true;
		this.boundsDirty = true;
		this.__extent.x = 0.0;
		this.__extent.y = 0.0;
		this.__extent.width = 0.0;
		this.__extent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new flash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.__changed = true;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new flash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p11 = matrix.transformPoint(new flash.geom.Point(g.focal * 819.2,0));
			var p21 = matrix.transformPoint(new flash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p11.x,p11.y,0,p21.x,p11.y,p21.y);
		}
		var _g = 0;
		var _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0;
		var _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new flash.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == flash.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == flash.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == flash.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new flash.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal;
		if(focalPointRatio == null) focal = 0; else focal = focalPointRatio;
		return new flash.display.Grad(points,matrix,flags,focal);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.__drawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.__drawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var $it0 = $iterator(flash._Vector.Vector_Impl_)(points);
		while( $it0.hasNext() ) {
			var data = $it0.next();
			if(data == null) this.mFilling = true; else switch(data.__graphicsDataType) {
			case flash.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.__graphicsFillType) {
				case flash.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case flash.display.GraphicsFillType.GRADIENT_FILL:
					var fill1 = stroke.fill;
					this.lineGradientStyle(fill1.type,fill1.colors,fill1.alphas,fill1.ratios,fill1.matrix,fill1.spreadMethod,fill1.interpolationMethod,fill1.focalPointRatio);
					break;
				}
				break;
			case flash.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g1 = 0;
				var _g = flash._Vector.Vector_Impl_.get_length(path.commands);
				while(_g1 < _g) {
					var i = _g1++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case flash.display.GraphicsDataType.SOLID:
				var fill2 = data;
				this.beginFill(fill2.color,fill2.alpha);
				break;
			case flash.display.GraphicsDataType.GRADIENT:
				var fill3 = data;
				this.beginGradientFill(fill3.type,fill3.colors,fill3.alphas,fill3.ratios,fill3.matrix,fill3.spreadMethod,fill3.interpolationMethod,fill3.focalPointRatio);
				break;
			}
		}
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(ry == -1) ry = rx;
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__expandStandardExtent(flash.Lib.get_current().get_stage().get_stageWidth(),flash.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new flash.display.Drawable(null,null,null,null,null,null,new flash.display.TileJob(sheet,tileData,flags)));
		this.__changed = true;
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,getContext: function() {
		try {
			return this.__surface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.__clearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			if(color == null) this.mCurrentLine.colour = 0; else this.mCurrentLine.colour = color;
			if(alpha == null) this.mCurrentLine.alpha = 1.0; else this.mCurrentLine.alpha = alpha;
			if(miterLimit == null) this.mCurrentLine.miter_limit = 3.0; else this.mCurrentLine.miter_limit = miterLimit;
			if(pixelHinting == null || !pixelHinting) this.mCurrentLine.pixel_hinting = 0; else this.mCurrentLine.pixel_hinting = 16384;
		}
		if(caps != null) switch(caps[1]) {
		case 1:
			this.mCurrentLine.caps = 256;
			break;
		case 2:
			this.mCurrentLine.caps = 512;
			break;
		case 0:
			this.mCurrentLine.caps = 0;
			break;
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) switch(scaleMode[1]) {
		case 2:
			this.mCurrentLine.scale_mode = 3;
			break;
		case 3:
			this.mCurrentLine.scale_mode = 1;
			break;
		case 0:
			this.mCurrentLine.scale_mode = 2;
			break;
		case 1:
			this.mCurrentLine.scale_mode = 0;
			break;
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) switch(joints[1]) {
		case 1:
			this.mCurrentLine.joints = 0;
			break;
		case 0:
			this.mCurrentLine.joints = 4096;
			break;
		case 2:
			this.mCurrentLine.joints = 8192;
			break;
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,__adjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.__surface,"getContext") != null) {
			var width = Math.ceil((this.__extentWithFilters.width - this.__extentWithFilters.x) * sx);
			var height = Math.ceil((this.__extentWithFilters.height - this.__extentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = window.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				flash.Lib.__drawToSurface(this.__surface,dstCanvas);
				if(flash.Lib.__isOnStage(this.__surface)) {
					flash.Lib.__appendSurface(dstCanvas);
					flash.Lib.__copyStyle(this.__surface,dstCanvas);
					flash.Lib.__swapSurface(this.__surface,dstCanvas);
					flash.Lib.__removeSurface(this.__surface);
					if(this.__surface.id != null) flash.Lib.__setSurfaceId(dstCanvas,this.__surface.id);
				}
				this.__surface = dstCanvas;
			}
		}
	}
	,__clearCanvas: function() {
		if(this.__surface != null) {
			var ctx;
			try {
				ctx = this.__surface.getContext("2d");
			} catch( e ) {
				ctx = null;
			}
			if(ctx != null) ctx.clearRect(0,0,this.__surface.width,this.__surface.height);
		}
	}
	,__clearLine: function() {
		this.mCurrentLine = new flash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,__drawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,__drawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.__bitmap.___textureBuffer;
		var ctx;
		try {
			ctx = this.__surface.getContext("2d");
		} catch( e ) {
			ctx = null;
		}
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.__tileRects[tileID];
				center = sheet.__centerPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,__expandFilteredExtent: function(x,y) {
		var maxX;
		var minX;
		var maxY;
		var minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		if(x > maxX) maxX = x; else maxX = maxX;
		if(x < minX) minX = x; else minX = minX;
		if(y > maxY) maxY = y; else maxY = maxY;
		if(y < minY) minY = y; else minY = minY;
		this.__extentWithFilters.x = minX;
		this.__extentWithFilters.y = minY;
		this.__extentWithFilters.width = maxX - minX;
		this.__extentWithFilters.height = maxY - minY;
	}
	,__expandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.__extent.width -= this._padding;
			this.__extent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX;
		var minX;
		var maxY;
		var minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		if(x > maxX) maxX = x; else maxX = maxX;
		if(x < minX) minX = x; else minX = minX;
		if(y > maxY) maxY = y; else maxY = maxY;
		if(y < minY) minY = y; else minY = minY;
		this.__extent.x = minX;
		this.__extent.y = minY;
		this.__extent.width = maxX - minX + this._padding;
		this.__extent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,__hitTest: function(inX,inY) {
		var ctx;
		try {
			ctx = this.__surface.getContext("2d");
		} catch( e ) {
			ctx = null;
		}
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.__extent.width > 0 && this.__extent.height > 0) return true;
		return false;
	}
	,__invalidate: function() {
		this.__changed = true;
		this.__clearNextCycle = true;
	}
	,__mediaSurface: function(surface) {
		this.__surface = surface;
	}
	,__render: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.__changed) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.__expandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.__clearNextCycle) {
			this.nextDrawIndex = 0;
			this.__clearCanvas();
			this.__clearNextCycle = false;
		}
		if(this.__extentWithFilters.width - this.__extentWithFilters.x > this.__surface.width || this.__extentWithFilters.height - this.__extentWithFilters.y > this.__surface.height) this.__adjustSurface(sx,sy);
		var ctx;
		try {
			ctx = this.__surface.getContext("2d");
		} catch( e ) {
			ctx = null;
		}
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g1 = 0;
			while(_g1 < filters.length) {
				var filter1 = filters[_g1];
				++_g1;
				if(js.Boot.__instanceof(filter1,flash.filters.DropShadowFilter)) filter1.__applyFilter(this.__surface,null,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.__extentWithFilters.x != 0 || this.__extentWithFilters.y != 0) ctx.translate(-this.__extentWithFilters.x * sx,-this.__extentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g2 = this.nextDrawIndex;
		while(_g2 < len) {
			var i = _g2++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.__drawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g11 = 0;
					var _g21 = d.lineJobs;
					while(_g11 < _g21.length) {
						var lj = _g21[_g11];
						++_g11;
						ctx.lineWidth = lj.thickness;
						var _g3 = lj.joints;
						switch(_g3) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						var _g31 = lj.caps;
						switch(_g31) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0;
						var _g32 = lj.point_idx1 + 1;
						while(_g4 < _g32) {
							var i1 = _g4++;
							var p = d.points[i1];
							var _g5 = p.type;
							switch(_g5) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g12 = 0;
					var _g22 = d.points;
					while(_g12 < _g22.length) {
						var p1 = _g22[_g12];
						++_g12;
						var _g33 = p1.type;
						switch(_g33) {
						case 0:
							ctx.moveTo(p1.x,p1.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p1.cx,p1.cy,p1.x,p1.y);
							break;
						default:
							ctx.lineTo(p1.x,p1.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					ctx.clip();
					var img = bitmap.texture_buffer;
					var m1 = bitmap.matrix;
					if(m1 != null) ctx.transform(m1.a,m1.b,m1.c,m1.d,m1.tx,m1.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.__changed = false;
		if(len > 0) this.nextDrawIndex = len - 1; else this.nextDrawIndex = 0;
		this.mDrawList = [];
		return true;
	}
	,__class__: flash.display.Graphics
};
var haxe = {};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
flash.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__properties__ = {get_current:"get_current"}
flash.Lib.addCallback = function(functionName,closure) {
	flash.Lib.mMe.__scr[functionName] = closure;
};
flash.Lib["as"] = function(v,c) {
	if(js.Boot.__instanceof(v,c)) return v; else return null;
};
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
};
flash.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - flash.Lib.starttime) * 1000);
};
flash.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
};
flash.Lib.preventDefaultTouchMove = function() {
	window.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
};
flash.Lib.Run = function(tgt,width,height) {
	flash.Lib.mMe = new flash.Lib(tgt,width,height);
	var _g1 = 0;
	var _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") flash.Lib.__getStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	var _g2 = 0;
	var _g11 = flash.Lib.HTML_TOUCH_EVENT_TYPES;
	while(_g2 < _g11.length) {
		var type = _g11[_g2];
		++_g2;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g3 = 0;
	var _g12 = flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
	while(_g3 < _g12.length) {
		var type1 = _g12[_g3];
		++_g3;
		tgt.addEventListener(type1,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g4 = 0;
	var _g13 = flash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g4 < _g13.length) {
		var type2 = _g13[_g4];
		++_g4;
		tgt.addEventListener(type2,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	if(Reflect.hasField(window,"on" + "devicemotion")) window.addEventListener("devicemotion",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	if(Reflect.hasField(window,"on" + "orientationchange")) window.addEventListener("orientationchange",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	var _g5 = 0;
	var _g14 = flash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g5 < _g14.length) {
		var type3 = _g14[_g5];
		++_g5;
		window.addEventListener(type3,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") flash.Lib.__getStage().set_backgroundColor(flash.Lib.__parseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		if(pos == 0) return res | cur << 16; else if(pos == 1) return res | cur << 8; else if(pos == 2) return res | cur; else throw "pos should be 0-2";
	})); else flash.Lib.__getStage().set_backgroundColor(16777215);
	flash.Lib.get_current().get_graphics().beginFill(flash.Lib.__getStage().get_backgroundColor(),0);
	flash.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	flash.Lib.__setSurfaceId(flash.Lib.get_current().get_graphics().__surface,"Root MovieClip");
	flash.Lib.__getStage().__updateNextWake();
	return flash.Lib.mMe;
};
flash.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = window.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
};
flash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
};
flash.Lib.__appendSurface = function(surface,before,after) {
	if(flash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) before.parentNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) after.parentNode.insertBefore(surface,after.nextSibling); else flash.Lib.mMe.__scr.appendChild(surface);
	}
};
flash.Lib.__appendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0;
	var _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(window.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
};
flash.Lib.__bootstrap = function() {
	if(flash.Lib.mMe == null) {
		var target = window.document.getElementById("haxe:openfl");
		if(target == null) target = window.document.createElement("div");
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat((function($this) {
				var $r;
				var pos = agent.indexOf("Android") + 8;
				$r = HxOverrides.substr(agent,pos,3);
				return $r;
			}(this)));
			if(version <= 2.3) flash.Lib.mForce2DTransform = true;
		}
		flash.Lib.Run(target,flash.Lib.__getWidth(),flash.Lib.__getHeight());
	}
};
flash.Lib.__copyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0;
	var _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
};
flash.Lib.__createSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		flash.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-openfl-anim") != null) style = window.document.getElementById(surface.getAttribute("data-openfl-anim")); else {
		style = flash.Lib.mMe.__scr.appendChild(window.document.createElement("style"));
		style.sheet.id = "__openfl_anim_" + surface.id + "__";
		surface.setAttribute("data-openfl-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0;
	var _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule;
	if(discrete) animationDiscreteRule = "steps(::steps::, end)"; else animationDiscreteRule = "";
	var animationInfiniteRule;
	if(infinite) animationInfiniteRule = "infinite"; else animationInfiniteRule = "";
	var animationTpl = "";
	var _g2 = 0;
	var _g11 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g2 < _g11.length) {
		var prefix = _g11[_g2];
		++_g2;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules;
	if(style.sheet.rules != null) rules = style.sheet.rules; else rules = style.sheet.cssRules;
	var _g3 = 0;
	var _g12 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g3 < _g12.length) {
		var variant = _g12[_g3];
		++_g3;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
};
flash.Lib.__designMode = function(mode) {
	if(mode) window.document.designMode = "on"; else window.document.designMode = "off";
};
flash.Lib.__disableFullScreen = function() {
};
flash.Lib.__disableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		flash.Lib.trace("Disable right click not supported in this browser.");
	}
};
flash.Lib.__drawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
};
flash.Lib.__drawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
};
flash.Lib.__drawToSurface = function(surface,tgt,matrix,alpha,clipRect,smoothing) {
	if(smoothing == null) smoothing = true;
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	tgtCtx.globalAlpha = alpha;
	flash.Lib.__setImageSmoothing(tgtCtx,smoothing);
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
	}
};
flash.Lib.__enableFullScreen = function() {
	if(flash.Lib.mMe != null) {
		var origWidth = flash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = flash.Lib.mMe.__scr.style.getPropertyValue("height");
		flash.Lib.mMe.__scr.style.setProperty("width","100%","");
		flash.Lib.mMe.__scr.style.setProperty("height","100%","");
		flash.Lib.__disableFullScreen = function() {
			flash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			flash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
};
flash.Lib.__enableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		flash.Lib.trace("Enable right click not supported in this browser.");
	}
};
flash.Lib.__fullScreenHeight = function() {
	return window.innerHeight;
};
flash.Lib.__fullScreenWidth = function() {
	return window.innerWidth;
};
flash.Lib.__getHeight = function() {
	var tgt;
	if(flash.Lib.mMe != null) tgt = flash.Lib.mMe.__scr; else tgt = window.document.getElementById("haxe:openfl");
	if(tgt != null && tgt.clientHeight > 0) return tgt.clientHeight; else return 500;
};
flash.Lib.__getStage = function() {
	if(flash.Lib.mStage == null) {
		var width = flash.Lib.__getWidth();
		var height = flash.Lib.__getHeight();
		flash.Lib.mStage = new flash.display.Stage(width,height);
	}
	return flash.Lib.mStage;
};
flash.Lib.__getWidth = function() {
	var tgt;
	if(flash.Lib.mMe != null) tgt = flash.Lib.mMe.__scr; else tgt = window.document.getElementById("haxe:openfl");
	if(tgt != null && tgt.clientWidth > 0) return tgt.clientWidth; else return 500;
};
flash.Lib.__isOnStage = function(surface) {
	var p = surface;
	while(p != null && p != flash.Lib.mMe.__scr) p = p.parentNode;
	return p == flash.Lib.mMe.__scr;
};
flash.Lib.__parseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col1 = 0;
		var _g1 = 1;
		while(_g1 < 4) {
			var pos1 = _g1++;
			var v1 = "0x" + hex.matched(pos1) & 255;
			v1 = cb(col1,pos1 - 1,v1);
		}
		return col1;
	} else throw "Cannot parse color '" + str + "'.";
};
flash.Lib.__removeSurface = function(surface) {
	if(flash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-openfl-anim");
		if(anim != null) {
			var style = window.document.getElementById(anim);
			if(style != null) flash.Lib.mMe.__scr.removeChild(style);
		}
		if(surface.parentNode != null) surface.parentNode.removeChild(surface);
	}
	return surface;
};
flash.Lib.__setSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
};
flash.Lib.__setSurfaceClipping = function(surface,rect) {
};
flash.Lib.__setSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",bold == null?"null":"" + bold,"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
};
flash.Lib.__setSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",alpha == null?"null":"" + alpha,"");
};
flash.Lib.__setSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
};
flash.Lib.__setSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-openfl-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!flash.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
};
flash.Lib.__setSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1 != null && surface2 != null) {
		if(surface1.parentNode != surface2.parentNode && surface2.parentNode != null) surface2.parentNode.appendChild(surface1);
		if(surface2.parentNode != null) {
			var nextSibling = surface2.nextSibling;
			if(surface1.previousSibling != surface2) {
				var swap = flash.Lib.__removeSurface(surface1);
				if(nextSibling == null) surface2.parentNode.appendChild(swap); else surface2.parentNode.insertBefore(swap,nextSibling);
			}
		}
	}
};
flash.Lib.__swapSurface = function(surface1,surface2) {
	var parent1 = surface1.parentNode;
	var parent2 = surface2.parentNode;
	if(parent1 != null && parent2 != null) {
		if(parent1 == parent2) {
			var next1 = surface1.nextSibling;
			var next2 = surface2.nextSibling;
			if(next1 == surface2) parent1.insertBefore(surface2,surface1); else if(next2 == surface1) parent1.insertBefore(surface1,surface2); else {
				parent1.replaceChild(surface2,surface1);
				if(next2 != null) parent1.insertBefore(surface1,next2); else parent1.appendChild(surface1);
			}
		} else {
			var next21 = surface2.nextSibling;
			parent1.replaceChild(surface2,surface1);
			if(next21 != null) parent2.insertBefore(surface1,next21); else parent2.appendChild(surface1);
		}
	}
};
flash.Lib.__setContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
};
flash.Lib.__setCursor = function(type) {
	if(flash.Lib.mMe != null) switch(type[1]) {
	case 0:
		flash.Lib.mMe.__scr.style.cursor = "pointer";
		break;
	case 1:
		flash.Lib.mMe.__scr.style.cursor = "text";
		break;
	default:
		flash.Lib.mMe.__scr.style.cursor = "default";
	}
};
flash.Lib.__setImageSmoothing = function(context,enabled) {
	var _g = 0;
	var _g1 = ["imageSmoothingEnabled","mozImageSmoothingEnabled","webkitImageSmoothingEnabled"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		context[variant] = enabled;
	}
};
flash.Lib.__setSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
};
flash.Lib.__setSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
};
flash.Lib.__setSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
};
flash.Lib.__setSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
};
flash.Lib.__setSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = window.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png") + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	flash.Lib.__createSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(flash.Lib.__isOnStage(surface)) {
		flash.Lib.__appendSurface(div);
		flash.Lib.__copyStyle(surface,div);
		flash.Lib.__swapSurface(surface,div);
		flash.Lib.__removeSurface(surface);
	} else flash.Lib.__copyStyle(surface,div);
	return div;
};
flash.Lib.__setSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
};
flash.Lib.__setTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
};
flash.Lib.__surfaceHitTest = function(surface,x,y) {
	var _g1 = 0;
	var _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
};
flash.Lib.get_current = function() {
	if(flash.Lib.mMainClassRoot == null) {
		flash.Lib.mMainClassRoot = new flash.display.MovieClip();
		flash.Lib.mCurrent = flash.Lib.mMainClassRoot;
		flash.Lib.__getStage().addChild(flash.Lib.mCurrent);
	}
	return flash.Lib.mMainClassRoot;
};
flash.Lib.prototype = {
	__class__: flash.Lib
};
flash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.__isCancelled = false;
	this.__isCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = flash.events.EventPhase.AT_TARGET;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,__getIsCancelled: function() {
		return this.__isCancelled;
	}
	,__getIsCancelledNow: function() {
		return this.__isCancelledNow;
	}
	,__setPhase: function(phase) {
		this.eventPhase = phase;
	}
	,__class__: flash.events.Event
};
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN) if(event.which != null) __mouseDown = event.which == 1; else if(event.button != null) __mouseDown = event.button == 0; else __mouseDown = false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
};
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	__createSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,updateAfterEvent: function() {
	}
	,__class__: flash.events.MouseEvent
});
flash.display.Stage = function(width,height) {
	flash.display.DisplayObjectContainer.call(this);
	this.__focusObject = null;
	this.__focusObjectActivated = false;
	this.__windowWidth = width;
	this.__windowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = flash.display.StageScaleMode.SHOW_ALL;
	this.__stageMatrix = new flash.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = flash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.__windowWidth);
	this.loaderInfo.parameters.height = Std.string(this.__windowHeight);
	this.__pointInPathMode = flash.display.Graphics.__detectIsPointInPathMode();
	this.__mouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.__touchInfo = [];
	this.__uIEventsQueue = new Array(1000);
	this.__uIEventsQueueIndex = 0;
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = flash.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = flash.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = flash.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = flash.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = flash.display.Stage.OrientationPortrait;
	}
	return orientation;
};
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	invalidate: function() {
		this.__invalid = true;
	}
	,toString: function() {
		return "[Stage id=" + this.___id + "]";
	}
	,__checkInOuts: function(event,stack,touchInfo) {
		var prev;
		if(touchInfo == null) prev = this.__mouseOverObjects; else prev = touchInfo.touchOverObjects;
		var changeEvents;
		if(touchInfo == null) changeEvents = flash.display.Stage.__mouseChanges; else changeEvents = flash.display.Stage.__touchChanges;
		var new_n = stack.length;
		var new_obj;
		if(new_n > 0) new_obj = stack[new_n - 1]; else new_obj = null;
		var old_n = prev.length;
		var old_obj;
		if(old_n > 0) old_obj = prev[old_n - 1]; else old_obj = null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.__fireEvent(event.__createSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.__fireEvent(event.__createSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.__createSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.__createSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.__mouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,__drag: function(point) {
		var p = this.__dragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.__dragOffsetX;
		var y = point.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__isOnStage: function() {
		return true;
	}
	,__processStageEvent: function(evt) {
		evt.stopPropagation();
		var _g = evt.type;
		switch(_g) {
		case "resize":
			this.__onResize(flash.Lib.__getWidth(),flash.Lib.__getHeight());
			break;
		case "focus":
			this.__onFocus(this);
			if(!this.__focusObjectActivated) {
				this.__focusObjectActivated = true;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.ACTIVATE));
			}
			break;
		case "blur":
			if(this.__focusObjectActivated) {
				this.__focusObjectActivated = false;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.DEACTIVATE));
			}
			break;
		case "mousemove":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.__onMouse(evt,flash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.__onMouse(evt,flash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode;
			if(evt1.keyCode != null) keyCode = evt1.keyCode; else keyCode = evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt2 = evt;
			var keyCode1;
			if(evt2.keyCode != null) keyCode1 = evt2.keyCode; else keyCode1 = evt2.which;
			keyCode1 = flash.ui.Keyboard.__convertMozillaCode(keyCode1);
			this.__onKey(keyCode1,false,evt2.charCode,evt2.ctrlKey,evt2.altKey,evt2.shiftKey,evt2.keyLocation);
			break;
		case "touchstart":
			var evt3 = evt;
			evt3.preventDefault();
			var touchInfo = new flash.display._Stage.TouchInfo();
			this.__touchInfo[evt3.changedTouches[0].identifier] = touchInfo;
			this.__onTouch(evt3,evt3.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt4 = evt;
			evt4.preventDefault();
			var touchInfo1 = this.__touchInfo[evt4.changedTouches[0].identifier];
			this.__onTouch(evt4,evt4.changedTouches[0],"touchMove",touchInfo1,true);
			break;
		case "touchend":
			var evt5 = evt;
			evt5.preventDefault();
			var touchInfo2 = this.__touchInfo[evt5.changedTouches[0].identifier];
			this.__onTouch(evt5,evt5.changedTouches[0],"touchEnd",touchInfo2,true);
			this.__touchInfo[evt5.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt6 = evt;
			this.__handleAccelerometer(evt6);
			break;
		case "orientationchange":
			this.__handleOrientationChange();
			break;
		default:
		}
	}
	,__queueStageEvent: function(evt) {
		this.__uIEventsQueue[this.__uIEventsQueueIndex++] = evt;
	}
	,__renderAll: function() {
		this.__render(null,null);
	}
	,__renderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.__render(canvas);
	}
	,__stageRender: function(_) {
		if(!this.__stageActive) {
			this.__onResize(this.__windowWidth,this.__windowHeight);
			var event = new flash.events.Event(flash.events.Event.ACTIVATE);
			event.target = this;
			this.__broadcast(event);
			this.__stageActive = true;
		}
		var _g1 = 0;
		var _g = this.__uIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__uIEventsQueue[i] != null) this.__processStageEvent(this.__uIEventsQueue[i]);
		}
		this.__uIEventsQueueIndex = 0;
		var event1 = new flash.events.Event(flash.events.Event.ENTER_FRAME);
		this.__broadcast(event1);
		if(this.__invalid) {
			var event2 = new flash.events.Event(flash.events.Event.RENDER);
			this.__broadcast(event2);
		}
		this.__renderAll();
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(bounds == null) this.__dragBounds = null; else this.__dragBounds = bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			var mouse = new flash.geom.Point(this._mouseX,this._mouseY);
			var p = this.__dragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.__dragOffsetX = this.__dragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.__dragOffsetY = this.__dragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__updateNextWake: function() {
		if(this.__frameRate == 0) {
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			__requestAnimationFrame($bind(this,this.__updateNextWake));
			this.__stageRender();
		} else {
			window.clearInterval(this.__timer);
			this.__timer = window.setInterval($bind(this,this.__stageRender),this.__interval);
		}
	}
	,__handleAccelerometer: function(evt) {
		flash.display.Stage.__acceleration.x = evt.accelerationIncludingGravity.x;
		flash.display.Stage.__acceleration.y = evt.accelerationIncludingGravity.y;
		flash.display.Stage.__acceleration.z = evt.accelerationIncludingGravity.z;
	}
	,__handleOrientationChange: function() {
	}
	,__onKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var stack = new Array();
		if(this.__focusObject == null) this.__getInteractiveObjectStack(stack); else this.__focusObject.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			var obj = stack[0];
			var evt = new flash.events.KeyboardEvent(pressed?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
			obj.__fireEvent(evt);
		}
	}
	,__onFocus: function(target) {
		if(target != this.__focusObject) {
			if(this.__focusObject != null) {
				var focusOut = new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,target,false,0);
				focusOut.target = this.__focusObject;
				this.__focusObject.__fireEvent(focusOut);
			}
			var focusIn = new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,this.__focusObject,false,0);
			focusIn.target = target;
			target.__fireEvent(focusIn);
			this.__focusObject = target;
		}
	}
	,__onMouse: function(event,type) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(event.clientX - rect.left,event.clientY - rect.top);
		if(this.__dragObject != null) this.__drag(point);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.MouseEvent.__create(type,event,local,obj);
			this.__checkInOuts(evt,stack);
			if(type == flash.events.MouseEvent.MOUSE_DOWN) this.__onFocus(stack[stack.length - 1]);
			obj.__fireEvent(evt);
		} else {
			var evt1 = flash.events.MouseEvent.__create(type,event,point,null);
			this.__checkInOuts(evt1,stack);
		}
	}
	,__onResize: function(inW,inH) {
		this.__windowWidth = inW;
		this.__windowHeight = inH;
		var event = new flash.events.Event(flash.events.Event.RESIZE);
		event.target = this;
		this.__broadcast(event);
	}
	,__onTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(touch.pageX - rect.left,touch.pageY - rect.top);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.TouchEvent.__create(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
			obj.__fireEvent(evt);
			var mouseType;
			switch(type) {
			case "touchBegin":
				mouseType = flash.events.MouseEvent.MOUSE_DOWN;
				break;
			case "touchEnd":
				mouseType = flash.events.MouseEvent.MOUSE_UP;
				break;
			default:
				if(this.__dragObject != null) this.__drag(point);
				mouseType = flash.events.MouseEvent.MOUSE_MOVE;
			}
			obj.__fireEvent(flash.events.MouseEvent.__create(mouseType,evt,local,obj));
		} else {
			var evt1 = flash.events.TouchEvent.__create(type,event,touch,point,null);
			evt1.touchPointID = touch.identifier;
			evt1.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt1,stack,touchInfo);
		}
	}
	,get_backgroundColor: function() {
		return this.__backgroundColour;
	}
	,set_backgroundColor: function(col) {
		return this.__backgroundColour = col;
	}
	,get_color: function() {
		return this.__backgroundColour;
	}
	,set_color: function(col) {
		return this.__backgroundColour = col;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) switch(displayState[1]) {
		case 0:
			flash.Lib.__disableFullScreen();
			break;
		case 1:case 2:
			flash.Lib.__enableFullScreen();
			break;
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_focus: function() {
		return this.__focusObject;
	}
	,set_focus: function(inObj) {
		this.__onFocus(inObj);
		return this.__focusObject;
	}
	,get_frameRate: function() {
		return this.__frameRate;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var $window = window;
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(__requestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) this.__interval = 1000.0 / speed | 0;
		this.__frameRate = speed;
		this.__updateNextWake();
		return speed;
	}
	,get_fullScreenWidth: function() {
		return window.innerWidth;
	}
	,get_fullScreenHeight: function() {
		return window.innerHeight;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_quality: function() {
		if(this.quality != null) return this.quality; else return flash.display.StageQuality.BEST;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_showDefaultContextMenu: function() {
		return this.__showDefaultContextMenu;
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.__showDefaultContextMenu && this.__showDefaultContextMenu != null) {
			if(!showDefaultContextMenu) flash.Lib.__disableRightClick(); else flash.Lib.__enableRightClick();
		}
		this.__showDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_stage: function() {
		return flash.Lib.__getStage();
	}
	,get_stageHeight: function() {
		return this.__windowHeight;
	}
	,get_stageWidth: function() {
		return this.__windowWidth;
	}
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_stageWidth:"get_stageWidth",get_stageHeight:"get_stageHeight",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",set_quality:"set_quality",get_quality:"get_quality",get_fullScreenWidth:"get_fullScreenWidth",get_fullScreenHeight:"get_fullScreenHeight",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",set_focus:"set_focus",get_focus:"get_focus",set_displayState:"set_displayState",get_displayState:"get_displayState",set_color:"set_color",get_color:"get_color",set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor"})
});
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.geom = {};
flash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = scaleX;
		this.d = scaleY;
		this.b = rotation;
		this.set_tx(tx);
		this.set_ty(ty);
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g1 = this;
		_g1.set_ty(_g1.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,transformPoint: function(inPos) {
		return new flash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,translate: function(inDX,inDY) {
		var m = new flash.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,__transformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,__transformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,__translateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,__class__: flash.geom.Matrix
	,__properties__: {set_ty:"set_ty",set_tx:"set_tx"}
};
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
};
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__class__: flash.display.LoaderInfo
});
flash.system = {};
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,__class__: flash.system.ApplicationDomain
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
flash.display.PointInPathMode = $hxClasses["flash.display.PointInPathMode"] = { __ename__ : true, __constructs__ : ["USER_SPACE","DEVICE_SPACE"] };
flash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
flash.display.PointInPathMode.USER_SPACE.toString = $estr;
flash.display.PointInPathMode.USER_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
flash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
flash.display.PointInPathMode.DEVICE_SPACE.__enum__ = flash.display.PointInPathMode;
flash.utils = {};
flash.utils.Uuid = function() { };
$hxClasses["flash.utils.Uuid"] = flash.utils.Uuid;
flash.utils.Uuid.__name__ = ["flash","utils","Uuid"];
flash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.add("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Std["int"](Math.random() * nchars)));
	}
	return uid.b;
};
flash.utils.Uuid.uuid = function() {
	return flash.utils.Uuid.random(8) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(12);
};
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	__getFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,__setFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,__setMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,get_concatenatedMatrix: function() {
		return this.__getFullMatrix(this._matrix);
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.__matrixOverridden();
		return this._matrix;
	}
	,get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,__class__: flash.geom.Transform
	,__properties__: {get_pixelBounds:"get_pixelBounds",set_matrix:"set_matrix",get_matrix:"get_matrix",get_concatenatedMatrix:"get_concatenatedMatrix",set_colorTransform:"set_colorTransform"}
};
flash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	if(inRedMultiplier == null) this.redMultiplier = 1.0; else this.redMultiplier = inRedMultiplier;
	if(inGreenMultiplier == null) this.greenMultiplier = 1.0; else this.greenMultiplier = inGreenMultiplier;
	if(inBlueMultiplier == null) this.blueMultiplier = 1.0; else this.blueMultiplier = inBlueMultiplier;
	if(inAlphaMultiplier == null) this.alphaMultiplier = 1.0; else this.alphaMultiplier = inAlphaMultiplier;
	if(inRedOffset == null) this.redOffset = 0.0; else this.redOffset = inRedOffset;
	if(inGreenOffset == null) this.greenOffset = 0.0; else this.greenOffset = inGreenOffset;
	if(inBlueOffset == null) this.blueOffset = 0.0; else this.blueOffset = inBlueOffset;
	if(inAlphaOffset == null) this.alphaOffset = 0.0; else this.alphaOffset = inAlphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
};
flash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,intersection: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,intersects: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return false;
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		return y1 > y0;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,union: function(toUnion) {
		var x0;
		if(this.x > toUnion.x) x0 = toUnion.x; else x0 = this.x;
		var x1;
		if(this.get_right() < toUnion.get_right()) x1 = toUnion.get_right(); else x1 = this.get_right();
		var y0;
		if(this.y > toUnion.y) y0 = toUnion.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() < toUnion.get_bottom()) y1 = toUnion.get_bottom(); else y1 = this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,__class__: flash.geom.Rectangle
	,__properties__: {set_topLeft:"set_topLeft",get_topLeft:"get_topLeft",set_top:"set_top",get_top:"get_top",set_size:"set_size",get_size:"get_size",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_bottom:"set_bottom",get_bottom:"get_bottom"}
};
haxe.ds = {};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.StringMap
};
com.firstplayable.hxlib.haxe.display = {};
com.firstplayable.hxlib.haxe.display.GameDisplay = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.display.GameDisplay"] = com.firstplayable.hxlib.haxe.display.GameDisplay;
com.firstplayable.hxlib.haxe.display.GameDisplay.__name__ = ["com","firstplayable","hxlib","haxe","display","GameDisplay"];
com.firstplayable.hxlib.haxe.display.GameDisplay.__properties__ = {set_enableMasking:"set_enableMasking",set_backgroundColor:"set_backgroundColor"}
com.firstplayable.hxlib.haxe.display.GameDisplay.set_backgroundColor = function(color) {
	var stage = flash.Lib.get_current().get_stage();
	stage.addChildAt(com.firstplayable.hxlib.haxe.display.GameDisplay.ms_bgFill,0);
	com.firstplayable.hxlib.haxe.display.GameDisplay.ms_bgFill.get_graphics().clear();
	com.firstplayable.hxlib.haxe.display.GameDisplay.ms_bgFill.get_graphics().beginFill(color);
	com.firstplayable.hxlib.haxe.display.GameDisplay.ms_bgFill.get_graphics().drawRect(0,0,stage.get_stageWidth(),stage.get_stageHeight());
	com.firstplayable.hxlib.haxe.display.GameDisplay.ms_bgFill.get_graphics().endFill();
	return color;
};
com.firstplayable.hxlib.haxe.display.GameDisplay.set_enableMasking = function(enable) {
	com.firstplayable.hxlib.haxe.Debug.log("enableMasking() is currently not implemented!",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "GameDisplay.hx", lineNumber : 67, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "set_enableMasking"});
	return false;
};
com.firstplayable.hxlib.haxe.display.GameDisplay.addLayer = function(layerName,layerObj,priority) {
	if(priority == null) priority = -1;
	var layer;
	if(layerObj == null) layer = new flash.display.Sprite(); else layer = layerObj;
	if(com.firstplayable.hxlib.haxe.app.Application.app != null) {
		if(priority > -1) com.firstplayable.hxlib.haxe.app.Application.app.addChildAt(layer,priority); else com.firstplayable.hxlib.haxe.app.Application.app.addChild(layer);
	} else if(priority > -1) flash.Lib.get_current().get_stage().addChildAt(layer,priority); else flash.Lib.get_current().get_stage().addChild(layer);
	com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.set(layerName,layer);
};
com.firstplayable.hxlib.haxe.display.GameDisplay.removeLayer = function(layerName) {
	if(!(!com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.exists(layerName)?(function($this) {
		var $r;
		com.firstplayable.hxlib.haxe.Debug.log("Layer does not exist! \"" + layerName + "\"",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "GameDisplay.hx", lineNumber : 259, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "verifyLayer"});
		$r = false;
		return $r;
	}(this)):true)) return;
	var layer = com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.get(layerName);
	layer.parent.removeChild(layer);
	com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.remove(layerName);
};
com.firstplayable.hxlib.haxe.display.GameDisplay.resetLayer = function(layerName) {
	var layerSpr = com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.get(layerName);
	var layerIndex = -1;
	if(layerSpr != null && layerSpr.parent != null) layerIndex = layerSpr.parent.getChildIndex(layerSpr);
	com.firstplayable.hxlib.haxe.display.GameDisplay.removeLayer(layerName);
	com.firstplayable.hxlib.haxe.display.GameDisplay.addLayer(layerName,null,layerIndex);
};
com.firstplayable.hxlib.haxe.display.GameDisplay.attach = function(layerName,dObj,push) {
	if(push == null) push = true;
	if(!(!com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.exists(layerName)?(function($this) {
		var $r;
		com.firstplayable.hxlib.haxe.Debug.log("Layer does not exist! \"" + layerName + "\"",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "GameDisplay.hx", lineNumber : 259, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "verifyLayer"});
		$r = false;
		return $r;
	}(this)):true)) return;
	var layer = com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.get(layerName);
	if(push) layer.addChild(dObj); else layer.addChildAt(dObj,0);
};
com.firstplayable.hxlib.haxe.display.GameDisplay.remove = function(layerName,dObj) {
	if(!(!com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.exists(layerName)?(function($this) {
		var $r;
		com.firstplayable.hxlib.haxe.Debug.log("Layer does not exist! \"" + layerName + "\"",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "GameDisplay.hx", lineNumber : 259, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "verifyLayer"});
		$r = false;
		return $r;
	}(this)):true)) return;
	var layer = com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.get(layerName);
	if(layer.contains(dObj)) layer.removeChild(dObj); else com.firstplayable.hxlib.haxe.Debug.log("Child does not exist! \"" + dObj.name + "\"",null,{ fileName : "GameDisplay.hx", lineNumber : 192, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "remove"});
};
com.firstplayable.hxlib.haxe.display.GameDisplay.showLayer = function(layerName,visibility) {
	if(!(!com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.exists(layerName)?(function($this) {
		var $r;
		com.firstplayable.hxlib.haxe.Debug.log("Layer does not exist! \"" + layerName + "\"",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "GameDisplay.hx", lineNumber : 259, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "verifyLayer"});
		$r = false;
		return $r;
	}(this)):true)) return;
	var layer = com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.get(layerName);
	layer.set_visible(visibility == null?!layer.get_visible():visibility);
};
com.firstplayable.hxlib.haxe.display.GameDisplay.enableLayer = function(layerName,enabled) {
	if(!(!com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.exists(layerName)?(function($this) {
		var $r;
		com.firstplayable.hxlib.haxe.Debug.log("Layer does not exist! \"" + layerName + "\"",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "GameDisplay.hx", lineNumber : 259, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "verifyLayer"});
		$r = false;
		return $r;
	}(this)):true)) return;
	var layer = com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.get(layerName);
	if(enabled == null) layer.mouseEnabled = !layer.mouseEnabled; else layer.mouseEnabled = enabled;
	if(enabled == null) layer.mouseChildren = !layer.mouseChildren; else layer.mouseChildren = enabled;
};
com.firstplayable.hxlib.haxe.display.GameDisplay.setLayerMask = function(layerName,layerMask) {
	if(!(!com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.exists(layerName)?(function($this) {
		var $r;
		com.firstplayable.hxlib.haxe.Debug.log("Layer does not exist! \"" + layerName + "\"",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "GameDisplay.hx", lineNumber : 259, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "verifyLayer"});
		$r = false;
		return $r;
	}(this)):true)) return;
	var layer = com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.get(layerName);
	if(com.firstplayable.hxlib.haxe.StdX.isValid(layer.get_mask()) && layer.get_mask().parent != null) layer.get_mask().parent.removeChild(layer.get_mask());
	if(layerMask != null) {
		layer.addChild(layerMask);
		layerMask.mouseEnabled = false;
		layerMask.mouseChildren = false;
	}
	layer.cacheAsBitmap = false;
	layer.set_mask(layerMask);
};
com.firstplayable.hxlib.haxe.display.GameDisplay.verifyLayer = function(layerName) {
	if(!com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers.exists(layerName)) {
		com.firstplayable.hxlib.haxe.Debug.log("Layer does not exist! \"" + layerName + "\"",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "GameDisplay.hx", lineNumber : 259, className : "com.firstplayable.hxlib.haxe.display.GameDisplay", methodName : "verifyLayer"});
		return false;
	} else return true;
};
com.firstplayable.hxlib.haxe.display.GraphicButtonState = $hxClasses["com.firstplayable.hxlib.haxe.display.GraphicButtonState"] = { __ename__ : true, __constructs__ : ["UP","DOWN","OVER","OUT","DISABLED"] };
com.firstplayable.hxlib.haxe.display.GraphicButtonState.UP = ["UP",0];
com.firstplayable.hxlib.haxe.display.GraphicButtonState.UP.toString = $estr;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.UP.__enum__ = com.firstplayable.hxlib.haxe.display.GraphicButtonState;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.DOWN = ["DOWN",1];
com.firstplayable.hxlib.haxe.display.GraphicButtonState.DOWN.toString = $estr;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.DOWN.__enum__ = com.firstplayable.hxlib.haxe.display.GraphicButtonState;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.OVER = ["OVER",2];
com.firstplayable.hxlib.haxe.display.GraphicButtonState.OVER.toString = $estr;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.OVER.__enum__ = com.firstplayable.hxlib.haxe.display.GraphicButtonState;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.OUT = ["OUT",3];
com.firstplayable.hxlib.haxe.display.GraphicButtonState.OUT.toString = $estr;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.OUT.__enum__ = com.firstplayable.hxlib.haxe.display.GraphicButtonState;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.DISABLED = ["DISABLED",4];
com.firstplayable.hxlib.haxe.display.GraphicButtonState.DISABLED.toString = $estr;
com.firstplayable.hxlib.haxe.display.GraphicButtonState.DISABLED.__enum__ = com.firstplayable.hxlib.haxe.display.GraphicButtonState;
com.firstplayable.hxlib.haxe.display.GraphicButton = function(up,down,over,disabled,labelField,onPressed,btnID) {
	flash.display.Sprite.call(this);
	this.set_upState(up);
	this.set_downState(this.validateButtonState(down));
	this.set_overState(this.validateButtonState(over));
	this.set_disabledState(disabled);
	this.set_label(labelField);
	if(btnID == null) this.id = -1; else this.id = btnID;
	if(onPressed != null) this.onHit = onPressed;
	this.verify();
	this.onUp();
};
$hxClasses["com.firstplayable.hxlib.haxe.display.GraphicButton"] = com.firstplayable.hxlib.haxe.display.GraphicButton;
com.firstplayable.hxlib.haxe.display.GraphicButton.__name__ = ["com","firstplayable","hxlib","haxe","display","GraphicButton"];
com.firstplayable.hxlib.haxe.display.GraphicButton.__super__ = flash.display.Sprite;
com.firstplayable.hxlib.haxe.display.GraphicButton.prototype = $extend(flash.display.Sprite.prototype,{
	set_upState: function(d) {
		if(d == null) d = new flash.display.Sprite();
		if(this.m_curState == com.firstplayable.hxlib.haxe.display.GraphicButtonState.UP) {
			this.clearGraphics();
			this.upState = d;
			this.onUp();
		}
		return this.upState = d;
	}
	,set_downState: function(d) {
		if(d == null) d = this.upState;
		if(this.m_curState == com.firstplayable.hxlib.haxe.display.GraphicButtonState.DOWN) {
			this.clearGraphics();
			this.downState = d;
			this.onDown();
		}
		return this.downState = d;
	}
	,set_overState: function(d) {
		if(d == null) d = this.upState;
		if(this.m_curState == com.firstplayable.hxlib.haxe.display.GraphicButtonState.OVER) {
			this.clearGraphics();
			this.overState = d;
			this.onOver();
		}
		return this.overState = d;
	}
	,set_disabledState: function(d) {
		if(d == null) d = this.upState;
		if(this.m_curState == com.firstplayable.hxlib.haxe.display.GraphicButtonState.DISABLED) {
			this.clearGraphics();
			this.disabledState = d;
			this.onDisable();
		}
		return this.disabledState = d;
	}
	,set_label: function(t) {
		this.label = t;
		if(this.label != null) {
			this.label.mouseEnabled = false;
			this.label.set_width(this.upState.get_width());
			this.label.set_height(this.upState.get_height() - this.label.get_y());
			this.label.multiline = true;
			this.label.set_wordWrap(false);
			this.label.set_autoSize(flash.text.TextFieldAutoSize.LEFT);
			var _g = this.label;
			_g.set_x(_g.get_x() + 0.5 * (this.upState.get_width() - this.label.get_textWidth()));
			var _g1 = this.label;
			_g1.set_y(_g1.get_y() + 0.5 * (this.upState.get_height() - this.label.get_textHeight()));
		}
		return this.label;
	}
	,set_enabled: function(enable) {
		if(enable) this.onEnable(); else this.onDisable();
		return this.enabled = enable;
	}
	,validateButtonState: function(state) {
		var bitmap;
		if(js.Boot.__instanceof(state,flash.display.Bitmap)) bitmap = state; else bitmap = null;
		if(bitmap != null && bitmap.bitmapData == null) return null;
		return state;
	}
	,verify: function() {
		if(this.upState == null) this.set_upState(new flash.display.Sprite());
		if(this.downState == null) this.set_downState(this.upState);
		if(this.overState == null) this.set_overState(this.upState);
		if(this.disabledState == null) this.set_disabledState(this.upState);
	}
	,addLabel: function() {
		if(this.label != null) this.addChild(this.label);
	}
	,clearListeners: function() {
		this.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onUp));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onOver));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onDown));
		this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,$bind(this,this.onOver));
		this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,$bind(this,this.onOut));
		this.removeEventListener("touchBegin",$bind(this,this.onDown));
		this.removeEventListener("touchEnd",$bind(this,this.onUp));
		this.removeEventListener("touchRollOut",$bind(this,this.onOut));
	}
	,clearGraphics: function() {
		if(this.upState.parent != null) this.removeChild(this.upState);
		if(this.downState.parent != null) this.removeChild(this.downState);
		if(this.overState.parent != null) this.removeChild(this.overState);
		if(this.disabledState.parent != null) this.removeChild(this.disabledState);
		if(this.label != null && this.label.parent != null) this.removeChild(this.label);
	}
	,onUp: function(e) {
		this.clearListeners();
		this.clearGraphics();
		if(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent) && this.m_curState == com.firstplayable.hxlib.haxe.display.GraphicButtonState.DOWN) {
			this.m_curState = com.firstplayable.hxlib.haxe.display.GraphicButtonState.UP;
			this.trigger();
			return;
		}
		this.addChild(this.upState);
		this.addLabel();
		if(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)) this.addEventListener("touchBegin",$bind(this,this.onDown)); else this.addEventListener(flash.events.MouseEvent.ROLL_OVER,$bind(this,this.onOver));
		this.m_curState = com.firstplayable.hxlib.haxe.display.GraphicButtonState.UP;
	}
	,onDown: function(e) {
		this.clearListeners();
		this.clearGraphics();
		this.addChild(this.downState);
		this.addLabel();
		if(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)) {
			this.addEventListener("touchRollOut",$bind(this,this.onOut));
			this.addEventListener("touchEnd",$bind(this,this.onUp));
		} else {
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,$bind(this,this.onOut));
			this.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onOver));
		}
		this.m_curState = com.firstplayable.hxlib.haxe.display.GraphicButtonState.DOWN;
	}
	,onOver: function(e) {
		this.clearListeners();
		this.clearGraphics();
		if(this.m_curState == com.firstplayable.hxlib.haxe.display.GraphicButtonState.DOWN) {
			this.m_curState = com.firstplayable.hxlib.haxe.display.GraphicButtonState.OVER;
			this.trigger();
			return;
		}
		this.addChild(this.overState);
		this.addLabel();
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onDown));
		this.addEventListener(flash.events.MouseEvent.ROLL_OUT,$bind(this,this.onOut));
		this.m_curState = com.firstplayable.hxlib.haxe.display.GraphicButtonState.OVER;
	}
	,onOut: function(e) {
		this.m_curState = com.firstplayable.hxlib.haxe.display.GraphicButtonState.OUT;
		this.onUp(e);
	}
	,onDisable: function() {
		this.clearListeners();
		this.clearGraphics();
		this.addChild(this.disabledState);
		this.addLabel();
		this.m_curState = com.firstplayable.hxlib.haxe.display.GraphicButtonState.DISABLED;
	}
	,onEnable: function() {
		this.onUp();
	}
	,trigger: function() {
		this.onOver();
		this.onHit(this);
	}
	,onHit: function(caller) {
		if(this.label != null) com.firstplayable.hxlib.haxe.Debug.log(Std.string(this) + " '" + this.label.get_text() + "' was hit!",null,{ fileName : "GraphicButton.hx", lineNumber : 422, className : "com.firstplayable.hxlib.haxe.display.GraphicButton", methodName : "onHit"}); else com.firstplayable.hxlib.haxe.Debug.log(Std.string(this) + " was hit!",null,{ fileName : "GraphicButton.hx", lineNumber : 426, className : "com.firstplayable.hxlib.haxe.display.GraphicButton", methodName : "onHit"});
	}
	,__class__: com.firstplayable.hxlib.haxe.display.GraphicButton
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_enabled:"set_enabled",set_label:"set_label",set_disabledState:"set_disabledState",set_overState:"set_overState",set_downState:"set_downState",set_upState:"set_upState"})
});
com.firstplayable.hxlib.haxe.display.progress = {};
com.firstplayable.hxlib.haxe.display.progress.ProgressBarType = $hxClasses["com.firstplayable.hxlib.haxe.display.progress.ProgressBarType"] = { __ename__ : true, __constructs__ : ["Linear","Radial"] };
com.firstplayable.hxlib.haxe.display.progress.ProgressBarType.Linear = ["Linear",0];
com.firstplayable.hxlib.haxe.display.progress.ProgressBarType.Linear.toString = $estr;
com.firstplayable.hxlib.haxe.display.progress.ProgressBarType.Linear.__enum__ = com.firstplayable.hxlib.haxe.display.progress.ProgressBarType;
com.firstplayable.hxlib.haxe.display.progress.ProgressBarType.Radial = ["Radial",1];
com.firstplayable.hxlib.haxe.display.progress.ProgressBarType.Radial.toString = $estr;
com.firstplayable.hxlib.haxe.display.progress.ProgressBarType.Radial.__enum__ = com.firstplayable.hxlib.haxe.display.progress.ProgressBarType;
com.firstplayable.hxlib.haxe.display.progress.ProgressBar = function(type,params) {
	flash.display.Sprite.call(this);
	switch(type[1]) {
	case 0:
		this.m_bar = new com.firstplayable.hxlib.haxe.display.progress.fill.LinearFill(params);
		break;
	case 1:
		this.m_bar = new com.firstplayable.hxlib.haxe.display.progress.fill.RadialFill(params);
		break;
	}
	this.addChild(this.m_bar);
};
$hxClasses["com.firstplayable.hxlib.haxe.display.progress.ProgressBar"] = com.firstplayable.hxlib.haxe.display.progress.ProgressBar;
com.firstplayable.hxlib.haxe.display.progress.ProgressBar.__name__ = ["com","firstplayable","hxlib","haxe","display","progress","ProgressBar"];
com.firstplayable.hxlib.haxe.display.progress.ProgressBar.__super__ = flash.display.Sprite;
com.firstplayable.hxlib.haxe.display.progress.ProgressBar.prototype = $extend(flash.display.Sprite.prototype,{
	set_progress: function(perc) {
		if(perc < 0) perc = 0; else if(perc > 100) perc = 100;
		this.m_bar.fill(perc / 100);
		return this.progress = perc;
	}
	,get_fillLength: function() {
		return this.m_bar.fillLength;
	}
	,get_fullLength: function() {
		return this.m_bar.fullLength;
	}
	,__class__: com.firstplayable.hxlib.haxe.display.progress.ProgressBar
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_fullLength:"get_fullLength",get_fillLength:"get_fillLength",set_progress:"set_progress"})
});
com.firstplayable.hxlib.haxe.display.progress.fill = {};
com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill = function() {
	flash.display.Sprite.call(this);
	this.fillLength = 0;
	this.fullLength = 0;
};
$hxClasses["com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill"] = com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill;
com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill.__name__ = ["com","firstplayable","hxlib","haxe","display","progress","fill","ShapeFill"];
com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill.__super__ = flash.display.Sprite;
com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill.prototype = $extend(flash.display.Sprite.prototype,{
	fill: function(perc) {
		if(perc < 0) perc = 0; else if(perc > 1) perc = 1;
		this.updateDraw(perc);
	}
	,updateDraw: function(t) {
	}
	,__class__: com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill
});
com.firstplayable.hxlib.haxe.display.progress.fill.LinearFill = function(p) {
	com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill.call(this);
	if(p.endFillColor == null) p.endFillColor = p.startFillColor;
	this.m_fillColors = [p.startFillColor,p.endFillColor];
	this.m_size = [p.width,p.height];
	this.fullLength = p.width;
	this.m_fillMtx = new flash.geom.Matrix();
	this.m_fillMtx.createGradientBox(this.fullLength,1,0,0,0);
	this.m_fill = new flash.display.Shape();
	this.addChild(this.m_fill);
};
$hxClasses["com.firstplayable.hxlib.haxe.display.progress.fill.LinearFill"] = com.firstplayable.hxlib.haxe.display.progress.fill.LinearFill;
com.firstplayable.hxlib.haxe.display.progress.fill.LinearFill.__name__ = ["com","firstplayable","hxlib","haxe","display","progress","fill","LinearFill"];
com.firstplayable.hxlib.haxe.display.progress.fill.LinearFill.__super__ = com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill;
com.firstplayable.hxlib.haxe.display.progress.fill.LinearFill.prototype = $extend(com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill.prototype,{
	updateDraw: function(t) {
		this.m_fill.get_graphics().clear();
		this.fillLength = this.fullLength * t;
		this.m_fill.get_graphics().beginGradientFill(flash.display.GradientType.LINEAR,this.m_fillColors,[100,100],[0,255],this.m_fillMtx);
		this.m_fill.get_graphics().drawRect(0,0,this.fillLength,this.m_size[1]);
		this.m_fill.get_graphics().endFill();
	}
	,__class__: com.firstplayable.hxlib.haxe.display.progress.fill.LinearFill
});
com.firstplayable.hxlib.haxe.display.progress.fill.RadialFill = function(p) {
	com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill.call(this);
	if(p.endFillColor == null) p.endFillColor = p.startFillColor;
	if(p.fillThickness == null) p.fillThickness = p.radius;
	if(p.fillAngle == null) p.fillAngle = 360;
	this.m_outerR = p.radius;
	this.m_innerR = p.radius - p.fillThickness;
	this.m_fillColors = [p.startFillColor,p.endFillColor];
	this.m_fillAngle = p.fillAngle;
	this.fullLength = 2 * Math.PI * this.m_outerR;
	this.m_fill = new flash.display.Shape();
	this.addChild(this.m_fill);
};
$hxClasses["com.firstplayable.hxlib.haxe.display.progress.fill.RadialFill"] = com.firstplayable.hxlib.haxe.display.progress.fill.RadialFill;
com.firstplayable.hxlib.haxe.display.progress.fill.RadialFill.__name__ = ["com","firstplayable","hxlib","haxe","display","progress","fill","RadialFill"];
com.firstplayable.hxlib.haxe.display.progress.fill.RadialFill.__super__ = com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill;
com.firstplayable.hxlib.haxe.display.progress.fill.RadialFill.prototype = $extend(com.firstplayable.hxlib.haxe.display.progress.fill.ShapeFill.prototype,{
	updateDraw: function(t) {
		this.fillLength = this.fullLength * t;
		var step = t * this.m_fillAngle | 0;
		this.m_fill.get_graphics().clear();
		var startRgb = com.firstplayable.hxlib.haxe.utils.ColorUtils.hexToArgb(this.m_fillColors[0]);
		var endRgb = com.firstplayable.hxlib.haxe.utils.ColorUtils.hexToArgb(this.m_fillColors[1]);
		var lineRatio = this.m_outerR / 60;
		var difR = (endRgb.r - startRgb.r) / (this.m_fillAngle * lineRatio);
		var difG = (endRgb.g - startRgb.g) / (this.m_fillAngle * lineRatio);
		var difB = (endRgb.b - startRgb.b) / (this.m_fillAngle * lineRatio);
		var colorStep;
		var fromX;
		var fromY;
		var toX;
		var toY;
		var angRad;
		var count = (step * lineRatio | 0) + 1;
		var _g = 0;
		while(_g < count) {
			var i = _g++;
			colorStep = this.m_fillColors[0] + com.firstplayable.hxlib.haxe.utils.ColorUtils.argbToHex(difR * i | 0,difG * i | 0,difB * i | 0);
			this.m_fill.get_graphics().lineStyle(1,colorStep);
			angRad = i / lineRatio * 0.0174532925;
			fromX = this.m_innerR * Math.cos(angRad);
			fromY = -this.m_innerR * Math.sin(angRad);
			toX = this.m_outerR * Math.cos(angRad);
			toY = -this.m_outerR * Math.sin(angRad);
			this.m_fill.get_graphics().moveTo(fromX,fromY);
			this.m_fill.get_graphics().lineTo(toX,toY);
		}
		this.m_fill.get_graphics().endFill();
	}
	,__class__: com.firstplayable.hxlib.haxe.display.progress.fill.RadialFill
});
com.firstplayable.hxlib.haxe.io = {};
com.firstplayable.hxlib.haxe.io.GameSaveVersion = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.io.GameSaveVersion"] = com.firstplayable.hxlib.haxe.io.GameSaveVersion;
com.firstplayable.hxlib.haxe.io.GameSaveVersion.__name__ = ["com","firstplayable","hxlib","haxe","io","GameSaveVersion"];
com.firstplayable.hxlib.haxe.io.GameSave = function() {
	this.profileName = "1p-GameSave" + Std.random(1000);
	this.productName = this.profileName;
	this.user = "User-1";
	this.profileId = -1;
	this.version = 1.02;
	var _this = new Date();
	this.timestamp = HxOverrides.dateStr(_this);
	this.guid = com.firstplayable.hxlib.haxe.utils.GUID.create();
};
$hxClasses["com.firstplayable.hxlib.haxe.io.GameSave"] = com.firstplayable.hxlib.haxe.io.GameSave;
com.firstplayable.hxlib.haxe.io.GameSave.__name__ = ["com","firstplayable","hxlib","haxe","io","GameSave"];
com.firstplayable.hxlib.haxe.io.GameSave.prototype = {
	__class__: com.firstplayable.hxlib.haxe.io.GameSave
};
com.firstplayable.hxlib.haxe.net = {};
com.firstplayable.hxlib.haxe.net.AjaxRequest = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.net.AjaxRequest"] = com.firstplayable.hxlib.haxe.net.AjaxRequest;
com.firstplayable.hxlib.haxe.net.AjaxRequest.__name__ = ["com","firstplayable","hxlib","haxe","net","AjaxRequest"];
com.firstplayable.hxlib.haxe.net.AjaxRequest.init = function(url,user,pass) {
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_request = new XMLHttpRequest();
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_url = url;
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_user = user;
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_pass = pass;
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_inited = true;
};
com.firstplayable.hxlib.haxe.net.AjaxRequest.request = function(type,request,header,async,cb) {
	if(async == null) async = true;
	if(!com.firstplayable.hxlib.haxe.net.AjaxRequest.m_inited) {
		com.firstplayable.hxlib.haxe.Debug.log("Must call init() first!",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "AjaxRequest.hx", lineNumber : 60, className : "com.firstplayable.hxlib.haxe.net.AjaxRequest", methodName : "request"});
		return;
	}
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_callback = cb;
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_request.onreadystatechange = com.firstplayable.hxlib.haxe.net.AjaxRequest.onReady;
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_request.open(type,com.firstplayable.hxlib.haxe.net.AjaxRequest.m_url,async,com.firstplayable.hxlib.haxe.net.AjaxRequest.m_user,com.firstplayable.hxlib.haxe.net.AjaxRequest.m_pass);
	if(type == "POST" && header != null) {
		var headerInfo = header.split(" ");
		com.firstplayable.hxlib.haxe.net.AjaxRequest.m_request.setRequestHeader(headerInfo[0],headerInfo[1]);
	}
	var requestStr = "";
	var props = request.split("&");
	var _g1 = 0;
	var _g = props.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(i > 0) requestStr += "&";
		var propPair = props[i].split("=");
		requestStr += encodeURIComponent(propPair[0]) + "=" + encodeURIComponent(propPair[1]);
	}
	com.firstplayable.hxlib.haxe.net.AjaxRequest.m_request.send(requestStr);
};
com.firstplayable.hxlib.haxe.net.AjaxRequest.onReady = function(e) {
	if(com.firstplayable.hxlib.haxe.net.AjaxRequest.m_request.readyState == 4 && com.firstplayable.hxlib.haxe.net.AjaxRequest.m_request.status == 200) {
		com.firstplayable.hxlib.haxe.Debug.log("Request complete.",null,{ fileName : "AjaxRequest.hx", lineNumber : 96, className : "com.firstplayable.hxlib.haxe.net.AjaxRequest", methodName : "onReady"});
		if(com.firstplayable.hxlib.haxe.net.AjaxRequest.m_callback != null) com.firstplayable.hxlib.haxe.net.AjaxRequest.m_callback(com.firstplayable.hxlib.haxe.net.AjaxRequest.m_request.responseText);
	}
};
com.firstplayable.hxlib.haxe.ofl = {};
com.firstplayable.hxlib.haxe.ofl.OflResources = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.ofl.OflResources"] = com.firstplayable.hxlib.haxe.ofl.OflResources;
com.firstplayable.hxlib.haxe.ofl.OflResources.__name__ = ["com","firstplayable","hxlib","haxe","ofl","OflResources"];
com.firstplayable.hxlib.haxe.ofl.OflResources.getImg = function(path) {
	return new flash.display.Bitmap(openfl.Assets.getBitmapData(path));
};
com.firstplayable.hxlib.haxe.ofl.OflResources.getSfx = function(path) {
	return openfl.Assets.getSound(path);
};
com.firstplayable.hxlib.haxe.ofl.OflResources.getFile = function(path) {
	return openfl.Assets.getText(path);
};
com.firstplayable.hxlib.haxe.ofl.OflResources.getFont = function(path) {
	com.firstplayable.hxlib.haxe.Debug.log("getFont() is disabled! Font seen may not be that requested.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "OflResources.hx", lineNumber : 72, className : "com.firstplayable.hxlib.haxe.ofl.OflResources", methodName : "getFont"});
	return new flash.text.TextFormat(openfl.Assets.getFont(path).fontName);
};
com.firstplayable.hxlib.haxe.ofl.OflResources.getImgSilently = function(path) {
	if(!openfl.Assets.exists(path,openfl.AssetType.IMAGE)) return null;
	return new flash.display.Bitmap(openfl.Assets.getBitmapData(path));
};
com.firstplayable.hxlib.haxe.ofl.OflResources.getImgAlways = function(path,size) {
	if(size == null) size = 64;
	return new flash.display.Bitmap(com.firstplayable.hxlib.haxe.ofl.OflResources.getImgDataAlways(path,size));
};
com.firstplayable.hxlib.haxe.ofl.OflResources.getImgDataAlways = function(path,size) {
	if(size == null) size = 64;
	if(openfl.Assets.exists(path,openfl.AssetType.IMAGE)) return openfl.Assets.getBitmapData(path);
	com.firstplayable.hxlib.haxe.Debug.log("Image does not exist: '" + path + "'; creating an error image.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "OflResources.hx", lineNumber : 118, className : "com.firstplayable.hxlib.haxe.ofl.OflResources", methodName : "getImgDataAlways"});
	var data = new flash.display.BitmapData(size,size,false);
	var inc = 0;
	var dec = size;
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		data.setPixel(i,inc,16711680);
		data.setPixel(i,dec,16711680);
		++inc;
		--dec;
	}
	return data;
};
com.firstplayable.hxlib.haxe.state = {};
com.firstplayable.hxlib.haxe.state.IGameState = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.state.IGameState"] = com.firstplayable.hxlib.haxe.state.IGameState;
com.firstplayable.hxlib.haxe.state.IGameState.__name__ = ["com","firstplayable","hxlib","haxe","state","IGameState"];
com.firstplayable.hxlib.haxe.state.IGameState.prototype = {
	__class__: com.firstplayable.hxlib.haxe.state.IGameState
	,__properties__: {get_name:"get_name",get_id:"get_id"}
};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,__class__: haxe.ds.IntMap
};
com.firstplayable.hxlib.haxe.state.StateManager = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.state.StateManager"] = com.firstplayable.hxlib.haxe.state.StateManager;
com.firstplayable.hxlib.haxe.state.StateManager.__name__ = ["com","firstplayable","hxlib","haxe","state","StateManager"];
com.firstplayable.hxlib.haxe.state.StateManager.reset = function() {
	com.firstplayable.hxlib.haxe.state.StateManager.m_rStates = new haxe.ds.IntMap();
	com.firstplayable.hxlib.haxe.state.StateManager.currentState = null;
};
com.firstplayable.hxlib.haxe.state.StateManager.addState = function(rState) {
	if(rState == null) com.firstplayable.hxlib.haxe.Debug.log("[Warning] Attempted to add an invalid state",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "StateManager.hx", lineNumber : 39, className : "com.firstplayable.hxlib.haxe.state.StateManager", methodName : "addState"});
	if(com.firstplayable.hxlib.haxe.state.StateManager.m_rStates.exists(rState.get_id()) && com.firstplayable.hxlib.haxe.state.StateManager.m_rStates.get(rState.get_id()) == rState) {
		com.firstplayable.hxlib.haxe.Debug.warn("[WARNING] State '" + Std.string(rState) + "' has already been added!",{ fileName : "StateManager.hx", lineNumber : 43, className : "com.firstplayable.hxlib.haxe.state.StateManager", methodName : "addState"});
		return;
	} else if(com.firstplayable.hxlib.haxe.state.StateManager.m_rStates.exists(rState.get_id())) {
		com.firstplayable.hxlib.haxe.Debug.warn("[WARNING] Tried to add state with id '" + rState.get_id() + "' but that id already exists!",{ fileName : "StateManager.hx", lineNumber : 48, className : "com.firstplayable.hxlib.haxe.state.StateManager", methodName : "addState"});
		return;
	} else com.firstplayable.hxlib.haxe.state.StateManager.m_rStates.set(rState.get_id(),rState);
};
com.firstplayable.hxlib.haxe.state.StateManager.getState = function(stateId) {
	var stateIndex = stateId[1];
	if(!com.firstplayable.hxlib.haxe.state.StateManager.m_rStates.exists(stateIndex)) {
		com.firstplayable.hxlib.haxe.Debug.log("[WARNING] Could not find a state with id '" + stateIndex + "'",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "StateManager.hx", lineNumber : 68, className : "com.firstplayable.hxlib.haxe.state.StateManager", methodName : "getState"});
		return null;
	}
	return com.firstplayable.hxlib.haxe.state.StateManager.m_rStates.get(stateIndex);
};
com.firstplayable.hxlib.haxe.state.StateManager.setState = function(stateId,args) {
	var stateIndex = stateId[1];
	if(!com.firstplayable.hxlib.haxe.state.StateManager.m_rStates.exists(stateIndex)) {
		com.firstplayable.hxlib.haxe.Debug.log("[WARNING] Attempted to set state to id '" + stateIndex + "' but that state can't be found!",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "StateManager.hx", lineNumber : 86, className : "com.firstplayable.hxlib.haxe.state.StateManager", methodName : "setState"});
		return;
	}
	if(com.firstplayable.hxlib.haxe.state.StateManager.currentState != null) com.firstplayable.hxlib.haxe.state.StateManager.currentState.exit();
	com.firstplayable.hxlib.haxe.state.StateManager.currentState = com.firstplayable.hxlib.haxe.state.StateManager.m_rStates.get(stateIndex);
	com.firstplayable.hxlib.haxe.state.StateManager.currentState.enter(args);
};
com.firstplayable.hxlib.haxe.state.StateManager.replaceState = function(rState,args) {
	if(rState == null) {
		com.firstplayable.hxlib.haxe.Debug.log("[WARNING] Attempted to add an invalid state!",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "StateManager.hx", lineNumber : 109, className : "com.firstplayable.hxlib.haxe.state.StateManager", methodName : "replaceState"});
		return;
	}
	if(com.firstplayable.hxlib.haxe.state.StateManager.currentState != null) com.firstplayable.hxlib.haxe.state.StateManager.currentState.exit();
	com.firstplayable.hxlib.haxe.state.StateManager.currentState = rState;
	com.firstplayable.hxlib.haxe.state.StateManager.currentState.enter(args);
};
flash.net = {};
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	close: function() {
	}
	,getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = flash.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
com.firstplayable.hxlib.haxe.text = {};
com.firstplayable.hxlib.haxe.text.CSVSheet = function(url,aTableName) {
	if(aTableName == null) aTableName = "CSVTable";
	flash.net.URLLoader.call(this,url);
	this.tableName = aTableName;
	this.separator = ",";
	this.encapsulator = "\"";
	this.cellNotFoundReturn = "CELL_NOT_FOUND";
	this.m_table = [];
	this.m_isDataSet = false;
};
$hxClasses["com.firstplayable.hxlib.haxe.text.CSVSheet"] = com.firstplayable.hxlib.haxe.text.CSVSheet;
com.firstplayable.hxlib.haxe.text.CSVSheet.__name__ = ["com","firstplayable","hxlib","haxe","text","CSVSheet"];
com.firstplayable.hxlib.haxe.text.CSVSheet.__super__ = flash.net.URLLoader;
com.firstplayable.hxlib.haxe.text.CSVSheet.prototype = $extend(flash.net.URLLoader.prototype,{
	get_width: function() {
		if(this.m_table.length > 0) return this.m_table[0].length; else return 0;
	}
	,get_height: function() {
		return this.m_table.length;
	}
	,get_array: function() {
		return this.m_table.slice();
	}
	,get_headers: function() {
		return this.getRowByIndex(0);
	}
	,insertRow: function(row,rowIndex) {
		if(com.firstplayable.hxlib.haxe.Debug.exists(row,null,null,{ fileName : "CSVSheet.hx", lineNumber : 113, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "insertRow"})) {
			if(rowIndex != null) this.m_table.splice(rowIndex,0,row); else this.m_table.push(row);
		}
	}
	,removeRow: function(rowIndex) {
		this.m_table.splice(rowIndex,1);
	}
	,removeCol: function(colIndex) {
		var _g = 0;
		var _g1 = this.m_table;
		while(_g < _g1.length) {
			var record = _g1[_g];
			++_g;
			if(record.length > colIndex) record.splice(colIndex,1);
		}
	}
	,encode: function() {
		var dataStr = "";
		var _g = 0;
		var _g1 = this.m_table;
		while(_g < _g1.length) {
			var row = _g1[_g];
			++_g;
			var rowLen = row.length;
			var _g2 = 0;
			while(_g2 < rowLen) {
				var j = _g2++;
				row[j] = this.encapsulator + row[j] + this.encapsulator;
			}
			dataStr += row.join(this.separator) + "\r\n";
		}
		this.data = dataStr;
		this.m_isDataSet = true;
		return dataStr;
	}
	,decode: function() {
		if(!(typeof(this.data) == "string")) {
			com.firstplayable.hxlib.haxe.Debug.log("Property 'data' is invalid or null. Cannot decode!",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 184, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "decode"});
			return;
		}
		var unencapsulatedFind = "(?=([^\"\\\\]*(\\\\.|\"([^\"\\\\]*\\\\.)*[^\"\\\\]*\"))*[^\"]*$)";
		this.rowDelim = new EReg("(\r?\n|\r^)" + unencapsulatedFind,"g");
		this.colDelim = new EReg(this.separator + unencapsulatedFind,"g");
		this.m_table.splice(0,this.m_table.length);
		var rows = this.rowDelim.split(this.data);
		var _g = 0;
		while(_g < rows.length) {
			var row = rows[_g];
			++_g;
			var cells = this.colDelim.split(row);
			var colLen = cells.length;
			var _g1 = 0;
			while(_g1 < colLen) {
				var j = _g1++;
				var cellStr = cells[j];
				var encapPattern = new EReg("^" + this.encapsulator + "+|" + this.encapsulator + "+$","g");
				var quotePatter = new EReg("\"\"","g");
				cellStr = encapPattern.replace(cellStr,"");
				cellStr = quotePatter.replace(cellStr,"\"");
				cells[j] = cellStr;
			}
			this.m_table.push(cells);
		}
		this.m_isDataSet = true;
	}
	,search: function(conditions,exclusive) {
		if(exclusive == null) exclusive = false;
		var splitter = "=";
		var ar = [];
		var _g = 0;
		var _g1 = this.m_table;
		while(_g < _g1.length) {
			var entry = _g1[_g];
			++_g;
			var shouldAdd = 0;
			var _g2 = 0;
			while(_g2 < conditions.length) {
				var $eval = conditions[_g2];
				++_g2;
				var pair = $eval.split(splitter);
				var col = this.getColIndexByName(pair[0]);
				var val = pair[1];
				if(entry[col] == val) {
					++shouldAdd;
					if(!exclusive) break;
				}
			}
			var allConditionsMet = exclusive && shouldAdd == conditions.length;
			var oneConditionMet = !exclusive && shouldAdd > 0;
			if(allConditionsMet || oneConditionMet) ar.push(entry);
		}
		if(ar.length == 0) {
			com.firstplayable.hxlib.haxe.Debug.log("Search found no matches!",null,{ fileName : "CSVSheet.hx", lineNumber : 265, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "search"});
			var arNotFound = [];
			var _g11 = 0;
			var _g3 = this.get_headers().length;
			while(_g11 < _g3) {
				var i = _g11++;
				arNotFound[i] = this.cellNotFoundReturn;
			}
			ar.push(arNotFound);
		} else com.firstplayable.hxlib.haxe.Debug.log("Search found " + ar.length + " matches!",null,{ fileName : "CSVSheet.hx", lineNumber : 279, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "search"});
		return ar;
	}
	,getCellsInRange: function(startRow,endRow,col) {
		var rangeTable = [];
		var _g = startRow;
		while(_g < endRow) {
			var i = _g++;
			rangeTable.push(this.getCell(i,col));
		}
		return rangeTable;
	}
	,getEntriesInRange: function(startRow,endRow,includeHeaders) {
		if(includeHeaders == null) includeHeaders = false;
		var rangeTable = [];
		if(includeHeaders) rangeTable.push(this.get_headers());
		var _g = startRow;
		while(_g < endRow) {
			var i = _g++;
			rangeTable.push(this.getRowByIndex(i));
		}
		return rangeTable;
	}
	,getRecord: function(row) {
		if(!this.m_isDataSet) {
			com.firstplayable.hxlib.haxe.Debug.log("Table has not been decoded. Please call decode() first.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 339, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getRecord"});
			return [];
		}
		if(((row | 0) === row)) return this.getRowByIndex(row); else if(typeof(row) == "string") return this.getRowByName(row);
		com.firstplayable.hxlib.haxe.Debug.log("Query information is not valid.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 352, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getRecord"});
		return [];
	}
	,getRowByIndex: function(row) {
		if(row < this.m_table.length) return this.m_table[row];
		com.firstplayable.hxlib.haxe.Debug.log("Row index out of bounds.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 368, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getRowByIndex"});
		return [];
	}
	,getRowByName: function(rowHeader) {
		var _g = 0;
		var _g1 = this.m_table;
		while(_g < _g1.length) {
			var row = _g1[_g];
			++_g;
			var rowName = row[0];
			if(rowName == rowHeader) return row;
		}
		com.firstplayable.hxlib.haxe.Debug.log("Row does not exist.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 390, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getRowByName"});
		return [];
	}
	,getCell: function(row,col) {
		if(!this.m_isDataSet) {
			com.firstplayable.hxlib.haxe.Debug.log("Table has not been decoded. Please call decode() first.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 404, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getCell"});
			return this.cellNotFoundReturn;
		}
		var cell = null;
		if(((row | 0) === row) && ((col | 0) === col)) cell = this.getCellByIndex(row,col); else if(typeof(row) == "string" && typeof(col) == "string") cell = this.getCellByName(row,col); else if(((row | 0) === row) && typeof(col) == "string") cell = this.getRowByIndex(row)[this.getColIndexByName(col)]; else if(typeof(row) == "string" && ((col | 0) === col)) cell = this.getRowByName(row)[col]; else com.firstplayable.hxlib.haxe.Debug.log("Query information is not valid.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 428, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getCell"});
		if(cell != null) return cell; else return this.cellNotFoundReturn;
	}
	,getCellByIndex: function(row,col) {
		if(row < this.m_table.length && col < this.m_table[0].length) return this.m_table[row][col];
		com.firstplayable.hxlib.haxe.Debug.log("Row and/or column index out of bounds.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 448, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getCellByIndex"});
		return this.cellNotFoundReturn;
	}
	,getCellByName: function(rowHeader,colHeader) {
		var row = this.getRowByName(rowHeader);
		var colIndex = this.getColIndexByName(colHeader);
		if(com.firstplayable.hxlib.haxe.Debug.exists(row,null,null,{ fileName : "CSVSheet.hx", lineNumber : 464, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getCellByName"}) && colIndex < row.length) return row[colIndex];
		com.firstplayable.hxlib.haxe.Debug.log("Row and/or column does not exist.",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "CSVSheet.hx", lineNumber : 469, className : "com.firstplayable.hxlib.haxe.text.CSVSheet", methodName : "getCellByName"});
		return this.cellNotFoundReturn;
	}
	,getColIndexByName: function(colHeader) {
		var headerRow = this.m_table[0];
		return HxOverrides.indexOf(headerRow,colHeader,0);
	}
	,getRowIndexByName: function(rowHeader) {
		var h = this.get_height();
		var _g = 0;
		while(_g < h) {
			var i = _g++;
			if(this.m_table[i][0] == rowHeader) return i;
		}
		return -1;
	}
	,clear: function() {
		this.m_table.splice(0,this.m_table.length);
		this.m_isDataSet = false;
	}
	,toString: function() {
		var output = "(tableName= " + this.tableName + "):\n";
		var _g = 0;
		var _g1 = this.m_table;
		while(_g < _g1.length) {
			var record = _g1[_g];
			++_g;
			output += record.join("|") + "\n";
		}
		return flash.net.URLLoader.prototype.toString.call(this) + output;
	}
	,__class__: com.firstplayable.hxlib.haxe.text.CSVSheet
	,__properties__: $extend(flash.net.URLLoader.prototype.__properties__,{get_headers:"get_headers",get_array:"get_array",get_height:"get_height",get_width:"get_width"})
});
com.firstplayable.hxlib.haxe.utils = {};
com.firstplayable.hxlib.haxe.utils.BitFlags = function(startFlags) {
	if(startFlags == null) startFlags = 0;
	this.m_flags = startFlags;
};
$hxClasses["com.firstplayable.hxlib.haxe.utils.BitFlags"] = com.firstplayable.hxlib.haxe.utils.BitFlags;
com.firstplayable.hxlib.haxe.utils.BitFlags.__name__ = ["com","firstplayable","hxlib","haxe","utils","BitFlags"];
com.firstplayable.hxlib.haxe.utils.BitFlags.toFlag = function($int) {
	return new com.firstplayable.hxlib.haxe.utils.BitFlags($int);
};
com.firstplayable.hxlib.haxe.utils.BitFlags.prototype = {
	'int': function() {
		return this.m_flags;
	}
	,add: function(flags) {
		this.m_flags |= flags;
		return this.m_flags;
	}
	,remove: function(flags) {
		this.m_flags &= ~flags;
		return this.m_flags;
	}
	,has: function(flags) {
		return (this.m_flags & flags) == flags;
	}
	,isEmpty: function() {
		return this.m_flags == 0;
	}
	,clear: function() {
		this.m_flags = 0;
		return this.m_flags;
	}
	,toggle: function(flags) {
		this.m_flags ^= flags;
		return this.m_flags;
	}
	,__class__: com.firstplayable.hxlib.haxe.utils.BitFlags
};
com.firstplayable.hxlib.haxe.utils.ColorUtils = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.utils.ColorUtils"] = com.firstplayable.hxlib.haxe.utils.ColorUtils;
com.firstplayable.hxlib.haxe.utils.ColorUtils.__name__ = ["com","firstplayable","hxlib","haxe","utils","ColorUtils"];
com.firstplayable.hxlib.haxe.utils.ColorUtils.hexToArgb = function(hex) {
	return { a : hex >> 24 & 255, r : hex >> 16 & 255, g : hex >> 8 & 255, b : hex & 255};
};
com.firstplayable.hxlib.haxe.utils.ColorUtils.argbToHex = function(r,g,b,a) {
	if(a == null) return (r << 16) + (g << 8) + b; else return (a << 24) + (r << 16) + (g << 8) + b;
};
com.firstplayable.hxlib.haxe.utils.ColorUtils.dsToHex = function(r,g,b,a) {
	return com.firstplayable.hxlib.haxe.utils.ColorUtils.argbToHex(r << 3 | r >> 2,g << 3 | g >> 2,b << 3 | b >> 2,a << 3 | a >> 2);
};
com.firstplayable.hxlib.haxe.utils.ColorUtils.colorTransform = function(obj,color) {
};
com.firstplayable.hxlib.haxe.utils.ColorUtils.colorTint = function(obj,color,intensity) {
};
com.firstplayable.hxlib.haxe.utils.DateToolsX = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.utils.DateToolsX"] = com.firstplayable.hxlib.haxe.utils.DateToolsX;
com.firstplayable.hxlib.haxe.utils.DateToolsX.__name__ = ["com","firstplayable","hxlib","haxe","utils","DateToolsX"];
com.firstplayable.hxlib.haxe.utils.DateToolsX.getMonthName = function(month) {
	if(month > 11) return "Month index out of bounds.";
	return com.firstplayable.hxlib.haxe.utils.DateToolsX.m_monthNames[month];
};
com.firstplayable.hxlib.haxe.utils.DateToolsX.getWeekdayName = function(day) {
	if(day > 6) return "Day index out of bounds.";
	return com.firstplayable.hxlib.haxe.utils.DateToolsX.m_weekdayNames[day];
};
com.firstplayable.hxlib.haxe.utils.DateToolsX.getYearDay = function(date) {
	var year = date.getFullYear();
	var month = date.getMonth();
	var dayOfYear = date.getDate();
	var _g = 0;
	while(_g < month) {
		var i = _g++;
		dayOfYear += DateTools.getMonthDays(new Date(year,i,1,1,1,1));
	}
	return dayOfYear;
};
com.firstplayable.hxlib.haxe.utils.DateToolsX.isLeapYear = function(date) {
	return date.getFullYear() % 4 == 0;
};
com.firstplayable.hxlib.haxe.utils.DateToolsX.toStringDate = function(date) {
	return HxOverrides.dateStr(date).split(" ")[0];
};
com.firstplayable.hxlib.haxe.utils.DateToolsX.toStringTime = function(date) {
	return HxOverrides.dateStr(date).split(" ")[1];
};
com.firstplayable.hxlib.haxe.utils.DateToolsX.__super__ = DateTools;
com.firstplayable.hxlib.haxe.utils.DateToolsX.prototype = $extend(DateTools.prototype,{
	__class__: com.firstplayable.hxlib.haxe.utils.DateToolsX
});
com.firstplayable.hxlib.haxe.utils.TimerStart = $hxClasses["com.firstplayable.hxlib.haxe.utils.TimerStart"] = { __ename__ : true, __constructs__ : ["Automatic","Manual"] };
com.firstplayable.hxlib.haxe.utils.TimerStart.Automatic = ["Automatic",0];
com.firstplayable.hxlib.haxe.utils.TimerStart.Automatic.toString = $estr;
com.firstplayable.hxlib.haxe.utils.TimerStart.Automatic.__enum__ = com.firstplayable.hxlib.haxe.utils.TimerStart;
com.firstplayable.hxlib.haxe.utils.TimerStart.Manual = ["Manual",1];
com.firstplayable.hxlib.haxe.utils.TimerStart.Manual.toString = $estr;
com.firstplayable.hxlib.haxe.utils.TimerStart.Manual.__enum__ = com.firstplayable.hxlib.haxe.utils.TimerStart;
com.firstplayable.hxlib.haxe.utils.Delay = function(delay,onTrigger,repeat,triggerArgs,onComplete,completeArgs,startNow) {
	if(repeat == null) repeat = 1;
	this.delay = delay;
	this.m_repeat = repeat;
	this.m_triggerCount = this.m_repeat;
	this.m_onTrigger = onTrigger;
	this.m_onTriggerArgs = triggerArgs;
	this.m_onComplete = onComplete;
	this.m_onCompleteArgs = completeArgs;
	if(startNow == com.firstplayable.hxlib.haxe.utils.TimerStart.Automatic) this.start();
};
$hxClasses["com.firstplayable.hxlib.haxe.utils.Delay"] = com.firstplayable.hxlib.haxe.utils.Delay;
com.firstplayable.hxlib.haxe.utils.Delay.__name__ = ["com","firstplayable","hxlib","haxe","utils","Delay"];
com.firstplayable.hxlib.haxe.utils.Delay.setTimeout = function(delay,invoke) {
	haxe.Timer.delay(invoke,delay);
};
com.firstplayable.hxlib.haxe.utils.Delay.prototype = {
	get_isRunning: function() {
		return this.m_timer != null;
	}
	,start: function() {
		if(this.get_isRunning()) return;
		this.m_timer = new haxe.Timer(this.delay);
		this.m_timer.run = $bind(this,this.onRun);
	}
	,stop: function() {
		if(this.m_timer == null) return;
		this.m_timer.stop();
		this.m_timer = null;
	}
	,finish: function() {
		this.onTimerComplete();
	}
	,reset: function() {
		this.stop();
		this.m_triggerCount = this.m_repeat;
	}
	,restart: function() {
		this.reset();
		this.start();
	}
	,setTrigger: function(onTrigger,args) {
		if(this.get_isRunning()) return;
		this.m_onTrigger = onTrigger;
		this.m_onTriggerArgs = args;
	}
	,setComplete: function(onComplete,args) {
		if(this.get_isRunning()) return;
		this.m_onComplete = onComplete;
		this.m_onCompleteArgs = args;
	}
	,onRun: function() {
		this.m_onTrigger.apply(null,this.m_onTriggerArgs);
		--this.m_triggerCount;
		if(this.m_triggerCount == 0) this.onTimerComplete();
	}
	,onTimerComplete: function() {
		if(this.m_onComplete != null) this.m_onComplete.apply(null,this.m_onCompleteArgs);
		this.stop();
	}
	,__class__: com.firstplayable.hxlib.haxe.utils.Delay
	,__properties__: {get_isRunning:"get_isRunning"}
};
com.firstplayable.hxlib.haxe.utils.DeviceCapabilities = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.utils.DeviceCapabilities"] = com.firstplayable.hxlib.haxe.utils.DeviceCapabilities;
com.firstplayable.hxlib.haxe.utils.DeviceCapabilities.__name__ = ["com","firstplayable","hxlib","haxe","utils","DeviceCapabilities"];
com.firstplayable.hxlib.haxe.utils.DeviceCapabilities.isMobile = function() {
	return new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent);
};
com.firstplayable.hxlib.haxe.utils.DeviceCapabilities.platform = function() {
	return window.navigator.userAgent;
};
com.firstplayable.hxlib.haxe.utils.GUID = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.utils.GUID"] = com.firstplayable.hxlib.haxe.utils.GUID;
com.firstplayable.hxlib.haxe.utils.GUID.__name__ = ["com","firstplayable","hxlib","haxe","utils","GUID"];
com.firstplayable.hxlib.haxe.utils.GUID.create = function() {
	var dt = new Date();
	var id1 = dt.getTime();
	var id2 = Std.random(2147483647);
	var id3 = "A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=f&PR=t&SP=t&SB=f&DEB=t&V=WIN%208%2C5%2C0%2C208&M=Adobe%20Windows&R=1600x1200&DP=72&COL=color&AR=1.0&OS=Windows%20XP&L=en&PT=External&AVD=f&LFD=f&WD=f";
	var rawID = com.firstplayable.hxlib.haxe.utils.GUID.calculate(id1 + id3 + id2 + ++com.firstplayable.hxlib.haxe.utils.GUID.m_counter).toUpperCase();
	var finalString = rawID.substring(0,8) + "-" + rawID.substring(8,12) + "-" + rawID.substring(12,16) + "-" + rawID.substring(16,20) + "-" + rawID.substring(20,32);
	return finalString;
};
com.firstplayable.hxlib.haxe.utils.GUID.calculate = function(src) {
	return com.firstplayable.hxlib.haxe.utils.GUID.hex_sha1(src);
};
com.firstplayable.hxlib.haxe.utils.GUID.hex_sha1 = function(src) {
	return com.firstplayable.hxlib.haxe.utils.GUID.binb2hex(com.firstplayable.hxlib.haxe.utils.GUID.core_sha1(com.firstplayable.hxlib.haxe.utils.GUID.str2binb(src),src.length * 8));
};
com.firstplayable.hxlib.haxe.utils.GUID.core_sha1 = function(x,len) {
	x[len >> 5] |= 128 << 24 - len % 32;
	x[(len + 64 >> 9 << 4) + 15] = len;
	var w = new Array();
	var a = 1732584193;
	var b = -271733879;
	var c = -1732584194;
	var d = 271733878;
	var e = -1009589776;
	var wLen = 80;
	var _g1 = 0;
	var _g = x.length;
	while(_g1 < _g) {
		var index = _g1++;
		var i = index * 16;
		var olda = a;
		var oldb = b;
		var oldc = c;
		var oldd = d;
		var olde = e;
		var _g2 = 0;
		while(_g2 < wLen) {
			var j = _g2++;
			if(j < 16) w[j] = x[i + j]; else w[j] = com.firstplayable.hxlib.haxe.utils.GUID.rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16],1);
			var t = com.firstplayable.hxlib.haxe.utils.GUID.safe_add(com.firstplayable.hxlib.haxe.utils.GUID.safe_add(com.firstplayable.hxlib.haxe.utils.GUID.rol(a,5),com.firstplayable.hxlib.haxe.utils.GUID.sha1_ft(j,b,c,d)),com.firstplayable.hxlib.haxe.utils.GUID.safe_add(com.firstplayable.hxlib.haxe.utils.GUID.safe_add(e,w[j]),com.firstplayable.hxlib.haxe.utils.GUID.sha1_kt(j)));
			e = d;
			d = c;
			c = com.firstplayable.hxlib.haxe.utils.GUID.rol(b,30);
			b = a;
			a = t;
		}
		a = com.firstplayable.hxlib.haxe.utils.GUID.safe_add(a,olda);
		b = com.firstplayable.hxlib.haxe.utils.GUID.safe_add(b,oldb);
		c = com.firstplayable.hxlib.haxe.utils.GUID.safe_add(c,oldc);
		d = com.firstplayable.hxlib.haxe.utils.GUID.safe_add(d,oldd);
		e = com.firstplayable.hxlib.haxe.utils.GUID.safe_add(e,olde);
	}
	return [a,b,c,d,e];
};
com.firstplayable.hxlib.haxe.utils.GUID.sha1_ft = function(t,b,c,d) {
	if(t < 20) return b & c | ~b & d;
	if(t < 40) return b ^ c ^ d;
	if(t < 60) return b & c | b & d | c & d;
	return b ^ c ^ d;
};
com.firstplayable.hxlib.haxe.utils.GUID.sha1_kt = function(t) {
	if(t < 20) return 1518500249; else if(t < 40) return 1859775393; else if(t < 60) return -1894007588; else return -899497514;
};
com.firstplayable.hxlib.haxe.utils.GUID.safe_add = function(x,y) {
	var lsw = (x & 65535) + (y & 65535);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return msw << 16 | lsw & 65535;
};
com.firstplayable.hxlib.haxe.utils.GUID.rol = function(num,cnt) {
	return num << cnt | num >>> 32 - cnt;
};
com.firstplayable.hxlib.haxe.utils.GUID.str2binb = function(str) {
	var bin = new Array();
	var mask = 255;
	var len = str.length * 8;
	var _g = 0;
	while(_g < len) {
		var index = _g++;
		var i = index * 8;
		bin[i >> 5] |= (HxOverrides.cca(str,index) & mask) << 24 - i % 32;
	}
	return bin;
};
com.firstplayable.hxlib.haxe.utils.GUID.binb2hex = function(binarray) {
	var str = new String("");
	var tab = new String("0123456789abcdef");
	var len = binarray.length * 4;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		str += tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 + 4 & 15) + tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 & 15);
	}
	return str;
};
com.firstplayable.hxlib.haxe.utils.LambdaX = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.utils.LambdaX"] = com.firstplayable.hxlib.haxe.utils.LambdaX;
com.firstplayable.hxlib.haxe.utils.LambdaX.__name__ = ["com","firstplayable","hxlib","haxe","utils","LambdaX"];
com.firstplayable.hxlib.haxe.utils.LambdaX.shuffle = function(ar) {
	var itLen = ar.length;
	var _g = 0;
	while(_g < itLen) {
		var i = _g++;
		var rand = Std.random(itLen);
		var temp = ar[i];
		ar[i] = ar[rand];
		ar[rand] = temp;
	}
};
com.firstplayable.hxlib.haxe.utils.LambdaX.__super__ = Lambda;
com.firstplayable.hxlib.haxe.utils.LambdaX.prototype = $extend(Lambda.prototype,{
	__class__: com.firstplayable.hxlib.haxe.utils.LambdaX
});
com.firstplayable.hxlib.haxe.utils.MacroUtils = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.utils.MacroUtils"] = com.firstplayable.hxlib.haxe.utils.MacroUtils;
com.firstplayable.hxlib.haxe.utils.MacroUtils.__name__ = ["com","firstplayable","hxlib","haxe","utils","MacroUtils"];
com.firstplayable.hxlib.haxe.utils.MathUtils = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.utils.MathUtils"] = com.firstplayable.hxlib.haxe.utils.MathUtils;
com.firstplayable.hxlib.haxe.utils.MathUtils.__name__ = ["com","firstplayable","hxlib","haxe","utils","MathUtils"];
com.firstplayable.hxlib.haxe.utils.MathUtils.dotProduct = function(vectorOne,vectorTwo) {
	return vectorOne.x * vectorTwo.x + vectorOne.y * vectorTwo.y;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.lerp = function(u,v,t) {
	var lerpVector = new flash.geom.Point(v.x,v.y);
	lerpVector.subtract(u);
	return lerpVector;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.project = function(u,v) {
	var dotProd = com.firstplayable.hxlib.haxe.utils.MathUtils.dotProduct(u,v);
	var projectedVector = new flash.geom.Point(v.x,v.y);
	return projectedVector;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.reflect = function(toReflect,toReflectAcross) {
	var reflectedVector = new flash.geom.Point(toReflect.x,toReflect.y);
	var projectedVector = com.firstplayable.hxlib.haxe.utils.MathUtils.project(toReflectAcross,toReflect);
	projectedVector.x /= 2;
	projectedVector.y /= 2;
	reflectedVector.subtract(projectedVector);
	return reflectedVector;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.truncateTo = function(f,dig) {
	var power = Math.pow(10,dig);
	return (f * power | 0) / power;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.isEven = function(i) {
	return (i & 1) == 0;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.isOdd = function(i) {
	return !((i & 1) == 0);
};
com.firstplayable.hxlib.haxe.utils.MathUtils.absInt = function(i) {
	return (i ^ i >> 31) - (i >> 31);
};
com.firstplayable.hxlib.haxe.utils.MathUtils.absNum = function(num) {
	if(num < 0) return -num; else return num;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.modPow2 = function(i,mod) {
	return i & mod - 1;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.distanceSqInt = function(p1x,p1y,p2x,p2y) {
	var a = p2x - p1x;
	var b = p2y - p1y;
	return a * a + b * b;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.degreesToRadians = function(angle) {
	return angle * 0.0174532925;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.radiansToDegrees = function(angle) {
	return angle * 57.2957795;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.fpsToMs = function(fps) {
	return 1000 / fps;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.getLinearPoint = function(p1,p2,dist,mod) {
	var x3 = p2.x - p1.x;
	var y3 = p2.y - p1.y;
	var len = Math.sqrt(x3 * x3 + y3 * y3);
	x3 /= len;
	y3 /= len;
	x3 *= dist;
	y3 *= dist;
	var result;
	if(mod == null) result = new flash.geom.Point(); else result = mod;
	result.x = p1.x + x3;
	result.y = p1.y + y3;
	return result;
};
com.firstplayable.hxlib.haxe.utils.MathUtils.pointAt = function(source,dest) {
	var dX = dest.x - source.x;
	var dY = dest.y - source.y;
	return Math.atan2(dY,dX) * 57.2957795;
};
com.firstplayable.hxlib.haxe.utils.PropUtils = function() { };
$hxClasses["com.firstplayable.hxlib.haxe.utils.PropUtils"] = com.firstplayable.hxlib.haxe.utils.PropUtils;
com.firstplayable.hxlib.haxe.utils.PropUtils.__name__ = ["com","firstplayable","hxlib","haxe","utils","PropUtils"];
com.firstplayable.hxlib.haxe.utils.PropUtils.copyProperties = function(sourceObj,destObj,verify) {
	if(verify == null) verify = true;
	var typeStr;
	var e = Type["typeof"](destObj);
	typeStr = e[0];
	if(verify) {
		var _g = 0;
		var _g1 = Reflect.fields(sourceObj);
		while(_g < _g1.length) {
			var prop = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(destObj,prop)) {
				Reflect.setField(destObj,prop,Reflect.field(sourceObj,prop));
				com.firstplayable.hxlib.haxe.Debug.log(typeStr + "." + prop + " = " + Std.string(Reflect.field(sourceObj,prop)),null,{ fileName : "PropUtils.hx", lineNumber : 38, className : "com.firstplayable.hxlib.haxe.utils.PropUtils", methodName : "copyProperties"});
			} else com.firstplayable.hxlib.haxe.Debug.log(typeStr + " does not contain property '" + prop + "'",null,{ fileName : "PropUtils.hx", lineNumber : 42, className : "com.firstplayable.hxlib.haxe.utils.PropUtils", methodName : "copyProperties"});
		}
	} else {
		var _g2 = 0;
		var _g11 = Reflect.fields(sourceObj);
		while(_g2 < _g11.length) {
			var prop1 = _g11[_g2];
			++_g2;
			Reflect.setField(destObj,prop1,Reflect.field(sourceObj,prop1));
			com.firstplayable.hxlib.haxe.Debug.log(typeStr + "." + prop1 + " = " + Std.string(Reflect.field(sourceObj,prop1)),null,{ fileName : "PropUtils.hx", lineNumber : 51, className : "com.firstplayable.hxlib.haxe.utils.PropUtils", methodName : "copyProperties"});
		}
	}
};
com.firstplayable.hxlib.haxe.utils.PropUtils.getProperties = function(obj) {
	var map = new haxe.ds.StringMap();
	var _g = 0;
	var _g1 = Reflect.fields(obj);
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		map.set(prop,Reflect.field(obj,prop));
	}
	return map;
};
flash._Lib = {};
flash._Lib.CursorType = $hxClasses["flash._Lib.CursorType"] = { __ename__ : true, __constructs__ : ["Pointer","Text","Default"] };
flash._Lib.CursorType.Pointer = ["Pointer",0];
flash._Lib.CursorType.Pointer.toString = $estr;
flash._Lib.CursorType.Pointer.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Text = ["Text",1];
flash._Lib.CursorType.Text.toString = $estr;
flash._Lib.CursorType.Text.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Default = ["Default",2];
flash._Lib.CursorType.Default.toString = $estr;
flash._Lib.CursorType.Default.__enum__ = flash._Lib.CursorType;
flash._Vector = {};
flash._Vector.Vector_Impl_ = function() { };
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
};
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	var a1 = this1.concat(a);
	return a1;
};
flash._Vector.Vector_Impl_.copy = function(this1) {
	var a = this1.slice();
	return a;
};
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
};
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
};
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
};
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
};
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
};
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
};
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
};
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	var a = this1.slice(pos,end);
	return a;
};
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
};
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	var a = this1.splice(pos,len);
	return a;
};
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
};
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
};
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
};
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
};
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
};
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
};
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
};
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
};
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(value < this1.length) this1 = this1.slice(0,value);
	while(value > this1.length) this1.push(null);
	return value;
};
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
};
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
};
flash.accessibility = {};
flash.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["flash.accessibility.AccessibilityProperties"] = flash.accessibility.AccessibilityProperties;
flash.accessibility.AccessibilityProperties.__name__ = ["flash","accessibility","AccessibilityProperties"];
flash.accessibility.AccessibilityProperties.prototype = {
	__class__: flash.accessibility.AccessibilityProperties
};
flash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	flash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		if(this.bitmapData.__referenceCount == 1) this.__graphics = new flash.display.Graphics(this.bitmapData.___textureBuffer);
	}
	if(this.pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
	if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
	if(this.bitmapData != null) this.__render();
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this.___id + "]";
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new flash.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() / this.get_scaleX() || local.y > this.get_height() / this.get_scaleY()) return null; else return this;
		} else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if(this.bitmapData == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.bitmapData.___textureBuffer != this.__graphics.__surface) {
			var imageDataLease = this.bitmapData.__lease;
			if(imageDataLease != null && (this.__currentLease == null || imageDataLease.seed != this.__currentLease.seed || imageDataLease.time != this.__currentLease.time)) {
				var srcCanvas = this.bitmapData.___textureBuffer;
				this.__graphics.__surface.width = srcCanvas.width;
				this.__graphics.__surface.height = srcCanvas.height;
				this.__graphics.clear();
				flash.Lib.__drawToSurface(srcCanvas,this.__graphics.__surface);
				this.__currentLease = imageDataLease.clone();
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				this.__applyFilters(this.__graphics.__surface);
				this.___renderFlags |= 32;
			}
		}
		if(inMask != null) {
			this.__applyFilters(this.__graphics.__surface);
			var m = this.getBitmapSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.smoothing);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m1 = this.getBitmapSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m1);
				this.___renderFlags &= -33;
			}
			if(!this.__init) {
				flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,0);
				this.__init = true;
			} else flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,set_bitmapData: function(inBitmapData) {
		if(inBitmapData != this.bitmapData) {
			if(this.bitmapData != null) {
				this.bitmapData.__referenceCount--;
				if(this.__graphics.__surface == this.bitmapData.___textureBuffer) flash.Lib.__setSurfaceOpacity(this.bitmapData.___textureBuffer,0);
			}
			if(inBitmapData != null) inBitmapData.__referenceCount++;
		}
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,__class__: flash.display.Bitmap
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
flash.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.__locked = false;
	this.__referenceCount = 0;
	this.__leaseNum = 0;
	this.__lease = new flash.display.ImageDataLease();
	this.__lease.set(this.__leaseNum++,new Date().getTime());
	this.___textureBuffer = window.document.createElement("canvas");
	this.___textureBuffer.width = width;
	this.___textureBuffer.height = height;
	this.___id = flash.utils.Uuid.uuid();
	flash.Lib.__setSurfaceId(this.___textureBuffer,this.___id);
	this.__transparent = transparent;
	this.rect = new flash.geom.Rectangle(0,0,width,height);
	if(this.__transparent) {
		this.__transparentFiller = window.document.createElement("canvas");
		this.__transparentFiller.width = width;
		this.__transparentFiller.height = height;
		var ctx = this.__transparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.__transparent) inFillColor |= -16777216;
		this.__initColor = inFillColor;
		this.__fillRect(this.rect,inFillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new flash.geom.Rectangle(0,0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0));
	var num;
	num = (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0) * (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.readByte();
		var red = p.readByte();
		var green = p.readByte();
		var blue = p.readByte();
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
};
flash.display.BitmapData.loadFromBase64 = function(base64,type,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
};
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
};
flash.display.BitmapData.__base64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0;
		var by2 = 0;
		var by3 = 0;
		by1 = bytes.readByte();
		if(bytes.position < bytes.length) by2 = bytes.readByte();
		if(bytes.position < bytes.length) by3 = bytes.readByte();
		var by4 = 0;
		var by5 = 0;
		var by6 = 0;
		var by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
};
flash.display.BitmapData.__createFromHandle = function(inHandle) {
	var result = new flash.display.BitmapData(0,0);
	result.___textureBuffer = inHandle;
	return result;
};
flash.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
};
flash.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
};
flash.display.BitmapData.__isGIF = function(bytes) {
	bytes.position = 0;
	if(bytes.readByte() == 71 && bytes.readByte() == 73 && bytes.readByte() == 70 && bytes.readByte() == 38) {
		var b = bytes.readByte();
		return (b == 7 || b == 9) && bytes.readByte() == 97;
	}
	return false;
};
flash.display.BitmapData.prototype = {
	applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(sourceBitmapData == this && sourceRect.x == destPoint.x && sourceRect.y == destPoint.y) filter.__applyFilter(this.___textureBuffer,sourceRect); else {
			var bitmapData = new flash.display.BitmapData(sourceRect.width | 0,sourceRect.height | 0);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point());
			filter.__applyFilter(bitmapData.___textureBuffer);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
		}
	}
	,clear: function(color) {
		this.fillRect(this.rect,color);
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) {
			r.width -= r.x + r.width - (this.___textureBuffer != null?this.___textureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) {
			r.height -= r.y + r.height - (this.___textureBuffer != null?this.___textureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,clone: function() {
		var bitmapData = new flash.display.BitmapData(this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0,this.__transparent);
		var rect = new flash.geom.Rectangle(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.__lease.set(bitmapData.__leaseNum++,new Date().getTime());
		return bitmapData;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0;
			var _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX1;
			var _g11 = 0;
			var _g2 = Math.round(rect.height);
			while(_g11 < _g2) {
				var i1 = _g11++;
				offsetY = i1 * this.__imageData.width;
				var _g3 = 0;
				var _g21 = Math.round(rect.width);
				while(_g3 < _g21) {
					var j = _g3++;
					offsetX1 = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX1] = this.__imageData.data[s + offsetX1] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.__imageData.data[s + offsetX1 + 1] = this.__imageData.data[s + offsetX1 + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.__imageData.data[s + offsetX1 + 2] = this.__imageData.data[s + offsetX1 + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.__imageData.data[s + offsetX1 + 3] = this.__imageData.data[s + offsetX1 + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(destChannel == 8 && !this.__transparent) return;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData.___textureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData1 = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			doChannelCopy(imageData1);
			ctx.putImageData(imageData1,0,0);
		} else {
			doChannelCopy(this.__imageData);
			this.__imageDataChanged = true;
		}
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceBitmapData.___textureBuffer.width == 0 || sourceBitmapData.___textureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.__transparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var bitmapData = new flash.display.BitmapData(sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.width:0,sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.height:0,true);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point(sourceRect.x,sourceRect.y));
			bitmapData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = bitmapData;
		}
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			if(!mergeAlpha) {
				if(this.__transparent && sourceBitmapData.__transparent) {
					var trpCtx = sourceBitmapData.__transparentFiller.getContext("2d");
					var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
					ctx.putImageData(trpData,destPoint.x,destPoint.y);
				}
			}
			ctx.drawImage(sourceBitmapData.___textureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.__copyPixelList[this.__copyPixelList.length] = { handle : sourceBitmapData.___textureBuffer, transparentFiller : mergeAlpha?null:sourceBitmapData.__transparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,destroy: function() {
		this.___textureBuffer = null;
	}
	,dispose: function() {
		this.__clearCanvas();
		this.___textureBuffer = null;
		this.__leaseNum = 0;
		this.__lease = null;
		this.__imageData = null;
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		source.drawToSurface(this.___textureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new flash.geom.Rectangle();
			var object = source;
			if(matrix != null) rect.x = matrix.tx; else rect.x = 0;
			if(matrix != null) rect.y = matrix.ty; else rect.y = 0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this.___textureBuffer.width;
				rect.height = this.___textureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(blendMode == flash.display.BlendMode.ADD) ctx.globalCompositeOperation = "lighter";
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else {
				flash.Lib.__setImageSmoothing(ctx,smoothing);
				ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			}
			ctx.drawImage(this.___textureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this.___textureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new flash.geom.Rectangle(0,0,this.___textureBuffer.width,this.___textureBuffer.height),inColorTransform);
		if(blendMode == flash.display.BlendMode.ADD) ctx.globalCompositeOperation = "source-over";
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this.___textureBuffer.width && rect.height == this.___textureBuffer.height) {
			if(this.__transparent) {
				if(color >>> 24 == 0 || color == this.__initColor) return this.__clearCanvas();
			} else if((color | -16777216) == (this.__initColor | -16777216)) return this.__clearCanvas();
		}
		return this.__fillRect(rect,color);
	}
	,floodFill: function(x,y,color) {
		var wasLocked = this.__locked;
		if(!this.__locked) this.lock();
		var queue = new Array();
		queue.push(new flash.geom.Point(x,y));
		var old = this.getPixel32(x,y);
		var iterations = 0;
		var search = new Array();
		var _g1 = 0;
		var _g;
		_g = (this.___textureBuffer != null?this.___textureBuffer.width:0) + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var column = new Array();
			var _g3 = 0;
			var _g2;
			_g2 = (this.___textureBuffer != null?this.___textureBuffer.height:0) + 1;
			while(_g3 < _g2) {
				var i1 = _g3++;
				column.push(false);
			}
			search.push(column);
		}
		var currPoint;
		var newPoint;
		while(queue.length > 0) {
			currPoint = queue.shift();
			++iterations;
			var x1 = currPoint.x | 0;
			var y1 = currPoint.y | 0;
			if(x1 < 0 || x1 >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) continue;
			if(y1 < 0 || y1 >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) continue;
			search[x1][y1] = true;
			if(this.getPixel32(x1,y1) == old) {
				this.setPixel32(x1,y1,color);
				if(!search[x1 + 1][y1]) queue.push(new flash.geom.Point(x1 + 1,y1));
				if(!search[x1][y1 + 1]) queue.push(new flash.geom.Point(x1,y1 + 1));
				if(x1 > 0 && !search[x1 - 1][y1]) queue.push(new flash.geom.Point(x1 - 1,y1));
				if(y1 > 0 && !search[x1][y1 - 1]) queue.push(new flash.geom.Point(x1,y1 - 1));
			}
		}
		if(!wasLocked) this.unlock();
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX;
			if(me.___textureBuffer != null) minX = me.___textureBuffer.width; else minX = 0;
			var maxX = 0;
			var minY;
			if(me.___textureBuffer != null) minY = me.___textureBuffer.height; else minY = 0;
			var maxY = 0;
			var i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x1 = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
					var y1 = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
					if(x1 < minX) minX = x1;
					if(x1 > maxX) maxX = x1;
					if(y1 < minY) minY = y1;
					if(y1 > maxY) maxY = y1;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
		};
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.__imageData.data);
	}
	,getInt32: function(offset,data) {
		return (this.__transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset;
			offset = 4 * y * (this.___textureBuffer != null?this.___textureBuffer.width:0) + x * 4;
			return this.__imageData.data[offset] << 16 | this.__imageData.data[offset + 1] << 8 | this.__imageData.data[offset + 2];
		}
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this.___textureBuffer.width + x * 4,this.__imageData.data);
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new flash.utils.ByteArray();
		if(byteArray.allocated < len) byteArray.___resizeBuffer(byteArray.allocated = Std["int"](Math.max(len,byteArray.allocated * 2))); else if(byteArray.allocated > len) byteArray.___resizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g1 = 0;
			while(_g1 < len) {
				var i1 = _g1++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				byteArray.writeByte(this.__imageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,handle: function() {
		return this.___textureBuffer;
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			var _g = secondObject.__proto__.__class__.__name__[2];
			switch(_g) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me.___textureBuffer != null?me.___textureBuffer.width:0) || y >= (me.___textureBuffer != null?me.___textureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me.___textureBuffer != null?me.___textureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData1 = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doHitTest(imageData1);
		} else return doHitTest(this.__imageData);
	}
	,lock: function() {
		this.__locked = true;
		var ctx = this.___textureBuffer.getContext("2d");
		this.__imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		this.__imageDataChanged = false;
		this.__copyPixelList = [];
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new flash.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this.___textureBuffer.getContext("2d");
		var imageData = null;
		if(this.__locked) imageData = this.__imageData; else imageData = ctx.createImageData(this.___textureBuffer.width,this.___textureBuffer.height);
		var _g1 = 0;
		var _g = this.___textureBuffer.width * this.___textureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				if((channelOptions & 1) == 0) imageData.data[i * 4] = 0; else imageData.data[i * 4] = low + generator.nextValue() % (high - low + 1);
				if((channelOptions & 2) == 0) imageData.data[i * 4 + 1] = 0; else imageData.data[i * 4 + 1] = low + generator.nextValue() % (high - low + 1);
				if((channelOptions & 4) == 0) imageData.data[i * 4 + 2] = 0; else imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1);
			}
			if((channelOptions & 8) == 0) imageData.data[i * 4 + 3] = 255; else imageData.data[i * 4 + 3] = low + generator.nextValue() % (high - low + 1);
		}
		if(this.__locked) this.__imageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,scroll: function(x,y) {
		throw "bitmapData.scroll is currently not supported for HTML5";
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.readByte();
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g1 = 0;
			while(_g1 < len) {
				var i1 = _g1++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				this.__imageData.data[pos] = byteArray.readByte();
				pos++;
			}
			this.__imageDataChanged = true;
		}
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		console.log("BitmapData.threshold not implemented");
		return 0;
	}
	,unlock: function(changeRect) {
		this.__locked = false;
		var ctx = this.___textureBuffer.getContext("2d");
		if(this.__imageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.__imageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.__imageData,0,0);
		}
		var _g = 0;
		var _g1 = this.__copyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.__transparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,__buildLease: function() {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,__clearCanvas: function() {
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
	}
	,__decrNumRefBitmaps: function() {
		this.__assignedBitmaps--;
	}
	,__fillRect: function(rect,color) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a;
		if(this.__transparent) a = color >>> 24; else a = 255;
		if(!this.__locked) {
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0;
			var _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0;
				var _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = r;
					this.__imageData.data[s + offsetX + 1] = g;
					this.__imageData.data[s + offsetX + 2] = b;
					this.__imageData.data[s + offsetX + 3] = a;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,__getLease: function() {
		return this.__lease;
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		var img = window.document.createElement("img");
		var canvas = this.___textureBuffer;
		var drawImage = function(_) {
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img,0,0);
			_g.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
			if(onload != null) onload(_g);
		};
		img.addEventListener("load",drawImage,false);
		img.src = "data:" + type + ";base64," + base64;
	}
	,__loadFromBytes: function(bytes,inRawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else if(flash.display.BitmapData.__isGIF(bytes)) type = "image/gif"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(inRawAlpha != null) this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,function(_) {
			var ctx = _g.___textureBuffer.getContext("2d");
			var pixels = ctx.getImageData(0,0,_g.___textureBuffer.width,_g.___textureBuffer.height);
			var _g2 = 0;
			var _g1 = inRawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				pixels.data[i * 4 + 3] = inRawAlpha.readUnsignedByte();
			}
			ctx.putImageData(pixels,0,0);
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__getNumRefBitmaps: function() {
		return this.__assignedBitmaps;
	}
	,__incrNumRefBitmaps: function() {
		this.__assignedBitmaps++;
	}
	,__loadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = window.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this.___textureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.__onLoad),data),false);
			image.addEventListener("error",function(e1) {
				if(!image.complete) _g.__onLoad(data,e1);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,__onLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		data.bitmapData.__buildLease();
		if(data.inLoader != null) {
			var e1 = new flash.events.Event(flash.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,get_height: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.height; else return 0;
	}
	,get_transparent: function() {
		return this.__transparent;
	}
	,get_width: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.width; else return 0;
	}
	,__class__: flash.display.BitmapData
	,__properties__: {get_width:"get_width",get_transparent:"get_transparent",get_height:"get_height"}
};
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,__class__: flash.display.ImageDataLease
};
flash.display._BitmapData = {};
flash.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["flash.display._BitmapData.MinstdGenerator"] = flash.display._BitmapData.MinstdGenerator;
flash.display._BitmapData.MinstdGenerator.__name__ = ["flash","display","_BitmapData","MinstdGenerator"];
flash.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,__class__: flash.display._BitmapData.MinstdGenerator
};
flash.display.BitmapDataChannel = function() { };
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display.CapsStyle = $hxClasses["flash.display.CapsStyle"] = { __ename__ : true, __constructs__ : ["NONE","ROUND","SQUARE"] };
flash.display.CapsStyle.NONE = ["NONE",0];
flash.display.CapsStyle.NONE.toString = $estr;
flash.display.CapsStyle.NONE.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.ROUND = ["ROUND",1];
flash.display.CapsStyle.ROUND.toString = $estr;
flash.display.CapsStyle.ROUND.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.SQUARE = ["SQUARE",2];
flash.display.CapsStyle.SQUARE.toString = $estr;
flash.display.CapsStyle.SQUARE.__enum__ = flash.display.CapsStyle;
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : true, __constructs__ : ["RADIAL","LINEAR"] };
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["flash.display.Drawable"] = flash.display.Drawable;
flash.display.Drawable.__name__ = ["flash","display","Drawable"];
flash.display.Drawable.prototype = {
	__class__: flash.display.Drawable
};
flash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["flash.display.GfxPoint"] = flash.display.GfxPoint;
flash.display.GfxPoint.__name__ = ["flash","display","GfxPoint"];
flash.display.GfxPoint.prototype = {
	__class__: flash.display.GfxPoint
};
flash.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["flash.display.Grad"] = flash.display.Grad;
flash.display.Grad.__name__ = ["flash","display","Grad"];
flash.display.Grad.prototype = {
	__class__: flash.display.Grad
};
flash.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["flash.display.GradPoint"] = flash.display.GradPoint;
flash.display.GradPoint.__name__ = ["flash","display","GradPoint"];
flash.display.GradPoint.prototype = {
	__class__: flash.display.GradPoint
};
flash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["flash.display.LineJob"] = flash.display.LineJob;
flash.display.LineJob.__name__ = ["flash","display","LineJob"];
flash.display.LineJob.prototype = {
	__class__: flash.display.LineJob
};
flash.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["flash.display.TileJob"] = flash.display.TileJob;
flash.display.TileJob.__name__ = ["flash","display","TileJob"];
flash.display.TileJob.prototype = {
	__class__: flash.display.TileJob
};
flash.display.IGraphicsFill = function() { };
$hxClasses["flash.display.IGraphicsFill"] = flash.display.IGraphicsFill;
flash.display.IGraphicsFill.__name__ = ["flash","display","IGraphicsFill"];
flash.display.IGraphicsFill.prototype = {
	__class__: flash.display.IGraphicsFill
};
flash.display.IGraphicsData = function() { };
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__class__: flash.display.IGraphicsData
};
flash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.__graphicsDataType = flash.display.GraphicsDataType.GRADIENT;
	this.__graphicsFillType = flash.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["flash.display.GraphicsGradientFill"] = flash.display.GraphicsGradientFill;
flash.display.GraphicsGradientFill.__name__ = ["flash","display","GraphicsGradientFill"];
flash.display.GraphicsGradientFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsGradientFill.prototype = {
	__class__: flash.display.GraphicsGradientFill
};
flash.display.IGraphicsPath = function() { };
$hxClasses["flash.display.IGraphicsPath"] = flash.display.IGraphicsPath;
flash.display.IGraphicsPath.__name__ = ["flash","display","IGraphicsPath"];
flash.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.__graphicsDataType = flash.display.GraphicsDataType.PATH;
};
$hxClasses["flash.display.GraphicsPath"] = flash.display.GraphicsPath;
flash.display.GraphicsPath.__name__ = ["flash","display","GraphicsPath"];
flash.display.GraphicsPath.__interfaces__ = [flash.display.IGraphicsPath,flash.display.IGraphicsData];
flash.display.GraphicsPath.prototype = {
	curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,3);
			flash._Vector.Vector_Impl_.push(this.data,anchorX);
			flash._Vector.Vector_Impl_.push(this.data,anchorY);
			flash._Vector.Vector_Impl_.push(this.data,controlX);
			flash._Vector.Vector_Impl_.push(this.data,controlY);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,2);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,1);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,__class__: flash.display.GraphicsPath
};
flash.display.GraphicsPathCommand = function() { };
$hxClasses["flash.display.GraphicsPathCommand"] = flash.display.GraphicsPathCommand;
flash.display.GraphicsPathCommand.__name__ = ["flash","display","GraphicsPathCommand"];
flash.display.GraphicsPathWinding = $hxClasses["flash.display.GraphicsPathWinding"] = { __ename__ : true, __constructs__ : ["EVEN_ODD","NON_ZERO"] };
flash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
flash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
flash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
flash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
flash.display.GraphicsPathWinding.NON_ZERO.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.__graphicsDataType = flash.display.GraphicsDataType.SOLID;
	this.__graphicsFillType = flash.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["flash.display.GraphicsSolidFill"] = flash.display.GraphicsSolidFill;
flash.display.GraphicsSolidFill.__name__ = ["flash","display","GraphicsSolidFill"];
flash.display.GraphicsSolidFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsSolidFill.prototype = {
	__class__: flash.display.GraphicsSolidFill
};
flash.display.IGraphicsStroke = function() { };
$hxClasses["flash.display.IGraphicsStroke"] = flash.display.IGraphicsStroke;
flash.display.IGraphicsStroke.__name__ = ["flash","display","IGraphicsStroke"];
flash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	if(caps != null) this.caps = caps; else this.caps = null;
	this.fill = fill;
	if(joints != null) this.joints = joints; else this.joints = null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	if(scaleMode != null) this.scaleMode = scaleMode; else this.scaleMode = null;
	this.thickness = thickness;
	this.__graphicsDataType = flash.display.GraphicsDataType.STROKE;
};
$hxClasses["flash.display.GraphicsStroke"] = flash.display.GraphicsStroke;
flash.display.GraphicsStroke.__name__ = ["flash","display","GraphicsStroke"];
flash.display.GraphicsStroke.__interfaces__ = [flash.display.IGraphicsStroke,flash.display.IGraphicsData];
flash.display.GraphicsStroke.prototype = {
	__class__: flash.display.GraphicsStroke
};
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : true, __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] };
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsFillType = $hxClasses["flash.display.GraphicsFillType"] = { __ename__ : true, __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] };
flash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
flash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
flash.display.GraphicsFillType.SOLID_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
flash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
flash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : true, __constructs__ : ["RGB","LINEAR_RGB"] };
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.JointStyle = $hxClasses["flash.display.JointStyle"] = { __ename__ : true, __constructs__ : ["MITER","ROUND","BEVEL"] };
flash.display.JointStyle.MITER = ["MITER",0];
flash.display.JointStyle.MITER.toString = $estr;
flash.display.JointStyle.MITER.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.ROUND = ["ROUND",1];
flash.display.JointStyle.ROUND.toString = $estr;
flash.display.JointStyle.ROUND.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.BEVEL = ["BEVEL",2];
flash.display.JointStyle.BEVEL.toString = $estr;
flash.display.JointStyle.BEVEL.__enum__ = flash.display.JointStyle;
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") switch(extension) {
		case "swf":
			this.contentLoaderInfo.contentType = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			transparent = false;
			this.contentLoaderInfo.contentType = "image/jpeg";
			break;
		case "png":
			this.contentLoaderInfo.contentType = "image/png";
			break;
		case "gif":
			this.contentLoaderInfo.contentType = "image/gif";
			break;
		default:
			this.contentLoaderInfo.contentType = "application/x-www-form-urlencoded";
		} else this.contentLoaderInfo.contentType = request.contentType;
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.contentLoaderInfo.addEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.handleError),false,2147483647);
			this.mImage.__loadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,unload: function() {
		if(this.__children.length > 0) {
			while(this.__children.length > 0) this.removeChildAt(0);
			this.content = null;
			this.contentLoaderInfo.url = null;
			this.contentLoaderInfo.contentType = null;
			this.contentLoaderInfo.content = null;
			this.contentLoaderInfo.bytesLoaded = this.contentLoaderInfo.bytesTotal = 0;
			this.contentLoaderInfo.width = 0;
			this.contentLoaderInfo.height = 0;
			var event = new flash.events.Event(flash.events.Event.UNLOAD);
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event(flash.events.Event.COMPLETE);
				evt.currentTarget = _g;
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt1 = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt1.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt1);
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this.___id + "]";
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.Sprite.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new flash.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,handleLoad: function(e) {
		e.currentTarget = this;
		if(this.content != null) {
			this.content.__invalidateBounds();
			this.content.__render(null,null);
			this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
		}
	}
	,handleError: function(e) {
		e.currentTarget = this;
		if(this.content != null) {
			this.content.__invalidateBounds();
			this.content.__render(null,null);
			this.contentLoaderInfo.removeEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.handleError));
		}
	}
	,__class__: flash.display.Loader
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] };
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
	this.__graphics = new flash.display.Graphics();
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	toString: function() {
		return "[Shape name=" + this.name + " id=" + this.___id + "]";
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,__getObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,get_graphics: function() {
		return this.__graphics;
	}
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : true, __constructs__ : ["REPEAT","REFLECT","PAD"] };
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.display._Stage = {};
flash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["flash.display._Stage.TouchInfo"] = flash.display._Stage.TouchInfo;
flash.display._Stage.TouchInfo.__name__ = ["flash","display","_Stage","TouchInfo"];
flash.display._Stage.TouchInfo.prototype = {
	__class__: flash.display._Stage.TouchInfo
};
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] };
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageQuality = function() { };
$hxClasses["flash.display.StageQuality"] = flash.display.StageQuality;
flash.display.StageQuality.__name__ = ["flash","display","StageQuality"];
flash.errors = {};
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: flash.errors.Error
};
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.errors.RangeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage,0);
};
$hxClasses["flash.errors.RangeError"] = flash.errors.RangeError;
flash.errors.RangeError.__name__ = ["flash","errors","RangeError"];
flash.errors.RangeError.__super__ = flash.errors.Error;
flash.errors.RangeError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.RangeError
});
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	__class__: flash.events.ErrorEvent
});
flash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = flash.events.Listener.sIDs++;
};
$hxClasses["flash.events.Listener"] = flash.events.Listener;
flash.events.Listener.__name__ = ["flash","events","Listener"];
flash.events.Listener.prototype = {
	dispatchEvent: function(event) {
		this.mListner(event);
	}
	,Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,__class__: flash.events.Listener
};
flash.events.EventPhase = function() { };
$hxClasses["flash.events.EventPhase"] = flash.events.EventPhase;
flash.events.EventPhase.__name__ = ["flash","events","EventPhase"];
flash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	if(inShiftKey == null) this.shiftKey = false; else this.shiftKey = inShiftKey;
	this.relatedObject = inObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	if(inAltKey == null) this.altKey = false; else this.altKey = inAltKey;
	if(inCharCode == null) this.charCode = 0; else this.charCode = inCharCode;
	if(inCtrlKey == null) this.ctrlKey = false; else this.ctrlKey = inCtrlKey;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
	this.keyCode = inKeyCode;
	if(inKeyLocation == null) this.keyLocation = 0; else this.keyLocation = inKeyLocation;
	if(inShiftKey == null) this.shiftKey = false; else this.shiftKey = inShiftKey;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.KeyboardEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
};
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	__createSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.TouchEvent
});
flash.filters = {};
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	clone: function() {
		return new flash.filters.BitmapFilter(this._mType);
	}
	,__preFilter: function(surface) {
	}
	,__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,__class__: flash.filters.BitmapFilter
};
flash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	flash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this.___cached = false;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this.___cached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "rgba(" + (this.color >> 16 & 255) + "," + (this.color >> 8 & 255) + "," + (this.color & 255) + "," + this.alpha + ")";
			this.___cached = true;
		}
	}
	,__class__: flash.filters.DropShadowFilter
});
flash.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
};
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
};
flash.geom.Point.prototype = {
	add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
};
flash.media = {};
flash.media.Sound = function(stream,context) {
	flash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.__soundChannels = new haxe.ds.IntMap();
	this.__soundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.__canPlayMime = function(mime) {
	var audio = window.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime,null));
};
flash.media.Sound.__canPlayType = function(extension) {
	var mime = flash.media.Sound.__mimeForExtension(extension);
	if(mime == null) return false;
	return flash.media.Sound.__canPlayMime(mime);
};
flash.media.Sound.__mimeForExtension = function(extension) {
	var mime = null;
	switch(extension) {
	case "mp3":
		mime = "audio/mpeg";
		break;
	case "ogg":
		mime = "audio/ogg; codecs=\"vorbis\"";
		break;
	case "wav":
		mime = "audio/wav; codecs=\"1\"";
		break;
	case "aac":
		mime = "audio/mp4; codecs=\"mp4a.40.2\"";
		break;
	default:
		mime = null;
	}
	return mime;
};
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	close: function() {
	}
	,load: function(stream,context) {
		this.__load(stream,context);
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(this.__streamUrl == null) return null;
		var self = this;
		var curIdx = this.__soundIdx;
		var removeRef = function() {
			self.__soundChannels.remove(curIdx);
		};
		var channel = flash.media.SoundChannel.__create(this.__streamUrl,startTime,loops,sndTransform,removeRef);
		this.__soundChannels.set(curIdx,channel);
		this.__soundIdx++;
		var audio = channel.__audio;
		return channel;
	}
	,__addEventListeners: function() {
		this.__soundCache.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.__onSoundLoaded));
		this.__soundCache.addEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.__onSoundLoadError));
	}
	,__load: function(stream,context,mime) {
		if(mime == null) mime = "";
		this.__streamUrl = stream.url;
		try {
			this.__soundCache = new flash.net.URLLoader();
			this.__addEventListeners();
			this.__soundCache.load(stream);
		} catch( e ) {
		}
	}
	,__removeEventListeners: function() {
		this.__soundCache.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.__onSoundLoaded),false);
		this.__soundCache.removeEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.__onSoundLoadError),false);
	}
	,__onSoundLoadError: function(evt) {
		this.__removeEventListeners();
		var evt1 = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		this.dispatchEvent(evt1);
	}
	,__onSoundLoaded: function(evt) {
		this.__removeEventListeners();
		var evt1 = new flash.events.Event(flash.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function() {
	flash.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.__audioCurrentLoop = 1;
	this.__audioTotalLoops = 1;
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__create = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new flash.media.SoundChannel();
	channel.__audio = window.document.createElement("audio");
	channel.__removeRef = removeRef;
	channel.__audio.addEventListener("ended",$bind(channel,channel.__onSoundChannelFinished),false);
	channel.__audio.addEventListener("seeked",$bind(channel,channel.__onSoundSeeked),false);
	channel.__audio.addEventListener("stalled",$bind(channel,channel.__onStalled),false);
	channel.__audio.addEventListener("progress",$bind(channel,channel.__onProgress),false);
	if(loops > 0) {
		channel.__audioTotalLoops = loops;
		channel.__audio.loop = true;
	}
	channel.__startTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.__audio.currentTime = channel.__startTime;
			channel.__audio.play();
			channel.__audio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.__audio.addEventListener("canplaythrough",onLoad,false);
	} else channel.__audio.autoplay = true;
	channel.__audio.src = src;
	return channel;
};
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	stop: function() {
		if(this.__audio != null) {
			this.__audio.pause();
			this.__audio = null;
			if(this.__removeRef != null) this.__removeRef();
		}
	}
	,__onProgress: function(evt) {
	}
	,__onSoundChannelFinished: function(evt) {
		if(this.__audioCurrentLoop >= this.__audioTotalLoops) {
			this.__audio.removeEventListener("ended",$bind(this,this.__onSoundChannelFinished),false);
			this.__audio.removeEventListener("seeked",$bind(this,this.__onSoundSeeked),false);
			this.__audio.removeEventListener("stalled",$bind(this,this.__onStalled),false);
			this.__audio.removeEventListener("progress",$bind(this,this.__onProgress),false);
			this.__audio = null;
			var evt1 = new flash.events.Event(flash.events.Event.SOUND_COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.__removeRef != null) this.__removeRef();
		} else {
			this.__audio.currentTime = this.__startTime;
			this.__audio.play();
		}
	}
	,__onSoundSeeked: function(evt) {
		if(this.__audioCurrentLoop >= this.__audioTotalLoops) {
			this.__audio.loop = false;
			this.stop();
		} else this.__audioCurrentLoop++;
	}
	,__onStalled: function(evt) {
		if(this.__audio != null) this.__audio.load();
	}
	,set_soundTransform: function(v) {
		this.__audio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	__class__: flash.media.SoundLoaderContext
};
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	__class__: flash.media.SoundTransform
};
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] };
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash.net.URLRequest
};
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	__class__: flash.net.URLRequestHeader
};
flash.net.URLRequestMethod = function() { };
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g1 = 0;
		while(_g1 < fields1.length) {
			var f1 = fields1[_g1];
			++_g1;
			var eq = f1.indexOf("=");
			if(eq > 0) Reflect.setField(this,StringTools.urlDecode(HxOverrides.substr(f1,0,eq)),StringTools.urlDecode(HxOverrides.substr(f1,eq + 1,null))); else if(eq != 0) Reflect.setField(this,decodeURIComponent(f1.split("+").join(" ")),"");
		}
	}
	,toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(encodeURIComponent(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,__class__: flash.net.URLVariables
};
flash.system.Capabilities = function() { };
$hxClasses["flash.system.Capabilities"] = flash.system.Capabilities;
flash.system.Capabilities.__name__ = ["flash","system","Capabilities"];
flash.system.Capabilities.__properties__ = {get_language:"get_language",get_screenResolutionY:"get_screenResolutionY",get_screenResolutionX:"get_screenResolutionX",get_screenDPI:"get_screenDPI",get_pixelAspectRatio:"get_pixelAspectRatio"}
flash.system.Capabilities.get_pixelAspectRatio = function() {
	return 1;
};
flash.system.Capabilities.get_screenDPI = function() {
	if(flash.system.Capabilities.screenDPI > 0) return flash.system.Capabilities.screenDPI;
	var body = window.document.getElementsByTagName("body")[0];
	var testDiv = window.document.createElement("div");
	testDiv.style.width = testDiv.style.height = "1in";
	testDiv.style.padding = testDiv.style.margin = "0px";
	testDiv.style.position = "absolute";
	testDiv.style.top = "-100%";
	body.appendChild(testDiv);
	flash.system.Capabilities.screenDPI = testDiv.offsetWidth;
	body.removeChild(testDiv);
	return flash.system.Capabilities.screenDPI;
};
flash.system.Capabilities.get_screenResolutionX = function() {
	return window.screen.width;
};
flash.system.Capabilities.get_screenResolutionY = function() {
	return window.screen.height;
};
flash.system.Capabilities.get_language = function() {
	return navigator.language;
};
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	__class__: flash.system.LoaderContext
};
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
};
flash.system.System = function() { };
$hxClasses["flash.system.System"] = flash.system.System;
flash.system.System.__name__ = ["flash","system","System"];
flash.system.System.__properties__ = {get_vmVersion:"get_vmVersion",get_totalMemory:"get_totalMemory"}
flash.system.System.exit = function(code) {
	throw "System.exit is currently not supported for HTML5";
};
flash.system.System.gc = function() {
};
flash.system.System.pause = function() {
	throw "System.pause is currently not supported for HTML5";
};
flash.system.System.resume = function() {
	throw "System.resume is currently not supported for HTML5";
};
flash.system.System.setClipboard = function(string) {
	throw "System.setClipboard is currently not supported for HTML5";
};
flash.system.System.get_totalMemory = function() {
	return 0;
};
flash.system.System.get_vmVersion = function() {
	return "openfl - tip";
};
flash.text = {};
flash.text.AntiAliasType = $hxClasses["flash.text.AntiAliasType"] = { __ename__ : true, __constructs__ : ["ADVANCED","NORMAL"] };
flash.text.AntiAliasType.ADVANCED = ["ADVANCED",0];
flash.text.AntiAliasType.ADVANCED.toString = $estr;
flash.text.AntiAliasType.ADVANCED.__enum__ = flash.text.AntiAliasType;
flash.text.AntiAliasType.NORMAL = ["NORMAL",1];
flash.text.AntiAliasType.NORMAL.toString = $estr;
flash.text.AntiAliasType.NORMAL.__enum__ = flash.text.AntiAliasType;
flash.text.Font = function() {
	this.__metrics = [];
	this.__fontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(flash.text.Font.__fontData == null) {
		flash.text.Font.__fontData = [];
		flash.text.Font.__fontData["Bitstream_Vera_Sans"] = haxe.Unserializer.run(flash.text.Font.DEFAULT_FONT_DATA);
	}
	if(className == "flash.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return flash.text.Font.__registeredFonts.slice();
};
flash.text.Font.__ofResource = function(resourceName,fontName) {
	if(fontName == null) fontName = "";
	var data = haxe.Unserializer.run(haxe.Resource.getString(resourceName));
	if(data == null) {
	} else {
		if(fontName == "") {
			flash.text.Font.__fontData[resourceName] = data.hash;
			fontName = data.fontName;
		}
		flash.text.Font.__fontData[data.fontName] = data.hash;
	}
	return fontName;
};
flash.text.Font.registerFont = function(font) {
	var instance;
	instance = js.Boot.__cast(Type.createInstance(font,[]) , flash.text.Font);
	if(instance != null) {
		if(Object.prototype.hasOwnProperty.call(font,"resourceName")) instance.set_fontName(flash.text.Font.__ofResource(Reflect.field(font,"resourceName")));
		flash.text.Font.__registeredFonts.push(instance);
	}
};
flash.text.Font.prototype = {
	hasGlyph: function(str) {
		var key = HxOverrides.cca(str,0);
		return this.__glyphData.exists(key);
	}
	,__getAdvance: function(inGlyph,height) {
		var m = this.__metrics[inGlyph];
		if(m == null) {
			var glyph = this.__glyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.__metrics[inGlyph] = m = glyph._width * this.__fontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,__render: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.__glyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale,inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			}
		}
	}
	,__setScale: function(scale) {
		this.__fontScale = scale / 1024;
	}
	,set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(flash.text.Font.__fontData[this.fontName] == null) try {
			flash.text.Font.__ofResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(flash.text.Font.__fontData[this.fontName] != null) try {
			this.__glyphData = flash.text.Font.__fontData[this.fontName];
		} catch( e1 ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,__class__: flash.text.Font
	,__properties__: {set_fontName:"set_fontName"}
};
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : true, __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] };
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : true, __constructs__ : ["EMBEDDED","DEVICE"] };
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : true, __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.__graphics = new flash.display.Graphics();
	this.mFace = flash.text.TextField.mDefaultFont;
	this.mAlign = flash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.scrollH = 0;
	this.scrollV = 1;
	this.mType = flash.text.TextFieldType.DYNAMIC;
	this.set_autoSize(flash.text.TextFieldAutoSize.NONE);
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.__inputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new flash.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0;
		var _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0;
		var _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0;
		var _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) if(l == 0) return 0; else return l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new flash.text.TextFormat(this.mFace,this.mTextHeight,this.mTextColour);
	}
	,Rebuild: function() {
		if(this.mHTMLMode) {
			this.mMaxWidth = this.__graphics.__surface.clientWidth;
			this.__graphics.__surface.style.setProperty("white-space","nowrap","");
			return;
		}
		this.mLineInfo = [];
		this.__graphics.clear();
		if(this.background) {
			this.__graphics.beginFill(this.backgroundColor);
			this.__graphics.drawRect(0,0,this.get_width(),this.get_height());
			this.__graphics.endFill();
		}
		this.__graphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap;
		wrap = this.get_wordWrap() && !this.__inputEnabled?this.mLimitRenderX = this.mWidth | 0:this.mLimitRenderX = 999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0;
		var _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0;
			var _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0;
				var _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.__getAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		var _g6 = this.autoSize;
		switch(_g6[1]) {
		case 1:
			break;
		case 3:
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case 0:
			var x01 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x01);
			break;
		default:
			if(this.get_wordWrap()) this.set_height(h);
		}
		if(this.border) {
			this.__graphics.endFill();
			this.__graphics.lineStyle(1,this.borderColor,1,true);
			this.__graphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = flash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != flash.text.TextFieldAutoSize.NONE) {
				this.scrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.scrollH;
				if(insert_x < 0) this.scrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.scrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.scrollH < 0) this.scrollH = 0;
			}
		}
		if(this.autoSize == flash.text.TextFieldAutoSize.NONE && w <= this.mLimitRenderX) {
			if(inAlign == flash.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == flash.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.scrollH;
		var x0 = x;
		var _g1 = 0;
		while(_g1 < inRow.length) {
			var chr1 = inRow[_g1];
			++_g1;
			var adv = chr1.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr1.font;
				if(chr1.sel) {
					this.__graphics.lineStyle();
					this.__graphics.beginFill(2105440);
					this.__graphics.drawRect(x,inY,adv,full_height);
					this.__graphics.endFill();
					if(cache_normal_font == chr1.font) font = cache_sel_font; else {
						font = flash.text.FontInstance.CreateSolid(chr1.font.GetFace(),chr1.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr1.font;
					}
				}
				font.RenderChar(this.__graphics,chr1.chr,x,inY + (h - chr1.fh) | 0);
			}
			x += adv;
		}
		x += this.scrollH;
		return full_height;
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = -1;
		if(beginIndex == null) beginIndex = -1;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this.___id + "]";
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.__graphics.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(this.__graphics.__surface);
			this.___renderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.gridFitType != flash.text.GridFitType.PIXEL);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m1 = this.getSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m1);
				this.___renderFlags &= -33;
			}
			flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,get_autoSize: function() {
		return this.autoSize;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = window.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			domElement.style.color = "#" + StringTools.hex(this.mTextColour,6);
			domElement.style.fontFamily = this.mFace;
			domElement.style.fontSize = this.mTextHeight + "px";
			domElement.style.textAlign = Std.string(this.mAlign);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new flash.display.Graphics(wrapper);
			var __surface = this.__graphics.__surface;
			if(flash.Lib.__isOnStage(__surface)) {
				flash.Lib.__appendSurface(wrapper);
				flash.Lib.__copyStyle(__surface,wrapper);
				flash.Lib.__swapSurface(__surface,wrapper);
				flash.Lib.__removeSurface(__surface);
			}
			this.__graphics = destination;
			this.__graphics.__extent.width = wrapper.width;
			this.__graphics.__extent.height = wrapper.height;
		} else this.__graphics.__surface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mHTMLText;
	}
	,getLineOffset: function(lineIndex) {
		return 0;
	}
	,getLineText: function(lineIndex) {
		return "";
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_multiline: function() {
		return this.multiline;
	}
	,set_multiline: function(value) {
		return this.multiline = value;
	}
	,get_numLines: function() {
		return 0;
	}
	,get_scrollH: function() {
		return this.scrollH;
	}
	,set_scrollH: function(value) {
		return this.scrollH = value;
	}
	,get_scrollV: function() {
		return this.scrollV;
	}
	,set_scrollV: function(value) {
		return this.scrollV = value;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_text: function(inText) {
		if(inText == null) this.mText = "null"; else this.mText = "" + inText;
		this.mHTMLMode = false;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mText;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_type: function() {
		return this.mType;
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.__inputEnabled = this.mType == flash.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.__inputEnabled) flash.Lib.__setContentEditable(this.__graphics.__surface,true); else flash.Lib.__setContentEditable(this.__graphics.__surface,false);
		} else if(this.__inputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			flash.Lib.__setContentEditable(this.__graphics.__surface,true);
		}
		this.tabEnabled = this.get_type() == flash.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.get_wordWrap();
	}
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap",set_type:"set_type",get_type:"get_type",get_textWidth:"get_textWidth",get_textHeight:"get_textHeight",set_textColor:"set_textColor",get_textColor:"get_textColor",set_text:"set_text",get_text:"get_text",get_numLines:"get_numLines",get_maxScrollV:"get_maxScrollV",get_maxScrollH:"get_maxScrollH",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",get_caretPos:"get_caretPos",get_bottomScrollV:"get_bottomScrollV",set_borderColor:"set_borderColor",set_border:"set_border",set_backgroundColor:"set_backgroundColor",set_background:"set_background",set_autoSize:"set_autoSize"})
});
flash.text.FontInstanceMode = $hxClasses["flash.text.FontInstanceMode"] = { __ename__ : true, __constructs__ : ["fimSolid"] };
flash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
flash.text.FontInstanceMode.fimSolid.toString = $estr;
flash.text.FontInstanceMode.fimSolid.__enum__ = flash.text.FontInstanceMode;
flash.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["flash.text.FontInstance"] = flash.text.FontInstance;
flash.text.FontInstance.__name__ = ["flash","text","FontInstance"];
flash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = flash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new flash.text.Font();
	font.__setScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new flash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	flash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
};
flash.text.FontInstance.prototype = {
	GetFace: function() {
		return this.mFont.fontName;
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = flash.text.FontInstanceMode.fimSolid;
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.__clearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.__render(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,__getAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.__getAdvance(inChar,this.mHeight);
	}
	,get_height: function() {
		return this.mHeight;
	}
	,__class__: flash.text.FontInstance
	,__properties__: {get_height:"get_height"}
};
flash.text.TextFieldAutoSize = $hxClasses["flash.text.TextFieldAutoSize"] = { __ename__ : true, __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
flash.text.TextFieldAutoSize.CENTER = ["CENTER",0];
flash.text.TextFieldAutoSize.CENTER.toString = $estr;
flash.text.TextFieldAutoSize.CENTER.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.LEFT = ["LEFT",1];
flash.text.TextFieldAutoSize.LEFT.toString = $estr;
flash.text.TextFieldAutoSize.LEFT.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.NONE = ["NONE",2];
flash.text.TextFieldAutoSize.NONE.toString = $estr;
flash.text.TextFieldAutoSize.NONE.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.RIGHT = ["RIGHT",3];
flash.text.TextFieldAutoSize.RIGHT.toString = $estr;
flash.text.TextFieldAutoSize.RIGHT.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldType = function() { };
$hxClasses["flash.text.TextFieldType"] = flash.text.TextFieldType;
flash.text.TextFieldType.__name__ = ["flash","text","TextFieldType"];
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__class__: flash.text.TextFormat
};
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {};
flash.ui.Keyboard = function() { };
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.isAccessible = function() {
	return false;
};
flash.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
};
flash.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
};
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
};
flash.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
flash.utils.ByteArray.prototype = {
	clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Std["int"](Math.max(0,this.allocated * 2))); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(length == 0) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Std["int"](Math.max(lengthToEnsure,bytes.allocated * 2))); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Std["int"](Math.max(len,this.allocated * 2))); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		if(length == 0) length = bytes.length;
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,get_endian: function() {
		if(this.littleEndian) return "littleEndian"; else return "bigEndian";
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: flash.utils.ByteArray
	,__properties__: {set_length:"set_length",set_endian:"set_endian",get_endian:"get_endian",get_bytesAvailable:"get_bytesAvailable"}
};
flash.utils.Endian = function() { };
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
var game = {};
game.AudioMan = function() { };
$hxClasses["game.AudioMan"] = game.AudioMan;
game.AudioMan.__name__ = ["game","AudioMan"];
game.AudioMan.get = function(src,canRepeat) {
	if(canRepeat == null) canRepeat = true;
	if(!canRepeat && src == game.AudioMan.m_prevAudioID) {
		console.log("audio: MUTE or repeat suppress");
		if(game.AudioMan.m_emptySound == null) game.AudioMan.m_emptySound = new Audio();
		return game.AudioMan.m_emptySound;
	}
	game.AudioMan.m_prevAudioID = src;
	var sfx = game.AudioMan.getFromPool();
	if(sfx != null) {
		sfx.src = src;
		sfx.load();
		return sfx;
	} else {
		console.log("audio: pool full");
		if(game.AudioMan.m_emptySound == null) game.AudioMan.m_emptySound = new Audio();
		return game.AudioMan.m_emptySound;
	}
	console.log("Only JS is supported.");
	return null;
};
game.AudioMan.getFromPool = function() {
	var _g1 = 0;
	var _g = game.AudioMan.m_sounds.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(game.AudioMan.m_sounds[i] == null) {
			console.log("audio: create " + i);
			game.AudioMan.m_sounds[i] = new Audio();
		}
		var sfx = game.AudioMan.m_sounds[i];
		if(sfx.error != null || sfx.paused || sfx.ended) {
			console.log("audio: chose " + i + " - paused " + (sfx.paused == null?"null":"" + sfx.paused) + " ended " + (sfx.ended == null?"null":"" + sfx.ended));
			return sfx;
		}
	}
	return null;
};
game.AudioMan.clear = function() {
	game.AudioMan.m_prevAudioID = "NONE";
};
game.FontMap = function() { };
$hxClasses["game.FontMap"] = game.FontMap;
game.FontMap.__name__ = ["game","FontMap"];
game.GlobalVars = function() { };
$hxClasses["game.GlobalVars"] = game.GlobalVars;
game.GlobalVars.__name__ = ["game","GlobalVars"];
game.GlobalVars.init = function() {
	game.GlobalVars.profile = new game.save.BartlettGameSave();
	game.GlobalVars.wordGuide = new game.popups.guide.WordGuide();
	game.GlobalVars.alertRound = new game.popups.alerts.RoundPopup();
	game.GlobalVars.alertWin = new game.popups.alerts.WinPopup();
};
game.LayerName = $hxClasses["game.LayerName"] = { __ename__ : true, __constructs__ : ["PRIMARY","GUIDE","HUD","GAME","DEBUG"] };
game.LayerName.PRIMARY = ["PRIMARY",0];
game.LayerName.PRIMARY.toString = $estr;
game.LayerName.PRIMARY.__enum__ = game.LayerName;
game.LayerName.GUIDE = ["GUIDE",1];
game.LayerName.GUIDE.toString = $estr;
game.LayerName.GUIDE.__enum__ = game.LayerName;
game.LayerName.HUD = ["HUD",2];
game.LayerName.HUD.toString = $estr;
game.LayerName.HUD.__enum__ = game.LayerName;
game.LayerName.GAME = ["GAME",3];
game.LayerName.GAME.toString = $estr;
game.LayerName.GAME.__enum__ = game.LayerName;
game.LayerName.DEBUG = ["DEBUG",4];
game.LayerName.DEBUG.toString = $estr;
game.LayerName.DEBUG.__enum__ = game.LayerName;
game.Manifest = function() { };
$hxClasses["game.Manifest"] = game.Manifest;
game.Manifest.__name__ = ["game","Manifest"];
game.db = {};
game.db.DBWord = function(id,w) {
	this.recordId = Std.parseInt(id);
	this.word = w;
	this.setDistractors("","","","");
	this.meaning = "";
	this.partOfSpeech = "";
	this.example = "";
	this.clozeA = "";
	this.clozeB = "";
	this.activeY = "";
	this.activeN = "";
	this.set_wonCloze(false);
	this.set_wonActiveY(false);
	this.set_wonActiveN(false);
	this.hasSeenCloze = false;
	this.hasSeenActY = false;
	this.hasSeenActN = false;
	this.answerPick = false;
};
$hxClasses["game.db.DBWord"] = game.db.DBWord;
game.db.DBWord.__name__ = ["game","db","DBWord"];
game.db.DBWord.prototype = {
	set_wonCloze: function(set) {
		if(!this.wonCloze && set) game.GlobalVars.profile.updateWordProgress(this.recordId,1);
		return this.wonCloze = set;
	}
	,set_wonActiveY: function(set) {
		if(!this.wonActiveY && set) game.GlobalVars.profile.updateWordProgress(this.recordId,2);
		return this.wonActiveY = set;
	}
	,set_wonActiveN: function(set) {
		if(!this.wonActiveN && set) game.GlobalVars.profile.updateWordProgress(this.recordId,4);
		return this.wonActiveN = set;
	}
	,get_isMastered: function() {
		return this.wonCloze && this.wonActiveY && this.wonActiveN;
	}
	,setDistractors: function(a,b,c,d) {
		this.distractors = [a,b,c,d];
	}
	,__class__: game.db.DBWord
	,__properties__: {get_isMastered:"get_isMastered",set_wonActiveN:"set_wonActiveN",set_wonActiveY:"set_wonActiveY",set_wonCloze:"set_wonCloze"}
};
game.db.Progression = function() { };
$hxClasses["game.db.Progression"] = game.db.Progression;
game.db.Progression.__name__ = ["game","db","Progression"];
game.db.Progression.getUnitProgress = function(unit) {
	var prog = game.GlobalVars.profile.progress[unit][0];
	if(prog == null) prog = { cloze : 0, active : 0};
	return prog.cloze;
};
game.db.Progression.getListProgress = function(list) {
	var prog = game.GlobalVars.profile.progress[game.GlobalVars.activeUnit][list + 1];
	if(prog == null) prog = { cloze : 0, active : 0};
	return prog;
};
game.db.Progression.updateActiveUnit = function() {
	var unit = game.GlobalVars.profile.progress[game.GlobalVars.activeUnit];
	var unitProg = 0;
	var _g1 = 1;
	var _g = unit.length;
	while(_g1 < _g) {
		var i = _g1++;
		var listProg = unit[i];
		if(listProg == null) listProg = { cloze : 0, active : 0};
		unitProg += (listProg.cloze + listProg.active) / 2 | 0;
	}
	unitProg = unitProg / 5 | 0;
	game.GlobalVars.profile.updateProgress(game.GlobalVars.activeUnit,0,unitProg,0);
};
game.db.Progression.updateActiveList = function() {
	game.db.Progression.curList = game.db.VocabMan.getListCompletion();
	game.GlobalVars.profile.updateProgress(game.GlobalVars.activeUnit,game.GlobalVars.activeList + 1,game.db.Progression.curList.cloze,game.db.Progression.curList.active);
	game.db.Progression.updateActiveUnit();
};
game.db.VocabDbHeaders = $hxClasses["game.db.VocabDbHeaders"] = { __ename__ : true, __constructs__ : ["RecordID","Grade","Unit","List","Rating","Word","Meaning","PartOfSpeech","Example","ClozeA","ClozeB","ActiveY","ActiveN","DistractorA","DistractorB","DistractorC","DistractorD"] };
game.db.VocabDbHeaders.RecordID = ["RecordID",0];
game.db.VocabDbHeaders.RecordID.toString = $estr;
game.db.VocabDbHeaders.RecordID.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.Grade = ["Grade",1];
game.db.VocabDbHeaders.Grade.toString = $estr;
game.db.VocabDbHeaders.Grade.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.Unit = ["Unit",2];
game.db.VocabDbHeaders.Unit.toString = $estr;
game.db.VocabDbHeaders.Unit.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.List = ["List",3];
game.db.VocabDbHeaders.List.toString = $estr;
game.db.VocabDbHeaders.List.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.Rating = ["Rating",4];
game.db.VocabDbHeaders.Rating.toString = $estr;
game.db.VocabDbHeaders.Rating.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.Word = ["Word",5];
game.db.VocabDbHeaders.Word.toString = $estr;
game.db.VocabDbHeaders.Word.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.Meaning = ["Meaning",6];
game.db.VocabDbHeaders.Meaning.toString = $estr;
game.db.VocabDbHeaders.Meaning.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.PartOfSpeech = ["PartOfSpeech",7];
game.db.VocabDbHeaders.PartOfSpeech.toString = $estr;
game.db.VocabDbHeaders.PartOfSpeech.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.Example = ["Example",8];
game.db.VocabDbHeaders.Example.toString = $estr;
game.db.VocabDbHeaders.Example.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.ClozeA = ["ClozeA",9];
game.db.VocabDbHeaders.ClozeA.toString = $estr;
game.db.VocabDbHeaders.ClozeA.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.ClozeB = ["ClozeB",10];
game.db.VocabDbHeaders.ClozeB.toString = $estr;
game.db.VocabDbHeaders.ClozeB.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.ActiveY = ["ActiveY",11];
game.db.VocabDbHeaders.ActiveY.toString = $estr;
game.db.VocabDbHeaders.ActiveY.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.ActiveN = ["ActiveN",12];
game.db.VocabDbHeaders.ActiveN.toString = $estr;
game.db.VocabDbHeaders.ActiveN.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.DistractorA = ["DistractorA",13];
game.db.VocabDbHeaders.DistractorA.toString = $estr;
game.db.VocabDbHeaders.DistractorA.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.DistractorB = ["DistractorB",14];
game.db.VocabDbHeaders.DistractorB.toString = $estr;
game.db.VocabDbHeaders.DistractorB.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.DistractorC = ["DistractorC",15];
game.db.VocabDbHeaders.DistractorC.toString = $estr;
game.db.VocabDbHeaders.DistractorC.__enum__ = game.db.VocabDbHeaders;
game.db.VocabDbHeaders.DistractorD = ["DistractorD",16];
game.db.VocabDbHeaders.DistractorD.toString = $estr;
game.db.VocabDbHeaders.DistractorD.__enum__ = game.db.VocabDbHeaders;
game.db.VocabMan = function() { };
$hxClasses["game.db.VocabMan"] = game.db.VocabMan;
game.db.VocabMan.__name__ = ["game","db","VocabMan"];
game.db.VocabMan.__properties__ = {get_listWordsTotal:"get_listWordsTotal"}
game.db.VocabMan.get_listWordsTotal = function() {
	return game.db.VocabMan.m_curWordList.length;
};
game.db.VocabMan.createNewSheet = function(grade) {
	var sheet = new com.firstplayable.hxlib.haxe.text.CSVSheet();
	switch(grade) {
	case -1:
		sheet.data = LiteDb.units;
		break;
	case 0:
		sheet.data = LiteDb.csvG0;
		break;
	case 1:
		sheet.data = LiteDb.csvG1;
		break;
	case 2:
		sheet.data = LiteDb.csvG2;
		break;
	case 3:
		sheet.data = LiteDb.csvG3;
		break;
	case 4:
		sheet.data = LiteDb.csvG4;
		break;
	case 5:
		sheet.data = LiteDb.csvG5;
		break;
	case 6:
		sheet.data = LiteDb.csvG6;
		break;
	case 7:
		sheet.data = LiteDb.csvG7;
		break;
	case 8:
		sheet.data = LiteDb.csvG8;
		break;
	case 9:
		sheet.data = LiteDb.csvG9;
		break;
	case 10:
		sheet.data = LiteDb.csvG10;
		break;
	case 11:
		sheet.data = LiteDb.csvG11;
		break;
	case 12:
		sheet.data = LiteDb.csvG12;
		break;
	default:
		sheet.data = LiteDb.csvG0;
	}
	sheet.decode();
	return sheet;
};
game.db.VocabMan.dbFarm = function() {
};
game.db.VocabMan.getUnitNames = function() {
	var record = game.db.VocabMan.m_sheetUnits.getRecord(game.GlobalVars.profile.highestLevel + 1);
	var last = record.length - 1;
	if(record[last] == "") record.splice(last,1);
	return record;
};
game.db.VocabMan.getListCompletion = function() {
	var wordList = game.db.VocabMan.m_curWordList;
	if(wordList == null) return { cloze : 0, active : 0, mastered : 0, complete : 0};
	var completedCloze = wordList.filter(function(word) {
		return word.wonCloze;
	}).length;
	var completedActiveY = wordList.filter(function(word1) {
		return word1.wonActiveY;
	}).length;
	var completedActiveN = wordList.filter(function(word2) {
		return word2.wonActiveN;
	}).length;
	var mastered = wordList.filter(function(word3) {
		return word3.get_isMastered();
	}).length;
	var denom = wordList.length;
	var clozePerc = completedCloze / denom * 100 | 0;
	var activePerc = (completedActiveY + completedActiveN) / (denom * 2) * 100 | 0;
	var masteredPerc = mastered / denom * 100 | 0;
	var completedPerc = (clozePerc + activePerc) / 2 | 0;
	return { cloze : clozePerc, active : activePerc, mastered : masteredPerc, complete : completedPerc};
};
game.db.VocabMan.populateCurrentList = function(initialList) {
	var dbList = [];
	var _g1 = 0;
	var _g = initialList.length;
	while(_g1 < _g) {
		var i = _g1++;
		var wordEntry = initialList[i];
		var word = new game.db.DBWord(wordEntry[game.db.VocabDbHeaders.RecordID[1]],wordEntry[game.db.VocabDbHeaders.Word[1]]);
		word.setDistractors(wordEntry[game.db.VocabDbHeaders.DistractorA[1]],wordEntry[game.db.VocabDbHeaders.DistractorB[1]],wordEntry[game.db.VocabDbHeaders.DistractorC[1]],wordEntry[game.db.VocabDbHeaders.DistractorD[1]]);
		word.meaning = wordEntry[game.db.VocabDbHeaders.Meaning[1]];
		word.partOfSpeech = wordEntry[game.db.VocabDbHeaders.PartOfSpeech[1]];
		word.example = wordEntry[game.db.VocabDbHeaders.Example[1]];
		word.clozeA = wordEntry[game.db.VocabDbHeaders.ClozeA[1]];
		word.clozeB = wordEntry[game.db.VocabDbHeaders.ClozeB[1]];
		word.activeY = wordEntry[game.db.VocabDbHeaders.ActiveY[1]];
		word.activeN = wordEntry[game.db.VocabDbHeaders.ActiveN[1]];
		var wp = game.GlobalVars.profile.getWordProgress(word.recordId);
		word.set_wonCloze(wp.hasStatus(1));
		word.set_wonActiveY(wp.hasStatus(2));
		word.set_wonActiveN(wp.hasStatus(4));
		dbList[i] = word;
	}
	return dbList;
};
game.db.VocabMan.createWordList = function(unit,list) {
	var level = game.GlobalVars.profile.getLevelStr();
	var sortA = game.db.VocabDbHeaders.Grade[0] + "=" + level;
	var sortB = game.db.VocabDbHeaders.Unit[0] + "=" + (unit + 1);
	var sortC = game.db.VocabDbHeaders.List[0] + "=" + (list + 1);
	if(game.db.VocabMan.m_curWordDb == null) game.db.VocabMan.m_curWordDb = game.db.VocabMan.createNewSheet(Std.parseInt(level));
	var listWords = game.db.VocabMan.m_curWordDb.search([sortA,sortB,sortC],true);
	return game.db.VocabMan.populateCurrentList(listWords);
};
game.db.VocabMan.newWordList = function() {
	game.db.VocabMan.m_curWordList = game.db.VocabMan.createWordList(game.GlobalVars.activeUnit,game.GlobalVars.activeList);
	var seenCount = 0;
	var _g = 0;
	var _g1 = game.db.VocabMan.m_curWordList;
	while(_g < _g1.length) {
		var word = _g1[_g];
		++_g;
		var completed = false;
		if(game.GlobalVars.isClozeActivity) {
			completed = word.wonCloze;
			word.hasSeenCloze = completed;
		} else {
			completed = word.wonActiveY && word.wonActiveN;
			word.hasSeenActY = word.wonActiveY;
			word.hasSeenActN = word.wonActiveN;
		}
		if(completed) ++seenCount;
	}
	if(seenCount == game.db.VocabMan.get_listWordsTotal()) {
		game.db.VocabMan.m_completedMode = true;
		var _g2 = 0;
		var _g11 = game.db.VocabMan.m_curWordList;
		while(_g2 < _g11.length) {
			var word1 = _g11[_g2];
			++_g2;
			word1.hasSeenCloze = false;
			word1.hasSeenActY = false;
			word1.hasSeenActN = false;
		}
	}
	com.firstplayable.hxlib.haxe.utils.LambdaX.shuffle(game.db.VocabMan.m_curWordList);
	game.db.VocabMan.m_wordsCount = 0;
	game.db.VocabMan.updateRemaining();
	game.GlobalVars.wordGuide.setList(game.db.VocabMan.m_curWordList.slice());
	game.db.Progression.updateActiveList();
	game.db.VocabMan.advanceWord();
};
game.db.VocabMan.advanceWord = function() {
	if(game.db.VocabMan.roundWordsRemaining == 0) {
		game.db.VocabMan.roundComplete();
		return;
	}
	game.db.VocabMan.curWord = game.db.VocabMan.getNextWord();
	game.db.VocabMan.updateRemaining();
};
game.db.VocabMan.roundComplete = function() {
	game.db.Progression.endOfPlay = true;
	if(!game.db.VocabMan.m_completedMode) {
		var numComplete;
		if(game.GlobalVars.isClozeActivity) numComplete = game.db.Progression.curList.cloze; else numComplete = game.db.Progression.curList.active;
		if(numComplete == 100) {
			com.firstplayable.hxlib.haxe.app.Application.app.dispatchEvent(new game.events.VocabEvent("vocabActivityComplete"));
			return;
		}
	}
	com.firstplayable.hxlib.haxe.app.Application.app.dispatchEvent(new game.events.VocabEvent("vocabPlayFinished"));
};
game.db.VocabMan.getNextWord = function() {
	var isWordAvailable = false;
	var _g = 0;
	var _g1 = game.db.VocabMan.m_curWordList;
	while(_g < _g1.length) {
		var word = _g1[_g];
		++_g;
		if(game.GlobalVars.isClozeActivity) {
			if(!word.hasSeenCloze) {
				word.hasSeenCloze = true;
				isWordAvailable = true;
			}
		} else if(!word.hasSeenActY && !word.hasSeenActN) {
			if(Std.random(2) == 0) {
				word.hasSeenActY = true;
				word.answerPick = true;
				isWordAvailable = true;
			} else {
				word.hasSeenActN = true;
				word.answerPick = false;
				isWordAvailable = true;
			}
			com.firstplayable.hxlib.haxe.utils.LambdaX.shuffle(game.db.VocabMan.m_curWordList);
		} else if(!word.hasSeenActY) {
			word.hasSeenActY = true;
			word.answerPick = true;
			isWordAvailable = true;
		} else if(!word.hasSeenActN) {
			word.hasSeenActN = true;
			word.answerPick = false;
			isWordAvailable = true;
		}
		if(isWordAvailable) {
			++game.db.VocabMan.m_wordsCount;
			return word;
		}
	}
	com.firstplayable.hxlib.haxe.Debug.log("unable to find a suitable word",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "VocabMan.hx", lineNumber : 483, className : "game.db.VocabMan", methodName : "getNextWord"});
	return game.db.VocabMan.m_curWordList[0];
};
game.db.VocabMan.updateRemaining = function() {
	var remaining = 0;
	if(game.GlobalVars.isClozeActivity) remaining = game.db.VocabMan.m_curWordList.filter(function(word) {
		return !word.hasSeenCloze;
	}).length; else remaining = game.db.VocabMan.m_curWordList.filter(function(word1) {
		return !word1.hasSeenActY;
	}).length + game.db.VocabMan.m_curWordList.filter(function(word2) {
		return !word2.hasSeenActN;
	}).length;
	game.db.VocabMan.roundWordsRemaining = remaining;
};
game.events = {};
game.events.GameStartEvent = function() { };
$hxClasses["game.events.GameStartEvent"] = game.events.GameStartEvent;
game.events.GameStartEvent.__name__ = ["game","events","GameStartEvent"];
game.events.LearningEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["game.events.LearningEvent"] = game.events.LearningEvent;
game.events.LearningEvent.__name__ = ["game","events","LearningEvent"];
game.events.LearningEvent.__super__ = flash.events.Event;
game.events.LearningEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: game.events.LearningEvent
});
game.events.VacuumEvent = function(type) {
	flash.events.Event.call(this,type,false,false);
};
$hxClasses["game.events.VacuumEvent"] = game.events.VacuumEvent;
game.events.VacuumEvent.__name__ = ["game","events","VacuumEvent"];
game.events.VacuumEvent.__super__ = flash.events.Event;
game.events.VacuumEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: game.events.VacuumEvent
});
game.events.VocabEvent = function(type) {
	flash.events.Event.call(this,type);
};
$hxClasses["game.events.VocabEvent"] = game.events.VocabEvent;
game.events.VocabEvent.__name__ = ["game","events","VocabEvent"];
game.events.VocabEvent.__super__ = flash.events.Event;
game.events.VocabEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: game.events.VocabEvent
});
game.popups = {};
game.popups.alerts = {};
game.popups.alerts.AlertPopup = function() {
	flash.display.Sprite.call(this);
	this.m_msg = new flash.text.TextField();
	this.m_msg.set_defaultTextFormat(game.FontMap.HUD_ALERT);
	this.setup();
};
$hxClasses["game.popups.alerts.AlertPopup"] = game.popups.alerts.AlertPopup;
game.popups.alerts.AlertPopup.__name__ = ["game","popups","alerts","AlertPopup"];
game.popups.alerts.AlertPopup.__super__ = flash.display.Sprite;
game.popups.alerts.AlertPopup.prototype = $extend(flash.display.Sprite.prototype,{
	setup: function() {
		var bg = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/alert/popup_bg.png"));
		bg.set_scaleX(1.0);
		bg.set_scaleY(1.0);
		bg.set_x(game.popups.alerts.AlertPopup.BG_POS.x);
		bg.set_y(game.popups.alerts.AlertPopup.BG_POS.y);
		this.m_popupCenter = bg.get_x() + bg.get_width() * 0.5;
		game.popups.alerts.AlertPopup.BUTTON_POS.x = this.m_popupCenter;
		this.m_msg.set_x(game.popups.alerts.AlertPopup.MESSAGE_POS.x);
		this.m_msg.set_y(game.popups.alerts.AlertPopup.MESSAGE_POS.y);
		this.addChild(bg);
		this.addChild(this.m_msg);
	}
	,show: function(message) {
		if(message == null) message = "";
		this.m_msg.set_text(message);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.HUD[0],this);
	}
	,hide: function() {
		this.get_graphics().clear();
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.HUD[0],this);
	}
	,onReturnPress: function(caller) {
		this.hide();
		com.firstplayable.hxlib.haxe.state.StateManager.setState(game.states.GameStates.LANDING);
	}
	,onReplayPress: function(caller) {
		this.hide();
		game.db.VocabMan.newWordList();
		com.firstplayable.hxlib.haxe.state.StateManager.setState(com.firstplayable.hxlib.haxe.state.StateManager.currentState.state);
	}
	,__class__: game.popups.alerts.AlertPopup
});
game.popups.alerts.RoundPopup = function() {
	game.popups.alerts.AlertPopup.call(this);
};
$hxClasses["game.popups.alerts.RoundPopup"] = game.popups.alerts.RoundPopup;
game.popups.alerts.RoundPopup.__name__ = ["game","popups","alerts","RoundPopup"];
game.popups.alerts.RoundPopup.__super__ = game.popups.alerts.AlertPopup;
game.popups.alerts.RoundPopup.prototype = $extend(game.popups.alerts.AlertPopup.prototype,{
	setup: function() {
		game.popups.alerts.AlertPopup.prototype.setup.call(this);
		this.m_returnBtn = new com.firstplayable.hxlib.haxe.display.GraphicButton(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/alert/quitBtn_up.png")),null,null,null,null,$bind(this,this.onReturnPress));
		Configs.applyScale(this.m_returnBtn);
		this.m_returnBtn.set_x(game.popups.alerts.AlertPopup.BUTTON_POS.x - 0.5 * this.m_returnBtn.get_width());
		this.m_returnBtn.set_y(game.popups.alerts.AlertPopup.BUTTON_POS.y);
		this.m_replayBtn = new com.firstplayable.hxlib.haxe.display.GraphicButton(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/alert/replayBtn_up.png")),null,null,null,null,$bind(this,this.onReplayPress));
		Configs.applyScale(this.m_replayBtn);
		this.m_replayBtn.set_x(game.popups.alerts.AlertPopup.BUTTON_POS.x - 0.5 * this.m_replayBtn.get_width());
		this.m_replayBtn.set_y(this.m_returnBtn.get_y() + this.m_returnBtn.get_height() + 50);
		this.addChild(this.m_returnBtn);
		this.addChild(this.m_replayBtn);
	}
	,show: function(msg) {
		if(msg == null) msg = "";
		game.popups.alerts.AlertPopup.prototype.show.call(this,"ROUND COMPLETE!");
		this.m_returnBtn.set_enabled(true);
		this.m_replayBtn.set_enabled(true);
	}
	,hide: function() {
		this.m_returnBtn.set_enabled(false);
		this.m_replayBtn.set_enabled(false);
		game.popups.alerts.AlertPopup.prototype.hide.call(this);
	}
	,__class__: game.popups.alerts.RoundPopup
});
game.popups.alerts.WinPopup = function() {
	game.popups.alerts.AlertPopup.call(this);
};
$hxClasses["game.popups.alerts.WinPopup"] = game.popups.alerts.WinPopup;
game.popups.alerts.WinPopup.__name__ = ["game","popups","alerts","WinPopup"];
game.popups.alerts.WinPopup.__super__ = game.popups.alerts.AlertPopup;
game.popups.alerts.WinPopup.prototype = $extend(game.popups.alerts.AlertPopup.prototype,{
	setup: function() {
		game.popups.alerts.AlertPopup.prototype.setup.call(this);
		this.m_continueBtn = new com.firstplayable.hxlib.haxe.display.GraphicButton(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/alert/continueBtn_up.png")),null,null,null,null,$bind(this,this.onReturnPress));
		Configs.applyScale(this.m_continueBtn);
		this.m_continueBtn.set_x(game.popups.alerts.AlertPopup.BUTTON_POS.x - 0.5 * this.m_continueBtn.get_width());
		this.m_continueBtn.set_y(game.popups.alerts.AlertPopup.BUTTON_POS.y + 0.5 * this.m_continueBtn.get_height());
		this.addChild(this.m_continueBtn);
	}
	,show: function(msg) {
		if(msg == null) msg = "";
		if(game.GlobalVars.isClozeActivity) this.m_message = "VACUUM VOCAB\n  LIST COMPLETE!"; else this.m_message = "BALLOON BLASTER\n  LIST COMPLETE!";
		game.popups.alerts.AlertPopup.prototype.show.call(this,this.m_message);
		this.get_graphics().clear();
		this.m_continueBtn.set_enabled(true);
	}
	,hide: function() {
		this.m_continueBtn.set_enabled(false);
		game.popups.alerts.AlertPopup.prototype.hide.call(this);
	}
	,__class__: game.popups.alerts.WinPopup
});
game.popups.guide = {};
game.popups.guide.WordGuide = function() {
	this.m_asset = new flash.display.Sprite();
	this.guideTab = new game.popups.guide.elements.WordGuideTab();
	var bgImg = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/wordguide_bg.png"));
	bgImg.set_scaleX(1.0);
	bgImg.set_scaleY(1.0);
	this.m_asset.addChild(bgImg);
	this.m_panelContainer = new flash.display.Sprite();
	this.m_wordPanels = new Array();
	var _g = 0;
	while(_g < 2) {
		var i = _g++;
		var _g1 = 0;
		while(_g1 < 10) {
			var j = _g1++;
			var newWordPanel = new game.popups.guide.WordPanel();
			newWordPanel.set_x((newWordPanel.get_width() + 40.) * i);
			newWordPanel.set_y((newWordPanel.get_height() + 4.) * j);
			this.m_wordPanels.push(newWordPanel);
			this.m_panelContainer.addChild(newWordPanel);
		}
	}
	this.m_asset.addChild(this.m_panelContainer);
	this.m_panelContainer.set_x(game.popups.guide.WordGuide.WORD_PANELS_POS.x);
	this.m_panelContainer.set_y(game.popups.guide.WordGuide.WORD_PANELS_POS.y);
	this.m_closeBttn = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/close_btn_up.png"));
	Configs.applyScale(this.m_closeBttn);
	this.m_asset.addChild(this.m_closeBttn);
	this.m_closeBttn.set_x(945.);
	this.m_closeBttn.set_y(20.);
	this.m_closeBttn.addEventListener(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)?"touchBegin":flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.hideGuide));
	this.m_wordString = new flash.text.TextField();
	this.m_wordString.set_x(80.);
	this.m_wordString.set_y(600.);
	this.m_wordString.set_defaultTextFormat(game.FontMap.GUIDE_WORD_POPUP_WORD);
	this.m_asset.addChild(this.m_wordString);
	this.m_partOfSpeech = new flash.text.TextField();
	this.m_partOfSpeech.set_x(80.);
	this.m_partOfSpeech.set_y(615.);
	this.m_partOfSpeech.set_defaultTextFormat(game.FontMap.GUIDE_WORD_POPUP_SPEECH);
	this.m_asset.addChild(this.m_partOfSpeech);
	this.m_meaning = new flash.text.TextField();
	this.m_meaning.set_x(80.);
	this.m_meaning.set_y(615.);
	this.m_meaning.set_defaultTextFormat(game.FontMap.GUIDE_WORD_POPUP_DEFINITION);
	this.m_asset.addChild(this.m_meaning);
	this.m_example = new flash.text.TextField();
	this.m_example.set_x(80.);
	this.m_example.set_y(655.);
	this.m_example.set_defaultTextFormat(game.FontMap.GUIDE_WORD_POPUP_DEFINITION);
	this.m_asset.addChild(this.m_example);
};
$hxClasses["game.popups.guide.WordGuide"] = game.popups.guide.WordGuide;
game.popups.guide.WordGuide.__name__ = ["game","popups","guide","WordGuide"];
game.popups.guide.WordGuide.prototype = {
	activate: function() {
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.HUD[0],this.guideTab);
		this.guideTab.addEventListener(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)?"touchBegin":flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.showGuide));
	}
	,deactivate: function() {
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.HUD[0],this.guideTab);
		this.guideTab.removeEventListener("touchBegin",$bind(this,this.showGuide));
		this.guideTab.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.showGuide));
	}
	,showGuide: function(e) {
		this.guideTab.removeEventListener("touchBegin",$bind(this,this.showGuide));
		this.guideTab.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.showGuide));
		var selectEvent;
		if(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)) selectEvent = "touchBegin"; else selectEvent = flash.events.MouseEvent.MOUSE_DOWN;
		var _g = 0;
		var _g1 = this.m_wordPanels;
		while(_g < _g1.length) {
			var wordPanel = _g1[_g];
			++_g;
			wordPanel.updateProgress();
			wordPanel.addEventListener(selectEvent,$bind(this,this.onPanelSelect));
		}
		this.m_selectedPanel = this.m_wordPanels[0];
		this.m_selectedPanel.select();
		this.m_wordString.set_text(this.m_selectedPanel.word.word);
		this.m_partOfSpeech.set_text("(" + this.m_selectedPanel.word.partOfSpeech + ")");
		this.m_partOfSpeech.set_x(this.m_wordString.get_x() + this.m_wordString.get_textWidth() + 10);
		this.m_meaning.set_text(this.m_selectedPanel.word.meaning);
		this.m_meaning.set_x(this.m_partOfSpeech.get_x() + this.m_partOfSpeech.get_textWidth() + 10);
		this.m_example.set_text("\"" + this.m_selectedPanel.word.example + "\"");
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GUIDE[0],this.m_asset);
		this.m_asset.addEventListener(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)?"touchBegin":flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onBackgroundClick));
		com.firstplayable.hxlib.haxe.display.GameDisplay.showLayer(game.LayerName.HUD[0],false);
		com.firstplayable.hxlib.haxe.display.GameDisplay.showLayer(game.LayerName.GAME[0],false);
		com.firstplayable.hxlib.haxe.display.GameDisplay.showLayer(game.LayerName.PRIMARY[0],false);
	}
	,hideGuide: function(e) {
		if(this.m_selectedPanel != null) this.m_selectedPanel.deselect();
		var selectEvent;
		if(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)) selectEvent = "touchBegin"; else selectEvent = flash.events.MouseEvent.MOUSE_DOWN;
		var _g = 0;
		var _g1 = this.m_wordPanels;
		while(_g < _g1.length) {
			var wordPanel = _g1[_g];
			++_g;
			wordPanel.removeEventListener(selectEvent,$bind(this,this.onPanelSelect));
		}
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.GUIDE[0],this.m_asset);
		this.guideTab.addEventListener(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)?"touchBegin":flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.showGuide));
		this.m_asset.removeEventListener(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)?"touchBegin":flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onBackgroundClick));
		com.firstplayable.hxlib.haxe.display.GameDisplay.showLayer(game.LayerName.HUD[0],true);
		com.firstplayable.hxlib.haxe.display.GameDisplay.showLayer(game.LayerName.GAME[0],true);
		com.firstplayable.hxlib.haxe.display.GameDisplay.showLayer(game.LayerName.PRIMARY[0],true);
		game.AudioMan.clear();
	}
	,setList: function(wordList) {
		this.m_currentWords = wordList;
		this.m_currentWords.sort(function(word1,word2) {
			if(word1.word > word2.word) return 1; else return -1;
		});
		if(wordList.length > 20) this.m_currentWords = wordList.slice(0,20);
		var _g1 = 0;
		var _g = this.m_currentWords.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.m_wordPanels[i].setWord(this.m_currentWords[i]);
		}
	}
	,setProgress: function(progressPercentage) {
		this.guideTab.updateLevels(progressPercentage);
		this.guideTab.updateProgressSlider();
	}
	,onPanelSelect: function(e) {
		var selectedPanel = e.currentTarget;
		if(selectedPanel.isSelected) return;
		this.m_selectedPanel.deselect();
		this.m_selectedPanel = selectedPanel;
		this.m_selectedPanel.select();
		this.m_wordString.set_text(this.m_selectedPanel.word.word);
		this.m_partOfSpeech.set_text("(" + this.m_selectedPanel.word.partOfSpeech + ")");
		this.m_partOfSpeech.set_x(this.m_wordString.get_x() + this.m_wordString.get_textWidth() + 10);
		this.m_meaning.set_text(this.m_selectedPanel.word.meaning);
		this.m_meaning.multiline = true;
		this.m_meaning.set_wordWrap(true);
		this.m_meaning.set_x(this.m_partOfSpeech.get_x() + this.m_partOfSpeech.get_textWidth() + 10);
		this.m_meaning.set_width(com.firstplayable.hxlib.haxe.app.Application.app.get_appSize().x - this.m_meaning.get_x());
		this.m_example.set_text("\"" + this.m_selectedPanel.word.example + "\"");
		this.m_example.multiline = true;
		this.m_example.set_wordWrap(true);
		this.m_example.set_width(com.firstplayable.hxlib.haxe.app.Application.app.get_appSize().x - this.m_example.get_x());
		game.AudioMan.clear();
	}
	,onBackgroundClick: function(e) {
		var _g = this;
		if(e.stageY < 575) return;
		var eventType;
		if(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)) eventType = "touchBegin"; else eventType = flash.events.MouseEvent.MOUSE_DOWN;
		this.m_asset.removeEventListener(eventType,$bind(this,this.onBackgroundClick));
		var letter = HxOverrides.substr(this.m_selectedPanel.word.word,0,1).toUpperCase();
		var wordPath = "sounds/words/" + letter + "/" + this.m_selectedPanel.word.recordId;
		game.AudioMan.get(wordPath + ".mp3",false).play();
		haxe.Timer.delay(function() {
			game.AudioMan.clear();
			_g.m_asset.addEventListener(eventType,$bind(_g,_g.onBackgroundClick));
		},3000);
	}
	,__class__: game.popups.guide.WordGuide
};
game.popups.guide.WordPanel = function() {
	this.isSelected = false;
	flash.display.Sprite.call(this);
	this.m_backgroundSelected = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/word_section_selected.png"));
	this.m_backgroundUnselected = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/word_section_up.png"));
	Configs.applyScale(this.m_backgroundSelected);
	Configs.applyScale(this.m_backgroundUnselected);
	this.m_clozeEnabled = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/smallStar_cloze.png"));
	this.m_clozeEnabled.set_x(game.popups.guide.WordPanel.CLOZE_POS.x);
	this.m_clozeEnabled.set_y(game.popups.guide.WordPanel.CLOZE_POS.y);
	Configs.applyScale(this.m_clozeEnabled);
	this.m_learningYesEnabled = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/smallStar_learn.png"));
	this.m_learningYesEnabled.set_x(game.popups.guide.WordPanel.LEARNING_Y_POS.x);
	this.m_learningYesEnabled.set_y(game.popups.guide.WordPanel.LEARNING_Y_POS.y);
	Configs.applyScale(this.m_learningYesEnabled);
	this.m_learningNoEnabled = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/smallStar_learn.png"));
	this.m_learningNoEnabled.set_x(game.popups.guide.WordPanel.LEARNING_N_POS.x);
	this.m_learningNoEnabled.set_y(game.popups.guide.WordPanel.LEARNING_N_POS.y);
	Configs.applyScale(this.m_learningNoEnabled);
	this.m_wordLabel = new flash.text.TextField();
	this.m_wordLabel.set_text("NO_WORD");
	this.m_wordLabel.set_defaultTextFormat(game.FontMap.GUIDE_WORD_PANEL);
	this.m_wordLabel.set_x(game.popups.guide.WordPanel.TEXT_POS.x);
	this.m_wordLabel.set_y(game.popups.guide.WordPanel.TEXT_POS.y);
	this.addChild(this.m_backgroundUnselected);
	this.addChild(this.m_wordLabel);
};
$hxClasses["game.popups.guide.WordPanel"] = game.popups.guide.WordPanel;
game.popups.guide.WordPanel.__name__ = ["game","popups","guide","WordPanel"];
game.popups.guide.WordPanel.__super__ = flash.display.Sprite;
game.popups.guide.WordPanel.prototype = $extend(flash.display.Sprite.prototype,{
	setWord: function(aWord) {
		this.m_wordLabel.set_text(aWord.word);
		this.m_wordLabel.set_autoSize(flash.text.TextFieldAutoSize.LEFT);
		this.word = aWord;
		this.setCloze(aWord.wonCloze);
		this.setLearningYes(aWord.wonActiveY);
		this.setLearningNo(aWord.wonActiveN);
	}
	,updateProgress: function() {
		this.setCloze(this.word.wonCloze);
		this.setLearningYes(this.word.wonActiveY);
		this.setLearningNo(this.word.wonActiveN);
	}
	,setCloze: function(status) {
		if(status) this.addChild(this.m_clozeEnabled); else if(this.m_clozeEnabled.parent != null) this.removeChild(this.m_clozeEnabled);
	}
	,setLearningYes: function(status) {
		if(status) this.addChild(this.m_learningYesEnabled); else if(this.m_learningYesEnabled.parent != null) this.removeChild(this.m_learningYesEnabled);
	}
	,setLearningNo: function(status) {
		if(status) this.addChild(this.m_learningNoEnabled); else if(this.m_learningNoEnabled.parent != null) this.removeChild(this.m_learningNoEnabled);
	}
	,select: function() {
		if(!this.isSelected) {
			this.removeChild(this.m_backgroundUnselected);
			this.addChildAt(this.m_backgroundSelected,0);
			this.m_wordLabel.set_defaultTextFormat(game.FontMap.GUIDE_WORD_PANEL_SELECTED);
			this.isSelected = true;
		}
	}
	,deselect: function() {
		if(this.isSelected) {
			this.removeChild(this.m_backgroundSelected);
			this.addChildAt(this.m_backgroundUnselected,0);
			this.m_wordLabel.set_defaultTextFormat(game.FontMap.GUIDE_WORD_PANEL);
			this.isSelected = false;
		}
	}
	,__class__: game.popups.guide.WordPanel
});
game.popups.guide.elements = {};
game.popups.guide.elements.WordGuideTab = function() {
	flash.display.Sprite.call(this);
	this.m_progBackground = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/progress_bg.png"));
	Configs.applyScale(this.m_progBackground);
	this.m_progBackground.set_x(game.popups.guide.elements.WordGuideTab.PROGRESS_BAR_HUD_POS.x);
	this.m_progBackground.set_y(game.popups.guide.elements.WordGuideTab.PROGRESS_BAR_HUD_POS.y - this.m_progBackground.get_height());
	this.m_pulloutTab = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/wordguide_tab.png"));
	Configs.applyScale(this.m_pulloutTab);
	this.m_pulloutTab.set_x(this.m_progBackground.get_x() + this.m_progBackground.get_width());
	this.m_pulloutTab.set_y(this.m_progBackground.get_y() + this.m_progBackground.get_height() - this.m_pulloutTab.get_height());
	this.m_listProgress = new com.firstplayable.hxlib.haxe.display.progress.ProgressBar(com.firstplayable.hxlib.haxe.display.progress.ProgressBarType.Linear,{ width : game.popups.guide.elements.WordGuideTab.BAR_AREA.width, height : game.popups.guide.elements.WordGuideTab.BAR_AREA.height, startFillColor : 16560401, endFillColor : 16701313});
	this.m_listProgress.set_x(game.popups.guide.elements.WordGuideTab.BAR_AREA.x);
	this.m_listProgress.set_y(game.popups.guide.elements.WordGuideTab.BAR_AREA.y);
	this.m_listProgress.set_rotation(-90);
	this.m_progSlider = new flash.display.Sprite();
	Configs.applyScale(this.m_progSlider);
	this.updateProgressSlider();
	this.m_percTxt = new flash.text.TextField();
	this.m_percTxt.set_defaultTextFormat(game.FontMap.HUD_PERCENT);
	this.m_progSlider.addChild(this.m_percTxt);
	this.addChild(this.m_progBackground);
	this.addChild(this.m_pulloutTab);
	this.addChild(this.m_listProgress);
	this.addChild(this.m_progSlider);
	this.addChild(this.m_percTxt);
};
$hxClasses["game.popups.guide.elements.WordGuideTab"] = game.popups.guide.elements.WordGuideTab;
game.popups.guide.elements.WordGuideTab.__name__ = ["game","popups","guide","elements","WordGuideTab"];
game.popups.guide.elements.WordGuideTab.__super__ = flash.display.Sprite;
game.popups.guide.elements.WordGuideTab.prototype = $extend(flash.display.Sprite.prototype,{
	setTabVisibility: function(visible) {
		this.m_pulloutTab.set_visible(visible);
		if(visible) {
			this.updateLevels(game.GlobalVars.isClozeActivity?game.db.Progression.curList.cloze:game.db.Progression.curList.active);
			this.set_x(0);
			this.set_y(0);
		} else {
			this.updateLevels(game.db.Progression.curList.complete);
			this.set_x(game.popups.guide.elements.WordGuideTab.PROGRESS_BAR_GUIDE_OFFSET.x);
			this.set_y(game.popups.guide.elements.WordGuideTab.PROGRESS_BAR_GUIDE_OFFSET.y);
		}
	}
	,updateProgressSlider: function() {
		if(this.m_progSlider.__children.length > 0) this.m_progSlider.removeChildAt(0);
		this.m_progSlider.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/progressStar.png")));
	}
	,updateLevels: function(progressPercentage) {
		this.m_listProgress.set_progress(progressPercentage);
		this.m_progSlider.set_x(game.popups.guide.elements.WordGuideTab.BAR_AREA.x + (game.popups.guide.elements.WordGuideTab.BAR_AREA.height - this.m_progSlider.get_width()) * 0.5);
		this.m_progSlider.set_y(this.m_listProgress.get_y() + this.m_listProgress.get_height() - this.m_listProgress.get_fillLength() - this.m_progSlider.get_height() * 0.75);
		this.m_percTxt.set_text(this.m_listProgress.progress + "%");
		this.m_percTxt.set_x(this.m_progSlider.get_x() + 0.5 * (this.m_progSlider.get_width() - this.m_percTxt.get_textWidth()));
		this.m_percTxt.set_y(this.m_progSlider.get_y() + 0.5 * (this.m_progSlider.get_height() - this.m_percTxt.get_textHeight()));
	}
	,__class__: game.popups.guide.elements.WordGuideTab
});
game.save = {};
game.save.BartlettGameSave = function() {
	this.highestLevel = 0;
	com.firstplayable.hxlib.haxe.io.GameSave.call(this);
	this.profileName = "blobbusters";
	this.productName = "bartlett";
	this.clearProgress();
};
$hxClasses["game.save.BartlettGameSave"] = game.save.BartlettGameSave;
game.save.BartlettGameSave.__name__ = ["game","save","BartlettGameSave"];
game.save.BartlettGameSave.__super__ = com.firstplayable.hxlib.haxe.io.GameSave;
game.save.BartlettGameSave.prototype = $extend(com.firstplayable.hxlib.haxe.io.GameSave.prototype,{
	getLevelStr: function() {
		var level = this.highestLevel;
		return "" + level;
	}
	,updateWordProgress: function(wordId,wordStatus) {
		var wp = this.getWordProgress(wordId);
		wp.addStatus(wordStatus);
	}
	,getWordProgress: function(wordId) {
		var wI = this.getIndexById(wordId);
		var found = this.wordList[wI];
		var wp = new game.save.WordProgress(wordId);
		var prevStatus;
		if(found == null) prevStatus = wp.status; else prevStatus = found.status;
		wp.addStatus(prevStatus);
		this.wordList[wI] = wp;
		return wp;
	}
	,getIndexById: function(id) {
		var len = this.wordList.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(this.wordList[i].id == id) return i;
		}
		return len;
	}
	,updateProgress: function(unit,list,clozePerc,activePerc) {
		this.progress[unit][list] = { cloze : clozePerc, active : activePerc};
	}
	,clearProgress: function() {
		this.wordList = [];
		this.progress = [];
		var maxUnits = 6;
		var _g = 0;
		while(_g < maxUnits) {
			var i = _g++;
			this.progress[i] = [];
		}
	}
	,__class__: game.save.BartlettGameSave
});
game.save.BartlettSaveMan = function() { };
$hxClasses["game.save.BartlettSaveMan"] = game.save.BartlettSaveMan;
game.save.BartlettSaveMan.__name__ = ["game","save","BartlettSaveMan"];
game.save.BartlettSaveMan.onFetchLiteCtx = function(o) {
	if(o == null) {
		com.firstplayable.hxlib.haxe.Debug.log("Fetch received null context object.",null,{ fileName : "BartlettSaveMan.hx", lineNumber : 39, className : "game.save.BartlettSaveMan", methodName : "onFetchLiteCtx"});
		return;
	}
	com.firstplayable.hxlib.haxe.Debug.log("Fetch received context:\n" + Std.string(o),null,{ fileName : "BartlettSaveMan.hx", lineNumber : 43, className : "game.save.BartlettSaveMan", methodName : "onFetchLiteCtx"});
	game.save.BartlettSaveMan.m_ctx = { };
	if(Object.prototype.hasOwnProperty.call(o,"unit") && Object.prototype.hasOwnProperty.call(o.unit,"number")) game.save.BartlettSaveMan.m_ctx.unit = o.unit.number; else {
		com.firstplayable.hxlib.haxe.Debug.log("No unit present - defaulting...",null,{ fileName : "BartlettSaveMan.hx", lineNumber : 52, className : "game.save.BartlettSaveMan", methodName : "onFetchLiteCtx"});
		game.save.BartlettSaveMan.m_ctx.unit = 1;
	}
	if(Object.prototype.hasOwnProperty.call(o,"course") && Object.prototype.hasOwnProperty.call(o.course,"grade")) game.save.BartlettSaveMan.m_ctx.grade = o.course.grade; else {
		com.firstplayable.hxlib.haxe.Debug.log("No grade present - defaulting...",null,{ fileName : "BartlettSaveMan.hx", lineNumber : 62, className : "game.save.BartlettSaveMan", methodName : "onFetchLiteCtx"});
		game.save.BartlettSaveMan.m_ctx.grade = 3;
	}
};
game.save.BartlettSaveMan.onLiteSave = function() {
	if(game.GlobalVars.NO_TEST_HARNESS) return;
	com.firstplayable.hxlib.haxe.Debug.log("SAVING...",null,{ fileName : "BartlettSaveMan.hx", lineNumber : 71, className : "game.save.BartlettSaveMan", methodName : "onLiteSave"});
	Broker.doSave(JSON.stringify(game.GlobalVars.profile));
};
game.save.BartlettSaveMan.onLiteFinish = function() {
	if(game.GlobalVars.NO_TEST_HARNESS) return;
	com.firstplayable.hxlib.haxe.Debug.log("FINISHING...",null,{ fileName : "BartlettSaveMan.hx", lineNumber : 79, className : "game.save.BartlettSaveMan", methodName : "onLiteFinish"});
	Broker.doFinish(true,false,100);
};
game.save.BartlettSaveMan.testHarnessNotHere = function() {
	js.Lib.alert("\nThere was an issue gathering your user profile. We recommend restarting the interactive to try again. If you wish to continue, you will use an empty profile using grade three. This new profile will not be saved.");
	game.GlobalVars.NO_TEST_HARNESS = true;
	game.GlobalVars.profile.highestLevel = 3;
	com.firstplayable.hxlib.haxe.app.Application.app.get_stage().dispatchEvent(new flash.events.Event(game.events.GameStartEvent.GAME_START));
};
game.save.BartlettSaveMan.checkForNativeBridge = function() {
	var med = Broker.mediator;
	if(game.save.BartlettSaveMan.m_bridgeComTries > 20) game.save.BartlettSaveMan.testHarnessNotHere(); else if(med != null && Object.prototype.hasOwnProperty.call(med,"_events") && Object.prototype.hasOwnProperty.call(med._events,"#fetch")) {
		Broker.addSave(game.save.BartlettSaveMan.onLiteSave);
		Broker.addFinish(game.save.BartlettSaveMan.onLiteFinish);
		Broker.getContext(game.save.BartlettSaveMan.onFetchLiteCtx);
		Broker.getSave(game.save.BartlettSaveMan.onFetchSave);
	} else {
		haxe.Timer.delay(game.save.BartlettSaveMan.checkForNativeBridge,100);
		++game.save.BartlettSaveMan.m_bridgeComTries;
	}
};
game.save.BartlettSaveMan.onFetchSave = function(oStr) {
	var saveObj;
	if(oStr != null && oStr.charAt(0) == "{") {
		com.firstplayable.hxlib.haxe.Debug.log("Fetch received save game.",null,{ fileName : "BartlettSaveMan.hx", lineNumber : 125, className : "game.save.BartlettSaveMan", methodName : "onFetchSave"});
		saveObj = JSON.parse(oStr);
	} else {
		com.firstplayable.hxlib.haxe.Debug.log("Fetch received null save object.",null,{ fileName : "BartlettSaveMan.hx", lineNumber : 130, className : "game.save.BartlettSaveMan", methodName : "onFetchSave"});
		saveObj = null;
	}
	game.save.BartlettSaveMan.updateGameSave(saveObj);
};
game.save.BartlettSaveMan.updateGameSave = function(profile) {
	if(profile != null) {
		com.firstplayable.hxlib.haxe.utils.PropUtils.copyProperties(profile,game.GlobalVars.profile,false);
		com.firstplayable.hxlib.haxe.Debug.log("Successfully updated profile; name= " + game.GlobalVars.profile.profileName,null,{ fileName : "BartlettSaveMan.hx", lineNumber : 142, className : "game.save.BartlettSaveMan", methodName : "updateGameSave"});
	}
	if(game.save.BartlettSaveMan.m_ctx != null) {
		var grade = Std["int"](game.save.BartlettSaveMan.m_ctx.grade);
		var unit = Std["int"](game.save.BartlettSaveMan.m_ctx.unit) - 1;
		if(grade > 12 || grade < 0) grade = 12;
		var validUnit;
		if(grade == 5) validUnit = 5; else validUnit = 4;
		if(unit > validUnit || unit < 0) unit = validUnit;
		game.GlobalVars.profile.highestLevel = grade;
		game.GlobalVars.activeUnit = unit;
		game.save.BartlettSaveMan.m_ctx = null;
	}
	var gradeLevel = game.GlobalVars.profile.highestLevel;
	if(gradeLevel < 3 || gradeLevel > 8) {
		game.GlobalVars.profile.highestLevel = 3;
		js.Lib.alert("\nWe're sorry, but this interactive does not currently support your grade level (" + gradeLevel + ")! Please check in with your classroom administrator. If you wish to continue, you will be set to grade three.");
	}
	com.firstplayable.hxlib.haxe.app.Application.app.get_stage().dispatchEvent(new flash.events.Event(game.events.GameStartEvent.GAME_START));
};
game.save.BartlettSaveMan.post = function() {
	if(game.GlobalVars.profile == null) com.firstplayable.hxlib.haxe.Debug.log("Tried to save null profile! Ignoring...",null,{ fileName : "BartlettSaveMan.hx", lineNumber : 191, className : "game.save.BartlettSaveMan", methodName : "post"});
	var _this = new Date();
	game.GlobalVars.profile.timestamp = HxOverrides.dateStr(_this);
	com.firstplayable.hxlib.haxe.Debug.log("Saving object: \n" + JSON.stringify(game.GlobalVars.profile),null,{ fileName : "BartlettSaveMan.hx", lineNumber : 195, className : "game.save.BartlettSaveMan", methodName : "post"});
	game.save.BartlettSaveMan.onLiteSave();
};
game.save.BartlettSaveMan.fetch = function() {
	game.save.BartlettSaveMan.checkForNativeBridge();
};
game.save.WordProgress = function(aId) {
	this.status = 0;
	this.id = 0;
	this.id = aId;
};
$hxClasses["game.save.WordProgress"] = game.save.WordProgress;
game.save.WordProgress.__name__ = ["game","save","WordProgress"];
game.save.WordProgress.prototype = {
	addStatus: function(wordStatus) {
		this.status = com.firstplayable.hxlib.haxe.utils.BitFlags.toFlag(this.status).add(wordStatus);
	}
	,hasStatus: function(wordStatus) {
		return com.firstplayable.hxlib.haxe.utils.BitFlags.toFlag(this.status).has(wordStatus);
	}
	,__class__: game.save.WordProgress
};
game.states = {};
game.states.GameStates = $hxClasses["game.states.GameStates"] = { __ename__ : true, __constructs__ : ["LANDING","CALENDAR","STAMP","WORDGUIDE","RESULT","CLOZE","ACTIVE"] };
game.states.GameStates.LANDING = ["LANDING",0];
game.states.GameStates.LANDING.toString = $estr;
game.states.GameStates.LANDING.__enum__ = game.states.GameStates;
game.states.GameStates.CALENDAR = ["CALENDAR",1];
game.states.GameStates.CALENDAR.toString = $estr;
game.states.GameStates.CALENDAR.__enum__ = game.states.GameStates;
game.states.GameStates.STAMP = ["STAMP",2];
game.states.GameStates.STAMP.toString = $estr;
game.states.GameStates.STAMP.__enum__ = game.states.GameStates;
game.states.GameStates.WORDGUIDE = ["WORDGUIDE",3];
game.states.GameStates.WORDGUIDE.toString = $estr;
game.states.GameStates.WORDGUIDE.__enum__ = game.states.GameStates;
game.states.GameStates.RESULT = ["RESULT",4];
game.states.GameStates.RESULT.toString = $estr;
game.states.GameStates.RESULT.__enum__ = game.states.GameStates;
game.states.GameStates.CLOZE = ["CLOZE",5];
game.states.GameStates.CLOZE.toString = $estr;
game.states.GameStates.CLOZE.__enum__ = game.states.GameStates;
game.states.GameStates.ACTIVE = ["ACTIVE",6];
game.states.GameStates.ACTIVE.toString = $estr;
game.states.GameStates.ACTIVE.__enum__ = game.states.GameStates;
game.states.activity = {};
game.states.activity.ActivityState = function(stateId) {
	this.state = stateId;
};
$hxClasses["game.states.activity.ActivityState"] = game.states.activity.ActivityState;
game.states.activity.ActivityState.__name__ = ["game","states","activity","ActivityState"];
game.states.activity.ActivityState.__interfaces__ = [com.firstplayable.hxlib.haxe.state.IGameState];
game.states.activity.ActivityState.prototype = {
	get_id: function() {
		return this.state[1];
	}
	,get_name: function() {
		return this.state[0];
	}
	,init: function() {
	}
	,dispose: function() {
	}
	,enter: function(p) {
		com.firstplayable.hxlib.haxe.app.Application.app.addEventListener("vocabPlayFinished",$bind(this,this.onPlayFinished));
		com.firstplayable.hxlib.haxe.app.Application.app.addEventListener("vocabActivityComplete",$bind(this,this.onActivityComplete));
		this.m_word = game.db.VocabMan.curWord;
		game.GlobalVars.wordGuide.activate();
		game.GlobalVars.wordGuide.setProgress(game.GlobalVars.isClozeActivity?game.db.Progression.curList.cloze:game.db.Progression.curList.active);
		this.m_pauseBtn = new com.firstplayable.hxlib.haxe.display.GraphicButton(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/alert/pauseBtn_up.png")),null,null,null,null,$bind(this,this.onQuit));
		this.m_pauseBtn.set_x(game.states.activity.ActivityState.PAUSE_BTN_POS.x);
		this.m_pauseBtn.set_y(game.states.activity.ActivityState.PAUSE_BTN_POS.y);
		this.m_pauseBtn.set_enabled(true);
		this.m_remainingPanel = new game.states.activity.elements.ActivityWordsRemainingArea();
		this.m_remainingPanel.set_x(game.states.activity.ActivityState.REMAINING_POS.x);
		this.m_remainingPanel.set_y(game.states.activity.ActivityState.REMAINING_POS.y);
		this.m_remainingPanel.updateDisplay();
		Configs.applyScale(this.m_pauseBtn);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.HUD[0],this.m_remainingPanel);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.HUD[0],this.m_pauseBtn);
		game.db.Progression.endOfPlay = false;
		game.GlobalVars.wordGuide.guideTab.mouseEnabled = true;
	}
	,exit: function() {
		game.GlobalVars.wordGuide.deactivate();
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.HUD[0],this.m_remainingPanel);
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.HUD[0],this.m_pauseBtn);
		com.firstplayable.hxlib.haxe.app.Application.app.removeEventListener("vocabActivityComplete",$bind(this,this.onActivityComplete));
		com.firstplayable.hxlib.haxe.app.Application.app.removeEventListener("vocabPlayFinished",$bind(this,this.onPlayFinished));
	}
	,onPlayFinished: function(e) {
		game.GlobalVars.alertRound.show();
	}
	,onActivityComplete: function(e) {
		game.GlobalVars.alertWin.show();
	}
	,onQuit: function(caller) {
		game.AudioMan.get("sounds/general/CLICK.mp3").play();
		game.save.BartlettSaveMan.post();
		com.firstplayable.hxlib.haxe.state.StateManager.setState(game.states.GameStates.LANDING);
	}
	,nextRound: function() {
		game.db.Progression.updateActiveList();
		game.db.VocabMan.advanceWord();
		if(game.db.Progression.endOfPlay) {
			this.m_pauseBtn.set_enabled(false);
			this.m_remainingPanel.updateDisplay(true);
			game.GlobalVars.wordGuide.setProgress(game.GlobalVars.isClozeActivity?game.db.Progression.curList.cloze:game.db.Progression.curList.active);
		} else com.firstplayable.hxlib.haxe.state.StateManager.setState(this.state);
	}
	,__class__: game.states.activity.ActivityState
	,__properties__: {get_name:"get_name",get_id:"get_id"}
};
game.states.activity.cloze = {};
game.states.activity.cloze.ClozeState = function(stateId) {
	game.states.activity.ActivityState.call(this,stateId);
};
$hxClasses["game.states.activity.cloze.ClozeState"] = game.states.activity.cloze.ClozeState;
game.states.activity.cloze.ClozeState.__name__ = ["game","states","activity","cloze","ClozeState"];
game.states.activity.cloze.ClozeState.__super__ = game.states.activity.ActivityState;
game.states.activity.cloze.ClozeState.prototype = $extend(game.states.activity.ActivityState.prototype,{
	clozeWordComplete: function() {
		if(!this.m_word.wonCloze) {
			++game.GlobalVars.profile.lifetimeCorrect;
			this.m_word.set_wonCloze(true);
		}
	}
	,__class__: game.states.activity.cloze.ClozeState
});
game.states.activity.cloze.vacuum = {};
game.states.activity.cloze.vacuum.VacuumClozeState = function(stateId) {
	game.states.activity.cloze.ClozeState.call(this,stateId);
	this.m_background = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/cloze/vacuum/backdrop.png"));
};
$hxClasses["game.states.activity.cloze.vacuum.VacuumClozeState"] = game.states.activity.cloze.vacuum.VacuumClozeState;
game.states.activity.cloze.vacuum.VacuumClozeState.__name__ = ["game","states","activity","cloze","vacuum","VacuumClozeState"];
game.states.activity.cloze.vacuum.VacuumClozeState.__super__ = game.states.activity.cloze.ClozeState;
game.states.activity.cloze.vacuum.VacuumClozeState.prototype = $extend(game.states.activity.cloze.ClozeState.prototype,{
	enter: function(p) {
		game.states.activity.cloze.ClozeState.prototype.enter.call(this,p);
		this.init();
		this.setup();
		this.start();
	}
	,exit: function() {
		com.firstplayable.hxlib.haxe.display.GameDisplay.resetLayer(game.LayerName.GAME[0]);
		com.firstplayable.hxlib.haxe.display.GameDisplay.resetLayer(game.LayerName.HUD[0]);
		game.states.activity.cloze.ClozeState.prototype.exit.call(this);
	}
	,init: function() {
		this.m_cloze = new game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea(this.m_word);
		this.m_vacuum = new game.states.activity.cloze.vacuum.elements.VacuumClozeVac();
		this.m_vacuum.set_x(game.states.activity.cloze.vacuum.VacuumClozeState.VAC_POS.x);
		this.m_vacuum.set_y(game.states.activity.cloze.vacuum.VacuumClozeState.VAC_POS.y);
		this.m_answers = [];
		this.m_potentialAnswer = null;
		this.m_answerTimeout = new com.firstplayable.hxlib.haxe.utils.Delay(1000,$bind(this,this.answerSelected));
	}
	,setup: function() {
		this.buildRoom();
		this.buildCloze();
		this.buildVac();
	}
	,buildRoom: function() {
		Configs.applyScale(this.m_background);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_background);
	}
	,buildVac: function() {
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_vacuum);
	}
	,buildCloze: function() {
		var answers = this.m_word.distractors.slice();
		answers.push(this.m_word.word);
		com.firstplayable.hxlib.haxe.utils.LambdaX.shuffle(answers);
		var answerSpace = (com.firstplayable.hxlib.haxe.app.Application.app.get_appSize().x - game.states.activity.cloze.vacuum.VacuumClozeState.ANSWER_POS.x) / answers.length;
		var _g1 = 0;
		var _g = answers.length;
		while(_g1 < _g) {
			var i = _g1++;
			var answer = new game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement(i,answers[i]);
			answer.set_x(game.states.activity.cloze.vacuum.VacuumClozeState.ANSWER_POS.x + i * answerSpace);
			var wait = Std.random(6) / 10;
			motion.Actuate.tween(answer,2.0,{ y : game.states.activity.cloze.vacuum.VacuumClozeState.ANSWER_POS.y + this.m_cloze.get_y() + this.m_cloze.get_height()}).snapping(true).delay(wait);
			com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],answer);
			this.m_answers.push(answer);
		}
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_cloze);
	}
	,start: function() {
		this.m_vacuum.activate();
		this.m_vacuum.addEventListener("startVacuum",$bind(this,this.onVacStart));
		this.m_vacuum.addEventListener("stopVacuum",$bind(this,this.onVacStop));
	}
	,onVacStart: function(e) {
		this.m_potentialAnswer = null;
		this.m_vacuum.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.checkSelection));
	}
	,onVacStop: function(e) {
		this.m_vacuum.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.checkSelection));
		this.stopSelection();
	}
	,stopSelection: function() {
		this.m_answerTimeout.reset();
		if(this.m_potentialAnswer != null) this.m_potentialAnswer.stopWiggle();
	}
	,checkSelection: function(e) {
		if(this.m_potentialAnswer == null) {
			var _g = 0;
			var _g1 = this.m_answers;
			while(_g < _g1.length) {
				var ans = _g1[_g];
				++_g;
				if(ans.hitTestObject(this.m_vacuum.head)) {
					this.m_potentialAnswer = ans;
					this.m_answerTimeout.start();
					break;
				}
			}
			return;
		}
		if(this.m_potentialAnswer.hitTestObject(this.m_vacuum.head)) this.m_potentialAnswer.wiggle(); else {
			this.stopSelection();
			this.m_potentialAnswer = null;
		}
	}
	,dropBlobs: function() {
		var _g = 0;
		var _g1 = this.m_answers;
		while(_g < _g1.length) {
			var answer = _g1[_g];
			++_g;
			if(answer != this.m_potentialAnswer) {
				var wait = Std.random(6) / 10;
				motion.Actuate.tween(answer,0.9,{ y : answer.get_y() - 250.}).delay(wait);
			}
		}
	}
	,answerSelected: function() {
		this.m_vacuum.stop();
		this.m_answerTimeout.reset();
		var chosenAnswer = this.m_potentialAnswer;
		this.m_isCorrect = chosenAnswer.word == this.m_word.word;
		this.m_vacuum.setPanelOutcome(this.m_isCorrect,chosenAnswer.word);
		var globalHeadPos = this.m_vacuum.localToGlobal(new flash.geom.Point(this.m_vacuum.head.get_x(),this.m_vacuum.head.get_y()));
		globalHeadPos.x *= 1.0;
		globalHeadPos.y *= 1.0;
		motion.Actuate.tween(chosenAnswer,0.25,{ x : globalHeadPos.x, y : globalHeadPos.y, scaleX : 0.25, scaleY : 0.25}).onComplete(($_=this.m_vacuum,$bind($_,$_.suckWord)),[chosenAnswer]);
		this.m_vacuum.addEventListener("finishedVacuum",$bind(this,this.doOutcome));
		haxe.Timer.delay($bind(this,this.dropBlobs),250);
		this.m_pauseBtn.set_enabled(false);
		game.GlobalVars.wordGuide.guideTab.mouseEnabled = false;
	}
	,doOutcome: function(e) {
		this.m_vacuum.removeEventListener("finishedVacuum",$bind(this,this.doOutcome));
		if(this.m_isCorrect) {
			this.clozeWordComplete();
			this.correctAnim1();
		} else {
			this.m_potentialAnswer.setState(1);
			this.incorrectAnim1();
		}
	}
	,correctAnim1: function() {
		this.m_cloze.revealWord();
		var starPos = this.m_cloze.getWordPos();
		var goldStar = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/star_cloze.png"));
		goldStar.set_x(starPos.x);
		goldStar.set_y(starPos.y);
		goldStar.set_scaleX(0.5);
		goldStar.set_scaleY(0.5);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.HUD[0],goldStar);
		var toPos = new flash.geom.Point(com.firstplayable.hxlib.haxe.app.Application.app.get_center().x,com.firstplayable.hxlib.haxe.app.Application.app.get_center().y);
		motion.Actuate.tween(goldStar,2.0,{ x : toPos.x - goldStar.get_width() * 2, y : toPos.y - goldStar.get_height() * 2, scaleX : 2.0, scaleY : 2.0}).ease(motion.easing.Quad.get_easeOut()).onComplete($bind(this,this.correctAnim2),[goldStar]);
	}
	,correctAnim2: function(goldStar) {
		motion.Actuate.tween(goldStar,1.0,{ x : 100., y : 590., scaleX : 0.20, scaleY : 0.20}).onComplete(function() {
			com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],goldStar);
		});
		haxe.Timer.delay($bind(this,this.nextRound),1500);
	}
	,incorrectAnim1: function() {
		var globalHeadPos = this.m_vacuum.localToGlobal(new flash.geom.Point(this.m_vacuum.head.get_x(),this.m_vacuum.head.get_y()));
		globalHeadPos.x *= 1.0;
		globalHeadPos.y *= 1.0;
		var chosenAnswer = this.m_potentialAnswer;
		chosenAnswer.set_x(globalHeadPos.x);
		chosenAnswer.set_y(globalHeadPos.y);
		chosenAnswer.set_visible(true);
		chosenAnswer.stopWiggle();
		motion.Actuate.tween(chosenAnswer,0.3,{ x : 410., y : 225., scaleX : 1.0, scaleY : 1.0}).ease(motion.easing.Linear.get_easeNone()).onComplete($bind(this,this.incorrectAnim2),[chosenAnswer]);
	}
	,incorrectAnim2: function(chosenAnswer) {
		motion.Actuate.tween(chosenAnswer,0.25,{ x : 250., y : 375.}).ease(motion.easing.Linear.get_easeNone()).onComplete($bind(this,this.incorrectAnim3),[chosenAnswer]);
	}
	,incorrectAnim3: function(chosenAnswer) {
		motion.Actuate.tween(chosenAnswer,0.2,{ x : 240., y : 450.}).ease(motion.easing.Linear.get_easeNone()).onComplete($bind(this,this.incorrectAnim4),[chosenAnswer]);
	}
	,incorrectAnim4: function(chosenAnswer) {
		motion.Actuate.tween(chosenAnswer,0.2,{ y : chosenAnswer.get_y() + 25., scaleX : 1.2, scaleY : 0.8}).ease(motion.easing.Linear.get_easeNone()).onComplete($bind(this,this.incorrectAnim5),[chosenAnswer]);
	}
	,incorrectAnim5: function(chosenAnswer) {
		motion.Actuate.tween(chosenAnswer,0.4,{ y : chosenAnswer.get_y() - 25., scaleX : 1.0, scaleY : 1.0}).onComplete($bind(this,this.incorrectAnim6),[chosenAnswer]);
	}
	,incorrectAnim6: function(chosenAnswer) {
		motion.Actuate.tween(chosenAnswer,1.0,{ x : -100.});
		haxe.Timer.delay($bind(this,this.nextRound),1000);
	}
	,__class__: game.states.activity.cloze.vacuum.VacuumClozeState
});
game.states.activity.cloze.vacuum.elements = {};
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement = function(answerId,wordText) {
	flash.display.Sprite.call(this);
	this.word = wordText;
	var wordLen = this.word.length;
	var hangUrl = "2d/activities/blob/small_hang.png";
	var looseUrl = "2d/activities/blob/small_loose.png";
	game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS.x = -25.;
	game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS.y = 65.;
	game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS.x = 25.;
	game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS.y = 65.;
	if(wordLen > 5) {
		hangUrl = "2d/activities/blob/medium_hang.png";
		looseUrl = "2d/activities/blob/medium_loose.png";
		game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS.x = -25.;
		game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS.y = 65.;
		game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS.x = 25.;
		game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS.y = 65.;
		if(wordLen > 10) {
			hangUrl = "2d/activities/blob/large_hang.png";
			looseUrl = "2d/activities/blob/large_loose.png";
			game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS.x = -40.;
			game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS.y = 65.;
			game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS.x = 25.;
			game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS.y = 65.;
		}
	}
	var t = new flash.text.TextField();
	t.set_defaultTextFormat(game.FontMap.VACUUM_CLOZE_ANSWER);
	t.set_text(this.word);
	t.set_x(-t.get_textWidth() * 0.5);
	t.set_y(-t.get_textHeight() * 0.5 + 112.);
	this.m_bodyAttached = new flash.display.Bitmap(openfl.Assets.getBitmapData(hangUrl));
	this.m_bodyDetached = new flash.display.Bitmap(openfl.Assets.getBitmapData(looseUrl));
	Configs.applyScale(this.m_bodyAttached);
	Configs.applyScale(this.m_bodyDetached);
	this.m_bodyAttached.set_x(-this.m_bodyAttached.get_width() * 0.5);
	this.m_bodyDetached.set_x(-this.m_bodyDetached.get_width() * 0.5);
	var randEye1 = Std.random(5);
	var randEye2 = Std.random(5);
	var eye1 = new flash.display.Bitmap(openfl.Assets.getBitmapData(game.Manifest.IMG_ACTIVITY_BLOB_EYES[randEye1]));
	var eye2 = new flash.display.Bitmap(openfl.Assets.getBitmapData(game.Manifest.IMG_ACTIVITY_BLOB_EYES[randEye2]));
	eye1.set_scaleX(1.0);
	eye1.set_scaleY(1.0);
	eye2.set_scaleX(1.0);
	eye2.set_scaleY(1.0);
	var leftEye = new flash.display.Sprite();
	var rightEye = new flash.display.Sprite();
	leftEye.addChild(eye1);
	rightEye.addChild(eye2);
	eye1.set_x(-eye1.get_width() * 0.5);
	eye1.set_y(-eye1.get_height() * 0.5);
	eye2.set_x(-eye2.get_width() * 0.5);
	eye2.set_y(-eye2.get_height() * 0.5);
	leftEye.set_x(game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS.x + (Math.random() * 30 - 15));
	leftEye.set_y(game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS.y + (Math.random() * 30 - 15));
	leftEye.set_scaleX(Math.random() * 0.5 + 0.75);
	leftEye.set_scaleY(leftEye.get_scaleX());
	leftEye.set_rotation(Math.random() * 90 - 45);
	rightEye.set_x(game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS.x + (Math.random() * 30 - 15));
	rightEye.set_y(game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS.y + (Math.random() * 30 - 15));
	rightEye.set_scaleX(Math.random() * 0.5 + 0.75);
	rightEye.set_scaleY(rightEye.get_scaleX());
	rightEye.set_rotation(Math.random() * 90 - 45);
	this.addChild(this.m_bodyAttached);
	this.addChild(leftEye);
	this.addChild(rightEye);
	this.addChild(t);
};
$hxClasses["game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement"] = game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement;
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.__name__ = ["game","states","activity","cloze","vacuum","elements","VacuumClozeAnswerElement"];
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.__super__ = flash.display.Sprite;
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.prototype = $extend(flash.display.Sprite.prototype,{
	wiggle: function() {
		var _g = this;
		_g.set_rotation(_g.get_rotation() + (Std.random(5) - 2));
	}
	,stopWiggle: function() {
		this.set_rotation(0);
	}
	,setState: function(targetState) {
		if(targetState == 0 && this.m_bodyDetached.parent != null) {
			this.removeChild(this.m_bodyDetached);
			this.addChildAt(this.m_bodyAttached,0);
		} else if(targetState == 1 && this.m_bodyAttached.parent != null) {
			this.removeChild(this.m_bodyAttached);
			this.addChildAt(this.m_bodyDetached,0);
			this.m_bodyDetached.set_y(50.);
		}
	}
	,__class__: game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement
});
game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea = function(word) {
	flash.display.Sprite.call(this);
	this.m_word = word;
	this.m_bg = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/cloze/vacuum/sentence_drop.png"));
	Configs.applyScale(this.m_bg);
	this.m_sentenceLeft = new flash.text.TextField();
	this.m_sentenceLeft.set_defaultTextFormat(game.FontMap.VACUUM_CLOZE_SENTENCE);
	this.m_sentenceLeft.set_width(this.m_bg.get_width());
	this.m_sentenceLeft.set_height(this.m_bg.get_height());
	this.m_sentenceLeft.multiline = true;
	this.m_sentenceLeft.set_wordWrap(true);
	this.m_sentenceBlank = new flash.text.TextField();
	this.m_sentenceBlank.set_defaultTextFormat(game.FontMap.VACUUM_CLOZE_SENTENCE);
	this.m_sentenceBlank.set_width(this.m_bg.get_width());
	this.m_sentenceBlank.set_height(this.m_bg.get_height());
	this.m_sentenceBlank.multiline = true;
	this.m_sentenceBlank.set_wordWrap(true);
	this.m_sentenceRight = new flash.text.TextField();
	this.m_sentenceRight.set_defaultTextFormat(game.FontMap.VACUUM_CLOZE_SENTENCE);
	this.m_sentenceRight.set_width(this.m_bg.get_width());
	this.m_sentenceRight.set_height(this.m_bg.get_height());
	this.m_sentenceRight.multiline = true;
	this.m_sentenceRight.set_wordWrap(true);
	this.m_sentenceWord = new flash.text.TextField();
	this.m_sentenceWord.set_defaultTextFormat(game.FontMap.VACUUM_CLOZE_SENTENCE_WORD);
	this.m_sentenceWord.set_width(this.m_bg.get_width());
	this.m_sentenceWord.set_height(this.m_bg.get_height());
	this.m_sentenceWord.multiline = true;
	this.m_sentenceWord.set_wordWrap(true);
	this.m_sentenceOverflow = new flash.text.TextField();
	this.m_sentenceOverflow.set_defaultTextFormat(game.FontMap.VACUUM_CLOZE_SENTENCE);
	this.m_sentenceOverflow.set_width(this.m_bg.get_width());
	this.m_sentenceOverflow.set_height(this.m_bg.get_height());
	this.m_sentenceOverflow.multiline = true;
	this.m_sentenceOverflow.set_wordWrap(true);
	var flickerSh = new flash.display.Shape();
	flickerSh.get_graphics().beginFill(845688);
	flickerSh.get_graphics().drawRect(0,0,850.,100.);
	flickerSh.get_graphics().beginFill(8408480);
	flickerSh.get_graphics().drawRect(10,10,830.,80.);
	flickerSh.get_graphics().endFill();
	var bmpd = new flash.display.BitmapData(Std["int"](flickerSh.get_width()),Std["int"](flickerSh.get_height()));
	bmpd.draw(flickerSh);
	this.m_flicker = new flash.display.Bitmap(bmpd);
	this.m_flicker.set_visible(false);
	this.m_flicker.set_x(game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS.x);
	this.m_flicker.set_y(game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS.y);
	this.addChild(this.m_bg);
	this.addChild(this.m_flicker);
	this.addChild(this.m_sentenceLeft);
	this.addChild(this.m_sentenceRight);
	this.addChild(this.m_sentenceBlank);
	this.updateSentence();
};
$hxClasses["game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea"] = game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea;
game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.__name__ = ["game","states","activity","cloze","vacuum","elements","VacuumClozeSentenceArea"];
game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.__super__ = flash.display.Sprite;
game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.prototype = $extend(flash.display.Sprite.prototype,{
	getWordPos: function() {
		return new flash.geom.Point(this.m_sentenceWord.get_x() + 0.5 * this.m_sentenceWord.get_textWidth(),this.m_sentenceWord.get_y() + 0.5 * this.m_sentenceWord.get_textHeight());
	}
	,revealWord: function() {
		if(this.m_sentenceWord.get_textWidth() > this.m_sentenceBlank.get_textWidth()) this.expandBlank();
		this.addChild(this.m_sentenceWord);
		this.m_flicker.set_visible(true);
	}
	,updateSentence: function() {
		this.m_sentenceLeft.set_text(this.m_word.clozeA);
		this.m_sentenceRight.set_text(this.m_word.clozeB);
		this.m_sentenceBlank.set_text("__________");
		this.m_sentenceWord.set_text(this.m_word.word);
		if(this.m_sentenceLeft.get_text() == "") {
			var firstLetter = this.m_sentenceWord.get_text().charAt(0);
			this.m_sentenceWord.set_text(firstLetter.toUpperCase() + (function($this) {
				var $r;
				var _this = $this.m_sentenceWord.get_text();
				$r = HxOverrides.substr(_this,1,null);
				return $r;
			}(this)));
		}
		this.positionText();
	}
	,positionText: function() {
		var sentenceWidth = this.m_sentenceLeft.get_textWidth() + this.m_sentenceBlank.get_textWidth() + this.m_sentenceRight.get_textWidth() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING * 2;
		if(sentenceWidth > this.m_flicker.get_width() - game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_SPACING * 2) {
			this.handleOverflow();
			return;
		}
		this.m_sentenceLeft.set_x(0.5 * (this.m_flicker.get_width() - sentenceWidth));
		this.m_sentenceLeft.set_y(0.5 * (this.m_flicker.get_height() - this.m_sentenceLeft.get_textHeight()));
		this.m_sentenceBlank.set_x(this.m_sentenceLeft.get_x() + this.m_sentenceLeft.get_textWidth() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
		this.m_sentenceBlank.set_y(this.m_sentenceLeft.get_y());
		this.m_sentenceWord.set_x(this.m_sentenceBlank.get_x() + 0.5 * (this.m_sentenceBlank.get_textWidth() - this.m_sentenceWord.get_textWidth()));
		this.m_sentenceWord.set_y(this.m_sentenceLeft.get_y() - 5.);
		this.m_sentenceRight.set_x(this.m_sentenceBlank.get_x() + this.m_sentenceBlank.get_textWidth() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
		this.m_sentenceRight.set_y(this.m_sentenceLeft.get_y());
	}
	,expandBlank: function() {
		this.m_sentenceBlank.set_text("");
		while(this.m_sentenceBlank.get_textWidth() < this.m_sentenceWord.get_textWidth()) {
			var _g = this.m_sentenceBlank;
			_g.set_text(_g.get_text() + "_");
		}
		this.positionText();
	}
	,handleOverflow: function() {
		var maxWidth = this.m_flicker.get_width() - game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_SPACING * 2;
		var wordAndBlankWidth;
		if(this.m_sentenceBlank.get_textWidth() > this.m_sentenceWord.get_textWidth()) wordAndBlankWidth = this.m_sentenceBlank.get_textWidth(); else wordAndBlankWidth = this.m_sentenceWord.get_textWidth();
		this.addChild(this.m_sentenceOverflow);
		if(this.m_sentenceLeft.get_textWidth() > maxWidth) {
			var sentenceWords = this.m_sentenceLeft.get_text().split(" ");
			this.m_sentenceLeft.set_x(0);
			this.m_sentenceLeft.set_y(0.5 * (this.m_bg.get_height() - this.m_sentenceLeft.get_textHeight()));
			this.m_sentenceOverflow.set_text(sentenceWords.shift());
			this.m_sentenceLeft.set_text("");
			while(this.m_sentenceLeft.get_textWidth() + this.m_sentenceOverflow.get_textWidth() < maxWidth) {
				var _g = this.m_sentenceLeft;
				_g.set_text(_g.get_text() + (this.m_sentenceOverflow.get_text() + " "));
				this.m_sentenceOverflow.set_text(sentenceWords.shift());
			}
			while(sentenceWords.length > 0) {
				var _g1 = this.m_sentenceOverflow;
				_g1.set_text(_g1.get_text() + (" " + sentenceWords.shift()));
			}
			this.m_sentenceLeft.set_x(game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS.x + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_SPACING);
			this.m_sentenceLeft.set_y(game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS.y + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceOverflow.set_x(this.m_sentenceLeft.get_x());
			this.m_sentenceOverflow.set_y(this.m_sentenceLeft.get_y() + this.m_sentenceLeft.get_textHeight() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceBlank.set_x(this.m_sentenceOverflow.get_x() + this.m_sentenceOverflow.get_textWidth() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceBlank.set_y(this.m_sentenceOverflow.get_y());
			this.m_sentenceRight.set_x(this.m_sentenceBlank.get_x() + this.m_sentenceBlank.get_textWidth() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceRight.set_y(this.m_sentenceBlank.get_y());
			this.m_sentenceWord.set_x(this.m_sentenceBlank.get_x() + 0.5 * (this.m_sentenceBlank.get_textWidth() - this.m_sentenceWord.get_textWidth()));
			this.m_sentenceWord.set_y(this.m_sentenceBlank.get_y() - 5.);
		} else if(this.m_sentenceLeft.get_textWidth() + wordAndBlankWidth > maxWidth + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING) {
			this.m_sentenceLeft.set_x(game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS.x + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_SPACING);
			this.m_sentenceLeft.set_y(game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS.y + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceBlank.set_x(this.m_sentenceLeft.get_x());
			this.m_sentenceBlank.set_y(this.m_sentenceLeft.get_y() + this.m_sentenceLeft.get_textHeight() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceRight.set_x(this.m_sentenceBlank.get_x() + this.m_sentenceBlank.get_textWidth() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceRight.set_y(this.m_sentenceBlank.get_y());
			this.m_sentenceWord.set_x(this.m_sentenceBlank.get_x() + 0.5 * (this.m_sentenceBlank.get_textWidth() - this.m_sentenceWord.get_textWidth()));
			this.m_sentenceWord.set_y(this.m_sentenceBlank.get_y() - 5.);
		} else {
			this.m_sentenceLeft.set_x(game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS.x + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_SPACING);
			this.m_sentenceLeft.set_y(game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS.y + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceBlank.set_x(this.m_sentenceLeft.get_x() + this.m_sentenceLeft.get_textWidth() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceBlank.set_y(this.m_sentenceLeft.get_y());
			this.m_sentenceWord.set_x(this.m_sentenceBlank.get_x() + 0.5 * (this.m_sentenceBlank.get_textWidth() - this.m_sentenceWord.get_textWidth()));
			this.m_sentenceWord.set_y(this.m_sentenceBlank.get_y() - 5.);
			var sentenceWords1 = this.m_sentenceRight.get_text().split(" ");
			this.m_sentenceOverflow.set_text(sentenceWords1.shift());
			this.m_sentenceRight.set_text("");
			var leftElementsWidth = this.m_sentenceLeft.get_textWidth() + wordAndBlankWidth + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING * 2;
			while(leftElementsWidth + this.m_sentenceRight.get_textWidth() + this.m_sentenceOverflow.get_textWidth() < maxWidth) {
				var _g2 = this.m_sentenceRight;
				_g2.set_text(_g2.get_text() + (this.m_sentenceOverflow.get_text() + " "));
				this.m_sentenceOverflow.set_text(sentenceWords1.shift());
			}
			while(sentenceWords1.length > 0) {
				var _g3 = this.m_sentenceOverflow;
				_g3.set_text(_g3.get_text() + (" " + sentenceWords1.shift()));
			}
			this.m_sentenceRight.set_x(this.m_sentenceBlank.get_x() + this.m_sentenceBlank.get_textWidth() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
			this.m_sentenceRight.set_y(this.m_sentenceBlank.get_y());
			this.m_sentenceOverflow.set_x(this.m_sentenceLeft.get_x());
			this.m_sentenceOverflow.set_y(this.m_sentenceLeft.get_y() + this.m_sentenceLeft.get_textHeight() + game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING);
		}
	}
	,__class__: game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea
});
game.states.activity.cloze.vacuum.elements.VacuumClozeVac = function() {
	flash.display.Sprite.call(this);
	this.head = new flash.display.Sprite();
	this.m_hoseStart = new flash.geom.Point();
	this.m_hoseEnd = new flash.geom.Point();
	this.m_hoseSegments = [];
	this.m_retractCallback = $bind(this,this.activate);
	this.setup();
};
$hxClasses["game.states.activity.cloze.vacuum.elements.VacuumClozeVac"] = game.states.activity.cloze.vacuum.elements.VacuumClozeVac;
game.states.activity.cloze.vacuum.elements.VacuumClozeVac.__name__ = ["game","states","activity","cloze","vacuum","elements","VacuumClozeVac"];
game.states.activity.cloze.vacuum.elements.VacuumClozeVac.__super__ = flash.display.Sprite;
game.states.activity.cloze.vacuum.elements.VacuumClozeVac.prototype = $extend(flash.display.Sprite.prototype,{
	setup: function() {
		this.m_evaluator = new game.states.activity.cloze.vacuum.elements.VacuumEvalPanel();
		this.m_evaluator.set_x(game.states.activity.cloze.vacuum.elements.VacuumClozeVac.EVAL_POS.x);
		this.m_evaluator.set_y(game.states.activity.cloze.vacuum.elements.VacuumClozeVac.EVAL_POS.y);
		var vacHead = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/cloze/vacuum/vac_head.png"));
		vacHead.set_scaleX(1.0);
		vacHead.set_scaleY(1.0);
		vacHead.set_x(-vacHead.get_width() * 0.5);
		vacHead.set_y(-vacHead.get_height() * 0.5);
		this.head.addChild(vacHead);
		this.head.set_x(game.states.activity.cloze.vacuum.elements.VacuumClozeVac.HEAD_POS.x);
		this.head.set_y(game.states.activity.cloze.vacuum.elements.VacuumClozeVac.HEAD_POS.y);
		var numTubes = 20;
		var segSpacing = 5;
		var _g = 0;
		while(_g < numTubes) {
			var i = _g++;
			var seg = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/cloze/vacuum/hose_segment.png"));
			seg.set_scaleX(1.0);
			seg.set_scaleY(1.0);
			var segment = new flash.display.Sprite();
			seg.set_x(-seg.get_width() * 0.5);
			seg.set_y(-seg.get_height() * 0.5);
			segment.addChild(seg);
			segment.set_x(this.head.get_x());
			segment.set_y(this.head.get_y() + i * segSpacing + numTubes);
			this.m_hoseSegments[i] = segment;
			this.addChild(segment);
		}
		this.m_hoseStart.x = game.states.activity.cloze.vacuum.elements.VacuumClozeVac.TUBE_POS.x;
		this.m_hoseStart.y = game.states.activity.cloze.vacuum.elements.VacuumClozeVac.TUBE_POS.y;
		this.m_body = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/cloze/vacuum/vac.png"));
		Configs.applyScale(this.m_body);
		this.addChild(this.head);
		this.addChild(this.m_body);
		this.addChild(this.m_evaluator);
	}
	,update: function(e) {
		this.head.set_x(this.get_mouseX());
		this.head.set_y(this.get_mouseY());
		this.updateHose();
	}
	,updateHose: function(wiggle) {
		if(wiggle == null) wiggle = true;
		this.m_hoseEnd.x = this.head.get_x();
		this.m_hoseEnd.y = this.head.get_y();
		var numSegments = this.m_hoseSegments.length;
		var segSpace = flash.geom.Point.distance(this.m_hoseEnd,this.m_hoseStart) / numSegments;
		var baseRot = 90;
		var linePos = new flash.geom.Point();
		var seg0 = this.m_hoseSegments[0];
		linePos = com.firstplayable.hxlib.haxe.utils.MathUtils.getLinearPoint(this.m_hoseStart,this.m_hoseEnd,0,linePos);
		var hoseRotation = baseRot + com.firstplayable.hxlib.haxe.utils.MathUtils.pointAt(linePos,this.m_hoseEnd);
		var _g = 0;
		while(_g < numSegments) {
			var i = _g++;
			linePos = com.firstplayable.hxlib.haxe.utils.MathUtils.getLinearPoint(this.m_hoseStart,this.m_hoseEnd,i * segSpace,linePos);
			var seg = this.m_hoseSegments[i];
			seg.set_x(linePos.x);
			seg.set_y(linePos.y);
			seg.set_rotation(hoseRotation);
		}
		this.head.set_rotation(hoseRotation);
	}
	,activate: function() {
		this.updateHose(false);
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		if(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)) this.parent.addEventListener("touchBegin",$bind(this,this.start)); else this.parent.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.start));
	}
	,deactivate: function() {
		this.parent.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.start));
		this.parent.removeEventListener("touchBegin",$bind(this,this.start));
	}
	,start: function(e) {
		this.deactivate();
		if(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)) this.get_stage().addEventListener("touchEnd",$bind(this,this.retract)); else this.get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.retract));
		this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		this.dispatchEvent(new game.events.VacuumEvent("startVacuum"));
	}
	,retract: function(e) {
		this.stop();
		motion.Actuate.tween(this.head,1.0,{ x : game.states.activity.cloze.vacuum.elements.VacuumClozeVac.HEAD_POS.x, y : game.states.activity.cloze.vacuum.elements.VacuumClozeVac.HEAD_POS.y}).onUpdate($bind(this,this.updateHose)).onComplete(this.m_retractCallback);
	}
	,stop: function() {
		this.dispatchEvent(new game.events.VacuumEvent("stopVacuum"));
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		this.get_stage().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.retract));
		this.get_stage().removeEventListener("touchEnd",$bind(this,this.retract));
	}
	,suckWord: function(chosenAnswer) {
		chosenAnswer.set_visible(false);
		this.m_retractCallback = $bind(this,this.deactivate);
		this.swallowWord(this.m_hoseSegments.length - 1);
	}
	,setPanelOutcome: function(correct,word) {
		this.m_evaluator.isCorrect = correct;
		this.m_evaluator.set_word(word);
	}
	,swallowWord: function(seg) {
		var numSegsInvolved = 5;
		if(seg <= -numSegsInvolved) this.evaluate(); else {
			var index0 = this.validateSeg(seg - 2);
			var index1 = this.validateSeg(seg - 1);
			var index2 = this.validateSeg(seg);
			var index3 = this.validateSeg(seg + 1);
			var index4 = this.validateSeg(seg + 2);
			var segA;
			if(index0 != -1) segA = this.m_hoseSegments[index0]; else segA = null;
			var segB;
			if(index1 != -1) segB = this.m_hoseSegments[index1]; else segB = null;
			var segC;
			if(index2 != -1) segC = this.m_hoseSegments[index2]; else segC = null;
			var segD;
			if(index3 != -1) segD = this.m_hoseSegments[index3]; else segD = null;
			var segE;
			if(index4 != -1) segE = this.m_hoseSegments[index4]; else segE = null;
			if(segA != null) {
				segA.set_scaleX(1.0);
				segA.set_scaleY(1.0);
			}
			if(segB != null) {
				segB.set_scaleX(1.5);
				segB.set_scaleY(1.25);
			}
			if(segC != null) {
				segC.set_scaleX(2.0);
				segC.set_scaleY(1.75);
			}
			if(segD != null) {
				segD.set_scaleX(1.5);
				segD.set_scaleY(1.25);
			}
			if(segE != null) {
				segE.set_scaleX(1.0);
				segE.set_scaleY(1.0);
			}
			var delay = new com.firstplayable.hxlib.haxe.utils.Delay(15,$bind(this,this.swallowWord),1,[seg - 1]);
			delay.start();
		}
	}
	,validateSeg: function(seg) {
		if(seg < 0 || seg >= this.m_hoseSegments.length) return -1; else return seg;
	}
	,evaluate: function() {
		this.retract();
		this.m_evaluator.onComplete = $bind(this,this.finished);
		this.m_evaluator.evaluate();
		this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.shakeBody));
	}
	,shakeBody: function(e) {
		var moveX = Std.random(5) - 2;
		var moveY = Std.random(5) - 2;
		var _g = this.m_body;
		_g.set_x(_g.get_x() + moveX);
		var _g1 = this.m_body;
		_g1.set_y(_g1.get_y() + moveY);
		var _g2 = this.m_evaluator;
		_g2.set_x(_g2.get_x() + moveX);
		var _g3 = this.m_evaluator;
		_g3.set_y(_g3.get_y() + moveY);
	}
	,finished: function() {
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.shakeBody));
		this.dispatchEvent(new game.events.VacuumEvent("finishedVacuum"));
	}
	,__class__: game.states.activity.cloze.vacuum.elements.VacuumClozeVac
});
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel = function() {
	flash.display.Sprite.call(this);
	this.m_counter = 0;
	this.m_word = new flash.text.TextField();
	this.m_word.set_defaultTextFormat(game.FontMap.VACUUM_CLOZE_ANSWER);
	this.m_maxW = 176.;
	this.m_maxH = 32.;
};
$hxClasses["game.states.activity.cloze.vacuum.elements.VacuumEvalPanel"] = game.states.activity.cloze.vacuum.elements.VacuumEvalPanel;
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel.__name__ = ["game","states","activity","cloze","vacuum","elements","VacuumEvalPanel"];
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel.__super__ = flash.display.Sprite;
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel.prototype = $extend(flash.display.Sprite.prototype,{
	evaluate: function() {
		this.addChild(this.m_word);
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
	}
	,set_word: function(word) {
		this.m_word.set_text(word);
		this.m_word.set_x(0.5 * (this.m_maxW - this.m_word.get_textWidth()));
		this.m_word.set_y(0.5 * (this.m_maxH - this.m_word.get_textHeight()));
		return word;
	}
	,onFinished: function() {
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
		game.AudioMan.get(this.isCorrect?"sounds/cloze/FEEDBACK_CORRECT.mp3":"sounds/cloze/FEEDBACK_INCORRECT.mp3").play();
		this.get_graphics().clear();
		this.get_graphics().beginFill(this.isCorrect?65433:16730698);
		this.get_graphics().drawRect(5.,0,this.m_maxW,this.m_maxH);
		this.get_graphics().endFill();
		haxe.Timer.delay($bind(this,this.onScanDone),500);
	}
	,onEnterFrame: function(e) {
		++this.m_counter;
		var fillWidth = this.m_counter * 10.;
		if(fillWidth > this.m_maxW) {
			this.onFinished();
			return;
		}
		this.get_graphics().clear();
		this.get_graphics().beginFill(13036795);
		this.get_graphics().drawRect(5.,0,fillWidth,this.m_maxH);
		this.get_graphics().endFill();
	}
	,onScanDone: function() {
		this.removeChild(this.m_word);
		this.onComplete();
	}
	,__class__: game.states.activity.cloze.vacuum.elements.VacuumEvalPanel
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_word:"set_word"})
});
game.states.activity.elements = {};
game.states.activity.elements.ActivityWordsRemainingArea = function() {
	flash.display.Sprite.call(this);
	this.m_bg = new flash.display.Bitmap(openfl.Assets.getBitmapData(game.GlobalVars.isClozeActivity?"2d/activities/cloze/vacuum/counter.png":"2d/activities/learning/launcher/counter.png"));
	Configs.applyScale(this.m_bg);
	this.m_remainingField = new flash.text.TextField();
	this.m_remainingField.set_defaultTextFormat(game.FontMap.HUD_REMAINING);
	this.m_remainingField.set_text("00");
	this.m_remainingField.set_x((this.m_bg.get_width() - this.m_remainingField.get_textWidth()) * 0.5);
	this.m_remainingField.set_y((this.m_bg.get_height() - this.m_remainingField.get_textHeight()) * 0.5 + 10.);
	this.addChild(this.m_bg);
	this.addChild(this.m_remainingField);
};
$hxClasses["game.states.activity.elements.ActivityWordsRemainingArea"] = game.states.activity.elements.ActivityWordsRemainingArea;
game.states.activity.elements.ActivityWordsRemainingArea.__name__ = ["game","states","activity","elements","ActivityWordsRemainingArea"];
game.states.activity.elements.ActivityWordsRemainingArea.__super__ = flash.display.Sprite;
game.states.activity.elements.ActivityWordsRemainingArea.prototype = $extend(flash.display.Sprite.prototype,{
	get_remaining: function() {
		return Std.parseInt((function($this) {
			var $r;
			var _this = $this.m_remainingField.get_text();
			$r = HxOverrides.substr(_this,2,null);
			return $r;
		}(this))) - 1;
	}
	,set_remaining: function(amt) {
		var remains = amt + 1;
		this.m_remainingField.set_text(remains < 10?"0" + remains:"" + remains);
		return amt;
	}
	,updateDisplay: function(done) {
		if(done == null) done = false;
		this.set_remaining(game.db.VocabMan.roundWordsRemaining);
		if(done) this.set_remaining(-1);
	}
	,__class__: game.states.activity.elements.ActivityWordsRemainingArea
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_remaining:"set_remaining",get_remaining:"get_remaining"})
});
game.states.activity.learning = {};
game.states.activity.learning.LearningState = function(stateId) {
	game.states.activity.ActivityState.call(this,stateId);
};
$hxClasses["game.states.activity.learning.LearningState"] = game.states.activity.learning.LearningState;
game.states.activity.learning.LearningState.__name__ = ["game","states","activity","learning","LearningState"];
game.states.activity.learning.LearningState.__super__ = game.states.activity.ActivityState;
game.states.activity.learning.LearningState.prototype = $extend(game.states.activity.ActivityState.prototype,{
	enter: function(p) {
		game.states.activity.ActivityState.prototype.enter.call(this,p);
		this.m_answer = this.m_word.answerPick;
		if(this.m_answer) this.m_sentence = this.m_word.activeY; else this.m_sentence = this.m_word.activeN;
	}
	,learningWordComplete: function() {
		if(this.m_answer) {
			if(!this.m_word.wonActiveY) {
				++game.GlobalVars.profile.lifetimeCorrect;
				this.m_word.set_wonActiveY(true);
			}
		} else if(!this.m_word.wonActiveN) {
			++game.GlobalVars.profile.lifetimeCorrect;
			this.m_word.set_wonActiveN(true);
		}
	}
	,__class__: game.states.activity.learning.LearningState
});
game.states.activity.learning.launcher = {};
game.states.activity.learning.launcher.LearningLauncher = function(stateId) {
	game.states.activity.learning.LearningState.call(this,stateId);
	this.m_background = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/learning/launcher/background.png"));
	this.m_sentenceDisplay = new game.states.activity.learning.launcher.elements.Sentence();
};
$hxClasses["game.states.activity.learning.launcher.LearningLauncher"] = game.states.activity.learning.launcher.LearningLauncher;
game.states.activity.learning.launcher.LearningLauncher.__name__ = ["game","states","activity","learning","launcher","LearningLauncher"];
game.states.activity.learning.launcher.LearningLauncher.__super__ = game.states.activity.learning.LearningState;
game.states.activity.learning.launcher.LearningLauncher.prototype = $extend(game.states.activity.learning.LearningState.prototype,{
	enter: function(p) {
		game.states.activity.learning.LearningState.prototype.enter.call(this,p);
		Configs.applyScale(this.m_background);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.PRIMARY[0],this.m_background);
		this.m_sentenceDisplay.show();
		this.m_lLaunchObject = new game.states.activity.learning.launcher.elements.LaunchObject(true);
		this.m_lLaunchObject.set_x(game.states.activity.learning.launcher.LearningLauncher.LEFT_LAUNCH_POS.x);
		this.m_lLaunchObject.set_y(game.states.activity.learning.launcher.LearningLauncher.LEFT_LAUNCH_POS.y);
		this.m_rLaunchObject = new game.states.activity.learning.launcher.elements.LaunchObject(false);
		this.m_rLaunchObject.set_x(game.states.activity.learning.launcher.LearningLauncher.RIGHT_LAUNCH_POS.x);
		this.m_rLaunchObject.set_y(game.states.activity.learning.launcher.LearningLauncher.RIGHT_LAUNCH_POS.y);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_lLaunchObject);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_rLaunchObject);
		this.m_sentenceDisplay.setSentence(this.m_word.word,this.m_sentence);
		var target = this.m_sentenceDisplay.getTargetPosition();
		this.m_lLaunchObject.activate(target,this.m_answer);
		this.m_rLaunchObject.activate(target,!this.m_answer);
		this.m_lLaunchObject.mouseEnabled = true;
		this.m_rLaunchObject.mouseEnabled = true;
		this.addListeners();
	}
	,exit: function() {
		this.removeListeners();
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.GAME[0],this.m_lLaunchObject);
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.GAME[0],this.m_rLaunchObject);
		this.m_sentenceDisplay.hide();
		this.m_lLaunchObject.cleanUpString();
		this.m_rLaunchObject.cleanUpString();
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.PRIMARY[0],this.m_background);
		com.firstplayable.hxlib.haxe.display.GameDisplay.resetLayer(game.LayerName.GAME[0]);
		com.firstplayable.hxlib.haxe.display.GameDisplay.resetLayer(game.LayerName.HUD[0]);
		game.states.activity.learning.LearningState.prototype.exit.call(this);
	}
	,addListeners: function() {
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().addEventListener("LEARNING_TARGET_REACHED",$bind(this,this.answerSelected));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().addEventListener("LEARNING_OBJECT_LAUNCHED",$bind(this,this.onLaunch));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().addEventListener("LEARNING_OBJECT_DRAWN",$bind(this,this.onDraw));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().addEventListener("LEARNING_OBJECT_RESET",$bind(this,this.onReset));
	}
	,removeListeners: function() {
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener("LEARNING_TARGET_REACHED",$bind(this,this.answerSelected));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener("LEARNING_OBJECT_LAUNCHED",$bind(this,this.onLaunch));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener("LEARNING_OBJECT_DRAWN",$bind(this,this.onDraw));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener("LEARNING_OBJECT_RESET",$bind(this,this.onReset));
	}
	,answerSelected: function(e) {
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener("LEARNING_TARGET_REACHED",$bind(this,this.answerSelected));
		if(e.wasCorrect) {
			game.AudioMan.get("sounds/cloze/FEEDBACK_CORRECT.mp3").play();
			this.learningWordComplete();
			var goldStar = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/wordguide/star_learn.png"));
			if(this.m_answer) {
				goldStar.set_x(this.m_lLaunchObject.get_x());
				goldStar.set_y(this.m_lLaunchObject.get_y());
			} else {
				goldStar.set_x(this.m_rLaunchObject.get_x());
				goldStar.set_y(this.m_rLaunchObject.get_y());
			}
			com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.HUD[0],goldStar);
			var toPos = new flash.geom.Point(com.firstplayable.hxlib.haxe.app.Application.app.get_center().x,com.firstplayable.hxlib.haxe.app.Application.app.get_center().y);
			this.m_sentenceDisplay.target.showCorrectFeedback();
			motion.Actuate.tween(goldStar,2.0,{ x : toPos.x - goldStar.get_width() * 2, y : toPos.y - goldStar.get_height() * 2, scaleX : 2.0, scaleY : 2.0}).ease(motion.easing.Quad.get_easeOut()).onComplete($bind(this,this.correctAnim2),[goldStar]);
		} else {
			game.AudioMan.get("sounds/cloze/FEEDBACK_INCORRECT.mp3").play();
			haxe.Timer.delay($bind(this,this.nextRound),1000);
		}
	}
	,correctAnim2: function(goldStar) {
		motion.Actuate.tween(goldStar,1.0,{ x : 100., y : 590., scaleX : 0.20, scaleY : 0.20}).onComplete(function() {
			com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],goldStar);
		});
		haxe.Timer.delay($bind(this,this.nextRound),1500);
	}
	,onLaunch: function(e) {
		if(e.selectedObject != this.m_rLaunchObject) {
			this.m_rLaunchObject.deactivate();
			this.m_rLaunchObject.cleanUpString();
			this.m_rLaunchObject.alpha = 0;
		} else if(e.selectedObject != this.m_lLaunchObject) {
			this.m_lLaunchObject.deactivate();
			this.m_lLaunchObject.cleanUpString();
			this.m_lLaunchObject.alpha = 0;
		}
		this.m_pauseBtn.set_enabled(false);
		game.GlobalVars.wordGuide.guideTab.mouseEnabled = false;
	}
	,onDraw: function(e) {
		this.m_lLaunchObject.mouseEnabled = false;
		this.m_rLaunchObject.mouseEnabled = false;
	}
	,onReset: function(e) {
		this.m_lLaunchObject.mouseEnabled = true;
		this.m_rLaunchObject.mouseEnabled = true;
	}
	,__class__: game.states.activity.learning.launcher.LearningLauncher
});
game.states.activity.learning.launcher.elements = {};
game.states.activity.learning.launcher.elements.LaunchObject = function(label) {
	this.m_numBounces = 0;
	flash.display.Sprite.call(this);
	this.m_background = new flash.display.Bitmap(openfl.Assets.getBitmapData(label?"2d/activities/learning/launcher/correctCheck.png":"2d/activities/learning/launcher/incorrectCheck.png"));
	Configs.applyScale(this.m_background);
	var _g = this.m_background;
	_g.set_scaleX(_g.get_scaleX() * 0.75);
	var _g1 = this.m_background;
	_g1.set_scaleY(_g1.get_scaleY() * 0.75);
	var _g2 = this.m_background;
	_g2.set_x(_g2.get_x() - this.m_background.get_width() * 0.5);
	var _g3 = this.m_background;
	_g3.set_y(_g3.get_y() - this.m_background.get_height() * 0.5);
	this.addChild(this.m_background);
	this.m_stringSprite = new flash.display.Sprite();
	com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_stringSprite);
	this.m_band = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/learning/launcher/band.png"));
	Configs.applyScale(this.m_band);
	var _g4 = this.m_band;
	_g4.set_x(_g4.get_x() - this.m_band.get_width() / 2);
	var _g5 = this.m_band;
	_g5.set_y(_g5.get_y() + game.states.activity.learning.launcher.elements.LaunchObject.BAND_OFFSET);
	this.addChild(this.m_band);
	this.m_velocity = new flash.geom.Point(0,0);
};
$hxClasses["game.states.activity.learning.launcher.elements.LaunchObject"] = game.states.activity.learning.launcher.elements.LaunchObject;
game.states.activity.learning.launcher.elements.LaunchObject.__name__ = ["game","states","activity","learning","launcher","elements","LaunchObject"];
game.states.activity.learning.launcher.elements.LaunchObject.__super__ = flash.display.Sprite;
game.states.activity.learning.launcher.elements.LaunchObject.prototype = $extend(flash.display.Sprite.prototype,{
	activate: function(target,isCorrect) {
		this.m_isCorrect = isCorrect;
		this.m_startPos = new flash.geom.Point(this.get_x(),this.get_y());
		this.m_target = target;
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.drawStrings();
	}
	,deactivate: function() {
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.GAME[0],this.m_stringSprite);
		this.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
	}
	,onMouseDown: function(e) {
		this.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		var drawEvent = new game.events.LearningEvent("LEARNING_OBJECT_DRAWN");
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().dispatchEvent(drawEvent);
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,onEnterFrame: function(e) {
		if(this.get_stage().get_mouseY() > game.states.activity.learning.launcher.elements.LaunchObject.MAX_VERTICAL_LAUNCH_DISTANCE) {
			com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
			com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
			this.setPullPosition(this.get_stage().get_mouseX(),this.get_stage().get_mouseY());
			this.launch();
		} else if(this.get_stage().get_mouseY() > this.m_startPos.y + game.states.activity.learning.launcher.elements.LaunchObject.MIN_VERTICAL_LAUNCH_DISTANCE) this.setPullPosition(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()); else this.setPullPosition(this.get_stage().get_mouseX(),(this.m_startPos.y + game.states.activity.learning.launcher.elements.LaunchObject.MIN_VERTICAL_LAUNCH_DISTANCE) / 1.0);
	}
	,onMouseUp: function(e) {
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		if(flash.geom.Point.distance(new flash.geom.Point(this.get_x(),this.get_y()),this.m_startPos) > 50) this.launch(); else {
			com.firstplayable.hxlib.haxe.app.Application.app.get_stage().dispatchEvent(new game.events.LearningEvent("LEARNING_OBJECT_RESET"));
			this.reset();
			this.drawStrings();
		}
	}
	,reset: function() {
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.set_x(this.m_startPos.x);
		this.set_y(this.m_startPos.y);
		this.m_velocity.x = 0;
		this.m_velocity.y = 0;
	}
	,launch: function() {
		this.m_band.set_visible(false);
		var newEvent = new game.events.LearningEvent("LEARNING_OBJECT_LAUNCHED");
		newEvent.selectedObject = this;
		this.get_stage().dispatchEvent(newEvent);
		this.m_velocity.x = (this.m_startPos.x - this.get_x()) / 2;
		this.m_velocity.y = (this.m_startPos.y - this.get_y()) / 2;
		if(this.m_velocity.get_length() < game.states.activity.learning.launcher.elements.LaunchObject.MIN_VERTICAL_LAUNCH_DISTANCE) {
			if(this.m_velocity.get_length() > 0) this.m_velocity.normalize(game.states.activity.learning.launcher.elements.LaunchObject.MIN_VERTICAL_LAUNCH_DISTANCE); else this.m_velocity.y = -game.states.activity.learning.launcher.elements.LaunchObject.MIN_VERTICAL_LAUNCH_DISTANCE;
		}
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		this.cleanUpString();
	}
	,cleanUpString: function() {
		this.m_stringSprite.get_graphics().clear();
		if(this.m_stringSprite.parent != null) com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.GAME[0],this.m_stringSprite);
	}
	,update: function(e) {
		var newX;
		var _g = this;
		newX = _g.set_x(_g.get_x() + this.m_velocity.x);
		var newY;
		var _g1 = this;
		newY = _g1.set_y(_g1.get_y() + this.m_velocity.y);
		var maxWidth = com.firstplayable.hxlib.haxe.app.Application.app.get_stage().get_stageWidth() * 1.0;
		var maxHeight = com.firstplayable.hxlib.haxe.app.Application.app.get_stage().get_stageHeight() * 1.0;
		if(newX < 0 || newX > maxWidth) {
			if(newX < 0) newX = 0; else newX = maxWidth;
			++this.m_numBounces;
			this.m_velocity.x *= -1;
		}
		if(newY < 0 || newY > maxHeight) {
			if(newY < 0) newY = 0; else newY = maxHeight;
			++this.m_numBounces;
			this.m_velocity.y *= -1;
		}
		var currentPosition = new flash.geom.Point(this.get_x(),this.get_y());
		if(this.m_numBounces >= 2) {
			var targetAngle = com.firstplayable.hxlib.haxe.utils.MathUtils.pointAt(currentPosition,this.m_target) * 0.0174532925;
			var currVelocity = Math.sqrt(Math.pow(this.m_velocity.x,2) + Math.pow(this.m_velocity.y,2));
			this.m_velocity.x = currVelocity * Math.cos(targetAngle);
			this.m_velocity.y = currVelocity * Math.sin(targetAngle);
		}
		this.set_x(newX);
		this.set_y(newY);
		var distanceFromTarget = flash.geom.Point.distance(currentPosition,this.m_target);
		if(distanceFromTarget < game.states.activity.learning.launcher.elements.LaunchObject.ACCURACY_THRESHOLD) {
			com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
			this.onCollide();
		}
	}
	,onCollide: function() {
		var _g = this;
		var newEvent = new game.events.LearningEvent("LEARNING_TARGET_REACHED");
		newEvent.wasCorrect = this.m_isCorrect;
		this.get_stage().dispatchEvent(newEvent);
		if(this.m_isCorrect) this.set_visible(false); else motion.Actuate.tween(this,0.4,{ y : this.get_y() + 50.}).onComplete(function() {
			_g.set_visible(false);
		});
	}
	,setPullPosition: function(xPos,yPos) {
		var distanceFromStart = Math.sqrt(Math.pow(this.m_startPos.x - xPos,2) + Math.pow(this.m_startPos.y - yPos,2));
		if(distanceFromStart > 150.) distanceFromStart = 150.; else distanceFromStart = distanceFromStart;
		var launchAngle = com.firstplayable.hxlib.haxe.utils.MathUtils.degreesToRadians(com.firstplayable.hxlib.haxe.utils.MathUtils.pointAt(this.m_startPos,new flash.geom.Point(xPos,yPos)));
		this.set_x(this.m_startPos.x + distanceFromStart * Math.cos(launchAngle));
		this.set_y(this.m_startPos.y + distanceFromStart * Math.sin(launchAngle));
		this.drawStrings();
	}
	,drawStrings: function() {
		this.m_stringSprite.mouseEnabled = false;
		this.m_stringSprite.get_graphics().clear();
		this.m_stringSprite.get_graphics().lineStyle(10.,16777215);
		this.m_stringSprite.get_graphics().moveTo(this.m_startPos.x + game.states.activity.learning.launcher.elements.LaunchObject.LEFT_BAND_POS.x,this.m_startPos.y + game.states.activity.learning.launcher.elements.LaunchObject.LEFT_BAND_POS.y);
		this.m_stringSprite.get_graphics().lineTo(this.get_x() + this.m_band.get_x() + 10,this.get_y() + this.m_band.get_y() + this.m_band.get_height() / 2);
		this.m_stringSprite.get_graphics().moveTo(this.m_startPos.x + game.states.activity.learning.launcher.elements.LaunchObject.RIGHT_BAND_POS.x,this.m_startPos.y + game.states.activity.learning.launcher.elements.LaunchObject.RIGHT_BAND_POS.y);
		this.m_stringSprite.get_graphics().lineTo(this.get_x() + this.m_band.get_x() + this.m_band.get_width() - 10,this.get_y() + this.m_band.get_y() + this.m_band.get_height() / 2);
		this.m_stringSprite.get_graphics().endFill();
	}
	,__class__: game.states.activity.learning.launcher.elements.LaunchObject
});
game.states.activity.learning.launcher.elements.LaunchTarget = function() {
	this.BTTM_BG_OFFSET = new flash.geom.Point(0,10.);
	flash.display.Sprite.call(this);
	game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_TOP_POS.x = -40.;
	game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_TOP_POS.y = -40.;
	game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_TOP_POS.x = 25.;
	game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_TOP_POS.y = -40.;
	game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_BTTM_POS.x = -40.;
	game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_BTTM_POS.y = 55.;
	game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_BTTM_POS.x = 25.;
	game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_BTTM_POS.y = 55.;
	this.m_background = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/learning/launcher/launcherTarget.png"));
	Configs.applyScale(this.m_background);
	this.m_background.set_x(-(this.m_background.get_width() / 2));
	this.m_background.set_y(-(this.m_background.get_height() / 2));
	this.addChild(this.m_background);
	this.m_splat = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/activities/learning/launcher/splat.png"));
	Configs.applyScale(this.m_splat);
	var _g = this.m_splat;
	_g.set_scaleX(_g.get_scaleX() * 2);
	var _g1 = this.m_splat;
	_g1.set_scaleY(_g1.get_scaleY() * 2);
	this.m_splat.set_x(-(this.m_splat.get_width() / 2));
	this.m_splat.set_y(-(this.m_splat.get_height() / 2));
	this.addChild(this.m_splat);
	this.m_leftEye = new flash.display.Sprite();
	this.m_rightEye = new flash.display.Sprite();
	this.addChild(this.m_leftEye);
	this.addChild(this.m_rightEye);
	this.m_text = new flash.text.TextField();
	this.m_text.set_defaultTextFormat(game.FontMap.LEARNING_TARGET);
	this.m_text.set_text("NO_WORD");
	this.addChild(this.m_text);
};
$hxClasses["game.states.activity.learning.launcher.elements.LaunchTarget"] = game.states.activity.learning.launcher.elements.LaunchTarget;
game.states.activity.learning.launcher.elements.LaunchTarget.__name__ = ["game","states","activity","learning","launcher","elements","LaunchTarget"];
game.states.activity.learning.launcher.elements.LaunchTarget.__super__ = flash.display.Sprite;
game.states.activity.learning.launcher.elements.LaunchTarget.prototype = $extend(flash.display.Sprite.prototype,{
	setText: function(newText) {
		this.m_text.set_text(newText);
		this.m_text.set_x(-(this.m_text.get_textWidth() * 0.5));
		this.m_text.set_y(-25.);
		if(this.m_splat.parent == this) this.removeChild(this.m_splat);
		if(this.m_background.parent != this) this.addChildAt(this.m_background,0);
	}
	,getText: function() {
		return this.m_text.get_text();
	}
	,generateEyes: function(onTop) {
		if(onTop == null) onTop = true;
		var randEye1 = Std.random(5);
		var randEye2 = Std.random(5);
		var eye1 = new flash.display.Bitmap(openfl.Assets.getBitmapData(game.Manifest.IMG_ACTIVITY_BLOB_EYES[randEye1]));
		var eye2 = new flash.display.Bitmap(openfl.Assets.getBitmapData(game.Manifest.IMG_ACTIVITY_BLOB_EYES[randEye2]));
		eye1.set_scaleX(1.0);
		eye1.set_scaleY(1.0);
		eye2.set_scaleX(1.0);
		eye2.set_scaleY(1.0);
		while(this.m_leftEye.__children.length > 0) this.m_leftEye.removeChildAt(0);
		while(this.m_rightEye.__children.length > 0) this.m_rightEye.removeChildAt(0);
		if(!onTop) {
			this.m_background.set_y(-(this.m_background.get_height() / 2) + this.BTTM_BG_OFFSET.y);
			this.m_splat.set_y(-(this.m_splat.get_height() / 2) + this.BTTM_BG_OFFSET.y);
			this.m_text.set_y(-25. + this.BTTM_BG_OFFSET.y);
		} else {
			this.m_background.set_y(-(this.m_background.get_height() / 2));
			this.m_splat.set_y(-(this.m_splat.get_height() / 2) + this.BTTM_BG_OFFSET.y);
		}
		this.m_leftEye.addChild(eye1);
		this.m_rightEye.addChild(eye2);
		eye1.set_x(-eye1.get_width() * 0.5);
		eye1.set_y(-eye1.get_height() * 0.5);
		eye2.set_x(-eye2.get_width() * 0.5);
		eye2.set_y(-eye2.get_height() * 0.5);
		this.m_leftEye.set_visible(true);
		this.m_leftEye.alpha = 1;
		this.m_leftEye.set_x((onTop?game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_TOP_POS.x:game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_BTTM_POS.x) + Math.random() * 15. - 7.5);
		this.m_leftEye.set_y((onTop?game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_TOP_POS.y:game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_BTTM_POS.y) + Math.random() * 15. - 7.5);
		this.m_leftEye.set_scaleX(Math.random() * 0.5 + 0.75);
		this.m_leftEye.set_scaleY(this.m_leftEye.get_scaleX());
		this.m_leftEye.set_rotation(Math.random() * 90 - 45);
		this.m_rightEye.set_visible(true);
		this.m_rightEye.alpha = 1;
		this.m_rightEye.set_x((onTop?game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_TOP_POS.x:game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_BTTM_POS.x) + Math.random() * 15. - 7.5);
		this.m_rightEye.set_y((onTop?game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_TOP_POS.y:game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_BTTM_POS.y) + Math.random() * 15. - 7.5);
		this.m_rightEye.set_scaleX(Math.random() * 0.5 + 0.75);
		this.m_rightEye.set_scaleY(this.m_rightEye.get_scaleX());
		this.m_rightEye.set_rotation(Math.random() * 90 - 45);
	}
	,showCorrectFeedback: function() {
		if(this.m_background.parent == this) this.removeChild(this.m_background);
		if(this.m_splat.parent != this) this.addChildAt(this.m_splat,0);
		haxe.Timer.delay($bind(this,this.dropEyes),750);
	}
	,dropEyes: function() {
		motion.Actuate.tween(this.m_leftEye,0.75,{ y : this.m_leftEye.get_y() + 700.});
		motion.Actuate.tween(this.m_rightEye,0.75,{ y : this.m_leftEye.get_y() + 700.});
	}
	,__class__: game.states.activity.learning.launcher.elements.LaunchTarget
});
game.states.activity.learning.launcher.elements.Sentence = function() {
	flash.display.Sprite.call(this);
	game.states.activity.learning.launcher.elements.Sentence.SENTENCE_CENTER = new flash.geom.Point(com.firstplayable.hxlib.haxe.app.Application.app.get_appSize().x * 0.5,com.firstplayable.hxlib.haxe.app.Application.app.get_appSize().y * 0.25);
	this.generateElements();
};
$hxClasses["game.states.activity.learning.launcher.elements.Sentence"] = game.states.activity.learning.launcher.elements.Sentence;
game.states.activity.learning.launcher.elements.Sentence.__name__ = ["game","states","activity","learning","launcher","elements","Sentence"];
game.states.activity.learning.launcher.elements.Sentence.__super__ = flash.display.Sprite;
game.states.activity.learning.launcher.elements.Sentence.prototype = $extend(flash.display.Sprite.prototype,{
	setSentence: function(word,sentence) {
		var _g1 = 0;
		var _g = this.m_textFields.length;
		while(_g1 < _g) {
			var tfi = _g1++;
			this.m_textFields[tfi].set_text("");
		}
		var nbspWord = word;
		nbspWord = StringTools.replace(nbspWord," ","�");
		sentence = StringTools.replace(sentence,word,nbspWord);
		var words = sentence.split(" ");
		var cursorX = 0;
		var cursorY = 0;
		var numLines = 1;
		var curTFIdx = 0;
		var lineHeight = 0;
		var maxLineWidth = 0;
		while(words.length > 0) {
			var needsLinefeed = false;
			var peekWord = words[0];
			peekWord = StringTools.replace(peekWord,"�"," ");
			var curTF = this.m_textFields[curTFIdx];
			var firstThingOnLine = cursorX == 0 && curTF.length == 0;
			if(StringTools.startsWith(peekWord.toLowerCase(),word.toLowerCase())) {
				this.target.setText(peekWord);
				if(curTF.get_text().length > 0 && curTFIdx < this.m_textFields.length) {
					curTF.set_x(cursorX);
					curTF.set_y(cursorY);
					cursorX += curTF.get_textWidth() + 20.;
					++curTFIdx;
					curTF = null;
				}
				var forceFit = firstThingOnLine || numLines >= 2;
				if(forceFit || cursorX + this.target.get_width() <= 855.) {
					var eyesTop = numLines == 1;
					this.target.generateEyes(eyesTop);
					this.target.set_x(cursorX);
					this.target.set_y(cursorY);
					cursorX += this.target.get_width() + 20.;
					words.shift();
				} else needsLinefeed = true;
			} else {
				var priorTFText = curTF.get_text();
				if(priorTFText.length > 0) peekWord = " " + peekWord;
				curTF.appendText(peekWord);
				lineHeight = curTF.get_textHeight();
				var forceFit1 = firstThingOnLine || numLines >= 2 || curTFIdx >= this.m_textFields.length - 1;
				if(forceFit1 || cursorX + curTF.get_textWidth() <= 855.) words.shift(); else {
					curTF.set_text(priorTFText);
					curTF.set_x(cursorX);
					curTF.set_y(cursorY);
					cursorX += curTF.get_textWidth();
					++curTFIdx;
					curTF = null;
					needsLinefeed = true;
				}
			}
			if(needsLinefeed) {
				if(cursorX > maxLineWidth) maxLineWidth = cursorX;
				cursorY += lineHeight + 20.;
				cursorX = 0;
				++numLines;
			}
		}
		var curTF1 = this.m_textFields[curTFIdx];
		curTF1.set_x(cursorX);
		curTF1.set_y(cursorY);
		cursorX += curTF1.get_textWidth();
		if(cursorX > maxLineWidth) maxLineWidth = cursorX;
		if(maxLineWidth > 855.) maxLineWidth = 855.;
		var blockHeight = cursorY + lineHeight;
		var baseX = game.states.activity.learning.launcher.elements.Sentence.SENTENCE_CENTER.x - maxLineWidth / 2;
		var baseY = game.states.activity.learning.launcher.elements.Sentence.SENTENCE_CENTER.y - blockHeight / 2;
		var _g11 = 0;
		var _g2 = this.m_textFields.length;
		while(_g11 < _g2) {
			var tfi1 = _g11++;
			var _g21 = this.m_textFields[tfi1];
			_g21.set_x(_g21.get_x() + baseX);
			var _g22 = this.m_textFields[tfi1];
			_g22.set_y(_g22.get_y() + baseY);
		}
		var _g3 = this.target;
		_g3.set_x(_g3.get_x() + (baseX + this.target.get_width() / 2));
		var _g4 = this.target;
		_g4.set_y(_g4.get_y() + (baseY + lineHeight / 2));
	}
	,show: function() {
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this);
	}
	,hide: function() {
		com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.GAME[0],this);
	}
	,generateElements: function() {
		this.target = new game.states.activity.learning.launcher.elements.LaunchTarget();
		this.addChild(this.target);
		var this1;
		this1 = new Array(3);
		this.m_textFields = this1;
		var _g1 = 0;
		var _g = this.m_textFields.length;
		while(_g1 < _g) {
			var tfi = _g1++;
			var val = new flash.text.TextField();
			this.m_textFields[tfi] = val;
			this.m_textFields[tfi].set_defaultTextFormat(game.FontMap.LEARNING_SENTENCE);
			this.addChild(this.m_textFields[tfi]);
		}
	}
	,getTargetPosition: function() {
		return new flash.geom.Point(this.get_x() + this.target.get_x(),this.get_y() + this.target.get_y());
	}
	,__class__: game.states.activity.learning.launcher.elements.Sentence
});
game.states.loading = {};
game.states.loading.Guilford_Regular_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["game.states.loading.Guilford_Regular_ttf"] = game.states.loading.Guilford_Regular_ttf;
game.states.loading.Guilford_Regular_ttf.__name__ = ["game","states","loading","Guilford_Regular_ttf"];
game.states.loading.Guilford_Regular_ttf.__super__ = flash.text.Font;
game.states.loading.Guilford_Regular_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: game.states.loading.Guilford_Regular_ttf
});
game.states.loading.Guilford_Bold_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["game.states.loading.Guilford_Bold_ttf"] = game.states.loading.Guilford_Bold_ttf;
game.states.loading.Guilford_Bold_ttf.__name__ = ["game","states","loading","Guilford_Bold_ttf"];
game.states.loading.Guilford_Bold_ttf.__super__ = flash.text.Font;
game.states.loading.Guilford_Bold_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: game.states.loading.Guilford_Bold_ttf
});
game.states.loading.Backdrop_png = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(game.states.loading.Backdrop_png.preload != null) {
		this.___textureBuffer.width = Std["int"](game.states.loading.Backdrop_png.preload.get_width());
		this.___textureBuffer.height = Std["int"](game.states.loading.Backdrop_png.preload.get_height());
		this.rect = new flash.geom.Rectangle(0,0,game.states.loading.Backdrop_png.preload.get_width(),game.states.loading.Backdrop_png.preload.get_height());
		this.setPixels(this.rect,game.states.loading.Backdrop_png.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(game.states.loading.Backdrop_png.resourceName));
		if(onload != null && !(typeof(onload) == "boolean")) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["game.states.loading.Backdrop_png"] = game.states.loading.Backdrop_png;
game.states.loading.Backdrop_png.__name__ = ["game","states","loading","Backdrop_png"];
game.states.loading.Backdrop_png.__super__ = flash.display.BitmapData;
game.states.loading.Backdrop_png.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: game.states.loading.Backdrop_png
});
game.states.loading.Exit_png = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(game.states.loading.Exit_png.preload != null) {
		this.___textureBuffer.width = Std["int"](game.states.loading.Exit_png.preload.get_width());
		this.___textureBuffer.height = Std["int"](game.states.loading.Exit_png.preload.get_height());
		this.rect = new flash.geom.Rectangle(0,0,game.states.loading.Exit_png.preload.get_width(),game.states.loading.Exit_png.preload.get_height());
		this.setPixels(this.rect,game.states.loading.Exit_png.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(game.states.loading.Exit_png.resourceName));
		if(onload != null && !(typeof(onload) == "boolean")) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["game.states.loading.Exit_png"] = game.states.loading.Exit_png;
game.states.loading.Exit_png.__name__ = ["game","states","loading","Exit_png"];
game.states.loading.Exit_png.__super__ = flash.display.BitmapData;
game.states.loading.Exit_png.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: game.states.loading.Exit_png
});
game.states.loading.Loading_png = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(game.states.loading.Loading_png.preload != null) {
		this.___textureBuffer.width = Std["int"](game.states.loading.Loading_png.preload.get_width());
		this.___textureBuffer.height = Std["int"](game.states.loading.Loading_png.preload.get_height());
		this.rect = new flash.geom.Rectangle(0,0,game.states.loading.Loading_png.preload.get_width(),game.states.loading.Loading_png.preload.get_height());
		this.setPixels(this.rect,game.states.loading.Loading_png.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(game.states.loading.Loading_png.resourceName));
		if(onload != null && !(typeof(onload) == "boolean")) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["game.states.loading.Loading_png"] = game.states.loading.Loading_png;
game.states.loading.Loading_png.__name__ = ["game","states","loading","Loading_png"];
game.states.loading.Loading_png.__super__ = flash.display.BitmapData;
game.states.loading.Loading_png.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: game.states.loading.Loading_png
});
game.states.loading.Next_png = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(game.states.loading.Next_png.preload != null) {
		this.___textureBuffer.width = Std["int"](game.states.loading.Next_png.preload.get_width());
		this.___textureBuffer.height = Std["int"](game.states.loading.Next_png.preload.get_height());
		this.rect = new flash.geom.Rectangle(0,0,game.states.loading.Next_png.preload.get_width(),game.states.loading.Next_png.preload.get_height());
		this.setPixels(this.rect,game.states.loading.Next_png.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(game.states.loading.Next_png.resourceName));
		if(onload != null && !(typeof(onload) == "boolean")) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["game.states.loading.Next_png"] = game.states.loading.Next_png;
game.states.loading.Next_png.__name__ = ["game","states","loading","Next_png"];
game.states.loading.Next_png.__super__ = flash.display.BitmapData;
game.states.loading.Next_png.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: game.states.loading.Next_png
});
game.states.loading.Prev_png = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(game.states.loading.Prev_png.preload != null) {
		this.___textureBuffer.width = Std["int"](game.states.loading.Prev_png.preload.get_width());
		this.___textureBuffer.height = Std["int"](game.states.loading.Prev_png.preload.get_height());
		this.rect = new flash.geom.Rectangle(0,0,game.states.loading.Prev_png.preload.get_width(),game.states.loading.Prev_png.preload.get_height());
		this.setPixels(this.rect,game.states.loading.Prev_png.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(game.states.loading.Prev_png.resourceName));
		if(onload != null && !(typeof(onload) == "boolean")) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["game.states.loading.Prev_png"] = game.states.loading.Prev_png;
game.states.loading.Prev_png.__name__ = ["game","states","loading","Prev_png"];
game.states.loading.Prev_png.__super__ = flash.display.BitmapData;
game.states.loading.Prev_png.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: game.states.loading.Prev_png
});
game.states.loading.LoadingState = function() {
	this.m_curStory = 0;
	NMEPreloader.call(this);
	flash.text.Font.registerFont(game.states.loading.Guilford_Regular_ttf);
	flash.text.Font.registerFont(game.states.loading.Guilford_Bold_ttf);
	this.m_background = new flash.display.Bitmap(new game.states.loading.Backdrop_png(1024,704));
	var prev = new flash.display.Bitmap(new game.states.loading.Prev_png(83,70));
	this.m_previousBttn = new com.firstplayable.hxlib.haxe.display.GraphicButton(prev,null,null,null,null,$bind(this,this.previousStory));
	var next = new flash.display.Bitmap(new game.states.loading.Next_png(83,70));
	this.m_nextBttn = new com.firstplayable.hxlib.haxe.display.GraphicButton(next,null,null,null,null,$bind(this,this.nextStory));
	var exit = new flash.display.Bitmap(new game.states.loading.Exit_png(89,86));
	this.m_continueBttn = new com.firstplayable.hxlib.haxe.display.GraphicButton(exit,null,null,null,null,$bind(this,this.finishState));
	this.m_storyText = new flash.text.TextField();
	this.m_loaderAnimation = new flash.display.Sprite();
	this.m_loaderRes = new flash.display.Bitmap(new game.states.loading.Loading_png(100,100));
};
$hxClasses["game.states.loading.LoadingState"] = game.states.loading.LoadingState;
game.states.loading.LoadingState.__name__ = ["game","states","loading","LoadingState"];
game.states.loading.LoadingState.__super__ = NMEPreloader;
game.states.loading.LoadingState.prototype = $extend(NMEPreloader.prototype,{
	onInit: function() {
		NMEPreloader.prototype.onInit.call(this);
		var _g = this.outline;
		_g.set_y(_g.get_y() - 250.);
		var _g1 = this.progress;
		_g1.set_y(_g1.get_y() - 250.);
		this.m_previousBttn.set_x(15.);
		this.m_previousBttn.set_y(550.);
		this.m_nextBttn.set_x(750.);
		this.m_nextBttn.set_y(this.m_previousBttn.get_y());
		this.m_continueBttn.set_x(925.);
		this.m_continueBttn.set_y(600.);
		this.m_storyText.multiline = true;
		this.m_storyText.set_wordWrap(true);
		this.m_storyText.set_defaultTextFormat(game.FontMap.STORY_SECTION);
		this.m_storyText.set_text(game.states.loading.LoadingState.m_strings[0]);
		this.m_loaderAnimation.set_x(960.);
		this.m_loaderAnimation.set_y(640.);
		haxe.Timer.delay($bind(this,this.onDisplay),50);
	}
	,onDisplay: function() {
		if(Math.isNaN(this.m_loaderRes.get_width())) {
			haxe.Timer.delay($bind(this,this.onDisplay),100);
			return;
		}
		Configs.applyScale(this.m_background);
		Configs.applyScale(this.m_previousBttn);
		Configs.applyScale(this.m_nextBttn);
		Configs.applyScale(this.m_loaderAnimation);
		Configs.applyScale(this.m_continueBttn);
		var storyOff = 140.;
		this.m_storyText.set_x(storyOff);
		this.m_storyText.set_y(this.m_previousBttn.get_y() - 20.);
		this.m_storyText.set_width(580.);
		this.m_loaderRes.set_x(-50);
		this.m_loaderRes.set_y(-50);
		this.m_loaderAnimation.addChild(this.m_loaderRes);
		flash.Lib.get_current().get_stage().set_scaleX(1.);
		flash.Lib.get_current().get_stage().set_scaleY(1.);
		flash.Lib.get_current().get_stage().addChildAt(this.m_background,0);
		flash.Lib.get_current().get_stage().addChild(this.m_storyText);
		flash.Lib.get_current().get_stage().addChild(this.m_previousBttn);
		flash.Lib.get_current().get_stage().addChild(this.m_nextBttn);
		flash.Lib.get_current().get_stage().addChild(this.m_loaderAnimation);
		this.m_previousBttn.set_enabled(false);
		this.m_previousBttn.set_visible(false);
		flash.Lib.get_current().get_stage().addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.updateLoadingAnim));
		flash.Lib.get_current().get_stage().addEventListener(game.events.GameStartEvent.GAME_START,$bind(this,this.gameStart));
	}
	,dispose: function() {
		flash.Lib.get_current().get_stage().removeChild(this.m_background);
		flash.Lib.get_current().get_stage().removeChild(this.m_storyText);
		flash.Lib.get_current().get_stage().removeChild(this.m_previousBttn);
		flash.Lib.get_current().get_stage().removeChild(this.m_nextBttn);
		flash.Lib.get_current().get_stage().removeChild(this.m_continueBttn);
		this.m_background.bitmapData.dispose();
		this.m_loaderRes.bitmapData.dispose();
		this.m_background = null;
		this.m_loaderRes = null;
		this.m_storyText = null;
		this.m_previousBttn = null;
		this.m_nextBttn = null;
		this.m_continueBttn = null;
		game.states.loading.LoadingState.m_strings = null;
	}
	,previousStory: function(caller) {
		if(this.m_curStory == game.states.loading.LoadingState.m_strings.length - 1) {
			this.m_nextBttn.set_enabled(true);
			this.m_nextBttn.set_visible(true);
		}
		this.m_curStory--;
		this.m_storyText.set_text(game.states.loading.LoadingState.m_strings[this.m_curStory]);
		if(this.m_curStory <= 0) {
			this.m_previousBttn.set_enabled(false);
			this.m_previousBttn.set_visible(false);
		}
	}
	,nextStory: function(caller) {
		if(this.m_curStory == 0) {
			this.m_previousBttn.set_enabled(true);
			this.m_previousBttn.set_visible(true);
		}
		this.m_curStory++;
		this.m_storyText.set_text(game.states.loading.LoadingState.m_strings[this.m_curStory]);
		if(this.m_curStory >= game.states.loading.LoadingState.m_strings.length - 1) {
			this.m_nextBttn.set_enabled(false);
			this.m_nextBttn.set_visible(false);
		}
	}
	,updateLoadingAnim: function(e) {
		var _g = this.m_loaderAnimation;
		_g.set_rotation(_g.get_rotation() + 45);
	}
	,finishState: function(caller) {
		this.dispose();
		com.firstplayable.hxlib.haxe.state.StateManager.setState(game.states.GameStates.LANDING);
	}
	,primeAudio: function(e) {
		game.AudioMan.get("sounds/general/CLICK.mp3").play();
		var doc = window.document;
		doc.onclick = null;
	}
	,gameStart: function(e) {
		flash.Lib.get_current().get_stage().removeEventListener(game.events.GameStartEvent.GAME_START,$bind(this,this.gameStart));
		flash.Lib.get_current().get_stage().removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.updateLoadingAnim));
		flash.Lib.get_current().get_stage().removeChild(this.m_loaderAnimation);
		flash.Lib.get_current().get_stage().addChild(this.m_continueBttn);
		var doc = window.document;
		doc.onclick = $bind(this,this.primeAudio);
	}
	,__class__: game.states.loading.LoadingState
});
game.states.unitselect = {};
game.states.unitselect.UnitSelectState = function(stateId) {
	this.state = stateId;
};
$hxClasses["game.states.unitselect.UnitSelectState"] = game.states.unitselect.UnitSelectState;
game.states.unitselect.UnitSelectState.__name__ = ["game","states","unitselect","UnitSelectState"];
game.states.unitselect.UnitSelectState.__interfaces__ = [com.firstplayable.hxlib.haxe.state.IGameState];
game.states.unitselect.UnitSelectState.prototype = {
	get_id: function() {
		return this.state[1];
	}
	,get_name: function() {
		return this.state[0];
	}
	,init: function() {
	}
	,dispose: function() {
	}
	,enter: function(p) {
		this.m_buildStamp = new flash.text.TextField();
		this.m_buildStamp.set_defaultTextFormat(game.FontMap.BUILD_STAMP);
		this.m_buildStamp.set_text("updated " + HxOverrides.substr("2014-08-28 17:04:35",0,10));
		this.m_buildStamp.set_y(690.);
		this.m_listFill = new flash.display.Shape();
		this.m_listFill.set_x(game.states.unitselect.UnitSelectState.FADE_AREA.x);
		this.m_listFill.set_y(game.states.unitselect.UnitSelectState.FADE_AREA.y);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_listFill);
		var unitBg = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/unitselect/backdrop.png"));
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],unitBg);
		this.m_selector = new flash.display.Sprite();
		this.m_fader = new flash.display.Shape();
		this.m_fader.set_x(game.states.unitselect.UnitSelectState.FADE_AREA.x);
		this.m_fader.set_y(game.states.unitselect.UnitSelectState.FADE_AREA.y);
		this.m_fader.get_graphics().beginFill(16777215);
		this.m_fader.get_graphics().drawRect(0,0,game.states.unitselect.UnitSelectState.FADE_AREA.width,game.states.unitselect.UnitSelectState.FADE_AREA.height);
		this.m_fader.get_graphics().endFill();
		this.m_fader.set_visible(false);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.HUD[0],this.m_fader);
		this.genUnits();
		this.selectUnit(this.m_units[game.GlobalVars.activeUnit].button,false);
		this.setupSelector();
		this.genActButtons();
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.HUD[0],this.m_buildStamp);
		unitBg.addEventListener(new EReg("Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile","i").match(window.navigator.userAgent)?"touchBegin":flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.checkLessonHit));
	}
	,exit: function() {
		motion.Actuate.stop(this.m_selector);
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.checkLessonHit));
		com.firstplayable.hxlib.haxe.app.Application.app.get_stage().removeEventListener("touchBegin",$bind(this,this.checkLessonHit));
		com.firstplayable.hxlib.haxe.display.GameDisplay.resetLayer(game.LayerName.GAME[0]);
		com.firstplayable.hxlib.haxe.display.GameDisplay.resetLayer(game.LayerName.HUD[0]);
	}
	,checkLessonHit: function(m) {
		var _g1 = 0;
		var _g = game.states.unitselect.UnitSelectState.HIT_LAYOUT.length;
		while(_g1 < _g) {
			var i = _g1++;
			var listArea = game.states.unitselect.UnitSelectState.HIT_LAYOUT[i];
			if(listArea.contains(m.stageX,m.stageY)) {
				this.userSelectList(this.m_unitLists[i].button);
				return;
			}
		}
	}
	,setupSelector: function() {
		var selectImg = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/unitselect/selector.png"));
		selectImg.set_x(0.5 * -selectImg.get_width());
		selectImg.set_y(0.5 * -selectImg.get_height());
		var selectPos = game.states.unitselect.UnitSelectState.TRAVEL_LAYOUT[game.GlobalVars.activeList];
		this.m_selector.set_x(selectPos.x);
		this.m_selector.set_y(selectPos.y);
		this.m_selector.addChild(selectImg);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_selector);
	}
	,onSelectUnit: function(caller) {
		game.GlobalVars.activeList = 0;
		this.selectUnit(caller);
	}
	,selectUnit: function(g,fade) {
		if(fade == null) fade = true;
		if(fade) game.AudioMan.get("sounds/general/CLICK.mp3").play();
		var lastUnit = game.GlobalVars.activeUnit;
		var newUnit = this.getUnitIndex(g);
		this.m_units[lastUnit].set_status(game.states.unitselect.elements.UnitStatus.DESELECT);
		this.m_units[newUnit].set_status(game.states.unitselect.elements.UnitStatus.SELECT);
		game.GlobalVars.activeUnit = newUnit;
		if(!fade) {
			this.swapLists(newUnit);
			return;
		}
		this.m_fader.alpha = 0;
		motion.Actuate.tween(this.m_fader,0.3,{ alpha : 1.0}).autoVisible(true).ease(motion.easing.Linear.get_easeNone()).onComplete($bind(this,this.swapLists),[newUnit]);
	}
	,swapLists: function(newUnit) {
		this.genList(newUnit);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_selector);
		this.selectList(this.m_unitLists[game.GlobalVars.activeList].button);
		this.m_listFill.get_graphics().clear();
		this.m_listFill.get_graphics().beginFill(game.states.unitselect.UnitSelectState.FILL_AREA_COLORS[newUnit]);
		this.m_listFill.get_graphics().drawRect(0,0,game.states.unitselect.UnitSelectState.FADE_AREA.width,game.states.unitselect.UnitSelectState.FADE_AREA.height);
		this.m_listFill.get_graphics().endFill();
		this.m_fader.alpha = 1.0;
		motion.Actuate.tween(this.m_fader,0.3,{ alpha : 0.0}).autoVisible(true).ease(motion.easing.Linear.get_easeNone());
	}
	,selectList: function(g) {
		var lastList = game.GlobalVars.activeList;
		var newList = this.getListIndex(g);
		var listPos = game.states.unitselect.UnitSelectState.TRAVEL_LAYOUT[newList];
		motion.Actuate.tween(this.m_selector,0.5,{ x : listPos.x, y : listPos.y});
		this.m_unitLists[lastList].set_status(game.states.unitselect.elements.UnitListStatus.DESELECT);
		this.m_unitLists[newList].set_status(game.states.unitselect.elements.UnitListStatus.SELECT);
		game.GlobalVars.activeList = newList;
		this.updateActButtons();
	}
	,updateActButtons: function() {
		if(this.m_clozeBtn != null && this.m_activeBtn != null) {
			var progress = game.db.Progression.getListProgress(game.GlobalVars.activeList);
			var disableCloze = progress.cloze == 100 && progress.active != 100;
			var disableActive = progress.active == 100 && progress.cloze != 100;
			this.m_clozeBtn.set_enabled(!disableCloze);
			this.m_activeBtn.set_enabled(!disableActive);
			if(this.m_clozeBtn.enabled) this.m_clozeBtn.alpha = 1.0; else this.m_clozeBtn.alpha = 0.4;
			if(this.m_activeBtn.enabled) this.m_activeBtn.alpha = 1.0; else this.m_activeBtn.alpha = 0.4;
		}
	}
	,genActButtons: function() {
		this.m_clozeBtn = new com.firstplayable.hxlib.haxe.display.GraphicButton(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/unitselect/vacuumBtn_up.png")),null,null,null,null,$bind(this,this.selectActivity));
		this.m_clozeBtn.set_x(game.states.unitselect.UnitSelectState.ACT_BTNS_POS.x);
		this.m_clozeBtn.set_y(game.states.unitselect.UnitSelectState.ACT_BTNS_POS.y);
		this.m_activeBtn = new com.firstplayable.hxlib.haxe.display.GraphicButton(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/unitselect/balloonBtn_up.png")),null,null,null,null,$bind(this,this.selectActivity));
		this.m_activeBtn.set_x(this.m_clozeBtn.get_x() + this.m_clozeBtn.get_width() + 75.);
		this.m_activeBtn.set_y(this.m_clozeBtn.get_y());
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_clozeBtn);
		com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],this.m_activeBtn);
		this.updateActButtons();
	}
	,genUnits: function() {
		var gradeLabels = game.db.VocabMan.getUnitNames();
		this.m_numUnits = gradeLabels.length;
		this.m_numLists = 5;
		this.m_units = [];
		var _g1 = 0;
		var _g = this.m_numUnits;
		while(_g1 < _g) {
			var i = _g1++;
			var bUnit = new game.states.unitselect.elements.UnitElement(i + 1,gradeLabels[i],$bind(this,this.onSelectUnit));
			bUnit.set_x(game.states.unitselect.UnitSelectState.UNIT_POS.x);
			bUnit.set_y(game.states.unitselect.UnitSelectState.UNIT_POS.y + i * game.states.unitselect.UnitSelectState.UNIT_SPACING);
			bUnit.set_progress(game.db.Progression.getUnitProgress(i));
			this.m_units.push(bUnit);
			com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],bUnit);
		}
	}
	,clearOldList: function() {
		if(this.m_unitLists != null) {
			var _g = 0;
			var _g1 = this.m_unitLists;
			while(_g < _g1.length) {
				var list = _g1[_g];
				++_g;
				com.firstplayable.hxlib.haxe.display.GameDisplay.remove(game.LayerName.GAME[0],list);
			}
		}
	}
	,genList: function(unitIndex) {
		this.clearOldList();
		this.m_unitLists = [];
		var unitProgress = 0;
		var _g1 = 0;
		var _g = this.m_numLists;
		while(_g1 < _g) {
			var i = _g1++;
			var bList = new game.states.unitselect.elements.UnitListElement(i);
			var pos = game.states.unitselect.UnitSelectState.LIST_LAYOUT[i];
			bList.set_x(pos.x);
			bList.set_y(pos.y);
			var listProgress = game.db.Progression.getListProgress(i);
			bList.set_progress((listProgress.cloze + listProgress.active) / 2 | 0);
			this.m_unitLists.push(bList);
			com.firstplayable.hxlib.haxe.display.GameDisplay.attach(game.LayerName.GAME[0],bList);
		}
	}
	,userSelectList: function(caller) {
		this.selectList(caller);
	}
	,getUnitIndex: function(g) {
		var _g1 = 0;
		var _g = this.m_numUnits;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.m_units[i].button == g) return i;
		}
		com.firstplayable.hxlib.haxe.Debug.log("Button was not found in unit lists! Please look into this; not supposed to happen!",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "UnitSelectState.hx", lineNumber : 372, className : "game.states.unitselect.UnitSelectState", methodName : "getUnitIndex"});
		return 0;
	}
	,getListIndex: function(g) {
		var _g1 = 0;
		var _g = this.m_numLists;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.m_unitLists[i].button == g) return i;
		}
		com.firstplayable.hxlib.haxe.Debug.log("Button was not found in unit lists! Please look into this; not supposed to happen!",com.firstplayable.hxlib.haxe.Severity.Warn,{ fileName : "UnitSelectState.hx", lineNumber : 386, className : "game.states.unitselect.UnitSelectState", methodName : "getListIndex"});
		return 0;
	}
	,selectActivity: function(caller) {
		game.AudioMan.get("sounds/general/CLICK.mp3").play();
		game.GlobalVars.isClozeActivity = caller == this.m_clozeBtn;
		game.db.VocabMan.newWordList();
		var nextState;
		if(game.GlobalVars.isClozeActivity) nextState = game.states.GameStates.CLOZE; else nextState = game.states.GameStates.ACTIVE;
		com.firstplayable.hxlib.haxe.state.StateManager.setState(nextState);
	}
	,__class__: game.states.unitselect.UnitSelectState
	,__properties__: {get_name:"get_name",get_id:"get_id"}
};
game.states.unitselect.elements = {};
game.states.unitselect.elements.UnitStatus = $hxClasses["game.states.unitselect.elements.UnitStatus"] = { __ename__ : true, __constructs__ : ["SELECT","DESELECT"] };
game.states.unitselect.elements.UnitStatus.SELECT = ["SELECT",0];
game.states.unitselect.elements.UnitStatus.SELECT.toString = $estr;
game.states.unitselect.elements.UnitStatus.SELECT.__enum__ = game.states.unitselect.elements.UnitStatus;
game.states.unitselect.elements.UnitStatus.DESELECT = ["DESELECT",1];
game.states.unitselect.elements.UnitStatus.DESELECT.toString = $estr;
game.states.unitselect.elements.UnitStatus.DESELECT.__enum__ = game.states.unitselect.elements.UnitStatus;
game.states.unitselect.elements.UnitElement = function(unitNum,unitName,onSelect) {
	if(unitName == null) unitName = "";
	flash.display.Sprite.call(this);
	var buttonRegion = new flash.display.Sprite();
	this.button = new com.firstplayable.hxlib.haxe.display.GraphicButton(buttonRegion,null,null,null,null,onSelect);
	this.m_backdrop = new flash.display.Sprite();
	this.m_backdrop.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/unitselect/unitBtn_up.png")));
	var tListLabel = new flash.text.TextField();
	tListLabel.set_defaultTextFormat(game.FontMap.LANDING_UNIT_TITLE);
	tListLabel.set_text(unitName);
	tListLabel.set_x(game.states.unitselect.elements.UnitElement.LABEL_POS.x);
	tListLabel.set_y(game.states.unitselect.elements.UnitElement.LABEL_POS.y);
	tListLabel.set_autoSize(flash.text.TextFieldAutoSize.LEFT);
	var progParams = { width : 220, height : 12, startFillColor : 7405309};
	this.m_prog = new com.firstplayable.hxlib.haxe.display.progress.ProgressBar(com.firstplayable.hxlib.haxe.display.progress.ProgressBarType.Linear,progParams);
	this.m_prog.set_x(32.5);
	this.m_prog.set_y(47.5);
	this.m_prog.mouseEnabled = false;
	this.m_indicator = new flash.display.Sprite();
	var url = "2d/unitselect/unit" + unitNum + ".png";
	var unitImg = new flash.display.Bitmap(openfl.Assets.getBitmapData(url));
	unitImg.set_x(-unitImg.get_width() * 0.25);
	unitImg.set_y(-unitImg.get_height() * 0.25);
	this.m_indicator.addChild(unitImg);
	this.m_checkmark = new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/unitselect/unit_done.png"));
	this.m_checkmark.set_x(234.);
	this.m_checkmark.set_y(-30.);
	this.m_indicator.addChild(this.m_checkmark);
	buttonRegion.addChild(this.m_backdrop);
	buttonRegion.addChild(this.m_prog);
	buttonRegion.addChild(this.m_indicator);
	buttonRegion.addChild(tListLabel);
	this.addChild(this.button);
	this.deselect();
	this.set_progress(0);
};
$hxClasses["game.states.unitselect.elements.UnitElement"] = game.states.unitselect.elements.UnitElement;
game.states.unitselect.elements.UnitElement.__name__ = ["game","states","unitselect","elements","UnitElement"];
game.states.unitselect.elements.UnitElement.__super__ = flash.display.Sprite;
game.states.unitselect.elements.UnitElement.prototype = $extend(flash.display.Sprite.prototype,{
	set_status: function(newStatus) {
		switch(newStatus[1]) {
		case 0:
			this.select();
			break;
		case 1:
			this.deselect();
			break;
		}
		return this.status = newStatus;
	}
	,set_progress: function(perc) {
		this.progress = perc;
		this.updateMeter();
		return this.progress;
	}
	,updateMeter: function() {
		this.m_prog.set_progress(this.progress);
		this.m_checkmark.set_visible(this.progress == 100?true:false);
	}
	,select: function() {
		if(this.m_backdrop.__children.length == 1) this.m_backdrop.removeChildAt(0);
		this.m_backdrop.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/unitselect/unitBtn_selected.png")));
		this.button.set_enabled(false);
	}
	,deselect: function() {
		if(this.m_backdrop.__children.length == 1) this.m_backdrop.removeChildAt(0);
		this.m_backdrop.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData("2d/unitselect/unitBtn_up.png")));
		this.button.set_enabled(true);
	}
	,__class__: game.states.unitselect.elements.UnitElement
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_progress:"set_progress",set_status:"set_status"})
});
game.states.unitselect.elements.UnitListStatus = $hxClasses["game.states.unitselect.elements.UnitListStatus"] = { __ename__ : true, __constructs__ : ["DESELECT","SELECT"] };
game.states.unitselect.elements.UnitListStatus.DESELECT = ["DESELECT",0];
game.states.unitselect.elements.UnitListStatus.DESELECT.toString = $estr;
game.states.unitselect.elements.UnitListStatus.DESELECT.__enum__ = game.states.unitselect.elements.UnitListStatus;
game.states.unitselect.elements.UnitListStatus.SELECT = ["SELECT",1];
game.states.unitselect.elements.UnitListStatus.SELECT.toString = $estr;
game.states.unitselect.elements.UnitListStatus.SELECT.__enum__ = game.states.unitselect.elements.UnitListStatus;
game.states.unitselect.elements.UnitListElement = function(listNum) {
	this.progress = 0;
	flash.display.Sprite.call(this);
	var buttonRegion = new flash.display.Sprite();
	this.button = new com.firstplayable.hxlib.haxe.display.GraphicButton(buttonRegion);
	this.m_area = new flash.display.Sprite();
	buttonRegion.addChild(this.m_area);
	this.addChild(this.button);
};
$hxClasses["game.states.unitselect.elements.UnitListElement"] = game.states.unitselect.elements.UnitListElement;
game.states.unitselect.elements.UnitListElement.__name__ = ["game","states","unitselect","elements","UnitListElement"];
game.states.unitselect.elements.UnitListElement.__super__ = flash.display.Sprite;
game.states.unitselect.elements.UnitListElement.prototype = $extend(flash.display.Sprite.prototype,{
	set_progress: function(prog) {
		this.progress = prog;
		this.updateDisplay();
		return this.progress;
	}
	,set_status: function(newStatus) {
		switch(newStatus[1]) {
		case 0:
			this.button.set_enabled(true);
			break;
		case 1:
			this.button.set_enabled(false);
			break;
		}
		return this.status = newStatus;
	}
	,updateDisplay: function() {
		if(this.m_area.__children.length == 1) this.m_area.removeChildAt(0);
		if(this.progress == 0) return;
		this.m_area.alpha = 1;
		var url;
		if(this.progress == 100) url = "2d/unitselect/unit_done.png"; else url = "2d/unitselect/list_prog.png";
		this.m_area.addChild(new flash.display.Bitmap(openfl.Assets.getBitmapData(url)));
	}
	,__class__: game.states.unitselect.elements.UnitListElement
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_status:"set_status",set_progress:"set_progress"})
});
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe.Resource = function() { };
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
};
haxe.Resource.getString = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.crypto.Base64.decode(x.data);
			return b.toString();
		}
	}
	return null;
};
haxe.Resource.getBytes = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.crypto.Base64.decode(x.data);
		}
	}
	return null;
};
haxe._Template = {};
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : true, __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] };
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; };
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	execute: function(context,macros) {
		if(macros == null) this.macros = { }; else this.macros = macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,resolve: function(v) {
		if(Object.prototype.hasOwnProperty.call(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Object.prototype.hasOwnProperty.call(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			var params = [];
			var part = "";
			while(true) {
				var c = HxOverrides.cca(data,parp);
				parp++;
				if(c == 40) npar++; else if(c == 41) {
					npar--;
					if(npar <= 0) break;
				} else if(c == null) throw "Unclosed macro parenthesis";
				if(c == 44 && npar == 1) {
					params.push(part);
					part = "";
				} else part += String.fromCharCode(c);
			}
			params.push(part);
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0;
			var _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e1 = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t2 = tokens.pop();
			if(t2 == null || t2.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e1,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		var _g = p.p;
		switch(_g) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			var _g1 = p1.p;
			switch(_g1) {
			case "+":
				return function() {
					return e1() + e2();
				};
			case "-":
				return function() {
					return e1() - e2();
				};
			case "*":
				return function() {
					return e1() * e2();
				};
			case "/":
				return function() {
					return e1() / e2();
				};
			case ">":
				return function() {
					return e1() > e2();
				};
			case "<":
				return function() {
					return e1() < e2();
				};
			case ">=":
				return function() {
					return e1() >= e2();
				};
			case "<=":
				return function() {
					return e1() <= e2();
				};
			case "==":
				return function() {
					return e1() == e2();
				};
			case "!=":
				return function() {
					return e1() != e2();
				};
			case "&&":
				return function() {
					return e1() && e2();
				};
			case "||":
				return function() {
					return e1() || e2();
				};
			default:
				throw "Unknown operation " + p1.p;
			}
			break;
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,run: function(e) {
		switch(e[1]) {
		case 0:
			var v = e[2];
			this.buf.add(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = e[2];
			this.buf.add(Std.string(e1()));
			break;
		case 2:
			var eelse = e[4];
			var eif = e[3];
			var e2 = e[2];
			var v1 = e2();
			if(v1 == null || v1 == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = e[2];
			if(str == null) this.buf.b += "null"; else this.buf.b += "" + str;
			break;
		case 4:
			var l = e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e3 = $it0.next();
				this.run(e3);
			}
			break;
		case 5:
			var loop = e[3];
			var e4 = e[2];
			var v2 = e4();
			try {
				var x = $iterator(v2)();
				if(x.hasNext == null) throw null;
				v2 = x;
			} catch( e5 ) {
				try {
					if(v2.hasNext == null) throw null;
				} catch( e6 ) {
					throw "Cannot iter on " + Std.string(v2);
				}
			}
			this.stack.push(this.context);
			var v3 = v2;
			while( v3.hasNext() ) {
				var ctx = v3.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = e[3];
			var m = e[2];
			var v4 = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				switch(p[1]) {
				case 0:
					var v5 = p[2];
					pl.push(this.resolve(v5));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.add(Std.string(v4.apply(this.macros,pl)));
			} catch( e7 ) {
				var plstr;
				try {
					plstr = pl.join(",");
				} catch( e8 ) {
					plstr = "???";
				}
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e7) + ")";
				throw msg;
			}
			break;
		}
	}
	,__class__: haxe.Template
};
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
};
haxe.Unserializer.prototype = {
	setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe.ds.IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe.ds.ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe.Unserializer
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
};
haxe.io.Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe.io.Bytes
};
haxe.crypto = {};
haxe.crypto.Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe.crypto.Base64;
haxe.crypto.Base64.__name__ = ["haxe","crypto","Base64"];
haxe.crypto.Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe.crypto.BaseCode(haxe.crypto.Base64.BYTES).decodeBytes(haxe.io.Bytes.ofString(str));
};
haxe.crypto.BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode;
haxe.crypto.BaseCode.__name__ = ["haxe","crypto","BaseCode"];
haxe.crypto.BaseCode.prototype = {
	initTable: function() {
		var tbl = new Array();
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = haxe.io.Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw "BaseCode : invalid encoded char";
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe.crypto.BaseCode
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; };
js.Lib = function() { };
$hxClasses["js.Lib"] = js.Lib;
js.Lib.__name__ = ["js","Lib"];
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
};
var motion = {};
motion.actuators = {};
motion.actuators.IGenericActuator = function() { };
$hxClasses["motion.actuators.IGenericActuator"] = motion.actuators.IGenericActuator;
motion.actuators.IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
motion.actuators.IGenericActuator.prototype = {
	__class__: motion.actuators.IGenericActuator
};
motion.actuators.GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = motion.Actuate.defaultEase;
};
$hxClasses["motion.actuators.GenericActuator"] = motion.actuators.GenericActuator;
motion.actuators.GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
motion.actuators.GenericActuator.__interfaces__ = [motion.actuators.IGenericActuator];
motion.actuators.GenericActuator.prototype = {
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) Reflect.setField(this.target,i,Reflect.field(this.properties,i)); else Reflect.setProperty(this.target,i,Reflect.field(this.properties,i));
		}
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		return this;
	}
	,callMethod: function(method,params) {
		if(params == null) params = [];
		return method.apply(method,params);
	}
	,change: function() {
		if(this._onUpdate != null) this.callMethod(this._onUpdate,this._onUpdateParams);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) this.callMethod(this._onComplete,this._onCompleteParams);
		}
		motion.Actuate.unload(this);
	}
	,delay: function(duration) {
		this._delay = duration;
		return this;
	}
	,ease: function(easing) {
		this._ease = easing;
		return this;
	}
	,move: function() {
	}
	,onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) this._onCompleteParams = []; else this._onCompleteParams = parameters;
		if(this.duration == 0) this.complete();
		return this;
	}
	,onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) this._onRepeatParams = []; else this._onRepeatParams = parameters;
		return this;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		return this;
	}
	,pause: function() {
	}
	,reflect: function(value) {
		if(value == null) value = true;
		this._reflect = value;
		this.special = true;
		return this;
	}
	,repeat: function(times) {
		if(times == null) times = -1;
		this._repeat = times;
		return this;
	}
	,resume: function() {
	}
	,reverse: function(value) {
		if(value == null) value = true;
		this._reverse = value;
		this.special = true;
		return this;
	}
	,smartRotation: function(value) {
		if(value == null) value = true;
		this._smartRotation = value;
		this.special = true;
		return this;
	}
	,snapping: function(value) {
		if(value == null) value = true;
		this._snapping = value;
		this.special = true;
		return this;
	}
	,stop: function(properties,complete,sendEvent) {
	}
	,__class__: motion.actuators.GenericActuator
};
motion.actuators.SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = new Array();
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = flash.Lib.getTimer() / 1000;
	motion.actuators.GenericActuator.call(this,target,duration,properties);
	if(!motion.actuators.SimpleActuator.addedEvent) {
		motion.actuators.SimpleActuator.addedEvent = true;
		flash.Lib.get_current().get_stage().addEventListener(flash.events.Event.ENTER_FRAME,motion.actuators.SimpleActuator.stage_onEnterFrame);
	}
};
$hxClasses["motion.actuators.SimpleActuator"] = motion.actuators.SimpleActuator;
motion.actuators.SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
motion.actuators.SimpleActuator.stage_onEnterFrame = function(event) {
	var currentTime = flash.Lib.getTimer() / 1000;
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0;
	var _g = motion.actuators.SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = motion.actuators.SimpleActuator.actuators[j];
		if(actuator.active) {
			if(currentTime > actuator.timeOffset) actuator.update(currentTime);
			j++;
		} else {
			motion.actuators.SimpleActuator.actuators.splice(j,1);
			--motion.actuators.SimpleActuator.actuatorsLength;
		}
	}
};
motion.actuators.SimpleActuator.__super__ = motion.actuators.GenericActuator;
motion.actuators.SimpleActuator.prototype = $extend(motion.actuators.GenericActuator.prototype,{
	autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) this.setField(this.target,"visible",this.cacheVisible);
		}
		return this;
	}
	,delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	}
	,getField: function(target,propertyName) {
		var value = null;
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) value = Reflect.field(target,propertyName); else value = Reflect.getProperty(target,propertyName);
		return value;
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) start = Reflect.field(this.target,i); else {
				isField = false;
				start = Reflect.getProperty(this.target,i);
			}
			if(typeof(start) == "number") {
				details = new motion.actuators.PropertyDetails(this.target,i,start,this.getField(this.properties,i) - start,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,move: function() {
		this.toggleVisible = Object.prototype.hasOwnProperty.call(this.properties,"alpha") && js.Boot.__instanceof(this.target,flash.display.DisplayObject);
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		motion.actuators.SimpleActuator.actuators.push(this);
		++motion.actuators.SimpleActuator.actuatorsLength;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		this.sendChange = true;
		return this;
	}
	,pause: function() {
		this.paused = true;
		this.pauseTime = flash.Lib.getTimer();
	}
	,resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += (flash.Lib.getTimer() - this.pauseTime) / 1000;
		}
	}
	,setField: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setProperty: function(details,value) {
		if(details.isField) details.target[details.propertyName] = value; else Reflect.setProperty(details.target,details.propertyName,value);
	}
	,stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) this.apply();
				this.complete(sendEvent);
				return;
			}
			var _g = 0;
			var _g1 = Reflect.fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(this.properties,i)) {
					this.active = false;
					if(complete) this.apply();
					this.complete(sendEvent);
					return;
				}
			}
		}
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0;
				var _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g11 = 0;
				var _g2 = this.detailsLength;
				while(_g11 < _g2) {
					var i2 = _g11++;
					details = this.propertyDetails[i2];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) rotation -= 360; else if(rotation < -180) rotation += 360;
						endValue = details.start + rotation * easing;
					} else endValue = details.start + details.change * easing;
					if(!this._snapping) {
						if(details.isField) details.target[details.propertyName] = endValue; else Reflect.setProperty(details.target,details.propertyName,endValue);
					} else this.setProperty(details,Math.round(endValue));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion.actuators.SimpleActuator
});
motion.easing = {};
motion.easing.Expo = function() { };
$hxClasses["motion.easing.Expo"] = motion.easing.Expo;
motion.easing.Expo.__name__ = ["motion","easing","Expo"];
motion.easing.Expo.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Expo.get_easeIn = function() {
	return new motion.easing.ExpoEaseIn();
};
motion.easing.Expo.get_easeInOut = function() {
	return new motion.easing.ExpoEaseInOut();
};
motion.easing.Expo.get_easeOut = function() {
	return new motion.easing.ExpoEaseOut();
};
motion.easing.IEasing = function() { };
$hxClasses["motion.easing.IEasing"] = motion.easing.IEasing;
motion.easing.IEasing.__name__ = ["motion","easing","IEasing"];
motion.easing.IEasing.prototype = {
	__class__: motion.easing.IEasing
};
motion.easing.ExpoEaseOut = function() {
};
$hxClasses["motion.easing.ExpoEaseOut"] = motion.easing.ExpoEaseOut;
motion.easing.ExpoEaseOut.__name__ = ["motion","easing","ExpoEaseOut"];
motion.easing.ExpoEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseOut.prototype = {
	calculate: function(k) {
		if(k == 1) return 1; else return 1 - Math.pow(2,-10 * k);
	}
	,ease: function(t,b,c,d) {
		if(t == d) return b + c; else return c * (1 - Math.pow(2,-10 * t / d)) + b;
	}
	,__class__: motion.easing.ExpoEaseOut
};
motion.Actuate = function() { };
$hxClasses["motion.Actuate"] = motion.Actuate;
motion.Actuate.__name__ = ["motion","Actuate"];
motion.Actuate.apply = function(target,properties,customActuator) {
	motion.Actuate.stop(target,properties);
	if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
	var actuator = Type.createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
};
motion.Actuate.effects = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	return new motion._Actuate.EffectsOptions(target,duration,overwrite);
};
motion.Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) allowCreation = true;
	if(!motion.Actuate.targetLibraries.exists(target) && allowCreation) motion.Actuate.targetLibraries.set(target,new Array());
	return motion.Actuate.targetLibraries.get(target);
};
motion.Actuate.motionPath = function(target,duration,properties,overwrite) {
	if(overwrite == null) overwrite = true;
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MotionPathActuator);
};
motion.Actuate.pause = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).pause(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.pause();
			}
		}
	}
};
motion.Actuate.pauseAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.pause();
		}
	}
};
motion.Actuate.reset = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var i = library.length - 1;
		while(i >= 0) {
			library[i].stop(null,false,false);
			i--;
		}
	}
	motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
};
motion.Actuate.resume = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).resume(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.resume();
			}
		}
	}
};
motion.Actuate.resumeAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.resume();
		}
	}
};
motion.Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) sendEvent = true;
	if(complete == null) complete = false;
	if(target != null) {
		if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).stop(null,complete,sendEvent); else {
			var library = motion.Actuate.getLibrary(target,false);
			if(library != null) {
				if(typeof(properties) == "string") {
					var temp = { };
					Reflect.setField(temp,properties,null);
					properties = temp;
				} else if((properties instanceof Array) && properties.__enum__ == null) {
					var temp1 = { };
					var _g = 0;
					var _g1;
					_g1 = js.Boot.__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						Reflect.setField(temp1,property,null);
					}
					properties = temp1;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					i--;
				}
			}
		}
	}
};
motion.Actuate.timer = function(duration,customActuator) {
	return motion.Actuate.tween(new motion._Actuate.TweenTimer(0),duration,new motion._Actuate.TweenTimer(1),false,customActuator);
};
motion.Actuate.transform = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	if(duration == null) duration = 0;
	return new motion._Actuate.TransformOptions(target,duration,overwrite);
};
motion.Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) overwrite = true;
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
			var actuator = Type.createInstance(customActuator,[target,duration,properties]);
			var library = motion.Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					i--;
				}
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else return motion.Actuate.apply(target,properties,customActuator);
	}
	return null;
};
motion.Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(motion.Actuate.targetLibraries.h.__keys__[target.__id__] != null) {
		HxOverrides.remove(motion.Actuate.targetLibraries.h[target.__id__],actuator);
		if(motion.Actuate.targetLibraries.h[target.__id__].length == 0) motion.Actuate.targetLibraries.remove(target);
	}
};
motion.Actuate.update = function(target,duration,start,end,overwrite) {
	if(overwrite == null) overwrite = true;
	var properties = { start : start, end : end};
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MethodActuator);
};
motion._Actuate = {};
motion._Actuate.EffectsOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.EffectsOptions"] = motion._Actuate.EffectsOptions;
motion._Actuate.EffectsOptions.__name__ = ["motion","_Actuate","EffectsOptions"];
motion._Actuate.EffectsOptions.prototype = {
	filter: function(reference,properties) {
		properties.filter = reference;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.FilterActuator);
	}
	,__class__: motion._Actuate.EffectsOptions
};
motion._Actuate.TransformOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.TransformOptions"] = motion._Actuate.TransformOptions;
motion._Actuate.TransformOptions.__name__ = ["motion","_Actuate","TransformOptions"];
motion._Actuate.TransformOptions.prototype = {
	color: function(value,strength,alpha) {
		if(strength == null) strength = 1;
		if(value == null) value = 0;
		var properties = { colorValue : value, colorStrength : strength};
		if(alpha != null) properties.colorAlpha = alpha;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,sound: function(volume,pan) {
		var properties = { };
		if(volume != null) properties.soundVolume = volume;
		if(pan != null) properties.soundPan = pan;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,__class__: motion._Actuate.TransformOptions
};
motion._Actuate.TweenTimer = function(progress) {
	this.progress = progress;
};
$hxClasses["motion._Actuate.TweenTimer"] = motion._Actuate.TweenTimer;
motion._Actuate.TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
motion._Actuate.TweenTimer.prototype = {
	__class__: motion._Actuate.TweenTimer
};
motion.MotionPath = function() {
	this._x = new motion.ComponentPath();
	this._y = new motion.ComponentPath();
	this._rotation = null;
};
$hxClasses["motion.MotionPath"] = motion.MotionPath;
motion.MotionPath.__name__ = ["motion","MotionPath"];
motion.MotionPath.prototype = {
	bezier: function(x,y,controlX,controlY,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.BezierPath(x,controlX,strength));
		this._y.addPath(new motion.BezierPath(y,controlY,strength));
		return this;
	}
	,line: function(x,y,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.LinearPath(x,strength));
		this._y.addPath(new motion.LinearPath(y,strength));
		return this;
	}
	,get_rotation: function() {
		if(this._rotation == null) this._rotation = new motion.RotationPath(this._x,this._y);
		return this._rotation;
	}
	,get_x: function() {
		return this._x;
	}
	,get_y: function() {
		return this._y;
	}
	,__class__: motion.MotionPath
	,__properties__: {get_y:"get_y",get_x:"get_x",get_rotation:"get_rotation"}
};
motion.IComponentPath = function() { };
$hxClasses["motion.IComponentPath"] = motion.IComponentPath;
motion.IComponentPath.__name__ = ["motion","IComponentPath"];
motion.IComponentPath.prototype = {
	__class__: motion.IComponentPath
};
motion.ComponentPath = function() {
	this.paths = new Array();
	this.start = 0;
	this.totalStrength = 0;
};
$hxClasses["motion.ComponentPath"] = motion.ComponentPath;
motion.ComponentPath.__name__ = ["motion","ComponentPath"];
motion.ComponentPath.__interfaces__ = [motion.IComponentPath];
motion.ComponentPath.prototype = {
	addPath: function(path) {
		this.paths.push(path);
		this.totalStrength += path.strength;
	}
	,calculate: function(k) {
		if(this.paths.length == 1) return this.paths[0].calculate(this.start,k); else {
			var ratio = k * this.totalStrength;
			var lastEnd = this.start;
			var _g = 0;
			var _g1 = this.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				if(ratio > path.strength) {
					ratio -= path.strength;
					lastEnd = path.end;
				} else return path.calculate(lastEnd,ratio / path.strength);
			}
		}
		return 0;
	}
	,get_end: function() {
		if(this.paths.length > 0) {
			var path = this.paths[this.paths.length - 1];
			return path.end;
		} else return this.start;
	}
	,__class__: motion.ComponentPath
	,__properties__: {get_end:"get_end"}
};
motion.BezierPath = function(end,control,strength) {
	this.end = end;
	this.control = control;
	this.strength = strength;
};
$hxClasses["motion.BezierPath"] = motion.BezierPath;
motion.BezierPath.__name__ = ["motion","BezierPath"];
motion.BezierPath.prototype = {
	calculate: function(start,k) {
		return (1 - k) * (1 - k) * start + 2 * (1 - k) * k * this.control + k * k * this.end;
	}
	,__class__: motion.BezierPath
};
motion.LinearPath = function(end,strength) {
	motion.BezierPath.call(this,end,0,strength);
};
$hxClasses["motion.LinearPath"] = motion.LinearPath;
motion.LinearPath.__name__ = ["motion","LinearPath"];
motion.LinearPath.__super__ = motion.BezierPath;
motion.LinearPath.prototype = $extend(motion.BezierPath.prototype,{
	calculate: function(start,k) {
		return start + k * (this.end - start);
	}
	,__class__: motion.LinearPath
});
motion.RotationPath = function(x,y) {
	this.step = 0.01;
	this._x = x;
	this._y = y;
	this.offset = 0;
	this.start = this.calculate(0.0);
};
$hxClasses["motion.RotationPath"] = motion.RotationPath;
motion.RotationPath.__name__ = ["motion","RotationPath"];
motion.RotationPath.__interfaces__ = [motion.IComponentPath];
motion.RotationPath.prototype = {
	calculate: function(k) {
		var dX = this._x.calculate(k) - this._x.calculate(k + this.step);
		var dY = this._y.calculate(k) - this._y.calculate(k + this.step);
		var angle = Math.atan2(dY,dX) * (180 / Math.PI);
		angle = (angle + this.offset) % 360;
		return angle;
	}
	,get_end: function() {
		return this.calculate(1.0);
	}
	,__class__: motion.RotationPath
	,__properties__: {get_end:"get_end"}
};
motion.actuators.FilterActuator = function(target,duration,properties) {
	this.filterIndex = -1;
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(js.Boot.__instanceof(properties.filter,Class)) {
		this.filterClass = properties.filter;
		var _g = 0;
		var _g1 = (js.Boot.__cast(target , flash.display.DisplayObject)).get_filters();
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(filter,this.filterClass)) this.filter = filter;
		}
	} else {
		this.filterIndex = properties.filter;
		this.filter = (js.Boot.__cast(target , flash.display.DisplayObject)).get_filters()[this.filterIndex];
	}
};
$hxClasses["motion.actuators.FilterActuator"] = motion.actuators.FilterActuator;
motion.actuators.FilterActuator.__name__ = ["motion","actuators","FilterActuator"];
motion.actuators.FilterActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.FilterActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") Reflect.setField(this.filter,propertyName,Reflect.field(this.properties,propertyName));
		}
		var filters = this.getField(this.target,"filters");
		Reflect.setField(filters,this.properties.filter,this.filter);
		this.setField(this.target,"filters",filters);
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				start = this.getField(this.filter,propertyName);
				details = new motion.actuators.PropertyDetails(this.filter,propertyName,start,Reflect.field(this.properties,propertyName) - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		var filters = (js.Boot.__cast(this.target , flash.display.DisplayObject)).get_filters();
		if(this.filterIndex > -1) Reflect.setField(filters,this.properties.filter,this.filter); else {
			var _g1 = 0;
			var _g = filters.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(js.Boot.__instanceof(filters[i],this.filterClass)) filters[i] = this.filter;
			}
		}
		this.setField(this.target,"filters",filters);
	}
	,__class__: motion.actuators.FilterActuator
});
motion.actuators.MethodActuator = function(target,duration,properties) {
	this.currentParameters = new Array();
	this.tweenProperties = { };
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(!Object.prototype.hasOwnProperty.call(properties,"start")) this.properties.start = new Array();
	if(!Object.prototype.hasOwnProperty.call(properties,"end")) this.properties.end = this.properties.start;
	var _g1 = 0;
	var _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(null);
	}
};
$hxClasses["motion.actuators.MethodActuator"] = motion.actuators.MethodActuator;
motion.actuators.MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
motion.actuators.MethodActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MethodActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		this.callMethod(this.target,this.properties.end);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		motion.actuators.SimpleActuator.prototype.complete.call(this,sendEvent);
	}
	,initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			this.tweenProperties[propertyName] = start;
			if(typeof(start) == "number" || ((start | 0) === start)) {
				details = new motion.actuators.PropertyDetails(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.active) {
			var _g1 = 0;
			var _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
	,__class__: motion.actuators.MethodActuator
});
motion.actuators.MotionPathActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.MotionPathActuator"] = motion.actuators.MotionPathActuator;
motion.actuators.MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
motion.actuators.MotionPathActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MotionPathActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) Reflect.setField(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end()); else Reflect.setProperty(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end());
		}
	}
	,initialize: function() {
		var details;
		var path;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath);
			if(path != null) {
				var isField = true;
				if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) path.start = Reflect.field(this.target,propertyName); else {
					isField = false;
					path.start = Reflect.getProperty(this.target,propertyName);
				}
				details = new motion.actuators.PropertyPathDetails(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0;
				var _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) Reflect.setField(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g2 = 0;
				var _g11 = this.propertyDetails;
				while(_g2 < _g11.length) {
					var details2 = _g11[_g2];
					++_g2;
					if(!this._snapping) {
						if(details2.isField) Reflect.setField(details2.target,details2.propertyName,(js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details2.target,details2.propertyName,(js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
					} else if(details2.isField) Reflect.setField(details2.target,details2.propertyName,Math.round((js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing))); else Reflect.setProperty(details2.target,details2.propertyName,Math.round((js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing)));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion.actuators.MotionPathActuator
});
motion.actuators.PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) isField = true;
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
};
$hxClasses["motion.actuators.PropertyDetails"] = motion.actuators.PropertyDetails;
motion.actuators.PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
motion.actuators.PropertyDetails.prototype = {
	__class__: motion.actuators.PropertyDetails
};
motion.actuators.PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) isField = true;
	motion.actuators.PropertyDetails.call(this,target,propertyName,0,0,isField);
	this.path = path;
};
$hxClasses["motion.actuators.PropertyPathDetails"] = motion.actuators.PropertyPathDetails;
motion.actuators.PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
motion.actuators.PropertyPathDetails.__super__ = motion.actuators.PropertyDetails;
motion.actuators.PropertyPathDetails.prototype = $extend(motion.actuators.PropertyDetails.prototype,{
	__class__: motion.actuators.PropertyPathDetails
});
motion.actuators.TransformActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.TransformActuator"] = motion.actuators.TransformActuator;
motion.actuators.TransformActuator.__name__ = ["motion","actuators","TransformActuator"];
motion.actuators.TransformActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.TransformActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		this.initialize();
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.endColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.endSoundTransform);
	}
	,initialize: function() {
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorValue") && js.Boot.__instanceof(this.target,flash.display.DisplayObject)) this.initializeColor();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume") || Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) this.initializeSound();
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,initializeColor: function() {
		this.endColorTransform = new flash.geom.ColorTransform();
		var color = this.properties.colorValue;
		var strength = this.properties.colorStrength;
		if(strength < 1) {
			var multiplier;
			var offset;
			if(strength < 0.5) {
				multiplier = 1;
				offset = strength * 2;
			} else {
				multiplier = 1 - (strength - 0.5) * 2;
				offset = 1;
			}
			this.endColorTransform.redMultiplier = multiplier;
			this.endColorTransform.greenMultiplier = multiplier;
			this.endColorTransform.blueMultiplier = multiplier;
			this.endColorTransform.redOffset = offset * (color >> 16 & 255);
			this.endColorTransform.greenOffset = offset * (color >> 8 & 255);
			this.endColorTransform.blueOffset = offset * (color & 255);
		} else {
			this.endColorTransform.redMultiplier = 0;
			this.endColorTransform.greenMultiplier = 0;
			this.endColorTransform.blueMultiplier = 0;
			this.endColorTransform.redOffset = color >> 16 & 255;
			this.endColorTransform.greenOffset = color >> 8 & 255;
			this.endColorTransform.blueOffset = color & 255;
		}
		var propertyNames = ["redMultiplier","greenMultiplier","blueMultiplier","redOffset","greenOffset","blueOffset"];
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorAlpha")) {
			this.endColorTransform.alphaMultiplier = this.properties.colorAlpha;
			propertyNames.push("alphaMultiplier");
		} else this.endColorTransform.alphaMultiplier = this.getField(this.target,"alpha");
		var transform = this.getField(this.target,"transform");
		var begin = this.getField(transform,"colorTransform");
		this.tweenColorTransform = new flash.geom.ColorTransform();
		var details;
		var start;
		var _g = 0;
		while(_g < propertyNames.length) {
			var propertyName = propertyNames[_g];
			++_g;
			start = this.getField(begin,propertyName);
			details = new motion.actuators.PropertyDetails(this.tweenColorTransform,propertyName,start,this.getField(this.endColorTransform,propertyName) - start);
			this.propertyDetails.push(details);
		}
	}
	,initializeSound: function() {
		if(this.getField(this.target,"soundTransform") == null) this.setField(this.target,"soundTransform",new flash.media.SoundTransform());
		var start = this.getField(this.target,"soundTransform");
		this.endSoundTransform = this.getField(this.target,"soundTransform");
		this.tweenSoundTransform = new flash.media.SoundTransform();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume")) {
			this.endSoundTransform.volume = this.properties.soundVolume;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"volume",start.volume,this.endSoundTransform.volume - start.volume));
		}
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) {
			this.endSoundTransform.pan = this.properties.soundPan;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"pan",start.pan,this.endSoundTransform.pan - start.pan));
		}
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.tweenColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.tweenSoundTransform);
	}
	,__class__: motion.actuators.TransformActuator
});
motion.easing.ExpoEaseIn = function() {
};
$hxClasses["motion.easing.ExpoEaseIn"] = motion.easing.ExpoEaseIn;
motion.easing.ExpoEaseIn.__name__ = ["motion","easing","ExpoEaseIn"];
motion.easing.ExpoEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseIn.prototype = {
	calculate: function(k) {
		if(k == 0) return 0; else return Math.pow(2,10 * (k - 1));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b; else return c * Math.pow(2,10 * (t / d - 1)) + b;
	}
	,__class__: motion.easing.ExpoEaseIn
};
motion.easing.ExpoEaseInOut = function() {
};
$hxClasses["motion.easing.ExpoEaseInOut"] = motion.easing.ExpoEaseInOut;
motion.easing.ExpoEaseInOut.__name__ = ["motion","easing","ExpoEaseInOut"];
motion.easing.ExpoEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseInOut.prototype = {
	calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		if((k /= 0.5) < 1.0) return 0.5 * Math.pow(2,10 * (k - 1));
		return 0.5 * (2 - Math.pow(2,-10 * --k));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b;
		if(t == d) return b + c;
		if((t /= d / 2.0) < 1.0) return c / 2 * Math.pow(2,10 * (t - 1)) + b;
		return c / 2 * (2 - Math.pow(2,-10 * --t)) + b;
	}
	,__class__: motion.easing.ExpoEaseInOut
};
motion.easing.Linear = function() { };
$hxClasses["motion.easing.Linear"] = motion.easing.Linear;
motion.easing.Linear.__name__ = ["motion","easing","Linear"];
motion.easing.Linear.__properties__ = {get_easeNone:"get_easeNone"}
motion.easing.Linear.get_easeNone = function() {
	return new motion.easing.LinearEaseNone();
};
motion.easing.LinearEaseNone = function() {
};
$hxClasses["motion.easing.LinearEaseNone"] = motion.easing.LinearEaseNone;
motion.easing.LinearEaseNone.__name__ = ["motion","easing","LinearEaseNone"];
motion.easing.LinearEaseNone.__interfaces__ = [motion.easing.IEasing];
motion.easing.LinearEaseNone.prototype = {
	calculate: function(k) {
		return k;
	}
	,ease: function(t,b,c,d) {
		return c * t / d + b;
	}
	,__class__: motion.easing.LinearEaseNone
};
motion.easing.Quad = function() { };
$hxClasses["motion.easing.Quad"] = motion.easing.Quad;
motion.easing.Quad.__name__ = ["motion","easing","Quad"];
motion.easing.Quad.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Quad.get_easeIn = function() {
	return new motion.easing.QuadEaseIn();
};
motion.easing.Quad.get_easeInOut = function() {
	return new motion.easing.QuadEaseInOut();
};
motion.easing.Quad.get_easeOut = function() {
	return new motion.easing.QuadEaseOut();
};
motion.easing.QuadEaseIn = function() {
};
$hxClasses["motion.easing.QuadEaseIn"] = motion.easing.QuadEaseIn;
motion.easing.QuadEaseIn.__name__ = ["motion","easing","QuadEaseIn"];
motion.easing.QuadEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseIn.prototype = {
	calculate: function(k) {
		return k * k;
	}
	,ease: function(t,b,c,d) {
		return c * (t /= d) * t + b;
	}
	,__class__: motion.easing.QuadEaseIn
};
motion.easing.QuadEaseInOut = function() {
};
$hxClasses["motion.easing.QuadEaseInOut"] = motion.easing.QuadEaseInOut;
motion.easing.QuadEaseInOut.__name__ = ["motion","easing","QuadEaseInOut"];
motion.easing.QuadEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseInOut.prototype = {
	calculate: function(k) {
		if((k *= 2) < 1) return 0.5 * k * k;
		return -0.5 * ((k - 1) * (k - 3) - 1);
	}
	,ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((t - 1) * (t - 3) - 1) + b;
	}
	,__class__: motion.easing.QuadEaseInOut
};
motion.easing.QuadEaseOut = function() {
};
$hxClasses["motion.easing.QuadEaseOut"] = motion.easing.QuadEaseOut;
motion.easing.QuadEaseOut.__name__ = ["motion","easing","QuadEaseOut"];
motion.easing.QuadEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseOut.prototype = {
	calculate: function(k) {
		return -k * (k - 2);
	}
	,ease: function(t,b,c,d) {
		return -c * (t /= d) * (t - 2) + b;
	}
	,__class__: motion.easing.QuadEaseOut
};
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function() {
		this.bitmapData = new haxe.ds.StringMap();
		this.font = new haxe.ds.StringMap();
		this.sound = new haxe.ds.StringMap();
	}
	,__class__: openfl.AssetCache
};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
};
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData1 = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				return bitmapData1;
			} else console.log("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else console.log("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else console.log("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
};
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else console.log("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound1 = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else console.log("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else console.log("[openfl.Assets] There is no asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound1 = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else console.log("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl.Assets.getText = function(id) {
	var bytes = openfl.Assets.getBytes(id);
	if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
};
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
};
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
};
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return true;
};
openfl.Assets.isValidSound = function(sound) {
	return true;
};
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData1) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				handler(bitmapData1);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
};
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
};
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
};
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.load(handler);
	} else console.log("[openfl.Assets] There is no asset library named \"" + name + "\"");
};
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
};
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
};
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadSound(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
};
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var callback = function(bytes) {
		if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
	};
	openfl.Assets.loadBytes(id,callback);
};
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	openfl.Assets.libraries.set(name,library);
};
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
};
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
};
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var keys = openfl.Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName;
		var pos = key.indexOf(":") + 1;
		symbolName = HxOverrides.substr(key,pos,null);
		if(libraryName == name) openfl.Assets.cache.bitmapData.remove(key);
	}
	openfl.Assets.libraries.remove(name);
};
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	__class__: openfl.AssetData
};
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : true, __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.display = {};
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new flash.geom.Rectangle(rectangle.get_left() / this.__bitmap.get_width(),rectangle.get_top() / this.__bitmap.get_height(),rectangle.get_right() / this.__bitmap.get_width(),rectangle.get_bottom() / this.__bitmap.get_height()));
		return this.__tileRects.length - 1;
	}
	,drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,__class__: openfl.display.Tilesheet
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};
flash.display.DisplayObject.GRAPHICS_INVALID = 2;
flash.display.DisplayObject.MATRIX_INVALID = 4;
flash.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
flash.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
flash.display.DisplayObject.TRANSFORM_INVALID = 32;
flash.display.DisplayObject.BOUNDS_INVALID = 64;
flash.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
flash.display.DisplayObject.ALL_RENDER_FLAGS = 98;
com.firstplayable.hxlib.haxe.app.Application.buildInfo = "BUILD INFO:\n-not available";
Configs.MUTE = false;
Configs.SCALAR = 1.0;
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
com.firstplayable.hxlib.haxe.StdX.INT_MAX = 2147483647;
com.firstplayable.hxlib.haxe.debug.DebuggerPanel.m_sBuffer = new StringBuf();
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display.Graphics.BMP_REPEAT = 16;
flash.display.Graphics.BMP_SMOOTH = 65536;
flash.display.Graphics.CORNER_ROUND = 0;
flash.display.Graphics.CORNER_MITER = 4096;
flash.display.Graphics.CORNER_BEVEL = 8192;
flash.display.Graphics.CURVE = 2;
flash.display.Graphics.END_NONE = 0;
flash.display.Graphics.END_ROUND = 256;
flash.display.Graphics.END_SQUARE = 512;
flash.display.Graphics.LINE = 1;
flash.display.Graphics.MOVE = 0;
flash.display.Graphics.__MAX_DIM = 5000;
flash.display.Graphics.PIXEL_HINTING = 16384;
flash.display.Graphics.RADIAL = 1;
flash.display.Graphics.SCALE_HORIZONTAL = 2;
flash.display.Graphics.SCALE_NONE = 0;
flash.display.Graphics.SCALE_NORMAL = 3;
flash.display.Graphics.SCALE_VERTICAL = 1;
flash.display.Graphics.SPREAD_REPEAT = 2;
flash.display.Graphics.SPREAD_REFLECT = 4;
flash.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
flash.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
flash.Lib.DEFAULT_HEIGHT = 500;
flash.Lib.DEFAULT_WIDTH = 500;
flash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
flash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
flash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
flash.Lib.NME_IDENTIFIER = "haxe:openfl";
flash.Lib.VENDOR_HTML_TAG = "data-";
flash.Lib.starttime = haxe.Timer.stamp();
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.display.Stage.NAME = "Stage";
flash.display.Stage.OrientationPortrait = 1;
flash.display.Stage.OrientationPortraitUpsideDown = 2;
flash.display.Stage.OrientationLandscapeRight = 3;
flash.display.Stage.OrientationLandscapeLeft = 4;
flash.display.Stage.__acceleration = { x : 0.0, y : 1.0, z : 0.0};
flash.display.Stage.DEFAULT_FRAMERATE = 0.0;
flash.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
flash.display.Stage.__mouseChanges = [flash.events.MouseEvent.MOUSE_OUT,flash.events.MouseEvent.MOUSE_OVER,flash.events.MouseEvent.ROLL_OUT,flash.events.MouseEvent.ROLL_OVER];
flash.display.Stage.__touchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
com.firstplayable.hxlib.haxe.display.GameDisplay.ms_layers = new haxe.ds.StringMap();
com.firstplayable.hxlib.haxe.display.GameDisplay.ms_bgFill = new flash.display.Sprite();
com.firstplayable.hxlib.haxe.display.GraphicButton.INVALID_ID = -1;
com.firstplayable.hxlib.haxe.io.GameSaveVersion.LATEST = 1.02;
com.firstplayable.hxlib.haxe.io.GameSaveVersion.VER_101 = 1.01;
com.firstplayable.hxlib.haxe.io.GameSaveVersion.VER_102 = 1.02;
com.firstplayable.hxlib.haxe.net.AjaxRequest.TYPE_POST = "POST";
com.firstplayable.hxlib.haxe.net.AjaxRequest.TYPE_GET = "GET";
com.firstplayable.hxlib.haxe.net.AjaxRequest.STATUS_OK = 200;
com.firstplayable.hxlib.haxe.net.AjaxRequest.FORMAT_FORM = "Content-Type application/x-www-form-urlencoded;charset=UTF-8";
com.firstplayable.hxlib.haxe.state.StateManager.m_rStates = new haxe.ds.IntMap();
com.firstplayable.hxlib.haxe.utils.DateToolsX.m_monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
com.firstplayable.hxlib.haxe.utils.DateToolsX.m_weekdayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
com.firstplayable.hxlib.haxe.utils.GUID.m_counter = 0;
com.firstplayable.hxlib.haxe.utils.MathUtils.RADIANS_MULTIPLIER = 0.0174532925;
com.firstplayable.hxlib.haxe.utils.MathUtils.DEGREES_MULTIPLIER = 57.2957795;
flash.display._BitmapData.MinstdGenerator.a = 16807;
flash.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display.GraphicsPathCommand.LINE_TO = 2;
flash.display.GraphicsPathCommand.MOVE_TO = 1;
flash.display.GraphicsPathCommand.CURVE_TO = 3;
flash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
flash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
flash.display.GraphicsPathCommand.NO_OP = 0;
flash.display.GraphicsPathCommand.CUBIC_CURVE_TO = 6;
flash.display.StageQuality.BEST = "best";
flash.display.StageQuality.HIGH = "high";
flash.display.StageQuality.MEDIUM = "medium";
flash.display.StageQuality.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events.Listener.sIDs = 1;
flash.events.EventPhase.CAPTURING_PHASE = 0;
flash.events.EventPhase.AT_TARGET = 1;
flash.events.EventPhase.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
flash.media.Sound.EXTENSION_MP3 = "mp3";
flash.media.Sound.EXTENSION_OGG = "ogg";
flash.media.Sound.EXTENSION_WAV = "wav";
flash.media.Sound.EXTENSION_AAC = "aac";
flash.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
flash.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
flash.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
flash.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.Capabilities.hasAccessibility = false;
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.system.System.useCodePage = false;
flash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
flash.text.Font.DEFAULT_FONT_SCALE = 9.0;
flash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
flash.text.Font.DEFAULT_CLASS_NAME = "flash.text.Font";
flash.text.Font.__registeredFonts = new Array();
flash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
flash.text.FontInstance.mSolidFonts = new haxe.ds.StringMap();
flash.text.TextFieldType.DYNAMIC = "DYNAMIC";
flash.text.TextFieldType.INPUT = "INPUT";
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
game.AudioMan.m_prevAudioID = "NONE";
game.AudioMan.m_sounds = [null];
game.FontMap.Guilford_Reg = "Guilford-Regular";
game.FontMap.Guilford_Bold = "Guilford-Bold";
game.FontMap.BLACK = 0;
game.FontMap.WHITE = 16777215;
game.FontMap.YELLOW = 16776960;
game.FontMap.PURPLE = 7750039;
game.FontMap.HUD_REMAINING = new flash.text.TextFormat("Guilford-Bold",82.,16777215);
game.FontMap.HUD_PERCENT = new flash.text.TextFormat("Guilford-Bold",21.,1654352);
game.FontMap.HUD_ALERT = new flash.text.TextFormat("Guilford-Bold",22.,16777215);
game.FontMap.GUIDE_WORD_PANEL = new flash.text.TextFormat("Guilford-Regular",24.,16777215);
game.FontMap.GUIDE_WORD_PANEL_SELECTED = new flash.text.TextFormat("Guilford-Regular",24.,0);
game.FontMap.GUIDE_WORD_POPUP_WORD = new flash.text.TextFormat("Guilford-Bold",36.,5896182);
game.FontMap.GUIDE_WORD_POPUP_SPEECH = new flash.text.TextFormat("Guilford-Regular",18.,16777215);
game.FontMap.GUIDE_WORD_POPUP_DEFINITION = new flash.text.TextFormat("Guilford-Regular",18.,16777215);
game.FontMap.VACUUM_CLOZE_SENTENCE = new flash.text.TextFormat("Guilford-Bold",26.,16777215);
game.FontMap.VACUUM_CLOZE_SENTENCE_WORD = new flash.text.TextFormat("Guilford-Bold",26.,16776960);
game.FontMap.VACUUM_CLOZE_ANSWER = new flash.text.TextFormat("Guilford-Bold",23.,0);
game.FontMap.LEARNING_SENTENCE = new flash.text.TextFormat("Guilford-Regular",36.,0);
game.FontMap.LEARNING_TARGET = new flash.text.TextFormat("Guilford-Bold",36.,0);
game.FontMap.LANDING_UNIT_TITLE = new flash.text.TextFormat("Guilford-Regular",16.,16777215);
game.FontMap.STORY_SECTION = new flash.text.TextFormat("Guilford-Bold",20.,16777215);
game.FontMap.BUILD_STAMP = new flash.text.TextFormat("Guilford-Regular",12.,16777215);
game.FontMap.CALENDER_MONTH = new flash.text.TextFormat("Guilford-Bold",43.,16777215);
game.FontMap.CALENDER_DAY_LABEL = new flash.text.TextFormat("Guilford-Bold",16.,7750039);
game.FontMap.CALENDER_DAY_STAR_VALUE = new flash.text.TextFormat("Guilford-Bold",24.,0);
game.FontMap.CALENDER_PROGRESS_LABEL = new flash.text.TextFormat("Guilford-Bold",63.,0);
game.FontMap.LAYOUT_BUTTON = new flash.text.TextFormat("Guilford-Regular",9.,0);
game.FontMap.LAYOUT_TITLE = new flash.text.TextFormat("Guilford-Regular",16.,0);
game.GlobalVars.activeUnit = 0;
game.GlobalVars.activeList = 0;
game.GlobalVars.NO_TEST_HARNESS = false;
game.GlobalVars.isClozeActivity = false;
game.Manifest.IMG_UNITSELECT_BG = "2d/unitselect/backdrop.png";
game.Manifest.IMG_UNITSELECT_SELECTOR = "2d/unitselect/selector.png";
game.Manifest.IMG_UNITSELECT_LIST_PROG = "2d/unitselect/list_prog.png";
game.Manifest.IMG_UNITSELECT_LIST_DONE = "2d/unitselect/list_done.png";
game.Manifest.IMG_UNITSELECT_UNIT_DONE = "2d/unitselect/unit_done.png";
game.Manifest.IMG_UNITSELECT_UNIT_BTN_UP = "2d/unitselect/unitBtn_up.png";
game.Manifest.IMG_UNITSELECT_UNIT_BTN_SELECT = "2d/unitselect/unitBtn_selected.png";
game.Manifest.IMG_UNITSELECT_UNIT_BOOK_BASE = "2d/unitselect/unit";
game.Manifest.IMG_UNITSELECT_LAUNCHER_BTN_UP = "2d/unitselect/balloonBtn_up.png";
game.Manifest.IMG_UNITSELECT_VAC_BTN_UP = "2d/unitselect/vacuumBtn_up.png";
game.Manifest.IMG_GUIDE_BG = "2d/wordguide/wordguide_bg.png";
game.Manifest.IMG_GUIDE_TAB = "2d/wordguide/wordguide_tab.png";
game.Manifest.IMG_GUIDE_WORD_SECTION_UP = "2d/wordguide/word_section_up.png";
game.Manifest.IMG_GUIDE_WORD_SECTION_SELECTED = "2d/wordguide/word_section_selected.png";
game.Manifest.IMG_GUIDE_SMALL_STAR_CLOZE = "2d/wordguide/smallStar_cloze.png";
game.Manifest.IMG_GUIDE_SMALL_STAR_LEARNING = "2d/wordguide/smallStar_learn.png";
game.Manifest.IMG_GUIDE_STAR_CLOZE = "2d/wordguide/star_cloze.png";
game.Manifest.IMG_GUIDE_STAR_LEARNING = "2d/wordguide/star_learn.png";
game.Manifest.IMG_GUIDE_CLOSE = "2d/wordguide/close_btn_up.png";
game.Manifest.IMG_ACTIVITY_PROGRESS_BG = "2d/activities/progress_bg.png";
game.Manifest.IMG_ACTIVITY_PROGRESS_SLIDER = "2d/activities/progressStar.png";
game.Manifest.IMG_ACTIVITY_COUNTER_CLOZE = "2d/activities/cloze/vacuum/counter.png";
game.Manifest.IMG_ACTIVITY_COUNTER_LEARNING = "2d/activities/learning/launcher/counter.png";
game.Manifest.IMG_ACTIVITY_BLOB_HANG_SMALL = "2d/activities/blob/small_hang.png";
game.Manifest.IMG_ACTIVITY_BLOB_HANG_MEDIUM = "2d/activities/blob/medium_hang.png";
game.Manifest.IMG_ACTIVITY_BLOB_HANG_LARGE = "2d/activities/blob/large_hang.png";
game.Manifest.IMG_ACTIVITY_BLOB_LOOSE_SMALL = "2d/activities/blob/small_loose.png";
game.Manifest.IMG_ACTIVITY_BLOB_LOOSE_MEDIUM = "2d/activities/blob/medium_loose.png";
game.Manifest.IMG_ACTIVITY_BLOB_LOOSE_LARGE = "2d/activities/blob/large_loose.png";
game.Manifest.IMG_ACTIVITY_BLOB_EYE_1 = "2d/activities/blob/eye1.png";
game.Manifest.IMG_ACTIVITY_BLOB_EYE_2 = "2d/activities/blob/eye2.png";
game.Manifest.IMG_ACTIVITY_BLOB_EYE_3 = "2d/activities/blob/eye3.png";
game.Manifest.IMG_ACTIVITY_BLOB_EYE_4 = "2d/activities/blob/eye4.png";
game.Manifest.IMG_ACTIVITY_BLOB_EYE_5 = "2d/activities/blob/eye5.png";
game.Manifest.IMG_ACTIVITY_BLOB_EYES = ["2d/activities/blob/eye1.png","2d/activities/blob/eye2.png","2d/activities/blob/eye3.png","2d/activities/blob/eye4.png","2d/activities/blob/eye5.png"];
game.Manifest.IMG_VACUUM_BG = "2d/activities/cloze/vacuum/backdrop.png";
game.Manifest.IMG_VACUUM_BODY = "2d/activities/cloze/vacuum/vac.png";
game.Manifest.IMG_VACUUM_TUBE_SEGMENT = "2d/activities/cloze/vacuum/hose_segment.png";
game.Manifest.IMG_VACUUM_HEAD = "2d/activities/cloze/vacuum/vac_head.png";
game.Manifest.IMG_VACUUM_SENTENCE_DROP = "2d/activities/cloze/vacuum/sentence_drop.png";
game.Manifest.IMG_LEARNING_LAUNCHER_BACKGROUND = "2d/activities/learning/launcher/background.png";
game.Manifest.IMG_LEARNING_LAUNCHER_WORD_BG = "2d/activities/learning/launcher/wordTileBG.png";
game.Manifest.IMG_LEARNING_LAUNCHER_TARGET_CORRECT = "2d/activities/learning/launcher/correctZone.png";
game.Manifest.IMG_LEARNING_LAUNCHER_TARGET_CORRECT_LABEL = "2d/activities/learning/launcher/correctCheck.png";
game.Manifest.IMG_LEARNING_LAUNCHER_TARGET_INCORRECT = "2d/activities/learning/launcher/incorrectZone.png";
game.Manifest.IMG_LEARNING_LAUNCHER_TARGET_INCORRECT_LABEL = "2d/activities/learning/launcher/incorrectCheck.png";
game.Manifest.IMG_LEARNING_LAUNCHER_TARGET = "2d/activities/learning/launcher/launcherTarget.png";
game.Manifest.IMG_LEARNING_BOTTOM_BAND = "2d/activities/learning/launcher/band.png";
game.Manifest.IMG_LEARNING_SPLAT = "2d/activities/learning/launcher/splat.png";
game.Manifest.IMG_LEARNING_SPLAT_PARTICLE = "2d/activities/learning/launcher/droplet.png";
game.Manifest.IMG_HELP_BTN_UP = "2d/alert/helpBtn_up.png";
game.Manifest.IMG_PAUSE_BTN_UP = "2d/alert/pauseBtn_up.png";
game.Manifest.IMG_ALERT_BG = "2d/alert/popup_bg.png";
game.Manifest.IMG_ALERT_REPLAY_BTN_UP = "2d/alert/replayBtn_up.png";
game.Manifest.IMG_ALERT_CONT_BTN_UP = "2d/alert/continueBtn_up.png";
game.Manifest.IMG_ALERT_QUIT_BTN_UP = "2d/alert/quitBtn_up.png";
game.Manifest.SFX_GENERAL_CLICK = "sounds/general/CLICK.mp3";
game.Manifest.SFX_FEEDBACK_CORRECT = "sounds/cloze/FEEDBACK_CORRECT.mp3";
game.Manifest.SFX_FEEDBACK_INCORRECT = "sounds/cloze/FEEDBACK_INCORRECT.mp3";
game.Manifest.SFX_WORDS_ = "sounds/words/";
game.db.Progression.curList = { cloze : 0, active : 0, mastered : 0, complete : 0};
game.db.VocabMan.m_sheetUnits = game.db.VocabMan.createNewSheet(-1);
game.db.VocabMan.m_bumpRatingWhenDone = false;
game.db.VocabMan.m_fullVerListSize = 20;
game.events.GameStartEvent.GAME_START = "gameStart";
game.events.LearningEvent.OBJECT_DRAWN = "LEARNING_OBJECT_DRAWN";
game.events.LearningEvent.OBJECT_RESET = "LEARNING_OBJECT_RESET";
game.events.LearningEvent.OBJECT_LAUNCHED = "LEARNING_OBJECT_LAUNCHED";
game.events.LearningEvent.TARGET_REACHED = "LEARNING_TARGET_REACHED";
game.events.VacuumEvent.START_VACUUM = "startVacuum";
game.events.VacuumEvent.STOP_VACUUM = "stopVacuum";
game.events.VacuumEvent.FINISHED = "finishedVacuum";
game.events.VocabEvent.PLAY_FINISHED = "vocabPlayFinished";
game.events.VocabEvent.ACTIVITY_COMPLETE = "vocabActivityComplete";
game.popups.alerts.AlertPopup.BG_POS = new flash.geom.Point(350.,200.);
game.popups.alerts.AlertPopup.MESSAGE_POS = new flash.geom.Point(530.,210.);
game.popups.alerts.AlertPopup.BUTTON_POS = new flash.geom.Point(0,325.);
game.popups.alerts.RoundPopup.MESSAGE = "ROUND COMPLETE!";
game.popups.alerts.WinPopup.MESSAGE_CLOZE = "VACUUM VOCAB\n  LIST COMPLETE!";
game.popups.alerts.WinPopup.MESSAGE_LEARN = "BALLOON BLASTER\n  LIST COMPLETE!";
game.popups.guide.WordGuide.WORD_PANELS_POS = new flash.geom.Point(250.,28.);
game.popups.guide.WordGuide.WORD_PANEL_HORIZ_PADDING = 40.;
game.popups.guide.WordGuide.WORD_PANEL_VERT_PADDING = 4.;
game.popups.guide.WordGuide.WORD_PANELS_IN_COL = 10;
game.popups.guide.WordGuide.COLS = 2;
game.popups.guide.WordPanel.CLOZE_POS = new flash.geom.Point(170.,4.);
game.popups.guide.WordPanel.LEARNING_Y_POS = new flash.geom.Point(216.,4.);
game.popups.guide.WordPanel.LEARNING_N_POS = new flash.geom.Point(262.,4.);
game.popups.guide.WordPanel.TEXT_POS = new flash.geom.Point(12.5,6.);
game.popups.guide.elements.WordGuideTab.BAR_AREA = new flash.geom.Rectangle(32.,639.,306.,14.);
game.popups.guide.elements.WordGuideTab.PROGRESS_BAR_HUD_POS = new flash.geom.Point(20.,670.);
game.popups.guide.elements.WordGuideTab.PROGRESS_BAR_GUIDE_OFFSET = new flash.geom.Point(80.,-150.);
game.save.BartlettSaveMan.m_bridgeComTries = 0;
game.save.WordProgress.STAT_NONE = 0;
game.save.WordProgress.STAT_CLOZE = 1;
game.save.WordProgress.STAT_ACT_Y = 2;
game.save.WordProgress.STAT_ACT_N = 4;
game.save.WordProgress.STAT_DONE = 7;
game.states.activity.ActivityState.HELP_BTN_POS = new flash.geom.Point(35.,25.);
game.states.activity.ActivityState.PAUSE_BTN_POS = new flash.geom.Point(920.,25.);
game.states.activity.ActivityState.REMAINING_POS = new flash.geom.Point(880.,540.);
game.states.activity.cloze.vacuum.VacuumClozeState.ANSWER_BUFF = 0;
game.states.activity.cloze.vacuum.VacuumClozeState.ANSWER_POS = new flash.geom.Point(100.,-12.5);
game.states.activity.cloze.vacuum.VacuumClozeState.VAC_POS = new flash.geom.Point(637.5,520.);
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.STATE_HANGING = 0;
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.STATE_LOOSE = 1;
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.SM_THRESH = 5;
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.MED_THRESH = 10;
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE1_POS = new flash.geom.Point();
game.states.activity.cloze.vacuum.elements.VacuumClozeAnswerElement.EYE2_POS = new flash.geom.Point();
game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.BLANK = "__________";
game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.SENTENCE_PADDING = 10.;
game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_SPACING = 40.;
game.states.activity.cloze.vacuum.elements.VacuumClozeSentenceArea.FLICKER_POS = new flash.geom.Point(20.,12.);
game.states.activity.cloze.vacuum.elements.VacuumClozeVac.HEAD_POS = new flash.geom.Point(-125.,-25.);
game.states.activity.cloze.vacuum.elements.VacuumClozeVac.TUBE_POS = new flash.geom.Point(38.,62.);
game.states.activity.cloze.vacuum.elements.VacuumClozeVac.EVAL_POS = new flash.geom.Point(18.,118.);
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel.COLOR_BLUE = 13036795;
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel.COLOR_GREEN = 65433;
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel.COLOR_RED = 16730698;
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel.FILL_BUFFER = 5.;
game.states.activity.cloze.vacuum.elements.VacuumEvalPanel.FILL_SPEED = 10.;
game.states.activity.elements.ActivityWordsRemainingArea.TEXT_Y_OFFSET = 10.;
game.states.activity.learning.launcher.LearningLauncher.SLINGSHOT_OFFSET = 100;
game.states.activity.learning.launcher.LearningLauncher.LEFT_LAUNCH_POS = new flash.geom.Point(375,500);
game.states.activity.learning.launcher.LearningLauncher.RIGHT_LAUNCH_POS = new flash.geom.Point(675,500);
game.states.activity.learning.launcher.elements.LaunchObject.LABEL_YES = true;
game.states.activity.learning.launcher.elements.LaunchObject.LABEL_NO = false;
game.states.activity.learning.launcher.elements.LaunchObject.MAX_DRAG_DISTANCE = 150.;
game.states.activity.learning.launcher.elements.LaunchObject.ACCURACY_THRESHOLD = 100.;
game.states.activity.learning.launcher.elements.LaunchObject.MAX_BOUNCES = 2;
game.states.activity.learning.launcher.elements.LaunchObject.MIN_VERTICAL_LAUNCH_DISTANCE = 15;
game.states.activity.learning.launcher.elements.LaunchObject.MAX_VERTICAL_LAUNCH_DISTANCE = 665;
game.states.activity.learning.launcher.elements.LaunchObject.BAND_OFFSET = 35;
game.states.activity.learning.launcher.elements.LaunchObject.LEFT_BAND_POS = new flash.geom.Point(-100.,-80.);
game.states.activity.learning.launcher.elements.LaunchObject.RIGHT_BAND_POS = new flash.geom.Point(100.,-80.);
game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_TOP_POS = new flash.geom.Point();
game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_TOP_POS = new flash.geom.Point();
game.states.activity.learning.launcher.elements.LaunchTarget.EYE1_BTTM_POS = new flash.geom.Point();
game.states.activity.learning.launcher.elements.LaunchTarget.EYE2_BTTM_POS = new flash.geom.Point();
game.states.activity.learning.launcher.elements.Sentence.SENTENCE_PADDING = 20.;
game.states.activity.learning.launcher.elements.Sentence.MAXIMUM_WIDTH = 855.;
game.states.activity.learning.launcher.elements.Sentence.TARGET_PADDING_X = 20.;
game.states.activity.learning.launcher.elements.Sentence.SENTENCE_EXTRA_LEADING_Y = 20.;
game.states.activity.learning.launcher.elements.Sentence.LINE_COUNT = 2;
game.states.activity.learning.launcher.elements.Sentence.TF_COUNT = 3;
game.states.loading.Guilford_Regular_ttf.resourceName = "NME_font_game_states_loading_Guilford_Regular_ttf";
game.states.loading.Guilford_Bold_ttf.resourceName = "NME_font_game_states_loading_Guilford_Bold_ttf";
game.states.loading.Backdrop_png.resourceName = "__ASSET__:bitmap_game_states_loading_Backdrop_png";
game.states.loading.Exit_png.resourceName = "__ASSET__:bitmap_game_states_loading_Exit_png";
game.states.loading.Loading_png.resourceName = "__ASSET__:bitmap_game_states_loading_Loading_png";
game.states.loading.Next_png.resourceName = "__ASSET__:bitmap_game_states_loading_Next_png";
game.states.loading.Prev_png.resourceName = "__ASSET__:bitmap_game_states_loading_Prev_png";
game.states.loading.LoadingState.LOADING_ROTATION_SPEED = 45;
game.states.loading.LoadingState.m_strings = ["Lian and her friends gather at her kitchen table to do their homework. Some of them work on a vocabulary assignment, while others set up a science experiment using soda and candy. A clumsy elbow knocks over a 2-liter bottle of soda soaking the candy, dictionary, and laptops.","Sparks shoot out, bubbles fizz - kaboom! The kids are aghast. Word blobs spatter over every room in the house. The blobs are rowdy, messy, and smart - each one has learned a word from the vocabulary homework!","The kids are in a panic. They have to clean up the mess before Lian's mom gets home and freaks out. Help them trap the blobs by showing that you know the meaning of each word."];
game.states.unitselect.UnitSelectState.DEFAULT_LISTS = 5;
game.states.unitselect.UnitSelectState.ACT_BTNS_POS = new flash.geom.Point(320.,600.);
game.states.unitselect.UnitSelectState.FADE_AREA = new flash.geom.Rectangle(310.,105.,650.,462.5);
game.states.unitselect.UnitSelectState.UNIT_POS = new flash.geom.Point(25.,100.);
game.states.unitselect.UnitSelectState.LIST_LAYOUT = [new flash.geom.Point(346.5,230.),new flash.geom.Point(596.5,104.),new flash.geom.Point(881.5,120.),new flash.geom.Point(704.,355.),new flash.geom.Point(908.,376.)];
game.states.unitselect.UnitSelectState.TRAVEL_LAYOUT = [new flash.geom.Point(385.,350.),new flash.geom.Point(700.,207.),new flash.geom.Point(901.,228.),new flash.geom.Point(640.,484.),new flash.geom.Point(871.,456.)];
game.states.unitselect.UnitSelectState.HIT_LAYOUT = [new flash.geom.Rectangle(315.,220.,160.,210.),new flash.geom.Rectangle(570.,100.,205.,180.),new flash.geom.Rectangle(825.,115.,125.,185.),new flash.geom.Rectangle(550.,350.,210.,200.),new flash.geom.Rectangle(780.,360.,170.,180.)];
game.states.unitselect.UnitSelectState.FILL_AREA_COLORS = [3713726,11548862,3718745,12471352,3695806,14141218];
game.states.unitselect.UnitSelectState.UNIT_SPACING = 100;
game.states.unitselect.elements.UnitElement.LABEL_POS = new flash.geom.Point(50.,10.);
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.crypto.Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe.crypto.Base64.BYTES = haxe.io.Bytes.ofString(haxe.crypto.Base64.CHARS);
haxe.ds.ObjectMap.count = 0;
motion.actuators.SimpleActuator.actuators = new Array();
motion.actuators.SimpleActuator.actuatorsLength = 0;
motion.actuators.SimpleActuator.addedEvent = false;
motion.Actuate.defaultActuator = motion.actuators.SimpleActuator;
motion.Actuate.defaultEase = motion.easing.Expo.get_easeOut();
motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
ApplicationMain.main();
})();