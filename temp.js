
let tofeh = document.getElementById('tofeh')
let tocel = document.getElementById('tocel')
let display = document.getElementById('display')
let button = document.getElementById('button')
let ischeck = true;
let outputfeh = undefined;
let outputcel = undefined;
button.onclick = function ()
{
    let input = document.getElementById('input').value 
    input = Number(input)

    if(tofeh.checked == ischeck)
    {
        outputfeh = ((input*1.8 ) + 32 ).toFixed(2) ;
        display.textContent = `${outputfeh} °F`
        console.log(input)
    
    }

    else if(tocel.checked == ischeck)
    {
        outputcel = ((input - 32)/1.8).toFixed(2);
        display.textContent = `${outputcel} °C`;
    }

    else
    {
        display.textContent = 'Choose a valid option!'
    }

}