export const goToHash = (hash: string, behavior: ScrollBehavior = 'smooth') => {
    const el = document.getElementById(hash)
    if (!el) {
        console.error("Basile introuvable")
        return
    }
    const top = el.offsetTop
    window.scrollTo({ top, behavior })
}