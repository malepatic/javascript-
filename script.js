let studentCount = 0;

    function initializePage() {
        document.getElementById('userInfo').innerText = "Malepati Chaitanya and 002499361";
    }

    function toggleRowDetails(imgElement) {
        const row = imgElement.closest('tr').nextElementSibling;
        row.style.display = row.style.display === "none" ? "table-row" : "none";
        imgElement.classList.toggle('expanded');
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
        }
        updateHeaderVisibility();
    }

    function addNewStudent() {
        studentCount++;
        const table = document.getElementById("myTable");
        const newRow = `
            <tr>
                <td><input type="checkbox" onchange="toggleSelection(this)"/><br /><br />
                <img src="down.png" class="toggle-image" width="25px" onclick="toggleRowDetails(this)" style="cursor: pointer;" /></td>
                <td>Student ${studentCount}</td>
                <td>Teacher ${studentCount}</td>
                <td>Approved</td>
                <td>Fall</td>
                <td>TA</td>
                <td>${Math.floor(10000 + Math.random() * 90000)}</td>
                <td>100%</td>
                <td style="display:none;"></td>
                <td style="display:none;"></td>
            </tr>
            <tr class="dropDownTextArea" style="display:none;">
                <td colspan="10">
                    Advisor:<br/><br/>
                    Award Details<br/>
                    Summer 1-2024(TA)<br/>
                    Budget Number: <br/>
                    Tuition Number: <br/>
                    Comments:<br/><br/><br/>
                    Award Status:<br/><br/><br/>
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

        submitButton.disabled = !isAnyChecked;
        submitButton.style.backgroundColor = isAnyChecked ? "orange" : "gray";
    }

    function addDeleteButton(row) {
        let deleteCell = row.cells[8];
        if (deleteCell.innerHTML === "") {
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.onclick = function () {
                const rowContent = row.cells[1].innerText;
                const nextRow = row.nextElementSibling;
                row.remove();
                if (nextRow && nextRow.classList.contains('dropDownTextArea')) {
                    nextRow.remove();
                }
                setTimeout(function() {
                    alert(`${rowContent} Record deleted successfully!`);
                }, 10);
                
                checkSubmitButtonStatus();
                updateHeaderVisibility();
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

        const message = `Edit details of ${studentName}\n` +
                        `Student: ${studentName}\n` +
                        `Teacher: ${teacherName}\n` +
                        `Status: ${status}\n` +
                        `Semester: ${semester}\n` +
                        `TA Status: ${taStatus}\n` +
                        `Budget: ${budget}\n` +
                        `Percentage: ${percentage}`;

        confirm(message);
    }

    function removeButtons(row) {
        row.cells[8].innerHTML = "";
        row.cells[9].innerHTML = "";
    }

    function updateHeaderVisibility() {
        const checkboxes = document.querySelectorAll('#myTable input[type="checkbox"]');
        const headerRow = document.querySelector('#myTable thead tr');
        const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        headerRow.cells[8].style.display = isAnyChecked ? "table-cell" : "none";
        headerRow.cells[9].style.display = isAnyChecked ? "table-cell" : "none";

        document.querySelectorAll('#myTable tbody tr:not(.dropDownTextArea)').forEach(row => {
            row.cells[8].style.display = isAnyChecked ? "table-cell" : "none";
            row.cells[9].style.display = isAnyChecked ? "table-cell" : "none";
        });
    }