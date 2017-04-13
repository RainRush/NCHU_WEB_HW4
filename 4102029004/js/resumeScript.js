/*
 * 由dynResume.html form button呼叫
 */
function show() {
    var resumeForm = document.forms['resume'];
    var name = resumeForm['username'].value;
    var birthday = resumeForm['birthday'].value;
    var gender = resumeForm['gender'].value;
    var note = resumeForm['note'].value;
    var hobby = "";

    for (i = 0; i < resumeForm['hobby'].length; i++) {
        if (resumeForm['hobby'][i].checked) {
            hobby += resumeForm['hobby'][i].value + " ";
        }
    }

    if (name == "" || birthday == "") {
        alert("Name and birthday must be filled");
        return false;
    }

    clearTable();
    appearTable(name, birthday, gender, hobby, note);
}


/*
 * 檢查Table是否為空白，若無則清除Table
 */
function clearTable() {
    var tableNode = document.getElementById("dynResumeArea");
    while (tableNode.firstChild) {
        tableNode.removeChild(tableNode.firstChild);
    }
}


/*
 * 獲得資料後顯示於Table
 */
function appearTable(name, birthday, gender, hobby, note) {
    var tableNode = document.getElementById("dynResumeArea");
    var table = document.createElement("TABLE");
    var tableArray = [
        ["Name", name],
        ["Birthday", birthday],
        ["Gender", gender],
        ["Hobby", hobby],
        ["Note", note]
    ];
    tableNode.appendChild(table);

    for (i = 0; i < 5; i++) {
        var tr = document.createElement("TR");
        table.appendChild(tr);
        var th = document.createElement("TH");
        var td = document.createElement("TD");
        tr.appendChild(th);
        tr.appendChild(td);
        th.appendChild(document.createTextNode(tableArray[i][0]));
        td.appendChild(document.createTextNode(tableArray[i][1]));
				setAttributes(th, {
					"class": "defaultTH",
					"onmouseover": "this.className='mouseoverTH'",
					"onmouseout": "this.className='defaultTH'"
				})
        setAttributes(td, {
            "class": "defaultTD",
            "onmouseover": "this.className='mouseoverTD'",
            "onmouseout": "this.className='defaultTD'"
        });
    }
}


/*
 * 多個屬性同時讀取
 */
function setAttributes(element, attributes) {
    for (var attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
}
