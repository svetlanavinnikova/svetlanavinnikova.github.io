const filterItems = document.querySelectorAll('.card');

document.querySelector('.portfolio__nav').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    document.querySelectorAll('.portfolio__nav-item').forEach(elem => elem.classList.remove('portfolio__nav-item--chosen'))

    let filterClass = event.target.id;

    filterItems.forEach(elem => {
        elem.classList.remove('hide');
        event.target.classList.add('portfolio__nav-item--chosen')
        
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');   
        }

    });
});