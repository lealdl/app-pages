export function Navbar() {
    return `
      <header class="bg-blue-600 text-white">
        <div class="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 class="text-2xl font-bold">Dev Apps</h1>
          <nav>
            <ul class="flex gap-4">
              <li><a href="#apps" class="hover:underline">Meus Apps</a></li>
              <li><a href="#sobre" class="hover:underline">Sobre</a></li>
              <li><a href="#contato" class="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
  