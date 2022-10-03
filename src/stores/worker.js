onerror = function (err) {
	// just defining it here;
	postMessage("ok");
};

onmessage = function (event) {
	fetch("https://api.tvmaze.com/schedule/full")
		.then((res) => res.json())
		.then((result) => {
			const showsById =
				result.reduce((acc, curr) => {
					const show = curr._embedded.show;
					const formattedShow = {
						id: show.id,
						name: show.name,
						image: show.image,
						rating: show.rating,
						summary: show.summary,
						genres: show.genres,
						language: show.language,
						premiered: show.premiered,
						status: show.status,
						url: show.url,
					};
					acc[show.id] = formattedShow;
					return acc;
				}, {}) || {};
			const uniqueShows = Object.values(showsById);

			const comedyShows = uniqueShows
				.filter(
					(show) =>
						show.genres.includes("Comedy") && show.image && show.rating?.average
				)
				.slice(0, 20);

			const mysteryShows = uniqueShows
				.filter(
					(show) =>
						show.genres.includes("Mystery") &&
						show.image &&
						show.rating?.average
				)
				.slice(0, 20);

			const dramaShows = uniqueShows
				.filter(
					(show) =>
						show.genres.includes("Drama") && show.image && show.rating?.average
				)
				.slice(0, 20);

			const adventureShows = uniqueShows
				.filter(
					(show) =>
						show.genres.includes("Adventure") &&
						show.image &&
						show.rating?.average
				)
				.slice(0, 20);

			postMessage({
				comedyShows,
				mysteryShows,
				dramaShows,
				adventureShows,
				showsById,
			});
		});
};
