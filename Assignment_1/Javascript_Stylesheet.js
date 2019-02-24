// Defining slide show function
// Iterator to move through the array of image paths
let iterator = 0;

// Images list containing image file paths that would be used for our slide show
let images = ['Assets/header.jpg', 'Assets/Image1.jfif', "Assets/Image2.jfif"];

// Varaiable to keep track of time intervals at which our images would be changing (3 seconds)
let time = 3000;

// Element variable contianing our banner image property
let element = document.querySelector(".banner_img img");

// Slideshow function that changes the banner image source once called
function slide_show() {
	// Set img src to the value of the image at iterator.
    element.src = images[iterator];

    // Update iterator
    if (iterator < images.length - 1){
        iterator++
    } else {
        iterator = 0
    }

    // Call function once time is due.
    setTimeout("slide_show()", time);
}

// Executes the slideshow function as soon as the page is loaded.
window.onload = slide_show();


// Funtion to validate input in the contact page form
function validate_text() {
	// Gets value of name input and stores it in the text_input variable
    let text_input = document.getElementById("f_name").value;

    // Removes spaces from the text input to aid the validation process
    text_input = text_input.split(" ").join("");

    // Gets value of email input and stores it in the email_input variable
    let email_input = document.getElementById("e_name").value;

    // Logic to validate that neither the name box not the email address box is left blank
    if (text_input.trim() === "" || email_input.trim() === "") {
    	alert("Blank values are not allowed for the Name and email categories");
    	return false;
    }

    // Logic to validate that text entered in the name segment is part of the valid set as described in the assignment.
    let valid_text = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-']);
    for (let i = 0; i < text_input.length ; i++){
    	if (!valid_text.has(text_input[i].toLowerCase())){
    	    alert("Name box only accepts valid english alphabets and hyphens");
    	    return false;
    	}	
    }

    // Logic to validate that email structure is standard and not invalid
    let valid_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!valid_email.test(String(email_input).toLowerCase())){
        alert("Email address is not valid. Please enter a valid address");
        return false;
    }
    alert("Form has been submitted");
    return true;
}

// Query selector for all elements with the "Show_more" class
let readMoreBar = document.querySelectorAll(".show_more");

// Query selector for all elements with the ".p_description" class in the ".double_Products" class
let wrapper = document.querySelectorAll(".double_Products .p_description");

// Variable to store text in the toggle button
let toggleButtonText;

// Loops through all the elements and sets attribute to hidden
[].forEach.call(wrapper, function (wrapper) {
    wrapper.setAttribute('hidden', true);
});

// Loops through all the elements and removes hidden attribute
[].forEach.call(readMoreBar, function (readMoreBar) {
    readMoreBar.removeAttribute('hidden');
    	

    // Adds event listner to the read more bar
    readMoreBar.addEventListener("click", function () {

    	// Selects all elements with the class "p_description" from the parent element
        wrapper = this.parentElement.querySelector('.p_description');
        
        // Selects all elements with the class ".text" from the parent element
        toggleButtonText = this.querySelector('.text');

        // Test output to track program
        console.log(wrapper.hasAttribute('hidden'));

        // Logic to toggle between showing the extra text or not.
        if (!wrapper.hasAttribute('hidden')){
            toggleButtonText.innerText = "Show more";
            wrapper.setAttribute('hidden', true);
            readMoreBar.setAttribute('aria-expanded', false)
        }
        else {
           	toggleButtonText.innerText = "Show less"
            wrapper.removeAttribute('hidden')
            readMoreBar.setAttribute('aria-expanded', true)
        }
    });
});

// Function to change the opacity of the image and link box when the mouse is over it
// Function takes in the Id of the current element
function mouseon(id) {
    let image_prod = document.querySelector('#'+id+' .product_image2');
    let overlay = document.querySelector('#'+id+' .overlay');
    image_prod.style.opacity = 0;
    overlay.style.opacity = 1;
}

// Function to change the opacity of the image and link box when the mouse is out of it
// Function takes in the Id of the current element
function mouseout(id) {
    let image_prod = document.querySelector('#'+id+' .product_image2');
    let overlay = document.querySelector('#'+id+' .overlay');
    image_prod.style.opacity = 1;
    overlay.style.opacity = 0;
}

// Creating another slideshow for the About page to control the Our team area
let iterator2 = 0;

// Images list containing image file paths that would be used for our slide show
let images_list = ['Assets/Professional.png', 'Assets/professional1.jfif'];
let names_list = ['Adesina Oluwarotimi E', 'Oluwarotimi E. Adesina']
let desc_list = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.']

// Varaiable to keep track of time intervals at which our images would be changing (3 seconds)
let time2 = 5000;

// Element variable contianing our banner image property
let img_element = document.querySelector(".team_members img");

let name_element = document.querySelector(".team_members .member h1")
console.log(name_element)

let desc_element = document.querySelector(".team_members .member p")

// Slideshow function that changes the banner image source once called
function slide_show2() {
    // Set img src to the value of the image at iterator.
    img_element.src = images_list[iterator2];
    name_element.innerHTML = names_list[iterator2];
    desc_element.innerHTML = desc_list[iterator2];

    // Update iterator
    if (iterator2 < images_list.length - 1){
        iterator2++
    } else {
        iterator2 = 0
    }

    // Call function once time is due.
    setTimeout("slide_show2()", time2);
}

// Executes the slideshow function as soon as the page is loaded.
window.onload = slide_show2();