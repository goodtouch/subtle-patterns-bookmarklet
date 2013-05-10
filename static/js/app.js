// Generated by CoffeeScript 1.6.2
(function() {
  var add_overlay_classes, create_bookmarklet, remove_overlay_classes;

  add_overlay_classes = function(overlay) {
    var category, classes;

    classes = ((function() {
      var _i, _len, _ref, _results;

      _ref = overlay.current_pattern().categories;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        category = _ref[_i];
        _results.push("spb-" + category);
      }
      return _results;
    })()).join(" ");
    return overlay.selector.get(0).className += " " + classes;
  };

  remove_overlay_classes = function(overlay) {
    var classes;

    classes = overlay.selector.attr("class") || "";
    return overlay.selector.attr("class", classes.replace(/\s?spb-\w+/g, ""));
  };

  create_bookmarklet = function() {
    var overlay;

    overlay = new SubtlePatternsBookmarklet();
    overlay.setup({
      patterns: SUBTLEPATTERNS,
      parent: ".bookmarklet_container",
      klass: "homepage",
      "default": "Old Mathematics",
      events: {
        finished_setup: function() {
          $(".bookmarklet_button a").click(function() {
            alert("Drag this button to your bookmarks bar");
            return false;
          });
          return overlay.el.find(".close_bookmarklet").click(function() {
            return create_bookmarklet();
          });
        },
        revert_background: function() {
          return remove_overlay_classes(overlay);
        },
        after_update: function() {
          remove_overlay_classes(overlay);
          return add_overlay_classes(overlay);
        }
      }
    });
    return overlay;
  };

  if (window.SubtlePatternsBookmarklet) {
    create_bookmarklet();
  } else {
    alert("Something went wrong...can't find the bookmarklet");
  }

}).call(this);
