(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),c=n.n(r),o=(n(11),"guest@nchaloult.com:~$"),i='Type: "help", then press Enter, for available commands',s=["How to Use Commands:","=======================================",'Type: "nick -a", then press Enter',"",'"nick" is the command you\'re invoking; "-a" is an option that sends specific instructions to the "nick" command.',"","","Available Commands and Their Options:","======================================="],u="a Computer Science student at Georgia Tech who is eager to learn about new technologies and best practices",m=" doesn't accept any arguments.",d=" isn't recognized or supported by: ",E="Command not found: ",p="nchaloult3@gatech.edu",v="https://www.github.com/nchaloult",b="https://www.linkedin.com/in/nicholas-chaloult",h="Nicholas Paul Chaloult",f="Click to view resume",g="v21-SNAPSHOT (21 years old)",k="cv.pdf",N={clear:"clear"+m,help:"help"+m,nick:{"":"Provide some arguments, like: -v","-a":[h,p,v,f],"--all":[h,p,v,f],"-e":p,"--email":p,"-g":v,"--github":v,"-l":b,"--linkedin":b,"-n":h,"--name":h,"-r":f,"--resume":f,"-v":g,"--version":g},whoami:"guest"};var w=function(){var e=l.a.createElement("p",null,"\xa0");return l.a.createElement("div",null,l.a.createElement("div",{className:"l-align"},"NICK(1)"),l.a.createElement("div",{className:"r-align"},"NICK(1)"),l.a.createElement("div",{className:"c-align"},"nchaloult.com General Commands Manual"),e,e,l.a.createElement("p",null,l.a.createElement("b",null,"NAME")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," -- ",u)),e,l.a.createElement("p",null,l.a.createElement("b",null,"SYNOPSIS")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," [",l.a.createElement("b",null,"-aeglnrv"),"]")),e,l.a.createElement("p",null,l.a.createElement("b",null,"DESCRIPTION")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," has a passion for learning about new technologies, and loves discovering better ways to do things. ",l.a.createElement("b",null,"nick"),"'s concentrations in school are Intelligence and Info & Internetworks. Expects to graduate in May of 2021.")),e,l.a.createElement("p",null,l.a.createElement("b",null,"OPTIONS")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"-a, --all")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints lots of Nick's important information to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-e, --email")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's email address to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-g, --github")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to Nick's Github profile to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-l, --linkedin")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to Nick's LinkedIn profile to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-n, --name")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's full name to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-r, --resume")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to view Nick's resume in PDF format to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-v, --version")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's current stable version (age) to the shell"))),e,e,l.a.createElement("div",{className:"l-align"},h),l.a.createElement("div",{className:"r-align"},"NICK(1)"))},y=n(2),O=n(1);var C=function(e){return l.a.createElement("div",{id:"prompt"},l.a.createElement("p",null,l.a.createElement("b",null,o)),l.a.createElement("form",{id:"prompt-input-form",onSubmit:e.submitCommand},l.a.createElement("input",{autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",type:"text",value:e.value,onChange:function(t){return e.updateCurInput(t.target.value)}})))};var j=function(){var e=Object(a.useState)([i]),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(O.a)(c,2),p=u[0],v=u[1],b=Object(a.useState)([""]),h=Object(O.a)(b,2),g=h[0],w=h[1],j=Object(a.useState)(0),P=Object(O.a)(j,2),S=P[0],I=P[1];Object(a.useEffect)((function(){return document.addEventListener("keydown",x),function(){document.removeEventListener("keydown",x)}}));var x=function(e){var t=e.key;"ArrowUp"===t?S>=g.length?(v(g[g.length-1]),I(g.length-1)):(v(g[S]),I(S+1)):"ArrowDown"===t&&(S<=0?(v(g[0]),I(0)):(v(g[S]),I(S-1)))},T=n.map((function(e){if(e.includes(o)){var t=e.indexOf(" "),n=e.substring(0,t);e=e.substring(t),e=l.a.createElement("span",null,l.a.createElement("b",null,n)," ",e)}else"http"===e.substring(0,4)?e=l.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e):e===f?e=l.a.createElement("a",{href:"/"+k,target:"_blank",rel:"noopener noreferrer"},e):""===e&&(e="\xa0");return l.a.createElement("p",{key:e.toString()},e)})),L=function(e,t){var a=[].concat(Object(y.a)(n),[t]),l=a;if("help"===e||-1!==e.indexOf(" ")&&e.includes("-help")){l=l.concat(s);for(var r=0,c=Object.keys(N);r<c.length;r++){var o=c[r];if(l=l.concat(o),A(N[o]))for(var i=0,u=Object.keys(N[o]);i<u.length;i++){var p=u[i];""!==p&&(l=l.concat("\xa0\xa0"+p))}}return l}if("clear"===e)return[];if(""===e)return l;var v=e.split(" "),b=v.shift();if(N.hasOwnProperty(b)){var h=N[b];if(1===v.length&&v[0].length>2&&1===(v[0].match(/-/g)||[]).length){var f=v[0].substring(1),g=!0,k=!1,w=void 0;try{for(var O,C=f[Symbol.iterator]();!(g=(O=C.next()).done);g=!0){var j="-"+O.value;if(!h.hasOwnProperty(j))return a.concat(j+d+b);l=l.concat(h[j])}}catch(D){k=!0,w=D}finally{try{g||null==C.return||C.return()}finally{if(k)throw w}}return l}if(0!==v.length||A(h)){if(v.length>0&&A(h)){var P=!0,S=!1,I=void 0;try{for(var x,T=v[Symbol.iterator]();!(P=(x=T.next()).done);P=!0){var L=x.value;if(!h.hasOwnProperty(L))return a.concat(L+d+b);l=l.concat(h[L])}}catch(D){S=!0,I=D}finally{try{P||null==T.return||T.return()}finally{if(S)throw I}}return l}return 0===v.length&&A(h)?l.concat(h[""]):l.concat(b+m)}return l.concat(h)}return l.concat(E+b)},A=function(e){return"[object Object]"===Object.prototype.toString.call(e)};return l.a.createElement("div",null,T,l.a.createElement(C,{value:p,updateCurInput:v,submitCommand:function(e){e.preventDefault();var t=p.toLowerCase().trim();""!==t&&g.length>0&&t!==g[0]&&w([t].concat(Object(y.a)(g))),I(0),r(L(t,o+" "+t)),v("")}}))};var P=function(){var e=Object(a.useRef)();Object(a.useEffect)((function(){return document.addEventListener("click",t),function(){document.removeEventListener("click",t)}}),[]);var t=function(t){e.current.contains(t.target)&&document.getElementById("prompt-input-form").elements[0].focus()};return l.a.createElement("div",{id:"container"},l.a.createElement("div",{ref:e,className:"outer-column"},l.a.createElement("div",{className:"inner-column"},l.a.createElement(j,null))),l.a.createElement("div",{className:"outer-column"},l.a.createElement("div",{className:"inner-column"},l.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.d3c7cb43.chunk.js.map