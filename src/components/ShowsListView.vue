<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue";
import { ChevronRight } from "lucide-vue-next";

const props = defineProps(["shows", "name", "id", "initialScrollLeft"]);
const emit = defineEmits(["selectShow", "updateScrollValue"]);

const listContentRef = ref(null);
const showItemMaxWidth = 150;
const scrollMultiplier = showItemMaxWidth * 3 > window.innerWidth ? 1 : 3;

onMounted(() => {
	listContentRef.value.scrollLeft = props.initialScrollLeft;
});

const scrollToNextShow = () => {
	listContentRef.value.scroll({
		left: listContentRef.value.scrollLeft + showItemMaxWidth * scrollMultiplier,
		top: 0,
		behavior: "smooth",
	});
};
const scrollToPreviousShow = () => {
	listContentRef.value.scroll({
		left: listContentRef.value.scrollLeft - showItemMaxWidth * scrollMultiplier,
		top: 0,
		behavior: "smooth",
	});
};

onBeforeUnmount(() => {
	emit("updateScrollValue", {
		key: props.id,
		value: listContentRef.value.scrollLeft,
	});
});
</script>
<template>
	<div class="shows-list__wrapper">
		<div class="shows-list__header">
			<h4 class="shows-list__title">
				{{ name }}
			</h4>
			<div class="shows-list__scroll-helper">
				<button
					class="shows-list__manual-scroller is-plain"
					@click="scrollToPreviousShow()"
					style="margin-right: 4px"
				>
					<ChevronRight style="transform: scale(-1, 1)" />
				</button>
				<button
					class="shows-list__manual-scroller is-plain"
					@click="scrollToNextShow()"
				>
					<ChevronRight />
				</button>
			</div>
		</div>
		<ul class="shows-list__list-content" ref="listContentRef">
			<li
				v-for="(show, idx) in shows"
				tabindex="0"
				class="shows-list__list-item"
				@click="$emit('selectShow', show)"
				@keydown.enter="$emit('selectShow', show)"
			>
				<div class="shows-list__list-item-bg">
					<img
						loading="lazy"
						:src="show.image?.medium"
						:aria-label="`Image of ${show.name} show`"
					/>
					<span
						class="shows-list__list-item-imdb"
						:title="`IMDB Rating: ${show.rating.average}/10`"
					>
						{{ show.rating.average }}
					</span>
				</div>
				<h6 :title="show.name" class="shows-list__show-name">
					{{ show.name }}
				</h6>
			</li>
		</ul>
	</div>
</template>
<style lang="scss">
.shows-list {
	&__wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}
	&__header {
		margin-bottom: 20px;
		display: flex;
		align-items: center;
	}
	&__title {
		font-size: 1.8rem;
		color: white;
	}
	&__scroll-helper {
		display: flex;
		align-items: center;
		margin-left: auto;
		button {
			background: rgba(white, 0.1);
			border-radius: 100%;
			padding: 4px;
			display: flex;
			align-items: center;
		}
		svg {
			stroke: white;
			width: 16px;
			height: 16px;
			margin: auto;
		}
	}

	&__list-content {
		display: flex;
		align-items: flex-start;
		flex-wrap: nowrap;
		list-style: none;
		margin: 0px;
		padding: 0px;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		padding-bottom: 10px;
		&::-webkit-scrollbar {
			height: 8px;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba(white, 0.4);
			border-radius: 8px;
		}
	}
	&__list-item {
		display: flex;
		flex-direction: column;
		margin-right: 22px;
		scroll-snap-align: start;
		&-bg {
			position: relative;
			border-radius: 18px;
			border-bottom-left-radius: 0px;
			overflow: hidden;
			display: flex;
		}
		img {
			width: 150px;
			height: 210.71px;
		}
		&-imdb {
			width: 20px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 10px;
			color: #72720f;
			position: absolute;
			bottom: 8px;
			right: 8px;
			background-color: white;
			padding: 8px;
			border-radius: 100%;
			cursor: pointer;
		}
		h6 {
			font-size: 1rem;
			color: white;
			padding-right: 10px;
			max-width: 150px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			padding: 8px 0px;
		}
	}
	&__manual-scroller {
	}
}
</style>
