var numbers = document.querySelectorAll("#keyboard>div")
var bag = document.querySelector("#input")

for(i=0; i<numbers.length; i++)
{
    numbers[i].addEventListener("click",mycalculator)

}

function mycalculator()
{
    var targetnum = event.target.innerText

    switch(targetnum)
    {
        case "C":
            bag.innerText = "";
            break;
        case "=" :
            bag.innerText = eval(bag.innerText)
            break;
        default:
        bag.innerText = bag.innerText + targetnum

    }
}