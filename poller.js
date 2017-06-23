(function()
{
    // Get the output element
    const op = document.querySelector("#op");

    if(op)
    {
        op.innerHTML = "";

        let counter = 0;

// Q: should this just execute recursively? i.e. as fast as possible, start again once the prev iter completes        
        setInterval(() =>
        {
            op.innerHTML += `#${counter} &lt;res string&gt;<br/>`;

            counter++;
        }, 50);
    }
    else
    {
        console.error("Couldn't find the output element!");
    }
})();