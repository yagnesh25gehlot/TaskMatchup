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
        fetch("https://script.google.com/macros/s/AKfycby0tPgLw1A1ciV8HttTE7ibiqBAczfC1wmJdaM_ETru8RFiu7_v0_-qI7dsAMEpGJh4/exec", {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("Form submitted successfully!");
                    contactForm.reset();
                } else {
                    alert("Form submission failed.");
                }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            });
    });


});
