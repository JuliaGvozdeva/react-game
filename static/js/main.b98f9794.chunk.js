(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{77:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(11),s=n.n(c),r=(n(77),n(33)),o=n(119),l=Object(o.a)({containerPageCenter:{margin:"0 auto",maxWidth:"1200px",padding:"0px 20px",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},centerContainer:{display:"flex",justifyContent:"center",alignItems:"center"},toggleNavButton:{borderRadius:"50%",position:"absolute",top:0,right:0,zIndex:"12"},modalDiv:{display:"flex",justifyContent:"center",alignItems:"center",width:"400px",height:"250px",background:"url(./images/gameBackground.png)",backgroundSize:"cover",zIndex:"12",position:"absolute",top:"45%",borderRadius:"5px",padding:"20px",fontWeight:"bold",fontSize:"22px",flexDirection:"column",textAlign:"center"},modalButtonContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"40px",columnGap:"1em"},modalButton:{background:"#d9d9d970","&:hover":{background:"#00000054"}},overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgb(20 19 19 / 75%)",zIndex:10}}),g=n(13),m=Object(o.a)({navModalContainer:{display:"flex",justifyContent:"center",alignItems:"center"},overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgb(20 19 19 / 75%)",zIndex:10},navMenu:{zIndex:11,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"absolute",top:"45%","& a":{textDecoration:"none"}},closeNavMenu:{zIndex:12,position:"fixed",top:10,right:10},navMenuItem:{listStyleType:"none",width:"250px",height:"50px",textAlign:"center",boxSizing:"border-box","& span":{color:"black",textDecoration:"none",textTransform:"none"}}}),u=n(122),d=n(15),j=n(2);var b=Object(d.b)((function(e){return{lang:e.lang,theme:e.theme}}))((function(e){var t=e.lang,n=(e.theme,e.isShownNav),a=m();function i(){n(!1)}return Object(j.jsxs)("div",{className:a.navModalContainer,children:[(console.log(window.location.href),window.location.href.includes("react-game/game")||window.location.href.includes("statistics")||window.location.href.includes("settings")?Object(j.jsx)(u.a,{style:{top:"10px",right:"10px",zIndex:12,position:"fixed"},className:a.closeNavMenu,onClick:i,children:Object(j.jsx)("img",{src:"./images/close.png",alt:"close-menu"})}):null),Object(j.jsxs)("nav",{className:a.navMenu,children:[Object(j.jsx)(r.b,{to:"/game",children:Object(j.jsx)(u.a,{style:{background:"center / contain no-repeat url(./images/gameNavBg.png)"},className:a.navMenuItem,onClick:i,children:"en"===t?"New game":"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"})}),Object(j.jsx)(r.b,{to:"/statistics",children:Object(j.jsx)(u.a,{style:{background:"center / contain no-repeat url(./images/gameNavBg.png)"},className:a.navMenuItem,onClick:i,children:"en"===t?"Statistics":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"})}),Object(j.jsx)(r.b,{to:"/settings",children:Object(j.jsx)(u.a,{style:{background:"center / contain no-repeat url(./images/gameNavBg.png)"},className:a.navMenuItem,onClick:i,children:"en"===t?"Settings":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]}),Object(j.jsx)("div",{className:a.overlay})]})})),x=n(18),p=Object(o.a)({gameContainer:{background:'url("../../../../images/gameBackground.png")',backgroundRepeate:"no-repeate",backgroundSize:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px 20px"},gameCenterContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},gameFieldContainer:{minWidth:"330px",minHeight:"330px",background:"#24201b91",display:"flex",flexDirection:"rows",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",padding:"5px 5px"},gameItem:{minWidth:"95px",height:"95px",background:"#f4cfcff0",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"5px",border:"2px solid black",cursor:"pointer",transition:"all 0.1s ease-in-out","&:hover":{background:"#e9dbdb75"}},empty:{background:"none!important",border:"none","&:hover":{background:"none"}},gameBtnContainer:{display:"flex",flexDirection:"row",columnGap:"1em"},gameBtn:{width:"80px",height:"80px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center","&:hover":{width:"90px",height:"90px"}},gameBtnImg:{width:"100%",height:"100%"}});function h(e){var t=p(),n=e.value,a=e.endItem,i=n===a?"".concat(t.gameItem," ").concat(t.empty):"".concat(t.gameItem);return Object(j.jsx)("div",{style:e.style,id:n,className:i,onClick:function(){return e.clickHandler()},children:n===a?"":n})}var f=Object(d.b)((function(e){return{areEffectsOn:e.settings[0].state,musicVolume:e.settings[2].state,isImages:e.images}}))((function(e){var t=this,n=e.gameItems,a=e.sizeGame,i=e.areEffectsOn,c=e.musicVolume,s=e.updateBoard,r=e.isImages,o=e.backImage,l=p(),g=a,m=Math.pow(a,2),u=n.indexOf(m),d=110*g,b=function(e,t,n){return n*(e-1)+t-1},x=function(e,t){return{row:Math.floor(e/t)+1,column:e%t+1}}(u,g),f=function(e){if(i){var t=new Audio("./sounds/click.wav");t.play(),t.volume=c}var a=x.row>0?b(x.row-1,x.column,g):null,s=x.column<g?b(x.row,x.column+1,g):null,r=x.row<g?b(x.row+1,x.column,g):null,o=x.column>0?b(x.row,x.column-1,g):null,l=n.indexOf(e);l!==a&&l!==s&&l!==r&&l!==o||O(e)},O=function(e){var t=n.slice(),a=t.indexOf(e),i=t.indexOf(m),c=t[a];t[a]=t[i],t[i]=c,s(t)};return Object(j.jsx)("div",{className:l.gameFieldContainer,style:{width:d,height:d},children:n.map((function(e){var n=e%g*100+"%",a=100*Math.floor(e/g)+"%";return Object(j.jsx)(h,{style:"images"===r?{backgroundImage:"url(".concat(o,")"),backgroundPosition:"-".concat(n," -").concat(a),backgroundSize:100*g+"%"}:null,value:e,clickHandler:f.bind(t,e),endItem:m},e)}))})})),O=Object(o.a)({gameCenterContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingTop:"5%"},resultsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",fontSize:"20px",fontWeight:"600",marginBottom:"1em"},timer:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"20px","& img":{width:"50px",height:"50x",marginRight:"10px"}},stepCounter:{display:"flex",justifyContent:"center",alignItems:"center","& img":{width:"50px",height:"50px",marginRight:"10px"}}});function v(e){for(var t=e*e,n=[],a=C(1,t),i=1;i<=t;i++){for(;-1!==n.indexOf(a);)a=C(1,t);n.push(a)}var c=Math.ceil((n.indexOf(t)+1)/e);return(function(e,t){for(var n=0,a=0;a<e.length;a++)if(e[a]!==t)for(var i=a;i<e.length;i++)e[a]>e[i]&&e[i]!==t&&n++;return n}(n,t)+c)%2!==0&&v(e),n}function C(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var I=Object(d.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.isOpen,n=e.lang,i=e.text,c=e.isNewStart,s=e.isShownGameOver,r=e.isPrefield,o=l(),g=Object(a.useState)(t),m=Object(x.a)(g,2),d=m[0],b=m[1],p=function(e,t){var n=e.moves,a=t.moves,i=0;return n>a?i=1:n<a&&(i=-1),i};return Object(a.useEffect)((function(){d&&!r&&function(){var e=localStorage.name,t={score:+localStorage.score+1,size:localStorage.size,name:e},n=[];localStorage.statistics?!(n=JSON.parse(localStorage.statistics)).includes(t)&&n.length<11?n.push(t):30===n.length?n[n.length-1].moves>t.score&&(n[n.length-1]=t):n.length<31&&n.push(t):n.push(t),localStorage.setItem("statistics",JSON.stringify(n.sort(p)))}()}),[]),d?Object(j.jsxs)("div",{className:o.centerContainer,children:[Object(j.jsxs)("div",{className:o.modalDiv,children:[i,Object(j.jsxs)("div",{className:o.modalButtonContainer,children:[Object(j.jsx)(u.a,{className:o.modalButton,onClick:function(){s(!1),b(!1),c(!0)},children:"en"===n?"New game":"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"}),Object(j.jsx)(u.a,{className:o.modalButton,onClick:function(){localStorage.board="",localStorage.score=0,localStorage.image="",s(!1),b(!1),window.location.href="/"},children:"en"===n?"Cancel":"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]}),Object(j.jsx)("div",{className:o.overlay})]}):Object(j.jsx)("div",{})}));var y=Object(d.b)((function(e){return{size:e.settings[3].state,lang:e.lang}}))((function(e){for(var t=e.size,n=e.gamePrefield,i=e.lang,c=p(),s=O(),r=[],o=Object(a.useState)(!1),l=Object(x.a)(o,2),g=l[0],m=l[1],d=Object(a.useState)(r),h=Object(x.a)(d,2),C=h[0],y=h[1],S=Object(a.useState)(0),N=Object(x.a)(S,2),w=N[0],k=N[1],B=Object(a.useState)(!1),G=Object(x.a)(B,2),M=G[0],z=G[1],E=Object(a.useState)("en"===i?"[Enter user name]":"[\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430]"),T=Object(x.a)(E,2),D=T[0],R=T[1],L=Object(a.useState)(t),P=Object(x.a)(L,2),V=P[0],J=P[1],A=Object(a.useState)("./images/gameImages/image1.jpg"),W=Object(x.a)(A,2),U=W[0],_=W[1],F=["./images/gameImages/image1.jpg","./images/gameImages/image2.jpg","./images/gameImages/image3.jpg","./images/gameImages/image4.jpg","./images/gameImages/image5.jpg","./images/gameImages/image6.jpg","./images/gameImages/image7.jpg","./images/gameImages/image8.jpg","./images/gameImages/image9.jpg","./images/gameImages/image10.jpg"],H=1;H<=Math.pow(V,2);H++)r.push(H);Object(a.useEffect)((function(){n||C.join()===r.join()||(localStorage.setItem("size",V),localStorage.setItem("score",JSON.stringify(w)),localStorage.setItem("board",JSON.stringify(C)))})),Object(a.useEffect)((function(){if(n)y(r);else{var e=localStorage.board?JSON.parse(localStorage.board):null;e?(y(e),J(localStorage.size||t),_(localStorage.image||F[Math.floor(Math.random()*F.length)])):(y(v(V)),_(F[Math.floor(Math.random()*F.length)]))}k(+localStorage.score||w),Y()}),[]);var K=function(e){e&&(y(v(V)),k(0),m(!1),_(F[Math.floor(Math.random()*F.length)]),localStorage.setItem("score",w),localStorage.setItem("board",C),localStorage.setItem("image",U))},Y=function(){null===localStorage.getItem("name")||localStorage.getItem(!1)?R("en"===i?"[Enter user name]":"[\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430]"):R(localStorage.getItem("name"))},q=function(e){"keypress"===e.type?13!=e.which&&13!=e.keyCode||(e.target.innerText.trim().length>0&&""!==e.target.innerText?(localStorage.setItem("name",e.target.innerText),e.target.blur()):(Y(),e.target.blur())):e.target.innerText.trim().length>0&&""!==e.target.innerText?localStorage.setItem("name",e.target.innerText):Y()};return Object(j.jsxs)("div",{className:c.gameCenterContainer,children:[Object(j.jsxs)("div",{className:s.resultsContainer,children:[Object(j.jsx)("div",{className:s.timer,children:Object(j.jsx)("span",{id:"userName",contenteditable:"true",onClick:function(e){R(""),q(e)},onKeyPress:q,onBlur:q,children:D})}),Object(j.jsxs)("div",{className:s.stepCounter,children:[Object(j.jsx)("img",{src:"./images/counter.png",alt:"step-count"}),Object(j.jsx)("span",{children:w})]})]}),g?Object(j.jsx)(I,{isNewStart:K,isShownGameOver:function(e){m(!1)},isOpen:g,text:"en"===i?"Congratulations! You solved the puzzle in ".concat(w," moves."):"\u0412\u044b \u0432\u044b\u0439\u0433\u0440\u0430\u043b\u0438! \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0433\u043e\u0432 ".concat(w)}):null,Object(j.jsx)("div",{className:c.gameContainer,children:Object(j.jsx)(f,{backImage:U,sizeGame:V,gameItems:C,gamePrefield:n,updateBoard:function(e){k(w+1),y(e),localStorage.setItem("score",w),localStorage.setItem("board",JSON.stringify(C)),localStorage.setItem("image",U),e.join()===r.join()&&m(!0)}.bind(this)})}),Object(j.jsxs)("div",{className:c.gameBtnContainer,children:[Object(j.jsx)(u.a,{className:c.gameBtn,onClick:K,children:Object(j.jsx)("img",{className:c.gameBtnImg,src:"./images/repeate.png",alt:"repeate-game"})}),Object(j.jsx)(u.a,{className:c.gameBtn,onClick:function(){z(!0)},children:Object(j.jsx)("img",{className:c.gameBtnImg,src:"./images/menu.png",alt:"nav-menu"})})]}),M?Object(j.jsx)(b,{isShownNav:function(e){z(e)}}):null]})})),S=n.p+"static/media/backgroundMusic.8d54f783.mp3";var N=Object(d.b)((function(e){return{isMusicOn:e.settings[1].state,musicVolume:e.settings[2].state}}))((function(e){var t=e.gamePrefield,n=e.isMusicOn,i=e.musicVolume,c=O();return Object(a.useEffect)((function(){var e=new Audio(S);return n&&!t?(e.play(),e.volume=i):e.pause(),function(){e.pause()}})),Object(j.jsx)("div",{className:c.gameCenterContainer,children:Object(j.jsx)(y,{gamePrefield:t})})}));function w(){l();return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{isShownNav:function(){return!0}}),Object(j.jsx)(N,{gamePrefield:!0})]})}var k=Object(o.a)({gameCenterContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingTop:"5%"},gameBtn:{width:"80px",height:"80px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center","&:hover":{width:"90px",height:"90px"}},gameBtnImg:{width:"100%",height:"100%"},settingsConatainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"baseline",rowGap:"1em"},settingsItem:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",columnGap:"1em"},settingsImg:{width:"60px",height:"60px"},sliderControl:{width:"150px"},toggleContainer:{display:"flex",flexDirection:"row",columnGap:"2em",marginTop:"2em",color:"black"},toggleButton:{color:"black!important",border:"1px solid rgb(0 0 0 / 50%);",backgroundColor:"rgb(201 105 0 / 62%)"},navButton:{marginTop:"20px",width:"100%",color:"black!important",border:"1px solid rgb(0 0 0 / 50%);",backgroundColor:"rgb(201 105 0 / 62%)","&:hover":{backgroundColor:"rgb(201 105 0 / 22%)"}}});var B=n(135),G=n(136),M=n(132),z=n(134),E=n(133),T={EN:{areEffectsOn:"Sound effects",isMusicOn:"Music",musicVolume:"Volume",isSizeGame:"Game size field"},RU:{areEffectsOn:"\u0417\u0432\u0443\u043a\u043e\u0432\u044b\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u044b",isMusicOn:"\u041c\u0443\u0437\u044b\u043a\u0430",musicVolume:"\u0413\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c",isSizeGame:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044f"}};var D={toggleSetting:function(e,t){return e.target.value&&(localStorage.board=""),{type:"TOGGLE_SETTINGS",target:e.target.name||e.target.ariaLabel,value:e.target.checked||e.target.value||t,payload:e}}},R=Object(d.b)((function(e){return{settings:e.settings,lang:e.lang}}),D)((function(e){var t=e.settings,n=e.lang,a=e.toggleSetting,i=k();return Object(j.jsx)("div",{className:i.settingsConatainer,children:t.map((function(e){return function(e,t,n,a){return"musicVolume"===e.id?Object(j.jsxs)("div",{className:a.settingsItem,children:[Object(j.jsx)("img",{src:"./images/".concat(e.id,".png"),alt:e.id,className:a.settingsImg}),Object(j.jsx)(B.a,{control:Object(j.jsx)(G.a,{"aria-label":"musicVolume","aria-labelledby":"continuous-slider",value:e.state,onChange:n,step:.1,min:0,max:1}),className:a.sliderControl,label:"en"===t?T.EN[e.id]:T.RU[e.id]},e.id)]},e.id):"isSizeGame"===e.id?Object(j.jsxs)("div",{className:a.settingsItem,children:[Object(j.jsx)("img",{src:"./images/".concat(e.id,".png"),alt:e.id,className:a.settingsImg}),Object(j.jsx)(B.a,{control:Object(j.jsxs)(M.a,{value:e.state,checked:e.state,onChange:n,name:e.id,color:"primary",children:[Object(j.jsx)(z.a,{value:"3",children:"3x3"}),Object(j.jsx)(z.a,{value:"4",children:"4x4"}),Object(j.jsx)(z.a,{value:"5",children:"5x5"}),Object(j.jsx)(z.a,{value:"6",children:"6x6"}),Object(j.jsx)(z.a,{value:"7",children:"7x7"}),Object(j.jsx)(z.a,{value:"8",children:"8x8"})]}),label:"en"===t?T.EN[e.id]:T.RU[e.id]},e.id)]},e.id):Object(j.jsxs)("div",{className:a.settingsItem,children:[Object(j.jsx)("img",{src:"./images/".concat(e.id,".png"),alt:e.id,className:a.settingsImg}),Object(j.jsx)(B.a,{control:Object(j.jsx)(E.a,{checked:e.state,onChange:n,name:e.id,color:"primary"}),label:"en"===t?T.EN[e.id]:T.RU[e.id]},e.id)]},e.id)}(e,n,a,i)}))})})),L=n(125),P=n(137),V={en:"en",ru:"ru"},J={EN:{images:"images",numbers:"numbers"},RU:{images:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",numbers:"\u0427\u0438\u0441\u043b\u0430"}};function A(e){var t=k();return Object.keys(e).map((function(n,a){return Object(j.jsx)(L.a,{value:n,classes:{root:t.toggleButton},color:"primary",children:e[n].toUpperCase()},"".concat(n).concat(a))}))}var W={toggleLang:function(e){return{type:"TOGGLE_LANG",value:e.target.value||e.target.parentNode.value,payload:e}},toggleImages:function(e){return{type:"TOGGLE_IMAGES",value:e.target.value||e.target.parentNode.value,payload:e}}},U=Object(d.b)((function(e){return{lang:e.lang,images:e.images}}),W)((function(e){var t=e.lang,n=e.toggleLang,a=e.images,i=e.toggleImages,c=k();return Object(j.jsxs)("div",{className:c.toggleContainer,children:[Object(j.jsx)(P.a,{value:t,exclusive:!0,onChange:n,className:c.toggleButton,children:A(V)},"lang"),Object(j.jsx)(P.a,{value:a,exclusive:!0,onChange:i,className:c.toggleButton,children:A("en"===t?J.EN:J.RU)},"image")]})}));var _=Object(d.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.lang,n=k(),i=Object(a.useState)(!1),c=Object(x.a)(i,2),s=c[0],r=c[1];return Object(j.jsxs)("div",{className:n.gameCenterContainer,children:[Object(j.jsx)(R,{}),Object(j.jsx)(U,{}),Object(j.jsx)(u.a,{className:n.navButton,onClick:function(){r(!0)},children:"en"===t?"Nav menu":"\u041c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438"}),s?Object(j.jsx)(b,{isShownNav:function(e){r(e)}}):null]})})),F=n(126),H=n(124),K=n(127),Y=n(128),q=n(129),Q=n(130),X=n(131),Z=Object(o.a)({statisticsContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"relative",paddingTop:"40px"},navigationContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},navButton:{marginBottom:"20px",width:"50%",color:"black!important",border:"1px solid rgb(0 0 0 / 50%);",backgroundColor:"rgb(201 105 0 / 62%)","&:hover":{backgroundColor:"rgb(201 105 0 / 22%)"}},table:{minWidth:450},warning:{padding:"20px"}});var $=Object(d.b)((function(e){return{lang:e.lang}}))((function(e){var t=e.lang,n=Z(),i=Object(a.useState)(!1),c=Object(x.a)(i,2),s=c[0],r=c[1],o=localStorage.statistics?JSON.parse(localStorage.statistics):[];return Object(j.jsxs)("div",{className:n.statisticsContainer,children:[Object(j.jsx)(u.a,{className:n.navButton,onClick:function(){r(!0)},children:"en"===t?"Nav menu":"\u041c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438"}),s?Object(j.jsx)(b,{isShownNav:function(e){r(e)}}):null,Object(j.jsx)(F.a,{component:H.a,children:Object(j.jsxs)(K.a,{className:n.table,"aria-label":"simple table",children:[Object(j.jsx)(Y.a,{style:{backgroundColor:"#b05a009e",fontWeight:"bold"},children:Object(j.jsxs)(q.a,{classes:n.tableHead,children:[Object(j.jsx)(Q.a,{children:"Player name"}),Object(j.jsx)(Q.a,{align:"right",children:"Score"}),Object(j.jsx)(Q.a,{align:"right",children:"Game field size"})]})}),Object(j.jsx)(X.a,{children:0!==o.length?o.map((function(e){return Object(j.jsxs)(q.a,{style:{backgroundColor:"rgb(206 162 115 / 43%)"},children:[Object(j.jsx)(Q.a,{component:"th",scope:"row",children:e.name||"unknown"}),Object(j.jsx)(Q.a,{align:"right",children:e.score}),Object(j.jsx)(Q.a,{align:"right",children:e.size})]},e.name)})):Object(j.jsx)("span",{className:n.warning,children:"No items yet."})})]})})]})}));function ee(){return Object(j.jsxs)(g.d,{children:[Object(j.jsx)(g.b,{exact:!0,path:"/",component:w}),Object(j.jsx)(g.b,{path:"/game",children:Object(j.jsx)(N,{gamePrefield:!1})}),Object(j.jsx)(g.b,{path:"/settings",component:_}),Object(j.jsx)(g.b,{path:"/statistics",component:$}),Object(j.jsx)(g.a,{path:"*",to:"/"})]})}var te=function(){var e=l();return Object(j.jsx)(r.a,{basename:"/react-game",children:Object(j.jsx)("div",{className:e.containerPageCenter,children:Object(j.jsx)(ee,{})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))},ae=n(48),ie=n(65),ce=n(26),se={settings:[{id:"areEffectsOn",state:!0},{id:"isMusicOn",state:!0},{id:"musicVolume",state:.5},{id:"isSizeGame",state:3}],lang:"en",images:"images",score:0},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_SETTINGS":var n=e.settings.slice(),a=n.findIndex((function(e){return e.id===t.target}));return n[a].state=t.value,Object(ce.a)(Object(ce.a)({},e),{},{settings:Object(ie.a)(n)});case"TOGGLE_LANG":return Object(ce.a)(Object(ce.a)({},e),{},{lang:t.value});case"TOGGLE_IMAGES":return Object(ce.a)(Object(ce.a)({},e),{},{images:t.value});case"TOGGLE_SCORE":return Object(ce.a)(Object(ce.a)({},e),{},{score:t.payload});default:return e}},oe=Object(ae.b)(re);s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(d.a,{store:oe,children:Object(j.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[89,1,2]]]);
//# sourceMappingURL=main.b98f9794.chunk.js.map