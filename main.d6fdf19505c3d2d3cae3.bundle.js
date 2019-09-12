(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(module,__webpack_exports__,__webpack_require__){"use strict";var _dh_react_hooks_use_timeago__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(331);__webpack_exports__.a=_dh_react_hooks_use_timeago__WEBPACK_IMPORTED_MODULE_0__.a},212:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_hooks_useTimeAgo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(147),TimeAgo=function TimeAgo(_ref){var _ref$elementType=_ref.elementType,elementType=void 0===_ref$elementType?"div":_ref$elementType,className=_ref.className,dateTime=_ref.dateTime,options=_ref.options,timeAgo=Object(_hooks_useTimeAgo__WEBPACK_IMPORTED_MODULE_1__.a)(dateTime,options);return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)(elementType,{className:className},timeAgo)};__webpack_exports__.a=TimeAgo;try{TimeAgo.displayName="TimeAgo",TimeAgo.__docgenInfo={description:"",displayName:"TimeAgo",props:{elementType:{defaultValue:{value:"div"},description:"html tag name",name:"elementType",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},dateTime:{defaultValue:null,description:"start date, could be Date instance, timestamp or date string",name:"dateTime",required:!0,type:{name:"DateTime"}},options:{defaultValue:null,description:"options to control timeago.js, include locale, localeRegister and interval",name:"options",required:!1,type:{name:"Options"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TimeAgo/index.tsx#TimeAgo"]={docgenInfo:TimeAgo.__docgenInfo,name:"TimeAgo",path:"src/components/TimeAgo/index.tsx#TimeAgo"})}catch(__react_docgen_typescript_loader_error){}},218:function(module,exports,__webpack_require__){var content=__webpack_require__(757);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(207)(content,options);content.locals&&(module.exports=content.locals)},339:function(module,exports,__webpack_require__){var content=__webpack_require__(759);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(207)(content,options);content.locals&&(module.exports=content.locals)},340:function(module,exports,__webpack_require__){__webpack_require__(341),__webpack_require__(452),module.exports=__webpack_require__(453)},363:function(module,exports){},453:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){let req=__webpack_require__(604);req.keys().forEach(filename=>req(filename))},module)}.call(this,__webpack_require__(127)(module))},604:function(module,exports,__webpack_require__){var map={"./timeAgo.stories.tsx":605,"./useTimeAgo.stories.tsx":758};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=604},605:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_components_TimeAgo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(212),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(148),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(36),_timeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(218),_timeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_timeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5__),localeRegister=function localeRegister(number,index){return[["剛剛","片刻後"],["%s 秒前","%s 秒後"],["1 分鐘前","1 分鐘後"],["%s 分鐘前","%s 分鐘後"],["1 小時前","1 小時後"],["%s 小時前","%s 小時後"],["1 天前","1 天後"],["%s 天前","%s 天後"],["1 週前","1 週後"],["%s 週前","%s 週後"],["1 個月前","1 個月後"],["%s 個月前","%s 個月後"],["1 年前","1 年後"],["%s 年前","%s 年後"]][index]};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Components",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).addDecorator(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo)({header:!1,inline:!0})).add("TimeAgo",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TimeAgo__WEBPACK_IMPORTED_MODULE_2__.a,{elementType:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("elementType","p"),className:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("className",_timeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrap),dateTime:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.number)("dateTime",Date.now()),options:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("options",{interval:1e3})})}).add("TimeAgo with custom locale: zh_TW",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TimeAgo__WEBPACK_IMPORTED_MODULE_2__.a,{elementType:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("elementType","p"),className:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("className",_timeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrap),dateTime:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.number)("dateTime",Date.now()),options:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("options",{interval:1e4,locale:"zh_TW",localeRegister:localeRegister})})})}.call(this,__webpack_require__(127)(module))},608:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":295,"./nestedObjectAssign.js":295};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=608},757:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(206)(!1)).push([module.i,".stories_wrap_3T2Z1 {\n  display: inline-flex;\n  width: calc(1024px / 2);\n  margin: 20px;\n}\n",""]),exports.locals={wrap:"stories_wrap_3T2Z1"}},758:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_hooks_useTimeAgo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(147),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(148),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(36),_useTimeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(339),_useTimeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_useTimeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Hooks",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).addDecorator(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo)({header:!1,inline:!0})).add("useTimeAgo",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UseTimeAgo,{dateTime:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.number)("dateTime",Date.now()),options:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("options",{interval:1e4})})});var UseTimeAgo=function UseTimeAgo(_ref){var dateTime=_ref.dateTime,options=_ref.options,timeAgo=Object(_hooks_useTimeAgo__WEBPACK_IMPORTED_MODULE_2__.a)(dateTime,options);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_useTimeAgo_stories_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrap},timeAgo)}}.call(this,__webpack_require__(127)(module))},759:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(206)(!1)).push([module.i,".stories_wrap_2s9S6 {\n  display: inline-flex;\n  width: calc(1024px / 2);\n  margin: 20px;\n}\n",""]),exports.locals={wrap:"stories_wrap_2s9S6"}}},[[340,1,2]]]);
//# sourceMappingURL=main.d6fdf19505c3d2d3cae3.bundle.js.map