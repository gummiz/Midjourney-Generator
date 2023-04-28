function generatePromptOutput() {
  const mainIdeaInput = document.getElementById('mainIdea');
  const mainIdea = mainIdeaInput.value ? `${mainIdeaInput.value} |`: "";

  const aspectRatio = document.getElementById('aspectRatio').value;

  const medium = document.getElementById('medium').value;

  const cameraInput = document.getElementById('camera');
  const camera = cameraInput.value ? `Camera: ${cameraInput.value} |`: "";  

  const lightingInput = document.getElementById('lighting');
  const lighting = lightingInput.value ? `${lightingInput.value} |`: "";  

  const descriptorInput = document.getElementById('descriptor');
  const descriptor = descriptorInput.value ? `${descriptorInput.value} |` : '';


  const descriptorInput2 = document.getElementById('descriptor2');
  const descriptor2 = descriptorInput2.value ? `${descriptorInput2.value} |` : '';

  const backgroundInput = document.getElementById('background');
  const background = backgroundInput.value ? `on ${backgroundInput.value} background |` : '';

  const artistInput = document.getElementById('artist');
  const artist = artistInput.value ? `by ${artistInput.value} |` : '';

  const filmInput = document.getElementById('film');
  const film = filmInput.value ? `${filmInput.value} film style |` : '';

  // Tile Checkbox 
  const tileInput = document.getElementById('tile');
  let tile = '';

  if (tileInput.checked) {

    tile = "--tile";
  }


  const promptOutput = `/imagine prompt: ${medium} of ${mainIdea} ${artist} ${camera} ${background} ${descriptor2} ${descriptor} ${lighting} ${film} ${tile} --ar ${aspectRatio} --v 5`;

  document.getElementById('promptOutput').value = promptOutput.trim();

  // After setting the prompt output value, update the copy button visibility
  toggleCopyButtonVisibility();
}

function init() {


  document.getElementById('promptOutput').addEventListener('input', toggleCopyButtonVisibility);

  // Call the function initially to set the button visibility on the first load
  toggleCopyButtonVisibility();

  // Hide Output once Input gets new content
  var inputTextarea = document.getElementById("mainIdea");
  var outputTextarea = document.getElementById("promptOutput");
  var myButton = document.getElementById("copyButton");

  inputTextarea.addEventListener("input", function () {
    outputTextarea.value = "";
    myButton.textContent = "Copy Prompt";
    myButton.style.display = "none";
  });




}

window.onload = init;

function toggleCopyButtonVisibility() {
  const outputField = document.getElementById('promptOutput');
  const copyButton = document.getElementById('copyButton');
  if (outputField.value.trim() === '') {
    copyButton.style.display = 'none';
  } else {
    copyButton.style.display = 'inline-block';
  }
}


function copyPromptOutput() {
  const copyText = document.getElementById('promptOutput');
  copyText.select();
  document.execCommand('copy');

  // alert('Copied the prompt output: ' + copyText.value);


  // // show notification
  // var promptOutput = document.getElementById("promptOutput");
  // promptOutput.select();
  // document.execCommand("copy");
  // var notification = document.getElementById("copyNotification");
  // notification.innerHTML = "Prompt copied";
  // notification.classList.add("show");
  // setTimeout(function () {
  //   notification.classList.remove("show");
  // }, 3000);


  // Get the button element
  var button = document.getElementById("copyButton");

  // Change the text to the checkmark symbol
  button.innerHTML = "&#10003; Prompt Copied";

  // Set the font family to a font that supports the checkmark symbol
  button.style.fontFamily = "Arial, sans-serif";

}
