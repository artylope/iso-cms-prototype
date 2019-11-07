let saveButton = document.getElementById('buttonSave');
let previewButton = document.getElementById('buttonPreview');

saveButton.addEventListener('click', function(){
  console.log('clicked');
  saveButton.classList.remove('blue');
  saveButton.innerHTML = 'Saving...';
  saveButton.classList.add('disabled');


  setTimeout(function(){
    previewButton.classList.remove('disabled');
    previewButton.classList.add('blue');
    saveButton.innerHTML = 'Save';
  }, 1000)

})
