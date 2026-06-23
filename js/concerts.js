fetch('data/concerts.json')
    .then(response => response.json())
    .then(concerts => {

        concerts.sort((a,b) => {

            return new Date(a.data) - new Date(b.data);

        });

        const list =
        document.getElementById('concerts-list');

        const proxims =
        concerts.slice(0,5);

        proxims.forEach(concert => {

            const bloc = document.createElement('div');

            bloc.classList.add('concert-item');

            bloc.innerHTML = `

                <div class="concert-date">

                    ${formatDate(concert.data)}

                </div>

                <div class="concert-info">

                    <h3>${concert.poble}</h3>

                    <p>${concert.event}</p>

                    <span>${concert.adreca}</span>

                </div>

                <div class="concert-ticket">

                    ${
                        concert.link

                        ?

                        `<a href="${concert.link}" target="_blank">
                            Entrades
                        </a>`

                        :

                        `<span>De franc</span>`
                    }

                </div>

            `;

            list.appendChild(bloc);

        });

    });

function formatDate(data){

    const date = new Date(data);

    return date.toLocaleDateString(
        'ca-ES',
        {
            day:'2-digit',
            month:'short'
        }
    );

}
