(function(){"use strict";var e={3708:function(e,t,r){var s=r(5130),n=r(6768);const o={id:"app"},a={class:"operation"},i={class:"operation"};function l(e,t,r,s,l,u){const d=(0,n.g2)("FindMostExpensiveFlat"),c=(0,n.g2)("MetroTimeFilter");return(0,n.uX)(),(0,n.CE)("div",o,[t[2]||(t[2]=(0,n.Lk)("h1",null,"Дополнительные операции с Agency",-1)),(0,n.Lk)("div",a,[(0,n.Lk)("h2",{onClick:t[0]||(t[0]=e=>u.toggleForm("FindMostExpensiveApartments")),class:"blue-header"}," Выбрать из трёх квартир с заданными id наиболее дорогую "),"FindMostExpensiveApartments"===l.activeForm?((0,n.uX)(),(0,n.Wv)(d,{key:0,onClose:u.closeForm},null,8,["onClose"])):(0,n.Q3)("",!0)]),(0,n.Lk)("div",i,[(0,n.Lk)("h2",{onClick:t[1]||(t[1]=e=>u.toggleForm("MetroTimeFilter")),class:"blue-header"}," Вернуть список всех квартир, отсортированный по времени до метро "),"MetroTimeFilter"===l.activeForm?((0,n.uX)(),(0,n.Wv)(c,{key:0,onClose:u.closeForm},null,8,["onClose"])):(0,n.Q3)("",!0)])])}var u=r(4232);const d={class:"find-most-expensive-form"},c={class:"form-group"},p={class:"form-group"},m={class:"form-group"},g={key:0,class:"success-message"},v={key:1,class:"error-message"};function f(e,t,r,o,a,i){return(0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("form",{onSubmit:t[3]||(t[3]=(0,s.D$)(((...e)=>i.findMostExpensiveFlat&&i.findMostExpensiveFlat(...e)),["prevent"]))},[(0,n.Lk)("div",c,[t[4]||(t[4]=(0,n.Lk)("label",{for:"id1"},"ID 1",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",id:"id1","onUpdate:modelValue":t[0]||(t[0]=e=>a.apartmentIds.id1=e),required:"",min:"1",class:(0,u.C4)({"is-invalid":!a.apartmentIds.id1}),placeholder:"Введите ID 1"},null,2),[[s.Jo,a.apartmentIds.id1]])]),(0,n.Lk)("div",p,[t[5]||(t[5]=(0,n.Lk)("label",{for:"id2"},"ID 2",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",id:"id2","onUpdate:modelValue":t[1]||(t[1]=e=>a.apartmentIds.id2=e),required:"",min:"1",class:(0,u.C4)({"is-invalid":!a.apartmentIds.id2}),placeholder:"Введите ID 2"},null,2),[[s.Jo,a.apartmentIds.id2]])]),(0,n.Lk)("div",m,[t[6]||(t[6]=(0,n.Lk)("label",{for:"id3"},"ID 3",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",id:"id3","onUpdate:modelValue":t[2]||(t[2]=e=>a.apartmentIds.id3=e),required:"",min:"1",class:(0,u.C4)({"is-invalid":!a.apartmentIds.id3}),placeholder:"Введите ID 3"},null,2),[[s.Jo,a.apartmentIds.id3]])]),t[7]||(t[7]=(0,n.Lk)("button",{type:"submit",class:"submit-button"},"Найти самую дорогую квартиру",-1)),a.successMessage?((0,n.uX)(),(0,n.CE)("p",g,(0,u.v_)(a.successMessage),1)):(0,n.Q3)("",!0),a.errorMessage?((0,n.uX)(),(0,n.CE)("p",v,(0,u.v_)(a.errorMessage),1)):(0,n.Q3)("",!0)],32)])}var k=r(4335);const h=k.A.create({baseURL:"https://localhost:8083/api/v1",headers:{"Content-Type":"application/json"}});var y=h,b={data(){return{apartmentIds:{id1:"",id2:"",id3:""},successMessage:"",errorMessage:""}},methods:{async findMostExpensiveFlat(){this.successMessage="",this.errorMessage="";try{const e=await y.get(`/agency/get-most-expensive/${this.apartmentIds.id1}/${this.apartmentIds.id2}/${this.apartmentIds.id3}`);if(200===e.status){const t=e.data;this.successMessage=`Самая дорогая квартира ID: ${t}`}}catch(e){const t=e.response?e.response.status:null;switch(t){case 400:this.errorMessage="Неверный ввод. Проверьте данные и попробуйте снова.";break;case 404:this.errorMessage="Запрашиваемый ресурс не найден.";break;case 500:this.errorMessage="Ошибка сервера. Попробуйте позже.";break;default:this.errorMessage="Произошла непредвиденная ошибка."}}}}},L=r(1241);const M=(0,L.A)(b,[["render",f],["__scopeId","data-v-24c6bcb8"]]);var F=M;const T={class:"metro-time-filter"},C={class:"form-group"},E={class:"form-group"},x={key:0,class:"apartments-list"},I={key:1,class:"no-results"},_={key:2,class:"error-message"};function B(e,t,r,o,a,i){return(0,n.uX)(),(0,n.CE)("div",T,[(0,n.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>i.fetchSortedFlats&&i.fetchSortedFlats(...e)),["prevent"]))},[(0,n.Lk)("div",C,[t[4]||(t[4]=(0,n.Lk)("label",{for:"by-transport"},"Выберите тип транспорта:",-1)),(0,n.bo)((0,n.Lk)("select",{id:"by-transport","onUpdate:modelValue":t[0]||(t[0]=e=>a.byTransport=e),required:""},t[3]||(t[3]=[(0,n.Lk)("option",{value:!0},"На транспорте",-1),(0,n.Lk)("option",{value:!1},"Пешком",-1)]),512),[[s.u1,a.byTransport]])]),(0,n.Lk)("div",E,[t[6]||(t[6]=(0,n.Lk)("label",{for:"desc"},"Выберите порядок сортировки:",-1)),(0,n.bo)((0,n.Lk)("select",{id:"desc","onUpdate:modelValue":t[1]||(t[1]=e=>a.desc=e),required:""},t[5]||(t[5]=[(0,n.Lk)("option",{value:!0},"По убыванию",-1),(0,n.Lk)("option",{value:!1},"По возрастанию",-1)]),512),[[s.u1,a.desc]])]),t[7]||(t[7]=(0,n.Lk)("button",{type:"submit",class:"submit-button"},"Получить квартиры",-1))],32),a.apartments&&a.apartments.length?((0,n.uX)(),(0,n.CE)("div",x,[t[14]||(t[14]=(0,n.Lk)("h3",null,"Квартиры, отсортированные по времени до метро:",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.apartments,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id},[(0,n.Lk)("table",null,[(0,n.Lk)("tbody",null,[(0,n.Lk)("tr",null,[t[8]||(t[8]=(0,n.Lk)("td",null,[(0,n.Lk)("strong",null,"ID:")],-1)),(0,n.Lk)("td",null,(0,u.v_)(e.id),1)]),(0,n.Lk)("tr",null,[t[9]||(t[9]=(0,n.Lk)("td",null,[(0,n.Lk)("strong",null,"Название:")],-1)),(0,n.Lk)("td",null,(0,u.v_)(e.name),1)]),(0,n.Lk)("tr",null,[t[10]||(t[10]=(0,n.Lk)("td",null,[(0,n.Lk)("strong",null,"Координаты:")],-1)),(0,n.Lk)("td",null,"X: "+(0,u.v_)(e.coordinates.x)+", Y: "+(0,u.v_)(e.coordinates.y),1)]),(0,n.Lk)("tr",null,[t[11]||(t[11]=(0,n.Lk)("td",null,[(0,n.Lk)("strong",null,"Площадь:")],-1)),(0,n.Lk)("td",null,(0,u.v_)(e.area)+" м²",1)]),(0,n.Lk)("tr",null,[t[12]||(t[12]=(0,n.Lk)("td",null,[(0,n.Lk)("strong",null,"Цена:")],-1)),(0,n.Lk)("td",null,(0,u.v_)(e.price)+" ₽",1)]),(0,n.Lk)("tr",null,[t[13]||(t[13]=(0,n.Lk)("td",null,[(0,n.Lk)("strong",null,"Время до метро:")],-1)),(0,n.Lk)("td",null,(0,u.v_)(a.byTransport?e.timeToMetroByTransport:e.timeToMetroByFoot),1)])])])])))),128))])):0===a.apartments.length?((0,n.uX)(),(0,n.CE)("p",I," Квартиры с выбранными параметрами не найдены. ")):(0,n.Q3)("",!0),a.errorMessage?((0,n.uX)(),(0,n.CE)("p",_,(0,u.v_)(a.errorMessage),1)):(0,n.Q3)("",!0)])}var X={data(){return{byTransport:!1,desc:!1,apartments:[],errorMessage:""}},methods:{async fetchSortedFlats(){this.errorMessage="",this.apartments=[];try{const e=await y.get(`/agency/get-ordered-by-time-to-metro/${this.byTransport}/${this.desc}`,{headers:{"Content-Type":"application/xml"}});if(200===e.status){const t=new DOMParser,r=t.parseFromString(e.data,"application/xml"),s=r.getElementsByTagName("item");this.apartments=Array.from(s).map((e=>this.parseApartmentXML(e)))}}catch(e){const t=e.response?e.response.status:null;switch(t){case 400:this.errorMessage="Неверный параметр запроса. Проверьте выбранные значения.";break;case 404:this.errorMessage="Запрашиваемый ресурс не найден.";break;case 500:this.errorMessage="Ошибка сервера. Попробуйте позже.";break;default:this.errorMessage="Произошла непредвиденная ошибка."}console.error("Error fetching sorted flats:",this.errorMessage)}},parseApartmentXML(e){return{id:e.getElementsByTagName("id")[0].textContent,name:e.getElementsByTagName("name")[0].textContent,coordinates:{x:e.getElementsByTagName("x")[0].textContent,y:e.getElementsByTagName("y")[0].textContent},area:e.getElementsByTagName("area")[0].textContent,price:e.getElementsByTagName("price")[0].textContent,timeToMetroByFoot:e.getElementsByTagName("timeToMetroByFoot")[0].textContent,timeToMetroByTransport:e.getElementsByTagName("timeToMetroByTransport")[0].textContent}}}};const O=(0,L.A)(X,[["render",B],["__scopeId","data-v-6109be76"]]);var w=O,D={components:{FindMostExpensiveFlat:F,MetroTimeFilter:w},data(){return{activeForm:null}},methods:{toggleForm(e){this.activeForm=this.activeForm===e?null:e},closeForm(){this.activeForm=null}}};const S=(0,L.A)(D,[["render",l]]);var A=S;(0,s.Ef)(A).mount("#app")}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,o){if(!s){var a=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,a=s[0],i=s[1],l=s[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var d=l(r)}for(t&&t(s);u<a.length;u++)o=a[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},s=self["webpackChunkservice_2"]=self["webpackChunkservice_2"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[504],(function(){return r(3708)}));s=r.O(s)})();
//# sourceMappingURL=app.af649d8f.js.map