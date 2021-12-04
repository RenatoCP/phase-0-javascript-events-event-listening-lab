function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
    alert('I was clicked!');
}

input.addEventListener('click', clickAlert);

const div5 = document.querySelector('body div div div div div');

function clickAlert() {
  alert('I was clicked!');
}

div5.addEventListener('click', clickAlert);
}
