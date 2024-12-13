//diff1 = beginner, diff2 = intermediate, diff3 = advanced, diffA = all
// Define the tricksList array
let tricksList = [];
//fetch data from json file
fetch('tricks.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Populate tricksList from the fetched JSON
        data.tricks.forEach(trick => {
            tricksList.push([trick.name, trick.url, trick.level]);
        });
    })
    .catch(error => {
        console.error("Error fetching JSON data:", error);
    });

console.log(tricksList);

function searchTrick(diff)
{
    cleartable();
    
    let tricksTable = [];
    let trickVal = document.getElementById("search").value;
    
    let searchTrick = new RegExp(trickVal, 'gi');
    let filterDiff = new RegExp(diff, "g");

    let foundTrick = null;
    tricksList.forEach(trick =>
    {
        let trickname = trick[0];
        let trickDiff = trick[2];

        if(trickname.match(searchTrick) && (diff == "diffA" || trickDiff.match(filterDiff)))
        {
            console.log("matched!"); 
            tricksTable.push(trick);
            if(!foundTrick)
                foundTrick = trickname;
        }
    });

    if (tricksTable.length != 0)
    {
        document.getElementById("trickTitle").innerHTML = "Trick disponibili";
        showTricks(tricksTable);
    }else
    {
        document.getElementById("trickTitle").innerHTML = "Ow! non abbiamo trovato quello che cerchi!"; // Messaggio di errore
        document.getElementById("tableSpace").innerHTML;
    }


}

function showTricks(tableData)//tricksTable on the searchTrick() function
{
    console.log('executing "showTricks()" ')

    let div = document.getElementById("tableSpace");

    for (let trick of tableData)
    {
        let newDiv = document.createElement("div");
        newDiv.classList.add("text-center");

        let button = document.createElement("button");  
        button.innerText = trick[0];
        button.classList.add(trick[2], "buttonLinks");
        button.addEventListener("click", () =>
            {
                window.location.href = trick[1];
            }
        )
        newDiv.appendChild(button);
        div.appendChild(newDiv);
    }
}


function cleartable()
{
    document.getElementById("tableSpace").replaceChildren();
}
