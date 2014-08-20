$('#listado').on('change', 'select#lol', function(){
  
  var sheet = $(this).val();
  
  Tabletop.init({ 
                  key: public_spreadsheet_url,
                  callback: function(data, tabletop){
                    var allPositions = $(".allPositions");
                    allPositions.empty();

                    sheet = $('#listado select').val();

                    $.each(tabletop.sheets(sheet).all(), function(index, row){

                      var positionContainer = drawpositions(index, row);

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
    var name = '';
    switch( sheet.name ) {
      case 'gobierno-fech' :
        name = 'Gobierno - FECH';
        break;
      case 'gobierno-horizontal' :
        name = 'Gobierno - Horizontal';
        break;
      case 'gobierno-evopoli' :
        name = 'Gobierno - Evópoli';
        break;
      case 'gobierno-amplitud' :
        name = 'Gobierno - Amplitud';
        break;
      case 'gobierno-rn' :
        name = 'Gobierno - RN (Instituto Libertad)';
        break;
      case 'gobierno-udi' :
        name = 'Gobierno - UDI';
        break;
      case 'gobierno-educacion2020' :
        name = 'Gobierno - Educación 2020';
        break;
    }

    list.append('<option value="'+sheet.name+'">'+name+'</option>');
  });

  list.appendTo('#listado');

  var sheet = 'gobierno-fech';

  
	$.each(tabletop.sheets(sheet).all(), function(index, row){

		var positionContainer = drawpositions(index, row);

		allPositions.append(positionContainer);
  })
}

function drawpositions(index, row) {
  var posture1_twitter = '<br /><a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura1.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>',
      posture2_twitter = '<br /><a href="#" onclick="window.open(\'https://twitter.com/share?url=http://hayacuerdo.ciudadanointeligente.org/&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura2.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a>';

  var posture1 = '',
      posture_img = '',
      posture2 = '',
      view_more_a = '',
      view_more_b = '';

  view_more_a = '<br><i class="fa fa-plus"></i> <a data-toggle="modal" data-target="#myModal'+index+'a">ver más</a>';
  view_more_b = '<br><i class="fa fa-plus"></i> <a data-toggle="modal" data-target="#myModal'+index+'b">ver más</a>';
  
  if( row.class === 'noacuerdo' ) {
    posture1 = '<div class="col-md-2 noacuerdo postura1"><p>'+row.postura1+view_more_a+posture1_twitter+'</p></div>';
    posture_img = '<div class="col-md-2 hidden-xs noizquierda"><img class="izq" src="img/noacuerdoizq.svg" alt="lala"></div><div class="col-md-2 col-md-offset-1 text-center texto"><i class="hidden-md hidden-lg fa fa-times fa-5x"></i></div><div class="col-md-2 col-md-offset-1 hidden-xs text-right noderecha"><img class="der" src="img/noacuerdoder.svg" alt="lala"></div>';
    posture2 = '<div class="col-md-2 noacuerdo postura2"><p>'+row.postura2+view_more_b+posture2_twitter+'</p></div>';
    
    modal_posture_a = '<div class="modal fade" id="myModal'+index+'a" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura1+'</h4></div><div class="modal-body">'+row.postura1txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
    modal_posture_b = '<div class="modal fade" id="myModal'+index+'b" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura2+'</h4></div><div class="modal-body">'+row.postura2txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
  }

  if( row.class === 'acuerdoparcial' ) {
    posture1 = '<div class="col-md-2 col-md-offset-1 acuerdoparcial postura1"><p>'+row.postura1+view_more_a+posture1_twitter+'</p></div>';
    posture_img = '<div class="col-md-2 hidden-xs parcialderecha"><img class="izq" src="img/acuerdoparcializq.svg" alt="lala"></div><div class="col-md-2 text-center texto"><i class="hidden-sm hidden-md hidden-lg fa fa-exclamation fa-5x"></i></div><div class="col-md-2 hidden-xs text-right parcializquierda"><img class="der" src="img/acuerdoparcialder.svg" alt="lala"></div>';
    posture2 = '<div class="col-md-2 acuerdoparcial postura2"><p>'+row.postura2+view_more_b+posture2_twitter+'</p></div>';

    modal_posture_a = '<div class="modal fade" id="myModal'+index+'a" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura1+'</h4></div><div class="modal-body">'+row.postura1txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
    modal_posture_b = '<div class="modal fade" id="myModal'+index+'b" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura2+'</h4></div><div class="modal-body">'+row.postura2txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
  }

  if( row.class === 'acuerdototal' ) {
    posture1 = '<div class="col-md-2 col-md-offset-3 acuerdototal postura1"><p>'+row.postura1+view_more_a+posture1_twitter+'</p></div>';
    posture_img = '<div class="col-md-2 total text-center"><img class="izq hidden-xs hidden-sm" src="img/acuerdototal.svg" alt="lala"><i class="col-md-2 hidden-sm hidden-md hidden-lg fa fa-check fa-5x"></i></div>';
    posture2 = '<div class="col-md-2 acuerdototal postura2"><p>'+row.postura2+view_more_b+posture2_twitter+'</p></div>';

    modal_posture_a = '<div class="modal fade" id="myModal'+index+'a" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura1+'</h4></div><div class="modal-body">'+row.postura1txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
    modal_posture_b = '<div class="modal fade" id="myModal'+index+'b" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura2+'</h4></div><div class="modal-body">'+row.postura2txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
  }

  return positionContainer = "<div class='row'>"+posture1+posture_img+posture2+modal_posture_a+modal_posture_b+"</div>";
}