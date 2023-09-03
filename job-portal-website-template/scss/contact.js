document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        console.log("contactForm Event is hit",contactForm);


        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log("This is query data",data);


        // Send data to Google Sheets (replace the URL with your Google Apps Script URL)
        fetch("https://script.google.com/macros/s/AKfycbzNUlhW1NX7JG1AI2fcAvLnBjsiCeqaqk7v-oTP6JmayyhmyDOHnSG9Em9dGkUBFmbv/exec", {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("this is the response",response)
                // if (response.ok) {
                    alert("Vola!! Form submitted successfully!");
                    contactForm.reset();
                // } else {
                //     alert("Form submission failed.");
                // }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            });
    });


});
