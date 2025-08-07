document.addEventListener('DOMContentLoaded', function() {
    const scrapeBtn = document.getElementById('scrapeBtn');
    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');
    const headlinesContainer = document.getElementById('headlinesContainer');
    const statusMessage = document.getElementById('statusMessage');

    // Mock function - in a real implementation, this would call your Python backend
    scrapeBtn.addEventListener('click', function() {
        statusMessage.textContent = "Scraping headlines...";
        statusMessage.className = "status";
        
        // Simulate API call to your Python backend
        setTimeout(() => {
            // This is mock data - replace with actual API call to your Python scraper
            const mockHeadlines = [
                "Breaking: Major event happened today",
                "Scientists discover new breakthrough",
                "Political leaders meet for summit",
                "Tech company announces revolutionary product",
                "Sports team wins championship"
            ];
            
            displayHeadlines(mockHeadlines);
            statusMessage.textContent = "Scraping complete!";
            statusMessage.className = "status success";
        }, 1500);
    });

    saveBtn.addEventListener('click', function() {
        if (headlinesContainer.children.length === 0) {
            statusMessage.textContent = "No headlines to save!";
            statusMessage.className = "status error";
            return;
        }
        
        statusMessage.textContent = "Saving headlines to file...";
        statusMessage.className = "status";
        
        // In a real implementation, this would call your Python backend to save the file
        setTimeout(() => {
            statusMessage.textContent = "Headlines saved to headlines.txt";
            statusMessage.className = "status success";
        }, 1000);
    });

    clearBtn.addEventListener('click', function() {
        headlinesContainer.innerHTML = '';
        statusMessage.textContent = "Results cleared.";
        statusMessage.className = "status";
    });

    function displayHeadlines(headlines) {
        headlinesContainer.innerHTML = '';
        headlines.forEach(headline => {
            const headlineElement = document.createElement('div');
            headlineElement.className = 'headline-item';
            headlineElement.textContent = headline;
            headlinesContainer.appendChild(headlineElement);
        });
    }
});