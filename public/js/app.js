(function(){var e,t,o;t=function(){return $.get("/forum/getcats",function(e){return $(".categories_show").empty(),$(".categories_show").append(e),console.log("Appended data")})},$(function(){return $("#summernote").summernote({height:300,width:500}),t(),$(document).on("click",".cat_del",function(e){return $.ajax("/forum/deleteforum",{type:"DELETE",headers:{"X-CSRF-TOKEN":$("input[name=_token]").val()},data:{forum_id:e.target.id.split("_")[2]},error:function(e,t,o){return console.log(t)},success:function(e,o,n){return t()}}),console.log(e.target.id.split("_")[2])}),$(document).on("click",".forum_del",function(e){return $.ajax("/forum/deleteforum",{type:"DELETE",headers:{"X-CSRF-TOKEN":$("input[name=_token]").val()},data:{forum_id:e.target.id.split("_")[2]},error:function(e,t,o){return console.log(t)},success:function(e,o,n){return t()}}),console.log(e.target.id.split("_")[2])}),$(document).on("change",".change_cat",function(e){return $.ajax("/forum/changecat",{type:"PATCH",headers:{"X-CSRF-TOKEN":$("input[name=_token]").val()},data:{forum_id:e.target.id.split("_")[2],cat_id:e.target.value},error:function(e,t,o){},success:function(e,o,n){return t()}}),console.log(e.target.value)}),$(document).on("click","#create_topic_button",function(e){return o("create_topic_form").submit(["post_text","title"])})}),o=function(e){var t;return t={Version:.01,Author:"Kevin Ferm",Created:"March 2016",Updated:"31/3-16"},e?window===this?new o(e):(this.e=document.getElementById(e),this):t},e=function(e){var t,o,n,r,a,i;for(o=e.split(","),a=o[0].match(/:([^}]*);/)[1],n=atob(o[1]),t=new ArrayBuffer(n.length),i=new Uint8Array(t),r=n.length-1;r>=0;)i[r]=n.charCodeAt(r),r--;console.log(i)},o.prototype={submit:function(e){var t;if(e)for(t=e.length-1;t>=0;)this.e[e[t]]?"text"===this.e[e[t]].type||"hidden"===this.e[e[t]].type||"password"===this.e[e[t]].type||"textarea"===this.e[e[t]].type?(console.log(this.coordCheck(this.e[e[t]].value)),this.emailCheck(this.e[e[t]].value)&&alert("There is an email address contained in your message, are you sure you want to post this? - "+this.e[e[t]].value),this.coordCheck(this.e[e[t]].value)&&alert("There is a coordinate contained in your message, are you sure you want to post this? - "+this.e[e[t]].value),this.genderCheck(this.e[e[t]].value)&&alert("There is a gender contained in your message, are you sure you want to post this? - "+this.e[e[t]].value),this.phoneCheck(this.e[e[t]].value)&&alert("There is a phone number contained in your message, are you sure you want to post this? - "+this.e[e[t]].value),console.log(this.e[e[t]].value)):"file"===this.e[e[t]].type?(console.log("FILE TYPE"),this.readImage(this.e[e[t]])):console.log(e[t]+" has no value"):console.log("There is no such field as: "+e[t]),t--;return console.log(this.e),this.e.submit(),this},readImage:function(t){var o;t.files&&t.files[0]&&(o=new FileReader,o.onload=function(t){return e(t.target.result),t},o.readAsDataURL(t.files[0]))},emailCheck:function(e){var t;return t=/^(\w|\-|\_|\.)+\@((\w|\-|\_)+\.)+[a-zA-Z]{2,}$/,t.test(e)},genderCheck:function(e){var t;return t=/^(fe)?male$/,t.test(e)},phoneCheck:function(e){var t;return t=/^([+]47)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/,t.test(e)},coordCheck:function(e){var t;return t=/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/,t.test(e)}}}).call(this);
//# sourceMappingURL=app.js.map
