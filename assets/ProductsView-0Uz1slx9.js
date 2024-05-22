import{a as u,s as M}from"./sweetAlertStore-UrgwhacM.js";import{m as g,_ as y,o as c,b as r,d as t,t as d,j as C,v as E,F as p,k as f,h as $,f as L,r as b,e as v}from"./index-TU8RPY4A.js";import{c as w}from"./cartStore-0ejrh6Jx.js";import{m as V}from"./modalMixin-Tfd3ZiWI.js";const k={props:{tempProduct:{}},data(){return{modal:null,editProduct:{},qty:1}},methods:{...g(w,["addToCart"]),addAndHide(o,i){this.addToCart(o,i),this.hideModal(),this.qty=1}},watch:{tempProduct(){this.editProduct=this.tempProduct}},mixins:[V]},S={id:"shopModal",class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-dialog-centered"},j={class:"modal-content"},q=t("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Close",class:"btn-close position-absolute p-2 m-2 top-0 end-0 rounded-circle bg-opacity-90 bg-white"},null,-1),A={class:"modal-header p-0 overflow-hidden"},U=["src"],B={class:"modal-body"},D={class:"product-detail row align-content-between"},N={class:"mb-2"},Q={class:"fw-bold h1 mb-1 text-primary"},R={class:"my-1"},I={class:"card-text mb-0"},H={class:"fw-bold fs-4 me-1 text-change"},F={class:"text-muted"},O={class:"modal-footer"},W={class:"col"},z={class:"input-group"},G=["value"],J={class:"col text-end"},K=t("i",{class:"bi bi-cart-fill me-1"},null,-1);function X(o,i,n,l,e,h){return c(),r("div",S,[t("div",T,[t("div",j,[q,t("div",A,[t("img",{src:e.editProduct.imageUrl,class:"card-img-top rounded-0",style:{"object-fit":"cover"},height:"300",alt:"..."},null,8,U)]),t("div",B,[t("div",D,[t("div",N,[t("h2",Q,d(e.editProduct.title),1),t("p",R,d(e.editProduct.description),1)]),t("p",I,[t("span",H,"¥ "+d(e.editProduct.price),1),t("span",F,[t("del",null,"¥ "+d(e.editProduct.origin_price),1)])])])]),t("div",O,[t("div",W,[t("div",z,[C(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":i[0]||(i[0]=a=>e.qty=a),ref:"qtyValue"},[(c(),r(p,null,f(20,a=>t("option",{value:a,key:a},d(a),9,G)),64))],512),[[E,e.qty]])])]),t("div",J,[t("button",{type:"button",class:"btn btn-primary text-white",onClick:i[1]||(i[1]=$(a=>h.addAndHide(e.editProduct.id,this.$refs.qtyValue.value),["prevent"]))},[K,L(" カートに入れる ")])])])])])],512)}const Y=y(k,[["render",X]]),Z="/Week8-Test/assets/menuBanner-py3pHQTh.jpg";var tt={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"eatburgertest",BASE_URL:"/Week8-Test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_NAME:m}=tt,et={data(){return{isLoading:!1,products:[],tempProduct:{},categories:["全て","バーガー","サイド","ドリンク"],homeQuery:this.$route.query.category}},methods:{...g(w,["addToCart"]),...g(M,["swalError"]),getProducts(){this.isLoading=!0,this.homeQuery===void 0?u.get(`${_}/v2/api/${m}/products/all`).then(o=>{this.products=o.data.products,this.isLoading=!1}).catch(()=>{this.swalError()}):(this.$refs.categorySelect.value=this.homeQuery,u.get(`${_}/v2/api/${m}/products?category=${this.$refs.categorySelect.value}`).then(o=>{this.products=o.data.products,this.homeQuery=void 0,this.isLoading=!1}).catch(()=>{this.swalError()}))},changeCategory(o,i=1){this.isLoading=!0;const n=o.target.value;n==="全て"?this.getProducts():u.get(`${_}/v2/api/${m}/products?category=${n}&page=${i}`).then(l=>{this.products=l.data.products,this.pages=l.data.pagination,this.isLoading=!1}).catch(()=>{this.swalError()})},openModal(o){this.tempProduct={...o},this.$refs.sModal.openModal()}},mounted(){this.getProducts()},components:{ShopModal:Y}},st={class:"container mt-md-5"},ot=t("section",{class:"position-relative"},[t("img",{src:Z,class:"card-img-top menu-banner",alt:"..."}),t("h2",{class:"fs-5r fw-bold position-absolute bg-primary bg-opacity-50 text-white text-center top-50 start-50 translate-middle w-75 p-3"}," メニュー ")],-1),it={class:"category-select position-relative col-6 col-md-2 mb-4 mt-5"},dt=["value"],at={class:"row product-cards-list justify-content-center"},ct=["onClick"],rt={class:"product-img rounded-top overflow-hidden"},nt=["src"],lt={class:"card-body"},ht={class:"mb-4 text-primary fw-bolder fs-4"},pt={class:"d-flex flex-nowrap justify-content-between"},ut={class:"card-text mb-0"},_t={class:"fw-bold fs-4 me-1 text-change"},mt={class:"text-muted"},gt=["onClick"],ft=t("i",{class:"bi bi-cart-fill me-1"},null,-1),bt=t("span",{class:"fs-6"},"カートに入れる",-1),vt=[ft,bt];function yt(o,i,n,l,e,h){const a=b("VLoading"),x=b("ShopModal");return c(),r(p,null,[v(a,{active:e.isLoading},null,8,["active"]),t("div",st,[ot,t("div",it,[t("select",{name:"",id:"",class:"bg-primary text-white w-100 rounded-pill fs-5 py-2 px-3 border-0",onChange:i[0]||(i[0]=s=>h.changeCategory(s)),ref:"categorySelect"},[(c(!0),r(p,null,f(e.categories,s=>(c(),r("option",{value:s,key:s},d(s),9,dt))),128))],544)]),t("div",at,[(c(!0),r(p,null,f(e.products,s=>(c(),r("div",{class:"col-md-4",key:s.id},[t("div",{class:"product-cards card border-0 mb-4",onClick:P=>h.openModal(s)},[t("div",rt,[t("img",{src:s.imageUrl,class:"card-img-top rounded-0",style:{"object-fit":"cover"},height:"300",alt:"..."},null,8,nt)]),t("div",lt,[t("h3",ht,d(s.title),1),t("div",pt,[t("p",ut,[t("span",_t,"¥ "+d(s.price),1),t("span",mt,[t("del",null,"¥ "+d(s.origin_price),1)])]),t("button",{type:"button",class:"btn btn-primary text-white d-flex justify-content-end",onClick:$(P=>o.addToCart(s.id,1),["stop"])},vt,8,gt)])])],8,ct)]))),128))])]),v(x,{"temp-product":e.tempProduct,ref:"sModal"},null,8,["temp-product"])],64)}const Mt=y(et,[["render",yt]]);export{Mt as default};