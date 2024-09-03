const templates = {
    modern: (data) => `
        <div class="resume modern">
            <header>
                <h1>${data.fullName}</h1>
                <div class="contact-info">
                    ${data.email} | ${data.phone}
                </div>
            </header>
            <section class="summary">
                <h2>תקציר מקצועי</h2>
                ${data.summary ? `<p>${data.summary}</p>` : ''}
            </section>
            <section class="experience">
                <h2>ניסיון תעסוקתי</h2>
                ${data.experience.map(job => `
                    <div class="experience-item">
                        <div class="job-title">${job.title}</div>
                        <div>${job.company}, ${job.dates}</div>
                        <p>${job.description}</p>
                    </div>
                `).join('')}
            </section>
            <section class="education">
                <h2>השכלה</h2>
                ${data.education.map(edu => `
                    <div class="education-item">
                        <div class="degree">${edu.degree}</div>
                        <div>${edu.institution}, ${edu.dates}</div>
                    </div>
                `).join('')}
            </section>
            <section class="skills">
                <h2>כישורים</h2>
                ${data.skills ? `
                    <ul>
                        ${data.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                    </ul>
                ` : ''}
            </section>
        </div>
    `,

    classic: (data) => `
        <div class="resume classic">
            <header>
                <h1>${data.fullName}</h1>
                <div class="contact-info">
                    ${data.email} | ${data.phone}
                </div>
            </header>
            <section class="summary">
                <h2>תקציר מקצועי</h2>
                ${data.summary ? `<p>${data.summary}</p>` : ''}
            </section>
            <section class="experience">
                <h2>ניסיון תעסוקתי</h2>
                ${data.experience.map(job => `
                    <div class="experience-item">
                        <h3>${job.title}</h3>
                        <p>${job.company}, ${job.dates}</p>
                        <p>${job.description}</p>
                    </div>
                `).join('')}
            </section>
            <section class="education">
                <h2>השכלה</h2>
                ${data.education.map(edu => `
                    <div class="education-item">
                        <h3>${edu.degree}</h3>
                        <p>${edu.institution}, ${edu.dates}</p>
                    </div>
                `).join('')}
            </section>
            <section class="skills">
                <h2>כישורים</h2>
                ${data.skills ? `
                    <ul>
                        ${data.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                    </ul>
                ` : ''}
            </section>
        </div>
    `,

    creative: (data) => `
        <div class="resume creative">
            <header>
                <h1>${data.fullName}</h1>
                <div class="contact-info">
                    ${data.email} | ${data.phone}
                </div>
            </header>
            <section class="summary">
                <h2>על עצמי</h2>
                ${data.summary ? `<p>${data.summary}</p>` : ''}
            </section>
            <section class="experience">
                <h2>מסלול קריירה</h2>
                ${data.experience.map(job => `
                    <div class="experience-item">
                        <h3>${job.title} ב${job.company}</h3>
                        <p class="dates">${job.dates}</p>
                        <p>${job.description}</p>
                    </div>
                `).join('')}
            </section>
            <section class="education">
                <h2>מסע לימודי</h2>
                ${data.education.map(edu => `
                    <div class="education-item">
                        <h3>${edu.degree}</h3>
                        <p>${edu.institution} | ${edu.dates}</p>
                    </div>
                `).join('')}
            </section>
            <section class="skills">
                <h2>כלי העבודה שלי</h2>
                ${data.skills ? `
                    <ul>
                        ${data.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                    </ul>
                ` : ''}
            </section>
        </div>
    `
};