//show password
$(document).ready(function(){
    $("#pw").focus(function(){
        this.type = "password";
    }).blur(function(){
        this.type = "password";
    })  
    $(":radio:eq(0)").click(function(){
        $("#div_name1").show();
        $("#div_name2").hide();
     }); 
     $(":radio:eq(1)").click(function(){
        $("#div_name1").hide();
        $("#div_name2").show();
     });
});

//Placeholder fixed for Internet Explorer
$(function() {
    var input = document.createElement("input");
    if(('placeholder' in input)==false) { 
        $('[placeholder]').focus(function() {
            var i = $(this);
            if(i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if(i.hasClass('password')) {
                    i.removeClass('password');
                    this.type='password';
                }           
            }
        }).blur(function() {
            var i = $(this);    
            if(i.val() == '' || i.val() == i.attr('placeholder')) {
                if(this.type=='password') {
                    i.addClass('password');
                    this.type='text';
                }
                i.addClass('placeholder').val(i.attr('placeholder'));
            }
        }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var i = $(this);
                if(i.val() == i.attr('placeholder'))
                    i.val('');
            })
        });
    }
    });


var rate_value="";
var hasher="";
var count=0;
var pwd="";
function allowDrop(ev) {
       //ev.preventDefault();
   }
   
   function drag(ev) {
       ev.dataTransfer.setData("text", ev.target.id);
   }
   
   function drop_p1(ev) {
      // ev.preventDefault();
       var data = ev.dataTransfer.getData("text");
       //var s1=document.getElementById(p1).value;
       var s=document.getElementById(p1).setData(data);
       var s1=encrypt(s);
      // alert(s1);
       window.alert(s1);
      // ev.target.appendChild(document.getElementById(data));
   }
   function drop_p2(ev) {
      // ev.preventDefault();
       var data = ev.dataTransfer.getData("text");
      
       var s2=document.getElementById(p2).setData(data);
       window.alert(s2);
    //  ev.target.appendChild(document.getElementById(data));
   }
   function drop_p3(ev) {
      // ev.preventDefault();
       var data = ev.dataTransfer.getData("text");
      
       var s3=document.getElementById(p3).setData(data);
      window.alert(s3);
       //ev.target.appendChild(document.getElementById(data));
   }
   function drop_p4(ev) {
      // ev.preventDefault();
       var data = ev.dataTransfer.getData("text");
       
       var s4=document.getElementById(p4).setData(data);
       window.alert(s4);
       //ev.target.appendChild(document.getElementById(data));
   }
   
   function function_r1(){
    if (document.getElementById('r1').checked) {
    rate_value +=document.getElementById('1').name;
    count=count+1;
   }}
   function function_r2(){
   if (document.getElementById('r2').checked) {
    rate_value += document.getElementById('2').name;
    count=count+1;
   }}
   function function_r3(){
   if (document.getElementById('r3').checked) {
    rate_value +=document.getElementById('3').name;
    count=count+1;
   }}
   function function_r4(){
   if (document.getElementById('r4').checked) {
    rate_value +=document.getElementById('4').name;
    count=count+1;
   }}
   