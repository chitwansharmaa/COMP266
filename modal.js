// Javascript on opening and closing a popup modal. 
// Created 6 different fuctions with same capabilities to open and close a modal with different information. 
// If a user clicks anywhere outside of the modal, the modal closes. 
// Achieved this functionality by using event.target which will track clicks outside the modal. 
// Once the modal detects a click outside the modal dimensions it will hide it's display

function id_01(){
    var modal = document.getElementById('id01');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target.closest(".ws-modal")) {
      closeModal
    }
  }

}

function id_02(){
    var modal = document.getElementById('id02');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function id_03(){
    var modal = document.getElementById('id03');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function id_04(){
    var modal = document.getElementById('id04');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function id_05(){
    var modal = document.getElementById('id05');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function id_06(){
    var modal = document.getElementById('id06');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function closeModal() {
    document.querySelector(".w3-modal").style.display = "none"
  }