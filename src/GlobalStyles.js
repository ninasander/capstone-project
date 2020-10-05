import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    box-sizing: border-box;
    
}
html{
    transform: scaleX(1) scaleY(1) !important;
}
body {
    font-size: 112.5%;
    margin: 0;
    background: var(--background-gradient);
    font-family: 'Gentium Book Basic', serif;
}

:root {
--background-gradient: linear-gradient(180deg, hsla(215, 36%, 18%, 1) 0%, hsla(214, 40%, 14%, 1) 51%, hsla(215, 62%, 9%, 1) 100%) fixed no-repeat;
--dark-blue: #152131;
--middle-blue: #233C52;
--light-blue: #476884;
--highlight-blue: #4683B7;
--dark-red: #BA162C;
--light-red: #FF778A;
--dark-green: #26951D;
--light-green: #BEF5C0;
}`
