

async function renDerUser() {
    try {
        const vada = await fetch("https://randomuser.me/api/");
        const vadaKeldi = await vada.json();

        vadaKeldi.results.forEach(obyektlar => {
            const div = document.createElement("div");

            div.innerHTML = `
            <div class="card">
                <h2 class="title">${obyektlar.name.title} ${obyektlar.name.first} ${obyektlar.name.last}</h2>
                <img class="img" src="${obyektlar.picture.large}">
                <button class="refresh-btn">Change user</button>
            </div>
            `;

            document.body.appendChild(div);

            div.querySelector(".refresh-btn").addEventListener("click", () => {
                location.reload();
            });
        });
    } catch (error) {
        console.log("Xatolik");
    }
}

renDerUser();



