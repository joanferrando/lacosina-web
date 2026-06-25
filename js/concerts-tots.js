fetch('data/concerts.json')

.then(response => response.json())

.then(concerts => {

    concerts.sort((a,b) => new Date(a.data) - new Date(b.data));

    const mesos = [
        "GEN","FEB","MAR","ABR","MAI","JUN",
        "JUL","AGO","SET","OCT","NOV","DES"
    ];

    const contenidor =
    document.getElementById("concerts-list");

    let anyActual = "";

    concerts.forEach(concert => {

        const data = new Date(concert.data);

        const any = data.getFullYear();

        const dia = String(data.getDate()).padStart(2,"0");

        const mes = mesos[data.getMonth()];

        if(any !== anyActual){

            anyActual = any;

            contenidor.innerHTML += `

                <h2 class="year-title">
                    ${any}
                </h2>

            `;
        }

        let boto = "";

        if(concert.link && concert.link.trim() !== ""){

            boto = `
                <div class="ticket">
                    <a href="${concert.link}"
                       target="_blank">

                       Entrades

                    </a>
                </div>
            `;

        }else if(concert.entrades &&
                 concert.entrades.trim() !== ""){

            boto = `
                <div class="ticket">
                    <span>${concert.entrades}</span>
                </div>
            `;

        }else{

            boto = `
                <div class="ticket"></div>
            `;
        }

        contenidor.innerHTML += `

        <div class="concert-item">

            <div class="concert-date">

                <span class="day">
                    ${dia}
                </span>

                <span class="month">
                    ${mes}
                </span>

            </div>

            <div class="concert-info">

                <h3>
                    ${concert.poble.toUpperCase()}
                </h3>

                <p>
                    ${concert.event}
                </p>

                ${
                    concert.adreca
                    ?
                    `<span>${concert.adreca}</span>`
                    :
                    ""
                }

                ${
                    concert.hora
                    ?
                    `<span>${concert.hora} h</span>`
                    :
                    ""
                }

            </div>

            ${boto}

        </div>

        `;

    });

});
