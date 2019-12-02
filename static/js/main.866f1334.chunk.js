(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),c=n.n(r),o=(n(11),{prompt:"guest@nchaloult.com:~$",welcomeMessage:'Type: "help", then press Enter, for available commands',availableCommandsMessage:["How to Use Commands:","=======================================",'Type: "nick -a", then press Enter',"",'"nick" is the command you\'re invoking; "-a" is an option that sends specific instructions to the "nick" command.',"","","Available Commands and Their Options:","======================================="],shortDesc:"a Computer Science student at Georgia Tech who is eager to learn about new technologies and best practices",acceptsNoArgsWarning:" doesn't accept any arguments.",argNotRecognizedWarning:" isn't recognized or supported by: ",commandNotFound:"Command not found: ",email:"nchaloult3@gatech.edu",github:"https://www.github.com/nchaloult",linkedin:"https://www.linkedin.com/in/nicholas-chaloult",fullName:"Nicholas Paul Chaloult",resumeResponse:"Click to view resume",version:"v21-SNAPSHOT (21 years old)"}),i={clear:"clear"+o.acceptsNoArgsWarning,help:"help"+o.acceptsNoArgsWarning,nick:{"":"Provide some arguments, like: -v","-a":[o.fullName,o.email,o.github,o.resumeResponse],"--all":[o.fullName,o.email,o.github,o.resumeResponse],"-e":o.email,"--email":o.email,"-g":o.github,"--github":o.github,"-l":o.linkedin,"--linkedin":o.linkedin,"-n":o.fullName,"--name":o.fullName,"-r":o.resumeResponse,"--resume":o.resumeResponse,"-v":o.version,"--version":o.version},whoami:"guest"};var s=function(){var e=l.a.createElement("p",null,"\xa0");return l.a.createElement("div",null,l.a.createElement("div",{className:"l-align"},"NICK(1)"),l.a.createElement("div",{className:"r-align"},"NICK(1)"),l.a.createElement("div",{className:"c-align"},"nchaloult.com General Commands Manual"),e,e,l.a.createElement("p",null,l.a.createElement("b",null,"NAME")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," -- ",o.shortDesc)),e,l.a.createElement("p",null,l.a.createElement("b",null,"SYNOPSIS")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," [",l.a.createElement("b",null,"-aeglnrv"),"]")),e,l.a.createElement("p",null,l.a.createElement("b",null,"DESCRIPTION")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," has a passion for learning about new technologies, and loves discovering better ways to do things. ",l.a.createElement("b",null,"nick"),"'s concentrations in school are Intelligence and Info & Internetworks. Expects to graduate in May of 2021.")),e,l.a.createElement("p",null,l.a.createElement("b",null,"OPTIONS")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"-a, --all")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints lots of Nick's important information to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-e, --email")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's email address to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-g, --github")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to Nick's Github profile to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-l, --linkedin")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to Nick's LinkedIn profile to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-n, --name")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's full name to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-r, --resume")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to view Nick's resume in PDF format to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-v, --version")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's current stable version (age) to the shell"))),e,e,l.a.createElement("div",{className:"l-align"},o.fullName),l.a.createElement("div",{className:"r-align"},"NICK(1)"))},m=n(2),u=n(1);var d=function(e){return l.a.createElement("div",{id:"prompt"},l.a.createElement("p",null,l.a.createElement("b",null,o.prompt)),l.a.createElement("form",{id:"prompt-input-form",onSubmit:e.submitCommand},l.a.createElement("input",{autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",type:"text",value:e.value,onChange:function(t){return e.updateCurInput(t.target.value)}})))};var p=function(){var e=Object(a.useState)([o.welcomeMessage]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),p=s[0],v=s[1],b=Object(a.useState)([""]),h=Object(u.a)(b,2),E=h[0],f=h[1],g=Object(a.useState)(0),N=Object(u.a)(g,2),k=N[0],w=N[1];Object(a.useEffect)(function(){return document.addEventListener("keydown",y),function(){document.removeEventListener("keydown",y)}});var y=function(e){var t=e.key;"ArrowUp"===t?k>=E.length?(v(E[E.length-1]),w(E.length-1)):(v(E[k]),w(k+1)):"ArrowDown"===t&&(k<=0?(v(E[0]),w(0)):(v(E[k]),w(k-1)))},O=n.map(function(e){if(e.includes(o.prompt)){var t=e.indexOf(" "),n=e.substring(0,t);e=e.substring(t),e=l.a.createElement("span",null,l.a.createElement("b",null,n)," ",e)}else"http"===e.substring(0,4)?e=l.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e):e===o.resumeResponse?e=l.a.createElement("a",{href:"/nick_chaloult.pdf",target:"_blank",rel:"noopener noreferrer"},e):""===e&&(e="\xa0");return l.a.createElement("p",{key:e.toString()},e)}),C=function(e,t){var a=[].concat(Object(m.a)(n),[t]),l=a;if("help"===e||-1!==e.indexOf(" ")&&e.includes("-help")){l=l.concat(o.availableCommandsMessage);for(var r=0,c=Object.keys(i);r<c.length;r++){var s=c[r];if(l=l.concat(s),j(i[s]))for(var u=0,d=Object.keys(i[s]);u<d.length;u++){var p=d[u];""!==p&&(l=l.concat("\xa0\xa0"+p))}}return l}if("clear"===e)return[];if(""===e)return l;var v=e.split(" "),b=v.shift();if(i.hasOwnProperty(b)){var h=i[b];if(1===v.length&&v[0].length>2&&1===(v[0].match(/-/g)||[]).length){var E=v[0].substring(1),f=!0,g=!1,N=void 0;try{for(var k,w=E[Symbol.iterator]();!(f=(k=w.next()).done);f=!0){var y="-"+k.value;if(!h.hasOwnProperty(y))return a.concat(y+o.argNotRecognizedWarning+b);l=l.concat(h[y])}}catch(A){g=!0,N=A}finally{try{f||null==w.return||w.return()}finally{if(g)throw N}}return l}if(0!==v.length||j(h)){if(v.length>0&&j(h)){var O=!0,C=!1,P=void 0;try{for(var S,I=v[Symbol.iterator]();!(O=(S=I.next()).done);O=!0){var R=S.value;if(!h.hasOwnProperty(R))return a.concat(R+o.argNotRecognizedWarning+b);l=l.concat(h[R])}}catch(A){C=!0,P=A}finally{try{O||null==I.return||I.return()}finally{if(C)throw P}}return l}return 0===v.length&&j(h)?l.concat(h[""]):l.concat(b+o.acceptsNoArgsWarning)}return l.concat(h)}return l.concat(o.commandNotFound+b)},j=function(e){return"[object Object]"===Object.prototype.toString.call(e)};return l.a.createElement("div",null,O,l.a.createElement(d,{value:p,updateCurInput:v,submitCommand:function(e){e.preventDefault();var t=p.toLowerCase().trim();""!==t&&E.length>0&&t!==E[0]&&f([t].concat(Object(m.a)(E))),w(0);var n=o.prompt+" "+t;r(C(t,n)),v("")}}))};var v=function(){var e=Object(a.useRef)();Object(a.useEffect)(function(){return document.addEventListener("click",t),function(){document.removeEventListener("click",t)}},[]);var t=function(t){e.current.contains(t.target)&&document.getElementById("prompt-input-form").elements[0].focus()};return l.a.createElement("div",{id:"container"},l.a.createElement("div",{ref:e,className:"outer-column"},l.a.createElement("div",{className:"inner-column"},l.a.createElement(p,null))),l.a.createElement("div",{className:"outer-column"},l.a.createElement("div",{className:"inner-column"},l.a.createElement(s,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.866f1334.chunk.js.map