var form = document.getElementById("surveyForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

  var formData = new FormData(form);
             fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Form submitted successfully!");
        } else {
            alert("Form submission failed. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });

    // Reset the form after submission
    form.reset();
});
