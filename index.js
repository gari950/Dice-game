var random_number1 = Math.floor(Math.random() * 6) + 1;
var random_number2 = Math.floor(Math.random() * 6) + 1;
var random_src1 = "images/dice" + random_number1 + ".png";
var random_src2 = "images/dice" + random_number2 + ".png";
image1 = document.querySelectorAll("img")[0].setAttribute("src" , random_src1);
image2 = document.querySelectorAll("img")[1].setAttribute("src" , random_src2);

if(random_number1 > random_number2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else 
    if(random_number1 < random_number2)
    {
        document.querySelector("h1").innerHTML= " Player 2 wins";
    }
else
{
    document.querySelector("h1").innerHTML = "Draw!!! ";
}