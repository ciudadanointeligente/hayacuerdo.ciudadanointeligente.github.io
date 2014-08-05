function showInfo(data, tabletop) {
	var allPositions = $(".allPositions");
	$.each(data, function(index, row){

		var posture1_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura1.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>';
		var posture2_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura2.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>';
		var posture1 = "<div class='col-md-6'><div class='postura1 postura'><p>"+row.postura1+"</p><ul id='social'><li>"+posture1_twitter+"</li></ul></div></div>"
		var posture2 = "<div class='col-md-6'><div class='postura2 postura'><p>"+row.postura2+"</p><ul id='social'><li>"+posture2_twitter+"</li></ul></div></div>"

		var positionContainer = "<div class='"+row.class+" row position'>"+posture1+posture2+"</div>";
		allPositions.append(positionContainer)
  })
}