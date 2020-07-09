function resultado() {
    let p1, p2, p3, p4, p5, p6, p7;
    let nota = 3;
     
    <!-- 1ª pregunta -->
    if (document.getElementById('q1a1').checked==true) {p1=1}
    if (document.getElementById('q1a2').checked==true) {p1=1}
    if (document.getElementById('q1a3').checked==true) {p1=1}
    <!-- 2ª pregunta -->
    if (document.getElementById('q2a1').checked==true) {p2=1}
    if (document.getElementById('q2a2').checked==true) {p2=3}
    if (document.getElementById('q2a3').checked==true) {p2=5}
    <!-- 3ª pregunta -->
    if (document.getElementById('q3a1').checked==true) {p3=1}
    if (document.getElementById('q3a2').checked==true) {p3=3}
    if (document.getElementById('q3a3').checked==true) {p3=5}
    <!-- 4ª pregunta -->
    if (document.getElementById('q4a1').checked==true) {p4=1}
    if (document.getElementById('q4a2').checked==true) {p4=3}
    if (document.getElementById('q4a3').checked==true) {p4=5}
    <!-- 5ª pregunta -->
    if (document.getElementById('q5a1').checked==true) {p5=1}
    if (document.getElementById('q5a2').checked==true) {p5=3}
    if (document.getElementById('q5a3').checked==true) {p5=5}
    <!-- 6ª pregunta -->
    if (document.getElementById('q6a1').checked==true) {p6=1}
    if (document.getElementById('q6a2').checked==true) {p6=4}
    if (document.getElementById('q6a3').checked==true) {p6=4}
    <!-- 7ª pregunta -->
    if (document.getElementById('q7a1').checked==true) {p7=1}
    if (document.getElementById('q7a2').checked==true) {p7=3}
    if (document.getElementById('q7a3').checked==true) {p7=5}
    nota=p1+p2+p3+p4+p5+p6+p7+nota;
    
    
    if (nota <= 10)
    alert("El plan que recomendamos para ti es la TIENDAS EXPRESS");
    if (nota > 10 && nota <= 21)
    alert("El plan que recomendamos para ti es la TIENDAS MARKETPLACE MC");
    if (nota >= 22)
    alert("El plan que recomendamos para ti es la TIENDAS VTEX");
    location.reload();
    }