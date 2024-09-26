1.	Initialize the Page: When the page loads, it will display the user information (e.g., “Malepati Chaitanya and 002499361”).
	2.	Add a New Student: Click the “Add New Student” button to add a new row for a student. You will see the student details, and the row will have a checkbox and a down arrow for toggling more details.

	3.	Edit Details: Once a row is selected, you can click the “Edit” button to see the student details in a confirmation popup. Although this is not a full editing functionality, it simulates an edit popup.

	4.	Delete a Row: After selecting a row, click the “Delete” button to remove both the student row and the expanded row from the table.


Functions:

	1.	initializePage():
	•	Initializes the page and displays userinfo content.

	2.	toggleRowDetails(imgElement):
	•	Toggles the visibility of the expanded student details row when the down arrow is clicked.

	3.	toggleSelection(checkbox):
	•	Handles the logic when a student row is selected. Updates button states and visibility accordingly.

	4.	addNewStudent():
	•	Adds a new student row to the table. Each row comes with a checkbox and an expandable details section.

	5.	checkSubmitButtonStatus():
	•	Checks if any rows are selected. If no rows are selected, it disables the “Submit” button and turns it gray and non-selectable.

	6.	addDeleteButton(row):
	•	Adds a “Delete” button to a row when selected. Deletes both the main row and the expanded details row details.

	7.	addEditButton(row):
	•	Adds an “Edit” button to a row when selected. Shows a confirmation popup with current student details.

	8.	showEditPopup(row):
	•	Displays the details of a selected student in a popup when the “Edit” button is clicked.

	9.	updateHeaderVisibility():
	•	Updates the visibility of the “Delete” and “Edit” columns based on whether any rows are selected.

	10.	removeButtons(row):
	•	Removes the “Delete” and “Edit” buttons from a row when it is deselected.
