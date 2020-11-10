(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../$$_lazy_route_resource lazy recursive":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../node_modules/@ng-web-apis/audio/polyfill.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/@ng-web-apis/audio/polyfill.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var windowRef = typeof window === 'undefined' ? globalThis : window;

windowRef.AudioContext = windowRef.AudioContext || windowRef.webkitAudioContext;
windowRef.PannerNode = windowRef.PannerNode || windowRef.webkitAudioPannerNode;
windowRef.StereoPannerNode = windowRef.StereoPannerNode || windowRef.PannerNode;

// Just to compile in old browsers, these features are not supported if not supported natively
windowRef.BaseAudioContext = windowRef.BaseAudioContext || windowRef.AudioContext;
windowRef.OfflineAudioContext = windowRef.OfflineAudioContext || windowRef.AudioContext;
windowRef.ConstantSourceNode = windowRef.ConstantSourceNode || function() {};
windowRef.AudioWorkletNode = windowRef.AudioWorkletNode || function() {};
windowRef.IIRFilterNode = windowRef.IIRFilterNode || function() {};
windowRef.MediaStreamAudioDestinationNode =
    windowRef.MediaStreamAudioDestinationNode || function() {};
windowRef.MediaStreamAudioSourceNode =
    windowRef.MediaStreamAudioSourceNode || function() {};
windowRef.MediaStreamTrackAudioSourceNode =
    windowRef.MediaStreamTrackAudioSourceNode || function() {};


/***/ }),

/***/ "../../node_modules/core-js/es6/reflect.js":
/*!*******************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/es6/reflect.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.reflect.apply */ "../../node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "../../node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "../../node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "../../node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "../../node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "../../node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "../../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "../../node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "../../node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "../../node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "../../node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "../../node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "../../node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "../../node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../../node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "../../node_modules/core-js/es7/reflect.js":
/*!*******************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/es7/reflect.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "../../node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "../../node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "../../node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "../../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "../../node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "../../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "../../node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "../../node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "../../node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../../node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "../../node_modules/core-js/modules/_a-function.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_a-function.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_an-instance.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_an-instance.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_an-object.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_an-object.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-from-iterable.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_array-from-iterable.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-includes.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_array-includes.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-methods.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_array-methods.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "../../node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-species-constructor.js":
/*!******************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_array-species-constructor.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../../node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-species-create.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_array-species-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "../../node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_bind.js":
/*!*********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_bind.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../../node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_classof.js":
/*!************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_classof.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_cof.js":
/*!********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_cof.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_collection-strong.js":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_collection-strong.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "../../node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "../../node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "../../node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_collection-weak.js":
/*!********************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_collection-weak.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "../../node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "../../node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_collection.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_collection.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "../../node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "../../node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "../../node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_core.js":
/*!*********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_core.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_ctx.js":
/*!********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_ctx.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_defined.js":
/*!************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_defined.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_descriptors.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_descriptors.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_dom-create.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_dom-create.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_enum-bug-keys.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../node_modules/core-js/modules/_export.js":
/*!***********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_export.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../node_modules/core-js/modules/_fails.js":
/*!**********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_fails.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_for-of.js":
/*!***********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_for-of.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../../node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../../node_modules/core-js/modules/_function-to-string.js":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_function-to-string.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "../../node_modules/core-js/modules/_global.js":
/*!***********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_global.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_has.js":
/*!********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_has.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_hide.js":
/*!*********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_hide.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_html.js":
/*!*********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_html.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../node_modules/core-js/modules/_ie8-dom-define.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_inherit-if-required.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_inherit-if-required.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "../../node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_invoke.js":
/*!***********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_invoke.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iobject.js":
/*!************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_iobject.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-array-iter.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_is-array-iter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-array.js":
/*!*************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_is-array.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-object.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_is-object.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-call.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_iter-call.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-create.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_iter-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-define.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_iter-define.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-detect.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_iter-detect.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-step.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_iter-step.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iterators.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_iterators.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/modules/_library.js":
/*!************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_library.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../node_modules/core-js/modules/_meta.js":
/*!*********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_meta.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_metadata.js":
/*!*************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_metadata.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "../../node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "../../node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-assign.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-assign.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-create.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-create.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../../node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../../node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dp.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-dp.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dps.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-dps.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gopd.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-gopd.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gopn.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-gopn.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gops.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-gops.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gpo.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-gpo.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys-internal.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-keys-internal.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-keys.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-pie.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_object-pie.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../../node_modules/core-js/modules/_own-keys.js":
/*!*************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_own-keys.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_property-desc.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_property-desc.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine-all.js":
/*!*****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_redefine-all.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine.js":
/*!*************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_redefine.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "../../node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-proto.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_set-proto.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-species.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_set-species.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-to-string-tag.js":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_shared-key.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_shared-key.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_shared.js":
/*!***********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_shared.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-absolute-index.js":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_to-absolute-index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-integer.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_to-integer.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-iobject.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_to-iobject.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-length.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_to-length.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-object.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_to-object.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-primitive.js":
/*!*****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_to-primitive.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_uid.js":
/*!********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_uid.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_validate-collection.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_validate-collection.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_wks.js":
/*!********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/_wks.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/core-js/modules/core.get-iterator-method.js":
/*!****************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.map.js":
/*!***********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.map.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "../../node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "../../node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.apply.js":
/*!*********************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.apply.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.construct.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.construct.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "../../node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*******************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*******************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "../../node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*******************************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.get.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.get.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.has.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.has.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*****************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "../../node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!**********************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "../../node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.reflect.set.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.reflect.set.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.set.js":
/*!***********************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.set.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "../../node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "../../node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.weak-map.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es6.weak-map.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "../../node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "../../node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "../../node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "../../node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "../../node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "../../node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*******************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*******************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!*********************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "../../node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "../../node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!****************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!*************************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!********************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!****************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!********************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.reflect.metadata.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "../../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "../../node_modules/zone.js/dist/zone.js":
/*!*****************************************************************************!*\
  !*** /home/travis/build/ng-web-apis/midi/node_modules/zone.js/dist/zone.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise =  false || resolve(value));
            }
            function onReject(error) {
                promise && (promise =  false || reject(error));
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    if (NativePromise) {
        patchThen(NativePromise);
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('fetch', function (global, Zone, api) {
    var fetch = global['fetch'];
    var ZoneAwarePromise = global.Promise;
    var symbolThenPatched = api.symbol('thenPatched');
    var fetchTaskScheduling = api.symbol('fetchTaskScheduling');
    var fetchTaskAborting = api.symbol('fetchTaskAborting');
    if (typeof fetch !== 'function') {
        return;
    }
    var OriginalAbortController = global['AbortController'];
    var supportAbort = typeof OriginalAbortController === 'function';
    var abortNative = null;
    if (supportAbort) {
        global['AbortController'] = function () {
            var abortController = new OriginalAbortController();
            var signal = abortController.signal;
            signal.abortController = abortController;
            return abortController;
        };
        abortNative = api.patchMethod(OriginalAbortController.prototype, 'abort', function (delegate) { return function (self, args) {
            if (self.task) {
                return self.task.zone.cancelTask(self.task);
            }
            return delegate.apply(self, args);
        }; });
    }
    var placeholder = function () { };
    global['fetch'] = function () {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        var options = args.length > 1 ? args[1] : null;
        var signal = options && options.signal;
        return new Promise(function (res, rej) {
            var task = Zone.current.scheduleMacroTask('fetch', placeholder, args, function () {
                var fetchPromise;
                var zone = Zone.current;
                try {
                    zone[fetchTaskScheduling] = true;
                    fetchPromise = fetch.apply(_this, args);
                }
                catch (error) {
                    rej(error);
                    return;
                }
                finally {
                    zone[fetchTaskScheduling] = false;
                }
                if (!(fetchPromise instanceof ZoneAwarePromise)) {
                    var ctor = fetchPromise.constructor;
                    if (!ctor[symbolThenPatched]) {
                        api.patchThen(ctor);
                    }
                }
                fetchPromise.then(function (resource) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    res(resource);
                }, function (error) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    rej(error);
                });
            }, function () {
                if (!supportAbort) {
                    rej('No AbortController supported, can not cancel fetch');
                    return;
                }
                if (signal && signal.abortController && !signal.aborted &&
                    typeof signal.abortController.abort === 'function' && abortNative) {
                    try {
                        Zone.current[fetchTaskAborting] = true;
                        abortNative.call(signal.abortController);
                    }
                    finally {
                        Zone.current[fetchTaskAborting] = false;
                    }
                }
                else {
                    rej('cancel fetch need a AbortController.signal');
                }
            });
            if (signal && signal.abortController) {
                signal.abortController.task = task;
            }
        });
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget_1 = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget_1) {
            patchFilteredProperties(XMLHttpRequestEventTarget_1 && XMLHttpRequestEventTarget_1.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    attachOriginToPatched(target[method], nativeDelegate);
}
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    patchCallbacks(document, 'Document', 'registerElement', callbacks);
}
function patchCustomElements(_global) {
    if ((!isBrowser && !isMix) || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    patchCallbacks(_global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    registerElementPatch(global);
    patchCustomElements(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "../midi/src/monotype-operators/aftertouch.ts":
/*!****************************************************!*\
  !*** ../midi/src/monotype-operators/aftertouch.ts ***!
  \****************************************************/
/*! exports provided: aftertouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aftertouch", function() { return aftertouch; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to aftertouch changes only
 */
function aftertouch() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 208, 223)));
}


/***/ }),

/***/ "../midi/src/monotype-operators/filter-by-channel.ts":
/*!***********************************************************!*\
  !*** ../midi/src/monotype-operators/filter-by-channel.ts ***!
  \***********************************************************/
/*! exports provided: filterByChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByChannel", function() { return filterByChannel; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * Filter MIDI messages by channel
 *
 * @param channel number from 0 to 15
 */
function filterByChannel(channel) {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => data[0] % 16 === channel));
}


/***/ }),

/***/ "../midi/src/monotype-operators/filter-by-id.ts":
/*!******************************************************!*\
  !*** ../midi/src/monotype-operators/filter-by-id.ts ***!
  \******************************************************/
/*! exports provided: filterById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterById", function() { return filterById; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * Filter MIDI messages by MIDIInput id
 *
 * @param id
 */
function filterById(id) {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ target }) => target.id === id));
}


/***/ }),

/***/ "../midi/src/monotype-operators/filter-by-name.ts":
/*!********************************************************!*\
  !*** ../midi/src/monotype-operators/filter-by-name.ts ***!
  \********************************************************/
/*! exports provided: filterByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByName", function() { return filterByName; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * Filter MIDI messages by MIDIInput name
 *
 * @param name
 */
function filterByName(name) {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ target }) => target.name === name));
}


/***/ }),

/***/ "../midi/src/monotype-operators/main-volume.ts":
/*!*****************************************************!*\
  !*** ../midi/src/monotype-operators/main-volume.ts ***!
  \*****************************************************/
/*! exports provided: mainVolume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainVolume", function() { return mainVolume; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to main volume changes only
 */
function mainVolume() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 176, 191) && data[1] === 7));
}


/***/ }),

/***/ "../midi/src/monotype-operators/modulation-wheel.ts":
/*!**********************************************************!*\
  !*** ../midi/src/monotype-operators/modulation-wheel.ts ***!
  \**********************************************************/
/*! exports provided: modulationWheel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modulationWheel", function() { return modulationWheel; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to modulation wheel changes only
 */
function modulationWheel() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 176, 191) && data[1] === 1));
}


/***/ }),

/***/ "../midi/src/monotype-operators/notes.ts":
/*!***********************************************!*\
  !*** ../midi/src/monotype-operators/notes.ts ***!
  \***********************************************/
/*! exports provided: notes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notes", function() { return notes; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to notes only
 *
 * IMPORTANT: It normalizes noteOff events to noteOn with 0 velocity
 */
function notes() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 128, 159)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(event => {
        if (Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(event.data[0], 128, 143)) {
            event.data[0] += 16;
            event.data[2] = 0;
        }
        return event;
    }));
}


/***/ }),

/***/ "../midi/src/monotype-operators/pan.ts":
/*!*********************************************!*\
  !*** ../midi/src/monotype-operators/pan.ts ***!
  \*********************************************/
/*! exports provided: pan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pan", function() { return pan; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to pan changes only
 */
function pan() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 176, 191) && data[1] === 10));
}


/***/ }),

/***/ "../midi/src/monotype-operators/pitch-bend.ts":
/*!****************************************************!*\
  !*** ../midi/src/monotype-operators/pitch-bend.ts ***!
  \****************************************************/
/*! exports provided: pitchBend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pitchBend", function() { return pitchBend; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to pitch bend changes only
 */
function pitchBend() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 224, 239)));
}


/***/ }),

/***/ "../midi/src/monotype-operators/polyphonic-aftertouch.ts":
/*!***************************************************************!*\
  !*** ../midi/src/monotype-operators/polyphonic-aftertouch.ts ***!
  \***************************************************************/
/*! exports provided: polyphonicAftertouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyphonicAftertouch", function() { return polyphonicAftertouch; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to polyphonic aftertouch changes only
 */
function polyphonicAftertouch() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 160, 175)));
}


/***/ }),

/***/ "../midi/src/monotype-operators/program-change.ts":
/*!********************************************************!*\
  !*** ../midi/src/monotype-operators/program-change.ts ***!
  \********************************************************/
/*! exports provided: programChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programChange", function() { return programChange; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to program changes only
 */
function programChange() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 208, 223)));
}


/***/ }),

/***/ "../midi/src/monotype-operators/sustain-pedal.ts":
/*!*******************************************************!*\
  !*** ../midi/src/monotype-operators/sustain-pedal.ts ***!
  \*******************************************************/
/*! exports provided: sustainPedal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sustainPedal", function() { return sustainPedal; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/between */ "../midi/src/utils/between.ts");


/**
 * Filter MIDI messages to sustain pedal changes only
 */
function sustainPedal() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(({ data }) => Object(_utils_between__WEBPACK_IMPORTED_MODULE_1__["between"])(data[0], 176, 191) && data[1] === 64));
}


/***/ }),

/***/ "../midi/src/operators/to-data-byte.ts":
/*!*********************************************!*\
  !*** ../midi/src/operators/to-data-byte.ts ***!
  \*********************************************/
/*! exports provided: toDataByte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDataByte", function() { return toDataByte; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * Extract data byte (2nd) from MIDI message
 *
 * NOTE: Some status messages do not have 2nd byte, use it when you're certain
 */
function toDataByte() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data[1]));
}


/***/ }),

/***/ "../midi/src/operators/to-data.ts":
/*!****************************************!*\
  !*** ../midi/src/operators/to-data.ts ***!
  \****************************************/
/*! exports provided: toData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toData", function() { return toData; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * Extract MIDI data from event
 */
function toData() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data));
}


/***/ }),

/***/ "../midi/src/operators/to-status-byte.ts":
/*!***********************************************!*\
  !*** ../midi/src/operators/to-status-byte.ts ***!
  \***********************************************/
/*! exports provided: toStatusByte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStatusByte", function() { return toStatusByte; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * Extract status byte (1st) from MIDI message
 */
function toStatusByte() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data[0]));
}


/***/ }),

/***/ "../midi/src/operators/to-time-stamp.ts":
/*!**********************************************!*\
  !*** ../midi/src/operators/to-time-stamp.ts ***!
  \**********************************************/
/*! exports provided: toTimeStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTimeStamp", function() { return toTimeStamp; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * Extract received time from MIDI event
 */
function toTimeStamp() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ timeStamp }) => timeStamp));
}


/***/ }),

/***/ "../midi/src/operators/to-value-byte.ts":
/*!**********************************************!*\
  !*** ../midi/src/operators/to-value-byte.ts ***!
  \**********************************************/
/*! exports provided: toValueByte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toValueByte", function() { return toValueByte; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * Extract value byte (3rd) from MIDI message
 *
 * NOTE: Some status messages do not have 3rd byte, use it when you're certain
 */
function toValueByte() {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ data }) => data[2]));
}


/***/ }),

/***/ "../midi/src/pipes/frequency/frequency.module.ts":
/*!*******************************************************!*\
  !*** ../midi/src/pipes/frequency/frequency.module.ts ***!
  \*******************************************************/
/*! exports provided: FrequencyPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequencyPipeModule", function() { return FrequencyPipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frequency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frequency.pipe */ "../midi/src/pipes/frequency/frequency.pipe.ts");



let FrequencyPipeModule = class FrequencyPipeModule {
};
FrequencyPipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_frequency_pipe__WEBPACK_IMPORTED_MODULE_2__["FrequencyPipe"]],
        exports: [_frequency_pipe__WEBPACK_IMPORTED_MODULE_2__["FrequencyPipe"]],
    })
], FrequencyPipeModule);



/***/ }),

/***/ "../midi/src/pipes/frequency/frequency.pipe.ts":
/*!*****************************************************!*\
  !*** ../midi/src/pipes/frequency/frequency.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FrequencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequencyPipe", function() { return FrequencyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_to_frequency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/to-frequency */ "../midi/src/utils/to-frequency.ts");



let FrequencyPipe = class FrequencyPipe {
    transform(note, tuning) {
        return Object(_utils_to_frequency__WEBPACK_IMPORTED_MODULE_2__["toFrequency"])(note, tuning);
    }
};
FrequencyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'frequency',
    })
], FrequencyPipe);



/***/ }),

/***/ "../midi/src/public-api.ts":
/*!*********************************!*\
  !*** ../midi/src/public-api.ts ***!
  \*********************************/
/*! exports provided: aftertouch, filterByChannel, filterById, filterByName, mainVolume, modulationWheel, notes, pan, pitchBend, polyphonicAftertouch, programChange, sustainPedal, toData, toDataByte, toStatusByte, toTimeStamp, toValueByte, FrequencyPipeModule, FrequencyPipe, MIDI_ACCESS, MIDI_INPUT, MIDI_INPUTS, MIDI_MESSAGES, MIDI_OUTPUT, MIDI_OUTPUTS, MIDI_SUPPORT, SYSEX, inputById, inputByIdFactory, inputByName, inputByNameFactory, outputById, outputByIdFactory, outputByName, outputByNameFactory, toFrequency, toNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monotype_operators_aftertouch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monotype-operators/aftertouch */ "../midi/src/monotype-operators/aftertouch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "aftertouch", function() { return _monotype_operators_aftertouch__WEBPACK_IMPORTED_MODULE_0__["aftertouch"]; });

/* harmony import */ var _monotype_operators_filter_by_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monotype-operators/filter-by-channel */ "../midi/src/monotype-operators/filter-by-channel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterByChannel", function() { return _monotype_operators_filter_by_channel__WEBPACK_IMPORTED_MODULE_1__["filterByChannel"]; });

/* harmony import */ var _monotype_operators_filter_by_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monotype-operators/filter-by-id */ "../midi/src/monotype-operators/filter-by-id.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterById", function() { return _monotype_operators_filter_by_id__WEBPACK_IMPORTED_MODULE_2__["filterById"]; });

/* harmony import */ var _monotype_operators_filter_by_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monotype-operators/filter-by-name */ "../midi/src/monotype-operators/filter-by-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterByName", function() { return _monotype_operators_filter_by_name__WEBPACK_IMPORTED_MODULE_3__["filterByName"]; });

/* harmony import */ var _monotype_operators_main_volume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monotype-operators/main-volume */ "../midi/src/monotype-operators/main-volume.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mainVolume", function() { return _monotype_operators_main_volume__WEBPACK_IMPORTED_MODULE_4__["mainVolume"]; });

/* harmony import */ var _monotype_operators_modulation_wheel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monotype-operators/modulation-wheel */ "../midi/src/monotype-operators/modulation-wheel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modulationWheel", function() { return _monotype_operators_modulation_wheel__WEBPACK_IMPORTED_MODULE_5__["modulationWheel"]; });

/* harmony import */ var _monotype_operators_notes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monotype-operators/notes */ "../midi/src/monotype-operators/notes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notes", function() { return _monotype_operators_notes__WEBPACK_IMPORTED_MODULE_6__["notes"]; });

/* harmony import */ var _monotype_operators_pan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monotype-operators/pan */ "../midi/src/monotype-operators/pan.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pan", function() { return _monotype_operators_pan__WEBPACK_IMPORTED_MODULE_7__["pan"]; });

/* harmony import */ var _monotype_operators_pitch_bend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monotype-operators/pitch-bend */ "../midi/src/monotype-operators/pitch-bend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pitchBend", function() { return _monotype_operators_pitch_bend__WEBPACK_IMPORTED_MODULE_8__["pitchBend"]; });

/* harmony import */ var _monotype_operators_polyphonic_aftertouch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./monotype-operators/polyphonic-aftertouch */ "../midi/src/monotype-operators/polyphonic-aftertouch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polyphonicAftertouch", function() { return _monotype_operators_polyphonic_aftertouch__WEBPACK_IMPORTED_MODULE_9__["polyphonicAftertouch"]; });

/* harmony import */ var _monotype_operators_program_change__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./monotype-operators/program-change */ "../midi/src/monotype-operators/program-change.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "programChange", function() { return _monotype_operators_program_change__WEBPACK_IMPORTED_MODULE_10__["programChange"]; });

/* harmony import */ var _monotype_operators_sustain_pedal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./monotype-operators/sustain-pedal */ "../midi/src/monotype-operators/sustain-pedal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sustainPedal", function() { return _monotype_operators_sustain_pedal__WEBPACK_IMPORTED_MODULE_11__["sustainPedal"]; });

/* harmony import */ var _operators_to_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operators/to-data */ "../midi/src/operators/to-data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toData", function() { return _operators_to_data__WEBPACK_IMPORTED_MODULE_12__["toData"]; });

/* harmony import */ var _operators_to_data_byte__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operators/to-data-byte */ "../midi/src/operators/to-data-byte.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDataByte", function() { return _operators_to_data_byte__WEBPACK_IMPORTED_MODULE_13__["toDataByte"]; });

/* harmony import */ var _operators_to_status_byte__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./operators/to-status-byte */ "../midi/src/operators/to-status-byte.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toStatusByte", function() { return _operators_to_status_byte__WEBPACK_IMPORTED_MODULE_14__["toStatusByte"]; });

/* harmony import */ var _operators_to_time_stamp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./operators/to-time-stamp */ "../midi/src/operators/to-time-stamp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTimeStamp", function() { return _operators_to_time_stamp__WEBPACK_IMPORTED_MODULE_15__["toTimeStamp"]; });

/* harmony import */ var _operators_to_value_byte__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./operators/to-value-byte */ "../midi/src/operators/to-value-byte.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toValueByte", function() { return _operators_to_value_byte__WEBPACK_IMPORTED_MODULE_16__["toValueByte"]; });

/* harmony import */ var _pipes_frequency_frequency_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/frequency/frequency.module */ "../midi/src/pipes/frequency/frequency.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrequencyPipeModule", function() { return _pipes_frequency_frequency_module__WEBPACK_IMPORTED_MODULE_17__["FrequencyPipeModule"]; });

/* harmony import */ var _pipes_frequency_frequency_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/frequency/frequency.pipe */ "../midi/src/pipes/frequency/frequency.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrequencyPipe", function() { return _pipes_frequency_frequency_pipe__WEBPACK_IMPORTED_MODULE_18__["FrequencyPipe"]; });

/* harmony import */ var _tokens_midi_access__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tokens/midi-access */ "../midi/src/tokens/midi-access.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIDI_ACCESS", function() { return _tokens_midi_access__WEBPACK_IMPORTED_MODULE_19__["MIDI_ACCESS"]; });

/* harmony import */ var _tokens_midi_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tokens/midi-input */ "../midi/src/tokens/midi-input.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIDI_INPUT", function() { return _tokens_midi_input__WEBPACK_IMPORTED_MODULE_20__["MIDI_INPUT"]; });

/* harmony import */ var _tokens_midi_inputs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tokens/midi-inputs */ "../midi/src/tokens/midi-inputs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIDI_INPUTS", function() { return _tokens_midi_inputs__WEBPACK_IMPORTED_MODULE_21__["MIDI_INPUTS"]; });

/* harmony import */ var _tokens_midi_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tokens/midi-messages */ "../midi/src/tokens/midi-messages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIDI_MESSAGES", function() { return _tokens_midi_messages__WEBPACK_IMPORTED_MODULE_22__["MIDI_MESSAGES"]; });

/* harmony import */ var _tokens_midi_output__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tokens/midi-output */ "../midi/src/tokens/midi-output.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIDI_OUTPUT", function() { return _tokens_midi_output__WEBPACK_IMPORTED_MODULE_23__["MIDI_OUTPUT"]; });

/* harmony import */ var _tokens_midi_outputs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tokens/midi-outputs */ "../midi/src/tokens/midi-outputs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIDI_OUTPUTS", function() { return _tokens_midi_outputs__WEBPACK_IMPORTED_MODULE_24__["MIDI_OUTPUTS"]; });

/* harmony import */ var _tokens_midi_support__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tokens/midi-support */ "../midi/src/tokens/midi-support.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIDI_SUPPORT", function() { return _tokens_midi_support__WEBPACK_IMPORTED_MODULE_25__["MIDI_SUPPORT"]; });

/* harmony import */ var _tokens_sysex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tokens/sysex */ "../midi/src/tokens/sysex.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SYSEX", function() { return _tokens_sysex__WEBPACK_IMPORTED_MODULE_26__["SYSEX"]; });

/* harmony import */ var _utils_input_by_id__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/input-by-id */ "../midi/src/utils/input-by-id.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputById", function() { return _utils_input_by_id__WEBPACK_IMPORTED_MODULE_27__["inputById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputByIdFactory", function() { return _utils_input_by_id__WEBPACK_IMPORTED_MODULE_27__["inputByIdFactory"]; });

/* harmony import */ var _utils_input_by_name__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utils/input-by-name */ "../midi/src/utils/input-by-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputByName", function() { return _utils_input_by_name__WEBPACK_IMPORTED_MODULE_28__["inputByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputByNameFactory", function() { return _utils_input_by_name__WEBPACK_IMPORTED_MODULE_28__["inputByNameFactory"]; });

/* harmony import */ var _utils_output_by_id__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/output-by-id */ "../midi/src/utils/output-by-id.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "outputById", function() { return _utils_output_by_id__WEBPACK_IMPORTED_MODULE_29__["outputById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "outputByIdFactory", function() { return _utils_output_by_id__WEBPACK_IMPORTED_MODULE_29__["outputByIdFactory"]; });

/* harmony import */ var _utils_output_by_name__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/output-by-name */ "../midi/src/utils/output-by-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "outputByName", function() { return _utils_output_by_name__WEBPACK_IMPORTED_MODULE_30__["outputByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "outputByNameFactory", function() { return _utils_output_by_name__WEBPACK_IMPORTED_MODULE_30__["outputByNameFactory"]; });

/* harmony import */ var _utils_to_frequency__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./utils/to-frequency */ "../midi/src/utils/to-frequency.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFrequency", function() { return _utils_to_frequency__WEBPACK_IMPORTED_MODULE_31__["toFrequency"]; });

/* harmony import */ var _utils_to_note__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./utils/to-note */ "../midi/src/utils/to-note.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNote", function() { return _utils_to_note__WEBPACK_IMPORTED_MODULE_32__["toNote"]; });

/**
 * Public API Surface of @ng-web-apis/midi
 */
/* Monotype Operators */












/* Operators */





/* Pipes */


/* Tokens */








/* Utils */








/***/ }),

/***/ "../midi/src/tokens/midi-access.ts":
/*!*****************************************!*\
  !*** ../midi/src/tokens/midi-access.ts ***!
  \*****************************************/
/*! exports provided: MIDI_ACCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_ACCESS", function() { return MIDI_ACCESS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _sysex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sysex */ "../midi/src/tokens/sysex.ts");



const MIDI_ACCESS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Promise for MIDIAccess object', {
    providedIn: 'root',
    factory: () => {
        const navigatorRef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__["NAVIGATOR"]);
        const sysex = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_sysex__WEBPACK_IMPORTED_MODULE_2__["SYSEX"]);
        return navigatorRef.requestMIDIAccess
            ? navigatorRef.requestMIDIAccess({ sysex })
            : Promise.reject(new Error('Web MIDI API is not supported'));
    },
});


/***/ }),

/***/ "../midi/src/tokens/midi-input-query.ts":
/*!**********************************************!*\
  !*** ../midi/src/tokens/midi-input-query.ts ***!
  \**********************************************/
/*! exports provided: MIDI_INPUT_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_INPUT_QUERY", function() { return MIDI_INPUT_QUERY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const MIDI_INPUT_QUERY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MIDIInput object id or name');


/***/ }),

/***/ "../midi/src/tokens/midi-input.ts":
/*!****************************************!*\
  !*** ../midi/src/tokens/midi-input.ts ***!
  \****************************************/
/*! exports provided: MIDI_INPUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_INPUT", function() { return MIDI_INPUT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const MIDI_INPUT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MIDIInput object');


/***/ }),

/***/ "../midi/src/tokens/midi-inputs.ts":
/*!*****************************************!*\
  !*** ../midi/src/tokens/midi-inputs.ts ***!
  \*****************************************/
/*! exports provided: MIDI_INPUTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_INPUTS", function() { return MIDI_INPUTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_get_ports_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-ports-stream */ "../midi/src/utils/get-ports-stream.ts");


const MIDI_INPUTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Array of MIDI inputs', {
    factory: () => Object(_utils_get_ports_stream__WEBPACK_IMPORTED_MODULE_1__["getPortsStream"])('inputs'),
});


/***/ }),

/***/ "../midi/src/tokens/midi-messages.ts":
/*!*******************************************!*\
  !*** ../midi/src/tokens/midi-messages.ts ***!
  \*******************************************/
/*! exports provided: MIDI_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_MESSAGES", function() { return MIDI_MESSAGES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _midi_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./midi-access */ "../midi/src/tokens/midi-access.ts");




const MIDI_MESSAGES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('All incoming MIDI messages stream', {
    providedIn: 'root',
    factory: () => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_midi_access__WEBPACK_IMPORTED_MODULE_3__["MIDI_ACCESS"]).catch((e) => e)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(access => access instanceof Error
        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(access)
        : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(access, 'statechange').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...Array.from(access.inputs).map(([_, input]) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(input, 'midimessage')))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])()),
});


/***/ }),

/***/ "../midi/src/tokens/midi-output-query.ts":
/*!***********************************************!*\
  !*** ../midi/src/tokens/midi-output-query.ts ***!
  \***********************************************/
/*! exports provided: MIDI_OUTPUT_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_OUTPUT_QUERY", function() { return MIDI_OUTPUT_QUERY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const MIDI_OUTPUT_QUERY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MIDIOutput object id or name');


/***/ }),

/***/ "../midi/src/tokens/midi-output.ts":
/*!*****************************************!*\
  !*** ../midi/src/tokens/midi-output.ts ***!
  \*****************************************/
/*! exports provided: MIDI_OUTPUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_OUTPUT", function() { return MIDI_OUTPUT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const MIDI_OUTPUT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MIDIOutput object');


/***/ }),

/***/ "../midi/src/tokens/midi-outputs.ts":
/*!******************************************!*\
  !*** ../midi/src/tokens/midi-outputs.ts ***!
  \******************************************/
/*! exports provided: MIDI_OUTPUTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_OUTPUTS", function() { return MIDI_OUTPUTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_get_ports_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-ports-stream */ "../midi/src/utils/get-ports-stream.ts");


const MIDI_OUTPUTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Array of MIDI inputs', {
    factory: () => Object(_utils_get_ports_stream__WEBPACK_IMPORTED_MODULE_1__["getPortsStream"])('outputs'),
});


/***/ }),

/***/ "../midi/src/tokens/midi-support.ts":
/*!******************************************!*\
  !*** ../midi/src/tokens/midi-support.ts ***!
  \******************************************/
/*! exports provided: MIDI_SUPPORT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDI_SUPPORT", function() { return MIDI_SUPPORT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");


const MIDI_SUPPORT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Web MIDI API support', {
    factory: () => !!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_1__["NAVIGATOR"]).requestMIDIAccess,
});


/***/ }),

/***/ "../midi/src/tokens/sysex.ts":
/*!***********************************!*\
  !*** ../midi/src/tokens/sysex.ts ***!
  \***********************************/
/*! exports provided: SYSEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSEX", function() { return SYSEX; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");

const SYSEX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Require sysex MIDI access', {
    providedIn: 'root',
    factory: () => false,
});


/***/ }),

/***/ "../midi/src/utils/between.ts":
/*!************************************!*\
  !*** ../midi/src/utils/between.ts ***!
  \************************************/
/*! exports provided: between */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
function between(value, min, max) {
    return value >= min && value <= max;
}


/***/ }),

/***/ "../midi/src/utils/get-ports-stream.ts":
/*!*********************************************!*\
  !*** ../midi/src/utils/get-ports-stream.ts ***!
  \*********************************************/
/*! exports provided: getPortsStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortsStream", function() { return getPortsStream; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _tokens_midi_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/midi-access */ "../midi/src/tokens/midi-access.ts");




function getPortsStream(ports) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_tokens_midi_access__WEBPACK_IMPORTED_MODULE_3__["MIDI_ACCESS"]).catch(() => null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(access => access
        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(access, 'statechange').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => [...access[ports].values()]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])([...access[ports].values()]))
        : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
}


/***/ }),

/***/ "../midi/src/utils/input-by-id.ts":
/*!****************************************!*\
  !*** ../midi/src/utils/input-by-id.ts ***!
  \****************************************/
/*! exports provided: inputById, inputByIdFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputById", function() { return inputById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputByIdFactory", function() { return inputByIdFactory; });
/* harmony import */ var _tokens_midi_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/midi-access */ "../midi/src/tokens/midi-access.ts");
/* harmony import */ var _tokens_midi_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/midi-input */ "../midi/src/tokens/midi-input.ts");
/* harmony import */ var _tokens_midi_input_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/midi-input-query */ "../midi/src/tokens/midi-input-query.ts");



/**
 * Provide MIDIInput by id
 *
 * @param id
 */
function inputById(id) {
    return [
        {
            provide: _tokens_midi_input_query__WEBPACK_IMPORTED_MODULE_2__["MIDI_INPUT_QUERY"],
            useValue: id,
        },
        {
            provide: _tokens_midi_input__WEBPACK_IMPORTED_MODULE_1__["MIDI_INPUT"],
            deps: [_tokens_midi_access__WEBPACK_IMPORTED_MODULE_0__["MIDI_ACCESS"], _tokens_midi_input_query__WEBPACK_IMPORTED_MODULE_2__["MIDI_INPUT_QUERY"]],
            useFactory: inputByIdFactory,
        },
    ];
}
function inputByIdFactory(midiAccess, id) {
    return midiAccess.then(access => access.inputs.get(id));
}


/***/ }),

/***/ "../midi/src/utils/input-by-name.ts":
/*!******************************************!*\
  !*** ../midi/src/utils/input-by-name.ts ***!
  \******************************************/
/*! exports provided: inputByName, inputByNameFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputByName", function() { return inputByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputByNameFactory", function() { return inputByNameFactory; });
/* harmony import */ var _tokens_midi_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/midi-access */ "../midi/src/tokens/midi-access.ts");
/* harmony import */ var _tokens_midi_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/midi-input */ "../midi/src/tokens/midi-input.ts");
/* harmony import */ var _tokens_midi_input_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/midi-input-query */ "../midi/src/tokens/midi-input-query.ts");



/**
 * Provide MIDIInput by name
 *
 * @param name
 */
function inputByName(name) {
    return [
        {
            provide: _tokens_midi_input_query__WEBPACK_IMPORTED_MODULE_2__["MIDI_INPUT_QUERY"],
            useValue: name,
        },
        {
            provide: _tokens_midi_input__WEBPACK_IMPORTED_MODULE_1__["MIDI_INPUT"],
            deps: [_tokens_midi_access__WEBPACK_IMPORTED_MODULE_0__["MIDI_ACCESS"], _tokens_midi_input_query__WEBPACK_IMPORTED_MODULE_2__["MIDI_INPUT_QUERY"]],
            useFactory: inputByNameFactory,
        },
    ];
}
function inputByNameFactory(midiAccess, name) {
    return midiAccess.then(access => [...access.inputs.values()].find(input => input.name === name));
}


/***/ }),

/***/ "../midi/src/utils/output-by-id.ts":
/*!*****************************************!*\
  !*** ../midi/src/utils/output-by-id.ts ***!
  \*****************************************/
/*! exports provided: outputById, outputByIdFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputById", function() { return outputById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputByIdFactory", function() { return outputByIdFactory; });
/* harmony import */ var _tokens_midi_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/midi-access */ "../midi/src/tokens/midi-access.ts");
/* harmony import */ var _tokens_midi_output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/midi-output */ "../midi/src/tokens/midi-output.ts");
/* harmony import */ var _tokens_midi_output_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/midi-output-query */ "../midi/src/tokens/midi-output-query.ts");



/**
 * Provide MIDIOutput by id
 *
 * @param id
 */
function outputById(id) {
    return [
        {
            provide: _tokens_midi_output_query__WEBPACK_IMPORTED_MODULE_2__["MIDI_OUTPUT_QUERY"],
            useValue: id,
        },
        {
            provide: _tokens_midi_output__WEBPACK_IMPORTED_MODULE_1__["MIDI_OUTPUT"],
            deps: [_tokens_midi_access__WEBPACK_IMPORTED_MODULE_0__["MIDI_ACCESS"], _tokens_midi_output_query__WEBPACK_IMPORTED_MODULE_2__["MIDI_OUTPUT_QUERY"]],
            useFactory: outputByIdFactory,
        },
    ];
}
function outputByIdFactory(midiAccess, id) {
    return midiAccess.then(access => access.outputs.get(id));
}


/***/ }),

/***/ "../midi/src/utils/output-by-name.ts":
/*!*******************************************!*\
  !*** ../midi/src/utils/output-by-name.ts ***!
  \*******************************************/
/*! exports provided: outputByName, outputByNameFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputByName", function() { return outputByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputByNameFactory", function() { return outputByNameFactory; });
/* harmony import */ var _tokens_midi_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/midi-access */ "../midi/src/tokens/midi-access.ts");
/* harmony import */ var _tokens_midi_output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/midi-output */ "../midi/src/tokens/midi-output.ts");
/* harmony import */ var _tokens_midi_output_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/midi-output-query */ "../midi/src/tokens/midi-output-query.ts");



/**
 * Provide MIDIOutput by name
 *
 * @param name
 */
function outputByName(name) {
    return [
        {
            provide: _tokens_midi_output_query__WEBPACK_IMPORTED_MODULE_2__["MIDI_OUTPUT_QUERY"],
            useValue: name,
        },
        {
            provide: _tokens_midi_output__WEBPACK_IMPORTED_MODULE_1__["MIDI_OUTPUT"],
            deps: [_tokens_midi_access__WEBPACK_IMPORTED_MODULE_0__["MIDI_ACCESS"], _tokens_midi_output_query__WEBPACK_IMPORTED_MODULE_2__["MIDI_OUTPUT_QUERY"]],
            useFactory: outputByNameFactory,
        },
    ];
}
function outputByNameFactory(midiAccess, name) {
    return midiAccess.then(access => [...access.outputs.values()].find(output => output.name === name));
}


/***/ }),

/***/ "../midi/src/utils/to-frequency.ts":
/*!*****************************************!*\
  !*** ../midi/src/utils/to-frequency.ts ***!
  \*****************************************/
/*! exports provided: toFrequency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFrequency", function() { return toFrequency; });
/**
 * Convert MIDI notes to frequencies
 *
 * @param note MIDI note
 * @param tuning tuning for middle A (440 by default)
 */
function toFrequency(note, tuning = 440) {
    return Math.pow(2, (note - 69) / 12) * tuning;
}


/***/ }),

/***/ "../midi/src/utils/to-note.ts":
/*!************************************!*\
  !*** ../midi/src/utils/to-note.ts ***!
  \************************************/
/*! exports provided: toNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNote", function() { return toNote; });
const COEFFICIENT = Math.pow(2, (1 / 12));
/**
 * Convert frequencies to MIDI notes
 *
 * @param frequency
 * @param tuning tuning for middle A (440 by default)
 */
function toNote(frequency, tuning = 440) {
    return Math.round(Math.log(frequency / tuning) / Math.log(COEFFICIENT)) + 69;
}


/***/ }),

/***/ "./src/app/adsr.pipe.ts":
/*!******************************!*\
  !*** ./src/app/adsr.pipe.ts ***!
  \******************************/
/*! exports provided: AdsrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsrPipe", function() { return AdsrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AdsrPipe = class AdsrPipe {
    transform(value, attack, decay, sustain, release) {
        return value
            ? [
                {
                    value: 0,
                    duration: 0,
                    mode: 'instant',
                },
                {
                    value,
                    duration: attack,
                    mode: 'linear',
                },
                {
                    value: sustain,
                    duration: decay,
                    mode: 'linear',
                },
            ]
            : {
                value: 0,
                duration: release,
                mode: 'linear',
            };
    }
};
AdsrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'adsr',
    })
], AdsrPipe);



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_web_apis_audio_fesm2015_ng_web_apis_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-web-apis/audio/fesm2015/ng-web-apis-audio */ "../../node_modules/@ng-web-apis/audio/fesm2015/ng-web-apis-audio.js");
/* harmony import */ var _ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-web-apis/midi */ "../midi/src/public-api.ts");
/* harmony import */ var _adsr_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adsr.pipe */ "./src/app/adsr.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");










let AppBrowserModule = class AppBrowserModule {
};
AppBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _ng_web_apis_audio_fesm2015_ng_web_apis_audio__WEBPACK_IMPORTED_MODULE_5__["WebAudioModule"],
            _ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_6__["FrequencyPipeModule"],
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _demo_demo_component__WEBPACK_IMPORTED_MODULE_9__["DemoComponent"], _adsr_pipe__WEBPACK_IMPORTED_MODULE_7__["AdsrPipe"]],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"],
            },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"],
                useValue: '',
            },
        ],
    })
], AppBrowserModule);



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!supported\">\n    Web MIDI API is not supported by your browser\n</p>\n<demo *ngIf=\"started; else button\"></demo>\n<ng-template #button>\n    <button class=\"start\" (click)=\"start()\">\n        Start AudioContext\n    </button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  perspective: 150vw;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 600px) {\n  :host {\n    perspective: 250vw;\n  }\n}\n.start {\n  display: block;\n  margin: 0 auto;\n  background: gainsboro;\n  border: none;\n  padding: 1em 2em;\n  border-radius: 0.5em;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.start:hover {\n  background: whitesmoke;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9uZy13ZWItYXBpcy9taWRpL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQUE7SUFFUSxrQkFBQTtFQ0NWO0FBQ0Y7QURHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0RKO0FER0k7RUFDSSxzQkFBQTtBQ0RSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcGVyc3BlY3RpdmU6IDE1MHZ3O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAmIHtcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAyNTB2dztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN0YXJ0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgcGVyc3BlY3RpdmU6IDE1MHZ3O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICA6aG9zdCB7XG4gICAgcGVyc3BlY3RpdmU6IDI1MHZ3O1xuICB9XG59XG4uc3RhcnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG4uc3RhcnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/midi */ "../midi/src/public-api.ts");



let AppComponent = class AppComponent {
    constructor(supported) {
        this.supported = supported;
        this.started = false;
    }
    start() {
        this.started = true;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__["MIDI_SUPPORT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], AppComponent);



/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"notes$ | async as notes\">\n    <ng-container *ngFor=\"let note of notes | keyvalue; trackBy: noteKey\">\n        <ng-container *ngIf=\"note.value !== null\">\n            <ng-container\n                waOscillatorNode\n                detune=\"5\"\n                autoplay\n                [frequency]=\"note.key | frequency\"\n            >\n                <ng-container\n                    waGainNode\n                    gain=\"0\"\n                    [gain]=\"note.value | adsr: 0:0.1:note.value * 0.8:1\"\n                >\n                    <ng-container waAudioDestinationNode></ng-container>\n                </ng-container>\n            </ng-container>\n            <ng-container\n                waOscillatorNode\n                type=\"sawtooth\"\n                autoplay\n                [frequency]=\"note.key | frequency\"\n            >\n                <ng-container\n                    waGainNode\n                    gain=\"0\"\n                    [gain]=\"note.value | adsr: 0:0.1:note.value * 0.8:1\"\n                >\n                    <ng-container\n                        waAudioDestinationNode\n                        (quiet)=\"onQuiet(note.key)\"\n                    ></ng-container>\n                    <ng-container [waOutput]=\"convolver\"></ng-container>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n    <ng-container #convolver=\"AudioNode\" waConvolverNode [buffer]=\"response | async\">\n        <ng-container waAudioDestinationNode></ng-container>\n    </ng-container>\n\n    <div\n        *ngFor=\"let key of octaves\"\n        [class]=\"getClass(notes, key)\"\n        (mousedown)=\"onMouseDown(key)\"\n        (touchstart)=\"onMouseDown(key)\"\n    ></div\n></ng-container>\n"

/***/ }),

/***/ "./src/app/demo/demo.component.less":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: -12.5vw auto 12.5vw;\n  height: 50vw;\n  display: flex;\n  flex-direction: row;\n  transform-origin: bottom;\n  transform-style: preserve-3d;\n  transform: scale(0.75) rotateX(60deg);\n}\n:host::before,\n:host::after {\n  content: '';\n  position: absolute;\n  background: #3c3c3c;\n  background-clip: content-box;\n  top: 0;\n  left: 0.75vw;\n  right: 0.75vw;\n  bottom: 0;\n  transform: translateZ(-6.875vw);\n  box-shadow: 0 0 5vw rgba(68, 68, 68, 0.4), 0 0 0 12.5vw white;\n}\n:host::after {\n  left: 3.125vw;\n  right: 3.125vw;\n  bottom: auto;\n  height: 6.9vw;\n  transform-origin: top;\n  transform: rotateX(-90deg);\n}\n@media (orientation: landscape) {\n  :host {\n    margin: -28vw auto 0;\n    transform: translate3d(0, -5vw, 0) scale(0.5) rotateX(60deg);\n  }\n}\n.key-1,\n.key-3,\n.key-5,\n.key-6,\n.key-8,\n.key-10,\n.key-12 {\n  position: relative;\n  width: 6.875vw;\n  height: 50vw;\n  padding: 0;\n  border: none;\n  border-top: 32.5vw solid transparent;\n  box-sizing: border-box;\n  background-color: #edefee;\n  background-clip: content-box;\n  margin: 0 0.25vw;\n  outline: none;\n  transform-origin: top;\n  transform-style: preserve-3d;\n  box-shadow: inset 0.25vw 0 0.25vw -0.125vw rgba(255, 255, 255, 0.8), inset -0.25vw 0 0.25vw -0.125vw rgba(255, 255, 255, 0.8), inset 1.25vw -1.25vw 1.25vw -1.25vw rgba(68, 68, 68, 0.3), inset -1.25vw 0 1.25vw -1.25vw rgba(68, 68, 68, 0.3), inset 0 -25vw 25vw -25vw rgba(255, 255, 255, 0.7), inset 0 0 0 120vw rgba(237, 239, 238, 0.5);\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.key-1:hover,\n.key-3:hover,\n.key-5:hover,\n.key-6:hover,\n.key-8:hover,\n.key-10:hover,\n.key-12:hover {\n  background-color: white;\n}\n.key-1:hover::before,\n.key-3:hover::before,\n.key-5:hover::before,\n.key-6:hover::before,\n.key-8:hover::before,\n.key-10:hover::before,\n.key-12:hover::before {\n  background: white;\n}\n.key-1._active,\n.key-3._active,\n.key-5._active,\n.key-6._active,\n.key-8._active,\n.key-10._active,\n.key-12._active {\n  transform: rotateX(-7deg);\n  background-color: #4bc9f3;\n}\n.key-1._active::before,\n.key-3._active::before,\n.key-5._active::before,\n.key-6._active::before,\n.key-8._active::before,\n.key-10._active::before,\n.key-12._active::before,\n.key-1._active::after,\n.key-3._active::after,\n.key-5._active::after,\n.key-6._active::after,\n.key-8._active::after,\n.key-10._active::after,\n.key-12._active::after {\n  background-color: #4bc9f3;\n}\n.key-1::before,\n.key-3::before,\n.key-5::before,\n.key-6::before,\n.key-8::before,\n.key-10::before,\n.key-12::before,\n.key-1::after,\n.key-3::after,\n.key-5::after,\n.key-6::after,\n.key-8::after,\n.key-10::after,\n.key-12::after {\n  content: '';\n  background: #edefee;\n  position: absolute;\n  height: 32.5vw;\n  top: -32.25vw;\n  left: 0;\n  box-shadow: inset 0 25vw 25vw -25vw rgba(68, 68, 68, 0.3), inset 1.25vw 1.25vw 1.25vw -1.25vw rgba(68, 68, 68, 0.3), inset -1.25vw 0 1.25vw -1.25vw rgba(68, 68, 68, 0.3), inset 0 0 0 120vw rgba(237, 239, 238, 0.5);\n  transition: background 0.3s ease;\n}\n.key-1::after,\n.key-3::after,\n.key-5::after,\n.key-6::after,\n.key-8::after,\n.key-10::after,\n.key-12::after {\n  top: 100%;\n  width: 100%;\n  height: 6.875vw;\n  transform-origin: top;\n  transform: rotateX(-90deg);\n  box-shadow: inset 0 -3.75vw 6.25vw -3.75vw rgba(0, 0, 0, 0.3), inset 0 0.25vw 0.125vw white, inset 0 0.5vw rgba(0, 0, 0, 0.1), inset 0 1.25vw 1.25vw -1.25vw rgba(0, 0, 0, 0.4);\n}\n.key-1::before,\n.key-6::before {\n  right: 2.5vw;\n}\n.key-3::before {\n  left: 1vw;\n  right: 1vw;\n}\n.key-5::before,\n.key-12::before {\n  left: 2.5vw;\n  right: 0;\n}\n.key-8::before {\n  left: 1.5vw;\n  right: 2vw;\n}\n.key-10::before {\n  left: 2vw;\n  right: 1.5vw;\n}\n.key-2,\n.key-4,\n.key-7,\n.key-9,\n.key-11 {\n  position: relative;\n  color: #444;\n  width: 3vw;\n  height: 32.25vw;\n  border: none;\n  padding: 0;\n  outline: none;\n  background: #5e5e5e;\n  border-top-left-radius: 0.75vw;\n  border-top-right-radius: 0.75vw;\n  transform: translateZ(3.375vw);\n  transform-style: preserve-3d;\n  transform-origin: top;\n  box-shadow: inset 0 -0.875vw 0.625vw, inset 0.5vw 0 0.625vw, inset -0.5vw 0 0.625vw, inset 0 0 0 120vw rgba(94, 94, 94, 0.5);\n  z-index: 1;\n  transition: background 0.3s ease, transform 0.3s ease;\n}\n.key-2:hover,\n.key-4:hover,\n.key-7:hover,\n.key-9:hover,\n.key-11:hover {\n  background: #808080;\n}\n.key-2._active,\n.key-4._active,\n.key-7._active,\n.key-9._active,\n.key-11._active {\n  transform: rotateX(-5deg) translateZ(3.375vw);\n  background-color: #4bc9f3;\n}\n.key-2._active::before,\n.key-4._active::before,\n.key-7._active::before,\n.key-9._active::before,\n.key-11._active::before,\n.key-2._active::after,\n.key-4._active::after,\n.key-7._active::after,\n.key-9._active::after,\n.key-11._active::after {\n  background-color: #4bc9f3;\n  border-bottom-color: #4bc9f3;\n}\n.key-2::before,\n.key-4::before,\n.key-7::before,\n.key-9::before,\n.key-11::before {\n  content: '';\n  position: absolute;\n  background: #444;\n  border-top-left-radius: 0.75vw;\n  top: 0;\n  height: 100%;\n  width: 4.875vw;\n  transform-origin: left;\n  left: 0.125vw;\n  transform: rotateY(93deg);\n  box-shadow: inset -6.25vw 0 6.25vw -6.25vw black;\n  transition: background-color 0.3s;\n}\n.key-2::after,\n.key-4::after,\n.key-7::after,\n.key-9::after,\n.key-11::after {\n  content: '';\n  position: absolute;\n  top: 100%;\n  left: -0.25vw;\n  width: 100%;\n  border-bottom: 3.875vw solid #3f3f3f;\n  border-left: 0.25vw solid transparent;\n  border-right: 0.25vw solid transparent;\n  height: 0;\n  transform-origin: top;\n  transform: rotateX(-90deg);\n  box-shadow: 0 0.875vw 2.5vw rgba(0, 0, 0, 0.25), 0 0.375vw 0.625vw -0.25vw rgba(255, 255, 255, 0.8), 0 0.625vw, 0 2.5vw #3f3f3f, 0 5vw #3f3f3f;\n  transition: border 0.3s;\n}\n.key-2:nth-child(-n + 12)::before,\n.key-4:nth-child(-n + 12)::before,\n.key-7:nth-child(-n + 12)::before,\n.key-9:nth-child(-n + 12)::before,\n.key-11:nth-child(-n + 12)::before {\n  left: 99%;\n  transform: rotateY(87deg);\n}\n.key-2,\n.key-7 {\n  margin: 0 -0.75vw 0 -2.25vw;\n}\n.key-4,\n.key-11 {\n  margin: 0 -2.25vw 0 -0.75vw;\n}\n.key-9 {\n  margin: 0 -1.5vw 0 -1.5vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9uZy13ZWItYXBpcy9taWRpL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9kZW1vL2RlbW8uY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZGVtby9kZW1vLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0FDQ0o7QURDSTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkRBQUE7QUNDUjtBREVJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUNBUjtBREdJO0VBQUE7SUFFUSxvQkFBQTtJQUNBLDREQUFBO0VDRFY7QUFDRjtBREtBOzs7Ozs7O0VBT0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNlVBQUE7RUFLQSwyREFBQTtBQ1BKO0FEU0k7Ozs7Ozs7RUFDSSx1QkFBQTtBQ0RSO0FER1E7Ozs7Ozs7RUFDSSxpQkFBQTtBQ0taO0FEREk7Ozs7Ozs7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDU1I7QURQUTs7Ozs7Ozs7Ozs7Ozs7RUFFSSx5QkFBQTtBQ3FCWjtBRGpCSTs7Ozs7Ozs7Ozs7Ozs7RUFFSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHFOQUFBO0VBSUEsZ0NBQUE7QUM0QlI7QUR6Qkk7Ozs7Ozs7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0tBQUE7QUNpQ1I7QUQzQkE7O0VBRUksWUFBQTtBQzZCSjtBRDFCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDNEJKO0FEekJBOztFQUVJLFdBQUE7RUFDQSxRQUFBO0FDMkJKO0FEeEJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUMwQko7QUR2QkE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQ3lCSjtBRHRCQTs7Ozs7RUFLSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRIQUFBO0VBRUEsVUFBQTtFQUNBLHFEQUFBO0FDdUJKO0FEckJJOzs7OztFQUNJLG1CQUFBO0FDMkJSO0FEeEJJOzs7OztFQUNJLDZDQUFBO0VBQ0EseUJBQUE7QUM4QlI7QUQ1QlE7Ozs7Ozs7Ozs7RUFFSSx5QkFBQTtFQUNBLDRCQUFBO0FDc0NaO0FEbENJOzs7OztFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7QUN3Q1I7QURyQ0k7Ozs7O0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4SUFBQTtFQUdBLHVCQUFBO0FDeUNSO0FEdENJOzs7OztFQUNJLFNBQUE7RUFDQSx5QkFBQTtBQzRDUjtBRHhDQTs7RUFFSSwyQkFBQTtBQzBDSjtBRHZDQTs7RUFFSSwyQkFBQTtBQ3lDSjtBRHRDQTtFQUNJLHlCQUFBO0FDd0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9kZW1vL2RlbW8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWFyZ2luOiAtMTIuNXZ3IGF1dG8gMTIuNXZ3O1xuICAgIGhlaWdodDogNTB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KSByb3RhdGVYKDYwZGVnKTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjNDQ0LCAzJSk7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMC43NXZ3O1xuICAgICAgICByaWdodDogMC43NXZ3O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNi44NzV2dyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1dncgZmFkZSgjNDQ0LCA0MCUpLCAwIDAgMCAxMi41dncgd2hpdGU7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBsZWZ0OiAzLjEyNXZ3O1xuICAgICAgICByaWdodDogMy4xMjV2dztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDYuOXZ3O1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICAgIH1cblxuICAgIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTI4dncgYXV0byAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXZ3LCAwKSBzY2FsZSgwLjUpIHJvdGF0ZVgoNjBkZWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ua2V5LTEsXG4ua2V5LTMsXG4ua2V5LTUsXG4ua2V5LTYsXG4ua2V5LTgsXG4ua2V5LTEwLFxuLmtleS0xMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2Ljg3NXZ3O1xuICAgIGhlaWdodDogNTB2dztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wOiAzMi41dncgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZmVlO1xuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG4gICAgbWFyZ2luOiAwIDAuMjV2dztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAuMjV2dyAwIDAuMjV2dyAtMC4xMjV2dyBmYWRlKHdoaXRlLCA4MCUpLFxuICAgICAgICBpbnNldCAtMC4yNXZ3IDAgMC4yNXZ3IC0wLjEyNXZ3IGZhZGUod2hpdGUsIDgwJSksXG4gICAgICAgIGluc2V0IDEuMjV2dyAtMS4yNXZ3IDEuMjV2dyAtMS4yNXZ3IGZhZGUoIzQ0NCwgMzAlKSxcbiAgICAgICAgaW5zZXQgLTEuMjV2dyAwIDEuMjV2dyAtMS4yNXZ3IGZhZGUoIzQ0NCwgMzAlKSxcbiAgICAgICAgaW5zZXQgMCAtMjV2dyAyNXZ3IC0yNXZ3IGZhZGUod2hpdGUsIDcwJSksIGluc2V0IDAgMCAwIDEyMHZ3IGZhZGUoI2VkZWZlZSwgNTAlKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLl9hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTdkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjOWYzO1xuXG4gICAgICAgICY6OmJlZm9yZSxcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzlmMztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWRlZmVlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMzIuNXZ3O1xuICAgICAgICB0b3A6IC0zMi4yNXZ3O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDI1dncgMjV2dyAtMjV2dyBmYWRlKCM0NDQsIDMwJSksXG4gICAgICAgICAgICBpbnNldCAxLjI1dncgMS4yNXZ3IDEuMjV2dyAtMS4yNXZ3IGZhZGUoIzQ0NCwgMzAlKSxcbiAgICAgICAgICAgIGluc2V0IC0xLjI1dncgMCAxLjI1dncgLTEuMjV2dyBmYWRlKCM0NDQsIDMwJSksXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAxMjB2dyBmYWRlKCNlZGVmZWUsIDUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2Ljg3NXZ3O1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0zLjc1dncgNi4yNXZ3IC0zLjc1dncgZmFkZShibGFjaywgMzAlKSxcbiAgICAgICAgICAgIGluc2V0IDAgMC4yNXZ3IDAuMTI1dncgd2hpdGUsIGluc2V0IDAgMC41dncgZmFkZShibGFjaywgMTAlKSxcbiAgICAgICAgICAgIGluc2V0IDAgMS4yNXZ3IDEuMjV2dyAtMS4yNXZ3IGZhZGUoYmxhY2ssIDQwJSk7XG4gICAgfVxufVxuXG4ua2V5LTE6OmJlZm9yZSxcbi5rZXktNjo6YmVmb3JlIHtcbiAgICByaWdodDogMi41dnc7XG59XG5cbi5rZXktMzo6YmVmb3JlIHtcbiAgICBsZWZ0OiAxdnc7XG4gICAgcmlnaHQ6IDF2dztcbn1cblxuLmtleS01OjpiZWZvcmUsXG4ua2V5LTEyOjpiZWZvcmUge1xuICAgIGxlZnQ6IDIuNXZ3O1xuICAgIHJpZ2h0OiAwO1xufVxuXG4ua2V5LTg6OmJlZm9yZSB7XG4gICAgbGVmdDogMS41dnc7XG4gICAgcmlnaHQ6IDJ2dztcbn1cblxuLmtleS0xMDo6YmVmb3JlIHtcbiAgICBsZWZ0OiAydnc7XG4gICAgcmlnaHQ6IDEuNXZ3O1xufVxuXG4ua2V5LTIsXG4ua2V5LTQsXG4ua2V5LTcsXG4ua2V5LTksXG4ua2V5LTExIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgd2lkdGg6IDN2dztcbiAgICBoZWlnaHQ6IDMyLjI1dnc7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCM0NDQsIDEwJSk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC43NXZ3O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjc1dnc7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDMuMzc1dncpO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTAuODc1dncgMC42MjV2dywgaW5zZXQgMC41dncgMCAwLjYyNXZ3LCBpbnNldCAtMC41dncgMCAwLjYyNXZ3LFxuICAgICAgICBpbnNldCAwIDAgMCAxMjB2dyBmYWRlKGxpZ2h0ZW4oIzQ0NCwgMTAlKSwgNTAlKTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbih3aGl0ZSwgNTAlKTtcbiAgICB9XG5cbiAgICAmLl9hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTVkZWcpIHRyYW5zbGF0ZVooMy4zNzV2dyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmM5ZjM7XG5cbiAgICAgICAgJjo6YmVmb3JlLFxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjOWYzO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRiYzlmMztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NDQ7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNzV2dztcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA0Ljg3NXZ3O1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgICAgICBsZWZ0OiAwLjEyNXZ3O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTNkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtNi4yNXZ3IDAgNi4yNXZ3IC02LjI1dncgYmxhY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogLTAuMjV2dztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDMuODc1dncgc29saWQgZGFya2VuKCM0NDQsIDIlKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDAuMjV2dyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwLjI1dncgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjg3NXZ3IDIuNXZ3IGZhZGUoYmxhY2ssIDI1JSksXG4gICAgICAgICAgICAwIDAuMzc1dncgMC42MjV2dyAtMC4yNXZ3IGZhZGUod2hpdGUsIDgwJSksIDAgMC42MjV2dyxcbiAgICAgICAgICAgIDAgMi41dncgZGFya2VuKCM0NDQsIDIlKSwgMCA1dncgZGFya2VuKCM0NDQsIDIlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3M7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoLW4gKyAxMik6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDk5JTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDg3ZGVnKTtcbiAgICB9XG59XG5cbi5rZXktMixcbi5rZXktNyB7XG4gICAgbWFyZ2luOiAwIC0wLjc1dncgMCAtMi4yNXZ3O1xufVxuXG4ua2V5LTQsXG4ua2V5LTExIHtcbiAgICBtYXJnaW46IDAgLTIuMjV2dyAwIC0wLjc1dnc7XG59XG5cbi5rZXktOSB7XG4gICAgbWFyZ2luOiAwIC0xLjV2dyAwIC0xLjV2dztcbn1cbiIsIjpob3N0IHtcbiAgbWFyZ2luOiAtMTIuNXZ3IGF1dG8gMTIuNXZ3O1xuICBoZWlnaHQ6IDUwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KSByb3RhdGVYKDYwZGVnKTtcbn1cbjpob3N0OjpiZWZvcmUsXG46aG9zdDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjM2MzYzNjO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDAuNzV2dztcbiAgcmlnaHQ6IDAuNzV2dztcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTYuODc1dncpO1xuICBib3gtc2hhZG93OiAwIDAgNXZ3IHJnYmEoNjgsIDY4LCA2OCwgMC40KSwgMCAwIDAgMTIuNXZ3IHdoaXRlO1xufVxuOmhvc3Q6OmFmdGVyIHtcbiAgbGVmdDogMy4xMjV2dztcbiAgcmlnaHQ6IDMuMTI1dnc7XG4gIGJvdHRvbTogYXV0bztcbiAgaGVpZ2h0OiA2Ljl2dztcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICA6aG9zdCB7XG4gICAgbWFyZ2luOiAtMjh2dyBhdXRvIDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXZ3LCAwKSBzY2FsZSgwLjUpIHJvdGF0ZVgoNjBkZWcpO1xuICB9XG59XG4ua2V5LTEsXG4ua2V5LTMsXG4ua2V5LTUsXG4ua2V5LTYsXG4ua2V5LTgsXG4ua2V5LTEwLFxuLmtleS0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYuODc1dnc7XG4gIGhlaWdodDogNTB2dztcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAzMi41dncgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVmZWU7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG4gIG1hcmdpbjogMCAwLjI1dnc7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMC4yNXZ3IDAgMC4yNXZ3IC0wLjEyNXZ3IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgaW5zZXQgLTAuMjV2dyAwIDAuMjV2dyAtMC4xMjV2dyByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIGluc2V0IDEuMjV2dyAtMS4yNXZ3IDEuMjV2dyAtMS4yNXZ3IHJnYmEoNjgsIDY4LCA2OCwgMC4zKSwgaW5zZXQgLTEuMjV2dyAwIDEuMjV2dyAtMS4yNXZ3IHJnYmEoNjgsIDY4LCA2OCwgMC4zKSwgaW5zZXQgMCAtMjV2dyAyNXZ3IC0yNXZ3IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgaW5zZXQgMCAwIDAgMTIwdncgcmdiYSgyMzcsIDIzOSwgMjM4LCAwLjUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5rZXktMTpob3Zlcixcbi5rZXktMzpob3Zlcixcbi5rZXktNTpob3Zlcixcbi5rZXktNjpob3Zlcixcbi5rZXktODpob3Zlcixcbi5rZXktMTA6aG92ZXIsXG4ua2V5LTEyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ua2V5LTE6aG92ZXI6OmJlZm9yZSxcbi5rZXktMzpob3Zlcjo6YmVmb3JlLFxuLmtleS01OmhvdmVyOjpiZWZvcmUsXG4ua2V5LTY6aG92ZXI6OmJlZm9yZSxcbi5rZXktODpob3Zlcjo6YmVmb3JlLFxuLmtleS0xMDpob3Zlcjo6YmVmb3JlLFxuLmtleS0xMjpob3Zlcjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ua2V5LTEuX2FjdGl2ZSxcbi5rZXktMy5fYWN0aXZlLFxuLmtleS01Ll9hY3RpdmUsXG4ua2V5LTYuX2FjdGl2ZSxcbi5rZXktOC5fYWN0aXZlLFxuLmtleS0xMC5fYWN0aXZlLFxuLmtleS0xMi5fYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC03ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzlmMztcbn1cbi5rZXktMS5fYWN0aXZlOjpiZWZvcmUsXG4ua2V5LTMuX2FjdGl2ZTo6YmVmb3JlLFxuLmtleS01Ll9hY3RpdmU6OmJlZm9yZSxcbi5rZXktNi5fYWN0aXZlOjpiZWZvcmUsXG4ua2V5LTguX2FjdGl2ZTo6YmVmb3JlLFxuLmtleS0xMC5fYWN0aXZlOjpiZWZvcmUsXG4ua2V5LTEyLl9hY3RpdmU6OmJlZm9yZSxcbi5rZXktMS5fYWN0aXZlOjphZnRlcixcbi5rZXktMy5fYWN0aXZlOjphZnRlcixcbi5rZXktNS5fYWN0aXZlOjphZnRlcixcbi5rZXktNi5fYWN0aXZlOjphZnRlcixcbi5rZXktOC5fYWN0aXZlOjphZnRlcixcbi5rZXktMTAuX2FjdGl2ZTo6YWZ0ZXIsXG4ua2V5LTEyLl9hY3RpdmU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzlmMztcbn1cbi5rZXktMTo6YmVmb3JlLFxuLmtleS0zOjpiZWZvcmUsXG4ua2V5LTU6OmJlZm9yZSxcbi5rZXktNjo6YmVmb3JlLFxuLmtleS04OjpiZWZvcmUsXG4ua2V5LTEwOjpiZWZvcmUsXG4ua2V5LTEyOjpiZWZvcmUsXG4ua2V5LTE6OmFmdGVyLFxuLmtleS0zOjphZnRlcixcbi5rZXktNTo6YWZ0ZXIsXG4ua2V5LTY6OmFmdGVyLFxuLmtleS04OjphZnRlcixcbi5rZXktMTA6OmFmdGVyLFxuLmtleS0xMjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZDogI2VkZWZlZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMyLjV2dztcbiAgdG9wOiAtMzIuMjV2dztcbiAgbGVmdDogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAyNXZ3IDI1dncgLTI1dncgcmdiYSg2OCwgNjgsIDY4LCAwLjMpLCBpbnNldCAxLjI1dncgMS4yNXZ3IDEuMjV2dyAtMS4yNXZ3IHJnYmEoNjgsIDY4LCA2OCwgMC4zKSwgaW5zZXQgLTEuMjV2dyAwIDEuMjV2dyAtMS4yNXZ3IHJnYmEoNjgsIDY4LCA2OCwgMC4zKSwgaW5zZXQgMCAwIDAgMTIwdncgcmdiYSgyMzcsIDIzOSwgMjM4LCAwLjUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cbi5rZXktMTo6YWZ0ZXIsXG4ua2V5LTM6OmFmdGVyLFxuLmtleS01OjphZnRlcixcbi5rZXktNjo6YWZ0ZXIsXG4ua2V5LTg6OmFmdGVyLFxuLmtleS0xMDo6YWZ0ZXIsXG4ua2V5LTEyOjphZnRlciB7XG4gIHRvcDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNi44NzV2dztcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMy43NXZ3IDYuMjV2dyAtMy43NXZ3IHJnYmEoMCwgMCwgMCwgMC4zKSwgaW5zZXQgMCAwLjI1dncgMC4xMjV2dyB3aGl0ZSwgaW5zZXQgMCAwLjV2dyByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMS4yNXZ3IDEuMjV2dyAtMS4yNXZ3IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5rZXktMTo6YmVmb3JlLFxuLmtleS02OjpiZWZvcmUge1xuICByaWdodDogMi41dnc7XG59XG4ua2V5LTM6OmJlZm9yZSB7XG4gIGxlZnQ6IDF2dztcbiAgcmlnaHQ6IDF2dztcbn1cbi5rZXktNTo6YmVmb3JlLFxuLmtleS0xMjo6YmVmb3JlIHtcbiAgbGVmdDogMi41dnc7XG4gIHJpZ2h0OiAwO1xufVxuLmtleS04OjpiZWZvcmUge1xuICBsZWZ0OiAxLjV2dztcbiAgcmlnaHQ6IDJ2dztcbn1cbi5rZXktMTA6OmJlZm9yZSB7XG4gIGxlZnQ6IDJ2dztcbiAgcmlnaHQ6IDEuNXZ3O1xufVxuLmtleS0yLFxuLmtleS00LFxuLmtleS03LFxuLmtleS05LFxuLmtleS0xMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogMzIuMjV2dztcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNWU1ZTVlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjc1dnc7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjc1dnc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigzLjM3NXZ3KTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0wLjg3NXZ3IDAuNjI1dncsIGluc2V0IDAuNXZ3IDAgMC42MjV2dywgaW5zZXQgLTAuNXZ3IDAgMC42MjV2dywgaW5zZXQgMCAwIDAgMTIwdncgcmdiYSg5NCwgOTQsIDk0LCAwLjUpO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5rZXktMjpob3Zlcixcbi5rZXktNDpob3Zlcixcbi5rZXktNzpob3Zlcixcbi5rZXktOTpob3Zlcixcbi5rZXktMTE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjODA4MDgwO1xufVxuLmtleS0yLl9hY3RpdmUsXG4ua2V5LTQuX2FjdGl2ZSxcbi5rZXktNy5fYWN0aXZlLFxuLmtleS05Ll9hY3RpdmUsXG4ua2V5LTExLl9hY3RpdmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTVkZWcpIHRyYW5zbGF0ZVooMy4zNzV2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmM5ZjM7XG59XG4ua2V5LTIuX2FjdGl2ZTo6YmVmb3JlLFxuLmtleS00Ll9hY3RpdmU6OmJlZm9yZSxcbi5rZXktNy5fYWN0aXZlOjpiZWZvcmUsXG4ua2V5LTkuX2FjdGl2ZTo6YmVmb3JlLFxuLmtleS0xMS5fYWN0aXZlOjpiZWZvcmUsXG4ua2V5LTIuX2FjdGl2ZTo6YWZ0ZXIsXG4ua2V5LTQuX2FjdGl2ZTo6YWZ0ZXIsXG4ua2V5LTcuX2FjdGl2ZTo6YWZ0ZXIsXG4ua2V5LTkuX2FjdGl2ZTo6YWZ0ZXIsXG4ua2V5LTExLl9hY3RpdmU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzlmMztcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRiYzlmMztcbn1cbi5rZXktMjo6YmVmb3JlLFxuLmtleS00OjpiZWZvcmUsXG4ua2V5LTc6OmJlZm9yZSxcbi5rZXktOTo6YmVmb3JlLFxuLmtleS0xMTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzQ0NDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC43NXZ3O1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDQuODc1dnc7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gIGxlZnQ6IDAuMTI1dnc7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg5M2RlZyk7XG4gIGJveC1zaGFkb3c6IGluc2V0IC02LjI1dncgMCA2LjI1dncgLTYuMjV2dyBibGFjaztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuLmtleS0yOjphZnRlcixcbi5rZXktNDo6YWZ0ZXIsXG4ua2V5LTc6OmFmdGVyLFxuLmtleS05OjphZnRlcixcbi5rZXktMTE6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAtMC4yNXZ3O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMy44NzV2dyBzb2xpZCAjM2YzZjNmO1xuICBib3JkZXItbGVmdDogMC4yNXZ3IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDAuMjV2dyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICBib3gtc2hhZG93OiAwIDAuODc1dncgMi41dncgcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAwLjM3NXZ3IDAuNjI1dncgLTAuMjV2dyByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIDAgMC42MjV2dywgMCAyLjV2dyAjM2YzZjNmLCAwIDV2dyAjM2YzZjNmO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcbn1cbi5rZXktMjpudGgtY2hpbGQoLW4gKyAxMik6OmJlZm9yZSxcbi5rZXktNDpudGgtY2hpbGQoLW4gKyAxMik6OmJlZm9yZSxcbi5rZXktNzpudGgtY2hpbGQoLW4gKyAxMik6OmJlZm9yZSxcbi5rZXktOTpudGgtY2hpbGQoLW4gKyAxMik6OmJlZm9yZSxcbi5rZXktMTE6bnRoLWNoaWxkKC1uICsgMTIpOjpiZWZvcmUge1xuICBsZWZ0OiA5OSU7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg4N2RlZyk7XG59XG4ua2V5LTIsXG4ua2V5LTcge1xuICBtYXJnaW46IDAgLTAuNzV2dyAwIC0yLjI1dnc7XG59XG4ua2V5LTQsXG4ua2V5LTExIHtcbiAgbWFyZ2luOiAwIC0yLjI1dncgMCAtMC43NXZ3O1xufVxuLmtleS05IHtcbiAgbWFyZ2luOiAwIC0xLjV2dyAwIC0xLjV2dztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/midi */ "../midi/src/public-api.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response */ "./src/app/demo/response.ts");






let DemoComponent = class DemoComponent {
    constructor(response, messages$) {
        this.response = response;
        this.octaves = Array.from({ length: 24 }, (_, i) => i + 48);
        this.mousedown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mouseup$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.silent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        const mouseInitiated$ = this.mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(down => this.mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => [0, down, 0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])([0, down, 64]))));
        this.notes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(messages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]), Object(_ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__["notes"])(), Object(_ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__["toData"])()), mouseInitiated$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])((map, [_, note, volume]) => map.set(note, volume / 512), new Map()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(notes => this.silent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(key => notes.set(key, null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(notes))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(new Map()));
    }
    noteKey({ key }) {
        return key;
    }
    getClass(notes, note) {
        const className = !notes.get(note) ? '' : '_active';
        const key = note - 47;
        return `${className} key-${key % 12 || 12}`;
    }
    onQuiet(key) {
        this.silent$.next(key);
    }
    onMouseDown(note) {
        this.mousedown$.next(note);
    }
    onMouseUp() {
        this.mouseup$.next();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:touchend'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], DemoComponent.prototype, "onMouseUp", null);
DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'demo',
        template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./demo.component.less */ "./src/app/demo/demo.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_response__WEBPACK_IMPORTED_MODULE_5__["RESPONSE_BUFFER"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__["MIDI_MESSAGES"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Promise, rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
], DemoComponent);



/***/ }),

/***/ "./src/app/demo/response.ts":
/*!**********************************!*\
  !*** ./src/app/demo/response.ts ***!
  \**********************************/
/*! exports provided: RESPONSE_BUFFER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_BUFFER", function() { return RESPONSE_BUFFER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-web-apis/audio */ "../../node_modules/@ng-web-apis/audio/fesm2015/ng-web-apis-audio.js");


/**
 * Stackblitz does not support audio assets so we have to encode it in base64
 */
const RESPONSE = `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`;
const RESPONSE_BUFFER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Response', {
    factory: () => Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ng_web_apis_audio__WEBPACK_IMPORTED_MODULE_1__["AUDIO_CONTEXT"]).decodeAudioData(decode(RESPONSE)),
});
function decode(base64) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}


/***/ }),

/***/ "./src/main.browser.ts":
/*!*****************************!*\
  !*** ./src/main.browser.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_2__["AppBrowserModule"])
    .then(ref => {
    const windowRef = window;
    // Ensure Angular destroys itself on hot reloads for Stackblitz
    if (windowRef['ngRef']) {
        windowRef['ngRef'].destroy();
    }
    windowRef['ngRef'] = ref;
})
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_web_apis_audio_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-web-apis/audio/polyfill */ "../../node_modules/@ng-web-apis/audio/polyfill.js");
/* harmony import */ var _ng_web_apis_audio_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ng_web_apis_audio_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/reflect */ "../../node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es7/reflect */ "../../node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zone.js/dist/zone */ "../../node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_3__);






/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/main.browser.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/ng-web-apis/midi/projects/demo/src/main.browser.ts */"./src/main.browser.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map