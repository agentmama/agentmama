var custom = {
	init: function() {
		// Meta
		this.curPage = window.location.href.split('.')[0].split('/')[window.location.href.split('.')[0].split('/').length-1];

		wjs.imgBg();
		this.slider();
		this.headerController();
	},

	slider: function() {
		var slider = document.getElementsByClassName('vinslider')[0];
		new Vinslider(slider, {
			duration: 5000,
			isController: false
		});
	},

	headerController: function() {
		var menu = document.getElementsByTagName('header')[0].querySelector('ul').children;
		for (var i=0; i<menu.length; i++) {
			if (menu[i].children[0].className.indexOf(this.curPage) >= 0 && this.curPage !== '') {
				wjs.addClass(menu[i].children[0], 'active');
			}
		}
	}
}

custom.init();