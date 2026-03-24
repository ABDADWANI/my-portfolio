import './style.css'
import logs from './logs.json'

const container = document.getElementById('blog-container')

if (container) {
  container.innerHTML = logs
    .map(
      (log) => `
        <article class="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07]">
          <div class="mb-5 flex items-center justify-between gap-4">
            <span class="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">${log.day}</span>
            <span class="text-[10px] uppercase tracking-[0.25em] text-zinc-500">${log.date}</span>
          </div>
          <h3 class="mb-3 text-xl font-bold text-white">${log.title}</h3>
          <p class="mb-5 text-sm leading-7 text-zinc-400">${log.summary}</p>
          <span class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Open File →</span>
        </article>
      `
    )
    .join('')
}
