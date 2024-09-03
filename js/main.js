document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const previewContainer = document.getElementById('resume-preview');
    const generatePdfButton = document.getElementById('generate-pdf');
    console.log('Event listeners set up');

function updatePreview() {
    console.log('Updating preview...');
    const formData = new FormData(form);
    const resumeData = {
        fullName: formData.get('fullName') || '',
        email: formData.get('email') || '',
        phone: formData.get('phone') || '',
        summary: formData.get('summary') || '',
        experience: [],
        education: [],
        skills: formData.get('skills') || ''
    };

    // Handle multiple job entries
    const jobTitles = formData.getAll('job-title[]');
    const companies = formData.getAll('company[]');
    const jobDates = formData.getAll('job-dates[]');
    const jobDescriptions = formData.getAll('job-description[]');

    for (let i = 0; i < jobTitles.length; i++) {
        if (jobTitles[i]) {
            resumeData.experience.push({
                title: jobTitles[i],
                company: companies[i] || '',
                dates: jobDates[i] || '',
                description: jobDescriptions[i] || ''
            });
        }
    }

    // Handle multiple education entries
    const degrees = formData.getAll('degree[]');
    const institutions = formData.getAll('institution[]');
    const educationDates = formData.getAll('education-dates[]');

    for (let i = 0; i < degrees.length; i++) {
        if (degrees[i]) {
            resumeData.education.push({
                degree: degrees[i],
                institution: institutions[i] || '',
                dates: educationDates[i] || ''
            });
        }
    }

    console.log('Resume data:', resumeData);

    // Update preview with selected template
    const selectedTemplate = document.querySelector('input[name="template"]:checked').value;
    console.log('Selected template:', selectedTemplate);

    if (templates && typeof templates[selectedTemplate] === 'function') {
        console.log('Applying template...');
        previewContainer.innerHTML = templates[selectedTemplate](resumeData);
    } else {
        console.error('Template not found or not a function:', selectedTemplate);
        previewContainer.innerHTML = '<p>Error: Could not load template</p>';
    }

    // Update header separately
    const headerElement = previewContainer.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = `
            <h1>${resumeData.fullName}</h1>
            <div class="contact-info">
                ${resumeData.email} | ${resumeData.phone}
            </div>
        `;
    }
}

    function addExperienceField() {
        const container = document.getElementById('experience-container');
        const experienceField = document.createElement('div');
        experienceField.classList.add('experience-entry');
        experienceField.innerHTML = `
            <input type="text" name="job-title[]" placeholder="תפקיד" required>
            <input type="text" name="company[]" placeholder="חברה" required>
            <input type="text" name="job-dates[]" placeholder="תאריכים" required>
            <textarea name="job-description[]" placeholder="תיאור התפקיד" required></textarea>
            <button type="button" class="remove-btn"><i class="fas fa-trash-alt"></i></button>
        `;
        container.appendChild(experienceField);
        experienceField.querySelector('.remove-btn').addEventListener('click', () => {
            experienceField.remove();
            updatePreview();
        });
        updatePreview();
    }

    function addEducationField() {
        const container = document.getElementById('education-container');
        const educationField = document.createElement('div');
        educationField.classList.add('education-entry');
        educationField.innerHTML = `
            <input type="text" name="degree[]" placeholder="תואר" required>
            <input type="text" name="institution[]" placeholder="מוסד לימודים" required>
            <input type="text" name="education-dates[]" placeholder="תאריכים" required>
            <button type="button" class="remove-btn"><i class="fas fa-trash-alt"></i></button>
        `;
        container.appendChild(educationField);
        educationField.querySelector('.remove-btn').addEventListener('click', () => {
            educationField.remove();
            updatePreview();
        });
        updatePreview();
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        updatePreview();
    }

    function loadForm() {
        form.innerHTML = `
            <input type="text" name="fullName" placeholder="שם מלא" required>
            <input type="email" name="email" placeholder="אימייל" required>
            <input type="tel" name="phone" placeholder="טלפון" required>
            <textarea name="summary" placeholder="תקציר מקצועי" required></textarea>

            <h3>ניסיון תעסוקתי</h3>
            <div id="experience-container"></div>
            <button type="button" id="add-experience" class="add-btn"><i class="fas fa-plus"></i> הוסף ניסיון</button>

            <h3>השכלה</h3>
            <div id="education-container"></div>
            <button type="button" id="add-education" class="add-btn"><i class="fas fa-plus"></i> הוסף השכלה</button>

            <h3>כישורים</h3>
            <input type="text" name="skills" placeholder="כישורים (מופרדים בפסיקים)">

            <h3>בחר תבנית</h3>
            <div class="template-options">
                <label>
                    <input type="radio" name="template" value="modern" checked>
                    <span>מודרני</span>
                </label>
                <label>
                    <input type="radio" name="template" value="classic">
                    <span>קלאסי</span>
                </label>
                <label>
                    <input type="radio" name="template" value="creative">
                    <span>יצירתי</span>
                </label>
            </div>

            <button type="submit" class="submit-btn"><i class="fas fa-check"></i> צור קורות חיים</button>
        `;

        const addExperienceBtn = document.getElementById('add-experience');
        const addEducationBtn = document.getElementById('add-education');

        addExperienceBtn.addEventListener('click', addExperienceField);
        addEducationBtn.addEventListener('click', addEducationField);

        // הוסף שדה ניסיון ראשוני
        addExperienceField();

        // הוסף שדה השכלה ראשוני
        addEducationField();

        form.addEventListener('submit', handleFormSubmit);

        // הוסף מאזינים לשינויים בטופס
        form.addEventListener('input', updatePreview);
        form.addEventListener('change', updatePreview);

        // הוסף מאזיני אירועים לכפתורי רדיו של התבניות
        const templateRadios = document.querySelectorAll('input[name="template"]');
        templateRadios.forEach(radio => {
            radio.addEventListener('change', updatePreview);
        });

        // עדכן את התצוגה המקדימה בטעינה הראשונית
        updatePreview();
    }

    loadForm();

    generatePdfButton.addEventListener('click', generatePDF);
});