fetch('/entrants')
    .then(res => res.json())
    .then(entrants => {
        entrants.forEach(entrant => {
            const container = document.createElement('div');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');

            h1.textContent = entrant.name;
            h2.textContent = entrant.mainCharacter;

            container.appendChild(h1);
            container.appendChild(h2);

            document.body.appendChild(container);
        });
    })