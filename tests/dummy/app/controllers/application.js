import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this.formField = EmberObject.create({
      fieldLabel: "Test",
      fieldId: "test",
      fieldType: "dateRange",
      validationRules: [{ 'validationMethod': 'required' }, { 'validationMethod': 'isDate' }],
      validationEvents: ['insert'],
      minDate: moment("2013-11-05").toDate(),
      maxDate: moment("2020-12-05").toDate(),
      calendarStartMonth: '09/2018',
      dateFormat:'YYYY/MM/DD',
      startTime: '00:01',
      endTime: '23:59',
      defaultStartDate: moment("2015-08-28").toDate(),
      defaultEndDate: moment("2023-08-28").toDate(),
    });
  },
  center: new Date('2016-05-17'),
  minDate: moment("2018-11-05").toDate(),

  actions: {
    onUserInteraction(value) {
      this.set('formField.value', value);
      console.log(value);
    },


  }
});
