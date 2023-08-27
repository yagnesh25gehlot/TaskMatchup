
document.addEventListener("DOMContentLoaded", function () {
    const workForm = document.getElementById("workForm");
    const jobProvider = document.getElementById("jobProvider");

    console.log("This is workform",workForm,jobProvider);

    workForm.addEventListener("submit", function (e) {
        console.log("jobseeker Event is hit",workForm);


        e.preventDefault();
        const formData = new FormData(workForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log("This is jobseeker data",data);


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
                    workForm.reset();
                } else {
                    alert("Form submission failed.");
                }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            });
    });




    jobProvider.addEventListener("submit", function (e) {

        console.log("job provider Event is hit",workForm);


        e.preventDefault();
        const formData = new FormData(workForm);
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
                    workForm.reset();
                } else {
                    alert("Form submission failed.");
                }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            });
    });

});
