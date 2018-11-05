define(["jquery"
], function ($) {
    'use strict';
    return {
        do: function () {
            console.log("i am show.");
            $(document.body).append("<div>append</div>");
        }
    };

});