jQuery(document).ready(function(event){
	// Filtrar por categorías
	$('body').on('click', '[data-filter^="filter-"]', function(event){
		event.preventDefault();
		var $this = $(this);
		//
		// No hacer nada si uno hace click en el activo
		if ( !$this.hasClass('main-hero-nav_link:active') ) {
			$('.main-hero-nav_link').removeClass('main-hero-nav_link:active');
			$this.addClass('main-hero-nav_link:active');

			// Obtener que se va a filtrar de 'data-filter'
			var $filter = $this.data('filter'); 
			//
			// Si uno selecciona 'Todos', pues mostrar todos
			$filter == 'filter-all' ? 
			$('.main-projects-item')
			.not(':visible')
			.fadeIn() 
			: // Y si no, pues ocúltelos mano
			$('.main-projects-item')
			.fadeOut(0)
			.filter(function (){
				// Devolver los que tienen igual 'data-item-type' que el filtro
				return $(this).data('item-type') == $filter; 
			})

			.fadeIn(500); 
		} // if
	}); // on
});
