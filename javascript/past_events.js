let contenedorHTML = document.getElementById('tarjetero')

function printcard(contenedor){
    for(let evento of events){ 
        if(evento.date < currentDate)
        contenedor.innerHTML +=`
        <section class="card">
            <img class="img-card" src="${evento.image}" alt="foto">
            <h2>${evento.name}</h2>
            <p>${evento.description}</p>
            <div class="texto">
                <p>$ ${evento.price}</p>
                <button>Read More</button>
            </div>
        </section>
        `
    }
}
printcard(contenedorHTML)