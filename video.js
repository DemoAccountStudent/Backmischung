
$(document).on('mouseover', 'video', function() { //selecting the document 1st will grab new content
$(this).get(0).play(); 
}); 

//pause video on mouse leave
$(document).on('click', 'video', function() { 
$(this).get(0).pause(); 
});