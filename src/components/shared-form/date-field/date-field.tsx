import { DatePicker as ArkDatePicker, parseDate, Portal } from '@ark-ui/react';
import Field, { BaseFieldProps } from '../field/field';
import InputContainer from '../input-container/input-container';
import { DateTime } from 'luxon';
import { formatJSDateToYearMonthDate } from '@/utils/date';
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faXmark,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const datePickerViewControlStyle =
  'mb-4 px-1 flex w-full justify-between cursor-pointer items-center text-slate-800 hover:text-slate-700';
export const datePickerViewTriggerStyle =
  'flex cursor-pointer justify-between items-center gap-2 text-slate-800 hover:text-slate-900 active:text-black rounded-lg px-[6px] py-1 text-base';
export const datePickerNavWrapperStyle = 'flex gap-2';
export const datePickerNavTriggerStyle =
  'cursor-pointer text-sm data-[disabled]:text-slate-600 disabled:text-slate-600 rounded-lg h-6 w-6 text-slate-800 hover:bg-slate-200 active:bg-slate-300';

type DateFieldProps = BaseFieldProps & {
  max?: Date;
  min?: Date;
  value: Date | null;
  onChange: (prop: Date | null) => void;
};

const DateField = (props: DateFieldProps) => {
  return (
    <Field {...props}>
      <InputContainer {...props}>
        <DateInput {...props} />
      </InputContainer>
    </Field>
  );
};

const DateInput = ({
  onChange,
  value,
  disabled,
  max,
  min,
  placeholder,
}: Omit<DateFieldProps, 'label' | 'required' | 'error'>) => {
  return (
    <ArkDatePicker.Root
      disabled={disabled}
      className="flex w-full justify-between"
      positioning={{
        placement: 'bottom-start',
      }}
      onValueChange={(details) => {
        onChange(DateTime.fromFormat(details.valueAsString[0], 'LL/dd/yyyy').toJSDate() || null);
      }}
      value={value ? [parseDate(formatJSDateToYearMonthDate(value))] : undefined}
      max={max ? parseDate(formatJSDateToYearMonthDate(max)) : undefined}
      min={min ? parseDate(formatJSDateToYearMonthDate(min)) : undefined}
    >
      <ArkDatePicker.Control title="Pick date" className="flex w-full justify-between">
        <ArkDatePicker.Trigger
          disabled={disabled}
          className="group flex w-full flex-grow cursor-pointer items-center hover:text-slate-700 data-[disabled]:cursor-default"
        >
          {value ? (
            <span className="text-base text-slate-900 group-data-[disabled]:text-slate-700">
              {DateTime.fromJSDate(value).toFormat('dd/LL/yyyy').toString()}
            </span>
          ) : (
            <span className="text-base text-slate-500">{placeholder || 'Pick date'}</span>
          )}
        </ArkDatePicker.Trigger>
        {!disabled && value && (
          <button
            title="Clear"
            onClick={() => onChange(null)}
            className="text-sm text-neutral-800 hover:cursor-pointer hover:opacity-75"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
      </ArkDatePicker.Control>
      <Portal>
        <ArkDatePicker.Positioner>
          <ArkDatePicker.Content className="z-[1000] h-[302px] w-[288px] rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-md">
            <ArkDatePicker.View view="day">
              <ArkDatePicker.Context>
                {(datePicker) => (
                  <>
                    <ArkDatePicker.ViewControl className={datePickerViewControlStyle}>
                      <ArkDatePicker.ViewTrigger className={datePickerViewTriggerStyle}>
                        <ArkDatePicker.RangeText />
                        <FontAwesomeIcon icon={faChevronDown} fixedWidth />
                      </ArkDatePicker.ViewTrigger>
                      <div className={datePickerNavWrapperStyle}>
                        <ArkDatePicker.PrevTrigger className={datePickerNavTriggerStyle}>
                          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                        </ArkDatePicker.PrevTrigger>
                        <ArkDatePicker.NextTrigger className={datePickerNavTriggerStyle}>
                          <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                        </ArkDatePicker.NextTrigger>
                      </div>
                    </ArkDatePicker.ViewControl>
                    <ArkDatePicker.Table>
                      <ArkDatePicker.TableHead>
                        <ArkDatePicker.TableRow className="w-full">
                          {datePicker.weekDays.map((weekDay, id) => (
                            <ArkDatePicker.TableHeader
                              key={id}
                              className="p-2 text-center text-xs text-slate-800"
                            >
                              {weekDay.short}
                            </ArkDatePicker.TableHeader>
                          ))}
                        </ArkDatePicker.TableRow>
                      </ArkDatePicker.TableHead>
                      <ArkDatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <ArkDatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <ArkDatePicker.TableCell key={id} value={day}>
                                <div className="flex items-center justify-center">
                                  <ArkDatePicker.TableCellTrigger className="flex aspect-square h-8 w-8 cursor-pointer items-center justify-center text-center text-xs hover:bg-blue-300 data-[disabled]:cursor-default data-[disabled]:text-slate-600 data-[disabled]:hover:bg-transparent data-[outside-range]:cursor-default data-[outside-range]:text-slate-600 data-[outside-range]:hover:bg-transparent data-[selected]:bg-blue-700 data-[selected]:text-white data-[today]:bg-blue-200 data-[today]:hover:bg-blue-300 data-[today]:hover:text-slate-800">
                                    {day.day}
                                  </ArkDatePicker.TableCellTrigger>
                                </div>
                              </ArkDatePicker.TableCell>
                            ))}
                          </ArkDatePicker.TableRow>
                        ))}
                      </ArkDatePicker.TableBody>
                    </ArkDatePicker.Table>
                  </>
                )}
              </ArkDatePicker.Context>
            </ArkDatePicker.View>
            <ArkDatePicker.View view="month">
              <ArkDatePicker.Context>
                {(datePicker) => (
                  <div className="flex flex-col items-center">
                    <ArkDatePicker.ViewControl className={datePickerViewControlStyle}>
                      <ArkDatePicker.ViewTrigger className={datePickerViewTriggerStyle}>
                        <ArkDatePicker.RangeText />
                        <FontAwesomeIcon icon={faChevronDown} fixedWidth />
                      </ArkDatePicker.ViewTrigger>

                      <div className={datePickerNavWrapperStyle}>
                        <ArkDatePicker.PrevTrigger className={datePickerNavTriggerStyle}>
                          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                        </ArkDatePicker.PrevTrigger>
                        <ArkDatePicker.NextTrigger className={datePickerNavTriggerStyle}>
                          <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                        </ArkDatePicker.NextTrigger>
                      </div>
                    </ArkDatePicker.ViewControl>

                    <ArkDatePicker.Table className="w-full">
                      <ArkDatePicker.TableBody className="w-full">
                        {datePicker
                          .getMonthsGrid({ columns: 4, format: 'short' })
                          .map((months, id) => (
                            <ArkDatePicker.TableRow key={id} className="flex w-full gap-[2px]">
                              {months.map((month, id) => (
                                <ArkDatePicker.TableCell
                                  key={id}
                                  value={month.value}
                                  className="w-1/4 text-center"
                                >
                                  <ArkDatePicker.TableCellTrigger className="hover:bg-primary-blue-300 data-[selected]:bg-primary-blue-main-700 cursor-pointer px-3 py-2 data-[disabled]:text-slate-600 data-[selected]:text-white">
                                    {month.label}
                                  </ArkDatePicker.TableCellTrigger>
                                </ArkDatePicker.TableCell>
                              ))}
                            </ArkDatePicker.TableRow>
                          ))}
                      </ArkDatePicker.TableBody>
                    </ArkDatePicker.Table>
                  </div>
                )}
              </ArkDatePicker.Context>
            </ArkDatePicker.View>
            <ArkDatePicker.View view="year">
              <ArkDatePicker.Context>
                {(datePicker) => (
                  <div className="flex flex-col items-center">
                    <ArkDatePicker.ViewControl className={datePickerViewControlStyle}>
                      <ArkDatePicker.ViewTrigger className={datePickerViewTriggerStyle}>
                        <ArkDatePicker.RangeText />
                        <FontAwesomeIcon icon={faChevronDown} fixedWidth />
                      </ArkDatePicker.ViewTrigger>
                      <div className={datePickerNavWrapperStyle}>
                        <ArkDatePicker.PrevTrigger className={datePickerNavTriggerStyle}>
                          <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                        </ArkDatePicker.PrevTrigger>
                        <ArkDatePicker.NextTrigger className={datePickerNavTriggerStyle}>
                          <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                        </ArkDatePicker.NextTrigger>
                      </div>
                    </ArkDatePicker.ViewControl>
                    <ArkDatePicker.Table className="w-full">
                      <ArkDatePicker.TableBody className="w-full">
                        {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                          <ArkDatePicker.TableRow key={id} className="w-full">
                            {years.map((year, id) => (
                              <ArkDatePicker.TableCell
                                key={id}
                                value={year.value}
                                className="w-1/4 text-center"
                              >
                                <ArkDatePicker.TableCellTrigger className="hover:bg-primary-blue-300 data-[selected]:bg-primary-blue-main-700 cursor-pointer px-3 py-2 data-[disabled]:text-slate-600 data-[selected]:text-white">
                                  {year.label}
                                </ArkDatePicker.TableCellTrigger>
                              </ArkDatePicker.TableCell>
                            ))}
                          </ArkDatePicker.TableRow>
                        ))}
                      </ArkDatePicker.TableBody>
                    </ArkDatePicker.Table>
                  </div>
                )}
              </ArkDatePicker.Context>
            </ArkDatePicker.View>
          </ArkDatePicker.Content>
        </ArkDatePicker.Positioner>
      </Portal>
    </ArkDatePicker.Root>
  );
};

export default DateField;
