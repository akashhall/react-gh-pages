(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(38)},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(12),o=n.n(l),i=n(39),c=(n(23),n(4)),r=n(5),u=n(8),d=n(6),m=n(9),h=(n(25),n(41)),p=n(40),f=n(15),v=(n(27),function(e){var t=e.className,n=e.value,a=e.id,l=e.onClick;return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:t,id:a,onClick:l}," ",n," "))}),E=(n(29),function(e){var t=e.handleClose,n=e.show,a=e.customClassName,l=e.children,o=n?"modal display-block":"modal display-none",i=a||null;return s.a.createElement("div",{className:o},s.a.createElement("section",{className:"modal-main"},s.a.createElement(v,{className:"close-button",onClick:t,value:"close"}),s.a.createElement("div",{className:i},l)))}),g=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.className,n=this.props.options;return s.a.createElement("div",null,s.a.createElement("select",{className:t,onChange:function(t){return e.props.onChange&&e.props.onChange(t.target.value)}},n&&n.map(function(e,t){return s.a.createElement("option",{key:t,value:e.value?e.value:null},e.optionText)})))}}]),t}(s.a.Component),w=(n(31),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).showSlides=function(e){var t,a=document.querySelectorAll(".mySlides"),s=document.querySelector(".slideshow-container");if(s.style.display="none",a.length>0){for(e>a.length&&(n.slideIndex=1),e<1&&(n.slideIndex=a.length),t=0;t<a.length;t++)a[t].style.display="none";a[n.slideIndex-1].style.display="block",s.style.display="block"}},n.plusSlides=function(e){n.showSlides(n.slideIndex+=e)},n.slideIndex=1,n.slideArray=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","twenty"],n.state={show:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.showSlides(this.slideIndex)}},{key:"componentDidUpdate",value:function(){this.showSlides(this.slideIndex)}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<this.props.numberOfSlides;n++)t.push(s.a.createElement("div",{className:"mySlides fade",key:n},s.a.createElement("div",{className:"side-text"},n+1,"/",this.props.numberOfSlides),s.a.createElement("div",{className:"text"},this.slideArray[n])));return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"slideshow-container"},t,s.a.createElement("a",{className:"prev",onClick:function(){return e.plusSlides(-1)}},"\u276e"),s.a.createElement("a",{className:"next",onClick:function(){return e.plusSlides(1)}},"\u276f")))}}]),t}(s.a.Component)),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).getSelectedValue=function(e){"Select Slides"!==e&&n.setState(function(t){return{selectedValues:[].concat(Object(f.a)(t.selectedValues),[e])}}),n.setState({slides:e})},n.showModal=function(){n.setState({show:!0})},n.hideModal=function(){n.setState({show:!1})},n.state={dropDownArray:[],slides:0,selectedValues:[],show:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){for(var e=[],t=0;t<=20;t++)e.push({id:t,value:t,optionText:0===t?"Select Slides":t});this.setState({dropDownArray:e})}},{key:"render",value:function(){return console.log(),s.a.createElement(s.a.Fragment,null,this.props.location&&this.props.location.state&&this.props.location.state.loginToken?s.a.createElement("div",null,s.a.createElement("div",{className:"pre-guide"}," ",s.a.createElement("span",null," Please Select Slides Between 1 to 20 ")),s.a.createElement(g,{className:"drop-down",options:this.state.dropDownArray,onChange:this.getSelectedValue}),s.a.createElement(w,{numberOfSlides:this.state.slides,selectedSlides:this.state.selectedValues}),s.a.createElement("div",null,this.state.slides>0?s.a.createElement(v,{value:"Finish",className:"finishButton",onClick:this.showModal}):null),s.a.createElement(E,{show:this.state.show,handleClose:this.hideModal,customClassName:"slidesNumber"},s.a.createElement("div",null,s.a.createElement("span",null," User Selected Slides Are :-")," ",s.a.createElement("br",null),this.state.selectedValues.toString()))," "):null)}}]),t}(s.a.Component),b=n(13),y=function(e){var t=e.className,n=e.value,a=e.id,l=e.onChange,o=e.onKeyDown,i=e.name,c=e.placeholder;return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{className:t,value:n,id:a,onChange:l,onKeyDown:o,name:i,placeholder:c}))},N=(n(33),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onInputChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.onKeyPress=function(e){n.keyCode=e.which,console.log(n.keyCode)},n.checkUserLogin=function(e){"shaadi"===n.state.userName&&"123"===n.state.userPassword?n.setState({loginSuccess:!0}):n.setState({show:!0})},n.showModal=function(){n.setState({show:!0})},n.hideModal=function(){n.setState({show:!1})},n.keyCode="",n.state={userName:"",userPassword:"",loginSuccess:"",show:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.loginSuccess&&this.props.history.push({pathname:"/slides",state:{loginToken:!0}}),s.a.createElement("div",{className:"main-div"},s.a.createElement("div",{className:"login-page"},s.a.createElement(y,{id:"user",className:"input-class",placeholder:"username",value:this.state.userName,onChange:this.onInputChange,name:"userName"})," ",s.a.createElement("br",null),s.a.createElement(y,{className:"input-class",placeholder:"password",value:this.state.userPassword,onChange:this.onInputChange,name:"userPassword"})," ",s.a.createElement("br",null),s.a.createElement(v,{className:"login-button",value:"Login",onClick:this.checkUserLogin}),s.a.createElement(E,{show:this.state.show,handleClose:this.hideModal,customClassName:"error-message"},s.a.createElement("span",null," User Credentials are Wrong Try Again"))))}}]),t}(a.Component)),C=function(){return s.a.createElement(h.a,null,s.a.createElement(p.a,{exact:!0,path:"/",component:N}),s.a.createElement(p.a,{exact:!0,path:"/slides",component:S}))},O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,null))}}]),t}(a.Component);o.a.render(s.a.createElement(i.a,null,s.a.createElement(O,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.49ee922b.chunk.js.map