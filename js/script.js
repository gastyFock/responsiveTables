const search = document.querySelector('.input__group input'),
tableRows = document.querySelectorAll('tbody tr');

search.addEventListener('input', searchTable);

function searchTable () {
    tableRows.forEach ((row, i) => {
        let tableData = row.textContent.toLowerCase(),
        searchData = search.value.toLowerCase();
        row.classList.toggle('hide', tableData.indexOf(searchData) < 0);
        row.style.setProperty('--delay', i/25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visibleRow, i) => {
        visibleRow.style.backgroundColor = (i % 2 == 0) ? '0000000b' : 'transparent';
    })
};