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

    // Styling for the button after a submission has been made.
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "#c7c7c7";
}


