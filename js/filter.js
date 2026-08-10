// Filtre accessible des projets par catégorie (légende cliquable)
;(() => {
  const legend = document.querySelector(".legend")
  if (!legend) return

  const filterButtons = Array.from(legend.querySelectorAll("[data-filter]"))
  const cards = Array.from(
    document.querySelectorAll(".projects__grid .card[data-category]"),
  )
  const status = document.getElementById("filter-status")
  const activeFilters = new Set()

  const render = ({ announce = true } = {}) => {
    let visibleCount = 0

    cards.forEach((card) => {
      const isVisible =
        activeFilters.size === 0 || activeFilters.has(card.dataset.category)
      card.hidden = !isVisible
      if (isVisible) visibleCount += 1
    })

    filterButtons.forEach((button) => {
      const isAll = button.dataset.filter === "all"
      const isPressed = isAll
        ? activeFilters.size === 0
        : activeFilters.has(button.dataset.filter)
      button.setAttribute("aria-pressed", String(isPressed))
    })

    if (announce && status) {
      status.textContent =
        visibleCount === cards.length
          ? `${cards.length} projets affichés`
          : `${visibleCount} projet${visibleCount > 1 ? "s" : ""} affiché${visibleCount > 1 ? "s" : ""} sur ${cards.length}`
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const { filter } = button.dataset

      if (filter === "all") {
        activeFilters.clear()
      } else if (activeFilters.has(filter)) {
        activeFilters.delete(filter)
      } else {
        activeFilters.add(filter)
      }

      render()
    })
  })

  render({ announce: false })
})()
