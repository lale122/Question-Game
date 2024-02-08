let dogrular=0

let start = document.querySelector('.start')
let btn_start = document.querySelector('.btn_start')
let btn_exit = document.querySelector('.btn_exit')
let btn_exit1 = document.querySelector('.btn_exit1')

btn_start.onclick=function(){
    document.querySelector('.start').style.display='none'
    document.querySelector('.question-part').style.display='block'


}
btn_exit.onclick=function(){
    window.close()
}
btn_exit1.onclick=function(){
    window.close()
}




const suallar = [
    {
        title:"Question 1",
        sual: "What do you call people who are 18+ ?",
        cavablar: [
            {
                cavab: "Baby",
                dogrudurmu: false
            },
            {
                cavab: "Adult",
                dogrudurmu: true
            },
            {
                cavab: "Person",
                dogrudurmu: false
            }
        ]
       
        
    },   
    { 
        title:"Question 2",
        sual: "What color is the tree?",
        cavablar: [
            {
                cavab: "Red",
                dogrudurmu: false
            },
            {
                cavab: "Brown",
                dogrudurmu: false
            },
            {
                cavab: "Green",
                dogrudurmu: true
            }
        ]
        
        
    },
    {
        title:"Question 3",
        sual: "What do you call someone who has a wife?",
        cavablar: [
            {
                cavab: "Wife",
                dogrudurmu: true
            },
            {
                cavab: "Husband",
                dogrudurmu: false
            },
            {
                cavab: "Married",
                dogrudurmu: true
            }
        ]
    },
    {
        title:"Question 4",
        sual: "Which is the most us level in English?",
        cavablar: [
            {
                cavab: "B1",
                dogrudurmu: false
            },
            {
                cavab: "C2",
                dogrudurmu: true
            },
            {
                cavab: "A2",
                dogrudurmu: false
            }
        ]
    },
    {
        title:"Question 5",
        sual: "What color is the sky?",
        cavablar: [
            {
                cavab: "Blue",
                dogrudurmu: true
            },
            {
                cavab: "Yellow",
                dogrudurmu: false
            },
            {
                cavab: "Green",
                dogrudurmu: false
            }
        ]
    }
]
let index=0

function sualiGoster(){

    
    const x=suallar[index]

    const btn1=document.querySelector('.answer-btn1')
    const btn2=document.querySelector('.answer-btn2')
    const btn3=document.querySelector('.answer-btn3')
    btn1.onclick=function(){
        if(x.cavablar[0].dogrudurmu){
        
            document.querySelector('.cavab1').style.backgroundColor="green"
            dogrular++

    
        }else{
        
            document.querySelector('.cavab1').style.backgroundColor='red'
        }
        progresBariDeyis()
        next()
        
    }
    btn2.onclick=function(){
    
        
        if(x.cavablar[1].dogrudurmu){
        
        
            document.querySelector('.cavab2').style.backgroundColor='green'
            
        
            dogrular++
        }else{
            document.querySelector('.cavab2').style.backgroundColor='red'
        }
    
        progresBariDeyis()
        next()
        
        
    }
    btn3.onclick=function(){
    
        
        if(x.cavablar[2].dogrudurmu){
            
            document.querySelector('.cavab3').style.backgroundColor='green'
            
        
            dogrular++
            
        }else{
        
            document.querySelector('.cavab3').style.backgroundColor='red'
        }
    
        progresBariDeyis()
        next()
    }
    document.querySelector('#title').innerHTML=x.title
    document.querySelector('.sual').innerHTML=x.sual
    document.querySelector('.span1').innerHTML=x.cavablar[0].cavab
    document.querySelector('.span2').innerHTML=x.cavablar[1].cavab
    document.querySelector('.span3').innerHTML=x.cavablar[2].cavab

}
function next(){
    index++
    
    document.querySelector('.cavab1').style.backgroundColor='white'
    document.querySelector('.cavab2').style.backgroundColor='white'
    document.querySelector('.cavab3').style.backgroundColor='white'
    
    if( index>(suallar.length-1)){
       document.querySelector('.question-part').style.display='none';
       document.querySelector('.finish').style.display='block';
        document.querySelector('.progress-bar').style.display='none'
       document.querySelector('#end').innerHTML=`Total Point: ${(dogrular*100)/5}%`
    }else {
        sualiGoster()
        
    }
    
}


document.querySelector('.restart').addEventListener('click',function(){
    dogrular=0;
    index=0;
    sualiGoster()
    document.querySelector('.progress-bar').style.display='block'
    document.querySelector('.indicator').style.width= '0%'
    document.querySelector('.question-part').style.display='block';
    document.querySelector('.finish').style.display='none';
    
})




function progresBariDeyis(){
    const faiz=100*((index+1)/suallar.length)
    document.querySelector('.indicator').style.width=faiz+'%'
  
}

sualiGoster()