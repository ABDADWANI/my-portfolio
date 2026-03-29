import './style.css'
import writeups from './writeups.json'

const container = document.getElementById('writeups-container')

if (container) {
  container.innerHTML = writeups
    .map(
      (writeup) => `
        <article class="tilt-card card-blur rounded-2xl border border-white/10 p-6 transition duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07]">
          <div class="depth-layer">
            <div class="mb-5 flex items-center justify-between gap-4">
              <span class="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">${writeup.category}</span>
              <span class="text-[10px] uppercase tracking-[0.25em] text-zinc-500">${writeup.date}</span>
            </div>

            <h3 class="mb-3 text-xl font-bold text-white">${writeup.title}</h3>

            <p class="mb-6 text-sm leading-7 text-zinc-400">
              ${writeup.description}
            </p>

            <a
              href="${writeup.url}"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              Read it →
            </a>
          </div>
        </article>
      `
    )
    .join('')
}
