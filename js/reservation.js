//const btn = document.getElementById('button');

function SendMail() {
    var params = {
      nom : document.getElementById("nom").value,
      tel : document.getElementById("tel").value,
      depart : document.getElementById("depart").value,
      arrivee : document.getElementById("arrivee").value,
      date : document.getElementById("date").value,
      heure : document.getElementById("heure").value
  
  
    }
    emailjs.send("service_57dumkt", "template_2ixgrql", params).then(function (res) {
      alert('Message Envoyé!')
    })
  
  }
  
  