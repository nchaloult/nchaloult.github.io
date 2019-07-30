(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(12),{prompt:"guest@nchaloult.com:~$",welcomeMessage:'Type "help" for available commands',availableCommandsMessage:["Available commands and their arguments:","======================================="],shortDesc:"a Computer Science student at Georgia Tech who is eager to learn and thinks ahead",acceptsNoArgsWarning:" doesn't accept any arguments.",argNotRecognizedWarning:" isn't recognized or supported by: ",commandNotFound:"Command not found: ",email:"nchaloult3@gatech.edu",github:"https://www.github.com/nchaloult",linkedin:"https://www.linkedin.com/in/nicholas-chaloult",fullName:"Nicholas Paul Chaloult",resumeResponse:"Click to view resume",version:"v20-SNAPSHOT (20 years old)"}),i={clear:"clear"+o.acceptsNoArgsWarning,help:"help"+o.acceptsNoArgsWarning,nick:{"":"Provide some arguments, like: -v","-a":[o.fullName,o.email,o.github,o.resumeResponse],"--all":[o.fullName,o.email,o.github,o.resumeResponse],"-e":o.email,"--email":o.email,"-g":o.github,"--github":o.github,"-l":o.linkedin,"--linkedin":o.linkedin,"-n":o.fullName,"--name":o.fullName,"-r":o.resumeResponse,"--resume":o.resumeResponse,"-v":o.version,"--version":o.version},whoami:o.fullName+": "+o.shortDesc};var s=function(){var e=l.a.createElement("p",null,"\xa0");return l.a.createElement("div",null,l.a.createElement("div",{className:"l-align"},"NICK(7)"),l.a.createElement("div",{className:"r-align"},"NICK(7)"),l.a.createElement("div",{className:"c-align"},"nchaloult.com General Commands Manual"),e,e,l.a.createElement("p",null,l.a.createElement("b",null,"NAME")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," -- ",o.shortDesc)),e,l.a.createElement("p",null,l.a.createElement("b",null,"SYNOPSIS")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," [",l.a.createElement("b",null,"-a"),"]"),l.a.createElement("p",null,l.a.createElement("b",null,"nick")," [",l.a.createElement("b",null,"-rg"),"]")),e,l.a.createElement("p",null,l.a.createElement("b",null,"DESCRIPTION")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"nick")," has a passion for learning about new technologies, and loves discovering better ways to do things. ",l.a.createElement("b",null,"nick"),"'s concentrations in school are Intelligence and Info & Internetworks. Expects to graduate in May of 2021.")),e,l.a.createElement("p",null,l.a.createElement("b",null,"OPTIONS")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,l.a.createElement("b",null,"-a, --all")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints lots of Nick's important information to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-e, --email")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's email address to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-g, --github")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to Nick's Github profile to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-l, --linkedin")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to Nick's LinkedIn profile to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-n, --name")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's full name to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-r, --resume")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints a link to view Nick's resume in PDF format to the shell")),e,l.a.createElement("p",null,l.a.createElement("b",null,"-v, --version")),l.a.createElement("div",{className:"tabbed"},l.a.createElement("p",null,"Prints Nick's current stable version (age) to the shell"))),e,e,l.a.createElement("div",{className:"l-align"},o.fullName),l.a.createElement("div",{className:"r-align"},"NICK(7)"))},m=a(2),u=a(1);var d=function(e){return l.a.createElement("div",{id:"prompt"},l.a.createElement("p",null,l.a.createElement("b",null,o.prompt)),l.a.createElement("form",{id:"prompt-input-form",onSubmit:e.submitCommand},l.a.createElement("input",{autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",type:"text",value:e.value,onChange:function(t){return e.updateCurInput(t.target.value)}})))},p=a(5),b=a.n(p);var v=function(){var e=Object(n.useState)([o.welcomeMessage]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),p=s[0],v=s[1],E=Object(n.useState)([""]),f=Object(u.a)(E,2),h=f[0],g=f[1],N=Object(n.useState)(0),k=Object(u.a)(N,2),w=k[0],y=k[1];Object(n.useEffect)(function(){return document.addEventListener("keydown",O),function(){document.removeEventListener("keydown",O)}});var O=function(e){var t=e.key;"ArrowUp"===t?w>=h.length?(v(h[h.length-1]),y(h.length-1)):(v(h[w]),y(w+1)):"ArrowDown"===t&&(w<=0?(v(h[0]),y(0)):(v(h[w]),y(w-1)))},C=a.map(function(e){if(e.includes(o.prompt)){var t=e.indexOf(" "),a=e.substring(0,t);e=e.substring(t),e=l.a.createElement("span",null,l.a.createElement("b",null,a)," ",e)}else"http"===e.substring(0,4)?e=l.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e):e===o.resumeResponse&&(e=l.a.createElement("a",{href:b.a,target:"_blank",rel:"noopener noreferrer"},e));return l.a.createElement("p",{key:e.toString()},e)}),j=function(e,t){var n=[].concat(Object(m.a)(a),[t]),l=n;if("help"===e||-1!==e.indexOf(" ")&&e.includes("-help")){l=l.concat(o.availableCommandsMessage);for(var r=0,c=Object.keys(i);r<c.length;r++){var s=c[r];if(l=l.concat(s),P(i[s]))for(var u=0,d=Object.keys(i[s]);u<d.length;u++){var p=d[u];""!==p&&(l=l.concat("\xa0\xa0"+p))}}return l}if("clear"===e)return[];if(""===e)return l;var b=e.split(" "),v=b.shift();if(i.hasOwnProperty(v)){var E=i[v];if(1===b.length&&b[0].length>2&&1===(b[0].match(/-/g)||[]).length){var f=b[0].substring(1),h=!0,g=!1,N=void 0;try{for(var k,w=f[Symbol.iterator]();!(h=(k=w.next()).done);h=!0){var y="-"+k.value;if(!E.hasOwnProperty(y))return n.concat(y+o.argNotRecognizedWarning+v);l=l.concat(E[y])}}catch(A){g=!0,N=A}finally{try{h||null==w.return||w.return()}finally{if(g)throw N}}return l}if(0!==b.length||P(E)){if(b.length>0&&P(E)){var O=!0,C=!1,j=void 0;try{for(var S,I=b[Symbol.iterator]();!(O=(S=I.next()).done);O=!0){var R=S.value;if(!E.hasOwnProperty(R))return n.concat(R+o.argNotRecognizedWarning+v);l=l.concat(E[R])}}catch(A){C=!0,j=A}finally{try{O||null==I.return||I.return()}finally{if(C)throw j}}return l}return 0===b.length&&P(E)?l.concat(E[""]):l.concat(v+o.acceptsNoArgsWarning)}return l.concat(E)}return l.concat(o.commandNotFound+v)},P=function(e){return"[object Object]"===Object.prototype.toString.call(e)};return l.a.createElement("div",null,C,l.a.createElement(d,{value:p,updateCurInput:v,submitCommand:function(e){e.preventDefault();var t=p.toLowerCase().trim();""!==t&&h.length>0&&t!==h[0]&&g([t].concat(Object(m.a)(h))),y(0);var a=o.prompt+" "+t;r(j(t,a)),v("")}}))};var E=function(){var e=Object(n.useRef)();Object(n.useEffect)(function(){return document.addEventListener("click",t),function(){document.removeEventListener("click",t)}},[]);var t=function(t){e.current.contains(t.target)&&document.getElementById("prompt-input-form").elements[0].focus()};return l.a.createElement("div",{id:"container"},l.a.createElement("div",{ref:e,className:"outer-column"},l.a.createElement("div",{className:"inner-column"},l.a.createElement(v,null))),l.a.createElement("div",{className:"outer-column"},l.a.createElement("div",{className:"inner-column"},l.a.createElement(s,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,a){e.exports=a.p+"static/media/resume.32eea465.pdf"},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.3271cfd6.chunk.js.map