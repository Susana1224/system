<script>
    import '$lib/css/index.css'
    import logo from '$lib/img/sds.jfif'
    import logo2 from '$lib/img/logo-2.jpeg'
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
</svelte:head>
<main>
    <div class="form-container">
        <div class="logo-container">
            <!-- Logos más grandes -->
            <img src={logo2} alt="Logo">
            <img src={logo} alt="Logo 2">
        </div>

        <h2>Registro</h2>

        <form action="?/register" method="POST" id="registerForm">
            <!-- Nombre -->
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <!-- Apellido -->
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required>

            <!-- Correo Electrónico -->
            <label for="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="email" required placeholder="ejemplo@dominio.com">

            <label for="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" name="password" required>

            <input type="submit" value="registrar">
        </form>
        <br>
        <a href="/login" aria-label="link" data-sveltekit-reload>Ya tienes cuenta? Inicia Sesión</a>
    </div>
</main>

<style>
      main {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("$lib/img/fondo.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    color: rgb(8, 8, 8);
}
</style>

