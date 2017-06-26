(function()
{
    // Config
    const pollIntervalMSec = 50;

    // Get the output element
    const op = document.querySelector("#op");

    if(op)
    {
        op.innerHTML = "";

        let counter = 0;

// Q: should this just execute recursively? i.e. as fast as possible, start again once the prev iter completes        
        setInterval(() =>
        {
            fetch("./server-info.json").then(function(response)
            {
                if(response.ok)
                {
                    response.json().then(function(json)
                    {
                        op.innerHTML += `#${counter} ${json.name}<br/>`;
                    }).catch(function(error)
                    {
                        console.error(`Argh!: ${error.message}`);
                    });
                }
            }).catch(function(error)
            {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

            counter++;
            
        }, pollIntervalMSec);
    }
    else
    {
        console.error("Couldn't find the output element!");
    }
})();