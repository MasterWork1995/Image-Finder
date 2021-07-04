import { alert, defaults } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';


defaults.styling = 'material';
defaults.icons = 'material';
defaults.animateSpeed = 'fast';
defaults.delay = 2000;

export  function showMessage() {
    alert({
        title: '😠',
        text: 'Empty line. please enter a request!',
});
}