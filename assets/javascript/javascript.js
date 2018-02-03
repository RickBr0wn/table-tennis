function hidePlayerData(){
  let div = document.getElementById('player-entry');
  let hideButtonText = document.getElementById('btn-hidden');

  if (div.style.display !== 'none') {
        div.style.display = 'none';
        hideButtonText.innerHTML = 'Show Player Entry'; 
    }
    else {
        div.style.display = 'block';
        hideButtonText.innerHTML = 'Hide Player Entry';
    }
}

function submitPlayerData(){
    alert('This feature can only be used again, when the current tournament has been completed.');
}