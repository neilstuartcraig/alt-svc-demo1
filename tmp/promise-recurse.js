console.log("Running");


// this is a stupid mock of fetch()
function f(url)
{
    const p = new Promise( (resolve, reject) => 
    {
        for(let i = 0; i < 100000000; i++)
        {
            const r = Math.random();
            let z = i * r;
        }

        return resolve(`URL was ${url}`);
    });

    return p;
}




const minIterationDelay = 5000; // microsec

let c = 0;

function getData(url)
{  
    const startTime = new Date().getTime();

    f(url).then( (res) => 
    {
        console.log(`#${c} - res: ${res}`);

        c++;

        if(c <= 5)
        {
            const endTime = new Date().getTime();

            const tDiff = endTime - startTime;

            let delay = 0; // This'll stay at 0 if the delay was longer than this value, else:
            if(tDiff < minIterationDelay)
            {
                delay = minIterationDelay - tDiff;
            }

            const u = `${endTime} ${url} c = ${c} tdiff: ${tDiff} del: ${delay}`;

            setTimeout(() => 
            {
                getData(u);
            }, delay);
        }

    }).catch( (err) => 
    {
        console.log(`rej: ${err.message}`);
    });
}



getData("abc");