



var questions=[
    {question1:"How many angles does a triangle have?",
a1:'3',
a2:'4',
a3:'2',
a4:'5',
answer:'3'
},
{question1:"How many colors are in a rainbow?",
a1:'5',
a2:'6',
a3:'7',
a4:'8',
answer:'7'
},
{question1:"who is Keanu Reeves ",
a1:"Actor",
a2:"Politician",
a3:"Writer",
a4:"Football Player",
answer:"Actor"
},
{question1:"what is the biggest animal? ",
a1:"The african elephant",
a2:"Girafe",
a3:"White Shark",
a4:"Blue Whale",
answer:"Blue Whale"
},
{question1:"What is the capital of Australia ",
a1:"Sidney",
a2:"Brisban",
a3:"Perth",
a4:"Canberra",
answer:"Canberra"
},
{question1:"Who painted the Mona Lisa? ",
a1:"Michael Angelo",
a2:"Monett",
a3:"David beckam",
a4:"Leonardo Da Vinci",
answer:"Leonardo Da Vinci"
},
{question1:"Who jumped from space and landed with a parachute alive? ",
a1:"Ussian Blot",
a2:"Felix Baumgartner",
a3:"Walter White",
a4:"Michael Scofield",
answer:"Felix Baumgartner"
},
{question1:" When was apple.Inc created",
a1:"1976",
a2:"1986",
a3:"1996",
a4:"2006",
answer:"1976"
},
{question1:"When was the first flight trail ",
a1:"1953",
a2:"1943",
a3:"1893",
a4:"1903",
answer:"1903"
},
{question1:"Who created JavaScript programming language? ",
a1:"Brendan Eich",
a2:"Peter Parker",
a3:"Jessy Pinkman",
a4:"Willy Wanker",
answer:"Brendan Eich"
}]


$('#start').click(function () {
    $('.countdown').startTimer(); 
    $("h1").css("display","none")
    
    $("#ques").text(questions[0].question1)

    $("#btn1").text(questions[0].a1)
    $("#btn2").text(questions[0].a2)
    $("#btn3").text(questions[0].a3)
    $("#btn4").text(questions[0].a4)
})

    $(".answ").click(function(e){
        var eValue = "#"+e.target.id
        console.log(e.target.id)
     if (e.target.innerHTML===questions[0].answer ){
       
        $("#ques").text(questions[1].question1) 
        $("#btn1").text(questions[1].a1)
        $("#btn2").text(questions[1].a2)
        $("#btn3").text(questions[1].a3)
        $("#btn4").text(questions[1].a4)
        alert("You managed to pass to the next level!")
        $(".answ").css("background-color" , "#6f6f7a") 
    } 
    else {$(eValue).css("background-color" , "red")}

    console.log(e.target.innerHTML)
  if(e.target.innerHTML===questions[1].answer ){
    $(".answ").css("background-color" , "#6f6f7a") 
    $("#ques").text(questions[2].question1) 
    $("#btn1").text(questions[2].a1)
    $("#btn2").text(questions[2].a2)
    $("#btn3").text(questions[2].a3)
    $("#btn4").text(questions[2].a4)
}

    console.log(e.target.innerHTML)
  if(e.target.innerHTML===questions[2].answer ){
    $("#ques").text(questions[3].question1) 
    $("#btn1").text(questions[3].a1)
    $("#btn2").text(questions[3].a2)
    $("#btn3").text(questions[3].a3)
    $("#btn4").text(questions[3].a4)
}



    console.log(e.target.innerHTML)
 if(e.target.innerHTML===questions[3].answer ){
    $("#ques").text(questions[4].question1) 
    $("#btn1").text(questions[4].a1)
    $("#btn2").text(questions[4].a2)
    $("#btn3").text(questions[4].a3)
    $("#btn4").text(questions[4].a4)
}


    console.log(e.target.innerHTML)
 if(e.target.innerHTML===questions[4].answer ){
    $("#ques").text(questions[5].question1) 
    $("#btn1").text(questions[5].a1)
    $("#btn2").text(questions[5].a2)
    $("#btn3").text(questions[5].a3)
    $("#btn4").text(questions[5].a4)
}

    console.log(e.target.innerHTML)
 if(e.target.innerHTML===questions[5].answer ){
    $("#ques").text(questions[6].question1) 
    $("#btn1").text(questions[6].a1)
    $("#btn2").text(questions[6].a2)
    $("#btn3").text(questions[6].a3)
    $("#btn4").text(questions[6].a4)
}

    console.log(e.target.innerHTML)
if(e.target.innerHTML===questions[6].answer ){
    $("#ques").text(questions[7].question1) 
    $("#btn1").text(questions[7].a1)
    $("#btn2").text(questions[7].a2)
    $("#btn3").text(questions[7].a3)
    $("#btn4").text(questions[7].a4)
}

    console.log(e.target.innerHTML)
 if(e.target.innerHTML===questions[7].answer ){
    $("#ques").text(questions[8].question1) 
    $("#btn1").text(questions[8].a1)
    $("#btn2").text(questions[8].a2)
    $("#btn3").text(questions[8].a3)
    $("#btn4").text(questions[8].a4)
}

    console.log(e.target.innerHTML)
 if(e.target.innerHTML===questions[8].answer ){
    $("#ques").text(questions[9].question1) 
    $("#btn1").text(questions[9].a1)
    $("#btn2").text(questions[9].a2)
    $("#btn3").text(questions[9].a3)
    $("#btn4").text(questions[9].a4)
}



    console.log(e.target.innerHTML)
  if(e.target.innerHTML===questions[9].answer ){
     alert("YOU WON 1000 USD $")
 }
 })

    
        








