// Alternar modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Enviar formulario de contacto
const form = document.getElementById('form')
const sendMail = document.getElementById('emailA')

function handleSendEmail(event) {
    event.preventDefault()
    const fd = new FormData(this)

    sendMail.setAttribute(
        'href' ,
         `mailTo: eliodyelfuerte05@gmail.com?subject=${fd.get('subject')}&body${fd.get(
            'message'
        )}`
    )

    sendMail.click()
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
}

form.addEventListener('submit', handleSendEmail)