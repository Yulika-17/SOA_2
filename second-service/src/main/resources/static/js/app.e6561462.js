(function(){"use strict";var e={1584:function(e,t,r){var n=r(5130),s=r(6768);const o={id:"app"},a={class:"operation"},i={class:"operation"};function l(e,t,r,n,l,u){const d=(0,s.g2)("FindMostExpensiveFlat"),c=(0,s.g2)("MetroTimeFilter");return(0,s.uX)(),(0,s.CE)("div",o,[t[2]||(t[2]=(0,s.Lk)("h1",null,"Дополнительные операции с Agency",-1)),(0,s.Lk)("div",a,[(0,s.Lk)("h2",{onClick:t[0]||(t[0]=e=>u.toggleForm("FindMostExpensiveApartments")),class:"blue-header"}," Выбрать из трёх квартир с заданными id наиболее дорогую "),"FindMostExpensiveApartments"===l.activeForm?((0,s.uX)(),(0,s.Wv)(d,{key:0,onClose:u.closeForm},null,8,["onClose"])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",i,[(0,s.Lk)("h2",{onClick:t[1]||(t[1]=e=>u.toggleForm("MetroTimeFilter")),class:"blue-header"}," Вернуть список всех квартир, отсортированный по времени до метро "),"MetroTimeFilter"===l.activeForm?((0,s.uX)(),(0,s.Wv)(c,{key:0,onClose:u.closeForm},null,8,["onClose"])):(0,s.Q3)("",!0)])])}var u=r(4232);const d={class:"find-most-expensive-form"},c={class:"form-group"},p={class:"form-group"},m={class:"form-group"},f={key:0,class:"success-message"},v={key:1,class:"error-message"};function g(e,t,r,o,a,i){return(0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("form",{onSubmit:t[3]||(t[3]=(0,n.D$)(((...e)=>i.findMostExpensiveFlat&&i.findMostExpensiveFlat(...e)),["prevent"]))},[(0,s.Lk)("div",c,[t[4]||(t[4]=(0,s.Lk)("label",{for:"id1"},"ID 1",-1)),(0,s.bo)((0,s.Lk)("input",{type:"number",id:"id1","onUpdate:modelValue":t[0]||(t[0]=e=>a.apartmentIds.id1=e),required:"",min:"1",class:(0,u.C4)({"is-invalid":!a.apartmentIds.id1}),placeholder:"Введите ID 1"},null,2),[[n.Jo,a.apartmentIds.id1]])]),(0,s.Lk)("div",p,[t[5]||(t[5]=(0,s.Lk)("label",{for:"id2"},"ID 2",-1)),(0,s.bo)((0,s.Lk)("input",{type:"number",id:"id2","onUpdate:modelValue":t[1]||(t[1]=e=>a.apartmentIds.id2=e),required:"",min:"1",class:(0,u.C4)({"is-invalid":!a.apartmentIds.id2}),placeholder:"Введите ID 2"},null,2),[[n.Jo,a.apartmentIds.id2]])]),(0,s.Lk)("div",m,[t[6]||(t[6]=(0,s.Lk)("label",{for:"id3"},"ID 3",-1)),(0,s.bo)((0,s.Lk)("input",{type:"number",id:"id3","onUpdate:modelValue":t[2]||(t[2]=e=>a.apartmentIds.id3=e),required:"",min:"1",class:(0,u.C4)({"is-invalid":!a.apartmentIds.id3}),placeholder:"Введите ID 3"},null,2),[[n.Jo,a.apartmentIds.id3]])]),t[7]||(t[7]=(0,s.Lk)("button",{type:"submit",class:"submit-button"},"Найти самую дорогую квартиру",-1)),a.successMessage?((0,s.uX)(),(0,s.CE)("p",f,"Самая дорогая квартира ID: "+(0,u.v_)(a.successMessage),1)):(0,s.Q3)("",!0),a.errorMessage?((0,s.uX)(),(0,s.CE)("p",v,(0,u.v_)(a.errorMessage),1)):(0,s.Q3)("",!0)],32)])}var y=r(4335);const k=y.A.create({baseURL:"https://localhost:8083/api/v1",headers:{"Content-Type":"application/json"}});var h=k,b={data(){return{apartmentIds:{id1:"",id2:"",id3:""},successMessage:"",errorMessage:""}},methods:{async findMostExpensiveFlat(){this.successMessage="",this.errorMessage="";try{const e=await h.get(`/agency/get-most-expensive/${this.apartmentIds.id1}/${this.apartmentIds.id2}/${this.apartmentIds.id3}`);if(200===e.status){const t=new DOMParser,r=t.parseFromString(e.data,"application/xml"),n=r.querySelector("Long");this.successMessage=parseInt(n.textContent,10)}}catch(e){if(e.response&&e.response.data){const t=new DOMParser,r=t.parseFromString(e.response.data,"application/xml"),n=r.querySelector("message");this.errorMessage=n?n.textContent:"Не поступило ошибки от сервера"}else this.errorMessage="Сервер не работает"}}}},L=r(1241);const M=(0,L.A)(b,[["render",g],["__scopeId","data-v-3807afff"]]);var F=M;const C={class:"metro-time-filter"},T={class:"form-group"},x={class:"form-group"},I={key:0,class:"apartments-list"},E={key:1,class:"error-message"};function O(e,t,r,o,a,i){return(0,s.uX)(),(0,s.CE)("div",C,[(0,s.Lk)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>i.fetchSortedFlats&&i.fetchSortedFlats(...e)),["prevent"]))},[(0,s.Lk)("div",T,[t[4]||(t[4]=(0,s.Lk)("label",{for:"by-transport"},"Выберите тип транспорта:",-1)),(0,s.bo)((0,s.Lk)("select",{id:"by-transport","onUpdate:modelValue":t[0]||(t[0]=e=>a.byTransport=e),required:""},t[3]||(t[3]=[(0,s.Lk)("option",{value:!0},"На транспорте",-1),(0,s.Lk)("option",{value:!1},"Пешком",-1)]),512),[[n.u1,a.byTransport]])]),(0,s.Lk)("div",x,[t[6]||(t[6]=(0,s.Lk)("label",{for:"desc"},"Выберите порядок сортировки:",-1)),(0,s.bo)((0,s.Lk)("select",{id:"desc","onUpdate:modelValue":t[1]||(t[1]=e=>a.desc=e),required:""},t[5]||(t[5]=[(0,s.Lk)("option",{value:!0},"По убыванию",-1),(0,s.Lk)("option",{value:!1},"По возрастанию",-1)]),512),[[n.u1,a.desc]])]),t[7]||(t[7]=(0,s.Lk)("button",{type:"submit",class:"submit-button"},"Получить квартиры",-1))],32),a.apartments&&a.apartments.length?((0,s.uX)(),(0,s.CE)("div",I,[t[11]||(t[11]=(0,s.Lk)("h3",null,"Квартиры, отсортированные по времени до метро:",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.apartments,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id},[(0,s.Lk)("table",null,[(0,s.Lk)("tbody",null,[(0,s.Lk)("tr",null,[t[8]||(t[8]=(0,s.Lk)("td",null,[(0,s.Lk)("strong",null,"ID:")],-1)),(0,s.Lk)("td",null,(0,u.v_)(e.id),1)]),(0,s.Lk)("tr",null,[t[9]||(t[9]=(0,s.Lk)("td",null,[(0,s.Lk)("strong",null,"Название:")],-1)),(0,s.Lk)("td",null,(0,u.v_)(e.name),1)]),(0,s.Lk)("tr",null,[t[10]||(t[10]=(0,s.Lk)("td",null,[(0,s.Lk)("strong",null,"Время до метро:")],-1)),(0,s.Lk)("td",null,(0,u.v_)(a.byTransport?e.timeToMetroByTransport:e.timeToMetroByFoot),1)])])])])))),128))])):(0,s.Q3)("",!0),a.errorMessage?((0,s.uX)(),(0,s.CE)("p",E,(0,u.v_)(a.errorMessage),1)):(0,s.Q3)("",!0)])}var S={data(){return{byTransport:!1,desc:!1,apartments:[],errorMessage:""}},methods:{async fetchSortedFlats(){this.errorMessage="",this.apartments=[];try{const e=await h.get(`/agency/get-ordered-by-time-to-metro/${this.byTransport}/${this.desc}`,{headers:{"Content-Type":"application/xml"}});if(200===e.status){const t=new DOMParser,r=t.parseFromString(e.data,"application/xml"),n=r.getElementsByTagName("item");this.apartments=Array.from(n).map((e=>this.parseApartmentXML(e)))}}catch(e){if(e.response&&e.response.data){const t=new DOMParser,r=t.parseFromString(e.response.data,"application/xml"),n=r.querySelector("message");this.errorMessage=n?n.textContent:"Не поступило ошибки от сервера"}else this.errorMessage="Сервер не работает"}},parseApartmentXML(e){return{id:e.getElementsByTagName("id")[0].textContent,name:e.getElementsByTagName("name")[0].textContent,timeToMetroByFoot:e.getElementsByTagName("timeToMetroByFoot")[0].textContent,timeToMetroByTransport:e.getElementsByTagName("timeToMetroByTransport")[0].textContent}}}};const _=(0,L.A)(S,[["render",O],["__scopeId","data-v-60118a3f"]]);var w=_,D={components:{FindMostExpensiveFlat:F,MetroTimeFilter:w},data(){return{activeForm:null}},methods:{toggleForm(e){this.activeForm=this.activeForm===e?null:e},closeForm(){this.activeForm=null}}};const X=(0,L.A)(D,[["render",l]]);var B=X;(0,n.Ef)(B).mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],o=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,s,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,a=n[0],i=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(l)var d=l(r)}for(t&&t(n);u<a.length;u++)o=a[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self["webpackChunkservice_2"]=self["webpackChunkservice_2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(1584)}));n=r.O(n)})();
//# sourceMappingURL=app.e6561462.js.map