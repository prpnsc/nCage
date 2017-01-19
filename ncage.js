(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'http://static1.fjcdn.com/comments/Papa+franku+_f6e938bffd10c339496b84e28d1923fa.png',
			'http://pa1.narvii.com/5989/7607d28e71260e57058a7fd235929e1d7ab5e04c_hq.gif',
			'http://static.fjcdn.com/pictures/Papa_d3c5bf_5541134.jpg',
			'http://i.imgur.com/Dhqbtv0.png',
			'https://pbs.twimg.com/profile_images/574671817186656258/a8eUf1yr.jpeg',
			'http://images.akamai.steamusercontent.com/ugc/389917471420807616/07117C0DF33E094197134993D7181CE28FA0A9D7/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637:358&composite-to%3D*%2C*%7C637%3A358&background-color=black',
			'http://images.8tracks.com/cover/i/009/131/528/Bitches_love_human_ramen__ec897881ec2e8e82220b86ee78e7db3b-4910.jpg?rect=0,20,885,885&q=98&fm=jpg&fit=max&w=640&h=640'
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 
