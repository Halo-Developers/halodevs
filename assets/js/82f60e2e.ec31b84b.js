"use strict";(self.webpackChunkcode_esi_docs=self.webpackChunkcode_esi_docs||[]).push([[9e3],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2608:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={title:"Deploying a React App",sidebar_position:2},l=void 0,p={unversionedId:"frontend/vercel/react",id:"frontend/vercel/react",title:"Deploying a React App",description:"As we said, we can deploy a React app to Vercel by connecting it to our GitHub account.",source:"@site/docs/frontend/vercel/react.md",sourceDirName:"frontend/vercel",slug:"/frontend/vercel/react",permalink:"/docs/frontend/vercel/react",editUrl:"https://github.com/halodevelopers/halodevs/tree/main/docs/frontend/vercel/react.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deploying a React App",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/frontend/vercel/intro"},next:{title:"What is Machine Learning",permalink:"/docs/ml/intro"}},u={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As we said, we can deploy a React app to Vercel by connecting it to our GitHub account."),(0,o.kt)("p",null,"After we've connected our GitHub account to Vercel, we can now create ",(0,o.kt)("a",{parentName:"p",href:"https://vercel.com/new"},"New Project"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72823374/156881998-28e5721c-eafa-4e9e-8458-2bc439993042.png",alt:"image"})),(0,o.kt)("p",null,"In this section, we can search for our React app Github repository."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72823374/156882043-5cf3df90-eb2b-499b-a0af-f59e77d78c80.png",alt:"image"})),(0,o.kt)("p",null,"Then click on the ",(0,o.kt)("strong",{parentName:"p"},"import")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72823374/156882065-f151300b-1155-462f-9069-66d7745bb353.png",alt:"image"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PROJECT NAME"),": is the project name, and it's also the name that will be used in our project ",(0,o.kt)("inlineCode",{parentName:"li"},"domain")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"my-project-name.vercel.app"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FRAMEWORK PRESET"),": vercel will detect the framework preset automatically."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ROOT DIRECTORY"),": is the root directory of your project. ",(0,o.kt)("em",{parentName:"li"},"(always let it default to ",(0,o.kt)("inlineCode",{parentName:"em"},"./"),")"))),(0,o.kt)("p",null,"Now, click on the ",(0,o.kt)("strong",{parentName:"p"},"Deploy")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72823374/156882361-5a7b3723-2498-4d21-8109-1ac995381298.png",alt:"image"})),(0,o.kt)("p",null,"Vercel we log all our building process in the console."),(0,o.kt)("p",null,"AMAZING !"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72823374/156882377-3b4ccdc0-4d5f-46db-80d1-f86ec8549420.png",alt:"image"})),(0,o.kt)("p",null,"Our application now is available at ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs-training-tutorial.vercel.app/"},"reactjs-training-tutorial.vercel.app"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72823374/156882405-576eae0e-af6f-4f3f-8476-432fd42373d6.png",alt:"image"})))}f.isMDXComponent=!0}}]);