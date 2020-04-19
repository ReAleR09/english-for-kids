!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(2),t.exports=n(1)},function(t,e,n){},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.views=e,this.props={}}var e,n,i;return e=t,(n=[{key:"indexAction",value:function(){throw new Error("Implement method! In ".concat(this))}},{key:"performAction",value:function(t){var e="".concat(t,"Action");if(!this[e])throw Error("Controller '".concat(this.constructor.name,"' doesn't have '").concat(e,"' action"));var n=this.views[t];return this.view=new n,this.view.props=this.props,this[e](),this.view}}])&&r(e.prototype,n),i&&r(e,i),t}(),o=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions"],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}]],a="".concat("","/assets/myown-dataset/"),c={computers:["display","keyboard","key","router","cable","mouse","desktop","power"],food:["sugar","salt","bread","milk","juice","orange","cucumber","grape"]},s={computers:["экран","клавиатура","клавиша","маршрутизатор","кабель","мышка","рабочий стол","питание"],food:["сахар","соль","хлеб","молоко","сок","апельсин","огурец","виноград"]},u=[];function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}["computers","food"].forEach((function(t){var e=c[t].map((function(e,n){return{word:e,translation:s[t][n],audioSrc:"".concat(a).concat(t,"/").concat(e,".mp3"),image:"".concat(a).concat(t,"/").concat(e,".jpg")}})),n={title:t,image:e[0].image,cards:e};u.push(n)}));var d=[],f=1;u.forEach((function(t){var e={title:t.title,image:t.image,cards:t.cards,id:f.toString()};f+=1,d.push(e)}));var p="".concat("","/assets/rslang/");o.splice(0,1)[0].forEach((function(t){var e=o.splice(0,1)[0].map((function(t){var e=t.word,n=t.audioSrc,r=t.image;return{word:e,translation:t.translation,audioSrc:p+n,image:p+r}})),n={title:t,image:e[0].image,cards:e,id:f.toString()};f+=1,d.push(n)}));var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"getCategoriesList",value:function(){return d.map((function(t){return{id:t.id,title:t.title,image:t.image}}))}},{key:"getCategoryNameById",value:function(t){return d.find((function(e){return e.id===t})).title}},{key:"getCardsForCategory",value:function(t){return d.find((function(e){return e.id===t})).cards}}],(n=null)&&l(e.prototype,n),r&&l(e,r),t}(),g={},h={publish:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;g[t]&&g[t].forEach((function(t){t(e)}))},subscribe:function(t,e){g[t]||(g[t]=[]),g[t].push(e);return function(){var n=g[t].indexOf(e);g[t].splice(n,1)}}};function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.props=e,this.element=null,this.subscriptions=[]}var e,n,r;return e=t,r=[{key:"publish",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;h.publish(t,e)}}],(n=[{key:"render",value:function(){return"<div>".concat(this.props,"</div>")}},{key:"viewMounted",value:function(){this.onMount&&this.onMount()}},{key:"viewUnmounted",value:function(){this.onUnmount&&this.onUnmount(),this.props=null,this.element=null,this.subscriptions.forEach((function(t){return t()})),this.subscriptions=null}},{key:"subscribe",value:function(t,e){var n=h.subscribe(t,e);this.subscriptions.push(n)}},{key:"element",get:function(){return this.domElement},set:function(t){this.domElement=t}}])&&y(e.prototype,n),r&&y(e,r),t}();function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}window.addEventListener("popstate",(function(t){if(t.state){var e=t.state,n=e.controller,r=e.action,i=e.params;h.publish("EVENT_NAVIGATION",{controller:n,action:r,params:i})}else h.publish("EVENT_NAVIGATION",{controller:null,action:null,params:null})}));var _=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={controller:t,action:e,params:n},o=new PopStateEvent("popstate",{state:i}),a="/";if(!t)return r?window.history.replaceState(i,null,a):window.history.pushState(i,null,a),void dispatchEvent(o);a+=t,e&&(a+="/".concat(e));var c=Object.getOwnPropertyNames(n);if(c.length>0){var s=[];c.forEach((function(t){var e=n[t];s.push("".concat(t,"=").concat(e))}));var u=s.join("&");a+="?".concat(u)}r?window.history.replaceState(i,null,a):window.history.pushState(i,null,a),dispatchEvent(o)},S={go:_,replace:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};_(t,e,n,!0)},getRequestParams:function(){var t=new Map;window.location.search.length>0&&window.location.search.slice(window.location.search.indexOf("?")+1).split("&").forEach((function(e){var n=b(e.split("="),2),r=n[0],i=n[1];t.set(r,i)}));return t}};function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(a,t);var e,n,r,i,o=(e=a,function(){var t,n=P(e);if(C()){var r=P(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return T(this,t)});function a(){return j(this,a),o.apply(this,arguments)}return n=a,(r=[{key:"onMount",value:function(){for(var t=this.element.querySelectorAll(".".concat("category__card")),e=function(e){var n=t[e];n.addEventListener("click",(function(){var t=n.dataset.id;S.go("cards","view",{id:t})}))},n=0;n<t.length;n+=1)e(n);this.subscribe("EVENT_TRAIN_TOGGLE",(function(e){for(var n=0;n<t.length;n+=1){var r=t[n];e?r.classList.remove("category__card_play_active"):r.classList.add("category__card_play_active")}}))}},{key:"render",value:function(){var t="";return this.props.cards.forEach((function(e){t+='<div class="col-12 col-sm-6 col-md-4 col-lg-3">\n            <div class="'.concat("category__card",'" data-id="').concat(e.id,'">\n              <img class="').concat("category__image",'" src="').concat(e.image,'" alt="">\n              <span>').concat(e.title,"</span>\n            </div>\n          </div>")})),'<div class="row">'.concat(t,"</div>")}}])&&O(n.prototype,r),i&&O(n,i),a}(v);function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var R=Symbol("AppSingleton"),I=Symbol("AppSingletonEnforcer"),N=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e!==I)throw new Error("Cannot construct singleton")}var e,n,r;return e=t,r=[{key:"instance",get:function(){return this[R]||(this[R]=new t(I)),this[R]}}],(n=[{key:"router",set:function(t){this.route=t},get:function(){return this.route}},{key:"sidebar",set:function(t){this.side=t},get:function(){return this.side}},{key:"trainToggler",set:function(t){this.toggler=t},get:function(){return this.toggler}}])&&A(e.prototype,n),r&&A(e,r),t}();var x={arrayShuffle:function(t){for(var e=t.slice(0),n=e.length-1;n>0;n-=1){var r=Math.floor(Math.random()*(n+1)),i=[e[r],e[n]];e[n]=i[0],e[r]=i[1]}return e}};function V(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var G=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];V(this,t),this.cards=e,this.inProgress=!1,this.subscriptions=[]}var e,n,r;return e=t,(n=[{key:"init",value:function(t){var e=this,n=document.getElementById(t),r='<button id="'.concat("start_game",'" type="button" class="btn btn-primary ').concat("word-card__play-button",'">Start game</button>'),i='<div class="'.concat("game__stars-container",'" id="').concat("stars",'"></div>'),o='<audio id="'.concat("game_audio",'" src=""></audio>');n.innerHTML=r+i+o,this.gameContainer=n;var a=h.subscribe("EVENT_TRAIN_TOGGLE",(function(t){t&&e.cancelGame()}));this.subscriptions.push(a);var c=this.gameContainer.querySelector("#".concat("start_game"));this.button=c,this.button.addEventListener("click",(function(){e.inProgress?e.repeatWord():e.startGame()}));var s=h.subscribe("EVENT_WORD_CARD_CLICK",(function(t){e.inProgress?e.checkCardClick(t):e.playSound(e.cards[t.id].audioSrc)}));this.subscriptions.push(s)}},{key:"startGame",value:function(){this.inProgress=!0,this.button.classList.add("word-card__play-button_mode_repeat");var t=x.arrayShuffle(Object.keys(this.cards));this.cardsLeft=t,this.fails=0,this.currentCardIndex=null,this.guessedCardsIndexes=[],this.nextCard()}},{key:"cancelGame",value:function(){this.inProgress=!1,this.button.classList.remove("word-card__play-button_mode_repeat"),h.publish("EVENT_GAME_STOP",{finished:!1})}},{key:"nextCard",value:function(){if(0!==this.cardsLeft.length){var t=this.cardsLeft.splice(0,1)[0];this.currentCardIndex=t,this.repeatWord()}else this.finishGame()}},{key:"finishGame",value:function(){this.inProgress=!1,this.button.classList.remove("word-card__play-button_mode_repeat"),h.publish("EVENT_GAME_STOP",{finished:!0,fails:this.fails})}},{key:"repeatWord",value:function(){this.playSound(this.cards[this.currentCardIndex].audioSrc)}},{key:"addStar",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=document.createElement("div");e.classList.add(t?"game__star":"game__star-hollow"),this.gameContainer.querySelector("#".concat("stars")).appendChild(e)}},{key:"checkCardClick",value:function(t){var e=this;this.guessedCardsIndexes.includes(t.id)||(t.id===this.currentCardIndex?(h.publish("EVENT_GUESS_CARD_CORRECT",t.id),this.guessedCardsIndexes.push(this.currentCardIndex),this.playSound("/assets/sound/guess_success.mp3"),setTimeout((function(){e.nextCard()}),1e3),this.addStar()):(this.fails+=1,this.playSound("/assets/sound/guess_fail.mp3"),this.addStar(!1)))}},{key:"playSound",value:function(t){var e=this.gameContainer.querySelector("#".concat("game_audio"));e.src=t,e.play()}},{key:"desctuct",value:function(){this.subscriptions.forEach((function(t){return t()})),this.subscriptions=null,this.cancelGame()}}])&&M(e.prototype,n),r&&M(e,r),t}();function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function W(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(a,t);var e,n,r,i,o=(e=a,function(){var t,n=F(e);if(W()){var r=F(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return H(this,t)});function a(){return B(this,a),o.apply(this,arguments)}return n=a,(r=[{key:"onUnmount",value:function(){this.game&&(this.game.desctuct(),this.game=null)}},{key:"onMount",value:function(){for(var t=this,e=this.props.categoryId,n=this.element.querySelectorAll(".".concat("word-card")),r=Object.getOwnPropertyNames(n),i=function(r){var i=n[r];i.querySelector(".".concat("word-card__rotate")).addEventListener("click",(function(){i.classList.add("word-card_rotated")})),i.addEventListener("mouseleave",(function(){i.classList.remove("word-card_rotated")}));var o=i.dataset.id;i.addEventListener("click",(function(){v.publish("EVENT_WORD_CARD_CLICK",{id:o,categoryId:e})}));var a=N.instance.trainToggler.isTraining;t.displayTraining(a),t.subscribe("EVENT_GUESS_CARD_CORRECT",(function(t){t===o&&i.classList.add("word-card_guessed")})),t.subscribe("EVENT_GAME_STOP",(function(){i.classList.remove("word-card_guessed")}))},o=0;o<r.length;o+=1)i(o);this.subscribe("EVENT_GAME_STOP",(function(t){t.finished&&S.go("cards","result",{fails:t.fails})})),this.subscribe("EVENT_TRAIN_TOGGLE",(function(e){t.displayTraining(e)})),this.game=new G(this.props.cards),this.game.init("game")}},{key:"render",value:function(){var t="";return this.props.cards.forEach((function(e,n){t+='<div class="col-12 col-sm-6 col-md-4 col-lg-3">\n            <div class="'.concat("word-card",'" data-id="').concat(n,'">\n              <div class="').concat("word-card__side",'" style="background-image: url(\'').concat(e.image,'\');">\n                <div class="').concat("word-card__title",'">').concat(e.word,'</div>\n              </div>\n              <div class="').concat("word-card__side"," ").concat("word-card__side_back",'" style="background-image: url(\'').concat(e.image,'\');">\n                <div class="').concat("word-card__title",'">').concat(e.translation,'</div>\n              </div>\n              <div class="').concat("word-card__rotate",'"></div>\n            </div>\n          </div>')})),'<div class="row">\n      <div class="col-12"><h1>'.concat(this.props.title,'</h1><div id="').concat("game",'"></div></div>\n      ').concat(t,"\n    </div>")}},{key:"displayTraining",value:function(t){this.element&&(t?this.element.classList.remove("category__play"):this.element.classList.add("category__play"))}}])&&q(n.prototype,r),i&&q(n,i),a}(v);function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q(t,e){return(Q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function X(t,e){return!e||"object"!==$(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Q(t,e)}(a,t);var e,n,r,i,o=(e=a,function(){var t,n=Z(e);if(Y()){var r=Z(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return X(this,t)});function a(){return z(this,a),o.apply(this,arguments)}return n=a,(r=[{key:"onMount",value:function(){var t=this.element.querySelector("#".concat("result-audio"));this.success?t.src="/assets/sound/game_success.mp3":t.src="/assets/sound/game_fail.mp3",t.play(),this.redirectTimeout=setTimeout((function(){S.replace()}),5e3)}},{key:"render",value:function(){this.success="0"===this.props.fails;var t="";return this.success?t+='<div class="col-12"><img class="'.concat("game__result-img",'" src="').concat("/assets/img/game_success.png",'"></div>'):(t+='<div class="col-12"><img class="'.concat("game__result-img",'" src="').concat("/assets/img/game_fail.png",'"></div>'),t+='<div class="col-12"><h2>Количество ошибок: '.concat(this.props.fails,"</h2></div>")),'<div class="row">'.concat(t,'<audio id="').concat("result-audio",'" src=""></audio></div>')}},{key:"onUnmount",value:function(){this.redirectTimeout&&clearTimeout(this.redirectTimeout)}}])&&J(n.prototype,r),i&&J(n,i),a}(v);function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rt(t,e){return(rt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function it(t,e){return!e||"object"!==et(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ot(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&rt(t,e)}(a,t);var e,n,r,i,o=(e=a,function(){var t,n=at(e);if(ot()){var r=at(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return it(this,t)});function a(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);var t={index:L,view:K,result:tt};return o.call(this,t)}return n=a,(r=[{key:"indexAction",value:function(){this.props.cards=m.getCategoriesList()}},{key:"viewAction",value:function(){var t=S.getRequestParams();this.props.cards=m.getCardsForCategory(t.get("id")),this.props.title=m.getCategoryNameById(t.get("id")),this.props.categoryId=t.get("id")}},{key:"resultAction",value:function(){var t=S.getRequestParams();this.props.fails=t.get("fails")}}])&&nt(n.prototype,r),i&&nt(n,i),a}(i);function st(t){return(st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ut(t,e){return(ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function lt(t,e){return!e||"object"!==st(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function dt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var pt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ut(t,e)}(r,t);var e,n=(e=r,function(){var t,n=ft(e);if(dt()){var r=ft(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return lt(this,t)});function r(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);return n.call(this,{})}return r}(i),mt={createElementFromHTML:function(t){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}};function gt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ht(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ht(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ht(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function yt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var vt=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes=n,this.appContainer=e,this.currentView=null,this.initOnPopstate()}var e,n,r;return e=t,r=[{key:"getUrlParts",value:function(){var t="/",e="index",n=window.location.pathname.slice(1);if((n+="").length>1){var r=gt(n.split("/"),2),i=r[0],o=r[1];t=i,o&&(e=o)}return{controllerAlias:t,actionAlias:e}}}],(n=[{key:"initOnPopstate",value:function(){var t=this;window.addEventListener("popstate",(function(){t.route()}))}},{key:"route",value:function(){var e=this,n=t.getUrlParts(),r=n.controllerAlias,i=n.actionAlias;if(!Object.prototype.hasOwnProperty.bind(this.routes,r))throw new Error("No controller assigned to '".concat(r,"' path"));var o=(new(0,this.routes[r])).performAction(i),a=o.render(i),c=mt.createElementFromHTML(a);if(o.element=c,this.appContainer.lastChild){for(;this.appContainer.firstChild;)this.appContainer.removeChild(this.appContainer.firstChild);this.currentView&&(this.currentView.viewUnmounted(),this.currentView=null)}this.appContainer.appendChild(c),this.currentView=o,setTimeout((function(){e.currentView.viewMounted()}),0)}}])&&yt(e.prototype,n),r&&yt(e,r),t}();function bt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var wt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.show=!1}var e,n,r;return e=t,(n=[{key:"toggle",value:function(t){this.sideBarElement&&(this.show=t,t?this.sideBarElement.classList.add("show"):this.sideBarElement.classList.remove("show"))}},{key:"attach",value:function(t,e){var n=this,r=document.getElementById(t),i=this.generateSidebarDOM();r.parentNode.replaceChild(i,r),this.sideBarElement=i,document.getElementById(e).addEventListener("click",(function(){n.toggle(!n.show)})),h.subscribe("EVENT_NAVIGATION",(function(t){n.toggle(!1);for(var e=n.sideBarElement.querySelectorAll("li"),r=Object.getOwnPropertyNames(e),i=0;i<r.length;i+=1){var o=e[i];"cards"===t.controller&&"view"===t.action&&t.params.id?o.dataset.id===t.params.id?o.classList.add("sidebar__item_active"):o.classList.remove("sidebar__item_active"):null===t.controller&&null===t.action&&o.dataset.page&&"main"===o.dataset.page?o.classList.add("sidebar__item_active"):o.classList.remove("sidebar__item_active")}}));var o=document.querySelector(".navbar");h.subscribe("EVENT_TRAIN_TOGGLE",(function(t){t?(o.classList.remove("bg-warning"),n.sideBarElement.classList.remove("bg-warning")):(o.classList.add("bg-warning"),n.sideBarElement.classList.add("bg-warning"))}))}},{key:"generateSidebarDOM",value:function(){var t=this,e=m.getCategoriesList(),n=document.createElement("div");n.id="sidebar",n.classList.add("sidebar","bg-primary");var r=document.createElement("ul");return r.classList.add("nav","flex-column","align-self-center"),r.innerHTML+='<li class="nav-item sidebar__item" data-page="main">Main Page</li>',e.forEach((function(t){r.innerHTML+='<li class="nav-item sidebar__item" data-id="'.concat(t.id,'">').concat(t.title,"</li>")})),r.addEventListener("click",(function(e){if(e.target.dataset.id)S.go("cards","view",{id:e.target.dataset.id});else{if("main"!==e.target.dataset.page)return;S.go()}t.toggle(!1)})),n.appendChild(r),n}}])&&bt(e.prototype,n),r&&bt(e,r),t}();function _t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var St=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.train=!0}var e,n,r;return e=t,(n=[{key:"toggle",value:function(){this.train=!this.train,this.updateView(),h.publish("EVENT_TRAIN_TOGGLE",this.train)}},{key:"updateView",value:function(){this.element&&(this.isTraining?(this.element.firstChild.classList.add("active"),this.element.lastChild.classList.remove("active")):(this.element.firstChild.classList.remove("active"),this.element.lastChild.classList.add("active")))}},{key:"attach",value:function(t){var e=this,n=document.createElement("div");this.element=n,n.classList.add("btn-group","align-self-end"),n.setAttribute("role","group"),n.innerHTML+='<button type="button" class="btn btn-primary">Train</button>',n.innerHTML+='<button type="button" class="btn btn-primary">Play</button>';var r=document.getElementById(t);r.parentNode.replaceChild(n,r),n.addEventListener("click",(function(){e.toggle()})),setTimeout((function(){e.updateView()}),0)}},{key:"isTraining",get:function(){return this.train},set:function(t){this.train=t,this.updateView(),h.publish("EVENT_TRAIN_TOGGLE",t)}}])&&_t(e.prototype,n),r&&_t(e,r),t}();window.onload=function(){var t={"/":ct,cards:ct,stats:pt},e=document.getElementById("app"),n=new vt(e,t),r=N.instance;r.router=n;var i=new wt;i.attach("sidebar","toggleSidebar"),r.sidebar=i;var o=new St;o.attach("train_toggler"),r.trainToggler=o,r.router.route(),h.publish("EVENT_NAVIGATION",{controller:null,action:null,params:null})}}]);