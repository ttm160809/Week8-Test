import{a as m,s as a}from"./sweetAlertStore-UrgwhacM.js";import{_ as x,m as _,r as f,o as n,b as l,e as v,d as t,j as O,l as w,F as p,k as y,t as o,q as k}from"./index-TU8RPY4A.js";var D={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_NAME:"eatburgertest",BASE_URL:"/Week8-Test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g,VITE_NAME:b}=D,E={data(){return{isLoading:!1,tempOrder:[],order_id:"",isSearch:!1}},methods:{..._(a,["swalError"]),..._(a,["successToast"]),..._(a,["errorToast"]),getOrder(){this.isLoading=!0,m.get(`${g}/v2/api/${b}/order/${this.order_id}`).then(c=>{this.tempOrder=c.data.order,this.isSearch=!0,this.isLoading=!1}).catch(()=>{this.swalError()})},switchDate(c){const e=new Date(c*1e3);let h=`${e.getFullYear()}-`,u=`${e.getMonth()+1<10?`0${e.getMonth()+1}`:e.getMonth()+1}-`,s=`${e.getDate()<10?`0${e.getDate()}`:e.getDate()} `,r=`${e.getHours()<10?`0${e.getHours()}`:e.getHours()}:`,i=e.getMinutes()<10?`0${e.getMinutes()}`:e.getMinutes();return h+u+s+r+i},checkPaid(){m.post(`${g}/v2/api/${b}/pay/${this.tempOrder.id}`).then(()=>{this.getOrder(),this.successToast("お支払いが完了しました")}).catch(()=>{this.errorToast("お手数ですが、もう一度やり直してください")})}}},V={class:"container mt-md-5 pt-5"},M={class:"row justify-content-center mb-5"},L={class:"col-md-10 d-flex flex-column align-items-center"},S=t("h2",{class:"mb-5"},"訂單查詢",-1),T={class:"input-group mb-5"},A={key:0,class:"d-flex flex-column align-items-center"},N=t("i",{class:"bi bi-clipboard-x-fill fs-8r text-secondary"},null,-1),R=t("span",{class:"fs-3 mb-4 text-secondary"},"查無此訂單",-1),U=[N,R],B={key:1,class:"col-md-10"},C={class:"row d-flex flex-column-reverse flex-md-row"},I={class:"col-md-7"},F={class:"bg-white p-3"},H=t("h2",null,"訂購品項",-1),P={class:"table align-middle mb-2"},j=t("thead",null,null,-1),q={class:"d-flex flex-column-reverse d-md-block"},Y=["src"],W={class:"text-primary fw-bold fs-6 ms-0 ms-md-3"},z={class:"text-danger fs-5 text-end"},G={class:"text-change fw-bold fs-5 text-end"},J={class:"text-end"},K=t("span",{class:"text-danger fw-bold fs-3 me-4"},"總價",-1),Q={class:"text-danger fw-bold fs-4 me-2"},X={class:"col-md-5 mb-3 mb-md-0"},Z=t("div",{class:"bg-dark p-2"},[t("h3",{class:"text-center text-white"},"客戶資訊")],-1),$={class:"bg-white p-3"},tt={class:"table mb-2"},et=t("thead",null,null,-1),st=t("th",null,"訂單編號",-1),ot={class:"text-end"},dt=t("th",null,"下單時間",-1),nt={class:"text-end"},lt=t("th",null,"姓名",-1),rt={class:"text-end"},ct=t("th",null,"電話",-1),it={class:"text-end"},at=t("th",null,"Email",-1),_t={class:"text-end"},ht=t("th",null,"地址",-1),ut={class:"text-end"},mt=t("th",null,"留言",-1),pt={key:0,class:"text-end"},gt={key:1,class:"text-end"},bt=t("th",null,"付款狀態",-1),xt={key:0,class:"text-success text-end fw-bold"},ft={key:1,class:"text-danger text-end fw-bold"},vt={class:"text-end"};function Ot(c,e,h,u,s,r){const i=f("VLoading");return n(),l(p,null,[v(i,{active:s.isLoading},null,8,["active"]),t("div",V,[t("div",M,[t("div",L,[S,t("div",T,[O(t("input",{type:"text",class:"form-control",placeholder:"請輸入訂單編號","onUpdate:modelValue":e[0]||(e[0]=d=>s.order_id=d),"aria-label":"請輸入訂單編號","aria-describedby":"button-addon2"},null,512),[[w,s.order_id]]),t("button",{class:"btn btn-dark",type:"button",id:"button-addon2",onClick:e[1]||(e[1]=d=>r.getOrder())}," 查詢 ")])]),s.isSearch===!0&&s.tempOrder===null?(n(),l("div",A,U)):s.isSearch===!0&&s.tempOrder!==null?(n(),l("div",B,[t("div",C,[t("div",I,[t("div",F,[H,t("table",P,[j,t("tbody",null,[(n(!0),l(p,null,y(s.tempOrder.products,d=>(n(),l("tr",{key:d.id},[t("td",q,[t("img",{src:d.product.imageUrl,class:"cart-list-img card-img-top rounded-0",alt:"..."},null,8,Y),t("span",W,o(d.product.title),1)]),t("td",z,"x "+o(d.qty),1),t("td",G,"¥ "+o(d.final_total),1)]))),128))])]),t("div",J,[K,t("span",Q,"¥ "+o(s.tempOrder.total),1)])])]),t("div",X,[Z,t("div",$,[t("table",tt,[et,t("tbody",null,[t("tr",null,[st,t("td",ot,o(s.tempOrder.id),1)]),t("tr",null,[dt,t("td",nt,o(r.switchDate(s.tempOrder.create_at)),1)]),t("tr",null,[lt,t("td",rt,o(s.tempOrder.user.name),1)]),t("tr",null,[ct,t("td",it,o(s.tempOrder.user.tel),1)]),t("tr",null,[at,t("td",_t,o(s.tempOrder.user.email),1)]),t("tr",null,[ht,t("td",ut,o(s.tempOrder.user.address),1)]),t("tr",null,[mt,s.tempOrder.message===void 0?(n(),l("td",pt,"-")):(n(),l("td",gt,o(s.tempOrder.message),1))]),t("tr",null,[bt,s.tempOrder.is_paid===!0?(n(),l("td",xt,"已付款")):(n(),l("td",ft,"尚未付款"))])])]),t("div",vt,[t("button",{class:"btn btn-change",type:"button",id:"button-addon2",onClick:e[2]||(e[2]=d=>r.checkPaid())}," 確認已付款 ")])])])])])):k("",!0)])])],64)}const kt=x(E,[["render",Ot]]);export{kt as default};
