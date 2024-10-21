const btn = document.getElementById('btn')
btn.addEventListener('click', createBubbles)

function createBubbles(event) {
	const bubbleCount = 12 // Количество пузырьков
	for (let i = 0; i < bubbleCount; i++) {
		createBubble(event)
	}
}

function createBubble(event) {
	const bubble = document.createElement('span')
	const size = Math.random() * 30 + 10 // Размер пузырька
	bubble.style.width = `${size}px`
	bubble.style.height = `${size}px`
	bubble.classList.add('bubble')

	const btnRect = btn.getBoundingClientRect()
	const randomX = Math.random() * (btnRect.width - size)
	const randomY = Math.random() * (btnRect.height - size)

	bubble.style.left = `${randomX}px`
	bubble.style.top = `${randomY}px`

	btn.appendChild(bubble)
	bubble.addEventListener('animationend', () => {
		bubble.remove()
	})
}
