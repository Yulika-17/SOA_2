(function(){"use strict";var e={8583:function(e,t,a){var r=a(5130),o=a(6768);const s={id:"app"},n={class:"operation"},l={class:"operation"},u={class:"operation"},i={class:"operation"},d={class:"operation"},c={class:"operation"},m={class:"operation"},p={class:"operation"};function f(e,t,a,r,f,v){const k=(0,o.g2)("FilterSortApartmentForm"),h=(0,o.g2)("AddApartmentForm"),L=(0,o.g2)("GetApartmentByIdForm"),b=(0,o.g2)("UpdateApartmentForm"),g=(0,o.g2)("DeleteApartmentForm"),y=(0,o.g2)("AverageNumberOfRooms"),F=(0,o.g2)("TransportCount"),C=(0,o.g2)("FurnishFilter");return(0,o.uX)(),(0,o.CE)("div",s,[t[8]||(t[8]=(0,o.Lk)("h1",null,"Базовые операции",-1)),(0,o.Lk)("div",n,[(0,o.Lk)("h2",{onClick:t[0]||(t[0]=e=>v.toggleForm("filterSortApartments")),class:"blue-header"}," Получить список квартир с фильтрацией, сортировкой и постраничным выводом "),"filterSortApartments"===f.activeForm?((0,o.uX)(),(0,o.Wv)(k,{key:0,onClose:v.closeForm},null,8,["onClose"])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",l,[(0,o.Lk)("h2",{onClick:t[1]||(t[1]=e=>v.toggleForm("addApartment")),class:"green-header"}," Добавить новую квартиру "),"addApartment"===f.activeForm?((0,o.uX)(),(0,o.Wv)(h,{key:0,onClose:v.closeForm},null,8,["onClose"])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",u,[(0,o.Lk)("h2",{onClick:t[2]||(t[2]=e=>v.toggleForm("getApartment")),class:"blue-header"}," Получить квартиру по ID "),"getApartment"===f.activeForm?((0,o.uX)(),(0,o.Wv)(L,{key:0,onClose:v.closeForm},null,8,["onClose"])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",i,[(0,o.Lk)("h2",{onClick:t[3]||(t[3]=e=>v.toggleForm("updateApartment")),class:"yellow-header"}," Обновить квартиру по ID "),"updateApartment"===f.activeForm?((0,o.uX)(),(0,o.Wv)(b,{key:0,onClose:v.closeForm},null,8,["onClose"])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",d,[(0,o.Lk)("h2",{onClick:t[4]||(t[4]=e=>v.toggleForm("deleteApartment")),class:"red-header"}," Удалить квартиру по ID "),"deleteApartment"===f.activeForm?((0,o.uX)(),(0,o.Wv)(g,{key:0,onClose:v.closeForm},null,8,["onClose"])):(0,o.Q3)("",!0)]),t[9]||(t[9]=(0,o.Lk)("h1",null,"Дополнительные операции",-1)),(0,o.Lk)("div",c,[(0,o.Lk)("h2",{onClick:t[5]||(t[5]=e=>v.toggleForm("numberOfRoomsApartment")),class:"blue-header"}," Рассчитать среднее значение поля numberOfRooms для всех квартир "),"numberOfRoomsApartment"===f.activeForm?((0,o.uX)(),(0,o.Wv)(y,{key:0,onClose:v.closeForm},null,8,["onClose"])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",m,[(0,o.Lk)("h2",{onClick:t[6]||(t[6]=e=>v.toggleForm("TransportCountApartment")),class:"blue-header"}," Вернуть количество квартир с transport больше заданного значения "),"TransportCountApartment"===f.activeForm?((0,o.uX)(),(0,o.Wv)(F,{key:0,onClose:v.closeForm},null,8,["onClose"])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",p,[(0,o.Lk)("h2",{onClick:t[7]||(t[7]=e=>v.toggleForm("FurnishFilterApartment")),class:"blue-header"}," Вернуть массив квартир с furnish больше заданного значения "),"FurnishFilterApartment"===f.activeForm?((0,o.uX)(),(0,o.Wv)(C,{key:0,onClose:v.closeForm},null,8,["onClose"])):(0,o.Q3)("",!0)])])}var v=a(4232);const k={class:"add-apartment-form"},h={class:"form-group"},L={class:"form-group"},b={class:"form-group"},g={class:"form-group"},y={class:"form-group"},F={class:"form-group"},C={class:"form-group"},O={class:"form-group"},M={class:"form-group"},_={key:0,class:"error-message"},E={key:1,class:"success-message"};function x(e,t,a,s,n,l){return(0,o.uX)(),(0,o.CE)("div",k,[(0,o.Lk)("form",{onSubmit:t[13]||(t[13]=(0,r.D$)(((...e)=>l.submitApartment&&l.submitApartment(...e)),["prevent"]))},[(0,o.Lk)("div",h,[t[14]||(t[14]=(0,o.Lk)("label",{for:"name"},"Название",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.flat.name=e),required:"",class:(0,v.C4)({"is-invalid":!n.flat.name}),placeholder:"Введите название"},null,2),[[r.Jo,n.flat.name]])]),(0,o.Lk)("div",L,[t[15]||(t[15]=(0,o.Lk)("label",{for:"coordinates"},"Координаты",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>n.flat.coordinates.x=e),required:"",class:(0,v.C4)({"is-invalid":null===n.flat.coordinates.x}),placeholder:"X"},null,2),[[r.Jo,n.flat.coordinates.x]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>n.flat.coordinates.y=e),required:"",class:(0,v.C4)({"is-invalid":null===n.flat.coordinates.y}),placeholder:"Y"},null,2),[[r.Jo,n.flat.coordinates.y]])]),(0,o.Lk)("div",b,[t[16]||(t[16]=(0,o.Lk)("label",{for:"area"},"Площадь (м²)",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"area","onUpdate:modelValue":t[3]||(t[3]=e=>n.flat.area=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.area<=0}),placeholder:"Больше 0"},null,2),[[r.Jo,n.flat.area]])]),(0,o.Lk)("div",g,[t[17]||(t[17]=(0,o.Lk)("label",{for:"numberOfRooms"},"Количество комнат",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"numberOfRooms","onUpdate:modelValue":t[4]||(t[4]=e=>n.flat.numberOfRooms=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.numberOfRooms<=0}),placeholder:"Больше 0"},null,2),[[r.Jo,n.flat.numberOfRooms]])]),(0,o.Lk)("div",y,[t[19]||(t[19]=(0,o.Lk)("label",{for:"furnish"},"Мебель",-1)),(0,o.bo)((0,o.Lk)("select",{id:"furnish","onUpdate:modelValue":t[5]||(t[5]=e=>n.flat.furnish=e)},t[18]||(t[18]=[(0,o.Fv)('<option disabled value="" data-v-2b616007>Выберите</option><option value="DESIGNER" data-v-2b616007>Дизайнерская</option><option value="FINE" data-v-2b616007>Хорошая</option><option value="BAD" data-v-2b616007>Плохая</option><option value="LITTLE" data-v-2b616007>Небольшая</option>',5)]),512),[[r.u1,n.flat.furnish]])]),(0,o.Lk)("div",F,[t[21]||(t[21]=(0,o.Lk)("label",{for:"view"},"Вид",-1)),(0,o.bo)((0,o.Lk)("select",{id:"view","onUpdate:modelValue":t[6]||(t[6]=e=>n.flat.view=e),required:""},t[20]||(t[20]=[(0,o.Lk)("option",{disabled:"",value:""},"Выберите",-1),(0,o.Lk)("option",{value:"STREET"},"Улица",-1),(0,o.Lk)("option",{value:"YARD"},"Двор",-1),(0,o.Lk)("option",{value:"GOOD"},"Хороший",-1)]),512),[[r.u1,n.flat.view]])]),(0,o.Lk)("div",C,[t[23]||(t[23]=(0,o.Lk)("label",{for:"transport"},"Транспорт",-1)),(0,o.bo)((0,o.Lk)("select",{id:"transport","onUpdate:modelValue":t[7]||(t[7]=e=>n.flat.transport=e),required:""},t[22]||(t[22]=[(0,o.Fv)('<option disabled value="" data-v-2b616007>Выберите</option><option value="FEW" data-v-2b616007>Мало</option><option value="NONE" data-v-2b616007>Нет</option><option value="NORMAL" data-v-2b616007>Обычный</option><option value="ENOUGH" data-v-2b616007>Достаточно</option>',5)]),512),[[r.u1,n.flat.transport]])]),(0,o.Lk)("div",O,[t[24]||(t[24]=(0,o.Lk)("label",{for:"house"},"Дом",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>n.flat.house.name=e),required:"",class:(0,v.C4)({"is-invalid":!n.flat.house.name}),placeholder:"Имя дома"},null,2),[[r.Jo,n.flat.house.name]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[9]||(t[9]=e=>n.flat.house.numberOfFlatsOnFloor=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.house.numberOfFlatsOnFloor<=0}),placeholder:"Квартир на этаже (больше 0)"},null,2),[[r.Jo,n.flat.house.numberOfFlatsOnFloor]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[10]||(t[10]=e=>n.flat.house.numberOfLifts=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.house.numberOfLifts<=0}),placeholder:"Лифтов (больше 0)"},null,2),[[r.Jo,n.flat.house.numberOfLifts]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[11]||(t[11]=e=>n.flat.house.year=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.house.year>210||n.flat.house.year<=0}),placeholder:"Год постройки (1-210)"},null,2),[[r.Jo,n.flat.house.year]])]),(0,o.Lk)("div",M,[t[25]||(t[25]=(0,o.Lk)("label",{for:"price"},"Цена",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"price","onUpdate:modelValue":t[12]||(t[12]=e=>n.flat.price=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.price<=0}),min:"0",placeholder:"Введите цену"},null,2),[[r.Jo,n.flat.price]])]),t[26]||(t[26]=(0,o.Lk)("button",{type:"submit",class:"submit-button"},"Добавить квартиру",-1)),n.errorMessage?((0,o.uX)(),(0,o.CE)("p",_,(0,v.v_)(n.errorMessage),1)):(0,o.Q3)("",!0),n.successMessage?((0,o.uX)(),(0,o.CE)("p",E,(0,v.v_)(n.successMessage),1)):(0,o.Q3)("",!0)],32)])}var A=a(9607);const q=A.A.create({baseURL:"https://localhost:8443/api/v1",headers:{"Content-Type":"application/xml"}});var I=q,S=a(1699),w={data(){return{flat:{creationDate:"",name:"",coordinates:{x:"",y:""},area:"",numberOfRooms:"",furnish:"",view:"",transport:"",house:{name:"",numberOfFlatsOnFloor:"",numberOfLifts:"",year:""},price:""},errorMessage:"",successMessage:""}},methods:{async submitApartment(){this.errorMessage="",this.successMessage="";try{const e=(0,S.js2xml)({flat:{creationDate:this.flat.creationDate,name:this.flat.name,coordinates:{x:this.flat.coordinates.x,y:this.flat.coordinates.y},area:this.flat.area,numberOfRooms:this.flat.numberOfRooms,furnish:this.flat.furnish,view:this.flat.view,transport:this.flat.transport,house:{name:this.flat.house.name,numberOfFlatsOnFloor:this.flat.house.numberOfFlatsOnFloor,numberOfLifts:this.flat.house.numberOfLifts,year:this.flat.house.year},price:this.flat.price}},{compact:!0,ignoreComment:!0,spaces:4}),t=await I.post("/flats",e,{headers:{"Content-Type":"application/xml"}});200===t.status&&(this.successMessage="Квартира успешно добавлена!")}catch(e){const t=e.response?e.response.status:null;switch(t){case 400:this.errorMessage="Неверный ввод. Проверьте данные и попробуйте снова.";break;case 404:this.errorMessage="Запрашиваемый ресурс не найден.";break;case 500:this.errorMessage="Ошибка сервера. Попробуйте позже.";break;default:this.errorMessage="Произошла непредвиденная ошибка."}}}}},D=a(1241);const X=(0,D.A)(w,[["render",x],["__scopeId","data-v-2b616007"]]);var R=X;const T={class:"delete-apartment-form"},N={class:"form-group"},U={key:0,class:"error-message"},V={key:1,class:"success-message"};function J(e,t,a,s,n,l){return(0,o.uX)(),(0,o.CE)("div",T,[(0,o.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>l.submitDelete&&l.submitDelete(...e)),["prevent"]))},[(0,o.Lk)("div",N,[t[2]||(t[2]=(0,o.Lk)("label",{for:"id"},"ID квартиры для удаления",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"id","onUpdate:modelValue":t[0]||(t[0]=e=>n.apartmentId=e),required:"",class:(0,v.C4)({"is-invalid":n.apartmentId<=0}),placeholder:"Введите ID квартиры"},null,2),[[r.Jo,n.apartmentId]])]),t[3]||(t[3]=(0,o.Lk)("button",{type:"submit",class:"submit-button"},"Удалить квартиру",-1)),n.errorMessage?((0,o.uX)(),(0,o.CE)("p",U,(0,v.v_)(n.errorMessage),1)):(0,o.Q3)("",!0),n.successMessage?((0,o.uX)(),(0,o.CE)("p",V,(0,v.v_)(n.successMessage),1)):(0,o.Q3)("",!0)],32)])}var B={data(){return{apartmentId:null,errorMessage:"",successMessage:""}},methods:{async submitDelete(){this.errorMessage="",this.successMessage="";try{const e=await I.delete(`/flats/${this.apartmentId}`,{headers:{"Content-Type":"application/xml"}});204===e.status&&(this.successMessage="Квартира успешно удалена!")}catch(e){const t=e.response?e.response.status:null;switch(t){case 400:this.errorMessage="Неверный параметр запроса. Проверьте ID и попробуйте снова.";break;case 404:this.errorMessage="Квартира с таким ID не найдена.";break;case 500:this.errorMessage="Ошибка сервера. Попробуйте позже.";break;default:this.errorMessage="Произошла непредвиденная ошибка."}}}}};const Q=(0,D.A)(B,[["render",J],["__scopeId","data-v-640baca0"]]);var P=Q;const G={class:"get-apartment-form"},W={class:"form-group"},j={key:0,class:"error-message"},$={key:0,class:"apartment-info"};function Y(e,t,a,s,n,l){return(0,o.uX)(),(0,o.CE)("div",G,[(0,o.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>l.fetchApartment&&l.fetchApartment(...e)),["prevent"]))},[(0,o.Lk)("div",W,[t[2]||(t[2]=(0,o.Lk)("label",{for:"apartmentId"},"ID Квартиры",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"apartmentId","onUpdate:modelValue":t[0]||(t[0]=e=>n.apartmentId=e),required:"",min:"1",placeholder:"Введите ID"},null,512),[[r.Jo,n.apartmentId]])]),t[3]||(t[3]=(0,o.Lk)("button",{type:"submit",class:"submit-button"},"Вывести информацию о квартире",-1)),n.errorMessage?((0,o.uX)(),(0,o.CE)("p",j,(0,v.v_)(n.errorMessage),1)):(0,o.Q3)("",!0)],32),n.apartment?((0,o.uX)(),(0,o.CE)("div",$,[t[15]||(t[15]=(0,o.Lk)("h3",null,"Информация о квартире",-1)),(0,o.Lk)("table",null,[(0,o.Lk)("tbody",null,[(0,o.Lk)("tr",null,[t[4]||(t[4]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"ID:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.id),1)]),(0,o.Lk)("tr",null,[t[5]||(t[5]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Название:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.name),1)]),(0,o.Lk)("tr",null,[t[6]||(t[6]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Координаты:")],-1)),(0,o.Lk)("td",null,"X: "+(0,v.v_)(n.apartment.coordinates.x)+", Y: "+(0,v.v_)(n.apartment.coordinates.y),1)]),(0,o.Lk)("tr",null,[t[7]||(t[7]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Дата создания:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.creationDate),1)]),(0,o.Lk)("tr",null,[t[8]||(t[8]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Площадь:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.area)+" м²",1)]),(0,o.Lk)("tr",null,[t[9]||(t[9]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Кол-во комнат:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.numberOfRooms),1)]),(0,o.Lk)("tr",null,[t[10]||(t[10]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Отделка:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.furnish),1)]),(0,o.Lk)("tr",null,[t[11]||(t[11]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Вид:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.view),1)]),(0,o.Lk)("tr",null,[t[12]||(t[12]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Транспорт:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.transport),1)]),(0,o.Lk)("tr",null,[t[13]||(t[13]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Дом:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.house.name)+", Год: "+(0,v.v_)(n.apartment.house.year)+", Этажи: "+(0,v.v_)(n.apartment.house.numberOfFlatsOnFloor)+", Лифты: "+(0,v.v_)(n.apartment.house.numberOfLifts),1)]),(0,o.Lk)("tr",null,[t[14]||(t[14]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Цена:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(n.apartment.price)+" ₽",1)])])])])):(0,o.Q3)("",!0)])}var H={data(){return{apartmentId:"",apartment:null,errorMessage:""}},methods:{async fetchApartment(){this.errorMessage="",this.apartment=null;try{const e=await I.get(`/flats/${this.apartmentId}`,{headers:{Accept:"application/xml"}});if(200===e.status){const t=new DOMParser,a=t.parseFromString(e.data,"application/xml");this.apartment=this.parseApartmentXML(a)}}catch(e){const t=e.response?e.response.status:null;switch(t){case 404:this.errorMessage="Квартира с таким ID не существует.";break;case 400:this.errorMessage="Неверный ввод. Проверьте ID и попробуйте снова.";break;case 500:this.errorMessage="Ошибка сервера. Попробуйте позже.";break;default:this.errorMessage="Произошла непредвиденная ошибка."}}},parseApartmentXML(e){const t=e=>e?e.textContent:"";return{id:t(e.querySelector("id")),name:t(e.querySelector("name")),coordinates:{x:t(e.querySelector("coordinates > x")),y:t(e.querySelector("coordinates > y"))},creationDate:t(e.querySelector("creationDate")),area:t(e.querySelector("area")),numberOfRooms:t(e.querySelector("numberOfRooms")),furnish:t(e.querySelector("furnish")),view:t(e.querySelector("view")),transport:t(e.querySelector("transport")),house:{id:t(e.querySelector("house > id")),name:t(e.querySelector("house > name")),year:t(e.querySelector("house > year")),numberOfFlatsOnFloor:t(e.querySelector("house > numberOfFlatsOnFloor")),numberOfLifts:t(e.querySelector("house > numberOfLifts"))},price:t(e.querySelector("price"))}}}};const K=(0,D.A)(H,[["render",Y],["__scopeId","data-v-3875d3aa"]]);var z=K;const Z={class:"operation_sort"},ee=["onUpdate:modelValue"],te=["onUpdate:modelValue"],ae=["onClick"],re={key:0,class:"apartments-list"},oe={key:1,class:"no-results"},se={key:2,class:"error-message"};function ne(e,t,a,s,n,l){return(0,o.uX)(),(0,o.CE)("div",Z,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.queryParams,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{key:a,class:"param-row"},[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t=>e.key=t,class:"param-key"},t[2]||(t[2]=[(0,o.Fv)('<option disabled value="" data-v-497d823c>Выберите параметр</option><option value="sort" data-v-497d823c>Сортировка (sort)</option><option value="filter" data-v-497d823c>Фильтрация (filter)</option><option value="page" data-v-497d823c>Номер страницы (page)</option><option value="size" data-v-497d823c>Размер страницы (size)</option>',5)]),8,ee),[[r.u1,e.key]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t=>e.value=t,placeholder:"Введите значение",class:"param-value"},null,8,te),[[r.Jo,e.value]]),(0,o.Lk)("button",{onClick:e=>l.removeParam(a),class:"remove-button"},"-",8,ae)])))),128)),(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.addParam&&l.addParam(...e)),class:"add-button"},"+"),(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.fetchFlats&&l.fetchFlats(...e)),class:"fetch-button"}," Получить список квартир "),n.flats&&n.flats.length?((0,o.uX)(),(0,o.CE)("div",re,[t[13]||(t[13]=(0,o.Lk)("h3",null,"Список квартир:",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.flats,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id},[(0,o.Lk)("table",null,[(0,o.Lk)("tbody",null,[(0,o.Lk)("tr",null,[t[3]||(t[3]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"ID:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.id),1)]),(0,o.Lk)("tr",null,[t[4]||(t[4]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Название:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.name),1)]),(0,o.Lk)("tr",null,[t[5]||(t[5]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Координаты:")],-1)),(0,o.Lk)("td",null,"X: "+(0,v.v_)(e.coordinates.x)+", Y: "+(0,v.v_)(e.coordinates.y),1)]),(0,o.Lk)("tr",null,[t[6]||(t[6]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Площадь:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.area)+" м²",1)]),(0,o.Lk)("tr",null,[t[7]||(t[7]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Кол-во комнат:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.numberOfRooms),1)]),(0,o.Lk)("tr",null,[t[8]||(t[8]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Отделка:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.furnish),1)]),(0,o.Lk)("tr",null,[t[9]||(t[9]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Вид:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.view),1)]),(0,o.Lk)("tr",null,[t[10]||(t[10]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Транспорт:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.transport),1)]),(0,o.Lk)("tr",null,[t[11]||(t[11]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Дом:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.house.name)+", Год: "+(0,v.v_)(e.house.year)+", Этажи: "+(0,v.v_)(e.house.numberOfFlatsOnFloor)+", Лифты: "+(0,v.v_)(e.house.numberOfLifts),1)]),(0,o.Lk)("tr",null,[t[12]||(t[12]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Цена:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.price)+" ₽",1)])])])])))),128))])):n.flats&&0===n.flats.length?((0,o.uX)(),(0,o.CE)("p",oe," Квартиры не найдены. ")):(0,o.Q3)("",!0),n.errorMessage?((0,o.uX)(),(0,o.CE)("p",se,(0,v.v_)(n.errorMessage),1)):(0,o.Q3)("",!0)])}a(4114),a(4603),a(7566),a(8721);var le={data(){return{flats:[],queryParams:[{key:"",value:""}],errorMessage:""}},methods:{addParam(){this.queryParams.push({key:"",value:""})},removeParam(e){this.queryParams.splice(e,1)},async fetchFlats(){this.errorMessage="",this.flats=[];const e=new URL("https://localhost:8443/api/v1/flats");this.queryParams.forEach((t=>{t.key&&t.value&&e.searchParams.append(t.key,t.value)}));try{const t=await fetch(e.toString(),{method:"GET",headers:{Accept:"application/xml"}});if(t.ok){const e=await t.text(),a=new DOMParser,r=a.parseFromString(e,"application/xml");this.flats=this.parseFlatsFromXML(r)}else this.errorMessage="Ошибка при получении списка квартир: "+t.statusText}catch(t){this.errorMessage="Ошибка запроса: "+t.message}},parseFlatsFromXML(e){const t=e.getElementsByTagName("content");return Array.from(t).map((e=>({id:e.querySelector("id")?.textContent,name:e.querySelector("name")?.textContent,coordinates:{x:e.querySelector("coordinates > x")?.textContent,y:e.querySelector("coordinates > y")?.textContent},area:e.querySelector("area")?.textContent,numberOfRooms:e.querySelector("numberOfRooms")?.textContent,furnish:e.querySelector("furnish")?.textContent,view:e.querySelector("view")?.textContent,transport:e.querySelector("transport")?.textContent,house:{name:e.querySelector("house > name")?.textContent,year:e.querySelector("house > year")?.textContent,numberOfFlatsOnFloor:e.querySelector("house > numberOfFlatsOnFloor")?.textContent,numberOfLifts:e.querySelector("house > numberOfLifts")?.textContent},price:e.querySelector("price")?.textContent})))}}};const ue=(0,D.A)(le,[["render",ne],["__scopeId","data-v-497d823c"]]);var ie=ue;const de={class:"update-apartment-form"},ce={class:"form-group"},me={class:"form-group"},pe={class:"form-group"},fe={class:"form-group"},ve={class:"form-group"},ke={class:"form-group"},he={class:"form-group"},Le={class:"form-group"},be={class:"form-group"},ge={class:"form-group"},ye={key:0,class:"error-message"},Fe={key:1,class:"success-message"};function Ce(e,t,a,s,n,l){return(0,o.uX)(),(0,o.CE)("div",de,[(0,o.Lk)("form",{onSubmit:t[14]||(t[14]=(0,r.D$)(((...e)=>l.submitApartment&&l.submitApartment(...e)),["prevent"]))},[(0,o.Lk)("div",ce,[t[15]||(t[15]=(0,o.Lk)("label",{for:"apartmentId"},"ID Квартиры",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"apartmentId","onUpdate:modelValue":t[0]||(t[0]=e=>n.apartmentId=e),required:"",class:(0,v.C4)({"is-invalid":!n.apartmentId}),placeholder:"Введите ID"},null,2),[[r.Jo,n.apartmentId]])]),(0,o.Lk)("div",me,[t[16]||(t[16]=(0,o.Lk)("label",{for:"name"},"Название",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>n.flat.name=e),required:"",class:(0,v.C4)({"is-invalid":!n.flat.name}),placeholder:"Введите название"},null,2),[[r.Jo,n.flat.name]])]),(0,o.Lk)("div",pe,[t[17]||(t[17]=(0,o.Lk)("label",{for:"coordinates"},"Координаты",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>n.flat.coordinates.x=e),required:"",class:(0,v.C4)({"is-invalid":null===n.flat.coordinates.x}),placeholder:"X"},null,2),[[r.Jo,n.flat.coordinates.x]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=e=>n.flat.coordinates.y=e),required:"",class:(0,v.C4)({"is-invalid":null===n.flat.coordinates.y}),placeholder:"Y"},null,2),[[r.Jo,n.flat.coordinates.y]])]),(0,o.Lk)("div",fe,[t[18]||(t[18]=(0,o.Lk)("label",{for:"area"},"Площадь (м²)",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"area","onUpdate:modelValue":t[4]||(t[4]=e=>n.flat.area=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.area<=0}),placeholder:"Больше 0"},null,2),[[r.Jo,n.flat.area]])]),(0,o.Lk)("div",ve,[t[19]||(t[19]=(0,o.Lk)("label",{for:"numberOfRooms"},"Количество комнат",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"numberOfRooms","onUpdate:modelValue":t[5]||(t[5]=e=>n.flat.numberOfRooms=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.numberOfRooms<=0}),placeholder:"Больше 0"},null,2),[[r.Jo,n.flat.numberOfRooms]])]),(0,o.Lk)("div",ke,[t[21]||(t[21]=(0,o.Lk)("label",{for:"furnish"},"Мебель",-1)),(0,o.bo)((0,o.Lk)("select",{id:"furnish","onUpdate:modelValue":t[6]||(t[6]=e=>n.flat.furnish=e)},t[20]||(t[20]=[(0,o.Fv)('<option disabled value="" data-v-8cad9ca2>Выберите</option><option value="DESIGNER" data-v-8cad9ca2>Дизайнерская</option><option value="FINE" data-v-8cad9ca2>Хорошая</option><option value="BAD" data-v-8cad9ca2>Плохая</option><option value="LITTLE" data-v-8cad9ca2>Небольшая</option>',5)]),512),[[r.u1,n.flat.furnish]])]),(0,o.Lk)("div",he,[t[23]||(t[23]=(0,o.Lk)("label",{for:"view"},"Вид",-1)),(0,o.bo)((0,o.Lk)("select",{id:"view","onUpdate:modelValue":t[7]||(t[7]=e=>n.flat.view=e),required:""},t[22]||(t[22]=[(0,o.Lk)("option",{disabled:"",value:""},"Выберите",-1),(0,o.Lk)("option",{value:"STREET"},"Улица",-1),(0,o.Lk)("option",{value:"YARD"},"Двор",-1),(0,o.Lk)("option",{value:"GOOD"},"Хороший",-1)]),512),[[r.u1,n.flat.view]])]),(0,o.Lk)("div",Le,[t[25]||(t[25]=(0,o.Lk)("label",{for:"transport"},"Транспорт",-1)),(0,o.bo)((0,o.Lk)("select",{id:"transport","onUpdate:modelValue":t[8]||(t[8]=e=>n.flat.transport=e),required:""},t[24]||(t[24]=[(0,o.Fv)('<option disabled value="" data-v-8cad9ca2>Выберите</option><option value="FEW" data-v-8cad9ca2>Мало</option><option value="NONE" data-v-8cad9ca2>Нет</option><option value="NORMAL" data-v-8cad9ca2>Обычный</option><option value="ENOUGH" data-v-8cad9ca2>Достаточно</option>',5)]),512),[[r.u1,n.flat.transport]])]),(0,o.Lk)("div",be,[t[26]||(t[26]=(0,o.Lk)("label",{for:"house"},"Дом",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>n.flat.house.name=e),required:"",class:(0,v.C4)({"is-invalid":!n.flat.house.name}),placeholder:"Имя дома"},null,2),[[r.Jo,n.flat.house.name]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[10]||(t[10]=e=>n.flat.house.numberOfFlatsOnFloor=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.house.numberOfFlatsOnFloor<=0}),placeholder:"Квартир на этаже (больше 0)"},null,2),[[r.Jo,n.flat.house.numberOfFlatsOnFloor]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[11]||(t[11]=e=>n.flat.house.numberOfLifts=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.house.numberOfLifts<=0}),placeholder:"Лифтов (больше 0)"},null,2),[[r.Jo,n.flat.house.numberOfLifts]]),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":t[12]||(t[12]=e=>n.flat.house.year=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.house.year>210||n.flat.house.year<=0}),placeholder:"Год постройки (1-210)"},null,2),[[r.Jo,n.flat.house.year]])]),(0,o.Lk)("div",ge,[t[27]||(t[27]=(0,o.Lk)("label",{for:"price"},"Цена",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"price","onUpdate:modelValue":t[13]||(t[13]=e=>n.flat.price=e),required:"",class:(0,v.C4)({"is-invalid":n.flat.price<=0}),min:"0",placeholder:"Введите цену"},null,2),[[r.Jo,n.flat.price]])]),t[28]||(t[28]=(0,o.Lk)("button",{type:"submit",class:"submit-button"},"Добавить квартиру",-1)),n.errorMessage?((0,o.uX)(),(0,o.CE)("p",ye,(0,v.v_)(n.errorMessage),1)):(0,o.Q3)("",!0),n.successMessage?((0,o.uX)(),(0,o.CE)("p",Fe,(0,v.v_)(n.successMessage),1)):(0,o.Q3)("",!0)],32)])}var Oe={data(){return{apartmentId:"",flat:{name:"",coordinates:{x:null,y:null},area:0,numberOfRooms:0,furnish:"",view:"",transport:"",house:{name:"",numberOfFlatsOnFloor:0,numberOfLifts:0,year:0},price:0},errorMessage:"",successMessage:""}},methods:{async submitApartment(){if(this.errorMessage="",this.successMessage="",this.apartmentId)try{const e=(0,S.js2xml)({flat:{name:this.flat.name,coordinates:{x:this.flat.coordinates.x,y:this.flat.coordinates.y},area:this.flat.area,numberOfRooms:this.flat.numberOfRooms,furnish:this.flat.furnish,view:this.flat.view,transport:this.flat.transport,house:{name:this.flat.house.name,numberOfFlatsOnFloor:this.flat.house.numberOfFlatsOnFloor,numberOfLifts:this.flat.house.numberOfLifts,year:this.flat.house.year},price:this.flat.price}},{compact:!0,ignoreComment:!0,spaces:4}),t=await I.put(`/flats/${this.apartmentId}`,e,{headers:{"Content-Type":"application/xml"}});200===t.status&&(this.successMessage="Квартира успешно обновлена!")}catch(e){if(e.response){const t=e.response.status;switch(t){case 400:this.errorMessage="Неверные данные. Проверьте ввод и попробуйте снова.";break;case 404:this.errorMessage="Квартира с указанным ID не найдена.";break;case 500:this.errorMessage="Ошибка сервера. Повторите попытку позже.";break;default:this.errorMessage="Неизвестная ошибка: "+t}}else this.errorMessage="Ошибка при обновлении квартиры. Проверьте данные и попробуйте снова."}else this.errorMessage="Введите ID квартиры."}}};const Me=(0,D.A)(Oe,[["render",Ce],["__scopeId","data-v-8cad9ca2"]]);var _e=Me;const Ee={class:"average-rooms"},xe={key:0},Ae={key:1},qe={key:2,class:"error-message"};function Ie(e,t,a,r,s,n){return(0,o.uX)(),(0,o.CE)("div",Ee,[t[0]||(t[0]=(0,o.Lk)("h2",null,"Среднее значение numberOfRooms:",-1)),null!==s.averageNumberOfRooms?((0,o.uX)(),(0,o.CE)("p",xe,(0,v.v_)(s.averageNumberOfRooms),1)):((0,o.uX)(),(0,o.CE)("p",Ae,"Загрузка...")),s.errorMessage?((0,o.uX)(),(0,o.CE)("p",qe,(0,v.v_)(s.errorMessage),1)):(0,o.Q3)("",!0)])}var Se={data(){return{averageNumberOfRooms:null,errorMessage:""}},mounted(){this.fetchAverageNumberOfRooms()},methods:{async fetchAverageNumberOfRooms(){this.errorMessage="";try{const e=await I.get("/flats/average-number-of-rooms",{headers:{Accept:"application/xml"}});if(200===e.status){const t=new DOMParser,a=t.parseFromString(e.data,"application/xml"),r=a.getElementsByTagName("Double")[0]?.textContent;this.averageNumberOfRooms=parseFloat(r)}}catch(e){const t=e.response?e.response.status:null;switch(t){case 404:this.errorMessage="Ошибка: данные не найдены.";break;case 500:this.errorMessage="Ошибка сервера. Попробуйте позже.";break;default:this.errorMessage="Произошла непредвиденная ошибка."}}}}};const we=(0,D.A)(Se,[["render",Ie],["__scopeId","data-v-71e4281c"]]);var De=we;const Xe={class:"transport-count"},Re={class:"form-group"},Te={key:0,class:"result-message"},Ne={key:1,class:"error-message"};function Ue(e,t,a,s,n,l){return(0,o.uX)(),(0,o.CE)("div",Xe,[(0,o.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>l.fetchFlatCount&&l.fetchFlatCount(...e)),["prevent"]))},[(0,o.Lk)("div",Re,[t[3]||(t[3]=(0,o.Lk)("label",{for:"transport"},"Выберите транспорт",-1)),(0,o.bo)((0,o.Lk)("select",{id:"transport","onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedTransport=e),required:""},t[2]||(t[2]=[(0,o.Fv)('<option disabled value="" data-v-005638a3>Выберите значение</option><option value="FEW" data-v-005638a3>Мало</option><option value="NONE" data-v-005638a3>Нет</option><option value="NORMAL" data-v-005638a3>Обычный</option><option value="ENOUGH" data-v-005638a3>Достаточно</option>',5)]),512),[[r.u1,n.selectedTransport]])]),t[4]||(t[4]=(0,o.Lk)("button",{type:"submit",class:"submit-button"},"Получить количество квартир",-1))],32),null!==n.count?((0,o.uX)(),(0,o.CE)("p",Te,'Количество квартир с транспортом больше "'+(0,v.v_)(n.selectedTransport)+'": '+(0,v.v_)(n.count),1)):(0,o.Q3)("",!0),n.errorMessage?((0,o.uX)(),(0,o.CE)("p",Ne,(0,v.v_)(n.errorMessage),1)):(0,o.Q3)("",!0)])}var Ve={data(){return{selectedTransport:"",count:null,errorMessage:""}},methods:{async fetchFlatCount(){this.errorMessage="",this.count=null;try{const e=await I.get("/flats/count-by-transport",{params:{transport:this.selectedTransport},headers:{"Content-Type":"application/xml"}});200===e.status&&(this.count=e.data)}catch(e){const t=e.response?e.response.status:null;switch(t){case 400:this.errorMessage="Неверный параметр запроса. Проверьте выбранное значение.";break;case 404:this.errorMessage="Запрашиваемый ресурс не найден.";break;case 500:this.errorMessage="Ошибка сервера. Попробуйте позже.";break;default:this.errorMessage="Произошла непредвиденная ошибка."}}}}};const Je=(0,D.A)(Ve,[["render",Ue],["__scopeId","data-v-005638a3"]]);var Be=Je;const Qe={class:"furnish-filter"},Pe={class:"form-group"},Ge={key:0,class:"apartments-list"},We={key:1,class:"no-results"},je={key:2,class:"error-message"};function $e(e,t,a,s,n,l){return(0,o.uX)(),(0,o.CE)("div",Qe,[(0,o.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>l.fetchFilteredFlats&&l.fetchFilteredFlats(...e)),["prevent"]))},[(0,o.Lk)("div",Pe,[t[3]||(t[3]=(0,o.Lk)("label",{for:"furnish"},"Выберите furnish",-1)),(0,o.bo)((0,o.Lk)("select",{id:"furnish","onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedFurnish=e),required:""},t[2]||(t[2]=[(0,o.Fv)('<option disabled value="" data-v-1ea03890>Выберите значение</option><option value="DESIGNER" data-v-1ea03890>Дизайнер</option><option value="FINE" data-v-1ea03890>Хороший</option><option value="BAD" data-v-1ea03890>Плохой</option><option value="LITTLE" data-v-1ea03890>Немного</option>',5)]),512),[[r.u1,n.selectedFurnish]])]),t[4]||(t[4]=(0,o.Lk)("button",{type:"submit",class:"submit-button"},"Получить квартиры",-1))],32),n.apartment&&n.apartment.length?((0,o.uX)(),(0,o.CE)("div",Ge,[(0,o.Lk)("h3",null,'Квартиры с furnish больше "'+(0,v.v_)(n.selectedFurnish)+'":',1),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.apartment,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id},[(0,o.Lk)("table",null,[(0,o.Lk)("tbody",null,[(0,o.Lk)("tr",null,[t[5]||(t[5]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"ID:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.id),1)]),(0,o.Lk)("tr",null,[t[6]||(t[6]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Название:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.name),1)]),(0,o.Lk)("tr",null,[t[7]||(t[7]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Координаты:")],-1)),(0,o.Lk)("td",null,"X: "+(0,v.v_)(e.coordinates.x)+", Y: "+(0,v.v_)(e.coordinates.y),1)]),(0,o.Lk)("tr",null,[t[8]||(t[8]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Дата создания:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.creationDate),1)]),(0,o.Lk)("tr",null,[t[9]||(t[9]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Площадь:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.area)+" м²",1)]),(0,o.Lk)("tr",null,[t[10]||(t[10]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Кол-во комнат:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.numberOfRooms),1)]),(0,o.Lk)("tr",null,[t[11]||(t[11]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Отделка:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.furnish),1)]),(0,o.Lk)("tr",null,[t[12]||(t[12]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Вид:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.view),1)]),(0,o.Lk)("tr",null,[t[13]||(t[13]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Транспорт:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.transport),1)]),(0,o.Lk)("tr",null,[t[14]||(t[14]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Дом:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.house.name)+", Год: "+(0,v.v_)(e.house.year)+", Этажи: "+(0,v.v_)(e.house.numberOfFlatsOnFloor)+", Лифты: "+(0,v.v_)(e.house.numberOfLifts),1)]),(0,o.Lk)("tr",null,[t[15]||(t[15]=(0,o.Lk)("td",null,[(0,o.Lk)("strong",null,"Цена:")],-1)),(0,o.Lk)("td",null,(0,v.v_)(e.price)+" ₽",1)])])])])))),128))])):0===n.apartment.length&&n.selectedFurnish?((0,o.uX)(),(0,o.CE)("p",We,' Квартиры с furnish "'+(0,v.v_)(n.selectedFurnish)+'" не найдены. ',1)):(0,o.Q3)("",!0),n.errorMessage?((0,o.uX)(),(0,o.CE)("p",je,(0,v.v_)(n.errorMessage),1)):(0,o.Q3)("",!0)])}var Ye={data(){return{selectedFurnish:"",apartment:[],errorMessage:""}},methods:{async fetchFilteredFlats(){this.errorMessage="",this.apartment=[];try{const e=await I.get("/flats/filter-by-furnish",{params:{furnish:this.selectedFurnish},headers:{"Content-Type":"application/xml"}});if(200===e.status){const t=new DOMParser,a=t.parseFromString(e.data,"application/xml"),r=a.getElementsByTagName("item");this.apartment=Array.from(r).map((e=>this.parseApartmentXML(e)))}}catch(e){const t=e.response?e.response.status:null;switch(t){case 400:this.errorMessage="Неверный параметр запроса. Проверьте выбранное значение.";break;case 404:this.errorMessage="Запрашиваемый ресурс не найден.";break;case 500:this.errorMessage="Ошибка сервера. Попробуйте позже.";break;default:this.errorMessage="Произошла непредвиденная ошибка."}console.error("Error fetching flats:",this.errorMessage)}},parseApartmentXML(e){return{id:e.getElementsByTagName("id")[0].textContent,name:e.getElementsByTagName("name")[0].textContent,coordinates:{x:e.getElementsByTagName("x")[0].textContent,y:e.getElementsByTagName("y")[0].textContent},creationDate:e.getElementsByTagName("creationDate")[0].textContent,area:e.getElementsByTagName("area")[0].textContent,numberOfRooms:e.getElementsByTagName("numberOfRooms")[0].textContent,furnish:e.getElementsByTagName("furnish")[0].textContent,view:e.getElementsByTagName("view")[0].textContent,transport:e.getElementsByTagName("transport")[0].textContent,house:{name:e.getElementsByTagName("name")[1].textContent,year:e.getElementsByTagName("year")[0].textContent,numberOfFlatsOnFloor:e.getElementsByTagName("numberOfFlatsOnFloor")[0].textContent,numberOfLifts:e.getElementsByTagName("numberOfLifts")[0].textContent},price:e.getElementsByTagName("price")[0].textContent}}}};const He=(0,D.A)(Ye,[["render",$e],["__scopeId","data-v-1ea03890"]]);var Ke=He,ze={components:{DeleteApartmentForm:P,AddApartmentForm:R,GetApartmentByIdForm:z,FilterSortApartmentForm:ie,UpdateApartmentForm:_e,AverageNumberOfRooms:De,TransportCount:Be,FurnishFilter:Ke},data(){return{activeForm:null}},methods:{toggleForm(e){this.activeForm=this.activeForm===e?null:e},closeForm(){this.activeForm=null}}};const Ze=(0,D.A)(ze,[["render",f]]);var et=Ze;(0,r.Ef)(et).mount("#app")}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,s){if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],s=e[d][2];for(var l=!0,u=0;u<r.length;u++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[u])}))?r.splice(u--,1):(l=!1,s<n&&(n=s));if(l){e.splice(d--,1);var i=o();void 0!==i&&(t=i)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,o,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,n=r[0],l=r[1],u=r[2],i=0;if(n.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(u)var d=u(a)}for(t&&t(r);i<n.length;i++)s=n[i],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},r=self["webpackChunkservice_1"]=self["webpackChunkservice_1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(8583)}));r=a.O(r)})();
//# sourceMappingURL=app.bbb45c51.js.map