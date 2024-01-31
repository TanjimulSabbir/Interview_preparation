function debounce(func, delay) {
    let timeOutId;
    return (data) => {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            console.log(data)
            func(data)
        }, delay)
    }
}

export default debounce;