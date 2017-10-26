export function uibTabindexToggle(el: Element, binding: vueBinding) {
    if (binding.value)
        el.setAttribute("tabindex", "-1");
    else
        el.removeAttribute("tabindex");
}