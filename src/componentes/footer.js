function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="bg-[#012025] py-8 text-center text-white">
      <p class="text-xs">© ${currentYear} Clinihard Sistemas. (41) 98903-1310</p>
      <div class="mt-4">
        <p class="text-xs">sistemas.clinihard@gmail.com</p>
      </div>
    </footer>
  `;
}

export default Footer;
