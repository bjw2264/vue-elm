webpackJsonp([0],[,,,,,,,function(t,s,e){function i(t){e(74)}var a=e(0)(e(25),e(91),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(72)}var a=e(0)(e(33),e(89),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(65)}var a=e(0)(e(34),e(82),i,null,null);t.exports=a.exports},,function(t,s,e){"use strict";function i(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes()};for(var i in e)if(new RegExp("("+i+")").test(s)){var n=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?n:a(n))}return s}function a(t){return("00"+t).substr(t.length)}s.a=i},,,,,function(t,s,e){function i(t){e(67)}var a=e(0)(e(30),e(84),i,null,null);t.exports=a.exports},function(t,s,e){"use strict";var i=e(10),a=e(93),n=e(77),r=e.n(n),o=e(80),l=e.n(o),c=e(79),d=e.n(c);i.a.use(a.a),s.a=new a.a({linkActiveClass:"active",routes:[{path:"/",name:"Goods",redirect:"/goods",component:r.a},{path:"/goods",name:"Goods",component:r.a},{path:"/seller",name:"Seller",component:l.a},{path:"/ratings",name:"Ratings",component:d.a}]})},function(t,s){},function(t,s,e){function i(t){e(68)}var a=e(0)(e(24),e(85),i,null,null);t.exports=a.exports},,function(t,s,e){"use strict";function i(t,s,e){var i=window.localStorage.__seller__;i?(i=JSON.parse(i),i[t]||(i[t]={})):(i={},i[t]={}),i[t][s]=e,window.localStorage.__seller__=r()(i)}function a(t,s,e){var i=window.localStorage.__seller__;return i?(i=JSON.parse(i)[t],i?i[s]||e:e):e}s.b=i,s.a=a;var n=e(35),r=e.n(n)},function(t,s,e){"use strict";function i(){var t=window.location.search;if(""===t)return{id:1};var s={},e=/[?&][^?&]+=[^?&]+/g;return t.match(e).forEach(function(t){var e=t.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);s[i]=a}),s}s.a=i},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(10),a=e(19),n=e.n(a),r=e(17),o=e(18),l=(e.n(o),e(20));i.a.config.productionTip=!1,i.a.use(l.a),new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(36),a=e.n(i),n=e(78),r=e.n(n),o=e(22);s.default={data:function(){return{seller:{id:function(){return e.i(o.a)().id}()}}},created:function(){var t=this;this.$http.get("api/seller?id="+this.seller.id).then(function(s){s=s.body,0===s.errno&&(t.seller=a()({},t.seller,s.data))})},name:"app",components:{"v-header":r.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"cartcontrol",props:{food:Object},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit("add:food",t.target),this.$emit("add:cart",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(7),a=e.n(i),n=e(8),r=e.n(n),o=e(16),l=e.n(o),c=e(1),d=e.n(c),v=e(11);s.default={name:"food",props:{food:Object},components:{cartcontrol:a.a,split:r.a,ratingselect:l.a},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},filters:{formatDate:function(t){var s=new Date(t);return e.i(v.a)(s,"yyyy-MM-dd")},formatTime:function(t){var s=new Date(t);return e.i(v.a)(s,"hh:mm")}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new d.a(t.$refs.foodWrapper,{click:!0})})},selectFn:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleFn:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},hide:function(){this.showFlag=!1},addCart:function(t){t._constructed&&(this.$set(this.food,"count",1),this.$emit("add:cart",t.target))},addCartFn:function(t){this.$emit("add:cart",t)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(1),a=e.n(i),n=e(81),r=e.n(n),o=e(7),l=e.n(o),c=e(76),d=e.n(c);s.default={name:"goods",props:{seller:{type:Object}},components:{shopcart:r.a,cartcontrol:l.a,food:d.a},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{_initScroll:function(){var t=this;this.menuScroll=new a.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new a.a(this.$refs.foodsWrapper,{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this,s=this.$refs.foodListHook,e=0;this.listHeight.push(e),s.forEach(function(s){e+=s.clientHeight,t.listHeight.push(e)})},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopCart.drop(t)})},addCartFn:function(t){this._drop(t)},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodListHook[t];this.foodsScroll.scrollToElement(e,300)}},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("/api/goods").then(function(s){s=s.body,0===s.errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(9),a=e.n(i);s.default={name:"header",components:{star:a.a},props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(9),a=e.n(i),n=e(8),r=e.n(n),o=e(16),l=e.n(o),c=e(11),d=e(1),v=e.n(d);s.default={name:"ratings",props:{seller:Object},filters:{formatDate:function(t){var s=new Date(t);return e.i(c.a)(s,"yyyy-MM-dd hh:mm")}},data:function(){return{onlyContent:!0,selectType:2,ratings:[]}},methods:{selectFn:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleFn:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},components:{star:a.a,split:r.a,ratingselect:l.a},created:function(){var t=this;this.$http.get("api/ratings").then(function(s){s=s.body,0===s.errno&&(t.ratings=s.data,t.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new v.a(t.$refs.ratings,{click:!0})}))})}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={name:"ratingselect",data:function(){return{select_type:this.selectType,only_content:this.onlyContent}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},methods:{select:function(t,s){s._constructed&&(this.select_type=t,this.$emit("ratingtype:select",t))},toggleContent:function(t){t._constructed&&(this.only_content=!this.only_content,this.$emit("content:toggle",this.only_content))}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(9),a=e.n(i),n=e(8),r=e.n(n),o=e(1),l=e.n(o),c=e(21);s.default={name:"seller",props:{seller:Object},components:{star:a.a,split:r.a},data:function(){var t=this;return{favorite:function(){return e.i(c.a)(t.seller.id,"favorite",!1)}()}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},computed:{favoriteText:function(){return!0===this.favorite?"已收藏":"未收藏"}},watch:{seller:function(){this._initScroll(),this._initPics()}},mounted:function(){this._initScroll(),this._initPics()},updated:function(){this._initScroll()},methods:{_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new l.a(this.$refs.seller,{click:!0})},_initPics:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new l.a(t.$refs.picsWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}},roll:function(t){t._constructed&&(this.favorite=!this.favorite,e.i(c.b)(this.seller.id,"favorite",this.favorite))}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(1),a=e.n(i),n=e(7),r=e.n(n);s.default={name:"shopcart",components:{cartcontrol:r.a},props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{fold:!1,dropBall:[],balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}]}},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0, "+n+"px, 0)",t.style.transform="translate3d(0, "+n+"px, 0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+a+"px, 0, 0)",r.style.transform="translate3d("+a+"px, 0, 0)"}}},enter:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0, 0, 0)",t.style.transform="translate3d(0, 0, 0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0, 0, 0)",e.style.transform="translate3d(0, 0, 0)",t.addEventListener("transitionend",s)})},afterEnter:function(t){var s=this.dropBall.shift();s&&(s.show=!1,t.style.display="none")},drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBall.push(e)}console.log(t)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("需要支付"+this.totalPrice+"元")}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():(console.log(t.$refs),t.scroll=new a.a(t.$refs.listContent,{click:!0}))}),s}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"split"}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,e){function i(t){e(69)}var a=e(0)(e(26),e(86),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(75)}var a=e(0)(e(27),e(92),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(71)}var a=e(0)(e(28),e(88),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(73)}var a=e(0)(e(29),e(90),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(70)}var a=e(0)(e(31),e(87),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(66)}var a=e(0)(e(32),e(83),i,null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{key:t,staticClass:"star-item",class:t})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})]),t._v(" "),e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.totalPrice>=t.minPrice},on:{click:function(s){s.stopPropagation(),t.pay(s)}}},[t._v("\n      "+t._s(t.payDesc)+"\n    ")])]),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{key:s.name,staticClass:"food border-1px"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("div",{key:i},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}))],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.select_type},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.select_type},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block nagetive",class:{active:1===t.select_type},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.only_content},on:{click:function(s){t.toggleContent(s)}}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"foodWrapper",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"food-header"},[e("img",{attrs:{src:t.food.image,alt:"food-image"}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("p",{staticClass:"sale"},[e("span",[t._v("月售"+t._s(t.food.sellCount))]),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))]),t._v(" "),t.food.count&&0!==t.food.count?e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food},on:{"add:food":t.addCartFn}})],1):e("div",{staticClass:"buy",on:{click:function(s){s.stopPropagation(),t.addCart(s)}}},[t._v("加入购物车")])])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"instructor"},[e("h1",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{"ratingtype:select":t.selectFn,"content:toggle":t.toggleFn}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[t.food.ratings&&t.food.ratings.length?e("ul",t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:s.username,staticClass:"rating-item border-1px"},[e("div",{staticClass:"info"},[e("div",{staticClass:"time"},[e("span",[t._v(t._s(t._f("formatDate")(s.rateTime)))]),e("span",[t._v(t._s(t._f("formatTime")(s.rateTime)))])]),t._v(" "),e("div",{staticClass:"user"},[e("span",[t._v(t._s(s.username))]),e("img",{attrs:{src:s.avatar,width:"12",height:"12",alt:"avatar"}})])]),t._v(" "),e("div",{staticClass:"text-wrapper"},[e("span",{class:{"icon-thumb_down":1===s.rateType,"icon-thumb_up":0===s.rateType}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])])})):e("div",{staticClass:"no-rating"},[t._v("暂无评论")])])],1)],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"info-wrapper"},[e("div",{staticClass:"info border-1px"},[e("div",{staticClass:"name"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"ratingcount"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"salecount"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1)]),t._v(" "),e("div",{staticClass:"roll",on:{click:t.roll}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("div",{staticClass:"price"},[e("div",{staticClass:"minPrice"},[e("h1",{staticClass:"title"},[t._v("起送价")]),t._v(" "),e("p",{staticClass:"num"},[t._v(t._s(t.seller.minPrice)),e("span",{staticClass:"text"},[t._v("元")])])]),t._v(" "),e("div",{staticClass:"seller-delivery"},[e("h1",{staticClass:"title"},[t._v("商家配送")]),t._v(" "),e("p",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice)),e("span",{staticClass:"text"},[t._v("元")])])]),t._v(" "),e("div",{staticClass:"time"},[e("h1",{staticClass:"title"},[t._v("平均送达时间")]),t._v(" "),e("p",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime)),e("span",{staticClass:"text"},[t._v("分钟")])])])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"notice border-1px"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{key:s.type,staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.seller.supports,expression:"seller.supports"}]}),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"pics-wrapper"},[e("ul",{ref:"picList"},t._l(t.seller.pics,function(t){return e("li",{key:t,staticClass:"pic-item"},[e("img",{attrs:{src:t,alt:"image",width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{key:s,staticClass:"info-item border-1px"},[t._v(t._s(s))])}))])],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,alt:"avatar",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+" / "+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:"avatar",width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail",attrs:{transition:"",name:"fade"}},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{key:s.type,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"split"})},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("p",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("p",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"deliveryTime"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{"ratingtype:select":t.selectFn,"content:toggle":t.toggleFn}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:s.username,staticClass:"rating-item border-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,alt:"avatar",width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"username"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{key:s,staticClass:"recommend-item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v("\n              "+t._s(t._f("formatDate")(s.rateTime))+"\n            ")])])])}))])],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),t.decreaseCart(s)}}},[e("i",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:s.name,staticClass:"menu-item border-1px",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{key:s.name,ref:"foodListHook",refInFor:!0,staticClass:"food-list"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{key:s.name,staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon,alt:"foodImage"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"分")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{"add:cart":t.addCartFn}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopCart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood},on:{"add:cart":t.addCartFn}})],1)},staticRenderFns:[]}},,,,function(t,s){}],[23]);