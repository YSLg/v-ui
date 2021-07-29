// eslint-disable-next-line import/no-extraneous-dependencies
import { Store } from 'create-form-controller';

function useForm(vm) {
  const formRef = vm;
  if (vm.current) {
    formRef.current = vm.current;
  } else {
    const StoreDefault = Store.default;
    const formStore = new StoreDefault({});
    formRef.current = formStore;
  }
  return [formRef.current];
}
export default useForm;
