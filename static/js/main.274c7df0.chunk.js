(window.webpackJsonppersonalwebsite2019=window.webpackJsonppersonalwebsite2019||[]).push([[0],{34:function(e,t,a){},58:function(e,t,a){e.exports=a(84)},63:function(e,t,a){},74:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),l=a.n(c),o=(a(63),a(7)),i=a.n(o),s=a(15),d=a(8),u=a(10),m=a(12),h=a(11),p=a(13),f=a(28),E=a(87),g=a(86),b=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).generateOpener=function(){var e=(new Date).getHours();return e>=18?"Good Evening, I'm Brian!":e>=12?"Good Afternoon, I'm Brian!":e>=0?"Good Morning, I'm Brian!":"Hello, I'm Brian!"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.generateOpener();return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement("h1",null,e),r.a.createElement("h4",null,"I am currently a fourth year Computer Science and Engineering major at University of California, Los Angeles."),r.a.createElement("hr",null),r.a.createElement("p",null,"Besides learning how to code, I enjoy photography and traveling.")))}}]),t}(n.Component),v=a(116),w=a(88),C=a(89),O=a(90),j=a(91),k=a(92),y=a(93),x=a(94),D=a(95),S=function(e){return e.replace(/\s/g,"")},R=function(e){return e.sort(function(e,t){return e.data.name.toLowerCase().localeCompare(t.data.name.toLowerCase())})},N=function(e){return e.sort(function(e,t){return Number(t.data.order)-Number(e.data.order)})},I=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={experienceData:void 0,error:void 0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fbRef.get().then(function(t){var a=[];t.forEach(function(e){var t={id:e.id,data:e.data()};a.push(t)});var n=N(a);e.setState({experienceData:n})}).catch(function(t){console.error("Error getting documents",t),e.setState({error:t})})}},{key:"render",value:function(){if(void 0===this.state.experienceData)return this.state.error?r.a.createElement(v.a,{color:"danger"},"Failed to load data. Please try again later."):r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"spinner-center"}));var e=this.state.experienceData.map(function(e){var t=e.data;return r.a.createElement(w.a,{key:e.id},r.a.createElement(C.a,null,r.a.createElement(O.a,{className:"text-center"},t.name&&r.a.createElement(j.a,{tag:"h3"},t.name),t.title&&r.a.createElement(k.a,{tag:"h5",style:{paddingTop:"8px"}},t.title),t.start_date&&t.end_date&&r.a.createElement(y.a,null,r.a.createElement("em",null,t.start_date," - ",t.end_date)),t.location&&r.a.createElement(y.a,null,r.a.createElement("small",null,r.a.createElement("em",null,t.location))),t.description&&r.a.createElement(x.a,null,t.description))))});return r.a.createElement(D.a,null,e)}}]),t}(n.Component),A=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Projects Screen")}}]),t}(n.Component),T=a(96),U=(a(74),a(34),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(void 0===this.props.socialsData)return r.a.createElement(v.a,{color:"danger"},"Failed to load data. Please try again later.");var e=this.props.socialsData.map(function(e){var t=e.data;return r.a.createElement(w.a,{key:e.id},r.a.createElement(T.a,{href:t.link?t.link:"#",target:"_blank",rel:"noopener noreferrer",className:"media-all"},e.data.icon&&r.a.createElement(T.a,{left:!0},r.a.createElement(T.a,{object:!0,src:t.icon,alt:t.name?t.name:"company icon",className:"icon-img"})),r.a.createElement("h3",{className:"icon-name"},t.name)))});return r.a.createElement(D.a,null,e)}}]),t}(n.Component)),P=a(97),B=a(98),F=a(99),_=a(100),L=a(101),M=a(4),H=a.n(M),W=a(33),z=a.n(W),G=(a(75),a(77),a(85),{apiKey:"AIzaSyBqINJdrge1lm3bB3xGmfM_2VATpf3aFag",authDomain:"personalwebsite2019-d87ab.firebaseapp.com",databaseURL:"https://personalwebsite2019-d87ab.firebaseio.com",projectId:"personalwebsite2019-d87ab",storageBucket:"gs://personalwebsite2019-d87ab.appspot.com/",messagingSenderId:"870102134037",appId:"1:870102134037:web:0b714c8e3e279024"}),J=new function e(){var t=this;Object(d.a)(this,e),this.handleSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.handleSignOut=function(){return t.auth.signOut()},this.getCurrentUser=function(){return t.auth.currentUser},this.isUserLoggedIn=function(){return!!t.auth.currentUser},z.a.initializeApp(G),this.auth=z.a.auth(),this.db=z.a.firestore(),this.experienceRef=this.db.collection("experiences"),this.projectsRef=this.db.collection("projects"),this.socialsRef=this.db.collection("socials"),this.coursesRef=this.db.collection("courses"),this.clubsRef=this.db.collection("clubs"),this.awardsRef=this.db.collection("awards"),this.storageRef=z.a.storage().ref()},Z=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t.name),r.a.createElement("h5",null,t.desc),r.a.createElement("hr",null))},$=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggle=function(e){a.state.activeTab!==e&&a.setState({activeTab:e})},a.state={activeTab:"1",currentCoursesData:void 0,completedCoursesData:void 0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.coursesRef.get().then(function(t){var a=[];t.forEach(function(e){var t={id:e.id,data:e.data()};a.push(t)});var n=R(a),r=[],c=[];n.forEach(function(e){"0"===e.data.current?c.push(e):r.push(e)}),e.setState({currentCoursesData:r,completedCoursesData:c})}).catch(function(t){console.error("Error getting documents",t),e.setState({error:t})})}},{key:"render",value:function(){var e=this;return this.state.currentCoursesData||this.state.completedCoursesData?r.a.createElement("div",null,r.a.createElement(P.a,{tabs:!0},r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Completed Courses")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Current Courses"))),r.a.createElement(_.a,{activeTab:this.state.activeTab},r.a.createElement(L.a,{tabId:"1"},0!==this.state.completedCoursesData.length?this.state.completedCoursesData.map(function(e){return r.a.createElement(Z,{key:e.id,data:e.data})}):"Something went wrong..."),r.a.createElement(L.a,{tabId:"2"},0!==this.state.currentCoursesData.length?this.state.currentCoursesData.map(function(e){return r.a.createElement(Z,{key:e.id,data:e.data})}):"There are no relevant classes that I am currently taking."))):r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"spinner-center"}))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).separateAwarded=function(e){var t=e.split(",").map(function(e){return e.trim()}).map(function(e){return r.a.createElement(w.a,null,e)});return r.a.createElement(D.a,{flush:!0},t)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;if(void 0===this.props.awardsData)return r.a.createElement(v.a,{color:"danger"},"Failed to load data. Please try again later.");var t=this.props.awardsData.map(function(t){var a=t.data;return r.a.createElement(w.a,{key:t.id},r.a.createElement(C.a,null,r.a.createElement(O.a,{className:"text-center"},a.name&&r.a.createElement(j.a,{tag:"h3"},a.name),a.description&&r.a.createElement(y.a,{style:{paddingTop:"8px"}},a.description),r.a.createElement("p",{style:{paddingTop:"15px"}},"Awarded:"),a.awarded&&e.separateAwarded(a.awarded))))});return r.a.createElement(D.a,null,t)}}]),t}(n.Component),K=a(52),V=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).loadFile=Object(s.a)(i.a.mark(function e(){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=J.storageRef.child("BrianChanResume.pdf"),n=!1,e.next=4,t.getDownloadURL().then(function(e){r=e}).catch(function(e){console.error(e),n=e.code});case 4:a.setState({downloadUrl:r,error:n});case 5:case"end":return e.stop()}},e)})),a.state={downloadUrl:void 0,error:void 0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.downloadUrl||this.state.error||this.loadFile(),this.state.error?r.a.createElement("h1",null,"An error has occurred with loading the pdf. Please try again later."):r.a.createElement(K.a,{url:this.state.downloadUrl,width:"100%",height:window.innerHeight,display:"initial","padding-top":"60px",position:"relative"})}}]),t}(n.Component),Q=a(22),X=a(102),Y=a(103),ee=a(104),te=a(105),ae=a(106),ne=a(53),re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ce=function(e){return re.test(e)},le=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(){var e=Object(s.a)(i.a.mark(function e(t){var n,r,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.state,r=n.email,c=n.password,ce(r.toLowerCase())?J.handleSignInWithEmailAndPassword(r,c).then(function(){console.log("success"),a.props.history.push("/admin-edit")}).catch(function(e){console.log("error",e);var t=e.code,n=e.message;"auth/wrong-password"===t?a.setState({invalidPassword:n}):"auth/invalid-email"!==t&&"auth/user-disabled"!==t&&"auth/user-not-found"!==t||a.setState({invalidEmail:n})}):a.setState({invalidEmail:"This does not look like an email address. Please try again."}),t.preventDefault();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState(Object(Q.a)({invalidEmail:"",invalidPassword:""},e.target.id,e.target.value))},a.state={email:"",password:"",invalidEmail:"",invalidPassword:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(X.a,null,r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"email"},"Admin Email"),""!==this.state.invalidEmail?r.a.createElement(te.a,{invalid:!0,type:"email",name:"email",id:"email",onChange:this.handleChange}):r.a.createElement(te.a,{type:"email",name:"email",id:"email",onChange:this.handleChange}),""!==this.state.invalidEmail&&r.a.createElement(ae.a,null,this.state.invalidEmail)),r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"password"},"Admin Password"),""!==this.state.invalidPassword?r.a.createElement(te.a,{invalid:!0,type:"password",name:"password",id:"password",onChange:this.handleChange}):r.a.createElement(te.a,{type:"password",name:"password",id:"password",onChange:this.handleChange}),""!==this.state.invalidPassword&&r.a.createElement(ae.a,null,this.state.invalidPassword)),r.a.createElement(ne.a,{onClick:this.onSubmit},"Submit"))}}]),t}(n.Component),oe=a(23),ie=a(107),se=a(108),de=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleUpdate=Object(s.a)(i.a.mark(function e(){var t,n,r,c,l,o,s,d,u,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",t=a.props.addition?"addition":S(a.props.item.data.name),n={},r=0,c=Object.entries(a.state);r<c.length;r++)l=c[r],o=Object(oe.a)(l,2),s=o[0],d=o[1],u=s.replace(t,""),n[u]=d;return m=a.props.fbRef.doc(a.props.item.id),e.prev=5,e.next=8,m.update(n);case 8:console.log("Successfully updated"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.error("Error updating document: ",e.t0);case 14:case"end":return e.stop()}},e,null,[[5,11]])})),a.handleDelete=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.item.id,e.next=3,a.props.fbRef.doc(t).delete().then(function(){console.log("Successfully deleted ",t)}).catch(function(e){console.error("Error deleting document: ",e)});case 3:case"end":return e.stop()}},e)})),a.handleNewSubmission=Object(s.a)(i.a.mark(function e(){var t,n,r,c,l,o,s,d,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",t=a.props.addition?"addition":S(a.props.item.data.name),n={},r=0,c=Object.entries(a.state);r<c.length;r++)l=c[r],o=Object(oe.a)(l,2),s=o[0],d=o[1],u=s.replace(t,""),n[u]=d;return e.next=6,a.props.fbRef.add(n).then(function(e){console.log("Document written with id ",e.id)}).catch(function(e){console.error("Error adding new document: ",e)});case 6:case"end":return e.stop()}},e)})),a.state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="",t=this.props.item;return e=this.props.addition?"addition":S(t.data.name),r.a.createElement(X.a,null,r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"name"},"Name"),r.a.createElement(te.a,{type:"text",name:"name",id:"name"+e,placeholder:t?t.data.name:"",onChange:this.handleChange}))),r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"location"},"Location"),r.a.createElement(te.a,{type:"text",name:"location",id:"location"+e,placeholder:t?t.data.location:"",onChange:this.handleChange})))),r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"start_date"},"Start Date"),r.a.createElement(te.a,{type:"text",name:"start_date",id:"start_date"+e,placeholder:t?t.data.start_date:"",onChange:this.handleChange}))),r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"end_date"},"End Date"),r.a.createElement(te.a,{type:"text",name:"end_date",id:"end_date"+e,placeholder:t?t.data.end_date:"",onChange:this.handleChange})))),r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"title"},"Title"),r.a.createElement(te.a,{type:"text",name:"title",id:"title"+e,placeholder:t?t.data.title:"",onChange:this.handleChange}))),r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"order"},"Order"),r.a.createElement(te.a,{type:"number",name:"order",id:"order"+e,placeholder:t?t.data.order:"",onChange:this.handleChange})))),r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"description"},"Description"),r.a.createElement(te.a,{type:"textarea",name:"description",id:"description"+e,placeholder:t?t.data.description:"",onChange:this.handleChange})),this.props.addition?r.a.createElement(ie.a,null,r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleNewSubmission},"Add"))):r.a.createElement(ie.a,null,r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleUpdate},"Update")),r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleDelete},"Delete"))))}}]),t}(n.Component),ue=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleUpdate=Object(s.a)(i.a.mark(function e(){var t,n,r,c,l,o,s,d,u,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",t=a.props.addition?"addition":S(a.props.item.data.name),n={},r=0,c=Object.entries(a.state);r<c.length;r++)l=c[r],o=Object(oe.a)(l,2),s=o[0],d=o[1],u=s.replace(t,""),n[u]=d;return m=J.socialsRef.doc(a.props.item.id),e.prev=5,e.next=8,m.update(n);case 8:console.log("Successfully updated"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.error("Error updating document: ",e.t0);case 14:case"end":return e.stop()}},e,null,[[5,11]])})),a.handleDelete=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.item.id,e.next=3,J.socialsRef.doc(t).delete().then(function(){console.log("Successfully deleted ",t)}).catch(function(e){console.error("Error deleting document: ",e)});case 3:case"end":return e.stop()}},e)})),a.handleNewSubmission=Object(s.a)(i.a.mark(function e(){var t,n,r,c,l,o,s,d,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",t=a.props.addition?"addition":S(a.props.item.data.name),n={},r=0,c=Object.entries(a.state);r<c.length;r++)l=c[r],o=Object(oe.a)(l,2),s=o[0],d=o[1],u=s.replace(t,""),n[u]=d;return e.next=6,J.socialsRef.add(n).then(function(e){console.log("Document written with id ",e.id)}).catch(function(e){console.error("Error adding new document: ",e)});case 6:case"end":return e.stop()}},e)})),a.state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="",t=this.props.item;return e=this.props.addition?"addition":S(t.data.name),r.a.createElement(X.a,null,r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"name"},"Name"),r.a.createElement(te.a,{type:"text",name:"name",id:"name"+e,placeholder:t?t.data.name:"",onChange:this.handleChange}))),r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"icon"},"Icon"),r.a.createElement(te.a,{type:"text",name:"icon",id:"icon"+e,placeholder:t?t.data.icon:"",onChange:this.handleChange})))),r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:12},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"link"},"Link"),r.a.createElement(te.a,{type:"text",name:"link",id:"link"+e,placeholder:t?t.data.link:"",onChange:this.handleChange})))),this.props.addition?r.a.createElement(ie.a,null,r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleNewSubmission},"Add"))):r.a.createElement(ie.a,null,r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleUpdate},"Update")),r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleDelete},"Delete"))))}}]),t}(n.Component),me=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).checkFile=function(){0===document.getElementById("file").files.length&&a.setState({noFile:!0}),a.setState({noFile:!1,success:!1})},a.handleSubmit=Object(s.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.noFile){e.next=2;break}return e.abrupt("return");case 2:return t=document.getElementById("file").files[0],n=J.storageRef.child("BrianChanResume.pdf"),e.next=6,n.put(t).then(function(e){console.log("Uploaded file successfully")});case 6:a.setState({success:!0});case 7:case"end":return e.stop()}},e)})),a.state={noFile:!0,success:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"upload-resume"},this.state.success&&r.a.createElement(v.a,{color:"success"},"File upload successful."),this.state.noFile&&r.a.createElement(v.a,{color:"danger"},"No file currently selected for upload."),r.a.createElement("input",{type:"file",id:"file",className:"input-file",accept:".pdf",onChange:this.checkFile}),r.a.createElement(ne.a,{onClick:this.handleSubmit},"Update"))}}]),t}(n.Component),he=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleUpdate=Object(s.a)(i.a.mark(function e(){var t,n,r,c,l,o,s,d,u,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",t=a.props.addition?"addition":S(a.props.item.data.name),n={},r=0,c=Object.entries(a.state);r<c.length;r++)l=c[r],o=Object(oe.a)(l,2),s=o[0],d=o[1],u=s.replace(t,""),n[u]=d;return m=J.coursesRef.doc(a.props.item.id),e.prev=5,e.next=8,m.update(n);case 8:console.log("Successfully updated"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.error("Error updating document: ",e.t0);case 14:case"end":return e.stop()}},e,null,[[5,11]])})),a.handleDelete=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.item.id,e.next=3,J.coursesRef.doc(t).delete().then(function(){console.log("Successfully deleted ",t)}).catch(function(e){console.error("Error deleting document: ",e)});case 3:case"end":return e.stop()}},e)})),a.handleNewSubmission=Object(s.a)(i.a.mark(function e(){var t,n,r,c,l,o,s,d,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",t=a.props.addition?"addition":S(a.props.item.data.name),n={},r=0,c=Object.entries(a.state);r<c.length;r++)l=c[r],o=Object(oe.a)(l,2),s=o[0],d=o[1],u=s.replace(t,""),n[u]=d;return e.next=6,J.coursesRef.add(n).then(function(e){console.log("Document written with id ",e.id)}).catch(function(e){console.error("Error adding new document: ",e)});case 6:case"end":return e.stop()}},e)})),a.state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="",t=this.props.item;return e=this.props.addition?"addition":S(t.data.name),r.a.createElement(X.a,null,r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"name"},"Course Name"),r.a.createElement(te.a,{type:"text",name:"name",id:"name"+e,placeholder:t?t.data.name:"",onChange:this.handleChange}))),r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"desc"},"Course Description"),r.a.createElement(te.a,{type:"text",name:"desc",id:"desc"+e,placeholder:t?t.data.desc:"",onChange:this.handleChange})))),r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"current"},"Current"),r.a.createElement(te.a,{type:"number",name:"current",id:"current"+e,placeholder:t?t.data.current:"",onChange:this.handleChange})))),this.props.addition?r.a.createElement(ie.a,null,r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleNewSubmission},"Add"))):r.a.createElement(ie.a,null,r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleUpdate},"Update")),r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleDelete},"Delete"))))}}]),t}(n.Component),pe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleUpdate=Object(s.a)(i.a.mark(function e(){var t,n,r,c,l,o,s,d,u,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",t=a.props.addition?"addition":S(a.props.item.data.name),n={},r=0,c=Object.entries(a.state);r<c.length;r++)l=c[r],o=Object(oe.a)(l,2),s=o[0],d=o[1],u=s.replace(t,""),n[u]=d;return m=J.awardsRef.doc(a.props.item.id),e.prev=5,e.next=8,m.update(n);case 8:console.log("Successfully updated"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.error("Error updating document: ",e.t0);case 14:case"end":return e.stop()}},e,null,[[5,11]])})),a.handleDelete=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.item.id,e.next=3,J.awardsRef.doc(t).delete().then(function(){console.log("Successfully deleted ",t)}).catch(function(e){console.error("Error deleting document: ",e)});case 3:case"end":return e.stop()}},e)})),a.handleNewSubmission=Object(s.a)(i.a.mark(function e(){var t,n,r,c,l,o,s,d,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",t=a.props.addition?"addition":S(a.props.item.data.name),n={},r=0,c=Object.entries(a.state);r<c.length;r++)l=c[r],o=Object(oe.a)(l,2),s=o[0],d=o[1],u=s.replace(t,""),n[u]=d;return e.next=6,J.awardsRef.add(n).then(function(e){console.log("Document written with id ",e.id)}).catch(function(e){console.error("Error adding new document: ",e)});case 6:case"end":return e.stop()}},e)})),a.state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="",t=this.props.item;return e=this.props.addition?"addition":S(t.data.name),r.a.createElement(X.a,null,r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"name"},"Award Name"),r.a.createElement(te.a,{type:"text",name:"name",id:"name"+e,placeholder:t?t.data.name:"",onChange:this.handleChange}))),r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"desc"},"Award Description"),r.a.createElement(te.a,{type:"text",name:"description",id:"description"+e,placeholder:t?t.data.description:"",onChange:this.handleChange})))),r.a.createElement(ie.a,{form:!0},r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"current"},"Order"),r.a.createElement(te.a,{type:"number",name:"order",id:"order"+e,placeholder:t?t.data.order:"",onChange:this.handleChange}))),r.a.createElement(se.a,{md:6},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{for:"current"},"Awarded when"),r.a.createElement(te.a,{type:"text",name:"awarded",id:"awarded"+e,placeholder:t?t.data.awarded:"",onChange:this.handleChange})))),this.props.addition?r.a.createElement(ie.a,null,r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleNewSubmission},"Add"))):r.a.createElement(ie.a,null,r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleUpdate},"Update")),r.a.createElement(se.a,{sm:6},r.a.createElement(ne.a,{onClick:this.handleDelete},"Delete"))))}}]),t}(n.Component),fe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggle=function(e){a.state.activeTab!==e&&a.setState({activeTab:e})},a.onSubmit=function(e){J.handleSignOut().then(function(){console.log("Successfully logged out"),a.props.history.push("/")}).catch(function(e){console.error("Sign out error: ",e)}),e.preventDefault()},a.state={activeTab:"1",experienceData:void 0,socialsData:void 0,coursesData:void 0,clubsData:void 0,awardsData:void 0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.experienceRef.get().then(function(t){var a=[];t.forEach(function(e){var t={id:e.id,data:e.data()};a.push(t)}),e.setState({experienceData:a})}).catch(function(e){console.error("Error getting documents",e)}),J.socialsRef.get().then(function(t){var a=[];t.forEach(function(e){var t={id:e.id,data:e.data()};a.push(t)}),e.setState({socialsData:a})}).catch(function(e){console.error("Error getting documents",e)}),J.coursesRef.get().then(function(t){var a=[];t.forEach(function(e){var t={id:e.id,data:e.data()};a.push(t)}),e.setState({coursesData:a})}).catch(function(e){console.error("Error getting documents",e)}),J.clubsRef.get().then(function(t){var a=[];t.forEach(function(e){var t={id:e.id,data:e.data()};a.push(t)}),e.setState({clubsData:a})}).catch(function(e){console.error("Error getting documents",e)}),J.awardsRef.get().then(function(t){var a=[];t.forEach(function(e){var t={id:e.id,data:e.data()};a.push(t)}),e.setState({awardsData:a})}).catch(function(e){console.error("Error getting documents",e)})}},{key:"render",value:function(){var e=this,t=this.state.experienceData?this.state.experienceData.map(function(e){return r.a.createElement(de,{key:e.id,item:e,fbRef:J.experienceRef})}):r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"spinner-center"})),a=this.state.socialsData?this.state.socialsData.map(function(e){return r.a.createElement(ue,{key:e.id,item:e})}):r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"spinner-center"})),n=this.state.coursesData?this.state.coursesData.map(function(e){return r.a.createElement(he,{key:e.id,item:e})}):r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"spinner-center"})),c=this.state.clubsData?this.state.clubsData.map(function(e){return r.a.createElement(de,{key:e.id,item:e,fbRef:J.clubsRef})}):r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"spinner-center"})),l=this.state.awardsData?this.state.awardsData.map(function(e){return r.a.createElement(pe,{key:e.id,item:e})}):r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"spinner-center"}));return r.a.createElement("div",null,r.a.createElement(P.a,{tabs:!0},r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Home")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Experience")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Projects")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"4"===this.state.activeTab}),onClick:function(){e.toggle("4")}},"Coursework")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"5"===this.state.activeTab}),onClick:function(){e.toggle("5")}},"Extracurriculars")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"6"===this.state.activeTab}),onClick:function(){e.toggle("6")}},"Skills")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"7"===this.state.activeTab}),onClick:function(){e.toggle("7")}},"Resume")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"8"===this.state.activeTab}),onClick:function(){e.toggle("8")}},"Socials")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"9"===this.state.activeTab}),onClick:function(){e.toggle("9")}},"Awards")),r.a.createElement(B.a,null,r.a.createElement(F.a,{className:H()({active:"10"===this.state.activeTab}),onClick:function(){e.toggle("10")}},"Sign Out"))),r.a.createElement(_.a,{activeTab:this.state.activeTab},r.a.createElement(L.a,{tabId:"1"},r.a.createElement("h1",null,"Home Edit")),r.a.createElement(L.a,{tabId:"2"},r.a.createElement("div",null,t,r.a.createElement(de,{addition:!0,fbRef:J.experienceRef}))),r.a.createElement(L.a,{tabId:"3"},r.a.createElement("h1",null,"Projects edit")),r.a.createElement(L.a,{tabId:"4"},r.a.createElement("div",null,n,r.a.createElement(he,{addition:!0}))),r.a.createElement(L.a,{tabId:"5"},c,r.a.createElement(de,{addition:!0,fbRef:J.clubsRef})),r.a.createElement(L.a,{tabId:"6"},r.a.createElement("h1",null,"Skills edit")),r.a.createElement(L.a,{tabId:"7"},r.a.createElement("div",null,r.a.createElement(me,null))),r.a.createElement(L.a,{tabId:"8"},r.a.createElement("div",null,a,r.a.createElement(ue,{addition:!0}))),r.a.createElement(L.a,{tabId:"9"},l,r.a.createElement(pe,{addition:!0})),r.a.createElement(L.a,{tabId:"10"},r.a.createElement(X.a,null,r.a.createElement(ne.a,{onClick:this.onSubmit},"Sign Out")))))}}]),t}(n.Component),Ee=a(109),ge=a(110),be=a(111),ve=a(112),we=a(117),Ce=a(113),Oe=a(114),je=a(115),ke=a(18),ye=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.toggleCond=function(){a.state.isOpen&&a.setState({isOpen:!1})},a.state={isOpen:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.auth.onAuthStateChanged(function(t){t?(console.log("user is logged in"),e.setState({user:t})):(console.log("user is not logged in"),e.setState({user:void 0}))})}},{key:"render",value:function(){return r.a.createElement(Ee.a,{color:"light",light:!0,fixed:"top",expand:"md"},r.a.createElement(ge.a,{tag:ke.b,to:"/"},"Brian Chan"),r.a.createElement(be.a,{onClick:this.toggle}),r.a.createElement(ve.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(P.a,{className:"ml-auto",navbar:!0},r.a.createElement(B.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/experience/",onClick:this.toggleCond},"Experience")),r.a.createElement(B.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/projects/",onClick:this.toggleCond},"Projects")),r.a.createElement(we.a,{nav:!0,inNavbar:!0},r.a.createElement(Ce.a,{nav:!0,caret:!0},"Education"),r.a.createElement(Oe.a,{right:!0},r.a.createElement(je.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/courses/",onClick:this.toggleCond},"Relevant Coursework")),r.a.createElement(je.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/clubs/",onClick:this.toggleCond},"Extracurriculars")),r.a.createElement(je.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/awards/",onClick:this.toggleCond},"Awards")))),r.a.createElement(B.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/skills/",onClick:this.toggleCond},"Skills")),r.a.createElement(B.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/resume/",onClick:this.toggleCond},"Resume")),r.a.createElement(B.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/contacts/",onClick:this.toggleCond},"Contact Me")),J.isUserLoggedIn()&&r.a.createElement(B.a,null,r.a.createElement(F.a,{tag:ke.b,to:"/admin-edit/",onClick:this.toggleCond},"Edit")))))}}]),t}(n.Component),xe=a(57),De=function(e){e.component;var t=Object(xe.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},t,{render:function(e){return J.isUserLoggedIn()?r.a.createElement(fe,e):r.a.createElement(f.a,{to:{pathname:"/",state:{from:e.location}}})}}))},Se=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(s.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return J.auth.onAuthStateChanged(function(e){e?console.log("user is logged in"):console.log("user is not logged in")}),t=[],n=[],e.next=5,J.awardsRef.get().then(function(e){var a=[];e.forEach(function(e){var t={id:e.id,data:e.data()};a.push(t)});var n=N(a);t=n}).catch(function(e){console.error("Error getting documents",e),t=void 0});case 5:return e.next=7,J.socialsRef.get().then(function(e){var t=[];e.forEach(function(e){var a={id:e.id,data:e.data()};t.push(a)});var a=R(t);n=a}).catch(function(e){console.error("Error getting documents",e),n=void 0});case 7:a.setState({awardsData:t,socialsData:n,isLoading:!1});case 8:case"end":return e.stop()}},e)})),a.state={awardsData:void 0,socialsData:void 0,isLoading:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ye,null),this.state.isLoading?r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",className:"spinner-center"})):r.a.createElement("div",{className:"site_container"},r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,component:b}),r.a.createElement(f.b,{path:"/experience/",component:function(){return r.a.createElement(I,{fbRef:J.experienceRef})}}),r.a.createElement(f.b,{path:"/projects/",component:A}),r.a.createElement(f.b,{path:"/courses/",component:$}),r.a.createElement(f.b,{path:"/clubs/",component:function(){return r.a.createElement(I,{fbRef:J.clubsRef})}}),r.a.createElement(f.b,{path:"/awards/",render:function(){return r.a.createElement(q,{awardsData:e.state.awardsData})}}),r.a.createElement(f.b,{path:"/contacts/",render:function(){return r.a.createElement(U,{socialsData:e.state.socialsData})}}),r.a.createElement(f.b,{path:"/resume/",component:V}),r.a.createElement(f.b,{path:"/admin/",exact:!0,component:le}),r.a.createElement(De,{path:"/admin-edit",component:fe}),r.a.createElement(f.a,{to:"/"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(83);l.a.render(r.a.createElement(ke.a,{basename:"/"},r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.274c7df0.chunk.js.map