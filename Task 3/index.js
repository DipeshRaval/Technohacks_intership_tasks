input = document.getElementById("result");
console.log(input);

const clickHandler = (e) =>
{
    if(input.value === "0")
    {
        input.value = ""
    }
    val = e.target.value
    if(val === "c")
    {
        input.value = "0";
    }else if(val === "=")
    {
        res = eval(input.value);
        input.value = res
    }else{
        input.value += val
    }
}

