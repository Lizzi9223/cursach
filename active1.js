//время до появления медального окна 1, зависящее от размера страницы
var timeout;
var countignore = 0;
var ignore = true;
var dialogOn = false;

//подготовка активной среды (создание окон)
function prepare_environment(){

	//окна активной среды
	timeout=document.body.innerHTML.length;
	//диалоговый модуль
	document.body.innerHTML+="<div id='dialog' class='dialog' style='margin-left:-40px;'>"+
		"<div class='label' onclick='toggleDialog()'>Задать вопрос</div>"+
		"<div class='header'>История:</div>"+
		"<div class='history' id='history'></div>"+
		"<div class='question'  ><input id='Qdialog' placeholder='                   Введите вопрос'  onKeyDown='if(event.keyCode==13)ask(&quot;Qdialog&quot;)'/><br>"+
			"<button onclick='ask(\"Qdialog\")'>Получить ответ</button>"
		"</div>"+
	"</div>";
	//крупный план изображений
	document.body.innerHTML += "<div id='imgalert' style='display:none'>" + "<div class='bg' onclick='hide(\"imgalert\")'>&nbsp;</div>" + "<img id='img_in_alert' src='' />" + "</div>";

	//РАСПОЗНАВАНИЕ РЕЧИ
	//поле с распознаванием речи. Задаем API-ключ

	window.ya.speechkit.settings.apikey = '5c6d6536-b453-4589-9bc7-f16c7a795106';

	// Добавление элемента управления "Поле для голосового ввода".

	var textline = new ya.speechkit.Textline(
		'Qdialog', {
			onInputFinished: function(text) {
			ask("Qdialog");
		  }
		});

	//КОНЕЦ РАСПОЗНАВАНИЯ РЕЧИ
	//привязка окон активной среды с событиями. Показ модального окна 1 через интервал времени, зависящий от размера страницы

	timer=setInterval(alert_over_time, timeout);

	try {
		//открытие журналов посещенных адресов и дат посещения:
		//попытка использования массива адресов открытых страниц из локального хранилища
		var URLlog=JSON.parse(localStorage.URLlog);
		//удаление адресов из начала массива, пока в массиве не останется 5 адресов
		while(URLlog.length>5) URLlog.shift(0);
		//попытка использоваения массива дат открытия страниц из локального хранилища
		var log=JSON.parse(localStorage.log);
		//удаление дат из начала массива, пока в массиве не останется 5 дат
		while(log.length>5) log.shift(0);
		//проверка на необходимость срабатывания реакций:
		//только если сделан переход со страницы на страницу (не обновление страницы)
		if(location.href!=URLlog[URLlog.length-1]){
			//если сделан переход на одну из последних пяти посещенных страниц,
			//очищаем массив и показываем модальное окно 3
			if(URLlog.indexOf(location.href)!==-1){
				while(URLlog.length>0) URLlog.shift(0);//очистка массива адресов
				alert_for_back();
			}
			//только если не возникла реакция возврата на предыдущий адрес
			//проверяем необходимость реакции на быстрые переходы:
			else{
				//если сделано 5 переходов меньше чем за минуту -
				//очищаем массив и показываем модальное окно 2
				if(log.length>=5 &&  ((new Date())-Date.parse(log[0]))<60000){
					while(log.length>0) log.shift(0);//очистка массива дат
					alert_for_speed();
				}
			}
			//в любом случае, независимо от срабатывания реакций, при переходе со страницы на страницу:
			URLlog.push(location.href);	//запись адреса текущей страницы в массив
			log.push(new Date());		//запись даты перехода в массив
		}
	}
	catch(e){
		var URLlog=new Array();	//инициализация массива адресов открытых страниц
		var log=new Array();	//инициализация массива дат открытия страниц
	}
	//запись массива адресов в локальное хранилище в формате JSON
	localStorage.URLlog=JSON.stringify(URLlog);
	//запись массива дат в локальное хранилище в формате JSON
	localStorage.log=JSON.stringify(log);

}
//запуск подготовки среды при загрузке окна
window.onload = function(){prepare_environment();};
//скрытие сообщений при щелчке на фон
function hide(elem_id){
	$("#" + elem_id).css({"display" : "none"});
	timer = setInterval(alert_over_time, timeout);
	if(ignore)
	{
		try
		{
			var countignore = localStorage.getItem("countignore");
		}
		catch(e)
		{
			localStorage.setItem("countignore", countignore);
		}
		countignore++;
		localStorage.setItem("countignore", countignore);
		if(countignore > 2) alert_for_ignore();
	}
	else
	{
		localStorage.setItem("countignore", 0);
	}
	ignore = true;
}

//показ сообщений
function alert_over_time(){
	$("#alert1").css({"display":"block"});
	clearInterval(timer);
}

function alert_for_speed(){
	$("#alert2").css({"display":"block"});
	clearInterval(timer);
}

function alert_for_back(){
	$("#alert3").css({"display":"block"});
	clearInterval(timer);
}
//ДИАЛОГ
//показ-скрытие диалогового модуля
function toggleDialog() {
	//закрытие
	if(dialogOn)
	{
		$("#dialog").animate({"margin-left":"-40px"}, 1000, function() {});
		dialogOn=false;
		timer=setInterval(alert_over_time, timeout);
	}
	//открытие
	else
	{
		$("#dialog").animate({"margin-left":"-400px"}, 1000, function() {});
		dialogOn=true;
		clearInterval(timer);
	}
}

//база знаний
var knowledge = [
    
    //текстовые триады
    
    //1:
    
    [
        "удельный заряд частицы ",
        "- это ",
        "отношение заряда частицы q к массе m"
    ],
     
    [
        "значение удельного заряда ",
        "различается ",
        "для ионизированных атомов разных химических элементов, ионизированных атомов одного и того же элемента с различной кратностью заряда, для ионизированных молекул "
    ],
    
    [
        "методы определения удельного заряда микрочастиц ",
        "основаны ",
        "на изучении движения микрочастиц в электрическом и магнитном полях в условиях вакуума "
    ],
      
    [
        "сила Лоренца ",
        "действует ",
        "на заряженную частицу в электрическом и магнитном полях "
    ],
    
    [
        "сила Лоренца",
        "—это",
        "сила, с которой электромагнитное поле действует на точечную заряженную частицу "
    ],
    
    [
        "частица ",
        "приобретает ",
        "в электрическом поле ускорение a и кинетическую энергию К "
    ],
    
    [
        "значение ускорения ",
        "зависит ",
        "от удельного заряда частицы q/m "
    ],
    
    [
        "кинетическая энергия ",
        "равна ",
        "работе А сил электрического поля по перемещению заряда q "
    ],
     
    [
        "направление составляющей силы Лоренца ",
        "определяется ",
        "векторным произведением скорости на индукцию магнитного поля с учетом знака заряда частицы "
    ],
    
    [
        "составляющая силы Лоренца ",
        "перпендикулярна ",
        "линиям магнитной индукции и скорости движения частицы "
    ],
    
    // 11: 
    
    [
        "работа составляющей силы Лоренца ",
        "равна ",
        "нулю "
    ],
    
    [
        "составляющая силы Лоренца ",
        "изменяет ",
        "направление скорости частицы, искривляя траекторию ее движения "
    ],
   
    [
        "радиус траектории заряженной частицы ",
        "зависит ",
        "от удельного заряда q/m частицы, т. е. от ее природы, если она движется в однородном магнитном поле"
    ],

    [
        "период обращения заряженной частицы ",
        "зависит ",
        "от удельного заряда q/m частицы, т. е. от ее природы, если она движется в однородном магнитном поле"
    ],

    [
        "частота обращения заряженной частицы ",
        "зависит ",
        "от удельного заряда q/m частицы, т. е. от ее природы, если она движется в однородном магнитном поле"
    ],
    
    [
        "обе составляющих силы Лоренца ",
        "учитывать ",
        "при описании движения частицы, если частица движется одновременно в электрическом и магнитном полях "
    ],
     
    [
        "измерение отношения заряда электрона к его массе ",
        "осуществляется ",
        "методом магнетрона "
    ],
       
    [
        "сила Fe ",
        "изменяет ",
        "скорость частицы и по модулю, и по направлению "
    ],
    
    [
        "сила Fm ",
        "искривляет ",
        "траекторию движения частицы "
    ], 
    
    [
        "вектор силы Fq ",
        "действует ",
        "на электрон со стороны электрического поля "
    ],
    
    //21: 
    
    [
        "вектор силы Fq  ",
        "направлен ",
        "вдоль радиуса против направления силовых линий поля от катода к аноду "
    ],
    
    [
        "электроны, испускаемые разогретым катодом ",
        "движутся ",
        "к аноду прямолинейно по радиальным направлениям под действием только электрического поля "
    ],
    
    [
        "магнитное поле магнетрона",
        "создается ",
        "электрическим током силой I в обмотке соленида"
    ],
    
    [
        "электрон",
        "- это",
        "стабильная отрицательно заряженная элементарная частица"
    ],
    
    [
        "электрод",
        "- это",
        "электрический проводник, имеющий электронную проводимость и находящийся в контакте с электролитом"
    ],
    
    [
        "анод",
        "- это",
        "электрод электронного или электротехнического прибора или устройства, характеризующийся тем, что движение электронов во внешние цепи направлено от него"
    ],
    
    [
        "электролит",
        "- это",
        "вещество, которое проводит электрический ток вследствие диссоциации на ионы, что происходит в растворах и расплавах, или движения ионов в кристаллических решётках твёрдых электролитов"
    ],
    
    [
        "магнетрон",
        "- это",
        "прибор, принцип действия которого основан на движении заряженных частиц, в частности электронов, во взаимно перпендикулярных электрическом и магнитном полях"
    ],
    
    [
        "приборы магнетронного типа ",
        "используются ",
        "в качестве генераторов и усилителей электромагнитного излучения СВЧ-диапазона, частоты электромагнитных колебаний которого лежат в интервале от 300 МГц до 300 ГГц"
    ],
    
    [
        "генерирование электромагнитных волн и их усиление ",
        "существляется ",
        "за счет отбора электромагнитной волной значительной части кинетической энергии электронов, ускоряемых электрическим полем и движущихся в электрическом и магнитном полях по криволинейным траекториям, при их торможении переменным электрическим полем электромагнитной волны"
    ],
    
    //31:
    
    [
        "магнетронная система ",
        "состоит ",
        "в установке лабораторной работы из вакуумного диода, помещенного внутрь соленоида"
    ],
    
    [
        "катод ",
        "нагревается ",
        "пропусканием электрического тока через нить накала и вследствие термоэлектронной эмиссии испускает электроны"
    ],
    
    [
        "анодное напряжение ",
        "- это ",
        "напряжение между катодом и анодом"
    ],
    
    [
        "анодное напряжение ",
        "создает",
        "электрическое поле напряженностью Е, ускоряющее электроны в направлении от катода к аноду"
    ],
    
    [
        "анодное напряжение ",
        "является ",
        "неоднородным"
    ],
    
    [
        "соленоид",
        "- это",
        "разновидность катушки индуктивности"
    ],
    
    [
        "катушка индуктивности",
        "- это",
        "винтовая, спиральная или винтоспиральная катушка из свёрнутого изолированного проводника, обладающая значительной индуктивностью при относительно малой ёмкости и малом активном сопротивлении"
    ],
    
    [
        "латр",
        "- это ",
        "лабораторный автотрансформатор регулируемый — один из видов автотрансформаторов, представляющий собой автотрансформатор относительно небольшой мощности, и предназначенный для регулирования переменного напряжения (переменного тока), подаваемого на нагрузку от однофазной или трехфазной сети переменного тока"
    ],
    
    [
        "реостат",
        "- это",
        "прибор для регулирования силы тока и его напряжения"
    ],
    
    [
        "магнитная индукция ",
        " - это",
        "векторная физическая величина, являющаяся силовой характеристикой магнитного поля, а именно характеристикой его действия на движущиеся заряженные частицы и на обладающие магнитным моментом тела"
    ],
    
    //41:
    
    [
        "цель работы ",
        "звучит",
        "так: изучить действие на заряженные частицы электрического и магнитного полей; освоить методику определения значения удельного заряда электрона методом магнетрона"
    ],
    
    [
        "кривизна траекторий электронов ",
        "увеличивается",
        "по мере увеличения индукции магнитного поля"
    ],
    
    [
        "электроны  ",
        "касаются ",
        "поверхности анода при некотором критическом значении индукции Вкр"
    ],
    
    [
        "электроны ",
        "перестанут ",
        "достигать анода при некотором значении В > Вкр"
    ],
    
    [
        "направление силы Лоренца  ",
        "определяется",
        "правилом левой руки"
    ],

    [
        "правило левой руки",
        "- это",
        "если ладонь левой руки расположить так, чтобы в нее входили линии индукции магнитного поля, а четыре вытянутых пальца направить вдоль вектора V, то отогнутый большой палец покажет направление силы, действующей на положительный заряд"
    ],

    [
        "раздел физики, изучающий электричество",
        "называется",
        "электродинамика"
    ],

    [
        "электродинамика",
        "- это",
        "раздел физики, изучающий электромагнитное поле в наиболее общем случае"
    ],

    [
        "критическим условиям работы магнетрона",
        "соответствует",
        "участок наиболее быстрого уменьшения силы анодного тока вблизи точки перегиба сбросовой характеристики"
    ],

    [
        "сила Лоренца",
        "описывает",
        "влияние электромагнитного поля лишь на единичный движущийся заряд"
    ],

    //51:
    
    [
        "единицей измерения напряжения в СИ",
        "является ",
        "вольт (русское обозначение: В; международное: V)"
    ],
    
    [
        "единицей измерения силы тока в СИ",
        "является",
        "ампер (обозначение: А), ампер является одной из семи основных единиц СИ"
    ],
    
    [
        "единицей измерения электрического заряда в СИ",
        "является",
        "кулон; один кулон равен электрическому заряду, проходящему через поперечное сечение проводника с током силой в 1 А за время 1 с"
    ],
    
    [
        "единицей измерения силы тока в СИ",
        "является",
        "Ом (русское обозначение: Ом; международное обозначение: Ω)"
    ],
    
    [
        "единицей измерения магнитной индукции в СИ",
        "является",
        "является тесла (тл)"
    ],
    
    [
        "лоренц",
        "- это",
        "нидерландский физик-теоретик, лауреат Нобелевской премии по физике и других наград, член Нидерландской королевской академии наук, ряда иностранных академий наук и научных обществ. Лоренц известен прежде всего своими работами в области электродинамики и оптики"
    ],
    
    [
        "автор данной работы",
        "- это",
        "Яковлева Елизавета"
    ],
    
    [
        "работа",
        "называется",
        "определение удельного заряда элеткрона методом магнетрона"
    ],
    
    [
        "установка",
        "состоит ",
        "из амперметра, вольтметра, миллиамперметра, выключателя, выпрямителя, источника питания, ЛАТРа, реостата и соленоида"
    ],
    
    [
        "выпрямитель",
        "- это",
        "прибор, механизм для преобразования переменного тока в постоянный"
    ],
    
    //61:
    
    [
        "закон о силе Лоренца",
        "появился",
        " в 1865г. Историки науки предполагают, что этот закон подразумевался в статье Джеймса Клерка Максвелла, опубликованной в 1865 году. Хендрик Лоренц привёл полный вывод этой формулы в 1895 г., определив вклад электрической силы через несколько лет после того, как Оливер Хевисайд правильно определил вклад магнитной силы"
    ],
    
    [
        "электрический заряд",
        "- это",
        "физическая скалярная величина, определяющая способность тел быть источником электромагнитных полей и принимать участие в электромагнитном взаимодействии"
    ],
    
    [
        "электрический заряд ",
        "появился",
        "впервые в законе Кулона в 1785 году"
    ],
    
    [
        "кулон",
        "- это",
        "единица измерения электрического заряда, а также потока электрической индукции в Международной системе единиц; когерентная производная единица СИ, имеющая специальные наименование и обозначени"
    ],
    
    [
        "кулон",
        "- это",
        "(Шарль Огюсте́н де Куло́н) французский военный инженер и учёный-физик, исследователь электромагнитных и механических явлений; член Парижской Академии наук. Его именем названы единица электрического заряда и закон взаимодействия электрических зарядов."
    ],
    
    [
        "закон Ома",
        "- это",
        "эмпирический физический закон, определяющий связь электродвижущей силы источника с силой тока, протекающего в проводнике, и сопротивлением проводника"
    ],
    
    [
        "закон Ома ",
        "гласит",
        "для участка цепи ток прямо пропорционален напряжению и обратно пропорционален сопротивлению"
    ],
    
    [
        "Ом",
        "- это",
        "немецкий физик. Он вывел теоретически и подтвердил на опыте закон, выражающий связь между силой тока в цепи, напряжением и сопротивлением. Его именем названа единица электрического сопротивления. Член Баварской академии наук, иностранный член Лондонского королевского общества."
    ],
    
    [
        "электричество",
        "- это",
        "совокупность явлений, обусловленных существованием, взаимодействием и движением электрических зарядов"
    ],
    
    [
        "электрический ток ",
        "- это",
        "направленное движение частиц или квазичастиц. Последующее электромагнитное взаимодействие между заряженными частицами осуществляется не прямо, а посредством электромагнитного поля"
    ],
    
    //71:
    
    [
        "квазичастица ",
        "- это",
        "носитель электрического заряда"
    ],
    
    [
        "методы определения удельного заряда электрона",
        "сущетсвуют",
        "следующие: метод магнитной фокусировки, путём изучения термоэлектронной эмиссии в вакуумном диоде, метод магнетрона, метод Томсона"
    ],
    
    [
        "сущность мтеода Томсона",
        "заключается",
        "в компенсации отклонения электрона, вызванного действием магнитного поля, одновременным действием электрическим поле"
    ],
    
    [
        "сущность метода магнетрона ",
        "заключается ",
        "в том, что двухэлектродная электронная лампа с цилиндрическими коаксиальными катодом и анодом помещается в магнитное поле, создаваемое, например, соленоидом так, чтобы ось лампы совпадала с направлением магнитного поля"
    ],
    
    [
        "магнитное поле",
        "- это",
        "поле, действующее на движущиеся электрические заряды и на тела, обладающие магнитным моментом, независимо от состояния их движения; магнитная составляющая электромагнитного поля"
    ],
    
    [
        "магнитное поле",
        "создается",
        "током заряженных частиц и/или магнитными моментами электронов в атомах"
    ],
    
    [
        "магнитное поле ",
        "имеет",
        " следующие свойства: 1. Магнитное поле порождается электрическим током ( = движущимися зарядами); 2. Магнитное поле обнаруживается по действию на электрический ток ( = движущиеся заряды); 3. Подобно электрическому полю, магнитное поле существует реально независимо от нас, от наших знаний о нём. Экспериментальным доказательством реальности магнитного поля, как и реальности электрического поля, является факт существования электромагнитных волн (то есть посылка и приём радио- и телевизионных сигналов)"
    ],
    
    [
        "электрический заряд",
        "имеет",
        "следующие свойства: заряд существует в двух видах: положительный и отрицательный. Одноименные заряды отталкиваются, разноименные – притягиваются; в природе отрицательных зарядов столько же, сколько положительных; возникновение заряженных тел обусловлено не рождением зарядов, а их перераспределением (возникающим, например, при трении); в СИ единица измерения заряда ; минимальный положительный заряд равен элементарному заряду, минимальный отрицательный заряд есть заряд электрона. Он равен элементарному заряду, взятому с противоположным знаком; величина заряда может принимать только дискретные значения; в любой электрически изолированной системе тел алгебраическая сумма зарядов этих тел не изменяется во времени (закон сохранения заряда); заряд является релятивистским инвариантом – его величина не зависит от системы отсчета."
    ],
    
    [
        "линии магнитной индукции ",
        "- это",
        "так наиболее точно можно назвать магнитные линии, служащие наглядной иллюстрацией магнитных полей"
    ],
    
    [
        "линии магнитной индукции",
        "имеют",
        "следующие свойства: 1) Линии магнитной индукции всегда замкнуты и охватывают проводники с током. 2) Линии МП никогда не пересекаются. Их густота характеризует величину магнитной индукции в данной точке поля. Магнитная индукция зависит от свойств среды. 3) Для магнитного поля справедлив принцип суперпозиции"
    ],
    
    //81:
    
    [
        "выключатель",
        "- это",
        "электрический коммутационный аппарат или устройство, применяется для замыкания и/или размыкания электрической цепи или группы электрических цепей"
    ],
    
    [
        "амперметр",
        "- это",
        "прибор для измерения силы тока в амперах. Шкалу амперметров градуируют в микроамперах, миллиамперах, амперах или килоамперах в соответствии с пределами измерения прибора"
    ],
    
    [
        "вольтметр",
        "- это",
        "электроизмерительный прибор непосредственного отсчёта для определения напряжения или ЭДС в электрических цепях. Подключается параллельно нагрузке или источнику электрической энергии. Идеальный вольтметр должен обладать бесконечно большим внутренним сопротивлением."
    ],
    
    [
        "источник питания",
        "- это",
        "электрическое оборудование, предназначенное для производства, аккумулирования электрической энергии или изменения ее характеристик"
    ],
    
    [
        "физика",
        "- это",
        "область естествознания: наука о наиболее общих законах природы, о материи, её структуре, движении и правилах трансформации. Понятия физики и её законы лежат в основе всего естествознания. Является точной наукой."
    ],
    
    //триады с картинками
    
    [
        "формула для силы Лоренца ",
        "выглядит ",
        "следующим образом: <br><img src='../images/1.png' /> "
    ],
    
    [
        "формула для ускорения ",
        "выглядит ",
        "следующим образом: <br><img src='../images/2.png' /> "
    ],
    
    [
        "формула для кинетической энергии ",
        "выглядит ",
        "следующим образом: <br><img src='../images/3.png' /> "
    ],
    
    [
        "значение модуля напряженности электрического поля между цилиндрическими электродами вакуумного диода ",
        "выглядит ",
        "следующим образом: <br><img src='../images/5.png' /> "
    ],
    
    [
        "индукция магнитного поля внутри соленоида",
        "равна",
        "<br><img src='../images/6.png' />"
    ],
    
    [
        "закон изменения импульса",
        "выглядит",
        "следующим образом: <br><img src='../images/7.png' />"
    ],
    
    [
        "удельный заряд электрона",
        "равен",
        "<br><img src='../images/15.png' />"
    ],
    
    [
        "электрическая схема экспериментальной установки ",
        "выглядит",
        "следующим образом: <br><img src='../images/img2.png' />"
    ],
    
    [
        "схема направлений сил",
        "выглядит",
        "следующим образом: <br><img src='../images/Pic1.png' />"
    ],
    
    [
        "установка",
        "выглядит",
        "следующим образом: <br><img src='../images/setup.jpg' />"
    ],
    
    //11:
    
    [
        "Лоренц",
        "выглядит ",
        "так: <br><img src='../images/lorenc.jpg' />"
    ],
    
    [
        "Кулон",
        "выглядит ",
        "так: <br><img src='../images/kulon.png' />"
    ],
    
    [
        "Ом",
        "выглядит ",
        "так: <br><img src='../images/om.jpg' />"
    ],
    
    [
        "закон Ома",
        "выглядит",
        "следующим образом: <br><img src='../images/omm.png'"
    ],
    
    [
        "магнетрон",
        "выглядит",
        "следующим образом: <br><img src='../images/magnetron.jpg'"
    ],
];




//поиск и вывод ответа и вопроса
function ask(questionInput){
	var question=document.getElementById(questionInput).value.trim();
	//выдвижение диалогового модуля
	$("#dialog").animate({"margin-left":"-400px"}, 1000, function() {});
	dialogOn=true;
	//вывод вопроса
	//document.getElementById("history").innerHTML+="<div class='question'>"+question+"</div>";
	var newDiv=document.createElement("div");
	newDiv.className='question';
	newDiv.innerHTML=question;
	document.getElementById("history").appendChild(newDiv);
	//поиск и вывод ответа
	//document.getElementById("history").innerHTML+="<div class='answer'>"+getAnswer(question)+"</div>";
	//создаем блок <div>
	newDiv=document.createElement("div");
	//задаем класс оформления созданного блока
	newDiv.className='answer';
	//получаем ответ на вопрос и наполняем им созданный блок
	newDiv.innerHTML=getAnswer(question);
	//ОЗВУЧКА - СИНТЕЗ РЕЧИ
	//флаг, нужна ли озвучка (не нужна, если есть анимация)
	var needSound=true;
	//проходим по элементам HTML-кода ответа
	for(var i=0;i<newDiv.childNodes.length;i++){
		//если находим элемент <embed>
		if(newDiv.childNodes[i].tagName=="EMBED"){
			//alert("EMBED detected.");
			//сбрасываем флаг и выходим из цикла
			needSound=false;
			break;
		}
	}
	//если флаг не был сброшен
	if(needSound){
		//добавляем в ответ тег аудио, ссылающийся на звук от синтезатора речи яндекса
		//в обращении к яндексу tts.voicetech.yandex.net указывается:
		// - формат звука: format=wav
		// - язык озвучиваемого текста: lang=ru-RU
		// - ключ, полученный при регистрации в личном кабинете для SpeechKit Cloud API: key=4a4d3a13-d206-45fc-b8fb-e5a562c9f587
		// - озвучиваемый текст, который берется из сгенерированного ответа: text="+newDiv.innerText+"
		//alert("Incoming transmission.");
		newDiv.innerHTML+="<audio controls='true' autoplay='true' src='http://tts.voicetech.yandex.net/generate?format=wav&lang=ru-RU&key=4a4d3a13-d206-45fc-b8fb-e5a562c9f587&text="+(newDiv.innerText||newDiv.textContent)+"'></audio>";
	}
	// КОНЕЦ ОЗВУЧКИ
	document.getElementById("history").appendChild(newDiv);
	// ЕЩЕ КУСОЧЕК ДЛЯ ОЗВУЧКИ
	//запуск звука
	if(newDiv.lastChild.tagName=="AUDIO"){
		newDiv.lastChild.play();
	}
	//прокрутка истории в самый низ
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	//очистка текстового поля для ввода вопроса
	document.getElementById(questionInput).value="";
}

//псевдоокончания сказуемых (глаголов, кратких причастий и прилагательных )
var endings = [ ["ет","(ет|ут|ют)"], ["ут","(ет|ут|ют)"], ["ют","(ет|ут|ют)"],																										//1 спряжение
        			["ит","(ит|ат|ят)"], ["ат","(ит|ат|ят)"], ["ят","(ит|ат|ят)"],																											//2 спряжение
        			["ется","(ет|ут|ют)ся"], ["утся","(ет|ут|ют)ся"], ["ются","(ет|ут|ют)ся"],																					//1 спряжение, возвратные
        			["ится","(ит|ат|ят)ся"], ["атся","(ит|ат|ят)ся"], ["ятся","(ит|ат|ят)ся"],																					//2 спряжение, возвратные
        			["ен","ен"], ["ена","ена"], ["ено","ено"], ["ены","ены"],	["ан","ан"], ["ана","ана"], ["ано","ано"], ["аны","аны"], //краткие прилагательные
        			["жен","жен"], ["жна","жна"], ["жно","жно"], ["жны","жны"],																													//краткие прилагательные
							["такое","- это"]];																																																	//для вопроса "что такое А?" ответ - "А - это ..."
//черный список слов, распознаваемых как сказуемые по ошибке
var blacklist = [ "замена", "замены", "атрибут", "маршрут", "член", "нет" ];
//функция определения сказуемых по соответствующим псевдоокончаниям
function getEnding(word)
{
  //проверка по черному списку
  if (blacklist.indexOf(word)!==-1) return -1;
  //перебор псевдоокончаний
  for (var j = 0; j < endings.length; j++)
  {
    //проверка, оканчивается ли i-ое слово на j-ое псевдоокончание
    if(word.substring(word.length-endings[j][0].length)==endings[j][0]){
        return j;   //возврат номера псевдоокончания
    }
  }
  return -1;  //если совпадений нет - возврат -1
}

//функция, которая делает первую букву маленькой
function small1(str)
{
  return str.substring(0, 1).toLowerCase() + str.substring(1);
}

//функция, которая делает первую букву большой
function big1(str)
{
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

//главная функция, обрабатывающая запросы клиентов
function getAnswer(question)
{
  //знаки препинания
  var separators = "'\",.!?()[]\\/";
  //получение текста из параметра запроса
  var txt = small1(question);
  //добавление пробелов перед знаками препинания
  for (var i = 0; i < separators.length; i++)
     txt = txt.replace(separators[i], " " + separators[i]);
  //массив слов и знаков препинания
  var words = txt.split(' ');
  //флаг, найден ли ответ
  var result = false;
  //формируемый функцией ответ на вопрос
  var answer = "";
  //перебор слов
  for (var i = 0; i < words.length; i++)
  {
		//alert(words[i]);
    //поиск номера псевдоокончания
    var ending = getEnding(words[i]);
    //если псевдоокончание найдено – это сказуемое, подлежащее в вопросе после него
    if (ending >= 0)
    {
			//---ТОЧНЫЙ ПОИСК---
			//---ПОИСК С ПОМОЩЬЮ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ---
	    //замена псевдоокончания на набор возможных окончаний
	    words[i] = words[i].substring(0, words[i].length - endings[ending][0].length) + endings[ending][1];
	    //создание регулярного выражения для поиска по сказуемому из вопроса
	    var predicate = new RegExp(words[i]);
	    //для кратких прилагательных захватываем следующее слово
	    if (endings[ending][0] == endings[ending][1])
	    {
	      predicate = new RegExp(words[i] + " " + words[i + 1]);
	      i++;
	    }
			var subject_array = words.slice(i + 1);
			var subject_text = subject_array.join(" ");
	    //создание регулярного выражения для поиска по подлежащему из вопроса
			//из слов подлежащего выбрасываем короткие предлоги (периметр у квадрата = периметр квадрата)
			for (var j = 0; j < subject_array.length; j++){
				if(subject_array[j].length < 3){
					subject_array.splice(j);
					j--;
				}
			}
			var subject_string = subject_array.join(".*");
			//только если в послежащем больше трех символов
			if (subject_string.length>3)
			{
				var subject = new RegExp(".*" + subject_string + ".*");
				//поиск совпадений с шаблонами среди связей семантической сети
				for (var j = 0; j < knowledge.length; j++)
				{
					if (predicate.test(knowledge[j][1]) && (subject.test(knowledge[j][0]) || subject.test(knowledge[j][2])))
					{
						//создание простого предложения из семантической связи
						answer+=big1(knowledge[j][0] + " " + knowledge[j][1] + " " + knowledge[j][2] + ". ");
						result = true;
					}
				}
				//если совпадений с двумя шаблонами нет,
				if (result == false){
					//поиск совпадений только с шаблоном подлежащего
					for (var j = 0; j < knowledge.length; j++)
					{
						if ((subject.test(knowledge[j][0]) || subject.test(knowledge[j][2])))
						{
							//создание простого предложения из семантической связи
							answer+=big1(knowledge[j][0] + " " + knowledge[j][1] + " " + knowledge[j][2] + ". ");
							result = true;
						}
					}
				}
			}
  	}
  }
  //если ответа нет
  if(!result)
  	answer = "Ответ не найден. <br/>";
		//если ответ есть - добавляем увеличение картинок
	else
		answer = answer.replace("<img ", "<img onclick='zoom(this.src)'");
    return answer;
}


function zoom(src) {
document.getElementById("img_in_alert").src=src;
$("#imgalert").css({"display":"block",
"position": "fixed",
"top": "100px",
"left": "100px",
"z-index": 5});
$("#imgalert").addClass('alertHover');
document.getElementById("img_in_alert").classList.add('alertHover');
setTimeout(() => {
$("#imgalert").css({"display":"none"});
}, 4000);
}

function makeImageBigger() {
console.log('here');
$("#imgalert").css({"height":"500px",
"position": "fixed",
"top": "150px"});
}