//Title constructor function that creates a Title object
 function Title(t1) 
{ 
    this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

let studentCount = 0;

        function initializePage() {
            document.getElementById('userInfo').innerText = "Malepati Chaitanya and 002499361";
        }

        function toggleRowDetails(imgElement) {
            const row = imgElement.closest('tr').nextElementSibling;
            row.style.display = row.style.display === "none" ? "table-row" : "none";
        }

        function toggleSelection(checkbox) {
            const row = checkbox.closest('tr');
            const submitButton = document.getElementById("submitButton");

            if (checkbox.checked) {
                row.style.backgroundColor = "yellow";
                submitButton.disabled = false;
                submitButton.style.backgroundColor = "orange";
                addDeleteButton(row);
                addEditButton(row);
            } else {
                row.style.backgroundColor = "white";
                removeButtons(row);
                checkSubmitButtonStatus();
            }
        }


function addNewStudent() {
    studentCount++;
    const table = document.getElementById("myTable");

    const newRow = `
        <tr>
            <td><input type="checkbox" onchange="toggleSelection(this)"/><br /><br /><img src="down.png" width="25px" onclick="toggleRowDetails(this)" /></td>
            <td>Student ${studentCount}</td>
            <td>Teacher ${studentCount}</td>
            <td>Approved</td>
            <td>Fall</td>
            <td>TA</td>
            <td>${Math.floor(10000 + Math.random() * 90000)}</td>
            <td>100%</td>
            <td></td>
            <td></td>
        </tr>
        <tr class="dropDownTextArea" style="display:none;">
            <td colspan="10">
                Advisor:<br /><br />
                Award Details<br />
                Budget Number: <br />
                Comments:<br /><br /><br />
                Award Status:<br /><br /><br />
            </td>
        </tr>`;
    table.insertAdjacentHTML('beforeend', newRow);

    alert(`Student ${studentCount} Record added successfully`);
}

function addDeleteButton(row) {
    let deleteCell = row.cells[8];
    if (deleteCell.innerHTML === "") {
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            row.remove();
            row.nextElementSibling.remove();  
            alert(`${row.cells[1].innerText} Record deleted successfully`);
            checkSubmitButtonStatus();
        };
        deleteCell.appendChild(deleteButton);
    }
}


function addEditButton(row) {
    let editCell = row.cells[9]; 
    if (editCell.innerHTML === "") {
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.onclick = function () {
            showEditPopup(row); 
        };
        editCell.appendChild(editButton);
    }
}

function showEditPopup(row) {
    const studentName = row.cells[1].innerHTML; 
    const teacherName = row.cells[2].innerHTML;
    const status = row.cells[3].innerHTML; 
    const semester = row.cells[4].innerHTML; 
    const taStatus = row.cells[5].innerHTML; 
    const budget = row.cells[6].innerHTML; 
    const percentage = row.cells[7].innerHTML; 


    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Edit details of ${studentName}</h2>
            <p><strong>Student:</strong> ${studentName}</p>
            <p><strong>Teacher:</strong> ${teacherName}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Semester:</strong> ${semester}</p>
            <p><strong>TA Status:</strong> ${taStatus}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Percentage:</strong> ${percentage}</p>
            <button id="updateButton">Update</button>
            <button id="cancelButton">Cancel</button>
        </div>
    `;

    document.body.appendChild(popup); 


    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.border = '2px solid black';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000';

    
    document.getElementById('updateButton').onclick = function () {
        alert(`${studentName} data updated successfully`);
        closePopup(popup); 
    };

    
    document.getElementById('cancelButton').onclick = function () {
        closePopup(popup); 
}

function closePopup(popup) {
    document.body.removeChild(popup); 
}
}
function removeButtons(row) {
    row.cells[8].innerHTML = "";
    row.cells[9].innerHTML = "";
}


function checkSubmitButtonStatus() {
    const checkboxes = document.querySelectorAll('#myTable input[type="checkbox"]');
    const submitButton = document.getElementById("submitButton");
    const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isAnyChecked) {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "gray";
    }
}
var socialMedia = {
    facebook : 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
  };
  
  var t = new Title("CONNECT WITH ME!");
