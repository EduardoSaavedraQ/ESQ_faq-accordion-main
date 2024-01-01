function toggleSummaryIcon(details) {
    let img = details.querySelector('summary img');

    if(details.open) {
        img.src = './assets/images/icon-minus.svg';
        img.alt = 'A minus icon';
    } else {
        img.src = './assets/images/icon-plus.svg';
        img.alt = 'A plus icon';
    }
}

function configureDetailsToggle() {
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach(e => e.addEventListener('toggle', () => toggleSummaryIcon(e)));
}

configureDetailsToggle();