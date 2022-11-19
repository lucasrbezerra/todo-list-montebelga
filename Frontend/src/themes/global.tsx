import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.css-j204z7-MuiFormControlLabel-root {
    margin: 0;
}

.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    color: #D9D9D9 !important;
    border-color: #D9D9D9 !important;
}
.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    color: #D9D9D9 !important;
}
.css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: #D9D9D9 !important;
}
.css-i4bv87-MuiSvgIcon-root {
    fill: #D9D9D9 !important;
}

.rdrDefinedRangesWrapper {
    display: none;
}

.rdrDateRangePickerWrapper {
    width: 100%;
}
.rdrCalendarWrapper {
    width: 100%;
}
.rdrMonth {
    width: 100%;
}

.rdrDayEndOfMonth,
.rdrInRange, 
.rdrDayEndOfMonth,
.rdrStartEdge, 
.rdrDayEndOfWeek,
.rdrInRange,
.rdrDayEndOfWeek, 
.rdrStartEdge,
.rdrEndEdge,
.rdrDayHovered,
.rdrStartEdge,
.rdrEndEdge,
.rdrDayStartPreview,
.rdrDayInPreview,
.rdrDayEndPreview  {
    color: #881F3B !important;
    border-color: #881F3B !important;
}

.rdrDayToday .rdrDayNumber span::after {
    background: #881F3B !important;
}

.rdrDateDisplayItemActive {
    color: #881F3B !important;
    border-color: #881F3B !important;
}

`;
