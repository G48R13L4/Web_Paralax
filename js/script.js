   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'Quem pode doar?', options:['Qualquer pessoa entre 18 e 69 anos','Apenas Jovens de 18 e 24 anos','Apenas adultos entre 24 e 69 anos','Apenas pessoas entre 69 e 100 anos'],answer:1},

                          {q:'Quanto tempo leva para retirada do sangue?',options:['Leva de 8 a 20 minutos','Leva de 20 a 25 minutos','Leva de 8 a 12 minutos','Leva de 30 minutos a 1 hora'],answer:3},

                          {q:'Quanto sangue é retirado?',options:['380 mililitros','450 mililitros','400 mililitros','550 mililitros'],answer:2},

                          {q:'O que levar no dia da doação?',options:['Atestado médico e RG','Carteira de trabalho com atestado médico','Carteirinha de vacina apenas','Apenas um documento original com foto'],answer:4},

                          {q:'Qual o peso para doar sangue?',options:['50 quilos ou mais','abaixo de 50 quilos','Apenas com 70 quilos','Entre 35 e 49 quilos'],answer:1}
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Fim do Quiz......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correto";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



