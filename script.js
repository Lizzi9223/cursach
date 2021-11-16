var words = ['Сургуч','',''];

$(document).ready(function()
{
    
        $(".image").click(function()
                    {
                        $(this).css("width","45%");
                    });
    
        $(".image").mouseout(function()
                    {
                        $(this).css("width","35%");
                    });
    
            
            $(".definition_word").mouseover(function()
                    {
                        $(this).css("color","#0000CD"); 
                    });
            $(".definition_word").mouseout(function()
                    {
                        $(this).css("color","#555");
                    });
    
    
    $('.rainbow_animated').click(function(){
                
          if (!$(this).data('status')) {
              switch($(this).html())
                  {
                      case "магнитном поле": $(this).html("<img src=\"../images/magneticField.png\" style=\"max-width: 25%\"/>"); break;
                        case "магнетрона": $(this).html("<img src=\"../images/magnetron.jpg\" style=\"max-width: 25%\"/>"); break;
                          case "потенциалы": $(this).html("<img src=\"../images/potencial.jpg\" style=\"max-width: 25%\"/>"); break;
                          case "сила Лоренца": $(this).html("<img src=\"../images/force.jpg\" style=\"max-width: 25%\"/>"); break;
                          
                  }
            $(this).data('status', true);
          }
          else {
              switch($(this).html())
                  {
                      case "<img src=\"../images/magneticField.png\" style=\"max-width: 25%\">": $(this).html('магнитном поле'); break;
                          case "<img src=\"../images/magnetron.jpg\" style=\"max-width: 25%\">": $(this).html('магнетрона'); break;
                          case "<img src=\"../images/potencial.jpg\" style=\"max-width: 25%\">": $(this).html('потенциалы'); break;
                          case "<img src=\"../images/force.jpg\" style=\"max-width: 25%\">": $(this).html('сила Лоренца'); break;
                  }
            $(this).data('status', false);
          }        
        });
    
    
    
});