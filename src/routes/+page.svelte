<script>


	import { Avatar } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	export let data;
</script>

<div class="flex items-start p-[25px] gap-4 flex-wrap h-[100vh] w-[100vw]">
	{#each data.coders as coder}
		<div class="flex justify-center w-full h-full gap-2">
			<div class="w-[50%] h-full">
				<div class="flex border-2 rounded-3xl h-full w-[100%] bg-[#000]">
					<div class="flex justify-center items-center rounded-3xl h-full w-[40%]">
						<Avatar class="border-2" src={coder.url_profile} width="w-32" rounded="rounded-full" />
					</div>
					<div class="flex flex-col gap-5  justify-center items-center pr-5 rounded-3xl flex-1">
						<h3 class="mt-5">{coder.user_name}</h3>
						<div>
							<span class="font-bold"> {coder.posts_numbers} </span> Publicações
						</div>
						<span class="font-bold"> {coder.name} </span>
						<p>
							{coder.bio}
						</p>
						<a
							target="_blank"
							href={coder.profile_link}
							class="btn variant-filled-primary"
						>
							Visitar Perfil
						</a>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-center gap-2 flex-wrap p-2 w-[60%] h-full">
					{#each coder.posts as post}
						<div class="w-[50%] h-[290px] max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
							<div class="px-4 py-2">
								<h1 title={post.title} class="cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis text-xl font-bold text-gray-800 uppercase dark:text-white">{post.title}</h1>
							</div>
						
							<img class="object-cover w-full h-48 mt-2" src={post.url_cover} alt="NIKE AIR">
						
							<div class="flex items-center justify-between px-4 py-2 bg-gray-900">
								<button title={post.title} class="flex gap-2 items-center h-[30px] btn variant-filled-primary">
									<Icon icon="material-symbols-light:link" />
									públicação
								</button>
							</div>
						</div>
					{/each}
			</div>
		</div>
	{/each}
</div>
