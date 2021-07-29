// eslint-disable-next-line import/no-extraneous-dependencies

export default {
  name: 'FormItem',
  data() {
    return {
    };
  },
  props: ['filItem', 'params', 'form'],
  mounted() {
    // this.form.dispatch({
    //   type: 'add',
    //   [this.params.field]: {
    //     value: this.params.value,
    //     validate: this.params.validate
    //   }
    // });
  },
  methods: {
    delectItem() {
      this.form.dispatch({ type: 'set', [this.params.field]: '' });
    }
  },
  watch: {
    form: {
      handler(val) {
        if (val) {
          val.dispatch({
            type: 'add',
            [this.params.field]: {
              value: this.params.value,
              validate: this.params.validate
            }
          });
        }
      }
    }
  },
  render(h) {
    return (
      <div>
        {h(
          { ...this.filItem },
          {
            props: {
              params: this.params,
              errorMessage: this.form && this.form.getCurrentState()[this.params.field]
                .errorMessageList[0],
              allowClearHandler: this.delectItem
            },
            on: {
              input: event => {
                console.log(event, 'event');
                if (this.form && this.form.dispatch) {
                  this.form.dispatch({ type: 'set', [this.params.field]: event });
                }
              }
            }
          }
        )}
      </div>
    );
  }
};
