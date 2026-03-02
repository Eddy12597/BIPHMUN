document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const processBtn = document.getElementById('processBtn');
    const status = document.getElementById('status');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');

    let selectedFile = null;

    if (!dropZone) return;

    // Drag and Drop Handlers
    ['dragover', 'dragenter'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.style.backgroundColor = "rgba(0,0,0,0.05)";
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.style.backgroundColor = "transparent";
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const file = e.dataTransfer.files[0];
        validateAndHandleFile(file);
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files[0]) {
            validateAndHandleFile(e.target.files[0]);
        }
    });

    function validateAndHandleFile(file) {
        if (file && (file.name.endsWith('.docx') || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            selectedFile = file;
            fileName.textContent = file.name;
            fileSize.textContent = (file.size / 1024).toFixed(2) + ' KB';
            fileInfo.style.display = 'block';
            processBtn.disabled = false;
            status.innerHTML = '';
        } else {
            showStatus('Please upload a valid .docx file', 'error');
        }
    }

    window.processFile = async function() {
        if (!selectedFile) return;
        
        processBtn.disabled = true;
        showStatus('Processing your resolution...', '');
        
        const formData = new FormData();
        formData.append('file', selectedFile);
        
        try {
            const response = await fetch('https://Eddy12597.pythonanywhere.com/upload', {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Server processing failed');
            }
            
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'APP_' + selectedFile.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            showStatus('Success! Your formatted document has been downloaded.', 'success');
        } catch (error) {
            showStatus('Error: ' + error.message, 'error');
            console.error(error);
        } finally {
            processBtn.disabled = false;
        }
    };

    function showStatus(message, type) {
        status.innerHTML = `<p class="${type}">${message}</p>`;
    }
});