<script>
  import { onMount } from 'svelte'

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'somos', label: '¿Quiénes somos?' },
    { id: 'servicios', label: '¿Qué ofrecemos?' },
    { id: 'niveles', label: 'Nuestros niveles' },
    { id: 'contacto', label: 'Contacto' }
  ]

  let menuOpen = $state(false)
  let activeId = $state('inicio')

  function toggleMenu() {
    menuOpen = !menuOpen
  }

  onMount(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    )

    sections.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  })
</script>

<header class="header">
  <figure class="logo-figure">
    <div class="logo-wrap">
      <img src="/logo_dos.jpeg" alt="South English" class="logo" />
      <figcaption><h1>South English</h1></figcaption>
    </div>
    <p>Instituto de INGLÉS</p>
  </figure>

  <!-- Botón hamburguesa (reemplaza el hack del checkbox) -->
  <button class="menu-btn" type="button" aria-label="Abrir menú" onclick={toggleMenu}>
    <svg viewBox="0 0 50 50" width="30" height="30" style="fill:#000">
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
    </svg>
  </button>

  <nav class="desktop-nav">
    <ul class="navbar">
      {#each navItems as item}
        <li>
          <a
            href={`#${item.id}`}
            class="nav-link"
            data-section={item.id}
            class:active={activeId === item.id}
            onclick={() => (menuOpen = false)}
          >{item.label}</a>
        </li>
      {/each}
    </ul>
  </nav>

  <!-- Menú móvil desplegable -->
  {#if menuOpen}
    <div class="mobile-menu">
      <ul class="navbar mobile-nav">
        {#each navItems as item}
          <li>
            <a href={`#${item.id}`} onclick={() => (menuOpen = false)}>{item.label}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</header>

<main>
  <section id="inicio">
    <p class="container">Inglés en Zona Sur y en todas partes</p>
    <div class="position-absolute social-row">
      <ul class="d-flex align-center">
        <li>
          <a href="https://api.whatsapp.com/send?phone=5491135995886" target="_blank" rel="noopener noreferrer">
            <svg fill="#25D366" viewBox="0 0 30 30" width="30px" height="30px" role="img"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
          </a>
        </li>
        <li>
          <a href="http://facebook.com/south.english.ll" target="_blank" rel="noopener noreferrer">
            <svg fill="#1877F2" viewBox="0 0 30 30" width="30px" height="30px" role="img"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/south.english/" target="_blank" rel="noopener noreferrer">
            <svg fill="#E4405F" viewBox="0 0 30 30" width="30px" height="30px"><title>Instagram</title><path d="M12 0C8.74 0 8.333 .015 7.053 .072 5.775 .132 4.905 .333 4.14 .63c-.789 .306-1.459 .717-2.126 1.384S.935 3.35 .63 4.14C.333 4.905 .131 5.775 .072 7.053 .012 8.333 0 8.74 0 12s.015 3.667 .072 4.947c.06 1.277 .261 2.148 .558 2.913 .306 .788 .717 1.459 1.384 2.126 .667 .666 1.336 1.079 2.126 1.384 .766 .296 1.636 .499 2.913 .558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558 .788-.306 1.459-.718 2.126-1.384 .666-.667 1.079-1.335 1.384-2.126 .296-.765 .499-1.636 .558-2.913 .06-1.28 .072-1.687 .072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651 .935 19.86 .63c-.765-.297-1.636-.499-2.913-.558C15.667 .012 15.26 0 12 0zm0 2.16c3.203 0 3.585 .016 4.85 .071 1.17 .055 1.805 .249 2.227 .415 .562 .217 .96 .477 1.382 .896 .419 .42 .679 .819 .896 1.381 .164 .422 .36 1.057 .413 2.227 .057 1.266 .07 1.646 .07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224 .562-.479 .96-.899 1.382-.419 .419-.824 .679-1.38 .896-.42 .164-1.065 .36-2.235 .413-1.274 .057-1.649 .07-4.859 .07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196 .016-3.586 .061-4.861 .061-1.17 .255-1.814 .42-2.234 .21-.57 .479-.96 .9-1.381 .419-.419 .81-.689 1.379-.898 .42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045 .03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794 .646-1.439 1.44-1.439 .793-.001 1.44 .645 1.44 1.439z"></path></svg>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section id="somos">
    <h2>¿Quiénes Somos?</h2>
    <div class="container">
      <p>South English es un instituto de idiomas enfocado en la enseñanza de Inglés como lengua de comunicación global.</p>
      <p>Nuestro objetivo es lograr que nuestros alumnos puedan utilizar lo que aprendan con nosotros en situaciones reales.</p>
      <p>Estamos comprometidos con la calidad, la innovación y sobre todo con lograr que nuestros estudiantes disfruten de su aprendizaje.</p>
    </div>
  </section>

  <section id="servicios">
    <h2>¿Qué ofrecemos?</h2>
    <div class="container">
      <figure><img src="/undraw_community.svg" alt="grupales"><figcaption>Clases grupales e individuales</figcaption></figure>
      <figure><img src="/undraw_vr_chat.svg" alt="virtuales"><figcaption>Clases virtuales y presenciales</figcaption></figure>
      <figure><img src="/undraw_exams.svg" alt="internacionales"><figcaption>Exámenes internacionales</figcaption></figure>
      <figure><img src="/undraw_businesswoman.svg" alt="empresariales"><figcaption>Business english</figcaption></figure>
    </div>
  </section>

  <section id="niveles">
    <h2>Nuestros niveles</h2>
    <article class="d-flex container flex-wrap">
      <div>
        <h3>Niños</h3>
        <ul><li>Tiny Juniors (desde los 4 años)</li><li>Juniors 1, 2 y 3</li><li>Kids 1, 2 y 3</li></ul>
      </div>
      <div>
        <h3>Adolescentes y Adultos</h3>
        <ol><li>1er Año - Beginners</li><li>2do Año - Elementary</li><li>3er Año - Pre-intermediate</li><li>4to Año - Intermediate</li><li>5to Año - Upper Intermediate A</li><li>6to Año - Upper Intermediate B</li></ol>
        <ul><li>FCE Course</li><li>CAE Course</li></ul>
        <ul><li>Six levels of conversation courses</li><li>Intensive Courses (1, 2, 3, 4)</li></ul>
      </div>
    </article>
    <article class="container tuNivel">
      <h3>Conoce tu nivel</h3>
      <p>Contactate con nosotros para coordinar un test de nivel oral y escrito evaluado por profesionales de la enseñanza en la comodidad de tu casa via zoom o google meets.</p>
    </article>
  </section>

  <section id="contacto">
    <h2>Contacto</h2>
    <div class="container">
      <p>Completá el formulario y nos comunicaremos a la brevedad.</p>
      <form action="https://formsubmit.co/southenglishlab@gmail.com" method="post" class="d-flex flex-column">
        <label for="name">nombre</label>
        <input type="text" name="name" id="name" placeholder="Nombre y Apellido o Nick" required>
        <label for="email">mail</label>
        <input type="email" name="email" id="email" placeholder="nombre@mail.com" required>
        <textarea name="consulta" cols="80" rows="5" required placeholder="Hola, estoy interesadx en los cursos ¿Cuándo me puedo inscribir?"></textarea>
        <input type="submit" value="ENVIAR">
      </form>
      <p>¡Te esperamos!</p>
    </div>
  </section>
</main>

<footer class="d-flex justify-around align-center">
    <img src="/LogoFooter.png" alt="South English">
    <p>Copyright © 2022 South English. Todos los derechos reservados. El nombre y el logo de South English son marcas registradas.</p>
</footer>

<style>
  /* ===== HEADER / NAV (estilos propios del componente Svelte) ===== */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 12vh;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .logo-figure { margin-right: auto; text-align: center; padding: 0 1rem; }
  .logo-wrap { display: flex; flex-direction: column; align-items: center; }
  .logo { max-width: 120px; max-height: 4.5rem; border-radius: 50%; }
  .logo-figure p { font-family: "Afl"; padding: 0; text-align: center; margin-top: -0.25rem; }

  /* Botón hamburguesa */
  .menu-btn {
    display: flex; align-items: center; justify-content: center;
    background: none; border: none; cursor: pointer; padding: 0.5rem;
  }

  .navbar { list-style: none; margin: 0; padding: 0; display: flex; gap: 1.25rem; }
  .nav-link {
    position: relative;
    display: block;
    font-family: "Afl";
    font-size: 1.15rem;
    color: #000;
    padding: 0.25rem 0;
  }
  .nav-link:hover { color: var(--secondary-color); }

  /* Subrayado del item activo (por sección) */
  .nav-link.active::before {
    content: "";
    position: absolute;
    left: 5px; right: 5px; bottom: -2px; height: 3px;
    background-color: var(--secondary-color);
    border-radius: 2px;
  }

  /* Menú móvil desplegable */
  .mobile-menu {
    position: absolute;
    top: 100%;            /* justo debajo del header sticky */
    left: 0; right: 0;
    width: 100%;
    background-color: var(--complement-color);
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    padding: 1rem 1rem 1.75rem;
  }
  .mobile-nav { flex-direction: column; align-items: center; gap: 0.5rem; }
  .mobile-nav a {
    display: block; width: 100%; text-align: center;
    font-family: "Afl"; font-size: 1.4rem; color: #fff; padding: 0.75rem;
    border-radius: 8px; text-decoration: none;
  }
  .mobile-nav a:hover { background-color: rgba(255, 255, 255, 0.15); }

  main { min-height: 80vh; }
</style>
