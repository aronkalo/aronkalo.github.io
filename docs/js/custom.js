
export const changeColorScheme = (light) => {
    document.body.style.transitionDuration = '3.0s';
    document.body.style.backgroundColor = (light === true) ?  '#FFFFFF' : '#353C42';
}