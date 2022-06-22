randomize_placeholder(document.getElementById("todo_element"));

var lines = document.getElementsByTagName("table").length - 1;
var thead = document.getElementsByTagName("thead")[0]
if (lines == 0) { thead.hidden = true; }

function randomize_placeholder(inputID) {
    let text = ["Uploading some music ?", "Working on that secret project ?", "Going to gym ?", "Working out at home ?", "Going on a date ?", "Taking a shower"]
    let randomNumber = Math.floor(Math.random() * 6);
    inputID.setAttribute("placeholder", text[randomNumber]);
}


function todo() {
    let tbody = document.getElementsByTagName("tbody")[0];
    let value = "● " + document.getElementById("todo_element").value;

    if (value == ("● ")) alert("Insert first");
    else {
        document.getElementById("todo_element").value = "";
        let row = document.createElement("tr");
        let todoElement = document.createElement("td");
        let del_mark = document.createElement("td");
        let tick = document.createElement("button");
        let del = document.createElement("button");



        todoElement.innerText = value;
        todoElement.setAttribute("id", "todo");
        tick.innerText = "✔️";
        del.innerText = "❌";
        tick.setAttribute("id", "t" + lines);
        tick.setAttribute("onClick", "mark_todo(this.id)");
        del.setAttribute("id", "d" + lines);
        del.setAttribute("onClick", "del_todo(this.id)");
        del_mark.setAttribute("id", "del-mark")
        del_mark.append(tick, del);
        row.append(todoElement, del_mark);
        tbody.append(row);
        lines++;
        if (lines > 0) thead.hidden = false;
        let h3 = document.getElementsByClassName("lines")[0];
        h3.innerText = "To-do list elements :" + parseInt(lines);
    }
}

function mark_todo(tn) {
    var textThatNeedsToBeUnderlined = document.getElementById(tn);
    textThatNeedsToBeUnderlined = textThatNeedsToBeUnderlined.parentElement;
    textThatNeedsToBeUnderlined = textThatNeedsToBeUnderlined.previousElementSibling;
    if (textThatNeedsToBeUnderlined.style.textDecoration == "line-through") {
        textThatNeedsToBeUnderlined.style.textDecoration = "none";
    }
    else { textThatNeedsToBeUnderlined.style.textDecoration = "line-through"; }

}
function del_todo(dn) {
    var lineThatNeedsToBeDeleted = document.getElementById(dn);

    lineThatNeedsToBeDeleted = lineThatNeedsToBeDeleted.parentElement.parentElement;
    var table = document.getElementsByTagName("tbody")[0];

    table.removeChild(lineThatNeedsToBeDeleted);
    lines--;
    if (lines == 0) { thead.hidden = true; }
    let h3 = document.getElementsByClassName("lines")[0];
    h3.innerText = "To-do list elements :" + parseInt(lines);
}
