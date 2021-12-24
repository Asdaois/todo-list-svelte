<script>
	import TodoItem from '$lib/todo-item.svelte';
	const title = 'Todo';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="todos">
	<h1>{title}</h1>

	<form class="new" action="" method="">
		<input
			type="text"
			name="text"
			aria-label="Add a todo"
			placeholder="+ type to add a todo"
		/>
	</form>

	<TodoItem />
</div>

<style>
	.todos {
		width: 100%;
		max-width: 42rem;
		margin: 4rem auto;
	}
	
	.new {
		margin: 0 0 0.5rem 0;
	}

	.new input {
		font-size: 1.5rem;
		width: 100%;
		padding: 0.5rem 1rem 0.3rem 1rem;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 0.5rem;
		text-align: center;
	}

	.todos :global(input) {
		border: 0.1rem solid transparent;
	}

	.todos :global(input:focus-visible) {
		box-shadow: inset 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
		border: 0.1rem solid #ff3e00 !important;
		outline: none;
	}
</style>
