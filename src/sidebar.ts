import $ from "jquery";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"
import "./styles/index.less";

$(() => {

    $("#show-sidebar").on("click", () => {
        $("#sidebar").toggleClass("active");
        $(".overlay").toggleClass("active");
    });

    $("#dismiss-sidebar").on("click", () => {
        $("#sidebar").toggleClass("active");
        $(".overlay").toggleClass("active");
    });

});
