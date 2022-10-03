<template>
	<div style="display: flex; flex-direction: column; margin-top: 100px">
		<div v-for="item in 4">
			<div
				class="skeleton__title is-skeleton"
				style="height: 46.08px; width: 100px; display: inline-block"
			></div>
			<div
				style="
					display: flex;
					align-items: center;
					overflow: hidden;
					margin-bottom: 40px;
				"
			>
				<div v-for="item in 10" style="margin-right: 22px">
					<div
						class="skeleton__image is-skeleton"
						style="width: 150px; height: 210.71px"
					></div>
					<div
						class="skeleton__show-title is-skeleton"
						style="width: 150px; height: 41.58px"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@keyframes skeletonLoad {
	0% {
		background-position: 0% 31%;
	}
	50% {
		background-position: 100% 70%;
	}
	100% {
		background-position: 0% 31%;
	}
}

.is-skeleton {
	position: relative;
	margin-bottom: 2px;
	z-index: 0;
	&::after {
		z-index: 1;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 80%;
		border-radius: 10px;
		background: linear-gradient(
			238deg,
			var(--color-background),
			var(--color-background-soft)
		);
		background-size: 400% 400%;
		animation: skeletonLoad 1s ease infinite;
	}
}
</style>
