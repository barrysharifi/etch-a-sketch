 // Get the grid container element
 const gridContainer = document.getElementById('gridContainer');
 // Create the grid
 for (let i = 0; i < 16; i++) {
   // Create a row container
   const rowContainer = document.createElement('div');
   rowContainer.className = 'grid-container';
   rowContainer.id = 'row' + '-' + i
   gridContainer.appendChild(rowContainer)
  

   // Create 16 grid items within the row container
   for (let j = 0; j < 16; j++) {
     const gridItem = document.createElement('div');
     gridItem.className = 'grid-item';
     gridItem.id = 'column' + '-' + j
     rowContainer.appendChild(gridItem);
   }

   // Add the row container to the main grid container
   gridContainer.appendChild(rowContainer);
 }
