
document.addEventListener('DOMContentLoaded', () => {
    const violationForm = document.getElementById('violation-form');
    const violationsTable = document.getElementById('violations-table').getElementsByTagName('tbody')[0];
  
    violationForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const vehicleNumber = document.getElementById('vehicle-number').value;
      const driverName = document.getElementById('driver-name').value;
      const violation = document.getElementById('violation').value;
      const date = document.getElementById('date').value;
  
      addViolation(vehicleNumber, driverName, violation, date);
      violationForm.reset();
    });
  
    function addViolation(vehicleNumber, driverName, violation, date) {
      const newRow = violationsTable.insertRow();
  
      const cellId = newRow.insertCell(0);
      const cellVehicleNumber = newRow.insertCell(1);
      const cellDriverName = newRow.insertCell(2);
      const cellViolation = newRow.insertCell(3);
      const cellDate = newRow.insertCell(4);
      const cellActions = newRow.insertCell(5);
  
      cellId.textContent = violationsTable.rows.length;
      cellVehicleNumber.textContent = vehicleNumber;
      cellDriverName.textContent = driverName;
      cellViolation.textContent = violation;
      cellDate.textContent = date;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        violationsTable.deleteRow(newRow.rowIndex - 1);
        updateIds();
      });
      cellActions.appendChild(deleteButton);
    }
  
    function updateIds() {
      for (let i = 0; i < violationsTable.rows.length; i++) {
        violationsTable.rows[i].cells[0].textContent = i + 1;
      }
    }
  });
  
