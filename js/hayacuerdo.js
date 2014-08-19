$('#listado').on('change', 'select#lol', function(){
  
  var sheet = $(this).val();
  
  Tabletop.init({ 
                  key: public_spreadsheet_url,
                  callback: function(data, tabletop){
                    var allPositions = $(".allPositions");
                    allPositions.empty();

                    sheet = $('#listado select').val();

                    $.each(tabletop.sheets(sheet).all(), function(index, row){

                      var posture1_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura1.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>',
                          posture2_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura2.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>';

                      var posture1 = '',
                          posture_img = '',
                          posture2 = '';

                      if( row.class === 'noacuerdo' ) {
                        posture1 = '<div class="col-md-2 noacuerdo postura1"><p>'+row.postura1+'</p></div>';
                        posture_img = '<div class="col-md-2 hidden-xs noizquierda"><img class="izq" src="img/noacuerdoizq.svg" alt="lala"></div><div class="col-md-2 col-md-offset-1 text-center texto"><i class="hidden-md hidden-lg fa fa-times fa-5x"></i></div><div class="col-md-2 col-md-offset-1 hidden-xs text-right noderecha"><img class="der" src="img/noacuerdoder.svg" alt="lala"></div>';
                        posture2 = '<div class="col-md-2 noacuerdo postura2"><p>'+row.postura2+'</p></div>';
                      }

                      if( row.class === 'acuerdoparcial' ) {
                        posture1 = '<div class="col-md-2 col-md-offset-1 acuerdoparcial postura1"><p>'+row.postura1+'</p></div>';
                        posture_img = '<div class="col-md-2 hidden-xs parcialderecha"><img class="izq" src="img/acuerdoparcializq.svg" alt="lala"></div><div class="col-md-2 text-center texto"><i class="hidden-sm hidden-md hidden-lg fa fa-exclamation fa-5x"></i></div><div class="col-md-2 hidden-xs text-right parcializquierda"><img class="der" src="img/acuerdoparcialder.svg" alt="lala"></div>';
                        posture2 = '<div class="col-md-2 acuerdoparcial postura2"><p>'+row.postura2+'</p></div>';
                      }

                      if( row.class === 'acuerdototal' ) {
                        posture1 = '<div class="col-md-2 col-md-offset-3 acuerdototal postura1"><p>'+row.postura1+'</p></div>';
                        posture_img = '<div class="col-md-2 total text-center"><img class="izq hidden-xs hidden-sm" src="img/acuerdototal.svg" alt="lala"><i class="col-md-2 hidden-sm hidden-md hidden-lg fa fa-check fa-5x"></i></div>';
                        posture2 = '<div class="col-md-2 acuerdototal postura2"><p>'+row.postura2+'</p></div>';
                      }

                      var positionContainer = "<div class='row'>"+posture1+posture_img+posture2+"</div>";

                      allPositions.append(positionContainer)
                    })
                  },
                  simpleSheet: true 
                })
});

function showInfo(data, tabletop) {
	var allPositions = $(".allPositions");

  var list = $('<select name="" id="lol"></select>');

  $.each(tabletop.sheets(), function(i, sheet){
    list.append('<option value="'+sheet.name+'">'+sheet.name+'</option>');
  });

  list.appendTo('#listado');

  sheet = 'gobierno-oposicion';

  
	$.each(tabletop.sheets(sheet).all(), function(index, row){

		var posture1_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura1.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>',
		    posture2_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura2.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>';

		var posture1 = '',
        posture_img = '',
        posture2 = '';

    if( row.class === 'noacuerdo' ) {
      posture1 = '<div class="col-md-2 noacuerdo postura1"><p>'+row.postura1+'</p></div>';
      posture_img = '<div class="col-md-2 hidden-xs noizquierda"><img class="izq" src="img/noacuerdoizq.svg" alt="lala"></div><div class="col-md-2 col-md-offset-1 text-center texto"><i class="hidden-md hidden-lg fa fa-times fa-5x"></i></div><div class="col-md-2 col-md-offset-1 hidden-xs text-right noderecha"><img class="der" src="img/noacuerdoder.svg" alt="lala"></div>';
      posture2 = '<div class="col-md-2 noacuerdo postura2"><p>'+row.postura2+'</p></div>';
    }

    if( row.class === 'acuerdoparcial' ) {
      posture1 = '<div class="col-md-2 col-md-offset-1 acuerdoparcial postura1"><p>'+row.postura1+'</p></div>';
      posture_img = '<div class="col-md-2 hidden-xs parcialderecha"><img class="izq" src="img/acuerdoparcializq.svg" alt="lala"></div><div class="col-md-2 text-center texto"><i class="hidden-sm hidden-md hidden-lg fa fa-exclamation fa-5x"></i></div><div class="col-md-2 hidden-xs text-right parcializquierda"><img class="der" src="img/acuerdoparcialder.svg" alt="lala"></div>';
      posture2 = '<div class="col-md-2 acuerdoparcial postura2"><p>'+row.postura2+'</p></div>';
    }

    if( row.class === 'acuerdototal' ) {
      posture1 = '<div class="col-md-2 col-md-offset-3 acuerdototal postura1"><p>'+row.postura1+'</p></div>';
      posture_img = '<div class="col-md-2 total text-center"><img class="izq hidden-xs hidden-sm" src="img/acuerdototal.svg" alt="lala"><i class="col-md-2 hidden-sm hidden-md hidden-lg fa fa-check fa-5x"></i></div>';
      posture2 = '<div class="col-md-2 acuerdototal postura2"><p>'+row.postura2+'</p></div>';
    }

		var positionContainer = "<div class='row'>"+posture1+posture_img+posture2+"</div>";

		allPositions.append(positionContainer)
  })
}