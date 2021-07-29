// eslint-disable-next-line import/no-extraneous-dependencies
import useForm from './useForm';

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
    this.formApi = {
      ...form
    };
    this.$emit('input', this.formApi);
    console.log(this.conponentsList);
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
          const self = this.rule;
          return h(
            { ...filItem[0] },
            {
              props: {
                params: e
              },
              on: {
                input(event) {
                  console.log(event, e.field, self, 'event');
                }
              }
            }
          );
        })}
      </div>
    );
  }
};
