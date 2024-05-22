import{a as k,s as g}from"./sweetAlertStore-UrgwhacM.js";import{_ as j,m as b,a as x,r as m,o as i,b as r,d as e,e as l,w as d,F,k as R,t as u,j as w,l as V,f as _,n as h}from"./index-TU8RPY4A.js";import{c as v}from"./cartStore-0ejrh6Jx.js";var D={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"eatburgertest",BASE_URL:"/Week8-Test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:C,VITE_NAME:E}=D,I={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon:""}},methods:{...b(v,["getCarts"]),...b(g,["swalError"]),...b(g,["successToast"]),...b(g,["errorToast"]),createOrder(){const t=this.form;k.post(`${C}/v2/api/${E}/order`,{data:t}).then(s=>{this.$refs.form.resetForm(),this.form.message="",this.getCarts(),this.$router.push(`/cartfinish/${s.data.orderId}`)}).catch(()=>{this.errorToast("お手数ですが、もう一度やり直してください")})},isPhone(t){const s=/^(09)[0-9]{8}$/;return t===""?"電話號碼 為必填":s.test(t)?!0:"請填寫正確的電話號碼"},useCoupon(t){const s={code:t};k.post(`${C}/v2/api/${E}/coupon`,{data:s}).then(()=>{this.getCarts(),this.coupon="",this.successToast("クーポンを使用しました")}).catch(()=>{this.coupon="",this.errorToast("クーポンコードが正しくありません")})}},mounted(){this.getCarts(),console.log(this.carts)},computed:{...x(v,["carts"]),...x(v,["final_total"]),...x(v,["total"])}},L={class:"container pt-5"},M={class:"d-flex flex-column d-md-none align-items-center mb-5"},N={class:"border border-secondary bg-secondary w-100 text-center py-2 py-md-4"},A=e("div",{class:"d-flex align-items-center"},[e("i",{class:"bi bi-caret-down-fill col fs-1 text-secondary"})],-1),q={class:"border border-primary bg-primary w-100 text-center py-2 py-md-4"},B=e("div",{class:"d-flex align-items-center"},[e("i",{class:"bi bi-caret-down-fill col fs-1 text-primary"})],-1),O={class:"border border-primary w-100 text-center py-2 py-md-4"},P={class:"d-none d-md-flex justify-content-center mb-5"},z={class:"border border-secondary bg-secondary px-7 py-4"},W=e("div",{class:"d-flex align-items-center"},[e("i",{class:"bi bi-caret-right-fill col fs-1 text-secondary"})],-1),G={class:"border border-primary bg-primary px-7 py-4"},H=e("div",{class:"d-flex align-items-center"},[e("i",{class:"bi bi-caret-right-fill col fs-1 text-primary"})],-1),J={class:"border border-primary px-7 py-4"},K={class:"row"},Q={class:"col-md-8"},X={class:"bg-white p-3"},Y=e("div",{class:"d-flex justify-content-between align-items-end mb-3"},[e("h2",null,"客戶資訊")],-1),Z={class:"row justify-content-center"},$={class:"mb-3"},ee=e("label",{for:"email",class:"form-label"},"Email",-1),se={class:"mb-3"},te=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),oe={class:"mb-3"},le=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),ae={class:"mb-3"},ne=e("label",{for:"address",class:"form-label"},"收件人地址",-1),de={class:"mb-3"},ie=e("label",{for:"message",class:"form-label"},"留言",-1),re=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1),ce={class:"col-md-4"},me=e("div",{class:"bg-dark p-2"},[e("h3",{class:"text-center text-white"},"訂單摘要")],-1),ue={class:"bg-white p-3"},_e={class:"table align-middle mb-2"},fe=e("thead",null,null,-1),pe={class:"text-primary fw-bold fs-6"},be={class:"text-danger fs-5 text-end"},he={class:"text-change fw-bold fs-5 text-end"},ve={key:0,class:"d-flex justify-content-between align-items-end mb-4"},ye=e("h4",{class:"fw-bold p-2"},"總價",-1),ge={class:"text-danger fw-bold fs-5 p-2"},xe={key:1},we={class:"d-flex justify-content-between align-items-end mb-1"},Ve=e("h4",{class:"fw-bold fs-5 p-2"},[e("del",null,"總價")],-1),ke={class:"text-danger fw-bold fs-6 p-2"},Ce={class:"d-flex justify-content-between align-items-end mb-4"},Ee=e("h4",{class:"fw-bold fs-3 p-2"},"折扣價",-1),Te={class:"text-danger fw-bold fs-4 p-2"},Ue={key:2,class:"input-group mb-3"},Se=["disabled"],je={key:3,class:"input-group mb-3"},Fe=e("button",{type:"button",class:"btn btn-primary w-100 py-3 rounded-0"},[e("span",{class:"text-warning fw-bold fs-5"},"退回確認品項")],-1);function Re(t,s,De,Ie,o,f){const c=m("sapn"),T=m("VField"),p=m("error-message"),y=m("v-field"),U=m("VForm"),S=m("RouterLink");return i(),r("div",L,[e("div",M,[e("div",N,[l(c,{class:"fs-4 text-white"},{default:d(()=>[_("1.確認品項")]),_:1})]),A,e("div",q,[l(c,{class:"fs-4 text-white"},{default:d(()=>[_("2.結帳資訊")]),_:1})]),B,e("div",O,[l(c,{class:"fs-4"},{default:d(()=>[_("3.訂單成立")]),_:1})])]),e("div",P,[e("div",z,[l(c,{class:"fs-4 text-white"},{default:d(()=>[_("1.確認品項")]),_:1})]),W,e("div",G,[l(c,{class:"fs-4 text-white"},{default:d(()=>[_("2.結帳資訊")]),_:1})]),H,e("div",J,[l(c,{class:"fs-4"},{default:d(()=>[_("3.訂單成立")]),_:1})])]),e("div",K,[e("div",Q,[e("div",X,[Y,e("div",Z,[l(U,{ref:"form",onSubmit:f.createOrder},{default:d(({errors:a})=>[e("div",$,[ee,l(T,{id:"email",name:"email",type:"email",class:h(["form-control",{"is-invalid":a.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=n=>o.form.user.email=n)},null,8,["class","modelValue"]),l(p,{name:"email",class:"invalid-feedback"})]),e("div",se,[te,l(y,{id:"name",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":a.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=n=>o.form.user.name=n)},null,8,["class","modelValue"]),l(p,{name:"姓名",class:"invalid-feedback"})]),e("div",oe,[le,l(y,{id:"tel",name:"電話",type:"text",class:h(["form-control",{"is-invalid":a.電話}]),placeholder:"請輸入電話",rules:f.isPhone,modelValue:o.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=n=>o.form.user.tel=n)},null,8,["class","rules","modelValue"]),l(p,{name:"電話",class:"invalid-feedback"})]),e("div",ae,[ne,l(y,{id:"address",name:"地址",type:"text",class:h(["form-control",{"is-invalid":a.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=n=>o.form.user.address=n)},null,8,["class","modelValue"]),l(p,{name:"地址",class:"invalid-feedback"})]),e("div",de,[ie,w(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=n=>o.form.message=n)},null,512),[[V,o.form.message]])]),re]),_:1},8,["onSubmit"])])])]),e("div",ce,[me,e("div",ue,[e("table",_e,[fe,e("tbody",null,[(i(!0),r(F,null,R(t.carts,a=>(i(),r("tr",{key:a.id},[e("td",null,[e("span",pe,u(a.product.title),1)]),e("td",be,"x "+u(a.qty),1),e("td",he," ¥ "+u(Math.round(a.final_total)),1)]))),128))])]),t.final_total===t.total?(i(),r("div",ve,[ye,e("span",ge,"¥ "+u(t.total),1)])):(i(),r("div",xe,[e("div",we,[Ve,e("span",ke,[e("del",null,"¥ "+u(t.total),1)])]),e("div",Ce,[Ee,e("span",Te,"¥ "+u(Math.round(t.final_total)),1)])])),t.final_total===t.total?(i(),r("div",Ue,[w(e("input",{type:"text",class:"form-control",placeholder:"請輸入優惠代碼","onUpdate:modelValue":s[5]||(s[5]=a=>o.coupon=a),"aria-label":"請輸入優惠代碼","aria-describedby":"button-addon2",disabled:t.carts.final_total!==t.carts.total},null,8,Se),[[V,o.coupon]]),e("button",{class:"btn btn-dark",type:"button",id:"button-addon2",onClick:s[6]||(s[6]=a=>f.useCoupon(o.coupon))}," 使用 ")])):(i(),r("div",je,[w(e("input",{type:"text",class:"form-control",placeholder:"您已使用優惠券","onUpdate:modelValue":s[7]||(s[7]=a=>o.coupon=a),"aria-label":"您已使用優惠券","aria-describedby":"button-addon2",disabled:""},null,512),[[V,o.coupon]]),e("button",{class:"btn btn-dark",type:"button",id:"button-addon2",onClick:s[8]||(s[8]=a=>f.useCoupon(o.coupon)),disabled:""}," 使用 ")]))]),l(S,{to:"/cart"},{default:d(()=>[Fe]),_:1})])])])}const Ae=j(I,[["render",Re]]);export{Ae as default};
