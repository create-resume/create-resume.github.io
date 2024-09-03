const templates = {
    modern: (data) => `
        <div class="modern-resume">
            <h1>${data.fullName}</h1>
            <p>אימייל: ${data.email} | טלפון: ${data.phone}</p>
            <h2>תקציר</h2>
            <p>${data.summary}</p>
            <h2>ניסיון תעסוקתי</h2>
            ${data.experience.map(job => `
                <div class="job">
                    <h3>${job.title} ב${job.company}</h3>
                    <p>${job.dates}</p>
                    <p>${job.description}</p>
                </div>
            `).join('')}
            <h2>השכלה</h2>
            ${data.education.map(edu => `
                <div class="education">
                    <h3>${edu.degree} - ${edu.institution}</h3>
                    <p>${edu.dates}</p>
                </div>
            `).join('')}
            <h2>כישורים</h2>
            <p>${data.skills}</p>
        </div>
    `,

    classic: (data) => `
        <div class="classic-resume">
            <header>
                <h1>${data.fullName}</h1>
                <p>${data.email} | ${data.phone}</p>
            </header>
            <section>
                <h2>תקציר מקצועי</h2>
                <p>${data.summary}</p>
            </section>
            <section>
                <h2>ניסיון תעסוקתי</h2>
                ${data.experience.map(job => `
                    <div class="job">
                        <h3>${job.title}</h3>
                        <p class="company-date">${job.company} | ${job.dates}</p>
                        <p>${job.description}</p>
                    </div>
                `).join('')}
            </section>
            <section>
                <h2>השכלה</h2>
                ${data.education.map(edu => `
                    <div class="education">
                        <h3>${edu.degree}</h3>
                        <p>${edu.institution} | ${edu.dates}</p>
                    </div>
                `).join('')}
            </section>
            <section>
                <h2>כישורים</h2>
                <p>${data.skills}</p>
            </section>
        </div>
    `,

    creative: (data) => `
        <div class="creative-resume">
            <div class="sidebar">
                <div class="profile">
                    <h1>${data.fullName}</h1>
                    <p>${data.email}</p>
                    <p>${data.phone}</p>
                </div>
                <div class="skills">
                    <h2>כישורים</h2>
                    <ul>
                        ${data.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="main-content">
                <section class="summary">
                    <h2>תקציר מקצועי</h2>
                    <p>${data.summary}</p>
                </section>
                <section class="experience">
                    <h2>ניסיון תעסוקתי</h2>
                    ${data.experience.map(job => `
                        <div class="job">
                            <h3>${job.title} - ${job.company}</h3>
                            <p class="dates">${job.dates}</p>
                            <p>${job.description}</p>
                        </div>
                    `).join('')}
                </section>
                <section class="education">
                    <h2>השכלה</h2>
                    ${data.education.map(edu => `
                        <div class="education-item">
                            <h3>${edu.degree}</h3>
                            <p>${edu.institution} | ${edu.dates}</p>
                        </div>
                    `).join('')}
                </section>
            </div>
        </div>
    `
};