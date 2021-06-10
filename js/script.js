window.addEventListener('DOMContentLoaded', () => {
	function get(selector) {
		return document.querySelector(selector)
	}

	const leftStat = get('.main-2__left .main-2__num');
	const rightStat = get('.main-2__right .main-2__num');
	const volume = get('.main-1__volume');
	const popup = get('.main-3');
	const closePopup = get('.main-3__close')

	setTimeout(() => {
		popup.classList.remove('hidden')
		popup.classList.add('visible')
		document.body.classList.add('lock')
	}, 5000);
	closePopup.addEventListener('click', () => {
		hidePopup()

	})
	popup.addEventListener('click', e => {

		if (!e.target.closest('.main-3__block')) {
			hidePopup()
		}
	})

	function hidePopup() {
		popup.classList.remove('visible')
		popup.classList.add('hidden')
		document.body.classList.remove('lock')
	}

	volume.addEventListener('click', _hideVolume)

	function _hideVolume() {
		this.style.display = 'none';
	}

	showLeftStat()
	function showLeftStat() {
		let start = Number(leftStat.textContent);

		setInterval(() => {
			let random = Math.floor(Math.random() * 3);
			start += random
			leftStat.textContent = start;

		}, 10000)
	}

	showRightStat()
	function showRightStat() {
		let start = Number(rightStat.textContent);

		setInterval(() => {
			let random = Math.floor(Math.random() * 2);

			if (start < 2) {
				random *= 3;
				start += random
			}
			else {
				start -= random
			}
			rightStat.textContent = start;
		}, 20000)
	}

	document.querySelectorAll('input[type=checkbox]').forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault()
		})
	})
})
$(document).ready(function () {

	$('#vol').click(function () {
		$('video').prop('muted', !$('video').prop('muted'));
	});

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Форма отправлена");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});