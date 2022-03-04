export const goToHash = (hash, behavior='smooth') => {
    const el = document.getElementById(hash)
    const top = el.offsetTop
    window.scrollTo({ top, behavior })
}