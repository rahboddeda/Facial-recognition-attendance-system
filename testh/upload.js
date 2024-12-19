const imagePreview = document.getElementById('image-preview');
const uploadButton = document.getElementById('upload-button');

uploadButton.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.capture = 'camera';

    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // Save the image data in local storage
                localStorage.setItem('uploadedImage', reader.result);
                // Display the image preview
                imagePreview.innerHTML = `<img src="${reader.result}" alt="Uploaded Image">`;
            }

            reader.readAsDataURL(file);
        }
    };

    fileInput.click();
});
