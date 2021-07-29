// eslint-disable-next-line import/no-extraneous-dependencies
import useForm from './useForm';
import FormItem from './FormItem';

export default {
  name: 'Form',
  data() {
    return {
      formApi: null,
      current: null
    };
  },
  props: {
    rule: {
      type: Array,
      default: () => []
    },
    conponentsList: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    const [form] = useForm(this);
    this.formApi = form;
    this.$emit('input', this.formApi);
  },
  watch: {
    formApi: {
      handler(val) {
        console.log(val, '123445');
      },
      deep: true
    }
  },
  destroyed() {
    this.current = null;
  },
  render(h) {
    return (
      <div>
        {this.rule.map(e => {
          const filItem = this.conponentsList.filter(
            item => item.name === e.type
          );
          if (!filItem.length) {
            return null;
          }
          return h(
            FormItem,
            {
              props: {
                params: e,
                form: this.formApi,
                filItem: filItem[0]
              }
            }
          );
        })}
      </div>
    );
  }
};
