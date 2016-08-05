'use strict';

var SIDEBAR_COLLAPSED_CLASS = 'sidebar-collapsed',
    SIDEBAR_ID = 'main-sidebar',
    SIDEBAR_TOGGLE_CLASS = 'sidebar-toggle',
    SIDEBAR_TOGGLE_COLLAPSED_CLASS = 'sidebar-toggle-collapsed',
    SIDEBAR_TOGGLE_ID = 'sidebar-toggle',
    WRAPPER_CONTAINER_ID = 'main-wrapper',
    WRAPPER_EXPANDED_CLASS = 'wrapper-expanded';

var toggle, sidebar, wrapper, toggleSidebar;

toggleSidebar = function toggleSidebar() {
  sidebar.classList.toggle(SIDEBAR_COLLAPSED_CLASS);
  toggle.classList.toggle(SIDEBAR_TOGGLE_CLASS);
  toggle.classList.toggle(SIDEBAR_TOGGLE_COLLAPSED_CLASS);
  wrapper.classList.toggle(WRAPPER_EXPANDED_CLASS);
};

sidebar = document.getElementById(SIDEBAR_ID);
toggle = document.getElementById(SIDEBAR_TOGGLE_ID);
wrapper = document.getElementById(WRAPPER_CONTAINER_ID);

toggle.addEventListener('click', toggleSidebar, true);