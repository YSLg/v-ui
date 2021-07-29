import form from './v-form.jsx';

form.install = Vue => {
  Vue.component(form.name, form);
};

export default form;
