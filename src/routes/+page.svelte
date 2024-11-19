<script lang="ts">
    import '$lib/css/inicio.css'
	import logo from '$lib/img/sds.jfif'
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
	/>
	<title>Bienvenido</title>
</svelte:head>

<div class="navbar_redes">
	<a
		href="https://www.instagram.com/snackdeliverysistem"
		aria-label="link"
		style="color: rgb(255, 255, 255);"
	>
		<i class="fa-brands fa-square-instagram"></i></a
	>
	<a
		href="https://www.facebook.com/profile.php?id=61568620092660&mibextid=JRoKGi"
		aria-label="link"
		style="color: rgb(255, 255, 255);"><i class="fa-brands fa-facebook"></i></a
	>
	<a
		href="http://www.youtube.com/@SnackDeliverySistem"
		aria-label="link"
		style="color: rgb(255, 255, 255);"><i class="fa-brands fa-youtube"></i></a
	>
</div>
<div class="titulo"><h2 class="letra">SDS</h2></div>
<div class="menu" aria-placeholder="Tipos de Motos">
	<ul>
		<li style="color: white; font-family: Arial, Helvetica, sans-serif; font-weight: bold;">
			<a style="color: white;" href="/pae" aria-label="link" data-sveltekit-reload>¿QUE ES EL PAE?</a>
		</li>
		<li style="color: white; font-family: Arial, Helvetica, sans-serif; font-weight: bold">
			<a style="color: white;" href="/login" aria-label="link" data-sveltekit-reload>INICIAR SESION</a>
		</li>
		<li style="color: white; font-family: Arial, Helvetica, sans-serif; font-weight: bold">
			<a style="color: white;" href="/pagina" aria-label="link" data-sveltekit-reload>INGRESA TUS ESTUDIANTES</a>
		</li>
	</ul>
</div>
<div class="cart1">
	<center>
		<div class="NAKED">
			Es un programa que ofrece un complemento alimentario a los estudiantes de educación general y
			especial, matriculados en establecimientos públicos o privados. El objetivo es garantizar una
			alimentación balanceada, variada y de calidad, adecuada a las necesidades nutricionales de
			cada grupo etario. El PAE se focaliza en zonas geográficas y en poblaciones vulnerables, como
			las comunidades étnicas, las víctimas del conflicto armado, y las poblaciones con
			vulnerabilidad socioeconómica
		</div>
	</center>
</div>
<img class="img" src={logo} alt="" />
