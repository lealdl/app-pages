function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "5541989031310"; // Número do WhatsApp no formato internacional
  const message = encodeURIComponent(
    "Olá desenvolvedor! Gostaria de mais informações sobre os aplicativos que desenvolve!"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return `
    <footer class="bg-[#012025] py-8 text-center text-white">
      <div class="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xs">
        <p>© ${currentYear} Clinihard Sistemas</p>
        <span class="hidden md:inline">||</span>
        <a href="${whatsappLink}" target="_blank" class="flex items-center gap-1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
               alt="WhatsApp" class="w-4 h-4">
          (41) 98903-1310
        </a>
        <span class="hidden md:inline">||</span>
        <p>sistemas.clinihard@gmail.com</p>
      </div>
    </footer>
  `;
}

export default Footer;
