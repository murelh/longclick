/*
	Ntyandi Murelh
	http://murelh.info/logiciel.php?page=longclick
	https://github.com/murelh/longclick/
*/

jQuery.fn.extend({
    longclick: function (fn, duration, call)
	{
		var duration = ($.isNumeric(duration) && !(duration < 0))? duration: 1000;
		var callbacks = $.Callbacks();
		if($.isFunction(call))
		{
			callbacks.add(call);
		}
		else if(call != undefined)
		{
			console.warn('Les instructions de retour de la fonction $.longclick(fn, duration, callback) ne pourront pas être exécutées car elles ne font pas partie d\'une fonction. Ci-dessous, l\'objet concerné:');
			console.log(this);
		}
		
        $(this).on('mousedown',function(e) // au clique sur l'élément
		{
			var timer = setTimeout(function()
			{
				fn();
				callbacks.fire(call);
			},
			duration);
			$(this).on('mouseup',function(e)
			{
				clearTimeout(timer);
			});
		});
		
	}
});
