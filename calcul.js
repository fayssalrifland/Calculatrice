var input = document.getElementById('input');
var  tab= input.value.split('');
for(i=0;i<tab.length;i++){
   if (tab[i]=='+'){
      alert(true);
   }else{
      alert(fasle);
   }
}
function calcul(btn){
      input.value += btn.value;
   }
   function backtozero(){
      input.value='';
   }

   function operator(btnop){
     btnop.value += input.value;
   }
   function btndiv(){
      input.value += '/';
   }
   function btnmult(){
      input.value += '*';
   }
   function btnsub(){
      input.value += '-';
   }
   function btnadd(){
      input.value += '+';
   }

   function result(){
      var egal = eval(input.value);
      input.value = egal;
   }
   