/*! For license information please see form-items-progress-bar-ProgressBar-stories.03a302ed.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbasement_ui=self.webpackChunkbasement_ui||[]).push([[685],{"./src/form-items/progress-bar/ProgressBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Story:()=>Story,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/form-items/progress-bar/ProgressBar.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Form Item/Progress Bar",argTypes:{}},Story={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_0__.k,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"20px",height:"20px"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_0__.k,{...args,style:{width:"450px"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"20px",height:"20px"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_0__.k,{...args,style:{height:"20px"}})]}),args:{value:10,maxValue:100,completed:!1,indeterminate:!1}};Story.parameters={...Story.parameters,docs:{...Story.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <>\n        <ProgressBar {...args} />\n        <div style={{\n        width: '20px',\n        height: '20px'\n      }}></div>\n        <ProgressBar {...args} style={{\n        width: '450px'\n      }} />\n        <div style={{\n        width: '20px',\n        height: '20px'\n      }}></div>\n        <ProgressBar {...args} style={{\n        height: '20px'\n      }} />\n      </>;\n  },\n  args: {\n    value: 10,\n    maxValue: 100,\n    completed: false,\n    indeterminate: false\n  }\n}",...Story.parameters?.docs?.source}}};const __namedExportsOrder=["Story"]},"./src/base/BaseComponent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getBaseComponentProps(props){const{id,style,tabIndex}=props;return{id,style,tabIndex,...props.nativeProps??{}}}__webpack_require__.d(__webpack_exports__,{W:()=>getBaseComponentProps});try{getBaseComponentProps.displayName="getBaseComponentProps",getBaseComponentProps.__docgenInfo={description:"",displayName:"getBaseComponentProps",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},nativeProps:{defaultValue:null,description:"",name:"nativeProps",required:!1,type:{name:"{ [key: string]: unknown; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base/BaseComponent.tsx#getBaseComponentProps"]={docgenInfo:getBaseComponentProps.__docgenInfo,name:"getBaseComponentProps",path:"src/base/BaseComponent.tsx#getBaseComponentProps"})}catch(__react_docgen_typescript_loader_error){}},"./src/form-items/progress-bar/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ProgressBar});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),BaseComponent=__webpack_require__("./src/base/BaseComponent.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GaugeBar=props=>{const baseProps=(0,BaseComponent.W)(props),className=(0,react.useMemo)((()=>(0,clsx_m.Z)("bm-e-gauge",props.className)),[props.className]);return(0,jsx_runtime.jsx)("div",{...baseProps,className,children:props.children})};GaugeBar.displayName="GaugeBar";const GaugeBarFiller=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("bm-e-gauge__filler",props.className,{"-fill":props.fill??!0},{"-shadow":props.shadow},{"-gradient":props.gradient},{"-animated":props.animated??!0},{"-value":props.value}),style:props.style,ref})));try{GaugeBar.displayName="GaugeBar",GaugeBar.__docgenInfo={description:"",displayName:"GaugeBar",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},nativeProps:{defaultValue:null,description:"",name:"nativeProps",required:!1,type:{name:"{ [key: string]: unknown; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/element/gauge/Gauge.tsx#GaugeBar"]={docgenInfo:GaugeBar.__docgenInfo,name:"GaugeBar",path:"src/element/gauge/Gauge.tsx#GaugeBar"})}catch(__react_docgen_typescript_loader_error){}try{GaugeBarFiller.displayName="GaugeBarFiller",GaugeBarFiller.__docgenInfo={description:"",displayName:"GaugeBarFiller",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}},gradient:{defaultValue:null,description:"",name:"gradient",required:!1,type:{name:"boolean"}},animated:{defaultValue:null,description:"",name:"animated",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/element/gauge/Gauge.tsx#GaugeBarFiller"]={docgenInfo:GaugeBarFiller.__docgenInfo,name:"GaugeBarFiller",path:"src/element/gauge/Gauge.tsx#GaugeBarFiller"})}catch(__react_docgen_typescript_loader_error){}const ProgressBar=props=>{const{gaugeBarProps,fillerProps,indeterminateProps}=useProgressBarComponent(props);return(0,jsx_runtime.jsxs)(GaugeBar,{...gaugeBarProps,children:[(0,jsx_runtime.jsx)(GaugeBarFiller,{...fillerProps}),(0,jsx_runtime.jsx)(GaugeBarFiller,{...indeterminateProps})]})};function useProgressBarComponent(props){const baseProps=(0,BaseComponent.W)(props),maxValue=props.maxValue??100,value=props.value??0,completed=props.completed??!1,indeterminate=props.indeterminate??!1,calcFillerLength=(0,react.useCallback)(((value,maxValue,full)=>full||value>=maxValue?"100%":value<0?"0%":value/maxValue*100+"%"),[]),className=(0,react.useMemo)((()=>(0,clsx_m.Z)("bm-c-progress-bar",props.className)),[props.className]),fillerClassName=(0,react.useMemo)((()=>(0,clsx_m.Z)("bm-c-progress-bar__item",{"-visible":!indeterminate||completed})),[completed,indeterminate]),indeterminateClassName=(0,react.useMemo)((()=>(0,clsx_m.Z)("bm-c-progress-bar__item","bm-c-progress-bar__indeterminate",{"-visible":indeterminate&&!completed},{"-animated":indeterminate})),[completed,indeterminate]),fr=(0,react.useRef)(null);return(0,react.useEffect)((()=>{indeterminate&&!completed||!fr.current||fr.current.classList.remove("-animated")}),[completed,indeterminate]),{gaugeBarProps:{...baseProps,className},fillerProps:{className:fillerClassName,gradient:!completed,animated:!0,shadow:!0,style:{width:calcFillerLength(value,maxValue,completed)},value:value>0},indeterminateProps:{className:indeterminateClassName,fill:!1,ref:fr,animated:!1}}}ProgressBar.displayName="ProgressBar";try{useProgressBarComponent.displayName="useProgressBarComponent",useProgressBarComponent.__docgenInfo={description:"",displayName:"useProgressBarComponent",props:{maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},nativeProps:{defaultValue:null,description:"",name:"nativeProps",required:!1,type:{name:"{ [key: string]: unknown; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-items/progress-bar/ProgressBar.tsx#useProgressBarComponent"]={docgenInfo:useProgressBarComponent.__docgenInfo,name:"useProgressBarComponent",path:"src/form-items/progress-bar/ProgressBar.tsx#useProgressBarComponent"})}catch(__react_docgen_typescript_loader_error){}try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},nativeProps:{defaultValue:null,description:"",name:"nativeProps",required:!1,type:{name:"{ [key: string]: unknown; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-items/progress-bar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/form-items/progress-bar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);