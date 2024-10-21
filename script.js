//diff1 = beginner, diff2 = intermediate, diff3 = advanced, diffA = all
//import('./tricks.json') non funziona

let tricksList =
[
    ["Basic opens", "https://youtu.be/bqEsxxeZGMY?si=g3BQamKZgz6WtM0B", "diff1"],
    ["Fan", "https://youtu.be/WTDOPMxnyBQ?si=LuqrwE5ZAItkhOmB", "diff1"],
    ["Reverse opens", "https://youtu.be/BYmXp9YXE_8?si=kUX4SwpZm8K_i6J7", "diff1"],
    ["Zipper", "https://youtu.be/YCD5-DNCNGs?si=VIMkl4P0be4IU05f", "diff1"],
    ["Double Rollout", "https://youtu.be/yLDm987WReU?si=-ZeT7O1BXsSe2W-A", "diff1"],
    ["Pen Twirl", "https://youtu.be/BBMD_qHcTME?si=BkctL6LHtYgel0np", "diff1"],
    ["Index Roll", "https://youtu.be/YBXKeZCbCN4?si=yiqMs-y0OvdTNCXC", "diff2"],
    ["Orbit", "https://youtu.be/dHx2zvDUkd4?si=Iw2OnH-LgEsRfLYe", "diff2"],
    ["Underhand Transfer", "https://youtu.be/T2_cocwznZY?si=vnc2a5Rq39cgftKS", "diff2"],
    ["Flail", "https://youtu.be/9tLqHZaSE1E?si=kHwZ9uQkg6qZVehh", "diff2"],
    ["Knuckleduster", "https://youtu.be/wd5TY3yYEd4?si=USxs5mnkjNo_wb0r", "diff2"],
    ["ALT Reverse Behind the 8 Ball","https://youtu.be/vpDt7sdYwpQ?si=C-uBt6eNkBs50wTf","diff3"],
    ["Helix","https://youtu.be/e2ToFBmLUgU?si=7vr4Yav2iY-RTgYr","diff3"],
    ["Hellbent","https://youtu.be/9_PhTo6Sd4c?si=hkpXBkN0TlxaWqOD","diff3"],
    ["Inverse Hellbent","https://youtu.be/KoKlSebFJAo?si=shWPKfk0c7u65CPV","diff3"],
    ["Over Under","https://youtu.be/vjmA9MV9WsM?si=deZ2t_Le_cCKQuJW","diff3"]
]

/*let column = document.createElement("div");
column.classlist.add("col-xs-12", "col-sm-6", "col-md-4", "col-lg-3");
*/

/*
status: the JSON file doesn't work
to add:
-bootstrap columns
-selected level to appear next to the dropdown
*/
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

            console.log(trickname);

            if(trickname.match(searchTrick) && (diff == "diffA" || trickDiff.match(filterDiff)))
            {
                console.log("matched!");
                tricksTable.push(trick);
                if(!foundTrick)
                {
                    foundTrick = trickname;
                }
            }
        });

        if (tricksTable.length != 0)
        {
            document.getElementById("trickTitle").innerHTML = "Trick disponibili";
            showTricks(tricksTable);
        }else
        {
            document.getElementById("trickTitle").innerHTML = "Ow! non abbiamo trovato quello che cerchi!"; // Messaggio di errore
        }
    

}

function showTricks(tableData)//tricksTable on the searchTrick() function
{
    console.log('executing "showTricks()" ')
    let table = document.createElement("table");
    for (let row of tableData)
    {
        let newRow = table.insertRow();
        
        let button = document.createElement("button");  
        button.innerText = row[0];

        button.addEventListener("click", () =>
            {
                window.location.href = row[1];
            }
        )

        let newCell = newRow.insertCell();
        newCell.appendChild(button);
    }
    document.getElementById("tableSpace").appendChild(table);
}


function cleartable()
{
    document.getElementById("tableSpace").replaceChildren();
}