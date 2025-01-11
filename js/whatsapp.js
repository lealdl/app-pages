import Footer from '/src/componentes/footer.js'; // Caminho para o arquivo footer.js

document.addEventListener("DOMContentLoaded", () => {
    // Função para configurar o link do WhatsApp no modal
    function setWhatsAppLink(appName) {
        console.log("App Name:", appName);

        // Acessa o número do WhatsApp dentro do footer.js
        const footerText = document.querySelector("footer p") ? document.querySelector("footer p").innerText : null;
        console.log("Footer Text:", footerText);

        if (footerText) {
            const phoneMatch = footerText.match(/\(\d{2}\)\s?\d{5}-\d{4}/); // Ajuste na regex para permitir espaços
            console.log("Phone Match:", phoneMatch);

            if (phoneMatch) {
                const rawPhone = phoneMatch[0].replace(/[()\-\s]/g, "");
                const fullPhone = `55${rawPhone}`;

                const message = `Olá, gostaria de saber mais sobre o aplicativo ${appName}.`;
                const encodedMessage = encodeURIComponent(message);

                const whatsappModalLink = document.getElementById("whatsapp-modal-link");
                if (whatsappModalLink) {
                    whatsappModalLink.href = `https://wa.me/${fullPhone}?text=${encodedMessage}`;
                    whatsappModalLink.classList.remove('hidden');
                }
            } else {
                console.log("Número de telefone não encontrado ou no formato errado.");
            }
        } else {
            console.log("Texto do footer não encontrado.");
        }
    }

    function openModal(title, description, appName) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;

        setWhatsAppLink(appName);
        document.getElementById('modal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('modal').classList.add('hidden');
    }

    // Substituir o footer estático pela versão dinâmica
    const dynamicFooter = document.getElementById("dynamic-footer");
    if (dynamicFooter) {
        dynamicFooter.innerHTML = Footer();  // Chama a função do footer.js para injetar o conteúdo
    }

    window.openModal = openModal;
    window.closeModal = closeModal;
});
