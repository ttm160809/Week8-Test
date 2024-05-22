import{_ as i,r,o as n,b as l,d as t,e as m,w as _,F as h,f as a,i as p}from"./index-2QS3OBab.js";const v="/Week8-Test/assets/foodSafety-csHDDvaZ.jpg",u="/Week8-Test/assets/handMade-HzStXOS9.jpg",f="/Week8-Test/assets/couponGift-ZaH9qIP2.jpg",y="/Week8-Test/assets/burger-acJu_q7B.jpg",b="/Week8-Test/assets/side-CtnCmkUx.jpg",g="/Week8-Test/assets/drink-MiKaAMpf.jpg",x={methods:{categorySelect(o){this.$router.push({path:"products",query:{category:o}})}}},w={class:"home-banner d-flex flex-column justify-content-center align-items-center"},k=t("h2",{class:"bg-white bg-opacity-50 text-black fs-3r mb-6 p-3","data-aos":"zoom-in","data-aos-delay":"100","data-aos-duration":"1000"},[a(" 美味しく！"),t("br"),a("楽しく！"),t("br"),a("贅沢ハンバーガー登場！ ")],-1),j=t("button",{class:"btn btn-dark rounded-0","data-aos":"zoom-in","data-aos-delay":"100","data-aos-duration":"1000"},"注文する",-1),S=p('<section class="container my-4 my-md-7" style="overflow:hidden;"><h2 class="text-center fs-3r fw-bold mb-4" data-aos="zoom-in" data-aos-duration="1000">こだわり</h2><div class="row" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000"><div class="col-md-6 text-center mb-2 mb-md-0"><img src="'+v+'" style="object-fit:cover;" height="350px" class="w-100" alt=""></div><div class="col-md-5 my-auto"><p class="text-start fs-5"> 食材の選定から商品提供までの品質基準を設けて、お客様に安全で安心いただける商品をお届けしています。 </p></div></div><div class="row flex-row-reverse mt-4" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"><div class="col-md-6 text-center mb-2 mb-md-0"><img src="'+u+'" style="object-fit:cover;" height="350px" class="w-100" alt=""></div><div class="col-md-5 my-auto"><p class="text-start fs-5"> できたてのおいしさをお客様にお届けするため、注文を受けてから手づくりしています。 </p></div></div></section><section class="bg-primary my-4 my-md-7"><div class="container"><div class="d-flex flex-column flex-md-row justify-content-center align-items-center py-5" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000"><div class="mb-4 mb-md-0"><img src="'+f+'" height="200px" width="250px" alt="..."></div><div class="text-center ms-0 ms-md-8"><h3 class="text-black fw-bold mb-1 fs-2">オープン記念</h3><span class="text-white fs-5"> 30% OFFクーポンをプレゼントさせていただきます！ </span><div class="bg-black rounded-pill mt-4 mb-2 py-3"><span class="text-white fs-5">クーポンコード ｜ <span class="fw-bold text-success fs-3">OPEN30</span></span></div><p><small>＜使用期限＞ 2024年12月31日まで</small></p></div></div></div></section>',2),C={class:"container my-4 my-md-7"},T=t("h2",{class:"text-center fs-1 fw-bold mb-4","data-aos":"zoom-in","data-aos-delay":"100","data-aos-duration":"1000"},"メニュー",-1),z={class:"row","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"1000"},W={class:"col-md-4 my-2"},N=t("img",{src:y,style:{"object-fit":"cover"},height:"250",class:"card-img-top rounded-0",alt:"..."},null,-1),V=t("div",{class:"card-body text-start"},[t("h4",null,"バーガー")],-1),$=[N,V],B={class:"col-md-4 my-2"},F=t("img",{src:b,style:{"object-fit":"cover"},height:"250",class:"card-img-top rounded-0",alt:"..."},null,-1),H=t("div",{class:"card-body text-start"},[t("h4",null,"サイド")],-1),q=[F,H],M={class:"col-md-4 my-2"},O=t("img",{src:g,style:{"object-fit":"cover"},height:"250",class:"card-img-top rounded-0",alt:"..."},null,-1),D=t("div",{class:"card-body text-start"},[t("h4",null,"ドリンク")],-1),E=[O,D];function L(o,s,P,R,Z,e){const c=r("RouterLink");return n(),l(h,null,[t("div",w,[k,m(c,{to:"/products"},{default:_(()=>[j]),_:1})]),S,t("section",C,[T,t("div",z,[t("div",W,[t("div",{class:"category-cards card overflow-hidden border-0 rounded-0",onClick:s[0]||(s[0]=d=>e.categorySelect("バーガー"))},$)]),t("div",B,[t("div",{class:"category-cards card overflow-hidden border-0 rounded-0",onClick:s[1]||(s[1]=d=>e.categorySelect("サイド"))},q)]),t("div",M,[t("div",{class:"category-cards card overflow-hidden border-0 rounded-0",onClick:s[2]||(s[2]=d=>e.categorySelect("ドリンク"))},E)])])])],64)}const G=i(x,[["render",L]]);export{G as default};