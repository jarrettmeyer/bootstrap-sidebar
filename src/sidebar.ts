import $ from "jquery";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"
import "./styles/index.less";

$(() => {

    $("#show-sidebar").on("click", () => {
        showSidebar();
    });

    $("#dismiss-sidebar").on("click", () => {
        dismissSidebar();
    });

    $("#sidebar-overlay").on("click", () => {
        dismissSidebar();
    });

    function dismissSidebar() {
        $("#sidebar").removeClass("active");
        $("#sidebar-overlay").removeClass("active");
        $('a[aria-expanded="true"]').attr("aria-expanded", "false");
        $("ul.collapse").removeClass("show");
    }

    function showSidebar() {
        $("#sidebar").addClass("active");
        $("#sidebar-overlay").addClass("active");
    }

});
