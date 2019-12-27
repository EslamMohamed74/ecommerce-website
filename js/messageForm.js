var contactForm = document.getElementById("messageForm")

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    var data = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value
    };


    var postServer = new XMLHttpRequest();


    postServer.open("POST", "http://js.vacsera.com/api/final-project",true);


    postServer.setRequestHeader("Content-Type", "application/json");
    


    postServer.onreadystatechange = function() { 
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Done");
            
        }else{
            console.log("Error");
            
        }
    }
    postServer.send(JSON.stringify(data));
});