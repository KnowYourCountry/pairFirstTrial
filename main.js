



var questions=[
    {question1:"How many angles does a triangle have?",
a1:3,
a2:4,
a3:2,
a4:5,
answer:3
},
{question2:"How many colors are in a rainbow?",
a1:5,
a2:6,
a3:7,
a4:8,
answer:7
},
{question3:"who is Keanu Reeves ",
a1:"Actor",
a2:"Politician",
a3:"Writer",
a4:"Football Player",
answer:"Actor"
},
{question4:"what is the biggest animal? ",
a1:"The african elephant",
a2:"Girafe",
a3:"White Shark",
a4:"Blue Whale",
answer:"Blue Whale"
},
{question5:"What is the capital of Australia ",
a1:"Sidney",
a2:"Brisban",
a3:"Perth",
a4:"Canberra",
answer:"Canberra"
},
{question6:"Who painted the Mona Lisa? ",
a1:"Michael Angelo",
a2:"Monet",
a3:"David beckam",
a4:"Leonardo Da Vinci",
answer:"Leonardo Da Vinci"
},
{question7:"Who jumped from space and landed with a parachute alive? ",
a1:"Ussian Blot",
a2:"Felix Baumgartner",
a3:"Walter White",
a4:"Michael Scofield",
answer:"Felix Baumgartner"
},
{question8:" When was apple.Inc created",
a1:1976,
a2:1986,
a3:1996,
a4:2006,
answer:1976
},
{question9:"When was the first flight trail ",
a1:1953,
a2:1943,
a3:1893,
a4:1903,
answer:1903
},
{question10:"Who created JavaScript programming language? ",
a1:"Brendan Eich",
a2:"Peter Parker",
a3:"Jessy Pinkman",
a4:"Willy Wanker",
answer:"Brendan Eich"
},
]

$('#start').click(function () {
    $("h1").css("display","none")
    $("#ques").text(questions[0].question1)
    $('.countdown').startTimer(); 
    
    
});


