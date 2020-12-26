const treeContainer = document.querySelector('#tree-container')
const christmasMusic = new Audio()

christmasMusic.src = 'music/christmas.mp3'
christmasMusic.loop = true
let christmasMusicPlayed = false

document.body.onclick = function () {
	if (!christmasMusicPlayed) {
		christmasMusic.play()
		christmasMusicPlayed = true
	}
}

const createRandomNum = (start, end) =>
	Math.floor(Math.random() * (end - start + 1)) + start

const createBallEl = () => {
	const div = document.createElement('div')
	div.className = 'ball'

	let top = createRandomNum(20, 85)
	let left = createRandomNum(10, 90)

	if (top < 70) {
		left = createRandomNum(20, 75)
	}
	if (top < 40) {
		left = createRandomNum(30, 60)
	}

	div.style.top = top + '%'
	div.style.left = left + '%'

	const img = new Image()
	img.src = `images/ball ${createRandomNum(1, 6)}.png`

	div.appendChild(img)

	return div
}

const removeBall = function () {
	const popSound = new Audio()
	popSound.src = 'music/ding.mp3'
	popSound.play()
	this.className = 'ball remove'
	setTimeout(() => {
		treeContainer.removeChild(this)
		if (treeContainer.querySelectorAll('.ball').length <= 0) createBalls()
	}, 500)
}

const createBalls = () => {
	for (i = 1; i < createRandomNum(5, 10); i++) {
		const ballEl = createBallEl()
		ballEl.addEventListener('click', removeBall)

		treeContainer.appendChild(ballEl)
	}
}

createBalls()
