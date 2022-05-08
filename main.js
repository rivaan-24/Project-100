var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textarea = document.getElementById("textarea_output");
function start_button() {
    textarea.innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textarea_output").innerHTML = Content;
    if (Content == "take my selfie") {
        console.log("taking selfie ---");
        speak();
    }
}
    
function speak() {
    var synthesis = window.speechSynthesis;
    speak_data = "Taking your selfies in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function () {
        img_id = "pic_1";
        take_snapshot();
        //speak_data = "Taking your first selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synthesis.speak(utterThis);
        save_photo();
    }, 10000);
    setTimeout(function () {
    img_id = "pic_2";
    take_snapshot();
    //speak_data = "Taking your second selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(utterThis);
    save_photo();
    }, 10000);
    setTimeout(function () {
    img_id = "picture3";
    take_snapshot();
    //speak_data = "Taking your third selfie in 10 seconds";//
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(utterThis);
    save_photo();
    }, 10000);
}

function take_snapshot() {
    console.log(img_id); 
    Webcam.snap(function (data_uri) {

        if (img_id == "pic_1") {
            document.getElementById("camera_1").innerHTML = '<img id="pic_1" src="' + data_uri + '"/>';
        }
        if(img_id == "pic_2") {
        document.getElementById("camera_2").innerHTML = '<img id="pic_2" src="' + data_uri + '"/>';
        }
        if (img_id == "pic_3") {
        document.getElementById("camera3").innerHTML = '<img id="pic3" src="' + data_uri + '"/>';
        }
        //});
        //}
    });
}
function save_photo() {
    // Get the link1 element
    link1 = document.getElementById("link1");
    console.log("In save_photo - link1 = " + link1);
    
    // Get element pic_1
    pic_link = document.getElementById(img_id);
    console.log(pic_link);

    // Get the source of the picture taken
    image = pic_link.src;
    console.log(image);

    // Assign the picture reference to link1 element
    link1.href = image;
    
    // Save the picture
    link1.click();

     // Get the link2 element
    link2 = document.getElementById("link2");
    console.log("In save_photo - link2 = " + link2);
    
    // Get element pic_2
    pic_link2 = document.getElementById(img_id);
    console.log(pic_link2);

    // Get the source of the picture taken
    image = pic_link2.src;
    console.log(image);

    // Assign the picture reference to link2 element
    link2.href = image;
    
    // Save the picture
    link2.click();

    // Get the link3 element
    link3 = document.getElementById("link3");
    console.log("In save_photo - link3 = " + link3);
    
    // Get element pic_3
    pic_link3 = document.getElementById(img_id);
    console.log(pic_link3);

    // Get the source of the picture taken
    image = pic_link3.src;
    console.log(image);

    // Assign the picture reference to link3 element
    link3.href = image;
    
    // Save the picture
    link3.click();
}