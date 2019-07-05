import $ from "jquery";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"
import "./sidebar.less";

$(document).ready(() => {

    const $wrapper: JQuery<HTMLElement> = $("#wrapper");

    const setSidebarVisible = (visible: boolean): void => {
        if (visible) {
            $wrapper.addClass("sidebar-visible");
        }
        else {
            $wrapper.removeClass("sidebar-visible");
        }
    };

    $(window).resize((e: JQuery.ResizeEvent): void => {
        e.preventDefault();
        let width: number = $(window).width();
        setSidebarVisible(width > 768);
    });

    // Hide the sidebar.
    setSidebarVisible(false);

});
