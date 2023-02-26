window.addEventListener("load",function(){
    const inputs = this.document.querySelectorAll("form input");

    const xInput = inputs[0];
    const yInput = inputs[1];
    const resetButton = inputs[2];
    const submitButton = inputs[3];
    const resultSpan = document.querySelector("form span:last-of-type");

    for(let i=0;i < inputs.length;i++)
        console.log(inputs[i]);
    
    console.log(resultSpan);

    resetButton.onclick = (e)=> {
        e.preventDefault();

        xInput.value = 0;
        yInput.value = 0;
        resultSpan.innerText = 0;
    };
    submitButton.onclick = (e)=> {
        e.preventDefault();
        let x = parseInt(xInput.value);
        let y = parseInt(yInput.value);
        let result = x + y;
        resultSpan.innerText = result;
    };
    xInput.oninput = (e) =>{
        let x = parseInt(xInput.value);
        let y = parseInt(yInput.value);
        let result = x + y;
        resultSpan.innerText = result;
    };
    yInput.oninput = (e) =>{
        let x = parseInt(xInput.value);
        let y = parseInt(yInput.value);
        let result = x + y;
        resultSpan.innerText = result;
    };
});