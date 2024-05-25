$(document).ready(function() {
// по вертикали
 $("#scrollbar").mCustomScrollbar({
    axis:"y",
    advanced:{autoExpandHorizontalScroll:true}
 });
// по горизонтали
 $("#scrollbarx").mCustomScrollbar({
   axis:"x",
   advanced:{autoExpandHorizontalScroll:true}
 });
});