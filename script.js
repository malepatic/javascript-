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
            const headerRow = document.querySelector('#myTable thead tr');

            if (checkbox.checked) {
                row.style.backgroundColor = "yellow";
                submitButton.disabled = false;
                submitButton.style.backgroundColor = "orange";
                addDeleteButton(row);
                addEditButton(row);
                headerRow.cells[8].style.display = "table-cell";
                headerRow.cells[9].style.display = "table-cell";
                row.cells[8].style.display = "table-cell";
                row.cells[9].style.display = "table-cell";
            } else {
                row.style.backgroundColor = "white";
                removeButtons(row);
                checkSubmitButtonStatus();

                const checkboxes = document.querySelectorAll('#myTable input[type="checkbox"]');
                const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
                if (!isAnyChecked) {
                    headerRow.cells[8].style.display = "none";
                    headerRow.cells[9].style.display = "none";
                    row.cells[8].style.display = "none";
                    row.cells[9].style.display = "none";
                }
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
                    <td style="display:none;"></td> <!-- Hidden by default -->
                    <td style="display:none;"></td> <!-- Hidden by default -->
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

    setTimeout(function() {
        alert(`Student ${studentCount} Record added successfully`);
            }, 10); 
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

 function addDeleteButton(row) {
            let deleteCell = row.cells[8]; 
            if (deleteCell.innerHTML === "") {
                const deleteButton = document.createElement("button");
                deleteButton.innerText = "Delete";
                deleteButton.onclick = function () {
                    const rowContent = row.cells[1].innerText;
                    row.remove();  
                    if (row.nextElementSibling) {
                        row.nextElementSibling.remove(); 
                    }
                    setTimeout(function() {
                        alert(`${rowContent} Record deleted successfully!`);
                    }, 10);
                    
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
        
            const message = `Edit details of ${studentName}\n` 
        
            confirm(message);
        }
        
        function removeButtons(row) {
            row.cells[8].innerHTML = ""; 
            row.cells[9].innerHTML ="";
        }