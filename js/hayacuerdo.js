$('#listado').on('change', 'select#lol', function(){
  
  var sheet = $(this).val();
  
  Tabletop.init({ 
                  key: public_spreadsheet_url,
                  callback: function(data, tabletop){
                    var allPositions = $(".allPositions");
                    allPositions.empty();

                    sheet_page = $('#listado select').val();

                    $.each(tabletop.sheets(sheet_page).all(), function(index, row){

                      var positionContainer = drawpositions(index, row, sheet_page);

                      allPositions.append(positionContainer)
                    });
                    change_name();
                  },
                  simpleSheet: true 
                })
});

function change_name() {
  var title_compare = $(".title-compare");
  title_compare.empty();
  title_compare.append($('#listado select option:selected').text().split(' - ')[1]);
}

function showInfo(data, tabletop) {
  var url = window.location;
  var allPositions = $(".allPositions");

  var list = $('<select name="" id="lol"></select>');
  var sheet_page = 'gobierno-fech';

  if( url.search.length )
    sheet_page = url.search.split('=')[1];

  var title_compare = $(".title-compare");
      
      

  $.each(tabletop.sheets(), function(i, sheet){
    var name = '', active = '';
    switch( sheet.name ) {
      case 'gobierno-fech' :
        name = 'Gobierno - FECH';
        if( sheet.name == sheet_page ) 
          active = 'selected="selected"';
        break;
      case 'gobierno-horizontal' :
        name = 'Gobierno - Horizontal';
        if( sheet.name == sheet_page ) {
          active = 'selected="selected"';
          title_compare.empty();
          title_compare.append('Horizontal');
        }
        break;
      case 'gobierno-evopoli' :
        name = 'Gobierno - Evópoli';
        if( sheet.name == sheet_page ) {
          active = 'selected="selected"';
          title_compare.empty();
          title_compare.append('Evópoli');
        }
        break;
      case 'gobierno-amplitud' :
        name = 'Gobierno - Amplitud';
        if( sheet.name == sheet_page ) {
          active = 'selected="selected"';
          title_compare.empty();
          title_compare.append('Amplitud');
        }
        break;
      case 'gobierno-rn' :
        name = 'Gobierno - RN (Instituto Libertad)';
        if( sheet.name == sheet_page ) {
          active = 'selected="selected"';
          title_compare.empty();
          title_compare.append('RN (Instituto Libertad)');
        }
        break;
      case 'gobierno-udi' :
        name = 'Gobierno - UDI';
        if( sheet.name == sheet_page ) {
          active = 'selected="selected"';
          title_compare.empty();
          title_compare.append('UDI');
        }
        break;
      case 'gobierno-educacion2020' :
        name = 'Gobierno - Educación 2020';
        if( sheet.name == sheet_page ) {
          active = 'selected="selected"';
          title_compare.empty();
          title_compare.append('Educación 2020');
        }
        break;
    }

    list.append('<option value="'+sheet.name+'" '+active+'>'+name+'</option>');
  });

  list.appendTo('#listado');  

  $.each(tabletop.sheets(sheet_page).all(), function(index, row){

		var positionContainer = drawpositions(index, row, sheet_page);

		allPositions.append(positionContainer);
  })
}

function drawpositions(index, row, sheet_page) {
  
  var posture1_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url='+url_share+'%3Fposture='+sheet_page+'&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura1.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a></div>',
      posture2_twitter = '<a href="#" onclick="window.open(\'https://twitter.com/share?url='+url_share+'%3Fposture='+sheet_page+'&amp;via=ciudadanoi&amp;hashtags=hayacuerdo&amp;text='+row.postura2.substr(0, 80)+'\',\'twitter\',\'width=450, height=250\')"><i class="fa fa-twitter"></i> twitter</a></div>';

  var posture1 = '',
      posture_img = '',
      posture2 = '',
      view_more_a = '',
      view_more_b = '';

  view_more_a = '<div class="pull-right"><span><a data-toggle="modal" data-target="#myModal'+index+'a"><i class="fa fa-plus"></i> ver más</a></span>';
  view_more_b = '<div class="pull-right"><span><a data-toggle="modal" data-target="#myModal'+index+'b"><i class="fa fa-plus"></i> ver más</a></span>';
  
  if( row.class === 'noacuerdo' ) {
    posture1 = '<div class="col-md-2 noacuerdo postura1"><p><span class="strong hidden-md hidden-lg">Gobierno: </span>'+row.postura1+view_more_a+posture1_twitter+'</p></div>';
    posture_img = '<div class="col-md-2 hidden-xs noizquierda"><img class="izq" src="img/noacuerdoizq.svg" alt="lala"></div><div class="col-md-2 col-md-offset-1 text-center texto"><i class="hidden-md hidden-lg fa fa-times fa-3x"></i></div><div class="col-md-2 col-md-offset-1 hidden-xs text-right noderecha"><img class="der" src="img/noacuerdoder.svg" alt="lala"></div>';
    posture2 = '<div class="col-md-2 noacuerdo postura2"><p><span class="title-compare strong hidden-md hidden-lg">FECH</span><span class="hidden-md hidden-lg">: </span>'+row.postura2+view_more_b+posture2_twitter+'</p></div>';
    
    modal_posture_a = '<div class="modal fade" id="myModal'+index+'a" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura1+'</h4></div><div class="modal-body">'+row.postura1txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
    modal_posture_b = '<div class="modal fade" id="myModal'+index+'b" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura2+'</h4></div><div class="modal-body">'+row.postura2txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
  }

  if( row.class === 'acuerdoparcial' ) {
    posture1 = '<div class="col-md-2 col-md-offset-1 acuerdoparcial postura1"><p>'+row.postura1+view_more_a+posture1_twitter+'</p></div>';
    posture_img = '<div class="col-md-2 hidden-xs parcialderecha"><img class="izq" src="img/acuerdoparcializq.svg" alt="lala"></div><div class="col-md-2 text-center texto"><i class="hidden-sm hidden-md hidden-lg fa fa-exclamation fa-3x"></i></div><div class="col-md-2 hidden-xs text-right parcializquierda"><img class="der" src="img/acuerdoparcialder.svg" alt="lala"></div>';
    posture2 = '<div class="col-md-2 acuerdoparcial postura2"><p>'+row.postura2+view_more_b+posture2_twitter+'</p></div>';

    modal_posture_a = '<div class="modal fade" id="myModal'+index+'a" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura1+'</h4></div><div class="modal-body">'+row.postura1txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
    modal_posture_b = '<div class="modal fade" id="myModal'+index+'b" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura2+'</h4></div><div class="modal-body">'+row.postura2txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
  }

  if( row.class === 'acuerdototal' ) {
    posture1 = '<div class="col-md-2 col-md-offset-3 acuerdototal postura1"><p>'+row.postura1+view_more_a+posture1_twitter+'</p></div>';
    posture_img = '<div class="col-md-2 total text-center"><img class="izq hidden-xs hidden-sm" src="img/acuerdototal.svg" alt="lala"><i class="col-md-2 hidden-sm hidden-md hidden-lg fa fa-check fa-3x"></i></div>';
    posture2 = '<div class="col-md-2 acuerdototal postura2"><p>'+row.postura2+view_more_b+posture2_twitter+'</p></div>';

    modal_posture_a = '<div class="modal fade" id="myModal'+index+'a" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura1+'</h4></div><div class="modal-body">'+row.postura1txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
    modal_posture_b = '<div class="modal fade" id="myModal'+index+'b" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+row.postura2+'</h4></div><div class="modal-body">'+row.postura2txtlargo+'</div><div class="modal-footer"></div></div></div></div>';
  }

  return positionContainer = "<a name='posture-"+index+"'></a><div class='row'>"+posture1+posture_img+posture2+modal_posture_a+modal_posture_b+"</div>";
}