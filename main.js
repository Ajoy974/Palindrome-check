function check() {
  var input = document.getElementById("inp").value;

  // Check if the input is empty
  if (input.trim().length === 0) {
    alert("Please enter text");
    return; // Exit the function early if input is empty
  }

  var cleanedText = input.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
  var reversedText = cleanedText.split("").reverse().join('');

  var resultParagraph = document.getElementById("rst");

  if (cleanedText === reversedText) {
    resultParagraph.textContent = "Yes! It's a palindrome";
  } else {
    resultParagraph.textContent = "No! It's not a palindrome";
  }
}