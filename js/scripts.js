$(document).ready(function() {
        $("button#green").click(function() {
          $("body").removeClass();
          $("body").addClass("green-background");
          $('body').css('color','white');
        });

        $("button#yellow").click(function() {
          $("body").removeClass();
          $("body").addClass("yellow-background");
        });

        $("button#red").click(function() {
          $("body").removeClass();
          $("body").addClass("red-background");
        });
      });



          $(document).ready(function() {
      $("button#hello").click(function() {
        $("ul#user").prepend("<li>Hello!</li>");
        $("ul#webpage").prepend("<li>Why hello there!</li>");
        $('li').css('background-color', 'green');

      });

      $("button#goodbye").click(function() {
        $("ul#user").prepend("<li>Goodbye!</li>");
        $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
      });

      $("button#stop").click(function() {
        $("ul#user").prepend("<li>Stop copying me!</li>");
        $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
      });
    });
