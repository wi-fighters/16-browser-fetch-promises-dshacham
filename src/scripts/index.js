// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
const modal = document.getElementById('myModal');
let modalPromise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve(modal);
    }, (1000 * 60));
});

modalPromise.then(function (modal) {
    modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
    if (e.target.className === 'close') {
        modal.style.display = 'none';
    };
});
