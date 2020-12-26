const DURATION = 1;
const EASE_TYPE = 'easeInOut';

export const fadeIn = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			duration: DURATION,
			ease: EASE_TYPE
		}
	}
};

export const fadeInOut = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			duration: DURATION,
			ease: EASE_TYPE
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: DURATION,
			ease: EASE_TYPE
		}
	}
};

export const modalContentSwitch = {
	hidden: {
		opacity: 1
	},
	show: {
		opacity: 1,
		transition: {
			duration: DURATION,
			ease: EASE_TYPE
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: DURATION,
			ease: EASE_TYPE
		}
	}
};
