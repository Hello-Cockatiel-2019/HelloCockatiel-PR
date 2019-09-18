import styled from 'styled-components'
import FontSize from '../../Config/Fonts';
import color from '../../Config/Color';

export const Header = styled.div`
    font-size: ${FontSize.headline};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.mobileHeadline};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileHeadline};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileHeadline};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.mobileHeadline};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.mobileHeadline};
    } 
`

export const Title = styled.div`
    font-size: ${FontSize.title};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.mobileTitle};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileTitle};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileTitle};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.mobileTitle};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.mobileTitle};
    } 
`

export const Subtitle = styled.div`
    font-size: ${FontSize.subtitle};
    color:${color.font1};
    
    @media(max-width:576px) {
        font-size: ${FontSize.mobileSubtitle};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileSubtitle};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileSubtitle};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.mobileSubtitle};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.mobileSubtitle};
    } 
    
`

export const Paragraph = styled.div`
    font-size: ${FontSize.paragraph};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.mobileParagrash};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileParagrash};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileParagrash};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.mobileParagrash};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.mobileParagrash};
    }
`

export const BrownParagraph = styled(Paragraph)`
    color:${color.font2};
`

export const Small = styled.div`
    font-size: ${FontSize.small};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.mobileSmall};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileSmall};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileSmall};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.mobileSmall};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.mobileSmall};
    } 
`

export const BrownSmall = styled(Small)`
    color:${color.font2};
`

export const Small2 = styled.div`
    font-size: ${FontSize.small2};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.mobileSmall2};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileSmall2};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.mobileSmall2};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.mobileSmall2};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.mobileSmall2};
    } 
`



