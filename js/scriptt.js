// Add, remove or reorder technologies here only.
const technologies = [
  { name: 'React', label: 'UI Library', icon: 'devicon-react-original', color: '#61DAFB' },
  { name: 'HTML5', label: 'Markup', icon: 'devicon-html5-plain', color: '#E34F26' },
  { name: 'CSS3', label: 'Styling', icon: 'devicon-css3-plain', color: '#1572B6' },
  { name: 'Tailwind CSS', label: 'Utility CSS', icon: 'devicon-tailwindcss-original', color: '#38BDF8' },
  { name: 'Bootstrap', label: 'CSS Framework', icon: 'devicon-bootstrap-plain', color: '#7952B3' },
  { name: 'Git', label: 'Version Control', icon: 'devicon-git-plain', color: '#F05032' },
  { name: 'GitHub', label: 'Collaboration', icon: 'devicon-github-original', color: '#E6EDF3' },
  { name: 'JavaScript', label: 'Language', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
  ,
]

const REPEAT = 2 // how many times the list repeats inside one group

const track = document.getElementById('techTrack')

// Build a single card element
function createCard({ name, label, icon, color }) {
  const li = document.createElement('li')

  const card = document.createElement('div')
  card.className = 'tech-card'
  card.style.setProperty('--brand', color)

  card.innerHTML = `
    <i class="tech-card__icon ${icon}" aria-hidden="true"></i>
    <span class="tech-card__name">${name}</span>
    <span class="tech-card__label">${label}</span>
  `

  li.appendChild(card)
  return li
}

// Build one group (the list repeated REPEAT times)
function createGroup(hidden = false) {
  const ul = document.createElement('ul')
  ul.className = 'tech-slider__group'
  if (hidden) ul.setAttribute('aria-hidden', 'true')

  for (let i = 0; i < REPEAT; i++) {
    technologies.forEach((tech) => ul.appendChild(createCard(tech)))
  }

  return ul
}

// Two identical groups = seamless infinite loop
track.appendChild(createGroup())
track.appendChild(createGroup(true))
