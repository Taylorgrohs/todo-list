function List(day) {
  this.day = day;
  this.todo = [];
}

$(document).ready(function(){
  $("form").submit(function(event){
    var inputtedDay = $("input#new-day").val();
    var inputtedTodo1 = $("input#new-todo1").val();
    var inputtedTodo2 = $("input#new-todo2").val();
    var newList = new List(inputtedDay);

    $("ul#list").append("<li><span class='days'>" + newList.day + "</span></li>");
    newList.todo.push(inputtedTodo1);
    newList.todo.push(inputtedTodo2);
    console.log(newList.todo);
    $(".days").last().click(function(){
      $("#show-list").show();
      $("#show-list h2").text(newList.day)
      newList.todo.forEach(function(todo){
        $("ol.thingstodo").append("<li>" + todo + "</li>");
      });
    });
  event.preventDefault();
  });
});
