const button = document.querySelectorAll(".button");
const deskirption = document.querySelectorAll(".deskirption");
const body = document.querySelector("body");

const arr = [
    {
        Judul : "Cardistry",
        Paragraf1:"Cardistry adalah seni memanipulasi dan mengatur kartu remi dengan cara yang estetis dan mengesankan. Berbeda dengan sulap, di mana fokus utamanya adalah untuk menipu mata penonton, cardistry lebih menekankan pada gerakan-gerakan yang indah dan lancar yang diciptakan dengan kecepatan dan ketepatan yang tinggi",
        TagLine:"What is Cardistry ?",
        url:"https://youtu.be/N2aRACTmDS8?si=mc27ZPAKz5nz5cIH"

    },

    {
        Judul : "Programing",
        Paragraf1:"Bahasa pemrograman adalah set instruksi yang digunakan untuk mengarahkan komputer untuk melakukan tugas tertentu. Ada dua jenis: tingkat rendah (misalnya, bahasa rakitan) dan tingkat tinggi (seperti Python, Java). Mereka memungkinkan programmer untuk menulis kode yang kemudian dieksekusi oleh komputer untuk membuat program dan aplikasi. Ini adalah alat utama dalam pembangunan teknologi modern.",
        TagLine:"What is Programing",
        url:"https://youtu.be/Dv7gLpW91DM?si=n_Me26baa4nbcyrx"
    },

    {
        Judul : "Judo",
        Paragraf1:"Jigoro Kano menciptakan Judo pada tahun 1882 di Jepang, menggabungkan prinsip-prinsip bela diri tradisional dengan filosofi pengembangan diri. Dia mendirikan Kodokan Judo di Tokyo, yang menjadi pusat bagi perkembangan dan penyebaran judo di seluruh dunia. Sejak itu, judo telah menjadi olahraga bela diri yang populer secara global dan menjadi bagian dari Olimpiade sejak 1964.",
        TagLine:"What is Judo",
        url:"https://youtu.be/6k6kFuBybD4?si=JpCge3TiaDZy4sy1"
        }

]

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        // Untuk blur
        body.classList.add('blur');

        //Make div and child to deskirption
        const dialogElement = document.createElement('div');
        dialogElement.innerHTML = 
        `
            <dialog class="dialog">
                <h2>${arr[i].Judul}</h2>
                <p>${arr[i].Paragraf1}</p>
                <a href="${arr[i].url}" target="_blank">${arr[i].TagLine}</a>
                <br>
                <br>
                <button class="button close">Close</button>
            </dialog>
        `;
        deskirption[i].appendChild(dialogElement);

        // Open dialog
        const dialogBox = deskirption[i].querySelector('dialog');
        dialogBox.showModal();

        const closeButton = dialogBox.querySelector('.close');
        closeButton.addEventListener('click', function() {
            dialogBox.close();
            dialogElement.remove();
            body.classList.remove('blur');
        });
    });
}






