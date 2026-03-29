import './style.css'
import updates from './updates.json'

console.log('%c[ACCESS GRANTED]', 'color:#00FFE5; font-weight:bold')

const updatesContainer = document.getElementById('updates-container')

if (updatesContainer) {
  updatesContainer.innerHTML = updates
    .map(
      (item) => `
        <article class="tilt-card card-blur rounded-2xl border border-white/10 p-6 transition duration-300 hover:border-cyan-400/30">
          <div class="depth-layer">
            <div class="mb-4 flex items-center justify-between gap-4">
              <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                ${item.type}
              </span>
              <span class="text-[10px] uppercase tracking-[0.25em] text-zinc-500">${item.date}</span>
            </div>

            <h3 class="mb-3 text-xl font-bold text-white">${item.title}</h3>

            <p class="mb-5 text-sm leading-7 text-zinc-400">
              ${item.description}
            </p>

            <a
              href="${item.link}"
              class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 transition hover:text-cyan-200"
            >
              View update →
            </a>
          </div>
        </article>
      `
    )
    .join('')
}
