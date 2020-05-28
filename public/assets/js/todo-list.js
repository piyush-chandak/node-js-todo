$(document).ready(function(){
  var disableClass = 'disabled';
  var cursorWaitClass = 'cursor-wait';

  // To save item
  $('.todo-list-form').on('submit', function(){
    var submitBtn = $('.todo-list-add-btn');
    var item = $('.todo-list-input');
    var todo = {item: item.val()};

    submitBtn.addClass(disableClass);

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function(data){
        submitBtn.removeClass(disableClass);
        location.reload();
      }
    });
  });

  // To remove item
  $('.list-item').on('click', function(){
    var $this = $(this);

    if ($this.hasClass(cursorWaitClass)) {
      return false;
    }

    var todoItem = $this.attr('data-val');
    // To ask before delete
    var res = confirm('Do you want to delete ' + todoItem);
    if (!res) {
      return false;
    }

    $this.addClass(cursorWaitClass);

    var item = todoItem.replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(data){
        $this.removeClass(cursorWaitClass);
        location.reload();
      }
    });
  });
});
