import Vue from "vue";
import { Button, RadioButton, RadioGroup, Slider, Switch } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Button); // use会调用 install方法。use之后，可使button全局可用
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Slider);
Vue.use(Switch);
