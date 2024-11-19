<script>
	/** @type {{ children: import('svelte').Snippet }} */
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
