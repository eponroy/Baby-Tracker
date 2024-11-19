let babies = [];

function addBaby() {
    const babyName = document.getElementById('babyName').value.trim();
    const sex = document.getElementById('sex').value;

    if (babyName === "") {
        alert("Please enter a baby name.");
        return;
    }

    for (let i = 0; i < babies.length; i++) {
        if (babies[i][0] === babyName) {
            alert("This baby name already exists. Please enter a unique name.");
            return;
        }
    }

    babies.push([babyName, sex]);
    document.getElementById('babyName').value = '';
    document.getElementById('sex').value = 'Boy';
    generateTable();
}

function removeBaby() {
    babies.pop();
    generateTable();
}

function emptyList() {
    babies = [];
    generateTable();
}

function countBySex() {
    let boyCount = 0;
    let girlCount = 0;

    for (let i = 0; i < babies.length; i++) {
        if (babies[i][1] === 'Boy') {
            boyCount++;
        } else if (babies[i][1] === 'Girl') {
            girlCount++;
        }
    }

    document.getElementById('boyCount').innerText = boyCount;
    document.getElementById('girlCount').innerText = girlCount;
}

function generateTable() {
    const table = document.getElementById('babyTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    for (let i = 0; i < babies.length; i++) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        nameCell.innerText = babies[i][0];

        const sexCell = row.insertCell(1);
        sexCell.innerText = babies[i][1];

        if (babies[i][1] === 'Boy') {
            row.style.backgroundColor = 'powderblue';
        } else if (babies[i][1] === 'Girl') {
            row.style.backgroundColor = 'pink';
        }
    }

    if (babies.length > 0) {
        document.getElementById('babyTable').style.display = 'table';
    } else {
        document.getElementById('babyTable').style.display = 'none';
    }
}

function toggleChildList() {
    const childList = document.getElementById('childList');
    
    if (childList.style.display === 'none') {
        childList.style.display = 'block';
    } else {
        childList.style.display = 'none';
    }
}
