
document.addEventListener("DOMContentLoaded", function () {
    const jobProvider = document.getElementById("jobProvider");

    jobProvider.addEventListener("submit", function (e) {

        console.log("job provider Event is hit",jobProvider);


        e.preventDefault();
        const formData = new FormData(jobProvider);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log("This is job provider data",data);

        // Send data to Google Sheets (replace the URL with your Google Apps Script URL)
        fetch("https://script.google.com/macros/s/AKfycbxus3Ltohzc2fOO7sC27GIXyh9oKjcPExdXVx9m29WSIfYTI3T1qcKR1EcIdvlWByl-Rw/exec", {
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
                    jobProvider.reset();
                } else {
                    alert("Form submission failed.");
                }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            });
    });

});
