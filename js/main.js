// Initialize animations and events
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle animations to background accents
    const bgAccents = document.querySelectorAll('.bg-accent');
    bgAccents.forEach((accent, index) => {
        // Add different animation delays
        accent.style.animation = `float ${6 + index * 2}s infinite ease-in-out ${index * 1.5}s`;
    });
    
    // Handle form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            
            if (nameInput.value && emailInput.value) {
                // In a real implementation, this would send data to a backend
                alert('Thank you for signing up! We will notify you when early access is available.');
                signupForm.reset();
            }
        });
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
    `;
    
    document.head.appendChild(style);
    
    // Add fade-in animations to content sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.8s ease-out ${0.2 + index * 0.2}s forwards`;
    });
    

    
    document.head.appendChild(style);
});
