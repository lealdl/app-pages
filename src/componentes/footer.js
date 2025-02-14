function Footer() {
  const whatsappNumber = "5541989031310";
  const whatsappMessage = encodeURIComponent(
    "Olá Clinihard Sistemas! Gostaria de mais informações sobre os aplicativos que desenvolvem"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return `
    <footer class="bg-[#012025] py-4 text-center text-white text-xs">
      <!-- Mobile: Cada item em uma linha separada -->
      <div class="md:hidden block">
        <p>© 2025 Clinihard Sistemas</p>
        <p>
          <a href="${whatsappLink}" target="_blank" class="flex items-center justify-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="w-4 h-4">
            (41) 98903-1310
          </a>
        </p>
        <p>sistemas.clinihard@gmail.com</p>
      </div>

      <!-- Desktop: Tudo em uma linha com separadores -->
      <p class="hidden md:flex justify-center items-center gap-2">
        © 2025 Clinihard Sistemas ||
        <a href="${whatsappLink}" target="_blank" class="flex items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="w-4 h-4">
          (41) 98903-1310
        </a> ||
        sistemas.clinihard@gmail.com
      </p>
    </footer>
  `;
}

export default Footer;
