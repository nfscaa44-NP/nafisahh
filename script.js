document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();
    alert('Pesan berhasil dikirim. Terima kasih!');
    this.reset();
});
