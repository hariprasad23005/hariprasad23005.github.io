function showPage(pageId, btn) {

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Remove active from all buttons
    document.querySelectorAll('.nav button').forEach(button => {
        button.classList.remove('active');
    });

    // Highlight clicked button
    btn.classList.add('active');
}

// Resume button
function downloadResume() {
    window.open("portfolio_template.pdf", "_blank");
}
