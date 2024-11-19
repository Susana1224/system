<script>
    import '$lib/css/login.css'
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Inicio de Sesión</title>
</svelte:head>

<div class="login-container">
	<h2>Inicio de Sesión</h2>
	<form action="?/login" method="POST">
		<input type="text" name="email" placeholder="Correo Electrónico" required />
		<input type="password" name="password" placeholder="Contraseña" required />
		<button type="submit">Ingresar</button>
	</form>
	<a href="/register" data-sveltekit-reload>¿No tienes cuenta? Regístrate</a>
</div>
