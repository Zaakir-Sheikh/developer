(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{118:function(e,t,a){"use strict";a.r(t);const n=[{name:"Kedyn Macedonio",link:"https://github.com/Kedyn"},{name:"Francis Tse",link:"https://github.com/francistse23"},{name:"Daniel Singer",link:"https://github.com/chilblane"},{name:"Kevin Han",link:"https://github.com/kevinydhan"},{name:"Alena Choong",link:"https://github.com/leeeennyy"},{name:"Griffin Suparto",link:"https://github.com/Viou"},{name:"Pawel Boguslawski",link:"https://github.com/bogusweb"}],o=[{name:"Coleyra",link:"https://github.com/Coleyra"},{name:"Danilo Moura",link:"https://github.com/danilolmoura"},{name:"Fabian9799",link:"https://github.com/fabian9799"},{name:"Eduardo Vega",link:"https://github.com/eduardovegar"},{name:"Parsa Eskandarnejad",link:"https://github.com/parsaaes"},{name:"Kinishina",link:"https://github.com/Kinishina"},{name:"Victor Pietro",link:"https://github.com/pietroow"},{name:"Michał Stankiewicz",link:"http://fb.niezwyczajniezwyczajny.pl"},{name:"Drison64",link:"https://github.com/Drison64"},{name:"Itay Kabalo",link:"https://twitter.com/itaykabalo"},{name:"Unviray",link:"https://github.com/Unviray"},{name:"Nuno Lopes",link:""},{name:"Jarsa132",link:"https://github.com/Jarsa132"}],l=[{name:"HoneyLemonDaisy",link:"https://twitter.com/honeylemondaisy"},{name:"Stark_001001",link:"https://www.reddit.com/user/Stark_001001"},{name:"mooseknuckle_king",link:"https://www.reddit.com/user/mooseknuckle_king/"}],r=[{name:"fuslie",link:"https://www.twitch.tv/fuslie"}];var i=a(93),s=a(94),m=a(0),c=a.n(m),d=a(4),u=a(22),p=a(24),b=a(9),h=Object(b.d)(e=>({AboutPanel:t=>({padding:t.isMobile?"1rem":"0","& a":{fontWeight:700,fontSize:"1.25rem"},"& h3":{letterSpacing:"0.05em"},"& hr":{border:0,borderBottom:"1px solid "+e.borderColor}}),AboutPanelHeader:{paddingBottom:"1rem",borderBottom:"1px solid "+e.borderColor,marginBottom:"1.5rem",fontSize:"2rem",fontWeight:200,letterSpacing:"0.05em"},AboutPanelTitle:{textAlign:"center"},AboutPanelTeams:{display:"flex",flexWrap:"wrap"},AboutPanelPerson:{},AboutPanelTeam:{flex:"0 0 50%"},AboutPanelOutro:{textAlign:"right"}}));t.default=function(){const{t:e,i18n:t}=Object(i.a)(),a=Object(p.c)(u.b),m=h({isMobile:a}),b=[{title:e("about.developers"),people:n},{title:e("about.translators"),people:o},{title:e("about.artists"),people:l},{title:e("about.special"),people:r}];return c.a.createElement("div",{style:{direction:t.dir()},className:m.AboutPanel},a&&c.a.createElement("h2",{className:m.AboutPanelHeader},e("menu.about")),c.a.createElement("h3",{className:m.AboutPanelTitle},"fusliez notes v",d.c),c.a.createElement("div",{className:m.AboutPanelTeams},b.map((e,t)=>c.a.createElement("div",{key:t,className:m.AboutPanelTeam},c.a.createElement("h4",null,e.title),e.people.map((e,t)=>c.a.createElement("div",{key:t,className:m.AboutPanelPerson},c.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.name)))))),c.a.createElement("hr",null),c.a.createElement("p",null,c.a.createElement(s.a,{i18nKey:"about.partOne"},"First, thanks to",c.a.createElement("a",{href:"https://www.twitch.tv/fuslie",target:"_blank",rel:"noopener noreferrer"},"fuslie"),"for inspiring this project.")),c.a.createElement("p",null,e("about.partTwo")),c.a.createElement("p",null,e("about.partThree")),c.a.createElement("p",null,e("about.partFour")),c.a.createElement("p",null,e("about.partFive")),c.a.createElement("p",{className:m.AboutPanelOutro},"-"," ",c.a.createElement("a",{href:"https://github.com/Kedyn",target:"_blank",rel:"noopener noreferrer"},"Kedyn Macedonio")),c.a.createElement("hr",null),c.a.createElement("p",null,c.a.createElement("small",null,e("about.disclaimer"))))}},124:function(e,t,a){"use strict";a.r(t);var n=a(118),o=a(95),l=a(0),r=a.n(l),i=a(93);t.default=function(e){const{t:t}=Object(i.a)();return r.a.createElement(o.a,Object.assign({title:t("menu.about")},e),r.a.createElement(n.default,null))}},95:function(e,t,a){"use strict";var n=a(40),o=a(0),l=a.n(o),r=a(9),i=Object(r.d)(e=>({ModalBackdrop:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.9)",display:"flex",bottom:0,left:0,justifyContent:"center",position:"absolute",top:0,right:0,zIndex:1},Modal:{backgroundColor:e.backgroundColorPrimary,borderRadius:"0.5rem",display:"flex",width:"40rem",maxHeight:"90%",padding:"1rem 2rem"},ModalContent:{display:"flex",flexDirection:"column",alignItems:"stretch",width:"100%"},ModalHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid "+e.borderColor},ModalTitle:{fontSize:"2rem",fontWeight:200,letterSpacing:"0.05em"},ModalClose:{appearance:"none",borderRadius:"50%",display:"block",width:"2rem",lineHeight:"2rem",padding:0},ModalBody:{padding:"1rem 0",overflowY:"auto"},ModalFooter:{borderTop:"1px solid "+e.borderColor,padding:"1rem 0"}}));t.a=function(e){const{show:t,title:a,footer:o,children:r,onClose:s}=e;if(t){const e=i();return l.a.createElement("div",{className:e.ModalBackdrop,onClick:()=>s()},l.a.createElement("div",{className:e.Modal,onClick:e=>e.stopPropagation()},l.a.createElement("div",{className:e.ModalContent},l.a.createElement("div",{className:e.ModalHeader},l.a.createElement("h2",{className:e.ModalTitle},a),l.a.createElement(n.a,{onClick:()=>s()})),l.a.createElement("div",{className:e.ModalBody},r),void 0!==o&&l.a.createElement("div",{className:e.ModalFooter},o))))}return l.a.createElement(l.a.Fragment,null)}}}]);