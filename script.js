// Change Text Content
const changeTextButton = document.getElementById('change-text-button');
const dynamicText = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = 'Text changed dynamically!';
});

// Modify CSS Styles
const changeStyleButton = document.getElementById('change-style-button');
const styledDiv = document.getElementById('styled-div');

changeStyleButton.addEventListener('click', () => {
    styledDiv.style.backgroundColor = 'lightblue';
    styledDiv.style.color = 'darkblue';
    styledDiv.style.borderRadius = '5px';
});

// Add/Remove Element
const addRemoveButton = document.getElementById('add-remove-button');
const elementContainer = document.getElementById('element-container');
let elementAdded = false;

addRemoveButton.addEventListener('click', () => {
    if (elementAdded) {
        elementContainer.innerHTML = ''; // Remove the element
        addRemoveButton.textContent = 'Add Element';
        elementAdded = false;
    } else {
        const newElement = document.createElement('p');
        newElement.textContent = 'New element added!';
        elementContainer.appendChild(newElement); // Add the new element
        addRemoveButton.textContent = 'Remove Element';
        elementAdded = true;
    }
});
