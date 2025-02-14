function openModal(title, description, appUrl) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const qrCodeContainer = document.getElementById("qrcode-container");

    // Define título e renderiza a descrição corretamente com HTML
    modalTitle.textContent = title;
    modalDescription.innerHTML = description; // Agora interpreta tags HTML corretamente

    // Remove QR Code anterior, se existir
    qrCodeContainer.innerHTML = "";

    // Gera um novo QR Code com o link do app
    if (appUrl) {
        new QRCode(qrCodeContainer, {
            text: appUrl,
            width: 128,
            height: 128
        });
        qrCodeContainer.classList.remove("hidden");
    } else {
        qrCodeContainer.classList.add("hidden");
    }

    // Exibe o modal
    modal.classList.remove("hidden");
}
