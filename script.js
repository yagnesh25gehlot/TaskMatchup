document.addEventListener("DOMContentLoaded", function () {
    const workForm = document.getElementById("workForm");
    const doWorkSection = document.getElementById("doWorkSection");
    const assignWorkSection = document.getElementById("assignWorkSection");

    workForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(workForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (data.option === "Do Work") {
            data.jobDescription = "N/A"; // No job description for those who want to do work
        } else if (data.option === "Assign Work") {
            data.skills = "N/A"; // No skills for those who want to assign work
        }

        // Send data to Google Sheets (replace the URL with your Google Apps Script URL)
        fetch("https://script.google.com/macros/s/AKfycbwSOVC2ra2FErvLHDMIAIckYyshxIrJUkNigbmGxDbXFP-2tFQNVj5Fpg3uEOc7Agk/exec", {
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

    // Show/hide sections based on radio button selection
    workForm.addEventListener("change", function () {
        if (doWork.checked) {
            doWorkSection.style.display = "block";
            assignWorkSection.style.display = "none";
        } else if (assignWork.checked) {
            doWorkSection.style.display = "none";
            assignWorkSection.style.display = "block";
        }
    });
});
