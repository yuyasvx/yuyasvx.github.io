/*! For license information please see form-items-segmented-switcher-SegmentedSwitcher-stories.3e537b57.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkbasement_ui=self.webpackChunkbasement_ui||[]).push([[356],{"./src/form-items/segmented-switcher/SegmentedSwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Story:()=>Story,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SegmentedSwitcher_stories});var react=__webpack_require__("./node_modules/react/index.js"),AppearanceType=__webpack_require__("./src/domain/AppearanceType.ts"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),StyleClass=__webpack_require__("./src/domain/StyleClass.ts"),Handler=__webpack_require__("./src/util/Handler.ts"),BaseComponent=__webpack_require__("./src/base/BaseComponent.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NAME="bm-c-segmented-switcher",INNER_NAME=`${NAME}__inner`,BUTTON_NAME=`${NAME}__buttons`,BAR_NAME=`${NAME}__bar`,context=(0,react.createContext)({disabled:!1}),useSegmentedSwitcherHook=props=>{const className=(0,react.useMemo)((()=>(0,clsx_m.Z)("bm-e-switchable",(0,AppearanceType.l)(props.appearance),NAME,StyleClass.i3.TEXT_BASE,props.className,{"-disabled":props.disabled,[StyleClass.jr]:null!=props.tabIndex&&-1!==props.tabIndex})),[props.appearance,props.className,props.disabled,props.tabIndex]),barRef=(0,react.useRef)(null),componentRef=(0,react.useRef)(null),initializedFlagRef=(0,react.useRef)(!1),animated=props.animated??!0,playMotion=(0,react.useCallback)((()=>{const barRefCurrent=barRef.current,refCurrent=componentRef.current;if(null==barRefCurrent||null==refCurrent)return;refCurrent.classList.add("-pending");const selectedObject=refCurrent.querySelector(".-selected");null!=selectedObject&&(selectedObject.classList.replace("--normal","--super-flat"),barRefCurrent.style.width=`${selectedObject.clientWidth}px`,barRefCurrent.style.height=`${selectedObject.clientHeight}px`,barRefCurrent.style.transform=`translateX(${selectedObject.offsetLeft}px)`,barRefCurrent.style.visibility="visible",setTimeout((()=>{barRefCurrent.style.visibility="hidden";const selectedObject=refCurrent.querySelector(".-selected");null!=selectedObject&&(selectedObject.classList.replace("--super-flat","--normal"),refCurrent.classList.remove("-pending"))}),200))}),[]),initialize=(0,react.useCallback)((()=>{const barRefCurrent=barRef.current,refCurrent=componentRef.current;if(null==barRefCurrent||null==refCurrent)return;const selectedObject=refCurrent.querySelector(".-selected");if(null==selectedObject)return barRefCurrent.style.width="0px",void(barRefCurrent.style.height="0px");const standbyW=selectedObject.clientWidth,standbyH=selectedObject.clientHeight;barRefCurrent.style.transform=`translateX(${selectedObject.offsetLeft}px)`,barRefCurrent.style.width=`${standbyW}px`,barRefCurrent.style.height=`${standbyH}px`}),[]);(0,react.useEffect)((()=>{if(!initializedFlagRef.current||!animated)return initialize(),void(initializedFlagRef.current=!0);animated&&playMotion()}),[animated,initialize,playMotion,props.children]);const barAppearance=(0,react.useMemo)((()=>props.appearance===AppearanceType.M.FLAT?"--flat":""),[props.appearance]),keyNavigation=(0,react.useCallback)((evt=>{const refCurrent=componentRef.current;if(null!=refCurrent&&("ArrowRight"===evt.key||"ArrowLeft"===evt.key)){evt.preventDefault();const children=refCurrent.querySelectorAll(".bm-c-segmented-switcher__item");let index=-1;if(children.forEach(((e,num)=>{e.classList.contains("-selected")&&(index=num)})),index<0)return void children.item(0).click();"ArrowRight"===evt.key&&index+1<=children.length-1&&children.item(index+1).click(),"ArrowLeft"===evt.key&&index-1>=0&&children.item(index-1).click()}}),[]);return{newProps:{className,ref:componentRef,...(0,Handler.bj)(props),...(0,BaseComponent.W)(props),onKeyDown:keyNavigation,role:"radiogroup","aria-disabled":props.disabled??!1},innerProps:{className:(0,react.useMemo)((()=>(0,clsx_m.Z)("bm-e-switchable__inner",INNER_NAME)),[])},buttonContainerProps:{className:(0,react.useMemo)((()=>(0,clsx_m.Z)(BUTTON_NAME)),[])},barProps:{className:(0,react.useMemo)((()=>(0,clsx_m.Z)(BAR_NAME,StyleClass.EK,barAppearance)),[barAppearance]),ref:barRef},context}},SegmentedSwitcher=props=>{const{context,newProps,innerProps,buttonContainerProps,barProps}=useSegmentedSwitcherHook(props);return(0,jsx_runtime.jsx)(context.Provider,{value:{disabled:props.disabled??!1},children:(0,jsx_runtime.jsx)("div",{...newProps,children:(0,jsx_runtime.jsxs)("div",{...innerProps,children:[(0,jsx_runtime.jsx)("div",{...buttonContainerProps,children:props.children}),(0,jsx_runtime.jsx)("div",{...barProps})]})})})};SegmentedSwitcher.displayName="SegmentedSwitcher";try{useSegmentedSwitcherHook.displayName="useSegmentedSwitcherHook",useSegmentedSwitcherHook.__docgenInfo={description:"",displayName:"useSegmentedSwitcherHook",props:{animated:{defaultValue:null,description:"",name:"animated",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"tint"'},{value:'"flat"'},{value:'"super_flat"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},nativeProps:{defaultValue:null,description:"",name:"nativeProps",required:!1,type:{name:"{ [key: string]: unknown; }"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-items/segmented-switcher/SegmentedSwitcher.tsx#useSegmentedSwitcherHook"]={docgenInfo:useSegmentedSwitcherHook.__docgenInfo,name:"useSegmentedSwitcherHook",path:"src/form-items/segmented-switcher/SegmentedSwitcher.tsx#useSegmentedSwitcherHook"})}catch(__react_docgen_typescript_loader_error){}try{SegmentedSwitcher.displayName="SegmentedSwitcher",SegmentedSwitcher.__docgenInfo={description:"",displayName:"SegmentedSwitcher",props:{animated:{defaultValue:null,description:"",name:"animated",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"tint"'},{value:'"flat"'},{value:'"super_flat"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},nativeProps:{defaultValue:null,description:"",name:"nativeProps",required:!1,type:{name:"{ [key: string]: unknown; }"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-items/segmented-switcher/SegmentedSwitcher.tsx#SegmentedSwitcher"]={docgenInfo:SegmentedSwitcher.__docgenInfo,name:"SegmentedSwitcher",path:"src/form-items/segmented-switcher/SegmentedSwitcher.tsx#SegmentedSwitcher"})}catch(__react_docgen_typescript_loader_error){}const SegmentedSwitcherItem=props=>{const ctx=(0,react.useContext)(context),disabled=(0,react.useMemo)((()=>ctx.disabled||(props.disabled??!1)),[ctx.disabled,props.disabled]),selectedClassName=(0,react.useMemo)((()=>props.selected?"-selected":""),[props.selected]),className=(0,clsx_m.Z)("bm-c-segmented-switcher__item",selectedClassName,{"-disabled":disabled},props.className),mouse=(0,Handler.bj)(props),formEvents=(0,Handler.Hs)(props);return(0,jsx_runtime.jsxs)("label",{...mouse,className,children:[(0,jsx_runtime.jsx)("input",{type:"radio",name:props.name,tabIndex:-1,checked:props.selected??!1,disabled,...formEvents}),(0,jsx_runtime.jsx)("span",{children:props.children})]})};SegmentedSwitcherItem.displayName="SegmentedSwitcherItem";try{SegmentedSwitcherItem.displayName="SegmentedSwitcherItem",SegmentedSwitcherItem.__docgenInfo={description:"",displayName:"SegmentedSwitcherItem",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},nativeProps:{defaultValue:null,description:"",name:"nativeProps",required:!1,type:{name:"{ [key: string]: unknown; }"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLLabelElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((evt: ChangeEvent<HTMLInputElement>) => void)"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form-items/segmented-switcher/SegmentedSwitcherItem.tsx#SegmentedSwitcherItem"]={docgenInfo:SegmentedSwitcherItem.__docgenInfo,name:"SegmentedSwitcherItem",path:"src/form-items/segmented-switcher/SegmentedSwitcherItem.tsx#SegmentedSwitcherItem"})}catch(__react_docgen_typescript_loader_error){}const SegmentedSwitcher_stories={title:"Form Item/Segmented Switcher",argTypes:{appearance:{options:Object.values(AppearanceType.M),control:{type:"select"}}}},Preview2=()=>{const[mode,switchMode]=(0,react.useState)("detail"),changeMode=(0,react.useCallback)((evt=>{switchMode(evt.target.name)}),[]);return(0,jsx_runtime.jsxs)(SegmentedSwitcher,{style:{"--bm-line-height":"1","--bm-button-padding-tb":"5px"},children:[(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{name:"detail",selected:"detail"===mode,onChange:changeMode,children:"詳細"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{name:"artwork",selected:"artwork"===mode,onChange:changeMode,children:"アートワーク"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{name:"lyrics",selected:"lyrics"===mode,onChange:changeMode,children:"歌詞"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{name:"options",selected:"options"===mode,onChange:changeMode,children:"オプション"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{name:"sort",selected:"sort"===mode,onChange:changeMode,children:"読みがな"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{name:"file",selected:"file"===mode,onChange:changeMode,children:"ファイル"})]})};Preview2.displayName="Preview2";const Story={render:args=>{const[val,setVal]=(0,react.useState)("1");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(SegmentedSwitcher,{tabIndex:1,disabled:args.disabled,animated:args.animated,appearance:args.appearance,children:[(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"1"===val,onChange:()=>setVal("1"),children:"ABC"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"2"===val,onChange:()=>setVal("2"),children:"DEFGH"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"3"===val,onChange:()=>setVal("3"),children:"IJKLMNOP"})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)(SegmentedSwitcher,{disabled:args.disabled,animated:args.animated,appearance:args.appearance,style:{"--bm-segmented-switcher-radius":"16px"},children:[(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"1"===val,onChange:()=>setVal("1"),children:"あ"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"2"===val,onChange:()=>setVal("2"),children:"い"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"3"===val,onChange:()=>setVal("3"),children:"う"})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)(SegmentedSwitcher,{animated:args.animated,appearance:args.appearance,style:{"--bm-segmented-switcher-radius":"8px","--bm-segmented-switcher-padding":"4px"},children:[(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"1"===val,onChange:()=>setVal("1"),children:"アイテム1"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"2"===val,onChange:()=>setVal("2"),children:"アイテム2"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"3"===val,onChange:()=>setVal("3"),children:"アイテム3"})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)(SegmentedSwitcher,{animated:args.animated,appearance:args.appearance,children:[(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"1"===val,onChange:()=>setVal("1"),disabled:!0,children:"部分的に"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"2"===val,onChange:()=>setVal("2"),children:"非活性です"}),(0,jsx_runtime.jsx)(SegmentedSwitcherItem,{selected:"3"===val,onChange:()=>setVal("3"),children:"アイウエオ"})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Preview2,{})]})},args:{disabled:!1,animated:!0,appearance:AppearanceType.M.NORMAL}};Story.parameters={...Story.parameters,docs:{...Story.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [val, setVal] = useState('1');\n    return <>\n        <SegmentedSwitcher tabIndex={1} disabled={args.disabled} animated={args.animated} appearance={args.appearance}>\n          <SegmentedSwitcherItem selected={val === '1'} onChange={() => setVal('1')}>\n            ABC\n          </SegmentedSwitcherItem>\n          <SegmentedSwitcherItem selected={val === '2'} onChange={() => setVal('2')}>\n            DEFGH\n          </SegmentedSwitcherItem>\n          <SegmentedSwitcherItem selected={val === '3'} onChange={() => setVal('3')}>\n            IJKLMNOP\n          </SegmentedSwitcherItem>\n        </SegmentedSwitcher>\n        <br />\n        <br />\n        <SegmentedSwitcher disabled={args.disabled} animated={args.animated} appearance={args.appearance} style={({\n        '--bm-segmented-switcher-radius': '16px'\n      } as CSSProperties)}>\n          <SegmentedSwitcherItem selected={val === '1'} onChange={() => setVal('1')}>\n            あ\n          </SegmentedSwitcherItem>\n          <SegmentedSwitcherItem selected={val === '2'} onChange={() => setVal('2')}>\n            い\n          </SegmentedSwitcherItem>\n          <SegmentedSwitcherItem selected={val === '3'} onChange={() => setVal('3')}>\n            う\n          </SegmentedSwitcherItem>\n        </SegmentedSwitcher>\n        <br />\n        <br />\n        <SegmentedSwitcher animated={args.animated} appearance={args.appearance} style={({\n        '--bm-segmented-switcher-radius': '8px',\n        '--bm-segmented-switcher-padding': '4px'\n      } as CSSProperties)}>\n          <SegmentedSwitcherItem selected={val === '1'} onChange={() => setVal('1')}>\n            アイテム1\n          </SegmentedSwitcherItem>\n          <SegmentedSwitcherItem selected={val === '2'} onChange={() => setVal('2')}>\n            アイテム2\n          </SegmentedSwitcherItem>\n          <SegmentedSwitcherItem selected={val === '3'} onChange={() => setVal('3')}>\n            アイテム3\n          </SegmentedSwitcherItem>\n        </SegmentedSwitcher>\n        <br />\n        <br />\n        <SegmentedSwitcher animated={args.animated} appearance={args.appearance}>\n          <SegmentedSwitcherItem selected={val === '1'} onChange={() => setVal('1')} disabled>\n            部分的に\n          </SegmentedSwitcherItem>\n          <SegmentedSwitcherItem selected={val === '2'} onChange={() => setVal('2')}>\n            非活性です\n          </SegmentedSwitcherItem>\n          <SegmentedSwitcherItem selected={val === '3'} onChange={() => setVal('3')}>\n            アイウエオ\n          </SegmentedSwitcherItem>\n        </SegmentedSwitcher>\n        <br />\n        <br />\n        <Preview2 />\n      </>;\n  },\n  args: {\n    disabled: false,\n    animated: true,\n    appearance: AppearanceType.NORMAL\n  }\n}",...Story.parameters?.docs?.source}}};const __namedExportsOrder=["Story"]},"./src/base/BaseComponent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getBaseComponentProps(props){const{id,style,tabIndex}=props;return{id,style,tabIndex,...props.nativeProps??{}}}__webpack_require__.d(__webpack_exports__,{W:()=>getBaseComponentProps});try{getBaseComponentProps.displayName="getBaseComponentProps",getBaseComponentProps.__docgenInfo={description:"",displayName:"getBaseComponentProps",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},nativeProps:{defaultValue:null,description:"",name:"nativeProps",required:!1,type:{name:"{ [key: string]: unknown; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base/BaseComponent.tsx#getBaseComponentProps"]={docgenInfo:getBaseComponentProps.__docgenInfo,name:"getBaseComponentProps",path:"src/base/BaseComponent.tsx#getBaseComponentProps"})}catch(__react_docgen_typescript_loader_error){}},"./src/domain/AppearanceType.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AppearanceType,l:()=>getAppearanceClassName});const AppearanceType={NORMAL:"normal",TINT:"tint",FLAT:"flat",SUPER_FLAT:"super_flat"},appearanceMap={[AppearanceType.NORMAL]:"--normal",[AppearanceType.TINT]:"--tint",[AppearanceType.FLAT]:"--flat",[AppearanceType.SUPER_FLAT]:"--super-flat"},getAppearanceClassName=appearance=>null!=appearance?appearanceMap[appearance]:appearanceMap[AppearanceType.NORMAL]},"./src/domain/StyleClass.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CO:()=>shadowStyle,EK:()=>PUSHABLE_STYLE,Nu:()=>backgroundStyle,i3:()=>RootStyle,jr:()=>FOCUSABLE_STYLE,sK:()=>blurStyle,wi:()=>CARD_STYLE});const RootStyle={BASE:"bm-base",TEXT_BASE:"bm-text-base",CONTENT_BASE:"bm-content-base"},PUSHABLE_STYLE="bm-a-pushable",FOCUSABLE_STYLE="bm-a-focusable",backgroundStyle=["bm-a-bg-lv1","bm-a-bg-lv2","bm-a-bg-lv3","bm-a-bg-lv4"],shadowStyle=["bm-a-shadow-lv1","bm-a-shadow-lv2","bm-a-shadow-lv3","bm-a-shadow-lv4"],blurStyle=["bm-a-blur-lv1"],CARD_STYLE="bm-a-card"},"./src/util/Handler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hs:()=>getFormEventHandler,bj:()=>getMouseEventHandler});const getMouseEventHandler=props=>({onClick:props.onClick,onMouseOver:props.onMouseOver,onDoubleClick:props.onDoubleClick,onContextMenu:props.onContextMenu,onMouseDown:props.onMouseDown,onMouseUp:props.onMouseUp,onDrag:props.onDrag,onDragStart:props.onDragStart,onDragEnd:props.onDragEnd,onDragEnter:props.onDragEnter,onDragExit:props.onDragExit,onDragLeave:props.onDragLeave,onDragOver:props.onDragOver,onDrop:props.onDrop,onMouseEnter:props.onMouseEnter,onMouseLeave:props.onMouseLeave,onMouseMove:props.onMouseMove,onMouseOut:props.onMouseOut}),getFormEventHandler=props=>({onChange:props.onChange,onInput:props.onInput,onInvalid:props.onInvalid,onReset:props.onReset,onSubmit:props.onSubmit})},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);