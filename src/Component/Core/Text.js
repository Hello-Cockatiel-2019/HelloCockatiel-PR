import styled from 'styled-components'
import FontSize ,{ FontFamily } from '../../Config/Fonts';
import color from '../../Config/Color';

export const Header = styled.div`
    font-family:${FontFamily};
    font-size: ${FontSize.Headline};
    color:${color.header};

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
    font-family:${FontFamily};
    font-size: ${FontSize.Title};
    color:${color.header};
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
    font-family:${FontFamily};
    font-size: ${FontSize.Subtitle};
    color:${color.header};
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
    font-family:${FontFamily};
    font-size: ${FontSize.Paragraph};
    color:${color.header};

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
`

export const Small = styled.div`
    font-family:${FontFamily};
    font-size: ${FontSize.Small};
    color:${color.name};

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

export const Small2 = styled.div`
    font-family:${FontFamily};
    font-size: ${FontSize.Small2};
    color:${color.name};

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



