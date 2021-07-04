function onScroll() {
    window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
    })
}

export default onScroll;