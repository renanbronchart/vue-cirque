webpackJsonp([3],{"/mKq":function(e,i,t){i=e.exports=t("FZ+f")(!1),i.push([e.i,"\n.infos[data-v-cb39774e] {\n  position: relative;\n  margin: 20px 0 0 0;\n}\n@media (min-width: 1024px) {\n.infos[data-v-cb39774e] {\n      margin: 40px 0 0 0;\n}\n}\n.infos__container[data-v-cb39774e] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (min-width: 1024px) {\n.infos__container[data-v-cb39774e] {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n}\n}\n.infos__title[data-v-cb39774e] {\n  margin: 0 0 20px 0;\n}\n.infos__illustration[data-v-cb39774e] {\n  width: 100%;\n}\n@media (min-width: 1024px) {\n.infos__illustration[data-v-cb39774e] {\n      width: 70%;\n      min-width: 70%;\n}\n}\n",""])},A9r3:function(e,i,t){var a=t("/mKq");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("a730769a",a,!0)},WWNf:function(e,i){e.exports=[{id:"0",title:"Le Vintage",description:"À l'ancienne",linkName:"Chapiteau",background:"LeVintage.jpg"},{id:"1",title:"Le Long",description:"Etiam vitae lectus posuere neque fringilla porta id suscipit urna. Mauris vel libero eget purus vestibulum luctus. Vivamus at ipsum mauris. Phasellus mollis sed mauris vitae aliquet. Proin ultrices, orci sit amet consectetur congue, neque nisi efficitur felis, id vulputate lectus mi eu metus. In id pharetra est. Vestibulum fermentum fermentum neque quis auctor. Integer mollis ipsum ac nisi interdum, eu varius est vestibulum. Sed varius risus ut tellus accumsan, vel varius erat dictum. Cras posuere lectus justo, vitae ornare urna pharetra nec. Nullam ullamcorper diam ut nisl sodales sagittis. Nunc ultricies magna id est venenatis blandit. Sed diam felis, mollis ac molestie sed, mattis eu sapien. Nunc malesuada quam ligula, et porta ligula tempor ut. Proin eget scelerisque eros, quis placerat massa. Quisque pulvinar purus et metus pulvinar, at viverra justo aliquet. Morbi nec pretium lorem. Nunc accumsan porta rhoncus. Sed et purus a turpis sollicitudin imperdiet. Morbi eget tempus ex, ullamcorper ullamcorper mauris. Duis volutpat tristique diam ut mollis. Donec faucibus placerat arcu, et consequat eros elementum et. Ut mattis pellentesque neque, sed lacinia urna ullamcorper nec. Sed hendrerit neque diam, sit amet porttitor nunc ullamcorper id. Suspendisse viverra porttitor massa ac varius. Duis a mi lacus. Ut fringilla varius mi, vel convallis neque maximus at. Curabitur arcu est, vulputate non eros in, rutrum accumsan libero.",linkName:"Chapiteau",background:"leLong.jpg"},{id:"2",title:"Le Paradis",description:"Le paradis des chapiteaux",linkName:"Chapiteau",background:"LeParadis.jpg"},{id:"3",title:"New Generation",description:"La toute nouvelle génération des chapiteaux",linkName:"Chapiteau",background:"newGeneration.jpg"},{id:"4",title:"Le Zig Zag",description:"En avant !!",linkName:"Chapiteau",background:"zigZag.jpg"}]},YlUi:function(e,i,t){"use strict";function a(e){t("A9r3")}Object.defineProperty(i,"__esModule",{value:!0});var n=t("WWNf"),s=t.n(n),r=function(){return t.e(7).then(t.bind(null,"rhdv"))},u=function(){return t.e(9).then(t.bind(null,"SCfW"))},l={name:"chapiteau",data:function(){return{card:{}}},created:function(){this.card=this.newChapiteau},computed:{altImage:function(){return"Chapiteau "+this.newChapiteau.title},imageSrc:function(){return"/static/"+this.newChapiteau.background},newChapiteau:function(){return s.a[this.$route.params.id]}},components:{BackTo:u,Card:r}},o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12"},[t("BackTo")],1)])]),e._v(" "),t("div",{staticClass:"infos"},[t("div",{staticClass:"container"},[t("div",{staticClass:"flex infos__container"},[t("div",{staticClass:"infos__illustration"},[t("h3",{staticClass:"infos__title"},[e._v(e._s(e.newChapiteau.title))]),e._v(" "),t("img",{staticClass:"img--responsive infos__image",attrs:{src:e.imageSrc,alt:e.altImage}})]),e._v(" "),t("Card",{attrs:{extraClass:"card--description"}},[e.newChapiteau.title?t("h4",[e._v(e._s(e.newChapiteau.title))]):e._e(),e._v(" "),t("p",[e._v(e._s(e.newChapiteau.description))])])],1)])])])},c=[],d={render:o,staticRenderFns:c},m=d,p=t("VU/8"),v=a,f=p(l,m,!1,v,"data-v-cb39774e",null);i.default=f.exports}});