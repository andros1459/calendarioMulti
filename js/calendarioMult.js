/*!
 * calendarioMult.js v1.2
 * autor: Andres Espinosa
 * (c) 2019 calendarioMult.js Contributors
 * Released under the MIT License
 */
function calendarioMult(data){
	if(data.obj){
		if(data.obj!=''){
			clase=data.obj;
		}else{
			console.error("Debe colocar el id o la clase del elemento contenedor");
			return;
		}
	}else{
		console.error("Debe colocar el id o la clase del elemento contenedor");
		return;
	}
	if(data.cant){
		if(data.cant){
			cant=data.cant;
		}else{
			cant=12;
		}
	}else{
		cant=12;
	}
	if(data.mes){
		if(data.mes!=''){
			mes=data.mes;
		}else{
			var fer = new Date();
			var n = fer.getMonth();
			mes=(n+1);
		}
	}else{
		var fer = new Date();
		var n = fer.getMonth();
		mes=(n+1);
	}
	if(data.year){
		if(data.year!=''){
			year=data.year;
		}else{
			var today = new Date();
			var year = today.getFullYear();
		}
	}else{
		var today = new Date();
		var year = today.getFullYear();
	}
	if(data.idioma){
		if(data.idioma!=''){
			idioma=data.idioma;
		}else{
			idioma="ES_es";
		}
	}else{
		idioma="ES_es";
	}
	if(data.dir){
		if(data.dir!=''){
			dir=data.dir;
		}else{
			console.error("Debe colocar la ruta del elemento JS de calendarioMult");
			return;
		}
	}else{
		console.error("Debe colocar la ruta del elemento JS de calendarioMult");
		return;
	}
	$(clase).html('');
	$.getJSON(dir+idioma+".json", function(html){

	    var meses = html['meses'];
	    var dsemana=html['dsemana'];
	
		text='';
		yearp=year;
		for(ms=0;ms<cant;ms++){
			m=mes+ms;
			if(m>12){
				yearp=year+Math.floor((m/12));
				m-=(12*Math.floor((m/12)));
				if(m==0){
					m=12;
					yearp-=1;
				}
			}
			mr=(m-1);
			fecha=new Date(yearp, mr, 1, 10, 33, 30, 0);

			sdia=(fecha.getDay());
			udia=27;
			for(u=udia;u<=31;u++){
				if(existeFecha(u+"/"+m+"/"+yearp)==true){
					udia=u;
				}
			}
			semanario='<table class="semanario">';
			semanario+='<tr><th onClick="calDias(0,'+m+','+yearp+')">'+dsemana[0]+'</th><th onClick="calDias(1,'+m+','+yearp+')">'+dsemana[1]+'</th><th onClick="calDias(2,'+m+','+yearp+')">'+dsemana[2]+'</th><th onClick="calDias(3,'+m+','+yearp+')">'+dsemana[3]+'</th><th onClick="calDias(4,'+m+','+yearp+')">'+dsemana[4]+'</th><th onClick="calDias(5,'+m+','+yearp+')">'+dsemana[5]+'</th><th onClick="calDias(6,'+m+','+yearp+')">'+dsemana[6]+'</th></tr>';

			t=0;
			for(d=1;d<=udia;d++){
				q=0;
				me=m;
				if(m<10){
					me='0'+m;
				}
				di=d;
				if(d<10){
					di='0'+d;
				}
				for(s=0;s<=6;s++){
					if(q==0){
						
						if(d==1 && s==sdia){
							if(s==0){
								t++;
								semanario+='<tr>';
							}
							semanario+='<td class="calAvailable" id="cal_'+d+'_'+m+'_'+yearp+'_'+s+'" data-fecha="'+yearp+'-'+me+'-'+di+'" onClick="calAvailable(this);">'+d+'</td>';
							q=1;
						}else if(d>1 && s==sdia){
							if(s==0){
								t++;
								semanario+='<tr>';
							}
							semanario+='<td class="calAvailable" id="cal_'+d+'_'+m+'_'+yearp+'_'+s+'" data-fecha="'+yearp+'-'+me+'-'+di+'" onClick="calAvailable(this);">'+d+'</td>';
							q=1;
						}else if(d==1){
							if(s==0){
								t++;
								semanario+='<tr>';
							}
							semanario+='<td></td>';
						}
						if(s==6){
							semanario+='</tr>';
						}
						if(s==sdia){
							sdia++;
							if(s==6){
								sdia=0;
							}
						}
					}
				}
			}
			if(t==5){
				semanario+='<tr><td></td></tr>';
			}
			semanario+='</table>';
			text+='<div class="col-md-4"><div class="card"><div class="card-header"><h3 class="card-title"><b>'+meses[m]+' '+yearp+'</b></h3></div><div class="card-body">'+semanario+'</div></div></div>';
		}
		$(clase).html('<div class="row">'+text+'</div>');
		calMult_date(data.fechas);
	});
}
function existeFecha(fecha){
  var fechaf = fecha.split("/");
  var day = fechaf[0];
  var month = fechaf[1];
  var year = fechaf[2];
  var date = new Date(year,month,'0');
  if((day-0)>(date.getDate()-0)){
        return false;
  }
  return true;
}
fechascalendarioMulti=[];
function calAvailable(dat){
	id=dat.id;
	fecha=dat.dataset.fecha;

	if($("#"+id).hasClass("calActive")){
		$("#"+id).removeClass( "calActive" );
		var index = fechascalendarioMulti.indexOf(fecha);
		fechascalendarioMulti.splice(index, 1);
	}else{
		$("#"+id).addClass( "calActive" );
		fechascalendarioMulti.push(fecha);
	}
	return;
}
function calMult_getData(){
	return fechascalendarioMulti.sort();
}
function calDias(semana,mes,year){
	for(d=0;d<=31;d++){
		if(document.getElementById("cal_"+d+"_"+mes+"_"+year+"_"+semana)){
			calAvailable(document.getElementById("cal_"+d+"_"+mes+"_"+year+"_"+semana));
		}
	}
}
function calMult_date(data){
	//alert('hola');
	for(d=0;d<data.length;d++){
		//alert(data[d]);
		date=data[d].split("-");
		fecha=new Date(date[0], date[1], date[2]);
		year=fecha.getFullYear();
		mes=(fecha.getMonth());
		dia=(fecha.getDate());
		for(s=0;s<=6;s++){
			if(document.getElementById('cal_'+dia+'_'+mes+'_'+year+'_'+s)){
				//alert("pasa");
				calAvailable(document.getElementById('cal_'+dia+'_'+mes+'_'+year+'_'+s));
			}
		}
	}
}