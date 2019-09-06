import styled from 'styled-components'
import FontSize from '../../Config/Fonts';
import color from '../../Config/Color';

export const Header = styled.div`
    font-size: ${FontSize.Headline};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.MHeadline};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.MHeadline};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.MHeadline};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.MHeadline};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.MHeadline};
    } 
`

export const Title = styled.div`
    font-size: ${FontSize.Title};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.MTitle};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.MTitle};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.MTitle};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.MTitle};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.MTitle};
    } 
`

export const Subtitle = styled.div`
    font-size: ${FontSize.Subtitle};
    color:${color.font1};
    
    @media(max-width:576px) {
        font-size: ${FontSize.MSubtitle};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.MSubtitle};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.MSubtitle};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.MSubtitle};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.MSubtitle};
    } 
    
`

export const Paragraph = styled.div`
    font-size: ${FontSize.Paragraph};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.MParagrash};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.MParagrash};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.MParagrash};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.MParagrash};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.MParagrash};
    }
`

export const BrownParagraph = styled(Paragraph)`
    color:${color.font2};
`

export const Small = styled.div`
    font-size: ${FontSize.Small};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.MSmall};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.MSmall};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.MSmall};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.MSmall};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.MSmall};
    } 
`

export const BrownSmall = styled(Small)`
    color:${color.font2};
`

export const Small2 = styled.div`
    font-size: ${FontSize.Small2};
    color:${color.font1};

    @media(max-width:576px) {
        font-size: ${FontSize.MSmall2};
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size: ${FontSize.MSmall2};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        font-size: ${FontSize.MSmall2};
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        font-size: ${FontSize.MSmall2};
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: ${FontSize.MSmall2};
    } 
`



