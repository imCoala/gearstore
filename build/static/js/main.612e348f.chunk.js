(this.webpackJsonpgearstore=this.webpackJsonpgearstore||[]).push([[0],{135:function(n,e,t){"use strict";t.r(e);var i,r,a,o,s,c,d,l,x,p=t(64),h=t.n(p),m=t(73),j=t(3),b=t(74),f=t(5),g=t(6),u=g.b.div(i||(i=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n\n  padding: 10px 0;\n\n  height: 70px;\n  text-align: center;\n\n  background: transparent;\n  z-index: 10;\n  \n  @media (max-width: 767px) {\n    background: #FFF!important;\n  }\n\n  img { \n    width: 100px;\n    margin-right: 10px;\n  }\n\n  .wrapper-logo {\n    width: 100%;\n\n    display: flex;\n    flex-flow: wrap;\n    justify-content: center;\n    align-items: center;\n\n    p {\n      color: #DF5E5E;\n      font-size: 13pt;\n      font-weight: 800;\n    }\n  }\n"]))),O=t.p+"static/media/logo.ecdecd6f.svg",k=t(2),y=t(1),v=function(){var n=Object(k.useState)(!1),e=Object(b.a)(n,2),t=e[0],i=e[1];return Object(k.useEffect)((function(){var n=document.querySelector(".wrapper-info");window.addEventListener("scroll",(function(){n&&(window.pageYOffset>n.clientHeight?i(!0):i(!1))}))})),Object(y.jsx)(u,{style:{background:t?"#FFF":"transparent"},children:Object(y.jsxs)("div",{className:"wrapper-logo",children:[Object(y.jsx)("img",{src:O,alt:""}),Object(y.jsx)("p",{children:"GEAR | STORE"})]})})},w=g.b.div(r||(r=Object(f.a)(["\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  font-size: 14pt;\n  color: #777;\n\n  span {\n    color: #DF5E5E;\n    font-weight: 600;\n  }\n"]))),C=function(){return Object(y.jsx)(w,{children:Object(y.jsxs)("p",{children:[" \xa9 Copy 2021. by ",Object(y.jsx)("span",{children:"Gear | Store"})]})})},E=t(68),S=t(69),F=t.n(S),A=t(26),z=t(33),D=t(70),R=t(71),P=t(72),B=t(48),N=t.p+"static/media/circle.6e8d5f4b.png",_=t.p+"static/media/circle-2.e1822a83.png",$=g.b.div(a||(a=Object(f.a)(["\n  position: relative;\n\n  height: 100vh;\n  \n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  @media (max-width: 767px) {\n    display: unset;\n  }\n\n  .wrapper-product {\n    position: relative;\n    overflow: hidden;\n    z-index: 0;\n    \n    @media (max-width: 767px) {\n      display: none;\n    }\n\n    video {\n      object-fit: cover;\n      clip-path: url(#svgPath);\n      width: 100%;\n      height: 100vh;\n\n      transform: translateX(60px)\n    }\n\n    :before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n\n      z-index: 1;\n    }\n  }\n\n  .wrapper-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    \n    @media (max-width: 767px) {\n      margin-top: 30px;\n    }\n  \n    .wrapper-info-content {\n      display: flex;\n      flex-flow: wrap;\n      flex-direction: column;\n      p {\n        font-size: 20pt;\n        text-align: left;\n        font-weight: 500;\n        color: #55575b;\n        margin-bottom: 10px;\n        font-family: sans-serif;\n      }\n\n      span {\n        font-size: 11pt;\n        color: #55575b;\n        margin-bottom: 20px;\n      }\n    }\n\n    img {\n      height: 340px;\n      object-fit: contain;\n      margin-bottom: 30px;\n    }    \n  }\n\n  .wrapper-scroll-down {\n    cursor: pointer;\n\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]))),q=g.b.button(o||(o=Object(f.a)(["\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 5px;\n  border: 1px solid #FFF;\n  background: #FFF;\n  color: #CF3E3A;\n\n  box-shadow: 0 0 30px rgb(0 0 0 / 10%);\n  font-size: 13pt;\n  font-weight: 500;\n  transition: all .5s ease-in-out;\n  font-weight: 600;\n\n  :hover {\n    background: #FFF;\n    color: #CF3E3A;\n    border-color: #CF3E3A;\n  }\n"]))),L=g.b.div(s||(s=Object(f.a)(["\n  min-height: 100vh;\n\n  display: flex;\n  flex-flow: wrap;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  background: url(",") no-repeat;\n  background-size: contain;\n  background-position: -30% 50%;\n\n  .product-about {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 55%;\n\n    @media (max-width: 767px) {\n      margin-top: 50px;\n      width: 100%;\n    }\n\n    .card {\n      background: #FFF;\n      width: 80%;\n      padding: 40px 30px;\n      box-shadow: 0 0 30px rgb(0 0 0 / 10%);\n      color: #000;\n      \n      h1 {\n        font-size: 16pt;\n      }\n      \n      p {\n        color: #B2B2B2;\n        font-size: 12pt;\n        margin-bottom: 25px;        \n      }\n\n      ul li {\n        margin: 10px 0;\n        font-size: 14pt;\n        position: relative;\n      }\n    }\n  }\n\n  .product-img {\n    width: 35%;\n\n    @media (max-width: 767px) {\n      display: none;\n    }\n\n    img {\n      width: 100%;\n      object-fit: contain;\n      animation: jumping 2s ease-in-out infinite;\n    }\n  }\n"])),N),M=g.b.div(c||(c=Object(f.a)(["\n  display: flex;\n  flex-flow: wrap;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  .card-feature {\n    width: 26%;\n    min-height: 250px;\n    text-align: center;\n    background: #FFF;\n    box-shadow: 0 0 30px rgb(0 0 0 / 10%);\n    margin-bottom: 40px;\n    padding: 30px 20px;\n\n    @media (max-width: 767px) {\n      width: 45%;\n    }\n\n    @media (max-width: 575px) {\n      width: 80%;\n    }\n\n    h4 {\n      font-size: 16pt;\n      margin: 15px 0;\n      color: #727272;\n    }\n\n    p {\n      font-size: 12pt;\n      color: #777;\n    }\n  }\n"]))),G=g.b.div(d||(d=Object(f.a)(["\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  height: 100vh;\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  justify-content: center;\n\n  button {\n    margin: 30px 0;\n  }\n\n  img {\n    object-fit: cover;\n    clip-path: url(#svgPathSound);\n    width: 100%;\n    height: 100vh;\n    transform: translateX(60px);\n\n    @media (max-width: 767px) {\n      transform: unset;\n    }\n  }\n"]))),T=g.b.div(l||(l=Object(f.a)(["\n  display: flex;\n  flex-flow: wrap;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  min-height: 100vh;\n  background: url(",") no-repeat;\n  background-position: 130% 100%;\n  background-size: contain;\n\n  .card-product {\n    background: #FFF;\n    width: 27%;\n    box-shadow: 0 0 30px rgb(0 0 0 / 10%);\n    margin: 20px 0;\n    padding: 30px;\n    display: flex;\n    flex-flow: wrap;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width: 767px) {\n      width: 45%;\n    }\n\n    @media (max-width: 575px) {\n      width: 80%;\n    }\n\n    p {\n      font-size: 14pt;\n      font-weight: 600;\n      color: #CF3E3A;\n    }\n\n    p span {\n      font-size: 16pt;\n      font-weight: 800;\n    }\n\n    h4 {\n      font-size: 15pt;\n      color: #777;\n      text-align: center;\n    }\n\n    img {\n      height: 240px;\n      object-fit: contain;\n    }\n\n    button {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 15px 0;\n      border-radius: 5px;\n      padding: 15px 40px;\n      border: none;\n      background: #FFF;\n      font-size: 12pt;\n      box-shadow: 0 0 30px rgb(0 0 0 / 10%);\n      color: #CF3E3A;\n      font-weight: 600;\n      cursor: pointer;\n    }\n  }\n\n"])),_),I=function(){var n={loop:!0,autoplay:!0,animationData:E,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v,{}),Object(y.jsxs)($,{id:"header",children:[Object(y.jsxs)("div",{className:"wrapper-info",children:[Object(y.jsx)("img",{src:"https://sc04.alicdn.com/kf/H7e00c0b1e3b84124846d81aef2f35a88b.jpg",alt:""}),Object(y.jsxs)("div",{className:"wrapper-info-content",children:[Object(y.jsxs)("p",{children:["A PR\xd3XIMA GERA\xc7\xc3O DE ",Object(y.jsx)("br",{})," WIRELESS"]}),Object(y.jsxs)("span",{children:["A vida \xe9 mais divertida com wireless. ",Object(y.jsx)("br",{}),"O MELHOR \xe1udio sem fio a partir de $165"]}),Object(y.jsx)("a",{href:"#produtos",children:Object(y.jsx)(q,{children:"COMPRAR AGORA!"})})]})]}),Object(y.jsxs)("div",{className:"wrapper-product",children:[Object(y.jsx)("video",{src:"https://cdn.shopify.com/s/files/1/2013/4953/files/IMG_7299_1.mp4?v=1587018434",loop:!0,autoPlay:!0,muted:!0,playsInline:!0}),Object(y.jsx)("svg",{height:"0",width:"0",children:Object(y.jsx)("defs",{children:Object(y.jsx)("clipPath",{id:"svgPath",children:Object(y.jsx)("path",{fill:"#FFFFFF",stroke:"#000000",d:"M426.077 887.952C340.033 863.079 282.503 753.358 210.694 677.378C137.025 599.431 -3.01422 573.763 0.601868 437.768C4.76959 281.025 205.593 283.578 225.26 129.562C250.269 -66.2917 23.8946 -278.675 111.166 -428.082C189.303 -561.851 323.1 -301.264 426.077 -214.232C477.414 -170.844 509.586 -96.8607 559.301 -49.3358C614.733 3.65302 683.233 11.1946 731.742 77.9653C818.883 197.912 952.489 306.792 947.476 484.973C942.752 652.925 809.676 745.543 710.813 821.953C623.142 889.712 522.757 915.901 426.077 887.952Z"})})})})]}),Object(y.jsx)("div",{className:"wrapper-scroll-down",children:Object(y.jsx)("a",{href:"#info-produto",children:Object(y.jsx)(F.a,{options:n,height:60,width:30})})})]}),Object(y.jsxs)(L,{id:"info-produto",children:[Object(y.jsx)("div",{className:"product-about",children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("h1",{children:"TWS L21 PRO Wireless Earbuds"}),Object(y.jsx)("p",{children:Object(y.jsx)("span",{children:"Wireless Charging"})}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:[Object(y.jsx)(A.a,{})," Sons wireless de alta desempenho"]}),Object(y.jsxs)("li",{children:[Object(y.jsx)(A.a,{})," Caixa de carregamento sem fio"]}),Object(y.jsxs)("li",{children:[Object(y.jsx)(A.a,{})," Ajuste confort\xe1vel e seguro"]}),Object(y.jsxs)("li",{children:[Object(y.jsx)(A.a,{})," Controle smart & \xe0 prova d'\xe1gua"]})]})]})}),Object(y.jsx)("div",{className:"product-img",children:Object(y.jsx)("img",{src:"https://sc04.alicdn.com/kf/Hb66c583409074a4b888f4300fa6b15b0M.jpg",alt:""})})]}),Object(y.jsxs)(M,{children:[Object(y.jsxs)("div",{className:"card-feature",children:[Object(y.jsx)(z.b,{size:50,color:"#DF5E5E"}),Object(y.jsx)("h4",{children:"Som Est\xe9reo"}),Object(y.jsx)("p",{children:"Agora \xe9 poss\xedvel emparelhar 2 fones de ouvido sem fio, oferecendo som surround de alta qualidade onde quer que voc\xea v\xe1."})]}),Object(y.jsxs)("div",{className:"card-feature",children:[Object(y.jsx)(z.c,{size:50,color:"#DF5E5E"}),Object(y.jsx)("h4",{children:"Conex\xe3o"}),Object(y.jsx)("p",{children:"Com a tecnologia mais recente e r\xe1pida dos fones de ouvido CR8-1 Sport Wireless, voc\xea pode se conectar facilmente a qualquer dispositivo m\xf3vel e experimentar um emparelhamento r\xe1pido e conex\xf5es est\xe1veis."})]}),Object(y.jsxs)("div",{className:"card-feature",children:[Object(y.jsx)(D.a,{size:50,color:"#DF5E5E"}),Object(y.jsx)("h4",{children:"Microfone"}),Object(y.jsx)("p",{children:"Microfone HD integrado para uma chamada perfeita tamb\xe9m com o microfone integrado, o acesso ao Siri / Google Assistant est\xe1 a apenas um toque de dist\xe2ncia, proporcionando uma experi\xeancia est\xe9reo sem fio verdadeiramente viva-voz."})]}),Object(y.jsxs)("div",{className:"card-feature",children:[Object(y.jsx)(R.a,{size:50,color:"#DF5E5E"}),Object(y.jsx)("h4",{children:"Mais de 24 horas"}),Object(y.jsx)("p",{children:"O CR8-1 Sport oferece at\xe9 5 horas de audi\xe7\xe3o com uma \xfanica carga. Com nosso estojo de carregamento que vem com cada par de fones de ouvido, voc\xea receber\xe1 cobran\xe7as m\xfaltiplas. O par agora lhe dar\xe1 mais de 24 horas de tempo de escuta."})]}),Object(y.jsxs)("div",{className:"card-feature",children:[Object(y.jsx)(P.a,{size:50,color:"#DF5E5E"}),Object(y.jsx)("h4",{children:"100% IPX7 Imperme\xe1vel"}),Object(y.jsx)("p",{children:"O nano-revestimento resistente \xe0 \xe1gua IPX7 evita com efici\xeancia que a \xe1gua e o suor penetrem e danifiquem seu componente sens\xedvel. Trabalhar adequadamente para exerc\xedcios ao sol ou m\xfasicas na chuva."})]}),Object(y.jsxs)("div",{className:"card-feature",children:[Object(y.jsx)(z.a,{size:50,color:"#DF5E5E"}),Object(y.jsx)("h4",{children:"Ajuste universal seguro"}),Object(y.jsx)("p",{children:"Devido ao seu formato pequeno e posi\xe7\xe3o intra-auricular segura, os fones de ouvido CR8-1 Sport s\xe3o perfeitos para correr, praticar esportes, fazer caminhadas, malhar e qualquer outra atividade."})]})]}),Object(y.jsxs)(G,{children:[Object(y.jsx)("a",{href:"#produtos",children:Object(y.jsx)(q,{children:"COMPRAR AGORA!"})}),Object(y.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/2013/4953/files/20.png?v=1603898953",alt:""}),Object(y.jsx)("svg",{height:"0",width:"0",children:Object(y.jsx)("defs",{children:Object(y.jsxs)("clipPath",{id:"svgPathSound",children:[Object(y.jsx)("rect",{x:"0",y:"0",stroke:"#000000",width:"108",height:"500"}),Object(y.jsx)("rect",{x:"121.5",y:"25.5",stroke:"#000000",width:"55",height:"455"}),Object(y.jsx)("rect",{x:"192.5",y:"9.5",stroke:"#000000",width:"60",height:"484"}),Object(y.jsx)("rect",{x:"271.5",y:"44.5",stroke:"#000000",width:"63",height:"416"}),Object(y.jsx)("rect",{x:"349.5",y:"25.5",stroke:"#000000",width:"208",height:"447"}),Object(y.jsx)("rect",{x:"574.5",y:"44.5",stroke:"#000000",width:"60",height:"446"}),Object(y.jsx)("rect",{x:"644.5",y:"9.5",stroke:"#000000",width:"68",height:"471"}),Object(y.jsx)("rect",{x:"736.5",y:"18.5",stroke:"#000000",width:"49",height:"462"}),Object(y.jsx)("rect",{x:"797.5",y:"25.5",stroke:"#000000",width:"55",height:"455"}),Object(y.jsx)("rect",{x:"874.5",y:"44.5",stroke:"#000000",width:"60",height:"446"}),Object(y.jsx)("rect",{x:"949.5",y:"25.5",stroke:"#000000",width:"208",height:"447"}),Object(y.jsx)("rect",{x:"1175.5",y:"9.5",stroke:"#000000",width:"60",height:"484"})]})})})]}),Object(y.jsxs)(T,{id:"produtos",children:[Object(y.jsxs)("div",{className:"card-product",children:[Object(y.jsxs)("p",{children:["R$ ",Object(y.jsx)("span",{children:"165"}),",00"]}),Object(y.jsx)("img",{src:"https://sc04.alicdn.com/kf/H7e00c0b1e3b84124846d81aef2f35a88b.jpg",alt:""}),Object(y.jsx)("h4",{children:"TWS L21 PRO - Black"}),Object(y.jsx)("a",{href:"https://gear-stores.pay.yampi.com.br/r/EQLX0SJ98Y",children:Object(y.jsxs)("button",{children:["COMPRAR ",Object(y.jsx)(B.a,{size:30})]})})]}),Object(y.jsxs)("div",{className:"card-product",children:[Object(y.jsxs)("p",{children:["R$ ",Object(y.jsx)("span",{children:"165"}),",00"]}),Object(y.jsx)("img",{src:"https://sc04.alicdn.com/kf/Hc15f5374dd4f4cc49bf364bc610dd43bB.jpg",alt:""}),Object(y.jsx)("h4",{children:"TWS L21 PRO - White"}),Object(y.jsx)("a",{href:"https://gear-stores.pay.yampi.com.br/r/K5YBQLJ1T7",children:Object(y.jsxs)("button",{children:["COMPRAR ",Object(y.jsx)(B.a,{size:30})]})})]})]}),Object(y.jsx)(C,{})]})},W=Object(g.a)(x||(x=Object(f.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: none;\n  }\n\n  html {\n    scroll-behavior: smooth;\n  }\n\n  body {\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  a:focus {\n    color: inherit;\n  }\n\n  ul, li {\n    list-style: none;\n    margin: 0;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-position: center;\n  }\n\n  @keyframes jumping {\n    0% {transform: translateY(-10px)}\n    25% {transform: translateY(0px)}\n    50% {transform: translateY(-10px)}\n    75% {transform: translateY(0px)}\n    100% {transform: translateY(-10px)}\n  }\n"]))),Y=function(){return Object(y.jsxs)(m.a,{children:[Object(y.jsx)(W,{}),Object(y.jsx)(j.c,{children:Object(y.jsx)(j.a,{exact:!0,path:"/",component:I})})]})};var V=function(){return Object(y.jsx)(Y,{})};h.a.render(Object(y.jsx)(V,{}),document.getElementById("root"))},68:function(n){n.exports=JSON.parse('{"v":"5.6.9","fr":24,"ip":0,"op":22,"w":500,"h":500,"nm":"389-scroll-down-1-auto","ddd":0,"assets":[{"id":"comp_0","layers":[]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Watermark","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":0,"k":0.292,"ix":2},"w":500,"h":500,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.698,0.698,0.698],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.031372550875,0.658823549747,0.541176497936,1],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":105,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"NULL 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');"},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];"}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"NULL","parent":3,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[450,450,100],"ix":6}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 6","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.292,"y":0.986},"o":{"x":0.333,"y":0},"t":0,"s":[60,42,0],"to":[0,1.917,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":13,"s":[60,53.5,0],"to":[0,0,0],"ti":[0,1.917,0]},{"t":21,"s":[60,42,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[8,8],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.03137254902,0.658823529412,0.541176470588,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.031372550875,0.658823549747,0.541176497936,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":143,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 5","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.292,"y":0.954},"o":{"x":0.333,"y":0},"t":0,"s":[60,60,0],"to":[0,0.583,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":13,"s":[60,63.5,0],"to":[0,0,0],"ti":[0,0.583,0]},{"t":21,"s":[60,60,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[49,85],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":54,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.03137254902,0.658823529412,0.541176470588,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":38,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":4,"bm":0}],"markers":[]}')}},[[135,1,2]]]);
//# sourceMappingURL=main.612e348f.chunk.js.map