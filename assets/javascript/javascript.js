function hidePlayerData(){
  let div = document.getElementById('player-entry');

  if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function submitPlayerData(){
    alert('This feature can only be used again, when the current tournament has been completed.');
}