const form = document.getElementById('formWithoutGrid');
const anonymousToggle = document.getElementById('anonymousToggle');
const personalInfoSection = document.getElementById('personalInfoSection');
const fileInput = document.getElementById('documents');
const fileUploadContent = document.querySelector('.file-upload-content');

let isAnonymous = false;

// Toggle anonymous mode
anonymousToggle.addEventListener('click', function () {
    isAnonymous = !isAnonymous;
    this.classList.toggle('active');

    const requiredFields = ['fullName', 'email', 'phone'];

    if (isAnonymous) {
        personalInfoSection.style.display = 'none';
        requiredFields.forEach(id => {
            const field = document.getElementById(id);
            if (field) {
                field.removeAttribute('required');
                field.value = '';
            }
        });
    } else {
        personalInfoSection.style.display = 'block';
        requiredFields.forEach(id => {
            const field = document.getElementById(id);
            if (field) {
                field.setAttribute('required', '');
            }
        });
    }
});

const textareas = document.querySelectorAll("textarea.form-control");

function autoResize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

// auto resize textarea while take input
textareas.forEach(textarea => {
    autoResize(textarea);
    textarea.addEventListener("input", () => autoResize(textarea));
});

document.getElementById("formWithoutGrid").addEventListener("reset", () => {
    setTimeout(() => {   // thoda delay do taaki reset pehle ho jaye
        textareas.forEach(textarea => {
            textarea.style.height = "";  // min-height apply hoga
        });
    }, 0);
});

// File upload preview
fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        fileUploadContent.innerHTML = `
            <span>✅</span>
            <div>${files.length} file(s) selected</div>
        `;
    } else {
        fileUploadContent.innerHTML = `
            <span>📄</span>
            <div>Click to upload or drag and drop</div>
            <small>Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</small>
        `;
    }
});

// Form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = '⏳ Processing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        alert(isAnonymous ? '🎉 Anonymous submission successful!' : '🎉 Submission successful!');
        submitBtn.textContent = 'Submit Application';
        submitBtn.disabled = false;
    }, 2000);
});

// Reset form
form.querySelector('.btn-secondary').addEventListener('click', () => {
    if (confirm('Reset the form?')) {
        form.reset();
        if (isAnonymous) anonymousToggle.click();
        fileUploadContent.innerHTML = `
            <span>📄</span>
            <div>Click to upload or drag and drop</div>
            <small>Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</small>
        `;
    }
});