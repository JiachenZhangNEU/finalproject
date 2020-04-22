import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UIComponent implements OnInit {

  constructor() { }

  title = 'calendar';
  isLefthidden = false;
  dayType = "day";

  // 被选中的日期
  selectedDay: any = dayjs().format('YYYY-MM-DD')
  
  //parentMessage = dayjs(this.selectedDay).date();
  //parentMessage = "shabi";

  panels = [
    {
      active: true,
      name: 'My calendar',
      disabled: false,
      text: 'My calendar'
    },
    {
      active: false,
      disabled: false,
      name: 'Other calendars',
      text: 'Other calendars'
    },
  ];

  dayTitle: any[] = [];
  timesOfDay: any = gettime();

  // 月份
  listDataMap: any = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  }
  mode: string = 'month';
  yearAndMonValue: string = '';
  monAndYear:string = ''

  ngOnInit(): void {
    this.dateHandler()
    this.monAndYear = dayjs(this.selectedDay).format('YYYY年MM月')
  }

  // 右边选择type
  changeType() {
    this.dateHandler();
  }

  // 左边选择日期
  onValueChange(value: Date): void {
    this.selectedDay = dayjs(value).format('YYYY-MM-DD')
    this.dateHandler();
  }

  dateHandler() {
    if (this.dayType == 'day') {
      this.dayTitleHandler()
    }
    if (this.dayType == 'week') {
      this.weekTitleHandler()
    }
    if (this.dayType == 'mon') {
      this.mode = "month"
      this.yearAndMonValue = this.selectedDay
      // this.dayTitleHandler()
    }
    if (this.dayType == 'year') {
      this.mode = "year"
      this.yearAndMonValue = this.selectedDay
      // this.dayTitleHandler()
    }
  }
  dayTitleHandler() {
    const obj = {
      week: weekArr[dayjs(this.selectedDay).day()],
      date: this.selectedDay,
      day: dayjs(this.selectedDay).date(),
      month: dayjs(this.selectedDay).month(),
    }
    this.dayTitle = [obj]
  }
  weekTitleHandler() {
    var arr = getweek(this.selectedDay)
    this.dayTitle = [...arr];

  }
  monTitleHandler() {
    const obj = {
      week: weekArr[dayjs(this.selectedDay).day()],
      date: this.selectedDay,
      day: dayjs(this.selectedDay).date(),
      month: dayjs(this.selectedDay).month(),
    }
    this.dayTitle.push(obj)
  }
  yearTitleHandler() {
    const obj = {
      week: weekArr[dayjs(this.selectedDay).day()],
      date: this.selectedDay,
      day: dayjs(this.selectedDay).date(),
      month: dayjs(this.selectedDay).month(),
    }
    this.dayTitle.push(obj)
  }

  todayBtn(){
    this.selectedDay = dayjs().format('YYYY-MM-DD');
    this.monAndYear = dayjs(this.selectedDay).format('YYYY年MM月')
    this.dateHandler();
  }
  todaySub(){
    if (this.dayType == 'day') {
      this.selectedDay = dayjs(this.selectedDay).subtract(1,'day').format('YYYY-MM-DD');
      this.dayTitleHandler()
    }
    if (this.dayType == 'week') {
      this.selectedDay = dayjs(this.selectedDay).subtract(7,'day').format('YYYY-MM-DD');
      this.weekTitleHandler()
    }
    if (this.dayType == 'mon') {
      this.selectedDay = dayjs(this.selectedDay).subtract(1,'month').format('YYYY-MM-DD');
      this.mode = "month"
      this.yearAndMonValue = this.selectedDay
      // this.dayTitleHandler()
    }
    if (this.dayType == 'year') {
      this.selectedDay = dayjs(this.selectedDay).subtract(1,'year').format('YYYY-MM-DD');
      this.mode = "year"
      this.yearAndMonValue = this.selectedDay
      // this.dayTitleHandler()
    }
    this.monAndYear = dayjs(this.selectedDay).format('YYYY年MM月')
  }
  todayAdd(){
    if (this.dayType == 'day') {
      this.selectedDay = dayjs(this.selectedDay).add(1,'day').format('YYYY-MM-DD');
      this.dayTitleHandler()
    }
    if (this.dayType == 'week') {
      this.selectedDay = dayjs(this.selectedDay).add(7,'day').format('YYYY-MM-DD');
      this.weekTitleHandler()
    }
    if (this.dayType == 'mon') {
      this.selectedDay = dayjs(this.selectedDay).add(1,'month').format('YYYY-MM-DD');
      this.mode = "month"
      this.yearAndMonValue = this.selectedDay
      // this.dayTitleHandler()
    }
    if (this.dayType == 'year') {
      this.selectedDay = dayjs(this.selectedDay).add(1,'year').format('YYYY-MM-DD');
      this.mode = "year"
      this.yearAndMonValue = this.selectedDay
      // this.dayTitleHandler()
    }
    this.monAndYear = dayjs(this.selectedDay).format('YYYY年MM月')
  }




  isHiddenLeft(): void {
    this.isLefthidden = !this.isLefthidden
  }



  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

}
