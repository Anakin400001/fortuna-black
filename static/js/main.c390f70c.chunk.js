(this["webpackJsonpfortune-black"]=this["webpackJsonpfortune-black"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},186:function(e,t,a){e.exports=a(295)},281:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);a(187),a(213),a(215),a(216),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255);var n=a(0),c=a.n(n),r=a(72),o=a.n(r),l=a(29),s=a.n(l),i=a(76),u=a.n(i),m=a(108),d=a(109),p=a(110),f=a(53),h=a(116),E=a(115),b=a(114),v=a.n(b),g=a(113),k=a.n(g),U=(a(264),a(11)),y=a(42),j=a.n(y),C=a(43),O=a.n(C),P=a(48),_=a.n(P),B=a(47),A=a.n(B),w=a(74),x=a.n(w),I=(a(102),a(103),Object(U.f)(),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(j.a,{id:t},c.a.createElement(O.a,null,"Fortuna CC"),c.a.createElement(A.a,{header:c.a.createElement(U.c,{mode:"secondary"},n.first_name," \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")},c.a.createElement(x.a,null,c.a.createElement(_.a,{size:"xl",level:"2",onClick:a,"data-to":"info"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))))}),K=a(112),S=a.n(K),V=a(54),W=a.n(V),z=a(55),J=a.n(z),N=a(111),T=a.n(N),F=(a(281),Object(U.f)()),G=function(e){return c.a.createElement(j.a,{id:e.id},c.a.createElement(O.a,{left:c.a.createElement(S.a,{onClick:e.go,"data-to":"home"},F===U.d?c.a.createElement(W.a,null):c.a.createElement(J.a,null))},"\u0422\u043e\u043f"),c.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},R=a(56),q=a.n(R),D=a(75),H=a.n(D),L=Object(U.f)(),M=function(e){return c.a.createElement(j.a,{id:e.id},c.a.createElement(O.a,{left:c.a.createElement(U.e,{onClick:e.go,"data-to":"home"},L===U.d?c.a.createElement(W.a,null):c.a.createElement(J.a,null))}),e.fetchedUser&&c.a.createElement(A.a,{header:c.a.createElement(U.c,{mode:"secondary"},"\u0410\u043a\u043a\u0430\u0443\u043d\u0442")},c.a.createElement(q.a,{before:e.fetchedUser.photo_200?c.a.createElement(H.a,{src:e.fetchedUser.photo_200}):null,description:"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441 1000"},"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)),c.a.createElement(q.a,null,c.a.createElement(_.a,{style:{marginRight:8},mode:"commerce",target:"_blank",href:"https://vk.com/app7349811#merchant456906612_1"},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"),c.a.createElement(_.a,{mode:"destructive",onClick:e.openBase},"\u0412\u044b\u0432\u0435\u0441\u0442\u0438"))),c.a.createElement(A.a,{header:c.a.createElement(U.c,{mode:"secondary"},"\u041c\u0443\u0437\u044b\u043a\u0430")}))},Q=Object(U.f)(),X=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",setActivePanel:"home",popout:null,setPopout:null,setUser:null,fetchedUser:null,setePopout:c.a.createElement(k.a,{size:"large"})},n.openBase=n.openBase.bind(Object(f.a)(n)),n}return Object(p.a)(a,[{key:"openBase",value:function(){var e=this;this.setState({popout:c.a.createElement(U.a,{onClose:function(){return e.setState({popout:null})}},c.a.createElement(U.b,{autoclose:!0},"\u041f\u043e \u0434\u043d\u044f\u043c"),c.a.createElement(U.b,{autoclose:!0},"\u041f\u043e \u043d\u0435\u0434\u0435\u043b\u044f\u043c"),c.a.createElement(U.b,{autoclose:!0},"\u041f\u043e \u043c\u0435\u0441\u044f\u0446\u0430\u043c"),Q===U.d&&c.a.createElement(U.b,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))})}},{key:"useEffect",value:function(){var e=this;function t(){return(t=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.popout(null);case 1:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}s.a.subscribe((function(t){var a=t.detail,n=a.type,c=a.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(r);var o=s.a.send("VKWebAppGetUserInfo");e.state.setUser(o)}})),function(){t.apply(this,arguments)}()}},{key:"render",value:function(){return c.a.createElement(v.a,{activePanel:this.state.activePanel,popout:this.state.Popout},c.a.createElement(I,{id:"home",go:this.go}),c.a.createElement(G,{id:"persik",go:this.go}),c.a.createElement(M,{id:"info",openBase:this.state.openBase,fetchedUser:this.state.setUser,go:this.go}))}}]),a}(c.a.Component);s.a.send("VKWebAppInit"),o.a.render(c.a.createElement(X,null),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.c390f70c.chunk.js.map