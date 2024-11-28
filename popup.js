document.getElementById("sendRequest").addEventListener("click", async () => {
    // Generate a random text for testing
    const randomText = ["This is awesome", "Not good at all"][Math.floor(Math.random() * 2)];
    console.log("Sending text to API:", randomText); // Debugging log

    try {
        const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comments: [randomText] // Fixed typo here from "commnets" to "comments"
            })
        });

        // Check if the response status indicates success
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }

        // Parse the JSON response
        const result = await response.json();
        console.log("API Response:", result);

        // Display the response on the popup
        document.getElementById("response").innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("response").innerText = `Error: ${error.message}`;
    }
});
