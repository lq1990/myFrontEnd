import Vue from "vue";
import {
  Button,
  RadioGroup,
  RadioButton,
  Slider,
  Switch,
  Popover
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Button);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Slider);
Vue.use(Switch);
Vue.use(Popover);
