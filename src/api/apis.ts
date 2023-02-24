export const apiUrls = {
    weatherInfo: (city, lat, long) => `data/2.5/weather?lat=${lat}&lon=${long}`,
    searchImage: q =>
        `/search/photos?query=${q}&count=1&per_page=1&client_id=4LgdQAOaZ4oWAWh2cvvDg0Q1_5HYAkLY_1q2YQy9v2U`
}
