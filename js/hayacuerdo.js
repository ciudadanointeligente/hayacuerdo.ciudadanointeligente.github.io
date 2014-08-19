$('#listado').on('change', 'select#lol', function(){
  
  var sheet = $(this).val();
  
  Tabletop.init({ 
                  key: public_spreadsheet_url,
                  callback: function(data, tabletop, sheet){
                    var allPositions = $(".allPositions");
                    allPositions.empty();

                    sheet = $('#listado select').val();

                    $.each(tabletop.sheets(sheet).all(), function(index, row){

                      var posture1_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura1.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>',
                          posture2_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura2.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>';

                      var posture1 = "<div class='col-md-4'><div><p>"+row.postura1+"</p><ul id='social'><li>"+posture1_twitter+"</li></ul></div></div>",
                          posture_img = '<div class="col-md-4"><div class="manoizq"><span></span></div><div class="manoder"><span></span></div></div>',
                          posture2 = "<div class='col-md-4'><div><p>"+row.postura2+"</p><ul id='social'><li>"+posture2_twitter+"</li></ul></div></div>";

                      var positionContainer = "<div class='"+row.class+" row position'>"+posture1+posture_img+posture2+"</div>";

                      allPositions.append(positionContainer)
                    })
                  },
                  simpleSheet: true 
                })
});

function showInfo(data, tabletop, sheet='') {
	var allPositions = $(".allPositions");

  var list = $('<select name="" id="lol"></select>');

  $.each(tabletop.sheets(), function(i, sheet){
    list.append('<option value="'+sheet.name+'">'+sheet.name+'</option>');
  });

  list.appendTo('#listado');

  if( !sheet )
    sheet = 'gobierno-oposicion';

  
	$.each(tabletop.sheets(sheet).all(), function(index, row){

		var posture1_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura1.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>',
		    posture2_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura2.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>';

		/*var posture1 = "<div class='col-md-4'><div><p>"+row.postura1+"</p><ul id='social'><li>"+posture1_twitter+"</li></ul></div></div>",
        posture_img = '<div class="col-md-4"><div class="manoizq"><span></span></div><div class="manoder"><span></span></div></div>',
        posture2 = "<div class='col-md-4'><div><p>"+row.postura2+"</p><ul id='social'><li>"+posture2_twitter+"</li></ul></div></div>";
    */
    var offset_na = '',
        offset_ap = '',
        offset_at = '';
    if( row.class == 'noacuerdo' )
      offset_na = 'col-md-offset-1';
    if( row.class === 'acuerdoparcial' )
      offset_ap = 'col-md-offset-1';
    if( row.class === 'acuerdototal' )
      offset_at = 'col-md-offset-3';

    var posture1 = '<div class="col-md-2 '+offset_ap+' '+offset_at+' '+row.class+' postura1"><p>'+row.postura1+'</p></div>',
        posture_img = '<div class="col-md-2 hidden-xs noizquierda"><img class="izq" src="img/noacuerdoizq.svg" alt="lala"></div><div class="col-md-2 '+offset_na+' texto"><p class="hidden-md hidden-lg">No hay acuerdo</p></div><div class="col-md-2 '+offset_na+' hidden-xs text-right noderecha"><img class="der" src="img/noacuerdoder.svg" alt="lala"></div>',
        posture2 = '<div class="col-md-2 '+row.class+' postura2"><p>'+row.postura2+'</p></div>';

		var positionContainer = "<div class='row position'>"+posture1+posture_img+posture2+"</div>";

		allPositions.append(positionContainer)
  })
}