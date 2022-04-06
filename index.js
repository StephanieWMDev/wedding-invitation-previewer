
///////////////////////////////////////////user input////////////////////////////

function getInputValue() {


    let inputVal2 = document.getElementById("couple-name").value;
    document.getElementById("output1").textContent = inputVal2


    
    let inputVal4 = document.getElementById("dnt").value;
    document.getElementById("output2").textContent = inputVal4
    let inputVal5 = document.getElementById("location").value;
    document.getElementById("output3").textContent = inputVal5
    let inputVal6 = document.getElementById("reception").value;
    document.getElementById("output4").textContent = inputVal6
    let inputVal7 = document.getElementById("last-message").value;
    document.getElementById("output5").textContent = inputVal7

  }
 



////////////////////////////////////////Images/////////////////////////////////
function a(){
    {
            let stle = document.querySelector("#invite-template");
            stle.style.backgroundImage = "url('Images/ult/untitled-design.png')";
            stle.style.backgroundRepeat = "no-repeat";
            stle.style.position = "relative";
    
           
        }
        let first = document.querySelector("#btn-1");
        first.addEventListener('click', a)
         
};
function b() {
    let stle1 = document.querySelector("#invite-template");
            stle1.style.backgroundImage = "url('Images/bot/Webp.net-resizeimage (7).png')";
            stle1.style.backgroundRepeat = "no-repeat";
            stle1.style.position = "relative";
         }
    let second = document.querySelector("#btn-2");
         second.addEventListener('click', b);

          

function c(){
    let stle2 = document.querySelector("#invite-template");
            stle2.style.backgroundImage = "url('Images/earth/Webp.net-resizeimage (6).png')";
            stle2.style.backgroundRepeat = "no-repeat";
            stle2.style.position = "relative";
    let third = document.querySelector("#btn-3");
    third.addEventListener('click', c);
         
}
function d() {
    let stle3 = document.querySelector("#invite-template");
            stle3.style.backgroundImage = "url('Images/old/Webp.net-resizeimage (5).png')";
            stle3.style.backgroundRepeat = "no-repeat";
            stle3.style.position = "relative";
}
    let fourth = document.querySelector("#btn-4");
    fourth.addEventListener('click', d);
     


function main() {
    a();
    b();
    c();
    d();
}
          ////////////////////////////////////// //background//////////////////
let changebgColor=(bgcolor)=>
{
    let col = document.querySelector(".template-box");
    col.style.backgroundImage = bgcolor;
   
}
let ultraviolence = document.querySelector("#btn-1");
ultraviolence.addEventListener('click', function(){
    changebgColor("url('Images/background/89fea0adcabacc1d01bbf59e363ae60f.jpeg')");
});
  
let botanica = document.querySelector("#btn-2");
botanica.addEventListener('click', function(){
    changebgColor("url('Images/background/89fea0adcabacc1d01bbf59e363ae60f.jpeg')");
});
let earth = document.querySelector("#btn-3");
earth.addEventListener('click', function(){
    changebgColor("url('Images/background/89fea0adcabacc1d01bbf59e363ae60f.jpeg')",'red','white');
});
  
let oldschool = document.querySelector("#btn-4");
oldschool.addEventListener('click', function(){
    changebgColor("url('Images/background/89fea0adcabacc1d01bbf59e363ae60f.jpeg')",'red','white');
});
/////////////////////////////////////////////////////Font/Type-Style/////////////////////
/////////////ultraviolence////////////
function aF(){
    {
            let stleaF = document.querySelector("#output1");
            stleaF.style.fontFamily = "IPalette Mosaic', cursive";
            stleaF.style.fontSize = '40px';
            stleaF.style.position= 'relative';
            stleaF.style.left = '-1.2em';
            stleaF.style.top="2.3em";
            stleaF.style.textAlign = "center";

    }
           
        let firstf = document.querySelector("#btn-1");
        firstf.addEventListener('click', aF)
       
}
function bF() {
    let stle = document.querySelector("#output2");
            stle.style.fontFamily = "IPalette Mosaic', cursive";
            stle.style.fontSize = '30px';
            stle.style.position= 'relative';
            stle.style.left = '-1.8em';
            stle.style.top="2.5em";
            stle.style.textAlign = "center";
}
         
    let secondf = document.querySelector("#btn-1");
         secondf.addEventListener('click', bF);



function cF(){
    let stlecF = document.querySelector("#output3");
            stlecF.style.fontFamily = "IPalette Mosaic', cursive";
            stlecF.style.fontSize = '25px';
            stlecF.style.position= "relative";
            stlecF.style.left = "-2.6em";
    
            stlecF.style.top = "2.5em";
            stlecF.style.textAlign = "center";
   



}
    let thirdf = document.querySelector("#btn-1");
    thirdf.addEventListener('click', cF);
         

function dF() {
    let stledF = document.querySelector("#output4");
            stledF.style.fontFamily = "IPalette Mosaic', cursive";
            stledF.style.fontSize = '30px';
            stledF.style.position= "relative";
            stledF.style.left = "-2em";
            stledF.style.top = "2em";
            stledF.style.textAlign = "center";
        }

    let fourthF = document.querySelector("#btn-1");
    fourthF.addEventListener('click', dF);

function eF() {
    let stleeF = document.querySelector("#output5");
            stleeF.style.fontFamily = "IPalette Mosaic', cursive";
            stleeF.style.fontSize = '25px';
            stleeF.style.position= "relative";
            stleeF.style.left = "-2.6em";
            stleeF.style.top = "2em";
            stleeF.style.textAlign = "center";
}
    let fithF = document.querySelector("#btn-1");
    fourthF.addEventListener('click', eF);
    
     


function mainF() {
    aF();
    bF();
    cF();
    dF();
    eF();
};

// Jazzy and Sebastian5

function a2(){
    {
            let stlea2 = document.querySelector("#output1");
            stlea2.style.fontFamily =  'Playfair Display', 'serif';
            stlea2.style.fontSize = '35px';
            stlea2.style.position = 'relative';
            stlea2.style.left = '-1em';
            stlea2.style.top = "-4.5em";
            stlea2.style.textAlign = "center";
            
    }
           
        let first2 = document.querySelector("#btn-2");
        first2.addEventListener('click', a2)
       
}
function b2() {
    let stle2 = document.querySelector("#output2");
            stle2.style.fontFamily = 'Playfair Display', "serif";
            stle2.style.fontSize = '30px';
            stle2.style.position= 'relative';
            stle2.style.left = '-1.7em';
            stle2.style.top="-5em";
            stle2.style.textAlign = "center";
}
         
    let second2 = document.querySelector("#btn-2");
         second2.addEventListener('click', b2);



function c2(){
    let stlecF = document.querySelector("#output3");
            stlecF.style.fontFamily = 'Playfair Display', "serif";;
            stlecF.style.fontSize = '25px';
            stlecF.style.position= "relative";
            stlecF.style.left = "-2em";
    
            stlecF.style.top = "-6em";
            stlecF.style.textAlign = "center";
   



}
    let third2 = document.querySelector("#btn-2");
    third2.addEventListener('click', c2);
         

function d2() {
    let stled2 = document.querySelector("#output4");
            stled2.style.fontFamily = 'Playfair Display', "serif";;
            stled2.style.fontSize = '30px';
            stled2.style.position= "relative";
            stled2.style.left = "-1.6em";
            stled2.style.top = "-4.2em";
            stled2.style.textAlign = "center";
        }

    let fourth2 = document.querySelector("#btn-2");
    fourth2.addEventListener('click', d2);

function e2() {
    let stlee2 = document.querySelector("#output5");
            stlee2.style.fontFamily = 'Playfair Display', "serif";;
            stlee2.style.fontSize = '25px';
            stlee2.style.position= "relative";
            stlee2.style.left = "-2em";
            stlee2.style.top = "-4.2em";
            stlee2.style.textAlign = "center";
}
    let fith2 = document.querySelector("#btn-2");
    fourth2.addEventListener('click', e2);
    
     


function main2() {
    a2();
    b2();
    c2();
    d2();
    e2();
};
//////////////////////////////////////////////////////////////////////////////////////////
function a3(){
    {
            let stlea3 = document.querySelector("#output1");
           
            stlea3.style.fontFamily = 'Inconsolata', 'monospac';
            stlea3.style.fontSize = '42px';
            stlea3.style.position= 'relative';
            stlea3.style.left = '-1.4em';
            stlea3.style.top="-2.3em";
            stlea3.style.textAlign = "center";
            
    }
           
        let first3 = document.querySelector("#btn-3");
        first3.addEventListener('click', a3)
       
}
function b3() {
    let stle3 = document.querySelector("#output2");
            
            stle3.style.fontFamily = 'Inconsolata', 'monospac';
            stle3.style.fontSize = '30px';
            stle3.style.position= 'relative';
            stle3.style.left = '-2em';
            stle3.style.top="-2.4em";
            stle3.style.textAlign = "center";
}
         
    let second3 = document.querySelector("#btn-3");
         second3.addEventListener('click', b3);



function c3(){
    let stlec3 = document.querySelector("#output3");
            stlec3.style.fontFamily = 'Inconsolata', 'monospac';
            stlec3.style.fontSize = '25px';
            stlec3.style.position= "relative";
            stlec3.style.left = "-2.3em";
    
            stlec3.style.top = "-2em";
            stlec3.style.textAlign = "center";
   



}
    let third3 = document.querySelector("#btn-3");
    third3.addEventListener('click', c3);
         

function d3() {
    let stled3 = document.querySelector("#output4");
            stled3.style.fontFamily = 'Inconsolata', 'monospac';
            stled3.style.fontSize = '30px';
            stled3.style.position= "relative";
            stled3.style.left = "-1.8em";
            stled3.style.top = "-1.4em";
            stled3.style.textAlign = "center";
        }

    let fourth3 = document.querySelector("#btn-3");
    fourth3.addEventListener('click', d3);

function e3() {
    let stlee3 = document.querySelector("#output5");
            stlee3.style.fontFamily = 'Inconsolata', 'monospac';
            stlee3.style.fontSize = '25px';
            stlee3.style.position= "relative";
            stlee3.style.left = "-2.2em";
            stlee3.style.top = "-1.2em";
            stlee3.style.textAlign = "center";
}
    let fith3 = document.querySelector("#btn-3");
    fourth3.addEventListener('click', e3);
    
     


function main3() {
    a3();
    b3();
    c3();
    d3();
    e3();
};
//////////////////////////////////////////////////////////////////////////////////////
function a4(){
    {
            let stlea4 = document.querySelector("#output1");
            stlea4.style.fontFamily = 'Miltonian Tattoo', 'cursive';
            stlea4.style.fontSize = '40px';
            stlea4.style.position= 'relative';
            stlea4.style.left = '-1.4em';
            stlea4.style.top="-2.5em";
            stlea4.style.textAlign = "center";
    
    }
           
        let first4 = document.querySelector("#btn-4");
        first4.addEventListener('click', a4)
       
}
function b4() {
    let stle4 = document.querySelector("#output2");
            stle4.style.fontFamily = 'Miltonian Tattoo', 'cursive';
            stle4.style.fontSize = '30px';
            stle4.style.position= 'relative';
            stle4.style.left = '-1.7em';
            stle4.style.top="-3.4em";
            stle4.style.textAlign = "center";
}
         
    let second4 = document.querySelector("#btn-4");
         second4.addEventListener('click', b4);



function c4(){
    let stlec4 = document.querySelector("#output3");
            stlec4.style.fontFamily = 'Miltonian Tattoo', 'cursive';
            stlec4.style.fontSize = '25px';
            stlec4.style.position= "relative";
            stlec4.style.left = "-2.5em";
    
            stlec4.style.top = "-3.9em";
            stlec4.style.textAlign = "center";
   



}
    let third4 = document.querySelector("#btn-4");
    third4.addEventListener('click', c4);
         

function d4() {
    let stled4 = document.querySelector("#output4");
            stled4.style.fontFamily = 'Miltonian Tattoo', 'cursive';
            stled4.style.fontSize = '30px';
            stled4.style.position= "relative";
            stled4.style.left = "-1.9em";
            stled4.style.top = "-3em";
            stled4.style.textAlign = "center";
        }

    let fourth4 = document.querySelector("#btn-4");
    fourth4.addEventListener('click', d4);

function e4() {
    let stlee4 = document.querySelector("#output5");
            stlee4.style.fontFamily = 'Miltonian Tattoo', 'cursive';
            stlee4.style.fontSize = '25px';
            stlee4.style.position= "relative";
            stlee4.style.left = "-2.2em";
            stlee4.style.top = "-3.5em";
            stlee4.style.textAlign = "center";
}
    let fith4 = document.querySelector("#btn-4");
    fourth4.addEventListener('click', e4);
    
     


function main4() {
    a4();
    b4();
    c4();
    d4();
    e4();
};
////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////Theme Title/////////////////////////////


  function aTh(){
    {
            let themT1 = document.querySelector(".themename");
           themT1.innerHTML = "Ultraviolence";
            
    }
           
        let th = document.querySelector("#btn-1");
        th.addEventListener('click', aTh)
       
};
function bTh() {
    let themT2 = document.querySelector(".themename");
    themT2.innerHTML = "Botanica";
            
}
         
    let th1= document.querySelector("#btn-2");
         th1.addEventListener('click', bTh);



function cTh(){
    let themT3 = document.querySelector(".themename");
    themT3.innerHTML = "Earth";
    

}
    let th2 = document.querySelector("#btn-3");
    th2.addEventListener('click', cTh);
         

function dTh() {
    let themT4 = document.querySelector(".themename");
    themT4.innerHTML = "Old School";
            
}
    let th4= document.querySelector("#btn-4");
    th4.addEventListener('click', dTh);
    
     


function themeTitle() {
    aTh();
    bTh();
    cTh();
    dTh();
};



