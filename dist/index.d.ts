import { Selection } from 'd3-selection';
export type ActivityCalendarSVG = Selection<SVGSVGElement, unknown, null, undefined>;
export type ActivityCalendarMonth = {
    x: number;
    month: number;
};
export type ActivityCalendarGroup = {
    day: number;
    date: Date;
    count: number;
};
export type ActivityCalendarDay = {
    y: number;
    text: string;
};
export type ActivityCalendarWeekday = 'monday' | 'wednesday' | 'friday' | 'saturday' | 'sunday';
export type ActivityCalendarLegendValue = {
    min: number;
    title: string;
};
export type GitlabCalendarOptions = {
    daySize: number;
    hintText: string;
    daySpace: number;
    utcOffset: number;
    dayTitles: Record<ActivityCalendarWeekday, string>;
    monthsAgo: number;
    dateRange?: {
        start: Date;
        end: Date;
    };
    monthNames: string[];
    inputFormat: string;
    weekdayNames: string[];
    legendValues: ActivityCalendarLegendValue[];
    firstDayOfWeek: number;
    tooltipDateFormat: string;
    tooltipFormatter: (count: number, dayName: string, dateText: string) => string;
};
export declare class GitlabCalendar {
    private _daySizeWithSpace;
    private _millisecondsPerDay;
    private _defaultOptions;
    private svg;
    private months;
    private timestamps;
    options: GitlabCalendarOptions;
    constructor(container: HTMLElement, data: Record<string, number>, options: Partial<GitlabCalendarOptions>);
    private buildArrays;
    private getDayName;
    private getDayDifference;
    private getSystemDate;
    private formatTooltipText;
    private getLevelFromContributions;
    private getLevelLinear;
    private getExtraWidthPadding;
    private renderSvg;
    private renderStyle;
    private dayYPos;
    private renderDays;
    private renderDayTitles;
    private renderMonths;
    private renderKey;
    private renderHint;
    private addTitles;
}
export default GitlabCalendar;
