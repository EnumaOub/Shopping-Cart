
export function orderByReview(data, type) {
    data.sort(({ rating: a }, { rating: b }) => b-a);
    return data
}

export function orderById(data) {
    data.sort(({ id: a }, { id: b }) => Number(a)-Number(b));
    return data
}


export function getBestSeller(data, n) {
    return orderByReview(data).slice(0, n);
}

export function getProdById(data, id) {
    return data.find((elem) => elem.id === id);
}