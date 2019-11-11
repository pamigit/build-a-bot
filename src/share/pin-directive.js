export default function (ele, binding) {
  Object.keys(binding.value).forEach((item) => {
    ele.style[item] = binding.value[item];
  });
  ele.style.position = 'absolute';
}
