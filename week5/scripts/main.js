// Create three variables that hold references to the input, button, and list elements using const.
const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
button.addEventListener('click', () => {
    let response = input.value

    // in the function block for adding a chapter, make sure the input is not blank and if not,
    if (response == "") {
        var favchap = document.getElementById("favchap");
        
    // create an li element
    } else {
        const listElement = document.createElement("li");

        // create a delete button
        const deleteButton = document.createElement("button");
        
        // populate the li elements textContent or innerHTML with the input
        listElement.textContent = response;
        
        // populate the button textContent with an ❌
        deleteButton.textContent = "❌";
        
        // Create an aria-label attribute on the button for accessibility
        deleteButton.setAttribute("aria-label", "Delete Chapter");
        
        // append the li element with the delete button
        listElement.append(deleteButton);
                
        // append the list element with the li element just created and appended with text and the delete button
        list.append(listElement);	
        
        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(listElement);
        });
    };
    // send the focus to the input element
        input.value = "";
    input.focus();
});
