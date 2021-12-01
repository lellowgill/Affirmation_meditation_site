// // onclick of that button update text of the <p>
// // maybe add an id to the <p> you want to change
// // then update the text of that id

// let affirmationText = document.getElementById("affirmationText");
// affirmationText.text("the next word")



<html>
    <head>
        <script>
            let affirmationText = document.getElementById("affirmationText");
            affirmationText.text("the next word")

            const array_name = ["grateful.", "thankful.", "thoughtful", "mindful", "abundant", "creative", "well rested", 
            "brave", "enough", "respectful", "bold", "vivrant", "healthy", "wealthy", "a gracious receiver"]

            <p id="words">Happy</p>
            <button type="button" onclick="affirmationText()">Happy</button>
        </script>
    </head>
</html>