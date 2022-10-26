let instancesDatepicker = null;

document.addEventListener('DOMContentLoaded', () => {
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems, {});

  let navElems = document.querySelectorAll('.sidenav');
  let navInstances = M.Sidenav.init(navElems);

  let elems_tooltip = document.querySelectorAll('.tooltipped');
  let tooltipInstances = M.Tooltip.init(elems_tooltip);

  let elems_datepicker = document.querySelectorAll('.datepicker');
  instancesDatepicker = M.Datepicker.init(elems_datepicker, {
    format: 'dd.mm.yyyy',
    defaultDate: new Date(),
    setDefaultDate: true,
    firstDay: 1
  });

  let tabsElems = document.querySelectorAll('.tabs');
  let tabsinstance = M.Tabs.init(tabsElems, {});
});
