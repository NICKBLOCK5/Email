document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const domain = document.getElementById('domain').value;
    const email = `${username}${domain}`;
    
    document.getElementById('result').textContent = `Seu e-mail gerado é: ${email}`;
});
