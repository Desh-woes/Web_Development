let iterator = 0;
let images = ['Assets/header.jpg', 'Assets/Image1.jfif', "Assets/Image2.jfif"];
let time = 3000;
let element = document.querySelector(".banner_img img");

function slide_show() {
    element.src = images[iterator];

    if (iterator < images.length - 1){
        iterator++
    } else {
        iterator = 0
    }
    setTimeout("slide_show()", time);
}

window.onload = slide_show();

function validate_text() {
    let text_input = document.getElementById("f_name").value;
    text_input = text_input.split(" ").join("");
    let email_input = document.getElementById("e_name").value;

    if (text_input.trim() === "" || email_input.trim() === "") {
    	alert("Blank values are not allowed for the Name and email categories");
    	return false;
    }

    let valid_text = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-']);
    for (let i = 0; i < text_input.length ; i++){
    	if (!valid_text.has(text_input[i])){
    	    alert("Name box only accepts valid english alphabets and hyphens");
    	    return false;
    	}	
    }

    let valid_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!valid_email.test(String(email_input).toLowerCase())){
        alert("Email address is not valid. Please enter a valid address");
        return false;
    }
    alert("Form has been submitted");
    return true;
}

if ('querySelector' in document && 'addEventListener' in window){
	console.log("I am here");
    let readMoreBar = document.querySelectorAll(".show_more");
    let wrapper = document.querySelectorAll(".thriple_Products .p_description");
    let fullText;
    let toggleButtonText;

    [].forEach.call(wrapper, function (wrapper) {
        wrapper.setAttribute('hidden', true);
    });

    [].forEach.call(readMoreBar, function (readMoreBar) {
        readMoreBar.removeAttribute('hidden');
    	// console.log("I got here too")


        readMoreBar.addEventListener("click", function () {

            wrapper = this.parentElement.querySelector('.p_description');
            // readMoreBar = this.parentElement.querySelector('.')
            toggleButtonText = this.querySelector('.text');
    		// console.log("I got here too")

            console.log(wrapper.hasAttribute('hidden'));
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
}