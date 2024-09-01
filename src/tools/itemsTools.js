

export function orderByReview(data) {
    data.sort(({ rating: a }, { rating: b }) => b-a);
    return data
}

export function getBestSeller(data, n) {
    return orderByReview(data).slice(0, n);
}