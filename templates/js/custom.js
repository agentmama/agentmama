var custom = {
	init: function() {
		this.slider();
		wjs.imgBg();
	},

	slider: function() {
		var slider = document.getElementsByClassName('vinslider')[0];
		new Vinslider(slider, {
			mode: 'slide',
			duration: 3000
		});
	}
}

custom.init();