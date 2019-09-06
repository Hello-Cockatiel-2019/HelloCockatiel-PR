import styled from 'styled-components'

const Background = styled.div`
    background-image:url('/images/Background/${props => props.bgImgURL}');
    min-height: 100vh;
    background-repeat:no-repeat;
    background-position: center;
    background-attachment: fixed;
    padding:0;
    margin:0;
`
export default Background