// Shared interactions for every page: header/hero entrance reveal, the
// per-letter hero tagline animation, the draggable marquee ticker, and
// (on project pages) a scroll-triggered reveal for each section.

(function () {
	"use strict";

	/* ---------------------------------------------------------------
	   Hero tagline — split into words > characters, each character
	   fades/slides in with a staggered delay.
	   ------------------------------------------------------------ */
	function initTaglineReveal() {
		const el = document.querySelector("[data-reveal-text]");
		if (!el) return;

		const text = el.textContent.trim();
		el.textContent = "";

		let charIndex = 0;
		const stepMs = 16;

		text.split(" ").forEach((word, i, words) => {
			const wordSpan = document.createElement("span");
			wordSpan.className = "word";

			word.split("").forEach((char) => {
				const charSpan = document.createElement("span");
				charSpan.className = "ch";
				charSpan.textContent = char;
				charSpan.style.setProperty("--d", charIndex * stepMs + "ms");
				charIndex += 1;
				wordSpan.appendChild(charSpan);
			});

			el.appendChild(wordSpan);

			if (i < words.length - 1) {
				el.appendChild(document.createTextNode(" "));
			}
		});
	}

	/* ---------------------------------------------------------------
	   Marquee ticker — duplicates its content once for a seamless
	   loop, pauses the CSS animation while the user drags, and lets
	   pointer drag scrub the track manually (matches the site's
	   cursor: grab affordance).
	   ------------------------------------------------------------ */
	function initMarquee() {
		const marquee = document.querySelector("[data-marquee]");
		if (!marquee) return;

		const track = marquee.querySelector(".marquee__track");
		if (!track) return;

		// Duplicate content so translateX(-50%) loops seamlessly.
		track.innerHTML += track.innerHTML;

		let isDown = false;
		let startX = 0;
		let currentOffset = 0;

		marquee.addEventListener("pointerdown", (e) => {
			isDown = true;
			startX = e.clientX;
			marquee.classList.add("is-dragging");
			track.style.transform = `translateX(${currentOffset}px)`;
			marquee.setPointerCapture(e.pointerId);
		});

		marquee.addEventListener("pointermove", (e) => {
			if (!isDown) return;
			const dx = e.clientX - startX;
			track.style.transform = `translateX(${currentOffset + dx}px)`;
		});

		function release(e) {
			if (!isDown) return;
			isDown = false;
			const dx = e.clientX - startX;
			currentOffset += dx;
			marquee.classList.remove("is-dragging");
			track.style.transform = "";
			track.style.animation = "none";
			// restart the CSS loop from a neutral position
			requestAnimationFrame(() => {
				track.style.animation = "";
			});
		}

		marquee.addEventListener("pointerup", release);
		marquee.addEventListener("pointercancel", release);
	}

	/* ---------------------------------------------------------------
	   Scroll reveal — project template sections, cover image, and
	   pull-quote fade/slide up as they enter the viewport.
	   ------------------------------------------------------------ */
	function initScrollReveal() {
		const targets = document.querySelectorAll("[data-observe]");
		if (targets.length === 0) return;

		// Elements are visible by default in CSS (progressive enhancement).
		// Only arm the hidden/reveal state once we know JS is running.
		if (!("IntersectionObserver" in window)) return;

		targets.forEach((t) => t.classList.add("reveal-init"));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
		);

		targets.forEach((t) => observer.observe(t));
	}

	document.addEventListener("DOMContentLoaded", () => {
		initTaglineReveal();
		initMarquee();
		initScrollReveal();
	});
})();
