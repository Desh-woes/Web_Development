// Question and answer variables containing the questions and answers_quiz1 for the first quiz.
let answers_quiz1  = ["a", "b", "c", "d", "a", "b"];
let question_arr_Q1 = ["question1", "question2", "question3", "question4", "question5", "question6"];

// List containing the id's of the images to be displayed when a question is answered.
let mark_img = ["img1", "img2", "img3", "img4", "img5", "img6"];

// Function to check responses in the first quiz
function check_response() {
    //Count to keep track of the number of correct choices
    let count = 0;

    // Loop going through the checked value per question, to check if the chosen value is the same as the answer
    for (let i = 0; i < question_arr_Q1.length ; i++) {
        // Variable to store the current question
        let curr_question = question_arr_Q1[i];

        // Variable to get the checked box in the current value
        let curr_question_val = document.querySelector('input[name="'+curr_question+'"]:checked');

        // Question mark img
        let Q_img = document.getElementById(mark_img[i]);

        // logic to make sure all questions are checked before submission
        if (curr_question_val == null){
            alert("Fucking😒😒 answer all questions Idiot");
            return;
        }

        // Increase count if all questions have been checked and the checked value is correct
        else if (curr_question_val.value === answers_quiz1[i]){
            count++;
            Q_img.src = "Images/tick.png";
        }
        // Make the images visible
        Q_img.style.display = "block";
    }

    // Display the result of the quiz
    display_result(count);

    // Styling for the button after a submission has been made.
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "#c7c7c7";
}

// Function to update the results tab
function display_result(count){
	// After all questions have been answered, display the result box alongside the appropriate message
    let result_tab = document.querySelector(".result");
    result_tab.style.display = "block";

    // Variables to store the result of the test i.e the score, percentage and message.
    document.getElementById("score").innerHTML = "Score: " +  count + "/6";
    document.getElementById("percentage").innerHTML ="Percentage: " + (100 * (count/6)).toFixed()+"%";
    let message_h4 = document.getElementById("message");
    if (count === 6){
        message_h4.innerHTML = "Message: Well done. Crammer aye. Only you"
    }
    else if (3 < count && count < 6) {
        message_h4.innerHTML = "Message: You're trying sha. Maybe school is for you afterall"
    }
    else {
        message_h4.innerHTML = "Message: You're just an olodo. better go and read. 😂😂";
    }
}

// Dictionary containing the answers in quiz2
question_answer = {
	Q1 : ["a", "question1", "Sorry that was the wrong option. The correct option is a because Timi created it"],
	Q2 : ["b", "question2", "Sorry that was the wrong option. The correct option is a because desh created it"],
	Q3 : ["c", "question3", "Sorry that was the wrong option. The correct option is a because woes created it"],
	Q4 : ["d", "question4", "Sorry that was the wrong option. The correct option is a because shina created it"],
	Q5 : ["a", "question5", "Sorry that was the wrong option. The correct option is a because peters created it"],
	Q6 : ["b", "question6", "Sorry that was the wrong option. The correct option is a because emelyne created it"]
};

// Variables to keep track of the number of questions answered correctly and the total number of questions answered.
let Q_2_ans = 0;
let correct_ans = 0;

// Function to check responses for the second quiz
function check_response2(name){

	// Current question 
	let curr_question = question_answer[name][1];

	// Selected answer for the current question
    let curr_question_val = document.querySelector('input[name="'+curr_question+'"]:checked');

    // Get Question mark image i.e tick and cancel images respectively
    let Q_img = document.querySelector("#"+name+ " img");

    // alert(curr_question);
    // Check if the question has been anwered
    if (curr_question_val == null){
        alert("Fucking😒😒 answer all questions Idiot");
        return;
    }

    // Check if the answer is correct.
    else if(curr_question_val.value === question_answer[name][0]){
        generate_correct(name);
        Q_img.src = "Images/tick.png";
        correct_ans++;
    }

    // Check if the answer is incorrect and display the neccesary feedback.
    else if(curr_question_val.value !== question_answer[name][0]){
        generate_wrong(name, question_answer);
    }

    // Increase the number of questions answered
    Q_2_ans++;

    // Display the question tick
    Q_img.style.display = "block";

    // Disable the submit button
    document.querySelector("#" + name + " .button2").disabled = true;
    document.querySelector("#" + name + " .button2").style.backgroundColor = "#c7c7c7";

    // Display the result tab if all questions have been answered.
    if (Q_2_ans === 6) {
    	display_result(correct_ans);
    }
}

// Function to generate feedback when the given answer is correct
function generate_correct(name) {
    let para = document.createElement("P");
    let t = document.createTextNode("You got it right! :)");
    para.appendChild(t);
    para.style.color = "#30c741";
    document.getElementById(name).appendChild(para);
}

// Function to generate feedback when the given answer is wrong
function generate_wrong(name, question_answer) {
    let para = document.createElement("P");
    let t = document.createTextNode(question_answer[name][2]);
    para.appendChild(t);
    para.style.color = "#c73a26";
    document.getElementById(name).appendChild(para);
}

// Generate slider output for quiz 3
function updateTextInput(val) {
    document.getElementById('textInput').value = "Slider value: " + val;
}

// Dictionary containing the answers in quiz3
question_answer2 = {
	Q1 : ["41", "number_picker", "Sorry that was the wrong option. The correct option is a because Timi created it"],
	Q2 : ["volvo", "dropdown", "Sorry that was the wrong option. The correct option is a because desh created it"],
	Q3 : ["Slider value: 50", "textInput", "Sorry that was the wrong option. The correct option is a because woes created it"],
	Q4 : ["Emelyne", "text_question", "Sorry that was the wrong option. The correct option is a because shina created it"],
	Q5 : [["a", "b"], "question5", "Sorry that was the wrong option. The correct option is a because peters created it"],
	Q6 : [["c", "d"], "question6", "Sorry that was the wrong option. The correct option is a because emelyne created it"]
};

// Variables to keep track of the number of questions answered correctly and the total number of questions answered.
let Q_2_ans2 = 0;
let correct_ans2 = 0;

// Function to check responses for the third quiz.
function check_response3(id_val){
    // Get Question mark image i.e tick and cancel images respectively
    let Q_img = document.querySelector("#"+id_val+ " img");

    // Logic to check questions 1 to question 4.
	if (id_val === "Q1" || id_val === "Q2" || id_val === "Q3" || id_val === "Q4") {
	    // Get response value
	    let response = document.getElementById(question_answer2[id_val][1]);
	    console.log(response.value);

	    // Check if response is not blank
        if (response.value === ""){
            alert("Fill in the answer before submitting");
            return;
        }

        // Check if answer is correct
        else if (response.value === question_answer2[id_val][0]){
            generate_correct(id_val);
            Q_img.src = "Images/tick.png";
            correct_ans2++;
        }

        // Check if answer is wrong and generate feedback
        else if (response.value !== question_answer2[id_val][0]){
            generate_wrong(id_val, question_answer2);
        }
	}

	// Logic to check question 5 and 6
    else if (id_val === 'Q5' || id_val === 'Q6') {
        // Get input tag
        let curr_question = question_answer2[id_val][1];

        // Get all the checked values in that question
        let curr_question_val = document.querySelectorAll('input[name="'+curr_question+'"]:checked');

        // Check if the value is not blank
        if (curr_question_val[0] == null){
            alert("Fill in the answer before submitting");
            return;
        }

        // Check if the correct answers were provided
        else{
            // Check if the number of selected answers is equal to the number of actual answers
            if (curr_question_val.length === question_answer2[id_val][0].length) {
                for (let i = 0; i < curr_question_val.length ; i++) {

                    // Check if there is a wrong answer in the selected answers
                    if (curr_question_val[i].value !== question_answer2[id_val][0][i]){
                        // Generate feedback for incorrect response
                        generate_wrong(id_val, question_answer2);
                        return;
                    }

                }
                // Generate feedback for correct response
                generate_correct(id_val);
                Q_img.src = "Images/tick.png";
                correct_ans2++;
            }

            // Generate feedback for incorrect responses
            else {
                generate_wrong(id_val, question_answer2)
            }

        }
    }
    // Increase the number of questions answered
    Q_2_ans2++;

    // Disable the submit button
    document.querySelector("#" + id_val + " .button2").disabled = true;
    document.querySelector("#" + id_val + " .button2").style.backgroundColor = "#c7c7c7";

    // Display image if correct or wrong
    Q_img.style.display = "block";

    // Display the result tab if all questions have been answered.
    if (Q_2_ans2 === 6) {
        display_result(correct_ans2);
    }
}