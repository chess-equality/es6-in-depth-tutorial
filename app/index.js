import './index.css'
import { formatModuleTitle } from './utils.js'

const modules = [
  {
    title: 'es6 fundamentals',
    description: 'Block scoping, arrow functions, template literals, and more.'
  },
  {
    title: 'collections & iterables',
    description: 'Master Sets, Maps, and the iterator protocols powering them.'
  },
  {
    title: 'asynchronous javascript',
    description: 'Promises, async/await, and patterns for clean async flows.'
  }
]

const root = document.querySelector('#root')

root.innerHTML = `
  <main class="app">
    <header class="hero">
      <p class="eyebrow">Modern Tooling • Vite + SWC</p>
      <h1>ES6 In-Depth Playground</h1>
      <p class="lead">
        Experiment with the latest JavaScript features using a cutting-edge build
        pipeline. Edit <code>app/index.js</code> and save to see instant updates.
      </p>
      <div class="hero__actions">
        <button class="btn primary" type="button">Start coding</button>
        <button class="btn ghost" type="button">View syllabus</button>
      </div>
    </header>

    <section class="grid" aria-label="Module highlights">
      ${modules
        .map(
          (module) => `
            <article class="card">
              <h2>${formatModuleTitle(module.title)}</h2>
              <p>${module.description}</p>
            </article>
          `
        )
        .join('')}
    </section>
  </main>
`
